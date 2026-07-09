export default function NewsletterSection() {
  return (
    <section id="newsletter" className="rounded-[2rem] bg-velmora-cocoa px-6 py-10 text-velmora-mist shadow-lifted md:px-10 md:py-14">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div className="space-y-3">
          <p className="velmora-kicker !text-velmora-gold/80">Newsletter</p>
          <h2 className="font-display text-4xl text-velmora-mist md:text-5xl">Join for 10% off your first order</h2>
          <p className="max-w-2xl text-sm leading-7 text-velmora-mist/78">
            Receive new drops, styling notes, and gifting edits with a softly luxurious feel — never anything loud.
          </p>
        </div>
        <form className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email address"
            className="min-w-0 rounded-full border border-white/15 bg-white/10 px-5 py-4 text-sm text-velmora-mist placeholder:text-velmora-mist/55 focus:border-velmora-gold focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-velmora-bronze px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-velmora-ink transition hover:bg-velmora-gold"
          >
            Join
          </button>
        </form>
      </div>
    </section>
  )
}
