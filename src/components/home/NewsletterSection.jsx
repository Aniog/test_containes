const NewsletterSection = () => {
  return (
    <section id="newsletter" className="bg-stone-100 pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-stone-950 px-6 py-10 text-stone-50 shadow-2xl shadow-stone-950/20 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-amber-300">
              Insider access
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-4 text-base leading-7 text-stone-300">
              Sign up for early access to new drops, thoughtful gifting edits, and styling notes from Velmora.
            </p>
          </div>

          <form className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row lg:mt-0">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="h-14 flex-1 rounded-full border border-stone-700 bg-stone-900 px-5 text-sm text-stone-50 placeholder:text-stone-500 focus:border-amber-400 focus:outline-none"
            />
            <button
              type="submit"
              className="h-14 rounded-full bg-amber-400 px-6 text-xs font-semibold uppercase tracking-[0.28em] text-stone-950 transition duration-300 hover:bg-amber-300"
            >
              Join Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
