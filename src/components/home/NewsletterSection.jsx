const NewsletterSection = () => {
  return (
    <section className="bg-stone-950 px-4 pb-16 text-stone-50 md:px-6 md:pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-amber-200/20 bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800 px-6 py-10 shadow-[0_22px_60px_rgba(0,0,0,0.24)] md:px-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-amber-200">Private list</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-50 md:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-stone-300 md:text-lg">
              Be first to hear about new drops, gifting edits, and quiet styling notes from Velmora.
            </p>
          </div>

          <form className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="min-h-14 flex-1 rounded-full border border-stone-700 bg-stone-950/70 px-5 text-sm text-stone-50 placeholder:text-stone-400 focus:border-amber-200 focus:outline-none"
            />
            <button
              type="submit"
              className="min-h-14 rounded-full bg-amber-200 px-6 text-sm font-medium text-stone-950 transition-colors hover:bg-amber-100"
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
