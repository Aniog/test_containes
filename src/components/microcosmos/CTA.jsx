import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-white/5 bg-[#05060d] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-fuchsia-500/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
          <Mail className="h-3 w-3" /> Field Notes
        </span>

        <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-50 md:text-5xl">
          Send dispatches from the{' '}
          <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
            invisible world
          </span>{' '}
          to my inbox
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          Once a month: a new specimen, a new finding, a new way of seeing. No spam,
          no filler — only what's worth a second look under the lens.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status !== 'idle') setStatus('idle')
            }}
            placeholder="you@laboratory.earth"
            className="w-full rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-base text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Subscribe <Send className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-4 h-6 text-sm" aria-live="polite">
          {status === 'success' && (
            <p className="text-cyan-300">
              Welcome aboard. Watch for the first dispatch soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-rose-300">Please enter a valid email address.</p>
          )}
        </div>
      </div>
    </section>
  )
}
