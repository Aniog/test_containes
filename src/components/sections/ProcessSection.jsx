import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PROCESS_STEPS } from '@/data/content'
import { Section, SectionHeader } from '@/components/ui/Section'

export default function ProcessSection({ showCta = true }) {
  return (
    <Section id="process" className="bg-slate-50">
      <SectionHeader
        eyebrow="How It Works"
        title="A clear, step-by-step sourcing process"
        description="No black boxes. You always know where your order stands, from first inquiry to final delivery."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROCESS_STEPS.map((step) => {
          const Icon = step.icon
          return (
            <div
              key={step.id}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-3xl font-extrabold text-slate-200">
                  {step.step}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          )
        })}
      </div>

      {showCta && (
        <div className="mt-10 text-center">
          <Link to="/how-it-works" className="btn-outline">
            See the full process
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </Section>
  )
}
