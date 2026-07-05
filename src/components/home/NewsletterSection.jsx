function NewsletterSection() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="section-shell">
        <div className="rounded-[36px] bg-velvet px-6 py-10 text-ivory shadow-luxe md:px-12 md:py-14">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
            <div>
              <p className="eyebrow text-ivory/68">Newsletter</p>
              <h2 className="mt-3 font-serif text-4xl leading-none md:text-5xl">
                Join for 10% off your first order
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-ivory/78">
                Receive first access to new drops, thoughtful gifting edits, and styling inspiration with a warm editorial point of view.
              </p>
            </div>

            <form className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="min-h-14 rounded-full border border-line-inverse bg-velvet-soft px-5 text-sm text-ivory placeholder:text-ivory/50 focus:border-champagne focus:outline-none"
              />
              <button
                type="submit"
                className="min-h-14 rounded-full bg-champagne px-6 text-sm uppercase tracking-[0.18em] text-velvet transition duration-300 hover:bg-champagne-deep"
              >
                Join Velmora
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
