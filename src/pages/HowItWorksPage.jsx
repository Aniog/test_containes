import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, MessageSquare, Search, Package, ClipboardCheck, Truck } from 'lucide-react'

const steps = [
  {
    id: 'step-1',
    number: '01',
    icon: MessageSquare,
    title: 'Share Your Requirements',
    desc: 'Fill out our inquiry form or send us an email with your product details. Include specifications, target price, quantity, quality standards, and delivery timeline.',
    details: [
      'Product specifications and drawings',
      'Target FOB/CIF price range',
      'Order quantity and MOQ flexibility',
      'Quality certifications needed',
      'Preferred delivery timeline',
    ],
  },
  {
    id: 'step-2',
    number: '02',
    icon: Search,
    title: 'Supplier Matching & Verification',
    desc: 'Our team searches our supplier database and industry contacts to find 3-5 qualified manufacturers. We verify each one through background checks and on-site visits.',
    details: [
      'Search across 10,000+ verified suppliers',
      'Business license and export history check',
      'On-site factory visit and capacity review',
      'Price and capability comparison report',
      'Shortlist presentation within 5-7 days',
    ],
  },
  {
    id: 'step-3',
    number: '03',
    icon: Package,
    title: 'Samples & Negotiation',
    desc: 'We arrange product samples from shortlisted suppliers, help you evaluate quality, and negotiate the best pricing and payment terms on your behalf.',
    details: [
      'Sample arrangement and shipping',
      'Quality evaluation and comparison',
      'Price negotiation and MOQ discussion',
      'Payment terms and contract review',
      'Final supplier selection support',
    ],
  },
  {
    id: 'step-4',
    number: '04',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    desc: 'Once you place the order, we monitor production progress and conduct inspections at key stages to ensure your products meet specifications.',
    details: [
      'Pre-production material inspection',
      'Weekly production progress updates',
      'During-production quality checks',
      'Pre-shipment final inspection (AQL)',
      'Detailed photo and defect reports',
    ],
  },
  {
    id: 'step-5',
    number: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight forwarding, prepare customs documentation, and track your shipment until it arrives safely at your warehouse.',
    details: [
      'Freight method selection (sea/air/rail)',
      'Customs documentation preparation',
      'Container loading supervision',
      'Real-time shipment tracking',
      'Delivery confirmation and follow-up',
    ],
  },
]

const HowItWorksPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="hiw-page-title" className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            How It Works
          </h1>
          <p id="hiw-page-subtitle" className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Our proven 5-step sourcing process takes you from product idea to delivered goods — with full transparency at every stage.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={step.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center text-lg font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="md:col-span-11">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="w-5 h-5 text-orange" />
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900">{step.title}</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">{step.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  {i < steps.length - 1 && (
                    <div className="mt-8 border-b border-slate-100" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="hiw-visual-title" className="text-3xl font-bold text-slate-900 tracking-tight">
                Your Sourcing Partner on the Ground in China
              </h2>
              <p id="hiw-visual-subtitle" className="mt-4 text-slate-600 leading-relaxed">
                With our team based in China's key manufacturing regions, we provide hands-on support that remote sourcing simply cannot match. From factory floors to shipping ports, we're there every step of the way.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-orange text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-orange-dark transition"
                >
                  Start Your Sourcing Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div>
              <img
                data-strk-img-id="hiw-visual-img-b9e2f4"
                data-strk-img="[hiw-visual-subtitle] [hiw-visual-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Sourcing team visiting Chinese factory"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Submit your sourcing requirements and receive a free proposal within 24 hours.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-dark transition"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorksPage
