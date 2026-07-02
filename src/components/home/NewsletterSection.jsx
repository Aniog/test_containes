const NewsletterSection = () => {
  return (
    <section id="newsletter" className="bg-stone-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[36px] bg-amber-700 px-6 py-10 text-stone-50 shadow-[0_22px_60px_rgba(180,83,9,0.24)] md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.34em] text-amber-100">
                Join the list
              </p>
              <h2 className="mt-4 font-serif text-5xl leading-none text-stone-50 md:text-6xl">
                Join for 10% off your first order
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-amber-50">
                Subscribe for early access to drops, styling notes, gifting edits,
                and first notice when bestsellers return.
              </p>
            </div>

            <form className="grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="h-14 rounded-full border border-white/25 bg-white px-5 text-base text-stone-900 outline-none transition duration-300 placeholder:text-stone-500 focus:border-stone-900"
              />
              <button
                type="submit"
                className="h-14 rounded-full border border-stone-900 bg-stone-900 px-7 text-xs font-medium uppercase tracking-[0.28em] text-stone-50 transition duration-300 hover:bg-stone-800"
              >
                Join now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
