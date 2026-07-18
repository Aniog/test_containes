const Newsletter = () => {
  return (
    <section className="bg-velmora-cream px-4 pb-16 text-velmora-ink sm:px-6 md:pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-espresso text-velmora-cream shadow-velvet">
        <div className="grid items-center gap-8 px-6 py-12 md:grid-cols-[1.1fr_0.9fr] md:px-12 lg:px-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-champagne">Private list</p>
            <h2 className="mt-4 font-serif text-5xl font-medium leading-none text-velmora-cream md:text-6xl">Join for 10% off your first order</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-cream/72">
              Receive early collection notes, gifting reminders, and quiet styling inspiration from Velmora.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="min-h-14 flex-1 border border-velmora-cream/25 bg-velmora-cream px-4 text-sm text-velmora-ink outline-none transition placeholder:text-velmora-espresso/55 focus:border-velmora-champagne"
            />
            <button type="submit" className="min-h-14 border border-velmora-champagne bg-velmora-champagne px-7 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink transition hover:bg-velmora-cream hover:border-velmora-cream">
              Join
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
