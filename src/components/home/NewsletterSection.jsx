export default function NewsletterSection() {
  return (
    <section className="bg-stone-950 py-20 sm:py-24">
      <div className="section-shell">
        <div className="rounded-[2.25rem] border border-amber-200/30 bg-amber-200 px-6 py-12 text-stone-950 shadow-2xl shadow-amber-200/10 sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-700">Private access</p>
            <h2 className="font-display text-5xl leading-none text-stone-950 sm:text-6xl">
              Join for 10% off your first order
            </h2>
            <p className="text-base leading-8 text-stone-700">
              Receive early access to capsule drops, gifting edits, and thoughtful styling notes from Velmora.
            </p>
          </div>
          <form className="mt-8 flex flex-col gap-3 lg:mt-0 lg:min-w-[380px]">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input id="newsletter-email" type="email" placeholder="Email address" className="h-14 flex-1 rounded-full border border-stone-900/10 bg-stone-50 px-5 text-sm text-stone-900 outline-none ring-0 placeholder:text-stone-500 focus:border-stone-900/30" />
              <button type="button" className="h-14 rounded-full bg-stone-950 px-7 text-sm font-semibold uppercase tracking-[0.22em] text-stone-50 transition hover:bg-stone-900">
                Join Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
