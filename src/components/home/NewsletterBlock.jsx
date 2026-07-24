const NewsletterBlock = () => {
  return (
    <section className="overflow-hidden rounded-[2.5rem] border border-brand-gold/20 bg-brand-ink text-stone-50 shadow-velvet">
      <div className="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-brand-gold">
            Private Access
          </span>
          <h2 className="font-serif text-4xl leading-none sm:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-stone-300 sm:text-base">
            Be first to know about new drops, gifting edits, and styling notes from the Velmora journal.
          </p>
        </div>

        <form className="grid gap-3 sm:grid-cols-[minmax(0,320px)_auto]" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            className="h-14 rounded-full border border-white/15 bg-white/10 px-5 text-sm text-stone-50 placeholder:text-stone-400 focus:border-brand-gold focus:outline-none"
          />
          <button
            type="submit"
            className="h-14 rounded-full bg-brand-gold px-6 text-sm font-medium uppercase tracking-[0.24em] text-brand-ink transition hover:bg-brand-mist"
          >
            Join now
          </button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterBlock
