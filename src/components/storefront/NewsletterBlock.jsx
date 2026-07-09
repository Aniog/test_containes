const NewsletterBlock = () => (
  <section id="newsletter" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
    <div className="mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-champagne/30 bg-espresso px-6 py-10 text-ivory shadow-soft sm:px-10 md:px-14 md:py-14">
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Private access</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-8 text-ivory/74 md:text-base">
            Receive early access to new drops, gifting edits, and the softly styled pieces our community keeps returning to.
          </p>
        </div>

        <form className="grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email address"
            className="h-14 rounded-full border border-ivory/20 bg-ivory px-5 text-sm text-espresso outline-none transition placeholder:text-ink-soft/70 focus:border-gold"
          />
          <button
            type="submit"
            className="inline-flex h-14 items-center justify-center rounded-full bg-gold px-6 text-sm font-medium uppercase tracking-[0.24em] text-ivory transition hover:bg-champagne hover:text-espresso"
          >
            Join now
          </button>
        </form>
      </div>
    </div>
  </section>
)

export default NewsletterBlock
