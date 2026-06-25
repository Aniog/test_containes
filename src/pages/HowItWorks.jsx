import PageHeader from '../components/PageHeader.jsx'
import Process from '../components/home/Process.jsx'
import FAQ from '../components/home/FAQ.jsx'
import CTABanner from '../components/CTABanner.jsx'
import { Clock, FileCheck2, MessageSquare } from 'lucide-react'

export default function HowItWorks() {
  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="A clear, accountable sourcing workflow"
        subtitle="Every project follows the same documented process so you always know who is doing what, by when, and with what deliverable."
        crumbs={[{ label: 'How It Works' }]}
      />

      <section className="bg-white py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: Clock, title: 'Typical timeline', desc: '6-14 weeks from first inquiry to first shipment, depending on product complexity and sample rounds.' },
            { icon: FileCheck2, title: 'Documented work', desc: 'Audit reports, inspection reports and weekly production updates are saved to a shared folder you can access any time.' },
            { icon: MessageSquare, title: 'One point of contact', desc: 'Your project manager handles all coordination in English, then translates to suppliers in Chinese.' },
          ].map((c) => {
            const Icon = c.icon
            return (
              <div key={c.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#E63946]/10 text-[#E63946]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#0B2545]">{c.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      <Process />
      <FAQ />
      <CTABanner />
    </>
  )
}
