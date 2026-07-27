import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, FileText, ClipboardCheck, Truck, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Tell Us What You Need',
    desc: 'Share your product requirements, target specifications, budget, and order volume. We analyze your needs and prepare a sourcing plan.',
  },
  {
    step: '02',
    icon: FileText,
    title: 'Supplier Identification & Audit',
    desc: 'We search our network, shortlist candidates, conduct factory audits, verify certifications, and negotiate preliminary pricing.',
  },
  {
    step: '03',
    icon: ClipboardCheck,
    title: 'Sampling & Quality Control',
    desc: 'We coordinate samples for your approval, conduct in-process quality checks, and perform pre-shipment inspections.',
  },
  {
    step: '04',
    icon: Truck,
    title: 'Production & Delivery',
    desc: 'We monitor production milestones, manage logistics, handle export documentation, and track your shipment to destination.',
  },
]

export default function ProcessSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-gray-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
            Our Sourcing Process
          </h2>
          <p className="mt-4 text-navy-500 text-lg">
            A proven four-step approach to source products from China with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 h-full">
                  <span className="text-4xl font-extrabold text-brand-100 tracking-tight">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mt-3 mb-4">
                    <Icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <h3 id={`process-title-${item.step}`} className="text-base font-semibold text-navy-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-navy-500 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="aspect-[4/3] rounded-lg overflow-hidden mt-5 bg-gray-100">
                    <img
                      alt={item.title}
                      data-strk-img-id={`process-img-${item.step}-${idx}a7c3`}
                      data-strk-img={`[process-title-${item.step}] China manufacturing sourcing process`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="400"
                      className="w-full h-full object-cover"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                    <ArrowRight className="w-5 h-5 text-brand-300" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
          >
            Learn More About Our Process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}