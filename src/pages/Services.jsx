import PageHero from '@/components/shared/PageHero'
import { services } from '@/data/site'
import Icon from '@/components/shared/Icon'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Sourcing services that protect your order end-to-end"
        subtitle="From supplier search to delivered goods, each service is a checkpoint designed to reduce risk and keep your order on track."
        bgQueryId="services-hero-bg-2b3c4d"
        bgQueryText="factory production line China manufacturing"
      />

      <section className="section-pad bg-canvas">
        <div className="container-page space-y-16">
          {services.map((s, idx) => (
            <div
              key={s.id}
              id={s.id}
              className={`grid gap-8 lg:grid-cols-2 lg:gap-12 items-center ${idx % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-white">
                  <Icon name={s.icon} className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-2xl md:text-3xl font-bold text-ink">{s.title}</h2>
                <p className="mt-4 text-muted leading-relaxed">{s.desc}</p>
                <ul className="mt-6 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-ink">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-verified" />
                      <span className="text-sm font-medium">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">What you get</h3>
                <dl className="mt-4 space-y-4 text-sm">
                  <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                    <dt className="text-muted">Deliverable</dt>
                    <dd className="font-semibold text-ink text-right">{s.title} report</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                    <dt className="text-muted">Typical turnaround</dt>
                    <dd className="font-semibold text-ink text-right">3–7 business days</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                    <dt className="text-muted">Reporting</dt>
                    <dd className="font-semibold text-ink text-right">Photos + written report</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Pricing</dt>
                    <dd className="font-semibold text-ink text-right">Transparent, agreed upfront</dd>
                  </div>
                </dl>
                <Link to="/contact" className="btn-primary mt-6 w-full">
                  Request this service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
