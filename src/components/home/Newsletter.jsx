export default function Newsletter() {
  return (
    <section className="bg-velmora-ivory px-5 pb-16 text-velmora-espresso sm:px-8 md:pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-champagne text-velmora-espresso shadow-[0_30px_90px_rgba(33,25,21,0.12)]">
        <div className="grid gap-8 px-6 py-10 md:grid-cols-[1fr_1.1fr] md:items-center md:px-12 md:py-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-espresso/70">Velmora letter</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-velmora-espresso md:text-5xl">Join for 10% off your first order</h2>
          </div>
          <form className="grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="min-h-14 border border-velmora-espresso/25 bg-velmora-ivory px-4 text-sm text-velmora-espresso placeholder:text-velmora-espresso/55 focus:border-velmora-espresso focus:outline-none"
            />
            <button type="submit" className="min-h-14 bg-velmora-espresso px-7 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ivory transition-colors hover:bg-velmora-umber">
              Join now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
