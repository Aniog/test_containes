export default function NewsletterSection() {
  return (
    <section className="container-shell pb-16 md:pb-24">
      <div className="rounded-[2.5rem] bg-velmora-noir px-6 py-10 text-white shadow-velvet md:px-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="space-y-4">
            <p className="section-eyebrow text-velmora-parchment/70">Velmora Insider</p>
            <h2 className="font-serif text-4xl leading-none text-white md:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="max-w-xl text-base leading-8 text-velmora-parchment/80">
              Be first to know about new arrivals, styling notes, and gifting edits curated with a quietly luxurious point of view.
            </p>
          </div>
          <form className="grid gap-4 sm:grid-cols-[1fr_auto]" onSubmit={(event) => event.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="h-14 rounded-full border border-white/15 bg-white/10 px-6 text-sm text-white placeholder:text-velmora-parchment/50 focus:border-velmora-gold focus:outline-none"
            />
            <button type="submit" className="premium-button h-14 justify-center">
              Join Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
