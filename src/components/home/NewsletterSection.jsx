function NewsletterSection() {
  return (
    <section className="page-shell py-16 sm:py-20">
      <div className="rounded-panel bg-velmora-gold px-6 py-10 text-velmora-espresso shadow-soft sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-overline text-velmora-espresso/70">Private offers</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Join for 10% off your first order</h2>
          <p className="mt-4 text-sm leading-7 text-velmora-espresso/80 sm:text-base">
            Receive early access to launches, styling notes, and gifting edits made to be shared.
          </p>
        </div>
        <form className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:min-w-[420px]">
          <label className="sr-only" htmlFor="newsletter-email">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email address"
            className="h-14 flex-1 rounded-full border border-velmora-espresso/15 bg-velmora-mist px-5 text-sm text-velmora-espresso placeholder:text-velmora-taupe"
          />
          <button
            type="submit"
            className="h-14 rounded-full bg-velmora-espresso px-6 text-sm font-semibold uppercase tracking-overline text-white transition hover:opacity-90"
          >
            Join now
          </button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterSection
