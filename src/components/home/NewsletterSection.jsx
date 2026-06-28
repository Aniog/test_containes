import Button from '@/components/ui/Button'

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="bg-stone-50 py-20 sm:py-24">
      <div id="journal" className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <div className="rounded-[2.5rem] bg-amber-200 px-6 py-12 text-center text-stone-950 shadow-[0_30px_80px_rgba(217,119,6,0.18)] sm:px-10 sm:py-16">
          <p className="text-xs uppercase tracking-[0.34em] text-stone-700">Newsletter</p>
          <h2 className="mt-4 font-[Cormorant_Garamond] text-5xl leading-none text-stone-950 sm:text-6xl">
            Join for 10% off your first order
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-stone-800 sm:text-base">
            Be first to access new capsule drops, styling notes, and gift edits curated for every season.
          </p>

          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="h-13 flex-1 rounded-full border border-stone-950/10 bg-stone-50 px-5 text-sm text-stone-950 outline-none placeholder:text-stone-500 focus:border-stone-950"
            />
            <Button variant="inverse" className="sm:min-w-[180px]">
              Join Velmora
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
