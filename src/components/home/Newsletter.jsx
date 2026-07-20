export default function Newsletter() {
  return (
    <section className="bg-velmora-ivory px-5 py-16 text-velmora-espresso md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 bg-velmora-espresso px-6 py-10 text-velmora-cream shadow-editorial md:grid-cols-[1fr_1.1fr] md:items-center md:px-12 md:py-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Velmora private list</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-velmora-cream md:text-5xl">Join for 10% off your first order</h2>
          <p className="mt-4 text-sm leading-7 text-velmora-cream/75">Receive styling notes, early access, and gift-ready edits without the noise.</p>
        </div>
        <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
          <label className="sr-only" htmlFor="newsletter-email">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email address"
            className="min-h-14 flex-1 border border-velmora-cream/25 bg-velmora-cream/10 px-5 text-sm text-velmora-cream placeholder:text-velmora-cream/55 outline-none transition focus:border-velmora-champagne"
          />
          <button type="submit" className="min-h-14 rounded-full bg-velmora-champagne px-7 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-cream">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
