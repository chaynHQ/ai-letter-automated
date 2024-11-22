'use client'

import { useRouter } from 'next/navigation'
import { useChat } from 'ai/react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { LoadingScreen } from './LoadingScreen'

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
            placeholder="Type your complaint details here..."
            className="min-h-[200px] resize-none p-4"
            disabled={isLoading}
          />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-pink-200 hover:bg-pink-300 text-gray-800"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Submit'}
          </Button>
        </div>
      </form>
    </>
  )
}
