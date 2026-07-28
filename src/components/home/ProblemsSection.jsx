import { AlertTriangle, Check } from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader'
import { problemsSolved } from '@/data/siteContent'

export default function ProblemsSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Problems we solve"
            title="Reduce sourcing uncertainty before it becomes costly"
            description="Many sourcing issues come from unclear supplier capability, incomplete specifications, and weak follow-up. Our role is to make each step more visible and manageable."
            id="problems-section-title"
          />
          <div className="mt-8 rounded-3xl bg-brand-navy p-6 text-white">
            <div className="flex gap-4">
              <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-brand-amber" aria-hidden="true" />
              <p className="text-sm leading-6 text-blue-100">
                We do not promise every sourcing project will be simple. We help buyers ask the right questions, check the right details, and act early when risks appear.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          {problemsSolved.map((problem) => (
            <div key={problem} className="flex items-start gap-4 rounded-2xl border border-brand-line bg-white p-5 text-slate-900 shadow-sm">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-sky text-brand-blue">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="text-sm font-medium leading-6 text-slate-700">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
