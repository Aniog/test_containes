const HomeNewsletter = () => {
  return (
    <section id="journal" className="bg-velmora-pearl py-16 md:py-24">
      <div className="page-shell">
        <div className="rounded-[2.5rem] bg-velmora-rose px-6 py-10 text-velmora-ink shadow-soft md:px-12 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr,1.1fr] lg:items-center">
            <div>
              <p className="section-kicker text-velmora-ink/55">Join the list</p>
              <h2 className="font-heading text-5xl leading-none md:text-6xl">
                Join for 10% off your first order
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-velmora-ink/72 md:text-base">
                Early access to new drops, styling notes, and gifting edits delivered with a soft touch.
              </p>
            </div>
            <form className="grid gap-3 sm:grid-cols-[1fr,auto]" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                className="field-input bg-velmora-pearl"
                placeholder="Enter your email"
              />
              <button type="submit" className="button-primary h-12">
                Join Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeNewsletter
