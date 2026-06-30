export default function NewsletterSection() {
  return (
    <section className="bg-velmora-mist px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-velmora-bronze px-6 py-12 text-velmora-ivory shadow-velmora-lg sm:px-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-velmora-ivory/75">
              Velmora Letters
            </p>
            <h2 className="mt-4 font-serif text-5xl leading-none text-velmora-ivory">
              Join for 10% off your first order
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-8 text-velmora-ivory/78 md:text-base">
              Receive first access to drops, styling notes, and gifting edits curated
              for modern jewelry rituals.
            </p>
          </div>

          <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="h-12 rounded-full border border-white/20 bg-white/10 px-5 text-sm text-velmora-ivory placeholder:text-velmora-ivory/55 focus:border-white/40 focus:outline-none"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-velmora-ivory px-6 text-sm font-medium text-velmora-espresso transition hover:bg-[#fff8f0]"
            >
              Join Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
