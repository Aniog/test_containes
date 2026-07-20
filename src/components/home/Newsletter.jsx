import { ArrowRight } from 'lucide-react'

const Newsletter = () => (
  <section className="bg-velmora-parchment px-5 py-16 text-velmora-espresso sm:px-8 md:py-24">
    <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-velmora-blush text-velmora-espresso shadow-soft md:rounded-[3rem]">
      <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_1fr] md:items-center md:p-14 lg:p-16">
        <div>
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.32em] text-velmora-goldDark">Velmora notes</p>
          <h2 className="mt-4 font-serif text-5xl font-medium leading-none text-velmora-espresso md:text-7xl">
            Join for 10% off your first order.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-velmora-taupe">
            Receive styling notes, gifting reminders, and early access to small-batch jewelry drops.
          </p>
        </div>
        <form className="rounded-3xl bg-velmora-ivory p-4 shadow-soft" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="min-h-14 flex-1 rounded-full border border-velmora-stone bg-velmora-ivory px-5 text-sm text-velmora-espresso placeholder:text-velmora-taupe focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/30"
            />
            <button
              type="submit"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-velmora-espresso px-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-espresso"
            >
              Sign up
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
)

export default Newsletter
