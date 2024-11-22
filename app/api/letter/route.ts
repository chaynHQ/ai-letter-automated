import { NextResponse } from 'next/server'
import { generateText, tool } from 'ai'
import { langtail } from 'langtail/vercel-ai'

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()

    const { text } = await generateText({
      model: langtail('ellies-prompt'),
      prompt,
    })

    return NextResponse.json({ text })
  } catch (error) {
    console.error('Error in letter route:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
