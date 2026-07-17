const NewsletterSection = () => (
  <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    <div className="rounded-[2rem] bg-gold-400 px-6 py-12 text-velvet-950 shadow-lift sm:px-10 lg:px-14">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-velvet-800">Private access</p>
          <h2 className="font-serif text-4xl leading-none sm:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="max-w-md text-sm leading-7 text-velvet-800">
            Subscribe for early access to capsule drops, styling notes, and gifting edits curated by the Velmora team.
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
            className="h-14 rounded-full border border-velvet-800/10 bg-cream-50 px-6 text-sm text-velvet-950 outline-none transition placeholder:text-velvet-700 focus:border-velvet-800"
          />
          <button
            type="submit"
            className="h-14 rounded-full bg-velvet-950 px-7 text-sm font-semibold uppercase tracking-[0.28em] text-cream-50 transition hover:bg-velvet-900"
          >
            Join now
          </button>
        </form>
      </div>
    </div>
  </section>
)

export default NewsletterSection
