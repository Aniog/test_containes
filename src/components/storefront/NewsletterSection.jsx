export default function NewsletterSection() {
  return (
    <section className="px-4 pb-20 pt-6 md:px-8 md:pb-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[2rem] bg-velmora-noir px-6 py-10 text-velmora-ivory shadow-velvet md:flex-row md:items-center md:justify-between md:px-12 md:py-14">
        <div className="max-w-xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-velmora-gold/80">
            Velmora Notes
          </span>
          <h2 className="font-serif text-4xl leading-none md:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="text-sm leading-7 text-velmora-ivory/75 md:text-base">
            Be first to know about new drops, styling inspiration, and gift-ready edits.
          </p>
        </div>
        <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email address"
            className="h-14 flex-1 rounded-full border border-velmora-ivory/20 bg-velmora-ivory/10 px-6 text-sm text-velmora-ivory placeholder:text-velmora-ivory/50 focus:border-velmora-gold focus:outline-none"
          />
          <button
            type="submit"
            className="h-14 rounded-full bg-velmora-gold px-8 text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ink transition-transform duration-300 ease-velvet hover:-translate-y-0.5"
          >
            Join
          </button>
        </form>
      </div>
    </section>
  )
}
