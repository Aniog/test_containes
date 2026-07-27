import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { services } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading'
import { ArrowRight } from 'lucide-react'

export default function ServicesOverview({ limit }) {
  const items = limit ? services.slice(0, limit) : services

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <SectionHeading
          eyebrow="What We Do"
          title="Sourcing services that cover the full journey"
          subtitle="From finding the right factory to delivering inspected goods, each service can be used on its own or combined into a complete sourcing program."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => {
            const Icon = Icons[s.icon] || Icons.Circle
            return (
              <div
                key={s.id}
                className="group flex flex-col rounded-xl border border-border-base bg-white p-7 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-body">
                  {s.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-slate-body"
                    >
                      <Icons.Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-action" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-accent hover:text-primary"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
