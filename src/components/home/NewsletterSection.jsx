import { Button } from '@/components/ui/Button'

export function NewsletterSection() {
  return (
    <section className="bg-velmora-ink py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-white/10 bg-velmora-gold px-6 py-10 shadow-[0_24px_80px_rgba(184,149,93,0.25)] sm:px-10 sm:py-14">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.32em] text-velmora-ink/70">Newsletter</p>
            <h2 className="mt-4 font-display text-4xl text-velmora-ink sm:text-5xl">
              Join for 10% off your first order.
            </h2>
            <p className="mt-4 text-base leading-8 text-velmora-ink/80">
              Be first to know about new drops, gifting edits, and styling notes from the Velmora journal.
            </p>
          </div>
          <form className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="h-14 flex-1 rounded-full border border-velmora-ink/15 bg-velmora-porcelain px-5 text-sm text-velmora-espresso outline-none ring-0 placeholder:text-velmora-truffle/70"
            />
            <Button variant="light" className="h-14 bg-velmora-ink text-velmora-porcelain hover:bg-velmora-espresso">
              Join Velmora
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
