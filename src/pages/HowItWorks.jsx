import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { MessageSquare, Search, FlaskConical, Factory, ClipboardCheck, Ship, CheckCircle } from 'lucide-react'
import CTAButton from '@/components/shared/CTAButton'

const steps = [
  {
    icon: MessageSquare,
    number: '1',
    title: 'Submit Your Requirements',
    description: 'Fill out our inquiry form with your product details, specifications, target price, quantity, and any certification requirements. The more detail you provide, the faster we can match you.',
    timeline: 'Day 1',
  },
  {
    icon: Search,
    number: '2',
    title: 'Supplier Research & Shortlisting',
    description: 'Our sourcing team searches our verified supplier database and industry contacts to identify 3–5 qualified factories that match your criteria. We present options with pricing, MOQ, and capability comparisons.',
    timeline: 'Days 2–10',
  },
  {
    icon: FlaskConical,
    number: '3',
    title: 'Sampling & Evaluation',
    description: 'We arrange product samples from shortlisted suppliers. You evaluate quality, and we help negotiate final pricing, payment terms, and production timelines.',
    timeline: 'Days 10–20',
  },
  {
    icon: Factory,
    number: '4',
    title: 'Production & Monitoring',
    description: 'Once you confirm the order, we monitor production progress with regular factory visits. You receive weekly photo reports and timeline updates.',
    timeline: 'Days 20–50',
  },
  {
    icon: ClipboardCheck,
    number: '5',
    title: 'Quality Inspection',
    description: 'Before shipment, our inspectors conduct a thorough pre-shipment inspection following AQL standards. We send you a detailed report with photos and pass/fail results.',
    timeline: 'Days 50–55',
  },
  {
    icon: Ship,
    number: '6',
    title: 'Shipping & Delivery',
    description: 'We coordinate freight booking, prepare export documents, supervise container loading, and provide tracking until your goods arrive at your warehouse.',
    timeline: 'Days 55–75',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="hiw-page-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            How It Works
          </h1>
          <p id="hiw-page-subtitle" className="text-lg text-slate-300 max-w-2xl mx-auto">
            Our proven 6-step process takes you from product idea to delivered goods — with full transparency at every stage.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-accent-500/20 flex-shrink-0">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-full bg-slate-200 mt-3" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-navy-900">{step.title}</h3>
                    <span className="text-xs font-medium text-accent-500 bg-accent-500/10 px-2 py-0.5 rounded-full">
                      {step.timeline}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">What You Get at Each Stage</h2>
            <p className="text-slate-600 text-lg">Full transparency with documented deliverables</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Supplier Report', desc: 'Detailed comparison of vetted factories with pricing, capacity, and certifications.' },
              { title: 'Photo Reports', desc: 'Weekly production photos and videos showing progress and quality status.' },
              { title: 'Inspection Report', desc: 'Professional QC report with AQL results, defect photos, and pass/fail recommendation.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-slate-200">
                <CheckCircle className="w-8 h-8 text-emerald-500 mb-3" />
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Sourcing Project Today
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Submit your requirements and receive a free sourcing plan within 24 hours.
          </p>
          <CTAButton variant="white">Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}
