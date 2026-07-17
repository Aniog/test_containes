import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('Welcome to Velmora. Your 10% code is VELMORA10.')
    setEmail('')
  }

  return (
    <section id="journal" className="bg-velmora-ivory px-5 py-16 text-velmora-espresso sm:px-8 sm:py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl overflow-hidden bg-velmora-gold text-velmora-espresso shadow-soft">
        <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-espresso/75">Velmora letter</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-velmora-espresso sm:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-velmora-espresso/80">
              Receive new collection notes, care rituals, and early access to gift-ready edits.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-3" aria-label="Newsletter signup">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="min-h-14 flex-1 rounded-full border border-velmora-espresso/25 bg-velmora-porcelain px-5 text-sm text-velmora-espresso placeholder:text-velmora-cacao/60 outline-none transition focus:border-velmora-espresso"
              />
              <button
                type="submit"
                className="min-h-14 rounded-full bg-velmora-espresso px-7 text-xs font-bold uppercase tracking-[0.22em] text-velmora-porcelain transition hover:bg-velmora-cacao"
              >
                Join
              </button>
            </div>
            {message && <p className="text-sm font-semibold text-velmora-espresso" role="status">{message}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
