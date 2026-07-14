import Button from '@/components/ui/Button'

export default function Newsletter() {
  return (
    <section className="bg-velmora-porcelain px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-cocoa text-velmora-pearl shadow-soft">
        <div className="grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-14 lg:py-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-label text-velmora-gold">Private list</p>
            <h2 className="mt-3 font-serif text-5xl font-medium text-velmora-pearl">Join for 10% off your first order</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-pearl/78">Receive early access to new edits, care notes, and quiet gifting reminders.</p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" placeholder="Email address" className="min-h-12 flex-1 rounded-full border border-velmora-pearl/25 bg-velmora-pearl px-5 text-sm text-velmora-ink placeholder:text-velmora-cocoa/55 focus:border-velmora-gold focus:outline-none" />
            <Button type="submit" className="min-h-12">Join</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
