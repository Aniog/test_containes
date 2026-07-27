function NewsletterSection() {
  return (
    <section id="journal" className="bg-stone-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] bg-amber-200 px-6 py-12 text-stone-950 shadow-xl shadow-amber-200/30 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-stone-700">Join the list</p>
              <h2 className="font-serif text-5xl leading-none sm:text-6xl">
                Join for 10% off your first order
              </h2>
              <p className="max-w-xl text-base leading-8 text-stone-800">
                Be first to know about limited drops, gift edits, and the styling notes behind our newest pieces.
              </p>
            </div>

            <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="h-14 rounded-full border border-stone-900/15 bg-stone-50 px-5 text-sm text-stone-900 outline-none placeholder:text-stone-500 focus:border-stone-900"
              />
              <button
                type="button"
                className="inline-flex h-14 items-center justify-center rounded-full bg-stone-950 px-6 text-sm uppercase tracking-[0.3em] text-stone-50 transition hover:bg-stone-800"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
