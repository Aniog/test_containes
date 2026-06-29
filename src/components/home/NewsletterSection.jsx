const NewsletterSection = () => {
  return (
    <section className="px-5 py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl bg-[var(--color-accent)] px-6 py-12 text-[var(--color-ink)] shadow-[var(--shadow-soft)] md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.38em] text-[var(--color-ink)]/80">
              Join Velmora Notes
            </p>
            <h2 className="font-serif-display text-4xl leading-none text-[var(--color-ink)] md:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="text-base leading-7 text-[var(--color-ink)]/75">
              Receive early access to launches, quiet gifting edits, and styling inspiration from the studio.
            </p>
          </div>
          <form className="grid gap-3 sm:grid-cols-[minmax(260px,1fr)_auto]">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="min-h-14 border border-[var(--color-ink)]/15 bg-white/80 px-5 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink)]/50 focus:outline-none"
            />
            <button
              type="submit"
              className="min-h-14 bg-[var(--color-ink)] px-6 text-xs uppercase tracking-[0.32em] text-[var(--color-text-on-dark)] transition hover:opacity-90"
            >
              Join now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
