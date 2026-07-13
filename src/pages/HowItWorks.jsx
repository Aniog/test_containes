import PageHeader from '@/components/layout/PageHeader'
import ProcessSection from '@/components/sections/ProcessSection'
import ProblemsSection from '@/components/sections/ProblemsSection'
import TrustSection from '@/components/sections/TrustSection'
import CTASection from '@/components/sections/CTASection'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Clock, FileText, MessageSquare } from 'lucide-react'

const EXPECTATIONS = [
  {
    icon: MessageSquare,
    title: 'Day 1: Free consultation',
    description:
      'We review your requirements and confirm whether we can help, with no obligation.',
  },
  {
    icon: Clock,
    title: 'Week 1: Shortlist & quote',
    description:
      'You receive a supplier shortlist with price benchmarks and a transparent service quote.',
  },
  {
    icon: FileText,
    title: 'Ongoing: Reports at every step',
    description:
      'Audit, inspection, and production reports with photos keep you informed throughout.',
  },
]

export default function HowItWorks() {
  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="How sourcing with us works"
        description="A transparent, milestone-based process that keeps you informed from first contact to final delivery."
      />
      <ProcessSection showCta={false} />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="What to expect"
          title="Your first weeks working with us"
          description="Here is what happens after you send your first inquiry."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {EXPECTATIONS.map((e) => {
            const Icon = e.icon
            return (
              <div key={e.title} className="card p-6 md:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {e.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      <ProblemsSection />
      <TrustSection />
      <CTASection />
    </>
  )
}
