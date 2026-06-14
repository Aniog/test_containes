import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Users, Shield, CheckCircle, Clock, Truck, FileText, Camera, Package, Award, Search } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Identification & Sourcing',
      desc: 'We locate manufacturers that match your product specifications, quality requirements, and commercial terms.',
      details: [
        'Product specification analysis and supplier matching',
        'Access to our database of 850+ pre-screened factories',
        'Competitive price benchmarking across multiple suppliers',
        'Initial capability and capacity assessment',
      ],
    },
    {
      icon: Shield,
      title: 'Factory Verification & Audits',
      desc: 'On-site verification to confirm that a supplier is legitimate, capable, and suitable for your order.',
      details: [
        'Business license and legal status verification',
        'Production capability and equipment assessment',
        'Quality management system review',
        'Social compliance and workplace conditions check',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Quality Inspection Services',
      desc: 'Independent inspection at key production stages to catch issues before they become costly problems.',
      details: [
        'Pre-production sample verification',
        'During-production inspection (DUPRO)',
        'Pre-shipment inspection (PSI)',
        'Container loading supervision',
      ],
    },
    {
      icon: Clock,
      title: 'Production Monitoring',
      desc: 'Ongoing oversight of your order from deposit to shipment, with regular status updates.',
      details: [
        'Production schedule tracking and milestone reporting',
        'Raw material and component verification',
        'Issue escalation and resolution support',
        'Photo and video progress documentation',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics Coordination',
      desc: 'We manage the movement of goods from factory to your destination, including documentation.',
      details: [
        'Freight forwarder coordination and booking',
        'Export documentation preparation support',
        'Customs clearance guidance',
        'Consolidation and multi-supplier shipment management',
      ],
    },
    {
      icon: FileText,
      title: 'Documentation & Compliance Support',
      desc: 'Assistance with the paperwork required for smooth international trade and regulatory compliance.',
      details: [
        'Commercial invoice and packing list review',
        'Certificate of origin and other trade documents',
        'Product testing and certification coordination',
        'Labeling and packaging compliance guidance',
      ],
    },
  ]

  const addons = [
    { icon: Camera, title: 'Video Calls with Factories', desc: 'We facilitate live video meetings so you can speak directly with suppliers.' },
    { icon: Package, title: 'Sample Management', desc: 'We coordinate sample requests, review, and shipping to your location.' },
    { icon: Award, title: 'Supplier Performance Tracking', desc: 'We maintain records of past performance to inform future sourcing decisions.' },
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="text-sm tracking-[2px] text-slate-400 mb-4">OUR SERVICES</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">End-to-End Sourcing Support</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We provide practical, hands-on services that address the real challenges of sourcing from China. 
            You choose the level of support you need.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-slate-700" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-2xl tracking-tight text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-5 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <div className="text-sm tracking-[2px] text-slate-500 mb-3">OPTIONAL ADD-ONS</div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Additional Support</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {addons.map((addon, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-8">
                <addon.icon className="w-7 h-7 text-slate-700 mb-5" />
                <h3 className="font-semibold text-lg mb-2 text-slate-900">{addon.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Need a Custom Service Package?</h2>
        <p className="text-slate-600 mb-8 max-w-lg mx-auto">Every sourcing project is different. Tell us what you need and we'll propose a tailored approach.</p>
        <Button asChild size="lg">
          <Link to="/contact">Get a Free Sourcing Quote</Link>
        </Button>
      </section>
    </div>
  )
}

export default Services
