const NewsletterCard = () => {
  return (
    <section className="px-5 pb-20 sm:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-champagne px-6 py-10 text-obsidian shadow-panel sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-12 lg:py-12">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-brand text-obsidian/70">Velmora Letters</p>
          <h2 className="mt-3 font-serif text-4xl leading-none sm:text-5xl">Join for 10% off your first order</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-obsidian/78 sm:text-base">
            Receive early access to limited drops, styling notes, and gifting edits curated for the season.
          </p>
        </div>
        <form className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row lg:mt-0 lg:w-[28rem]">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email address"
            className="h-14 flex-1 rounded-full border border-obsidian/12 bg-ivory px-5 text-sm text-ink placeholder:text-ink/45 focus:outline-none focus:ring-2 focus:ring-obsidian/20"
          />
          <button
            type="submit"
            className="h-14 rounded-full bg-obsidian px-6 text-xs font-semibold uppercase tracking-brand text-ivory transition hover:bg-bronze"
          >
            Join now
          </button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterCard
