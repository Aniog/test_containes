const NewsletterSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="rounded-[36px] bg-velmora-champagne px-6 py-10 text-velmora-espresso shadow-[0_25px_60px_rgba(184,152,100,0.26)] md:px-12 md:py-14">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.35em] text-velmora-espresso/65">
                Join the list
              </p>
              <h2 className="mt-4 font-display text-4xl leading-none md:text-5xl">
                Join for 10% off your first order
              </h2>
              <p className="mt-4 text-base leading-8 text-velmora-espresso/80">
                Early access to limited drops, thoughtful gifting edits, and styling inspiration delivered with restraint.
              </p>
            </div>

            <form className="grid gap-3 sm:grid-cols-[minmax(0,320px)_auto]">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="h-14 rounded-full border border-velmora-espresso/20 bg-velmora-ivory px-5 text-sm text-velmora-ink outline-none transition placeholder:text-velmora-muted focus:border-velmora-espresso"
              />
              <button
                type="submit"
                className="inline-flex h-14 items-center justify-center rounded-full bg-velmora-espresso px-6 text-xs uppercase tracking-[0.34em] text-velmora-champagne transition hover:-translate-y-0.5 hover:bg-velmora-ink"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
