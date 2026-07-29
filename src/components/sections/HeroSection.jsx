import { ArrowRight, CheckCircle, ClipboardCheck, Factory, Ship } from 'lucide-react'

const heroSupportCards = [
  { Icon: Factory, id: 'hero-card-supplier', text: 'Factory sourcing and supplier verification' },
  { Icon: ClipboardCheck, id: 'hero-card-quality', text: 'Quality inspection and production follow-up' },
  { Icon: Ship, id: 'hero-card-shipping', text: 'Export packing and shipping coordination' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-sourcing-navy text-white">
      <div
        className="absolute inset-0 opacity-25"
        data-strk-bg-id="hero-factory-qc-shipping-c4e8b2"
        data-strk-bg="[hero-card-quality] [hero-card-shipping] [hero-card-supplier]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-sourcing-navy via-sourcing-navy/90 to-sourcing-navy/60" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28 lg:px-8">
        <div className="max-w-3xl">
          <p id="hero-kicker" className="text-sm font-semibold uppercase tracking-[0.24em] text-sourcing-gold">
            China-based sourcing support for overseas buyers
          </p>
          <h1 id="hero-title" className="mt-5 text-4xl font-bold tracking-tight text-white md:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 text-lg leading-8 text-sourcing-mist md:text-xl">
            SSourcing China helps international companies find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with clear, practical communication.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#inquiry" className="inline-flex items-center justify-center gap-2 rounded-full bg-sourcing-blue px-7 py-4 text-base font-semibold text-white shadow-soft transition hover:bg-white hover:text-sourcing-navy">
              Get a Free Sourcing Quote
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="/services" className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-sourcing-navy">
              View services
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
          <div className="grid gap-4">
            {heroSupportCards.map(({ Icon, id, text }) => (
              <div key={id} className="flex items-center gap-4 rounded-2xl bg-white p-4 text-sourcing-ink shadow-soft">
                <span className="rounded-2xl bg-sourcing-cloud p-3 text-sourcing-blue"><Icon className="h-6 w-6" /></span>
                <span id={id} className="font-semibold">{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl bg-sourcing-navy/80 p-5 text-white">
            <p className="text-sm font-semibold uppercase tracking-wide text-sourcing-gold">What you receive</p>
            <ul className="mt-3 space-y-3 text-sm text-sourcing-mist">
              {['Supplier comparison notes', 'Practical risk observations', 'Photo-based updates and reports'].map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle className="h-5 w-5 shrink-0 text-sourcing-gold" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
