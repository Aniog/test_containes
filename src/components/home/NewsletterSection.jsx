const NewsletterSection = () => {
  return (
    <section className="page-shell py-20 sm:py-24">
      <div className="rounded-[32px] bg-velmora-gold px-6 py-10 text-center text-velmora-ivory shadow-velmora sm:px-10 sm:py-14">
        <p className="eyebrow-label mb-3 text-velmora-ivory/80">Insider access</p>
        <h2 className="text-4xl leading-none text-velmora-ivory sm:text-5xl">
          Join for 10% off your first order
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-velmora-ivory/88 sm:text-lg">
          Receive first access to product drops, styling notes, and thoughtful gifting edits.
        </p>

        <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            className="h-14 flex-1 rounded-full border border-white/30 bg-white/12 px-6 text-sm text-velmora-ivory placeholder:text-velmora-ivory/65 focus:border-white focus:outline-none"
          />
          <button
            type="submit"
            className="h-14 rounded-full bg-velmora-noir px-8 text-sm font-medium uppercase tracking-[0.22em] text-velmora-ivory transition duration-300 hover:bg-velmora-ink"
          >
            Join now
          </button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterSection
