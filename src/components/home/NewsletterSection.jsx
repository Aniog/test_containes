const NewsletterSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
      <div className="rounded-[2.2rem] bg-neutral-950 px-6 py-10 text-stone-50 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-500">Join Velmora</p>
          <h2 className="mt-4 font-display text-4xl leading-none text-stone-50 sm:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="mt-4 text-base leading-7 text-stone-300">
            Receive styling notes, first access to new drops, and thoughtful gifting edits.
          </p>
        </div>
        <form className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row lg:mt-0 lg:w-full lg:max-w-md">
          <input
            className="min-h-14 flex-1 rounded-full border border-stone-700 bg-stone-900 px-5 text-sm text-stone-50 outline-none placeholder:text-stone-400 focus:border-amber-600"
            placeholder="Email address"
            type="email"
          />
          <button
            className="min-h-14 rounded-full bg-amber-600 px-6 text-sm font-medium uppercase tracking-[0.28em] text-stone-50 transition hover:bg-amber-700"
            type="submit"
          >
            Join
          </button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterSection
