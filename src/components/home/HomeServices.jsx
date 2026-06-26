import { Link } from 'react-router-dom'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import { SERVICES } from '@/data/siteContent'

export default function HomeServices() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Sourcing services that cover the whole journey"
          description="From finding the right factory to delivering inspected goods at your door, we manage every step as your on-the-ground team in China."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-accent hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon name={s.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.summary}</p>
              <Link
                to="/services"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dark"
              >
                Learn more
                <Icon name="ArrowRight" className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
