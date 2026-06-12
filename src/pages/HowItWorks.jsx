import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, MessageSquare, Search, FileCheck, Factory, ClipboardCheck, Ship, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    id: 'step-inquiry',
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Inquiry',
    desc: 'Share your product requirements, target specifications, quantity, budget, and timeline. The more detail you provide, the better we can match you with the right suppliers.',
    details: ['Product description & specifications', 'Target unit price & total budget', 'Required quantity & MOQ flexibility', 'Delivery timeline & destination'],
  },
  {
    id: 'step-research',
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team researches the market, contacts potential suppliers, and creates a shortlist of 3-5 qualified manufacturers that match your criteria.',
    details: ['Database search & market research', 'Initial supplier screening', 'Capability & capacity verification', 'Shortlist presentation with comparisons'],
  },
  {
    id: 'step-verify',
    num: '03',
    icon: FileCheck,
    title: 'Verification & Samples',
    desc: 'We conduct factory audits on your shortlisted suppliers and coordinate sample production so you can evaluate quality firsthand.',
    details: ['On-site factory audit', 'Business license & certification check', 'Sample production coordination', 'Sample evaluation & feedback'],
  },
  {
    id: 'step-production',
    num: '04',
    icon: Factory,
    title: 'Order Placement & Production',
    desc: 'Once you approve a supplier, we help finalize contracts, manage payment milestones, and monitor production progress with regular updates.',
    details: ['Contract & payment term negotiation', 'Order confirmation & deposit', 'Weekly production progress reports', 'Issue identification & resolution'],
  },
  {
    id: 'step-qc',
    num: '05',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Before shipment, our QC team conducts thorough inspections following international standards to ensure your products meet specifications.',
    details: ['AQL-based sampling inspection', 'Functionality & appearance checks', 'Packaging & labeling verification', 'Detailed inspection report with photos'],
  },
  {
    id: 'step-shipping',
    num: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    desc: 'We coordinate the entire logistics process — from factory pickup to delivery at your warehouse — handling documentation and customs clearance.',
    details: ['Freight method selection (sea/air/rail)', 'Customs documentation preparation', 'Real-time shipment tracking', 'Delivery confirmation & follow-up'],
  },
]

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="hiw-title" className="text-4xl md:text-5xl font-bold text-slate-800">
              How It Works
            </h1>
            <p id="hiw-subtitle" className="mt-6 text-lg text-slate-600 leading-relaxed">
              Our structured 6-step process ensures transparency, quality, and reliability at every stage of your China sourcing project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-6 md:gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-sky rounded-full flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-0.5 flex-1 bg-slate-200 mt-3" />
                </div>
                <div className="pb-8">
                  <span className="text-sm font-bold text-sky">STEP {step.num}</span>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800 mt-1 mb-3">{step.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">What You Get</h2>
            <p className="mt-4 text-slate-600 text-lg">
              Throughout the process, you receive complete transparency and control.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-slate-100 p-6 text-center">
              <div className="text-3xl font-bold text-sky mb-2">24h</div>
              <p className="text-sm text-slate-600">Response time on all inquiries</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-100 p-6 text-center">
              <div className="text-3xl font-bold text-sky mb-2">Weekly</div>
              <p className="text-sm text-slate-600">Production progress reports</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-100 p-6 text-center">
              <div className="text-3xl font-bold text-sky mb-2">100%</div>
              <p className="text-sm text-slate-600">Transparency on costs & timelines</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-sky">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Start Your Sourcing Project Today</h2>
          <p className="mt-4 text-blue-100 text-lg">
            Submit your requirements and receive a free sourcing plan within 24 hours.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-sky px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
