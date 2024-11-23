'use client'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useChat } from 'ai/react'
import { useRouter } from 'next/navigation'
import { LoadingScreen } from './LoadingScreen'

function textAreaAdjust(element: HTMLTextAreaElement): void {
  element.style.height = "1px";
  element.style.height = `${element.scrollHeight + 5}px`;
}

export function ComplaintForm() {
  const router = useRouter()
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: '/api/chat',
      onFinish: (message) => {
        // Redirect to chat page with both submission and response
        router.push(
          `/complaint/chat?submission=${encodeURIComponent(
            input
          )}&response=${encodeURIComponent(message.content)}`
        )
      },
    })

  return (
    <>
      {isLoading && <LoadingScreen />}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Textarea
            value={input}
            onChange={handleInputChange}
            onInput={(e) => textAreaAdjust(e.target as HTMLTextAreaElement)}
            placeholder="Type your complaint details here..."
            className="min-h-[200px] resize-none p-4 bg-white rounded-lg border border-gray-200"
            disabled={isLoading}
          />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-pink-200 hover:bg-pink-300 font-normal text-gray-800 text-xl"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Submit'}
          </Button>
        </div>
      </form>
    </>
  )
}
