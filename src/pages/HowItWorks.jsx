import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, MessageSquare, Search, ShieldCheck, Package, ClipboardCheck, Ship, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product details, target price, quantity, quality standards, and timeline. The more detail you provide, the faster we can find the right match.',
    details: ['Product specifications & drawings', 'Target unit price & total budget', 'Required certifications or standards', 'Desired delivery timeline'],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlist',
    desc: 'Our sourcing team searches our database and the market to identify 3-5 qualified suppliers. We present a detailed comparison including pricing, capabilities, and lead times.',
    details: ['Database search + market outreach', 'Initial capability screening', 'Price & lead time comparison table', 'Recommendation with rationale'],
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Audit & Verification',
    desc: 'We visit the shortlisted factories in person to verify their production capacity, quality systems, certifications, and overall legitimacy before you commit.',
    details: ['On-site facility walkthrough', 'Business license verification', 'Production line assessment', 'Photo & video documentation'],
  },
  {
    number: '04',
    icon: Package,
    title: 'Sample Order & Negotiation',
    desc: 'We manage sample production, review quality, and negotiate final pricing, payment terms, and MOQs on your behalf to secure the best deal.',
    details: ['Sample order coordination', 'Sample quality evaluation', 'Price & terms negotiation', 'Contract finalization support'],
  },
  {
    number: '05',
    icon: ClipboardCheck,
    title: 'Production Monitoring & QC',
    desc: 'During production, we conduct regular factory visits, track milestones, and perform quality inspections to catch issues before they become problems.',
    details: ['Weekly progress updates', 'During-production inspection', 'Pre-shipment final inspection', 'Detailed inspection reports with photos'],
  },
  {
    number: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight booking, prepare export documentation, supervise container loading, and track your shipment until it arrives at your warehouse.',
    details: ['Freight method selection & booking', 'Export documentation preparation', 'Container loading supervision', 'Tracking until delivery'],
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
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">Our Process</p>
            <h1 id="hiw-hero-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              How It Works
            </h1>
            <p id="hiw-hero-subtitle" className="text-lg text-white/80 leading-relaxed">
              A transparent, step-by-step process designed to minimize risk and maximize value at every stage of your sourcing journey.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-px bg-border hidden md:block" />
                )}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-accent font-bold text-sm">Step {step.number}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight mb-3">{step.title}</h2>
                    <p className="text-text-secondary leading-relaxed mb-4">{step.desc}</p>
                    <div className="bg-bg-alt rounded-lg p-4">
                      <p className="text-text-primary font-medium text-sm mb-2">What's included:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                            <span className="text-text-secondary text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="bg-bg-alt py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 id="hiw-visual-title" className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">Why Our Process Works</h2>
              <p id="hiw-visual-desc" className="text-text-secondary leading-relaxed mb-6">
                Our structured approach has been refined over 12+ years of sourcing experience. Each step is designed to reduce risk, save time, and deliver better outcomes for our clients.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-primary">Transparent communication at every stage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-primary">No hidden fees or surprise costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-primary">You approve every decision before we proceed</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-primary">Detailed documentation and photo evidence</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                data-strk-img-id="hiw-process-img-3a1b2c"
                data-strk-img="[hiw-visual-desc] [hiw-visual-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China sourcing process"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Start Your Sourcing Project Today</h2>
          <p className="text-white/80 text-lg mb-8">Submit your requirements and we'll get back to you with a sourcing plan within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg text-base no-underline transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
