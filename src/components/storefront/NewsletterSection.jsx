const NewsletterSection = () => {
  return (
    <section className="velmora-shell py-16 sm:py-20">
      <div className="rounded-[2rem] bg-velmora-blush px-6 py-10 text-velmora-ink shadow-velmora sm:px-10 lg:px-14 lg:py-14">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-luxe text-velmora-bronze">
            A welcome gift for your inbox
          </p>
          <h2 className="mt-4 font-display text-5xl text-velmora-ink sm:text-6xl">
            Join for 10% off your first order
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-velmora-cocoa/80">
            Be first to discover new drops, thoughtful styling notes, and gifting moments worth keeping.
          </p>
          <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-full border border-velmora-cocoa/15 bg-velmora-ivory px-6 text-sm text-velmora-ink placeholder:text-velmora-smoke focus:border-velmora-gold focus:outline-none"
            />
            <button type="submit" className="velmora-button-dark">
              Join Velmora
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
