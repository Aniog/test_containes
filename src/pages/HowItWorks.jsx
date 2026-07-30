import SEO from '@/components/layout/SEO'
import { ClipboardList, Search, Building2, ClipboardCheck, PackageCheck, Ship, Handshake } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Tell Us Your Needs',
    description: 'Start by sharing your product requirements: specifications, target price, order quantity, certifications, packaging needs, and destination. The more detail you provide, the better we can match you with the right suppliers.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Research',
    description: 'We search our verified supplier network and conduct fresh market research to build a shortlist of 3-5 factories that meet your criteria.',
  },
  {
    step: '03',
    icon: Building2,
    title: 'Factory Verification',
    description: 'We audit or visit the shortlisted factories to confirm business licenses, production capacity, equipment, quality systems, and export experience.',
  },
  {
    step: '04',
    icon: ClipboardCheck,
    title: 'Sampling & Quoting',
    description: 'We collect samples and detailed quotations, then help you compare options and negotiate terms before you place an order.',
  },
  {
    step: '05',
    icon: PackageCheck,
    title: 'QC & Production Tracking',
    description: 'Once production begins, we track milestones, perform inspections, and report progress so issues are caught and resolved early.',
  },
  {
    step: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We coordinate with freight forwarders, prepare export documents, and supervise container loading to ensure goods arrive as expected.',
  },
  {
    step: '07',
    icon: Handshake,
    title: 'Ongoing Support',
    description: 'After delivery, we remain available for reorders, supplier feedback, and continuous improvement on your next projects.',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <SEO
        title="How It Works | China Sourcing Process | SSourcing China"
        description="Learn how SSourcing China helps you source from China in 7 clear steps, from supplier research to shipping and delivery."
      />
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label text-brand-400">How It Works</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            A clear, 7-step sourcing process
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Transparency is key. We keep you informed at every stage so you know exactly where your project stands.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-page">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-slate-200" />
            <div className="space-y-12">
              {steps.map((item, index) => {
                const Icon = item.icon
                const isEven = index % 2 === 0
                return (
                  <div key={item.step} className="relative flex items-start lg:items-center gap-8">
                    <div className={`flex-1 ${isEven ? '' : 'lg:order-3'}`}>
                      <div className={`card p-6 lg:p-8 ${isEven ? 'lg:mr-12' : 'lg:ml-12'}`}>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-brand-700" />
                          </div>
                          <span className="text-4xl font-bold text-slate-200">{item.step}</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                        <p className="text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-700 border-4 border-white shadow z-10" />
                    <div className="flex-1 hidden lg:block" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
