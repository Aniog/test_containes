const NewsletterSection = () => {
  return (
    <section className="px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-champagne px-6 py-10 text-obsidian shadow-soft md:px-12 md:py-14">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-brand text-truffle">Private Access</p>
            <h2 className="mt-3 font-display text-4xl leading-none md:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-truffle md:text-base">
              Subscribe for collection drops, gifting edits, and early access to limited Velmora releases.
            </p>
          </div>
          <form onSubmit={(event) => event.preventDefault()} className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <input
              type="email"
              placeholder="Email address"
              className="min-w-0 rounded-full border border-obsidian/20 bg-pearl px-5 py-4 text-sm text-obsidian placeholder:text-taupe focus:border-obsidian/40 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-obsidian px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-pearl transition duration-300 hover:bg-truffle"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
