import { ArrowRight } from 'lucide-react'

const Newsletter = () => (
  <section className="bg-velmora-cream px-4 pb-16 text-velmora-ink sm:px-6 md:pb-24 lg:px-8">
    <div className="mx-auto grid max-w-7xl items-center gap-8 bg-velmora-espresso px-6 py-10 text-velmora-cream shadow-soft md:grid-cols-[1.2fr_1fr] md:px-10 lg:px-14">
      <div>
        <p className="text-xs font-bold uppercase tracking-velmora text-velmora-champagne">Private list</p>
        <h2 className="mt-3 font-serif text-4xl leading-tight text-velmora-porcelain md:text-6xl">Join for 10% off your first order</h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-linen">
          Receive styling notes, new collection previews, and quiet gifting reminders from Velmora.
        </p>
      </div>
      <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
        <label className="sr-only" htmlFor="newsletter-email">Email address</label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Email address"
          className="min-h-12 flex-1 rounded-full border border-velmora-cream/20 bg-velmora-porcelain px-5 text-sm text-velmora-ink placeholder:text-velmora-clay focus:border-velmora-champagne focus:outline-none"
        />
        <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-velmora-gold px-6 text-xs font-bold uppercase tracking-velmora text-velmora-ink transition hover:bg-velmora-champagne">
          Join <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  </section>
)

export default Newsletter
