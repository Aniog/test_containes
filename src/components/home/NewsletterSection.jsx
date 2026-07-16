import Button from '@/components/ui/Button'

export default function NewsletterSection() {
  return (
    <section id="journal" className="bg-velmora-ivory px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-velmora-cocoa px-6 py-12 text-velmora-ivory shadow-velvet sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-velmora-gold">Newsletter</p>
            <h2 className="mt-3 font-heading text-4xl leading-tight text-velmora-ivory sm:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-velmora-ivory/75">
              Early access to capsule drops, styling notes, and gifting edits inspired by our editorial journal.
            </p>
          </div>

          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-sm text-velmora-ivory placeholder:text-velmora-ivory/50 focus:outline-none focus:ring-2 focus:ring-velmora-gold/70"
            />
            <Button size="lg" className="bg-velmora-gold text-velmora-ink hover:bg-velmora-rose">
              Join Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
