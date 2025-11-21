import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Placeholder submit handler — can be wired to backend later
    setTimeout(() => setStatus('Thanks! I will get back to you shortly.'), 900)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-8 sm:p-10 backdrop-blur">
          <h2 className="text-3xl font-bold text-white">Let’s talk</h2>
          <p className="mt-2 text-blue-200/85">Tell me about your project, timeline, and goals.</p>

          <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4">
            <input required placeholder="Name" className="w-full rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <input required type="email" placeholder="Email" className="w-full rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <textarea required rows="5" placeholder="What are you building?" className="w-full rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <button className="mt-2 inline-flex justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20 hover:opacity-95 transition">Send message</button>
          </form>
          {status && <p className="mt-4 text-cyan-300/90">{status}</p>}
        </div>
      </div>
    </section>
  )
}
