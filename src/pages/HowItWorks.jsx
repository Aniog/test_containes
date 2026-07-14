import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, MessageSquare, Search, ShieldCheck, Package, ClipboardCheck, Ship } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '1',
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product details, target price, quantity, quality standards, and timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: ['Product specifications & drawings', 'Target FOB/CIF price', 'Order quantity & frequency', 'Required certifications'],
  },
  {
    icon: Search,
    step: '2',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our verified supplier database, trade shows, and industry contacts to identify 3–5 qualified manufacturers that match your criteria.',
    details: ['Database & network search', 'Initial capability screening', 'Price & MOQ comparison', 'Shortlist presentation'],
  },
  {
    icon: ShieldCheck,
    step: '3',
    title: 'Factory Audit & Verification',
    desc: 'We visit the top candidates in person to verify production capacity, quality systems, certifications, and business legitimacy. You receive a detailed audit report.',
    details: ['On-site factory visit', 'Production line inspection', 'Certification verification', 'Detailed audit report'],
  },
  {
    icon: Package,
    step: '4',
    title: 'Sampling & Negotiation',
    desc: 'We arrange product samples from your chosen supplier, review them against your specs, and negotiate final pricing, payment terms, and production timeline.',
    details: ['Sample coordination', 'Quality review vs. specs', 'Price & terms negotiation', 'Contract finalization'],
  },
  {
    icon: ClipboardCheck,
    step: '5',
    title: 'Production Monitoring & QC',
    desc: 'During production, we conduct regular factory visits to track progress. Before shipment, we perform a thorough quality inspection using AQL standards.',
    details: ['Production progress tracking', 'In-line inspections', 'Pre-shipment QC (AQL)', 'Detailed photo reports'],
  },
  {
    icon: Ship,
    step: '6',
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight booking, export documentation, and container loading supervision. You receive tracking updates until goods arrive at your warehouse.',
    details: ['Freight booking & optimization', 'Export documentation', 'Loading supervision', 'Delivery tracking'],
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">How It Works</h1>
          <p className="mt-4 text-gray-200 text-lg max-w-2xl">
            Our structured 6-step process takes you from initial inquiry to delivered goods — with full transparency at every stage.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border hidden md:block" />
                )}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 bg-card rounded-xl border border-border p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">Step {step.step}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-primary">{step.title}</h2>
                    <p className="text-text-secondary text-sm mt-3 leading-relaxed">{step.desc}</p>
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-text-secondary">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 id="hiw-visual-title" className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
                Transparent Process, Reliable Results
              </h2>
              <p id="hiw-visual-desc" className="mt-4 text-text-secondary leading-relaxed">
                Every step is documented with photos, reports, and regular updates. You always know exactly where your order stands — no surprises, no guesswork.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center mt-6 bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors no-underline text-sm"
              >
                Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                data-strk-img-id="hiw-process-img-k2l3m4"
                data-strk-img="[hiw-visual-desc] [hiw-visual-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Sourcing process documentation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Ready to Get Started?</h2>
          <p className="mt-4 text-gray-200 text-lg">Submit your sourcing requirements and receive a proposal within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-accent text-white font-semibold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
