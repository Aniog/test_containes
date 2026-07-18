const NewsletterBlock = () => {
  return (
    <section id="journal" className="section-padding scroll-mt-28 bg-velvet text-ivory md:scroll-mt-32">
      <div className="content-wrap">
        <div className="rounded-luxe border border-white/10 bg-champagne px-6 py-10 text-velvet shadow-floating sm:px-10 md:flex md:items-end md:justify-between md:gap-10">
          <div className="max-w-xl space-y-4">
            <p className="text-xs uppercase tracking-luxe text-velvet/70">Join Velmora</p>
            <h2 className="text-4xl leading-none text-velvet sm:text-5xl">Join for 10% off your first order</h2>
            <p className="text-sm leading-7 text-velvet/80">Be first to hear about new drops, gift edits, and styling notes from the journal.</p>
          </div>

          <form className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row md:mt-0">
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              className="min-h-12 flex-1 rounded-full border border-velvet/15 bg-mist px-5 text-sm text-velvet placeholder:text-velvet/45 focus:border-velvet focus:outline-none"
            />
            <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-full bg-velvet px-6 text-sm font-medium text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink">
              Join Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterBlock
