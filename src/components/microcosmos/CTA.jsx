import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 md:p-16">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl animate-drift"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl animate-drift"
            style={{ animationDelay: '-3s' }}
          />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-cyan-300/80">
                Stay curious
              </p>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-slate-50 leading-[1.1]">
                One drop of wonder, in your inbox.
              </h2>
              <p className="mt-5 text-base md:text-lg text-slate-300 leading-relaxed">
                Once a month, a single beautiful microbe — its story, its photograph,
                and what it reveals about the living world.
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-white/10 bg-slate-950/50 backdrop-blur p-6 md:p-7"
            >
              {submitted ? (
                <div className="text-center py-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                    <Send className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-50">
                    Welcome aboard.
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">
                    We'll send the next issue to{' '}
                    <span className="text-cyan-300">{email}</span>.
                  </p>
                </div>
              ) : (
                <>
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-widest text-slate-400"
                  >
                    Email address
                  </label>
                  <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/15 bg-slate-900 px-4 py-3 focus-within:border-cyan-300/60 transition-colors">
                    <Mail className="h-4 w-4 text-slate-400" />
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="naturalist@microcosmos.world"
                      className="flex-1 bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-200 hover:-translate-y-0.5 shadow-[0_0_30px_-8px_rgba(34,211,238,0.7)]"
                  >
                    Subscribe
                    <Send className="h-4 w-4" />
                  </button>
                  <p className="mt-3 text-xs text-slate-400">
                    No spam. Just biology, one organism at a time.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
