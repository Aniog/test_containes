export default function NewsletterSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="rounded-[2rem] bg-stone-950 px-6 py-10 text-stone-50 shadow-[0_28px_80px_rgba(28,25,23,0.18)] md:px-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.32em] text-amber-200">
              Join the List
            </p>
            <h2 className="font-serif text-4xl leading-none md:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="text-base leading-7 text-stone-300">
              Receive new drop previews, styling notes, and gifting reminders —
              always refined, never overwhelming.
            </p>
          </div>

          <form className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] lg:min-w-[460px]">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border border-white/15 bg-white px-5 py-4 text-sm text-stone-950 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
            />
            <button
              type="submit"
              className="rounded-full bg-amber-200 px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-stone-950 transition hover:bg-amber-100"
            >
              Join Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
