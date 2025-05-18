'use client'
import { useState } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

export default function Chatbot() {
  const { t } = useTranslation()
  const [messages, setMessages] = useState<{role: string, content: string}[]>([])
  const [input, setInput] = useState('')

  const sendMessage = async () => {
    if (!input.trim()) return
    const userMessage = { role: 'user', content: input }
    setMessages([...messages, userMessage])
    setInput('')

    // Call your backend API route that proxies to OpenAI
    const res = await axios.post('/api/chat', { messages: [...messages, userMessage] })
    setMessages([...messages, userMessage, res.data.reply])
  }

  return (
    <section className="max-w-5xl mx-auto mt-2 mb-10 w-full" id="chatbot">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">{t('Practice anytime right here!👇')}</h2>
          <p className="mt-4">{t("Meet your English Buddy! Practice when & where ever you want!")}</p>
        </div>
        <div className="min-h-[300px] rounded-xl border shadow-sm p-4 mt-8 mb-4 bg-zinc-50 dark:bg-zinc-950">
          {messages.map((m, i) => (
            <div key={i}><b>{m.role}:</b> {m.content}</div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            placeholder="What would you like to talk about or learn about? Type it in here..."
            className="flex-1 rounded-xl border pl-4"
          />
          <button 
            onClick={sendMessage}
            className="rounded-xl bg-secondary text-zinc-50 px-4 py-2 hover:bg-secondary/80 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  )
}