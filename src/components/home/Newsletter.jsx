export default function Newsletter() {
  return (
    <section className="bg-velmora-ivory px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl bg-velmora-gold px-6 py-12 text-center text-velmora-espresso shadow-editorial md:px-12 md:py-16">
        <p className="text-xs font-semibold uppercase tracking-luxury">Velmora letters</p>
        <h2 className="mt-3 font-serif text-5xl md:text-6xl">Join for 10% off your first order</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7">Receive styling notes, gifting reminders, and early access to new demi-fine arrivals.</p>
        <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input aria-label="Email address" type="email" placeholder="Email address" className="min-h-14 flex-1 border border-velmora-espresso bg-velmora-porcelain px-5 text-velmora-espresso placeholder:text-velmora-taupe" />
          <button type="submit" className="min-h-14 bg-velmora-espresso px-7 text-sm font-semibold uppercase tracking-luxury text-velmora-porcelain transition hover:bg-velmora-cocoa">Join</button>
        </form>
      </div>
    </section>
  )
}
