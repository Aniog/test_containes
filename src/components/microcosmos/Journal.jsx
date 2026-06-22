import { useState } from 'react'
import { Mail, Check } from 'lucide-react'

export default function Journal() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="journal" className="relative py-24 md:py-32 overflow-hidden">
      {/* Layered background */}
      <div
        data-strk-bg-id="journal-bg-microcosmos-3a8c9d"
        data-strk-bg="[journal-subtitle] [journal-title] cells abstract microscope"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-center bg-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/85 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.12),transparent_70%)]" />

      <div className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-300/30 bg-cyan-300/5 text-cyan-200 text-xs tracking-[0.3em] uppercase">
          <Mail className="w-3.5 h-3.5" />
          The Journal
        </span>

        <h2
          id="journal-title"
          className="mt-8 font-serif font-light text-4xl md:text-6xl text-slate-50 tracking-tight"
        >
          One small wonder, every Sunday.
        </h2>
        <p
          id="journal-subtitle"
          className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed"
        >
          A weekly letter with a single, beautifully photographed organism — its
          biology, its ecology, and the human stories around it. No spam. No ads.
          Just the world looked at closely.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@curious.world"
            className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-white/15 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-300/60 focus:bg-white/10 transition-colors"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-cyan-400 text-slate-950 font-medium hover:bg-cyan-300 transition-colors"
          >
            {submitted ? (
              <>
                <Check className="w-4 h-4" />
                Subscribed
              </>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-sm text-emerald-300">
            Welcome aboard. Look out for our first letter on Sunday.
          </p>
        )}

        <p className="mt-6 text-xs text-slate-500 tracking-wide">
          Free. Unsubscribe in one click. ~12,400 readers.
        </p>
      </div>
    </section>
  )
}
