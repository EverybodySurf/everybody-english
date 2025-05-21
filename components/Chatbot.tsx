'use client'
import { useState } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'

function VoiceOnIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 10v4h4l5 5V5l-5 5H3zm13.5 2c0-2.5-1.5-4.71-3.5-5.65v11.3c2-.94 3.5-3.15 3.5-5.65zm2.5 0c0 4.01-2.72 7.43-6.5 8.48v2.02c5.06-1.1 8.5-5.7 8.5-10.5s-3.44-9.4-8.5-10.5v2.02c3.78 1.05 6.5 4.47 6.5 8.48z"/>
    </svg>
  );
}

function VoiceOffIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.5 12c0-1.77-1-3.29-2.5-4.03v2.19l2.5 2.5V12zm3.19 7.19L4.81 4.81 3.39 6.22l5.27 5.27H3v4h4l5 5v-6.73l5.73 5.73 1.41-1.41z"/>
    </svg>
  );
}

export default function Chatbot() {
  const { t } = useTranslation()
  const [messages, setMessages] = useState<{role: string, content: string}[]>([])
  const [input, setInput] = useState('')
  const [voiceEnabled, setVoiceEnabled] = useState(true)

  const sendMessage = async () => {
    if (!input.trim()) return
    const userMessage = { role: 'user', content: input }
    setMessages([...messages, userMessage])
    setInput('')

    // Call your backend API route that proxies to OpenAI
    const res = await axios.post('/api/chat', { messages: [...messages, userMessage] })
    setMessages([...messages, userMessage, res.data.reply])

    // Add this block to call your TTS endpoint and play the audio
    // Only call TTS if voice is enabled
    if (voiceEnabled && res.data.reply?.content) {
      try {
        const ttsRes = await fetch('/api/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: res.data.reply.content }),
        });
        if (ttsRes.ok) {
          const audioBlob = await ttsRes.blob();
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          audio.play();
        }
      } catch (err) {
        // Optionally handle TTS errors here
        console.error('TTS error:', err);
      }
    }
  }

  return (
    <section className="max-w-5xl mx-auto mt-2 mb-10 w-full scroll-mt-30" id="chatbot">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">{t('Practice anytime right here!👇')}</h2>
          <p className="mt-4">{t("Meet your English Buddy! Practice when & wherever you want!")}</p>
        </div>
        <div className="min-h-[300px] rounded-xl border shadow-sm p-4 mt-8 mb-4 bg-zinc-50 dark:bg-zinc-950">
          {messages.map((m, i) => (
            <div key={i}><b>{m.role}:</b> {m.content}</div>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            placeholder="Say hello..."
            className="flex-1 rounded-xl border pl-4 py-2"
          />
          <button 
            onClick={sendMessage}
            className="rounded-xl bg-secondary text-zinc-50 px-4 py-2 hover:bg-secondary/80 transition-colors"
          >
            Send
          </button>
          <Button
            type="button"
            variant={voiceEnabled ? "default" : "outline"}
            onClick={() => setVoiceEnabled(v => !v)}
            aria-pressed={voiceEnabled}
            className="rounded-xl px-4 py-5 flex items-center gap-2"
          >
            {voiceEnabled ? <VoiceOnIcon className="w-5 h-5 text-zinc-50" /> : <VoiceOffIcon className="w-5 h-5 text-zinc-950 dark:text-zinc-50" />}
            {/*{voiceEnabled ? "Voice On" : "Voice Off"} */}
          </Button>
        </div>
      </div>
    </section>
  )
}