import { Mail } from 'lucide-react'
import PremiumButton from '@/components/common/PremiumButton'

export default function Newsletter() {
  return (
    <section id="journal" className="bg-velmora-pearl px-5 py-10 text-velmora-ink sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-rose text-velmora-ink shadow-velmora">
        <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:p-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-nav text-velmora-goldDark">Velmora Notes</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Join for 10% off your first order</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-espresso">Receive private launches, care rituals, and gifting edits for quietly luminous pieces.</p>
          </div>
          <form className="flex flex-col gap-3 self-end sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-clay" />
              <input id="newsletter-email" type="email" placeholder="Email address" className="h-12 w-full border border-velmora-ivory bg-velmora-ivory pl-11 pr-4 text-sm text-velmora-ink placeholder:text-velmora-clay focus:border-velmora-gold focus:outline-none" />
            </div>
            <PremiumButton variant="dark" className="h-12">Join</PremiumButton>
          </form>
        </div>
      </div>
    </section>
  )
}
