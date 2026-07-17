export default function NewsletterSection() {
  return (
    <section className="section-shell pb-16 pt-8 md:pb-24">
      <div className="section-frame overflow-hidden rounded-[34px] bg-velmora-champagne px-6 py-10 text-velmora-ink shadow-float md:px-10 md:py-14 lg:flex lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-xl space-y-4">
          <p className="text-xs uppercase tracking-luxe text-velmora-cocoa">Private Access</p>
          <h2 className="font-display text-4xl leading-none text-velmora-ink md:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="text-base leading-7 text-velmora-cocoa">
            Sign up for new drops, styling notes, and quietly exclusive offers.
          </p>
        </div>

        <form className="mt-8 flex flex-col gap-3 lg:mt-0 lg:min-w-[420px] lg:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email address"
            className="h-14 flex-1 rounded-full border border-velmora-ink/15 bg-velmora-parchment px-5 text-sm text-velmora-ink placeholder:text-velmora-cocoa/70 focus:outline-none focus:ring-2 focus:ring-velmora-ink/10"
          />
          <button type="submit" className="inline-flex h-14 items-center justify-center rounded-full border border-velmora-ink bg-velmora-ink px-7 text-xs font-medium uppercase tracking-luxe text-velmora-parchment transition-colors duration-300 hover:bg-velmora-cocoa">
            Join Now
          </button>
        </form>
      </div>
    </section>
  )
}
