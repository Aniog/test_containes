import { Link } from 'react-router-dom'
import { ArrowRight, ClipboardCheck, Factory, PackageCheck, Search, Ship, TimerReset } from 'lucide-react'
import PageHero from '../components/site/PageHero'
import { services } from '../content'

const icons = [Search, ClipboardCheck, Factory, PackageCheck, TimerReset, Ship]

function Services() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="China sourcing services for supplier, quality, production, and shipping control"
        description="Use SSourcing China for one focused task or a complete sourcing workflow. We keep the work practical, documented, and aligned with buyer decisions."
      />
      <section className="bg-brand-bg py-16 text-brand-ink lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = icons[index]
              return (
                <article key={service.title} className="rounded-2xl border border-brand-line bg-white p-7 text-brand-ink shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-softBlue text-brand-blue">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-brand-navy">{service.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-brand-ink/70">{service.desc}</p>
                </article>
              )
            })}
          </div>
          <div className="mt-10 rounded-3xl bg-brand-navy p-8 text-white md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Need a practical sourcing plan?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75">Send your product details and tell us where you are in the buying process.</p>
            </div>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-amber md:mt-0">
              Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
