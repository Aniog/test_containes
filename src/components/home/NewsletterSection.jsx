function NewsletterSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
      <div className="rounded-[2.25rem] bg-amber-200 px-6 py-12 text-stone-950 shadow-[0_24px_70px_rgba(217,119,6,0.14)] md:px-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.32em] text-stone-700">Join the List</p>
            <h2 className="font-display text-4xl leading-none md:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-stone-800 md:text-base">
              Receive early access to limited edits, gifting notes, and styling stories that make everyday pieces feel special.
            </p>
          </div>

          <form className="flex w-full max-w-xl flex-col gap-4 sm:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="min-h-14 flex-1 rounded-full border border-stone-700/20 bg-stone-50 px-6 text-sm text-stone-900 placeholder:text-stone-500 focus:outline-none"
            />
            <button
              type="submit"
              className="min-h-14 rounded-full bg-stone-950 px-8 text-xs uppercase tracking-[0.28em] text-stone-100 transition hover:bg-stone-800"
            >
              Join Velmora
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
