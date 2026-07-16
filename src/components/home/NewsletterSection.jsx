const NewsletterSection = () => {
  return (
    <section id="journal" className="pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-velmora-gold px-6 py-10 text-velmora-ink shadow-velmora md:px-10 lg:px-14 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-velmora-ink/70">Private access</p>
              <h2 className="mt-3 font-serif text-5xl leading-none md:text-6xl">
                Join for 10% off your first order
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-ink/75 md:text-base">
                Be first to see new drops, gift edits, and the pieces our community is wearing on repeat.
              </p>
            </div>
            <form className="grid gap-3 sm:grid-cols-[1fr,auto]">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-full border border-velmora-ink/15 bg-velmora-ivory px-5 py-4 text-sm text-velmora-ink placeholder:text-velmora-stone focus:outline-none"
              />
              <button
                type="button"
                className="rounded-full bg-velmora-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-velmora-panel"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
