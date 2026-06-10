import PageHeader from '../components/PageHeader'
import ProcessSection, { PROCESS_STEPS } from '../components/home/ProcessSection'
import InquirySection from '../components/home/InquirySection'
import { Clock, FileText, Users } from 'lucide-react'

const DETAILS = [
  {
    icon: Clock,
    title: 'Typical timeline',
    desc: 'Most new sourcing projects move from brief to first sample in 2–4 weeks, and to bulk shipment in 8–14 weeks, depending on tooling.',
  },
  {
    icon: FileText,
    title: 'What you receive',
    desc: 'Supplier comparison sheet, factory audit report, sample approval log, weekly production updates, QC report with photos and video.',
  },
  {
    icon: Users,
    title: 'Who you work with',
    desc: 'A dedicated English-speaking sourcing manager, supported by QC inspectors and freight specialists across our China hubs.',
  },
]

export default function HowItWorks() {
  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="A clear, accountable sourcing workflow"
        subtitle="The same disciplined process for every buyer — so milestones, costs, and quality standards are agreed upfront and tracked openly."
      />

      <ProcessSection />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DETAILS.map((d) => (
              <div key={d.title} className="rounded-xl border border-ink-200 bg-white p-6 md:p-8">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-sky text-brand-blue">
                  <d.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brand-navy">{d.title}</h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-ink-200 bg-surface-muted p-6 md:p-10">
            <h3 className="text-2xl font-semibold text-brand-navy">Project deliverables at each stage</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              {PROCESS_STEPS.map((s) => (
                <div key={s.n} className="flex gap-4">
                  <span className="text-sm font-semibold text-brand-blue mt-0.5">{s.n}</span>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">{s.title}</p>
                    <p className="mt-1 text-sm text-ink-700 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <InquirySection sourcePage="how-it-works" />
    </>
  )
}
