import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import SectionHeader from '../site/SectionHeader'
import { problems, trustPoints } from '../../content'

function ProblemsSection() {
  return (
    <section className="bg-white py-16 text-brand-ink lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Problems we solve"
            title="Reduce sourcing uncertainty before it becomes expensive"
            description="China sourcing can work well when supplier information, product expectations, and shipment details are checked early and followed consistently."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {trustPoints.map((point) => (
              <div key={point.value} className="rounded-2xl border border-brand-line bg-brand-bg p-5 text-brand-ink">
                <p className="font-semibold text-brand-navy">{point.value}</p>
                <p className="mt-2 text-sm leading-6 text-brand-ink/70">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-brand-line bg-brand-navy p-6 text-white shadow-xl shadow-brand-navy/15 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-amber">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">Common buyer risks</p>
              <h3 className="text-2xl font-semibold text-white">Issues we help clarify</h3>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {problems.map((problem) => (
              <div key={problem} className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-white">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-amber" />
                <p className="text-sm leading-6 text-white/80">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection
