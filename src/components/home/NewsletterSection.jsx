const NewsletterSection = () => {
  return (
    <section className="rounded-[2rem] bg-velmora-ink px-6 py-10 text-velmora-parchment shadow-card sm:px-8 md:px-10 md:py-12">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-velmora-champagne">
            Join the list
          </p>
          <h2 className="font-display text-4xl leading-none sm:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="max-w-lg text-sm leading-7 text-velmora-champagne">
            Be first to know about new drops, gifting edits, and styling notes from the Velmora world.
          </p>
        </div>
        <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <input
            type="email"
            placeholder="Email address"
            className="h-14 rounded-full border border-velmora-champagne/20 bg-velmora-parchment px-5 text-sm text-velmora-ink outline-none placeholder:text-velmora-mist focus:border-velmora-bronze"
          />
          <button
            type="submit"
            className="h-14 rounded-full bg-velmora-bronze px-7 text-sm font-medium uppercase tracking-[0.24em] text-velmora-parchment transition hover:bg-velmora-champagne hover:text-velmora-ink"
          >
            Join Now
          </button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterSection
