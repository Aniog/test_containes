const Newsletter = () => (
  <section className="bg-velmora-ivory px-5 pb-16 text-velmora-ink sm:px-8 lg:px-10 lg:pb-24">
    <div className="mx-auto max-w-7xl bg-velmora-champagne px-6 py-12 text-velmora-ink shadow-soft sm:px-10 lg:px-16 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widerLuxury text-velmora-espresso/72">Private list</p>
          <h2 className="mt-3 font-serif text-5xl font-medium leading-tight text-velmora-ink">Join for 10% off your first order</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-espresso/76">Receive early access to new drops, refined styling notes, and thoughtful gifting reminders.</p>
        </div>
        <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email address"
            className="min-h-14 flex-1 border border-velmora-ink/20 bg-velmora-ivory px-5 text-sm font-semibold text-velmora-ink placeholder:text-velmora-espresso/55 focus:outline-none focus:ring-2 focus:ring-velmora-ink"
          />
          <button type="submit" className="min-h-14 bg-velmora-ink px-7 text-xs font-extrabold uppercase tracking-luxe text-velmora-ivory transition hover:bg-velmora-espresso">
            Join
          </button>
        </form>
      </div>
    </div>
  </section>
)

export default Newsletter
