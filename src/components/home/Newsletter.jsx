export default function Newsletter() {
  return (
    <section className="bg-velmora-ivory px-5 pb-16 text-velmora-espresso sm:px-8 md:pb-24">
      <div className="mx-auto max-w-7xl rounded-t-[3rem] bg-velmora-champagne px-6 py-12 shadow-soft md:px-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-cocoa">Velmora Notes</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold leading-tight md:text-6xl">Join for 10% off your first order</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-velmora-taupe">
            Receive early access to new edits, gifting notes, and warm styling inspiration.
          </p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Email address"
              className="min-h-14 flex-1 rounded-full border border-velmora-stone bg-velmora-pearl px-6 text-sm text-velmora-espresso placeholder:text-velmora-taupe"
            />
            <button type="submit" className="min-h-14 rounded-full bg-velmora-espresso px-7 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-pearl transition hover:bg-velmora-gold hover:text-velmora-espresso">
              Join
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
