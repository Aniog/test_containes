import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, FileText, Search, Factory, ClipboardCheck, Ship } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const phases = [
  {
    icon: FileText,
    title: '1. Discovery & Requirements',
    subtitle: 'We learn exactly what you need',
    desc: 'You fill out our inquiry form or schedule a call. We discuss your product specifications, target price range, required certifications, order quantities, and timeline. The more details you provide, the more targeted our search will be.',
    image: 'discovery',
  },
  {
    icon: Search,
    title: '2. Supplier Research & Matching',
    subtitle: 'We find the best suppliers for your product',
    desc: 'Using our network of vetted manufacturers and Chinese sourcing databases, we identify suppliers that match your criteria. We review their capabilities, past export experience, certifications, and client references before presenting our recommendations.',
    image: 'research',
  },
  {
    icon: Factory,
    title: '3. Factory Audit & Samples',
    subtitle: 'We verify before you commit',
    desc: 'Our team visits shortlisted factories in person. We verify business licenses, assess production lines, inspect quality control processes, and check working conditions. We also coordinate sample production so you can evaluate product quality firsthand.',
    image: 'audit',
  },
  {
    icon: ClipboardCheck,
    title: '4. Negotiation & Order Placement',
    subtitle: 'We help you secure the best terms',
    desc: 'We facilitate price negotiations, payment terms, delivery schedules, and contract details. Our team reviews all documents to ensure your interests are protected. Once agreed, we help place the order and confirm all specifications in writing.',
    image: 'negotiation',
  },
  {
    icon: BarChart,
    title: '5. Production Monitoring',
    subtitle: 'We keep your order on track',
    desc: 'Throughout manufacturing, we provide regular updates including photos from the production floor. We track raw material arrival, production milestones, and flag any delays or issues immediately so they can be addressed proactively.',
    image: 'monitoring',
  },
  {
    icon: Ship,
    title: '6. Quality Control & Shipping',
    subtitle: 'Your products, verified and delivered',
    desc: 'We conduct pre-shipment inspections to verify quality and quantity. Then we handle all logistics — export documentation, cargo booking, customs clearance, and tracking. Your goods are delivered to your door, anywhere in the world.',
    image: 'shipping',
  },
]

function BarChart(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  )
}

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F2B44] to-[#1B4A7A] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">How It Works</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Our six-step sourcing process is designed to minimize risk, ensure quality, and deliver results — from initial inquiry to final delivery.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {phases.map((phase, i) => (
              <div key={phase.title} className="lg:flex gap-10 items-start">
                <div className="lg:w-5/12 mb-6 lg:mb-0">
                  <div className="bg-light-bg rounded-lg overflow-hidden">
                    <img
                      data-strk-img-id={`how-it-works-${phase.image}-${i}`}
                      data-strk-img={`[phase-title-${i}] [phase-subtitle-${i}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={phase.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="lg:w-7/12">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary-blue/10 rounded flex items-center justify-center">
                      <phase.icon className="w-5 h-5 text-primary-blue" />
                    </div>
                    <span className="text-sm font-semibold text-primary-blue">Step {i + 1}</span>
                  </div>
                  <h2 id={`phase-title-${i}`} className="text-2xl font-bold text-dark-text mb-1">{phase.title}</h2>
                  <p id={`phase-subtitle-${i}`} className="text-lg text-medium-text mb-4">{phase.subtitle}</p>
                  <p className="text-medium-text">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-text text-center mb-12">What You Get When You Work With Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Dedicated account manager',
              'Regular progress updates',
              'Photo and video documentation',
              'Detailed inspection reports',
              'Supplier communication management',
              'End-to-end logistics support',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white border border-border rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0" />
                <span className="text-dark-text font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Start Your Sourcing Project</h2>
          <p className="text-lg text-blue-100 mb-8">
            Ready to find reliable suppliers and source products from China with confidence?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-accent-red-hover transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}