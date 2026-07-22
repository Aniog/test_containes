import Button from '@/components/ui/Button'

export default function Newsletter() {
  return (
    <section id="journal" className="bg-velmora-ivory px-5 py-16 text-velmora-espresso sm:px-8 md:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden bg-velmora-champagne text-velmora-espresso shadow-editorial">
        <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 md:p-14">
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-espresso/75">Velmora Notes</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight text-velmora-espresso md:text-6xl">Join for 10% off your first order.</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-velmora-espresso/80">Receive styling edits, gifting reminders, and first access to limited demi-fine drops.</p>
          </div>
          <form className="flex flex-col justify-end gap-4 bg-velmora-espresso p-8 text-velmora-porcelain md:p-14" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter-email" className="text-xs font-semibold uppercase tracking-luxury text-velmora-champagne">Email address</label>
            <input id="newsletter-email" type="email" placeholder="you@example.com" className="w-full border-b border-velmora-porcelain/35 bg-transparent px-0 py-4 text-base text-velmora-porcelain placeholder:text-velmora-porcelain/45 focus:border-velmora-champagne focus:outline-none" />
            <Button type="submit" variant="accent" className="mt-3 w-full">Join the List</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
