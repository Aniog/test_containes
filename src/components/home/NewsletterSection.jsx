export default function NewsletterSection() {
  return (
    <section id="journal" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-[var(--color-accent)] px-6 py-12 text-[var(--color-bg)] shadow-[0_24px_80px_rgba(188,144,84,0.18)] md:px-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-[rgba(20,14,14,0.68)]">
              Join the List
            </p>
            <h2 className="font-serif text-4xl leading-none md:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="max-w-xl text-sm leading-7 text-[rgba(20,14,14,0.75)] md:text-base">
              Be first to see new drops, gifting edits, and styling notes from the Velmora journal.
            </p>
          </div>
          <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email address"
              className="w-full rounded-full border border-[rgba(20,14,14,0.16)] bg-[rgba(255,248,243,0.7)] px-5 py-4 text-sm text-[var(--color-bg)] placeholder:text-[rgba(20,14,14,0.5)] outline-none transition focus:border-[rgba(20,14,14,0.4)]"
            />
            <button
              type="submit"
              className="rounded-full bg-[var(--color-bg)] px-6 py-4 text-xs uppercase tracking-[0.28em] text-[var(--color-text-dark)] transition hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
