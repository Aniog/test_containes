const NewsletterSection = () => (
  <section className="bg-stone-50 py-16 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-[2.25rem] bg-stone-950 px-6 py-12 text-stone-50 shadow-[0_20px_60px_rgba(28,25,23,0.16)] sm:px-10 lg:px-14">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-amber-200">
              Private access
            </p>
            <h2 className="mt-4 font-['Cormorant_Garamond'] text-4xl leading-tight text-stone-50 sm:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-stone-300 sm:text-base">
              Be the first to know about limited drops, styling notes, and gift-worthy arrivals.
            </p>
          </div>

          <form className="grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="h-14 rounded-full border border-white/15 bg-white/8 px-5 text-sm text-stone-50 placeholder:text-stone-400 focus:border-amber-200 focus:outline-none"
            />
            <button
              className="h-14 rounded-full bg-amber-200 px-6 text-sm uppercase tracking-[0.24em] text-stone-950 transition duration-300 hover:bg-amber-300"
              type="submit"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
)

export default NewsletterSection
