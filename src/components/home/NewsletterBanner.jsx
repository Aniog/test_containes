function NewsletterBanner() {
  return (
    <section className="section-shell">
      <div className="rounded-[2.4rem] border border-amber-200/30 bg-amber-200 px-6 py-12 text-stone-950 shadow-[0_22px_65px_rgba(231,198,134,0.15)] sm:px-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-4">
            <p className="eyebrow text-stone-700">Private access</p>
            <h2 className="font-display text-4xl sm:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="max-w-xl text-sm leading-7 text-stone-700" id="newsletter">
              Early access to limited drops, styling notes, and gift-ready edits curated for quieter wardrobes.
            </p>
          </div>

          <form className="grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              className="h-14 rounded-full border border-stone-700/20 bg-stone-50 px-6 text-sm text-stone-950 outline-none transition placeholder:text-stone-500 focus:border-stone-950/40"
              id="newsletter-email"
              placeholder="Enter your email"
              type="email"
            />
            <button className="inline-flex h-14 items-center justify-center rounded-full bg-stone-950 px-7 text-xs font-semibold uppercase tracking-[0.24em] text-stone-50 transition hover:bg-stone-900" type="submit">
              Join Velmora
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterBanner
