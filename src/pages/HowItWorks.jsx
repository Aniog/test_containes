import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { 
  Search, ShieldCheck, Package, Eye, Truck, ArrowRight, 
  Clock, CheckCircle, Phone, FileText, Users, Globe,
  MessageSquare, ClipboardCheck, DollarSign
} from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import InquiryForm from '@/components/shared/InquiryForm'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    description: 'Tell us what products you need, including specifications, quantities, target price, and any special requirements. Our team reviews every inquiry within 24 hours.',
    details: [
      'Fill out our simple inquiry form',
      'Include product specifications and photos if available',
      'Specify quantity, target price, and timeline',
      'Our team reviews and responds within 24 hours',
    ],
    duration: '1-2 days',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Discovery & Qualification',
    description: 'We search our verified supplier network and the broader market to find factories that match your requirements. Each candidate is pre-screened before introduction.',
    details: [
      'Search our database of 2,400+ verified factories',
      'Evaluate suppliers against your specific criteria',
      'Request initial pricing and capability information',
      'Present you with 3-5 qualified supplier options',
    ],
    duration: '3-7 days',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    description: 'Before you commit, we conduct thorough on-site factory audits to verify legitimacy, production capabilities, quality systems, and compliance.',
    details: [
      'On-site factory visit by our inspection team',
      'Business license and registration verification',
      'Production facility and equipment assessment',
      'Quality management system review',
      'Detailed audit report with photos and findings',
    ],
    duration: '3-5 days',
  },
  {
    number: '04',
    icon: Package,
    title: 'Sample Production & Evaluation',
    description: 'We coordinate sample production and conduct detailed evaluations to ensure the product meets your specifications before moving to mass production.',
    details: [
      'Coordinate sample production with selected factory',
      'Inspect samples against your specifications',
      'Document any issues and coordinate revisions',
      'Ship approved samples to you for final review',
    ],
    duration: '7-14 days',
  },
  {
    number: '05',
    icon: DollarSign,
    title: 'Price Negotiation & Order',
    description: 'We negotiate pricing, payment terms, and delivery schedules on your behalf to secure the best possible deal.',
    details: [
      'Negotiate competitive pricing with volume leverage',
      'Finalize payment terms and schedules',
      'Draft and review purchase agreements',
      'Place order with confirmed specifications',
    ],
    duration: '2-3 days',
  },
  {
    number: '06',
    icon: ClipboardCheck,
    title: 'Production Monitoring & QC',
    description: 'Throughout production, we monitor progress and conduct quality inspections at key stages to catch issues early.',
    details: [
      'Regular production progress updates',
      'During production (DUPRO) quality inspection',
      'Pre-shipment inspection (PSI)',
      'Corrective action management for any defects',
    ],
    duration: '15-45 days',
  },
  {
    number: '07',
    icon: Eye,
    title: 'Final Inspection & Approval',
    description: 'Before shipping, we conduct a comprehensive final inspection to verify quality, quantity, packaging, and labeling.',
    details: [
      'Full pre-shipment quality inspection',
      'Quantity verification and counting',
      'Packaging and labeling inspection',
      'Test reports and compliance documentation',
      'Your approval before container loading',
    ],
    duration: '2-3 days',
  },
  {
    number: '08',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We handle all logistics from factory to your destination, including customs clearance, documentation, and freight forwarding.',
    details: [
      'Container loading supervision',
      'Customs clearance and documentation',
      'Freight forwarding coordination',
      'Real-time shipment tracking',
      'Door-to-door delivery',
    ],
    duration: '15-35 days (sea) / 5-10 days (air)',
  },
]

const advantages = [
  { icon: Clock, title: 'Time Savings', description: 'We handle the time-consuming work of finding, verifying, and managing suppliers so you can focus on your business.' },
  { icon: DollarSign, title: 'Cost Reduction', description: 'Our negotiation expertise and volume leverage typically save clients 15-35% on sourcing costs.' },
  { icon: ShieldCheck, title: 'Risk Mitigation', description: 'Factory verification and multi-stage QC protect you from fraud, quality issues, and compliance problems.' },
  { icon: Globe, title: 'Local Expertise', description: 'Our on-ground team understands Chinese business culture, language, and manufacturing practices.' },
  { icon: Users, title: 'Dedicated Support', description: 'Each client gets a dedicated account manager who knows your business and responds within 24 hours.' },
  { icon: FileText, title: 'Full Transparency', description: 'Regular updates, detailed reports, and clear pricing keep you informed at every stage of the process.' },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-cta-500/20 text-cta-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Process
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            How Our Sourcing Process Works
          </h1>
          <p className="text-lg text-navy-200 max-w-3xl mx-auto">
            A clear, step-by-step process designed to minimize risk, control costs,
            and ensure quality at every stage of your China sourcing journey.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 lg:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-royal-200 via-cta-200 to-trust-200 hidden md:block"></div>

            <div className="space-y-12 lg:space-y-16">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Step number circle */}
                  <div className="hidden md:flex absolute left-0 lg:left-4 w-16 h-16 lg:w-20 lg:h-20 bg-white border-4 border-royal-200 rounded-2xl items-center justify-center shadow-sm z-10">
                    <step.icon className="w-7 h-7 lg:w-8 lg:h-8 text-royal-500" />
                  </div>

                  <div className="md:ml-24 lg:ml-32 bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-cta-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        Step {step.number}
                      </span>
                      <span className="bg-white text-gray-600 text-sm px-3 py-1 rounded-full border border-gray-200">
                        <Clock className="w-3.5 h-3.5 inline mr-1" />
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-navy-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-5">{step.description}</p>

                    <ul className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-trust-500 flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Benefits"
            title="Why Use a Sourcing Agent?"
            subtitle="Working with a professional sourcing agent provides significant advantages over managing suppliers directly."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="bg-white rounded-xl p-6 lg:p-8 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-trust-100 rounded-xl flex items-center justify-center mb-4">
                  <advantage.icon className="w-6 h-6 text-trust-600" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
            Submit your requirements today and receive a detailed sourcing proposal within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-cta-500 hover:bg-cta-600 text-white px-8 py-4 rounded-xl text-base font-semibold transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
