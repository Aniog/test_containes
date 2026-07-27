import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { problems } from '@/data/siteData'
import SectionIntro from './SectionIntro'

const solutions = [
  'Supplier information reviewed before you place orders',
  'Specifications, packaging, samples, and QC expectations clarified early',
  'Production milestones followed with documented updates',
  'Inspection and shipment handover coordinated before final release',
]

export default function ProblemsSection() {
  return (
    <section className="bg-white py-16 text-brand-navy md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionIntro
            eyebrow="Problems we solve"
            title="Reduce sourcing uncertainty before it becomes expensive"
            description="China sourcing works best when supplier selection, quality expectations, and shipping details are handled before production problems appear."
          />
          <div className="mt-8 overflow-hidden rounded-2xl border border-brand-line bg-brand-ice">
            {problems.map((problem) => (
              <div key={problem} className="flex gap-3 border-b border-brand-line p-4 last:border-b-0">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-none text-brand-amber" />
                <p className="text-sm leading-6 text-brand-slate">{problem}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-brand-navy p-4 text-white shadow-b2b">
          <img
            alt="Factory production follow-up and quality control checklist"
            className="h-64 w-full rounded-2xl object-cover md:h-80"
            data-strk-img-id="problems-factory-followup-90db64"
            data-strk-img="[problems-image-desc] [problems-image-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="p-5">
            <h3 id="problems-image-title" className="text-2xl font-bold tracking-tight">A practical sourcing control layer</h3>
            <p id="problems-image-desc" className="mt-3 text-sm leading-7 text-slate-200">
              SSourcing China helps buyers compare suppliers, keep production visible, and coordinate checks before goods leave the factory.
            </p>
            <div className="mt-6 grid gap-3">
              {solutions.map((solution) => (
                <p key={solution} className="flex items-start gap-3 text-sm leading-6 text-white">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-amber" />
                  {solution}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
