export default function Newsletter() {
  return (
    <section className="bg-velmora-ivory px-5 pb-16 text-velmora-ink sm:px-8 md:pb-24 lg:px-10">
      <div className="mx-auto max-w-7xl bg-velmora-ink px-6 py-12 text-velmora-ivory shadow-editorial sm:px-10 lg:px-16 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widerluxe text-velmora-gold">Velmora letters</p>
            <h2 className="mt-3 font-serif text-5xl leading-tight text-velmora-ivory md:text-6xl">Join for 10% off your first order.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-champagne">Receive thoughtful styling notes, new drops, and early access to gift-ready edits.</p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" placeholder="Email address" className="min-h-14 flex-1 border border-velmora-ivory/25 bg-velmora-ivory px-5 text-sm text-velmora-ink placeholder:text-velmora-taupe focus:border-velmora-gold focus:outline-none" />
            <button type="submit" className="min-h-14 bg-velmora-gold px-7 text-sm font-bold uppercase tracking-luxe text-velmora-ink transition hover:bg-velmora-bronze hover:text-velmora-ivory">Join</button>
          </form>
        </div>
      </div>
    </section>
  )
}
