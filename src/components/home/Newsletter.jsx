import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="bg-stone-50 px-5 py-16 text-stone-950 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden bg-amber-700 text-stone-50 shadow-xl">
        <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12 lg:p-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-50/80">
              A softer welcome
            </p>
            <h2 className="mt-3 font-serif text-5xl leading-tight text-stone-50 md:text-7xl">
              Join for 10% off your first order
            </h2>
          </div>
          <form className="flex flex-col justify-end gap-3" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter-email" className="text-sm leading-7 text-stone-50/90">
              Receive early access to drops, styling notes, and private gift edits.
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@example.com"
                className="min-h-14 flex-1 border border-stone-50/35 bg-stone-50 px-4 text-sm text-stone-950 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-950"
              />
              <button
                type="submit"
                className="inline-flex min-h-14 items-center justify-center gap-2 bg-stone-950 px-6 text-xs font-bold uppercase tracking-[0.24em] text-stone-50 transition hover:bg-stone-50 hover:text-stone-950"
              >
                Join <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
