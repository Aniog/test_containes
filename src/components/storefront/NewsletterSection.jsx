export default function NewsletterSection() {
  return (
    <section className="bg-[var(--velmora-rose)] py-16 md:py-24">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-[var(--velmora-ink)] px-6 py-10 text-white shadow-velmora md:px-12 md:py-14">
        <div className="space-y-5 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/55">Private list</p>
          <h2 className="text-4xl leading-none md:text-5xl">Join for 10% off your first order</h2>
          <p className="mx-auto max-w-xl text-sm leading-7 text-white/72 md:text-base">
            Early access to new drops, styling edits, gifting notes, and quietly elevated offers reserved for subscribers.
          </p>
        </div>

        <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email address"
            className="h-14 flex-1 rounded-full border border-white/15 bg-white px-6 text-sm text-[var(--velmora-ink)] outline-none placeholder:text-stone-400"
          />
          <button
            type="submit"
            className="h-14 rounded-full bg-[var(--velmora-gold)] px-8 text-xs uppercase tracking-[0.24em] text-[var(--velmora-ink)] transition hover:bg-[#c79d61]"
          >
            Join Now
          </button>
        </form>
      </div>
    </section>
  )
}
