import { ArrowRight } from 'lucide-react'

function NewsletterSection() {
  return (
    <section id="newsletter" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:px-10">
      <div className="rounded-[2rem] bg-champagne px-6 py-10 text-velvet shadow-card md:px-10 md:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-luxe text-velvet/75">Private access</p>
          <h2 className="font-serif text-4xl leading-none text-velvet md:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="text-sm leading-7 text-velvet/80 md:text-base">
            Be first to know about restocks, gifting edits, and softly limited seasonal drops.
          </p>
        </div>

        <form className="mt-8 flex flex-col gap-3 lg:mt-0 lg:min-w-[420px] lg:flex-row" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email address"
            className="h-14 flex-1 rounded-full border border-velvet/15 bg-ivory px-5 text-sm text-velvet outline-none placeholder:text-smoke"
          />
          <button
            type="submit"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-velvet px-6 text-xs uppercase tracking-luxe text-ivory transition hover:bg-truffle"
          >
            Join Now
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterSection
