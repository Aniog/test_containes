import { MessageSquare, Search, FileCheck, Boxes, Ship, Handshake, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Tell Us Your Needs',
    description: 'Start by filling out our inquiry form or scheduling a call. Share details about the product you want to source, your target price, order volume, quality requirements, and any certifications needed. The more details you provide, the better we can match you with the right suppliers.',
    details: ['Product specifications & requirements', 'Target price & volume', 'Quality standards & certifications', 'Delivery timeline'],
    imgId: 'step-needs-1a2b3c',
    titleId: 'step-needs-title',
  },
  {
    icon: Search,
    number: '02',
    title: 'We Find Suppliers',
    description: 'Our sourcing team conducts thorough market research using our verified supplier database and industry networks. We shortlist 3-5 qualified suppliers that meet your criteria and compile a detailed comparison report for your review.',
    details: ['Database & network research', 'Initial supplier screening', 'Capability assessment', 'Shortlist with profiles & quotes'],
    imgId: 'step-find-4d5e6f',
    titleId: 'step-find-title',
  },
  {
    icon: FileCheck,
    number: '03',
    title: 'Verify & Quote',
    description: 'We verify each shortlisted supplier through document checks and, when needed, on-site factory audits. We negotiate pricing and terms on your behalf, request samples, and present you with a comprehensive recommendation.',
    details: ['Factory verification & audits', 'Sample coordination', 'Price & term negotiation', 'Final supplier recommendation'],
    imgId: 'step-verify-7g8h9i',
    titleId: 'step-verify-title',
  },
  {
    icon: Boxes,
    number: '04',
    title: 'Quality Control',
    description: 'Once production begins, our quality inspectors monitor the process at key stages. We conduct pre-production, during-production, and pre-shipment inspections following AQL standards to ensure your products meet specifications.',
    details: ['Pre-production inspection', 'During-production checks', 'Pre-shipment inspection (AQL)', 'Container loading supervision'],
    imgId: 'step-qc-0j1k2l',
    titleId: 'step-qc-title',
  },
  {
    icon: Ship,
    number: '05',
    title: 'Ship & Deliver',
    description: 'After quality approval, we coordinate the entire logistics process. We handle freight booking, customs documentation, export clearance, and shipment tracking to ensure your goods arrive safely and on schedule.',
    details: ['Freight booking (sea/air/express)', 'Export documentation', 'Customs clearance support', 'Delivery tracking & confirmation'],
    imgId: 'step-ship-3m4n5o',
    titleId: 'step-ship-title',
  },
  {
    icon: Handshake,
    number: '06',
    title: 'Ongoing Support',
    description: 'Our relationship does not end at delivery. We remain your partner for reorders, supplier relationship management, quality improvements, and any issues that arise. Think of us as your extended sourcing team in China.',
    details: ['Reorder management', 'Supplier performance reviews', 'Continuous improvement', 'Issue resolution & support'],
    imgId: 'step-support-6p7q8r',
    titleId: 'step-support-title',
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A transparent, proven process that takes you from inquiry to delivery — with full visibility and control at every step.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? '' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      alt={step.title}
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-bold text-accent/20">{step.number}</span>
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <step.icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>
                  <h2 id={step.titleId} className="text-2xl font-bold text-navy mb-4">
                    {step.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Get your free sourcing quote today. No obligations, no upfront fees.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-600 text-white font-medium px-8 py-3.5 rounded-md transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
