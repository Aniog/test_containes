const Newsletter = () => (
  <section className="bg-velmora-ivory px-5 pb-16 text-velmora-ink lg:px-10 lg:pb-24">
    <div className="mx-auto max-w-7xl overflow-hidden border border-velmora-line bg-velmora-forest text-velmora-cream shadow-soft">
      <div className="grid gap-8 px-6 py-12 md:grid-cols-[0.95fr_1.05fr] md:items-center md:px-10 lg:px-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-champagne">Velmora letters</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold leading-none text-velmora-cream md:text-6xl">Join for 10% off your first order.</h2>
        </div>
        <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
          <label className="sr-only" htmlFor="newsletter-email">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@example.com"
            className="min-h-14 flex-1 rounded-full border border-velmora-champagne/60 bg-velmora-cream px-6 text-sm text-velmora-ink placeholder:text-velmora-clay focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/30"
          />
          <button type="submit" className="min-h-14 rounded-full bg-velmora-gold px-8 text-sm font-extrabold uppercase tracking-[0.22em] text-velmora-ink shadow-glow transition hover:bg-velmora-champagne">
            Join
          </button>
        </form>
      </div>
    </div>
  </section>
)

export default Newsletter
