import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Clock, FileText, Search, ShieldCheck, Factory, Ship } from 'lucide-react'

export default function HowItWorks() {
  return (
    <div>
      <PageHero />
      <DetailedSteps />
      <Timeline />
      <WhatYouGet />
      <CTABanner />
    </div>
  )
}

function PageHero() {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">How It Works</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Our Sourcing Process</h1>
          <p className="text-gray-300 text-lg leading-relaxed">A clear, proven 6-step process designed to minimize risk and maximize results for your China sourcing projects.</p>
        </div>
      </div>
    </section>
  )
}

function DetailedSteps() {
  const steps = [
    {
      num: '01', icon: FileText,
      title: 'Submit Your Sourcing Inquiry',
      duration: 'Day 1',
      desc: 'Share your product requirements with us — specifications, target quantity, budget, and timeline. The more detail you provide, the faster we can find the right supplier.',
      actions: ['Complete our inquiry form with product details', 'Share specifications, drawings, or reference samples', 'Define your quality standards and budget range', 'We review and confirm your requirements within 24 hours'],
    },
    {
      num: '02', icon: Search,
      title: 'Supplier Search & Shortlisting',
      duration: 'Week 1-2',
      desc: 'We research our network of 5,000+ verified factories and conduct targeted searches to identify the most suitable manufacturers for your product.',
      actions: ['Search verified supplier database and industry networks', 'Evaluate production capabilities and specializations', 'Contact and pre-qualify potential suppliers', 'Present you with a shortlist of 3-5 best-matched suppliers'],
    },
    {
      num: '03', icon: ShieldCheck,
      title: 'Factory Audit & Verification',
      duration: 'Week 2-3',
      desc: 'Our local team visits each shortlisted factory in person. We conduct thorough audits covering production capacity, quality systems, certifications, and business legitimacy.',
      actions: ['On-site factory visit with structured audit checklist', 'Verify business licenses, certifications, and export records', 'Assess production lines, equipment, and workforce', 'Review quality management systems and past client samples', 'Provide detailed audit report with photos and ratings'],
    },
    {
      num: '04', icon: Factory,
      title: 'Sampling & Price Negotiation',
      duration: 'Week 3-4',
      desc: 'We coordinate sample production from top candidates, negotiate competitive pricing, and help you evaluate samples against your specifications.',
      actions: ['Request samples from top 2-3 audited factories', 'Negotiate pricing, payment terms, and MOQs', 'Arrange sample shipping to your location', 'Compile comparison report: price, quality, lead time, terms', 'Support your final supplier selection decision'],
    },
    {
      num: '05', icon: Clock,
      title: 'Production & Quality Control',
      duration: 'Week 4+ (varies)',
      desc: 'Once production begins, we provide regular monitoring and conduct quality inspections at key stages to ensure your order meets specifications.',
      actions: ['Pre-production inspection: materials and components check', 'During-production inspection: mid-run quality sampling', 'Regular progress updates with photos and timeline tracking', 'Issue identification and resolution with the factory', 'Pre-shipment inspection: final AQL-based quality check'],
    },
    {
      num: '06', icon: Ship,
      title: 'Shipping & Delivery',
      duration: 'Final stage',
      desc: 'We coordinate the full logistics process — freight forwarding, documentation, customs clearance, and final delivery to your destination.',
      actions: ['Select and negotiate with freight forwarders', 'Prepare all shipping and customs documentation', 'Arrange cargo insurance for your shipment', 'Track shipment and provide real-time updates', 'Coordinate customs clearance and final delivery'],
    },
  ]
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute left-9 top-20 bottom-0 w-0.5 bg-surface -z-0" />
              )}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 relative z-10">
                <div className="flex-shrink-0 flex items-start gap-4 lg:flex-col lg:items-center lg:w-20">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="lg:text-center">
                    <div className="text-2xl font-bold text-navy">{step.num}</div>
                    <div className="text-xs text-gold font-semibold bg-gold/10 px-2 py-0.5 rounded-full inline-block mt-1">{step.duration}</div>
                  </div>
                </div>
                <div className="flex-1 bg-surface rounded-xl p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-navy mb-3">{step.title}</h2>
                  <p className="text-text-secondary mb-5 leading-relaxed">{step.desc}</p>
                  <ul className="space-y-2.5">
                    {step.actions.map((a, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-text-secondary text-sm">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />{a}
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
  )
}

function Timeline() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">Timeline</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Typical Sourcing Timeline</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">While every project is unique, here's a typical timeline for a standard sourcing project.</p>
        </div>
        <div className="bg-white rounded-xl p-6 md:p-10 shadow-sm border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { week: 'Week 1-2', phase: 'Supplier Search' },
              { week: 'Week 2-3', phase: 'Factory Audit' },
              { week: 'Week 3-4', phase: 'Sampling' },
              { week: 'Week 4+', phase: 'Production' },
              { week: 'Ongoing', phase: 'QC Monitoring' },
              { week: 'Final', phase: 'Shipping' },
            ].map((t, i) => (
              <div key={i} className="text-center p-4">
                <div className="text-navy font-bold text-sm mb-1">{t.week}</div>
                <div className="text-text-secondary text-sm">{t.phase}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatYouGet() {
  const items = [
    'A shortlist of verified, audited factories matched to your needs',
    'Detailed factory audit reports with photos and assessments',
    'Competitive pricing negotiated by our local team',
    'Regular production updates with photos and progress tracking',
    'Professional QC inspection reports following AQL standards',
    'Complete shipping and logistics coordination',
    'Bilingual communication — no language barriers',
    'One dedicated project manager throughout the process',
  ]
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">What You Get</h2>
            <p className="text-text-secondary">A complete sourcing solution — from inquiry to delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-surface rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-text-secondary text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CTABanner() {
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Sourcing Project?</h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Submit your inquiry today and take the first step toward reliable China sourcing.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base">
          Submit Your Inquiry <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
