import { Mail } from 'lucide-react'

export default function Newsletter() {
  return (
    <section id="journal" className="bg-velmora-porcelain px-4 pb-20 text-velmora-espresso sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-velmora-oxblood text-velmora-pearl shadow-velmora-card">
        <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Velmora Notes</p>
            <h2 className="mt-3 font-serif text-5xl leading-tight text-velmora-pearl sm:text-6xl">Join for 10% off your first order.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-porcelain/75">
              Receive styling rituals, gifting reminders, and early access to new demi-fine drops.
            </p>
          </div>
          <form className="flex flex-col justify-center gap-3" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter-email" className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">Email address</label>
            <div className="flex flex-col gap-3 rounded-[1.5rem] border border-velmora-pearl/20 bg-velmora-pearl/10 p-2 backdrop-blur sm:flex-row">
              <div className="flex min-h-12 flex-1 items-center gap-3 px-4 text-velmora-pearl">
                <Mail className="h-4 w-4 text-velmora-champagne" />
                <input id="newsletter-email" type="email" required placeholder="you@example.com" className="w-full bg-transparent text-sm text-velmora-pearl placeholder:text-velmora-porcelain/60 focus:outline-none" />
              </div>
              <button type="submit" className="rounded-full bg-velmora-champagne px-6 py-4 text-xs font-black uppercase tracking-[0.22em] text-velmora-espresso transition hover:bg-velmora-pearl">
                Subscribe
              </button>
            </div>
            <p className="text-xs leading-5 text-velmora-porcelain/65">No spam. Unsubscribe whenever the sparkle fades.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
