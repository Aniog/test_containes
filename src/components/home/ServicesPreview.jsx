import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import Button from '@/components/shared/Button'
import ServiceIcon from '@/components/shared/ServiceIcon'
import { services } from '@/data/content'

export default function ServicesPreview() {
  return (
    <section id="services" className="py-20 md:py-24 bg-white">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeader
            eyebrow="What We Do"
            title="End-to-end China sourcing, handled for you"
            description="From identifying the right factory to delivering goods to your warehouse, every step is managed by a single English-speaking team."
          />
          <Button as={Link} to="/services" variant="ghost" size="md" className="self-start md:self-auto">
            View all services
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s) => (
            <article
              key={s.id}
              className="group bg-white border border-brand-line rounded-xl p-6 md:p-7 hover:border-brand-ink/30 hover:shadow-md transition-all duration-200"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-brand-mist text-brand-ink group-hover:bg-brand-ink group-hover:text-white transition-colors">
                <ServiceIcon name={s.icon} className="w-5 h-5" />
              </div>
              <h3 className="mt-5 text-lg md:text-xl font-semibold text-brand-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm md:text-base text-brand-muted leading-relaxed">
                {s.summary}
              </p>
              <ul className="mt-4 space-y-1.5">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-brand-text/85"
                  >
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}