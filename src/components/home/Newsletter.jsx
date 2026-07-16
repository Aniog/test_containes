import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="bg-velmora-ivory px-4 py-20 text-velmora-espresso sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-velmora-gold text-velmora-espresso shadow-soft md:rounded-[3rem]">
        <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_1fr] md:p-12 lg:p-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-refined text-velmora-espresso/75">Private list</p>
            <h2 className="mt-4 font-display text-5xl font-medium leading-tight md:text-6xl">Join for 10% off your first order.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-velmora-espresso/80">Receive early access to new drops, care notes, and thoughtful gifting reminders.</p>
          </div>
          <form className="flex items-end" onSubmit={(event) => event.preventDefault()}>
            <div className="w-full rounded-full bg-velmora-ivory p-2 shadow-card md:flex">
              <input type="email" placeholder="Email address" aria-label="Email address" className="w-full rounded-full bg-transparent px-5 py-4 text-sm text-velmora-espresso placeholder:text-velmora-taupe focus:outline-none" />
              <button className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-velmora-espresso px-6 py-4 text-xs font-bold uppercase tracking-refined text-velmora-ivory transition hover:bg-velmora-cocoa md:mt-0 md:w-auto">
                Join <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
