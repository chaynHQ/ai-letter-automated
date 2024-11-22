import { NextResponse } from 'next/server'
import { streamText, tool } from 'ai'
import { langtail } from 'langtail/vercel-ai'
import z from 'zod'

export async function GET() {
  try {
    return NextResponse.json(
      { message: 'Chat API is working' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const result = await streamText({
      model: langtail('prompt'),
      messages: messages,
      tools: {
        interview_completed: tool({
          description: 'A summary of the completed interview',
          parameters: z.object({
            summary: z
              .string()
              .describe(
                'A summary of the gathered information from the interview'
              ),
          }),
        }),
      },
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error('Error in chat route:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
