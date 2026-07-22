const Newsletter = () => (
  <section className="bg-velmora-parchment px-4 pb-20 text-velmora-ink sm:px-6 lg:px-8 lg:pb-28">
    <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-velmora-blush text-velmora-ink shadow-soft">
      <div className="grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-14 lg:py-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">The private list</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-velmora-ink sm:text-5xl">Join for 10% off your first order</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-taupe">Receive styling notes, gifting reminders, and first access to limited Velmora drops.</p>
        </div>
        <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
          <label className="sr-only" htmlFor="newsletter-email">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email address"
            className="min-h-14 flex-1 rounded-full border border-velmora-line bg-velmora-ivory px-5 text-sm text-velmora-ink placeholder:text-velmora-taupe focus:border-velmora-gold focus:outline-none"
          />
          <button type="submit" className="min-h-14 rounded-full bg-velmora-ink px-7 text-xs font-bold uppercase tracking-[0.26em] text-velmora-ivory transition hover:bg-velmora-champagne hover:text-velmora-ink">
            Join
          </button>
        </form>
      </div>
    </div>
  </section>
)

export default Newsletter
