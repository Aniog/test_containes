import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const onSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="bg-velmora-ivory px-4 pb-20 text-velmora-ink sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-espresso text-velmora-porcelain shadow-velvet">
        <div className="grid lg:grid-cols-[1fr_0.9fr]">
          <div className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-luxury text-velmora-gold">Private list</p>
            <h2 className="font-serif text-4xl leading-tight text-velmora-porcelain sm:text-5xl">Join for 10% off your first order.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-champagne">
              Receive early access to new drops, styling notes, and gifting reminders before the season turns.
            </p>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col justify-center gap-4 border-t border-velmora-champagne/20 px-6 pb-10 sm:px-10 lg:border-l lg:border-t-0 lg:px-12 lg:py-16">
            <label htmlFor="newsletter-email" className="text-xs font-bold uppercase tracking-luxury text-velmora-gold">Email address</label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="min-h-12 flex-1 border border-velmora-champagne/50 bg-velmora-porcelain px-4 text-sm text-velmora-espresso placeholder:text-velmora-ink/45 outline-none transition focus:border-velmora-gold focus:ring-2 focus:ring-velmora-gold/30"
              />
              <button type="submit" className="min-h-12 bg-velmora-gold px-6 text-xs font-bold uppercase tracking-luxury text-velmora-espresso transition hover:bg-velmora-porcelain">
                Join
              </button>
            </div>
            {status === 'success' && <p className="text-sm text-velmora-champagne" role="status">Welcome to Velmora. Your first-order note is on its way.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
