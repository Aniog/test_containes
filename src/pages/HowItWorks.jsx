import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, FileText, Search, ShieldCheck, ClipboardCheck, Package, Ship } from 'lucide-react'
import { CTASection, SectionHeader } from '../components/shared/CTASection'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const steps = [
  {
    icon: FileText,
    title: '1. Submit Your Requirements',
    desc: 'Share your product specifications, target price, order quantity, and any other requirements through our inquiry form or email.',
    details: [
      'Product description and specifications',
      'Target price and order quantity',
      'Quality standards and certifications needed',
      'Timeline and delivery requirements',
    ],
  },
  {
    icon: Search,
    title: '2. Supplier Search & Shortlisting',
    desc: 'Our team searches our database and network of verified factories to find suppliers that match your criteria.',
    details: [
      'Search across China\'s key manufacturing regions',
      'Screen for capability, capacity, and compliance',
      'Compare pricing from multiple suppliers',
      'Provide a shortlist with detailed profiles',
    ],
  },
  {
    icon: ShieldCheck,
    title: '3. Factory Verification',
    desc: 'We conduct on-site audits of shortlisted factories to verify they are genuine manufacturers with the capacity to deliver.',
    details: [
      'Business license and registration check',
      'On-site factory audit and assessment',
      'Production capacity and equipment verification',
      'Quality management system evaluation',
    ],
  },
  {
    icon: ClipboardCheck,
    title: '4. Sample & Confirmation',
    desc: 'We arrange samples, coordinate revisions, and help you evaluate and confirm the right supplier for your order.',
    details: [
      'Sample production and delivery coordination',
      'Revision management and communication',
      'Sample evaluation and approval',
      'Order confirmation and contract support',
    ],
  },
  {
    icon: Package,
    title: '5. Production & Quality Control',
    desc: 'We monitor production progress, conduct inspections at key milestones, and ensure quality meets your standards.',
    details: [
      'Production schedule tracking and updates',
      'Pre-production, during-production, and pre-shipment inspections',
      'Issue identification and corrective actions',
      'Detailed inspection reports with photos',
    ],
  },
  {
    icon: Ship,
    title: '6. Shipping & Delivery',
    desc: 'We handle logistics coordination, documentation, and tracking to ensure your goods arrive safely and on time.',
    details: [
      'Freight booking and rate comparison',
      'Export documentation and customs clearance',
      'Shipment tracking and status updates',
      'Delivery coordination to your warehouse',
    ],
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
      <section className="bg-navy-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            A clear, structured process from your first inquiry to final delivery. We handle the complexity so you can focus on your business.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-8 top-20 w-0.5 h-full bg-gray-200" />
                )}
                <div className="flex gap-6 lg:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h2>
                    <p className="text-gray-600 mb-6">{step.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.details.map((detail, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Our Process Works"
            subtitle="Built on years of experience helping global buyers navigate the complexities of sourcing from China."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Presence, Global Standards</h3>
              <p className="text-gray-600 text-sm">Our team is based in China with direct access to factories. We apply international quality standards to every project.</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Communication</h3>
              <p className="text-gray-600 text-sm">You receive regular updates, detailed reports, and direct access to our team. No surprises, no hidden information.</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proactive Problem Solving</h3>
              <p className="text-gray-600 text-sm">We identify and address issues before they become problems. Our goal is to prevent issues, not just report them.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
