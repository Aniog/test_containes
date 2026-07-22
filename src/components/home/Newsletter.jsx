import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="bg-velmora-cream px-5 py-16 text-velmora-ink sm:px-8 md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-blush text-velmora-ink shadow-soft">
        <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12 lg:p-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold-dark">First access</p>
            <h2 className="mt-3 font-serif text-5xl leading-none text-velmora-ink md:text-6xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-espresso">
              Receive styling notes, new collection previews, and thoughtful gifting reminders from Velmora.
            </p>
          </div>
          <form className="flex flex-col justify-center gap-3" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Email address"
                className="min-h-14 flex-1 border border-velmora-ink/20 bg-velmora-porcelain px-5 text-sm text-velmora-ink placeholder:text-velmora-espresso/70 focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/30"
              />
              <button
                type="submit"
                className="inline-flex min-h-14 items-center justify-center gap-3 bg-velmora-ink px-6 text-xs font-bold uppercase tracking-luxe text-velmora-porcelain transition hover:bg-velmora-gold hover:text-velmora-ink"
              >
                Sign Up
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs leading-5 text-velmora-espresso">No spam, only considered notes. Unsubscribe anytime.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
