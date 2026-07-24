const NewsletterSection = () => {
  return (
    <section className="overflow-hidden rounded-[36px] bg-velvet text-ivory shadow-soft">
      <div className="grid gap-8 px-6 py-10 md:grid-cols-[1fr_auto] md:items-end md:px-10 md:py-12 xl:px-14">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-eyebrow text-ivory-deep/70">Private access</p>
          <div className="space-y-3">
            <h2 className="font-serif text-4xl leading-none md:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="max-w-xl text-sm leading-7 text-ivory-deep/75">
              Subscribe for first access to new drops, styling inspiration, and beautifully timed gifting edits.
            </p>
          </div>
        </div>
        <form className="grid gap-3 md:min-w-[24rem] md:grid-cols-[1fr_auto]" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email address"
            className="rounded-full border border-white/15 bg-white/10 px-5 py-4 text-sm text-ivory placeholder:text-ivory-deep/60 focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-gold px-6 py-4 text-xs uppercase tracking-eyebrow text-velvet transition hover:bg-gold-deep hover:text-ivory"
          >
            Unlock Offer
          </button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterSection
