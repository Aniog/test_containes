import { Mail } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="bg-velmora-ivory px-4 pb-20 text-velmora-ink sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-blush text-velmora-ink shadow-[0_24px_65px_rgba(33,24,22,0.08)]">
        <div className="grid gap-8 px-6 py-12 md:grid-cols-[1fr_1.05fr] md:items-center md:px-12 lg:px-16 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-espresso">Velmora notes</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-velmora-ink sm:text-5xl">Join for 10% off your first order</h2>
            <p className="mt-4 text-sm leading-7 text-velmora-sable">Receive styling notes, early access, and softly edited gift guides.</p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-velmora-sable" />
              <input id="newsletter-email" type="email" placeholder="Email address" className="h-14 w-full rounded-full border border-velmora-mist bg-velmora-ivory px-12 text-sm text-velmora-ink placeholder:text-velmora-sable/70 outline-none transition focus:border-velmora-champagne" />
            </div>
            <button className="h-14 rounded-full bg-velmora-ink px-8 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ivory transition hover:bg-velmora-espresso">Sign Up</button>
          </form>
        </div>
      </div>
    </section>
  )
}
