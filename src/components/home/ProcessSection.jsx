import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description: 'Share your product specifications, target price, quantity, and timeline. We accept sketches, samples, or detailed drawings.',
  },
  {
    number: '02',
    title: 'We Source & Verify Suppliers',
    description: 'Our team identifies qualified suppliers, checks credentials, and conducts on-site factory audits within 5-7 business days.',
  },
  {
    number: '03',
    title: 'Samples & Price Negotiation',
    description: 'We arrange product samples, negotiate pricing, and help you finalize terms before placing bulk orders.',
  },
  {
    number: '04',
    title: 'Production & Quality Control',
    description: 'We monitor production milestones, conduct in-line inspections, and perform pre-shipment QC using AQL standards.',
  },
  {
    number: '05',
    title: 'Shipping & Delivery',
    description: 'We handle all logistics including packing, customs documentation, freight booking, and door-to-door delivery.',
  },
]

export default function ProcessSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="How It Works"
          title="Your Sourcing Journey in 5 Steps"
          description="A straightforward process designed to minimize risk and maximize efficiency when importing from China."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-5 group">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-neutral-300 mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">{step.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}

            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline ml-17"
            >
              Learn more about our process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <img
              data-strk-img-id="process-factory-img"
              data-strk-img="[process-img-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Factory production line and quality control process"
              className="rounded-xl shadow-lg w-full object-cover"
              id="process-img-title"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
