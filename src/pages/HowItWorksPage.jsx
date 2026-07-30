import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

const steps = [
  {
    number: '01',
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product details, target price, quantity, quality standards, and timeline. The more detail you provide, the faster we can help.',
    highlights: ['Product specifications & drawings', 'Target FOB/CIF price', 'Order quantity & timeline', 'Quality standards & certifications needed'],
  },
  {
    number: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our database and visits markets to identify 3-5 qualified suppliers. We verify business licenses, assess production capacity, and request initial quotations.',
    highlights: ['Database of 10,000+ suppliers', 'On-site market visits', 'Business license verification', 'Initial price comparison report'],
  },
  {
    number: '03',
    title: 'Factory Audit & Verification',
    desc: 'We visit shortlisted factories to verify their capabilities, inspect production lines, review quality systems, and assess working conditions. You receive a detailed audit report.',
    highlights: ['On-site factory visits', 'Production line inspection', 'Quality system review', 'Detailed photo/video report'],
  },
  {
    number: '04',
    title: 'Sample Development & Approval',
    desc: 'We coordinate sample production, inspect samples against your specifications, and ship them to you for approval. We manage revisions until you are satisfied.',
    highlights: ['Sample coordination', 'Quality check before shipping', 'Revision management', 'Final approval confirmation'],
  },
  {
    number: '05',
    title: 'Production Monitoring',
    desc: 'Once you place the order, we monitor production progress with regular factory visits. You receive weekly updates with photos and timeline tracking.',
    highlights: ['Weekly progress reports', 'Photo documentation', 'Timeline tracking', 'Issue resolution'],
  },
  {
    number: '06',
    title: 'Quality Inspection',
    desc: 'Before shipment, our QC team conducts a thorough pre-shipment inspection using AQL standards. We check functionality, appearance, packaging, and labeling.',
    highlights: ['AQL sampling inspection', 'Functionality testing', 'Packaging verification', 'Detailed inspection report'],
  },
  {
    number: '07',
    title: 'Shipping & Delivery',
    desc: 'We coordinate logistics, prepare export documentation, book freight, and track your shipment until it arrives at your warehouse. We handle customs paperwork on the China side.',
    highlights: ['Freight booking & tracking', 'Export documentation', 'Container loading supervision', 'Delivery confirmation'],
  },
]

export default function HowItWorksPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-orange text-sm font-semibold uppercase tracking-wide">How It Works</span>
            <h1 id="hiw-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-2 mb-4">
              Our Sourcing Process
            </h1>
            <p id="hiw-page-subtitle" className="text-slate-300 text-lg leading-relaxed">
              A transparent, step-by-step process designed to minimize risk and maximize value for international buyers sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{step.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.highlights.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="ml-6 mt-4 border-l-2 border-dashed border-slate-200 h-4 md:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="hiw-visual-title" className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Transparent Communication at Every Step
              </h2>
              <p id="hiw-visual-desc" className="text-slate-600 leading-relaxed mb-6">
                You will never be left in the dark. Our team provides regular updates with photos, videos, and detailed reports. We use WeChat, WhatsApp, and email to keep you informed in real time.
              </p>
              <div className="space-y-3 mb-8">
                {['Dedicated project manager assigned to you', 'Real-time updates via your preferred channel', 'Photo and video reports from factory floor', 'Full transparency on pricing and timelines'].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center bg-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-dark transition text-sm"
              >
                Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div>
              <img
                data-strk-img-id="hiw-communication-3e7b9d"
                data-strk-img="[hiw-visual-desc] [hiw-visual-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Team communication and project management"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Get Started?"
        subtitle="Submit your sourcing requirements and receive a free proposal within 24 hours."
      />
    </div>
  )
}
