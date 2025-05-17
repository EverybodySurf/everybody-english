import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
    })
    return Response.json({ reply: completion.choices[0].message })
  } catch (error) {
    console.error('API error:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
  }
}