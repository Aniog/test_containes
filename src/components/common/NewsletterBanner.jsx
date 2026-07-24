const NewsletterBanner = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-velmora-line bg-velmora-gold px-6 py-10 text-velmora-ink shadow-velmora sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-12">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-velmora-ink/70">
            Velmora Letters
          </p>
          <h2 className="mt-3 font-display text-4xl leading-none sm:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-ink/80 sm:text-base">
            Be first to know about limited drops, styling notes, and gift-worthy launches.
          </p>
        </div>

        <form className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row lg:mt-0" onSubmit={(event) => event.preventDefault()}>
          <input
            type="email"
            aria-label="Email address"
            placeholder="Email address"
            className="h-12 flex-1 rounded-full border border-velmora-ink/20 bg-white/85 px-5 text-sm text-velmora-ink placeholder:text-velmora-ink/50 focus:border-velmora-ink focus:outline-none"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-velmora-ink px-6 text-xs font-medium uppercase tracking-[0.28em] text-velmora-ivory transition hover:bg-velmora-bronze"
          >
            Join now
          </button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterBanner
