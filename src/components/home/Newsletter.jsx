export default function Newsletter() {
  return (
    <section className="bg-velmora-ivory px-5 py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-velmora-blush shadow-soft">
        <div className="grid gap-8 p-7 md:grid-cols-[1.1fr_0.9fr] md:p-12 lg:p-16">
          <div>
            <p className="section-kicker">Velmora letters</p>
            <h2 className="serif-heading mt-4 text-5xl md:text-7xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-cocoa">
              Receive styling notes, early collection access, and a first-order
              welcome for your next golden detail.
            </p>
          </div>
          <form className="flex flex-col justify-end gap-3" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter-email" className="text-xs font-bold uppercase tracking-nav text-velmora-bronze">
              Email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                className="min-h-14 flex-1 rounded-full border border-velmora-linen bg-velmora-ivory px-5 text-sm text-velmora-espresso placeholder:text-velmora-cocoa focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/25"
              />
              <button type="submit" className="premium-button min-h-14">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
