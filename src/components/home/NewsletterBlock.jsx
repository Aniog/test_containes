const NewsletterBlock = () => {
  return (
    <section className="bg-ivory px-4 pb-20 sm:px-6 sm:pb-24 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-noir px-6 py-12 text-ivory shadow-card sm:px-10 lg:flex lg:items-end lg:justify-between lg:gap-12">
        <div className="max-w-xl">
          <p className="eyebrow text-ivory/65">Private access</p>
          <h2 className="font-display text-4xl text-ivory sm:text-5xl">Join for 10% off your first order</h2>
          <p className="mt-4 text-base leading-7 text-ivory/70">
            Early access to new drops, styling notes, and gifting edits delivered with restraint.
          </p>
        </div>
        <form className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row lg:mt-0 lg:min-w-[420px]" onSubmit={(event) => event.preventDefault()}>
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email address"
            className="h-14 flex-1 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            className="h-14 rounded-full bg-gold px-6 text-sm uppercase tracking-brand text-noir transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            Join Now
          </button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterBlock
