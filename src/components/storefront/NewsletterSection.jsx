function NewsletterSection() {
  return (
    <section id="newsletter" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-gold px-6 py-12 text-umber shadow-soft sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.26em] text-umber/70">Newsletter</p>
          <h2 className="mt-4 font-serif text-4xl leading-none sm:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-umber/78">
            Receive early access to new drops, gifting edits, and styling notes designed to help your jewelry wardrobe feel considered, not crowded.
          </p>
        </div>
        <form className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:min-w-[25rem]">
          <input
            type="email"
            placeholder="Email address"
            className="min-h-14 flex-1 rounded-full border border-umber/15 bg-pearl px-5 text-sm text-umber outline-none placeholder:text-taupe focus:border-umber/35"
          />
          <button
            type="submit"
            className="min-h-14 rounded-full bg-espresso px-6 text-sm font-medium uppercase tracking-[0.22em] text-pearl transition hover:bg-walnut"
          >
            Join now
          </button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterSection
