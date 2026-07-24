const NewsletterSection = () => (
  <section className="px-6 py-20 lg:px-10 lg:py-28">
    <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-amber-200 px-6 py-12 text-stone-950 shadow-[0_24px_80px_rgba(251,191,36,0.16)] md:px-12 md:py-14">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="space-y-4">
          <p className="tracking-kicker text-xs uppercase text-stone-700">Join Velmora</p>
          <h2 className="font-display text-5xl font-semibold leading-none text-stone-950 md:text-6xl">
            Join for 10% off your first order
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-stone-700 md:text-base">
            Be first to see new drops, gifting edits, and editorial styling notes that make your jewelry wardrobe feel quietly complete.
          </p>
        </div>
        <form className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] lg:min-w-[28rem]">
          <input
            type="email"
            placeholder="Email address"
            className="h-14 rounded-full border border-stone-950/20 bg-stone-50 px-5 text-sm text-stone-950 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-950/20"
          />
          <button
            type="submit"
            className="h-14 rounded-full bg-stone-950 px-6 text-xs font-semibold uppercase tracking-[0.28em] text-stone-50 transition duration-300 hover:bg-stone-900"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </section>
)

export default NewsletterSection
