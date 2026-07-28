import { ShieldCheck } from 'lucide-react'
import VisualImage from '@/components/common/VisualImage'
import { trustPoints } from '@/data/siteContent'

export default function TrustSection() {
  return (
    <section className="bg-brand-navy py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p id="trust-eyebrow" className="text-sm font-semibold uppercase tracking-widest text-brand-amber">Trust points</p>
          <h2 id="trust-title" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for overseas buyers who need clear information from China
          </h2>
          <p id="trust-description" className="mt-5 text-lg leading-8 text-blue-100">
            Our work centers on practical evidence: supplier details, factory photos, sample feedback, inspection findings, and production status updates.
          </p>
          <div className="mt-10 grid gap-5">
            {trustPoints.map((point) => (
              <div key={point.value} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-brand-amber" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-white">{point.value}</h3>
                  <p className="mt-2 text-sm leading-6 text-blue-100">{point.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl">
          <div className="h-full min-h-96">
            <VisualImage
              alt="Supplier meeting and quality review in a China factory"
              imgId="trust-supplier-meeting-2b7f93"
              query="[trust-description] [trust-title] [trust-eyebrow]"
              ratio="3x4"
              width="900"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
