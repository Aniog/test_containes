function NewsletterSection() {
  return (
    <section className="velmora-container pb-16 md:pb-24">
      <div className="rounded-[2rem] bg-velmora-rose px-6 py-12 text-velmora-pearl shadow-soft sm:px-8 lg:flex lg:items-center lg:justify-between lg:px-12">
        <div className="max-w-2xl">
          <p className="velmora-eyebrow text-velmora-pearl/70">Newsletter</p>
          <h2 className="mt-4 font-display text-5xl text-velmora-pearl sm:text-6xl">
            Join for 10% off your first order
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-pearl/78">
            Be first to know about new drops, gifting edits, and styling notes from the Velmora journal.
          </p>
        </div>

        <form className="mt-8 flex w-full max-w-xl flex-col gap-3 lg:mt-0">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              className="h-14 flex-1 rounded-full border border-velmora-pearl/20 bg-velmora-pearl/10 px-5 text-sm text-velmora-pearl placeholder:text-velmora-pearl/55 focus:border-velmora-pearl focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center rounded-full bg-velmora-pearl px-6 text-sm font-medium uppercase tracking-[0.18em] text-velmora-ink transition hover:bg-velmora-gold hover:text-velmora-pearl"
            >
              Join Now
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default NewsletterSection
