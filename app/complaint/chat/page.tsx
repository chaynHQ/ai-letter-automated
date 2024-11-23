'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useChat } from 'ai/react'
import { Loader2 } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'

// Create a separate client component for the chat content
function ChatContent() {
  const searchParams = useSearchParams()
  const submission = searchParams.get('submission')
  const response = searchParams.get('response')
  const [completed, setCompleted] = useState(false)
  const [summary, setSummary] = useState('')
  const [letterText, setLetterText] = useState('')

  const router = useRouter()

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: '/api/chat',
      initialMessages: [
        {
          id: 'user-1',
          role: 'user',
          content: submission || '',
        },
        {
          id: 'assistant-1',
          role: 'assistant',
          content: response || '',
        },
      ],
      onToolCall: async ({ toolCall }) => {
        if (toolCall.toolName === 'interview_completed') {
          const summary = (toolCall.args as { summary: string }).summary
          setSummary(summary)

          // Make POST request to /api/letter
          try {
            const response = await fetch('/api/letter', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                prompt: summary,
              }),
            })

            const data = await response.json()
            setLetterText(data.text)
            setCompleted(true)
            sessionStorage.setItem('complaintLetter', data.text)
          } catch (error) {
            console.error('Error generating letter:', error)
          }
        }
      },
    })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - User Submission */}
        <div>
          <h2 className="text-2xl mb-6 border-b-2 border-pink-200 pb-2 inline-block">
            Your submission
          </h2>
          <Card className="p-6 bg-white">
            <div className="space-y-4 text-gray-700">
              <p>{submission}</p>
            </div>
          </Card>
        </div>

        {/* Right Column - Chat Interface */}
        <div>
          <h2 className="text-2xl mb-6 border-b-2 border-pink-200 pb-2 inline-block">
            Our Questions
          </h2>
          <div className="space-y-4">
            {messages.map(
              (message, index) =>
                message.role !== 'system' && (
                  <Card
                    key={message.id}
                    className={`p-4 ${
                      message.role === 'user' ? 'bg-pink-100 ml-12' : 'bg-white'
                    }`}
                  >
                    <pre className="text-gray-700 whitespace-pre-wrap font-sans">
                      {message.content}
                    </pre>
                    {message.role === 'assistant' &&
                      completed &&
                      index === messages.length - 1 && (
                        <Button
                          className="bg-pink-200 hover:bg-pink-300 text-gray-800 mt-4"
                          onClick={() => {
                            sessionStorage.setItem('complaintSummary', summary)
                            router.push(
                              `/complaint/letter?submission=${encodeURIComponent(
                                submission || ''
                              )}`
                            )
                          }}
                        >
                          Continue
                        </Button>
                      )}
                  </Card>
                )
            )}

            {isLoading && (
              <div className="flex justify-center">
                <Loader2 className="h-6 w-6 animate-spin text-pink-500" />
              </div>
            )}

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex gap-4">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your message"
                  className="flex-grow p-4 rounded-lg border-gray-200"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  className="bg-peach-400 hover:bg-peach-300 text-gray-800"
                  disabled={isLoading}
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Help Notice */}
      {/* <div className="mt-12 bg-pink-100 p-6 rounded-lg flex items-start gap-4"> */}
        {/* <div className="p-2 bg-white rounded-full">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 8v4M12 16h.01" />
          </svg>
        </div> */}
        {/* <div>
          <p className="font-medium">Do you need immediate help?</p>
          <p>Call the police or try these resources.</p>
        </div> */}
      {/* </div> */}
    </div>
  )
}

// Modify the main page component
export default function ChatPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatContent />
    </Suspense>
  )
}
