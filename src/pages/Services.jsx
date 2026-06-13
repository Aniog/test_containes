import React from 'react'
import { Link } from 'react-router-dom'
import { Search, FileSearch, Factory, ClipboardCheck, Package, Ship, Shield, ArrowRight, CheckCircle, Camera, ClipboardList, BarChart3 } from 'lucide-react'
import Button from '@/components/ui/button'

const servicesDetail = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Identification',
    desc: 'We find the right suppliers for your products using our extensive database and on-the-ground research.',
    features: [
      'Custom supplier shortlist based on your product requirements',
      'Evaluation of manufacturing capabilities and capacity',
      'Price benchmarking against market rates',
      'Initial compliance and certification checks',
      'Trading company vs. manufacturer identification',
    ],
  },
  {
    icon: FileSearch,
    title: 'Supplier Verification',
    desc: 'Rigorous verification to ensure you\'re dealing with a legitimate, capable supplier.',
    features: [
      'Business license and registration verification',
      'Export license and trade capability checks',
      'Factory ownership and history verification',
      'Customer reference checks and trade history',
      'Legal dispute and blacklist screening',
    ],
  },
  {
    icon: Factory,
    title: 'Factory Audits',
    desc: 'On-site evaluations conducted by our experienced auditors to assess factory capabilities.',
    features: [
      'Production capacity and lead time assessment',
      'Quality management system evaluation (ISO, etc.)',
      'Equipment and technology capability review',
      'Workplace conditions and labor compliance',
      'Social compliance and environmental audit',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Comprehensive inspection services to ensure products meet your specifications.',
    features: [
      'Pre-production inspection (raw materials & components)',
      'During-production inspection (work-in-progress)',
      'Pre-shipment inspection (random sampling per AQL)',
      'Container loading supervision',
      'Detailed photo and video reporting',
    ],
  },
  {
    icon: Package,
    title: 'Sample Management',
    desc: 'End-to-end sample coordination to validate product quality before mass production.',
    features: [
      'Sample request coordination with suppliers',
      'Sample review and specification checking',
      'Feedback consolidation and revision management',
      'Approval workflow management',
      'Pre-production sample confirmation',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    desc: 'We manage the logistics chain so your goods arrive safely, on time, and on budget.',
    features: [
      'Freight forwarding (sea, air, rail, express)',
      'Export customs clearance in China',
      'Documentation (bill of lading, certificate of origin, etc.)',
      'Cargo consolidation and warehousing',
      'Door-to-door delivery solutions',
    ],
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-neutral-900 to-brand-900 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">Our Services</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Comprehensive sourcing services covering every stage of your supply chain — from supplier identification to final delivery.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-20">
            {servicesDetail.map((service, i) => (
              <div key={i} className={`bg-white rounded-2xl border border-neutral-200 overflow-hidden ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:flex">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-brand-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">{service.title}</h2>
                    <p className="text-neutral-600 mb-6">{service.desc}</p>
                    <ul className="space-y-3">
                      {service.features.map((feat, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-neutral-700">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:w-1/2 bg-neutral-100 min-h-[280px] flex items-center justify-center p-8 lg:p-12">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto bg-brand-100 rounded-full flex items-center justify-center mb-4">
                        <Camera className="w-10 h-10 text-brand-500" />
                      </div>
                      <p className="text-neutral-400 text-sm">Factory & inspection imagery</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
            Tell us about your project, and we\'ll recommend the right services for your budget and requirements.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}