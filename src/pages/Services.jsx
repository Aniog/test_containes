import React from 'react'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Ship, FileText, Truck, Users, BarChart3, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable manufacturers in China that match your product requirements, budget, and quality standards.',
    features: [
      'Market research and supplier identification',
      'Competitive analysis and pricing benchmarks',
      'Supplier capability assessment',
      'Initial communication and negotiation'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'Comprehensive on-site factory audits to verify business credentials, production capacity, and compliance standards.',
    features: [
      'Business license and registration verification',
      'Factory infrastructure and capacity assessment',
      'Quality management system audit (ISO, etc.)',
      'Social compliance and ethical standards check'
    ]
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Professional quality control inspections at every stage of production to ensure your products meet specifications.',
    features: [
      'Pre-production inspection (raw materials)',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Detailed photo reports with pass/fail criteria'
    ]
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support from factory to your doorstep, including freight forwarding and customs clearance.',
    features: [
      'Freight forwarding and logistics planning',
      'Customs documentation and clearance',
      'Insurance and risk management',
      'Delivery tracking and coordination'
    ]
  },
  {
    icon: FileText,
    title: 'Product Sourcing Strategy',
    description: 'Strategic planning for your sourcing needs, including market analysis, cost optimization, and supply chain design.',
    features: [
      'Market analysis and trend research',
      'Cost optimization strategies',
      'Supply chain design and optimization',
      'Risk assessment and mitigation'
    ]
  },
  {
    icon: BarChart3,
    title: 'Supplier Management',
    description: 'Ongoing relationship management with your suppliers to ensure consistent quality and reliable delivery.',
    features: [
      'Performance monitoring and reporting',
      'Issue resolution and escalation',
      'Contract and agreement management',
      'Continuous improvement initiatives'
    ]
  }
]

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Comprehensive sourcing solutions tailored to your business needs. From finding the right supplier to delivering quality products, we handle it all.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-all"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Choose SSourcing China
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We combine local expertise with international standards to deliver exceptional sourcing experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Presence, Global Standards',
                description: 'Based in Shenzhen with deep local knowledge, we operate to international quality and compliance standards.'
              },
              {
                title: 'Transparent Process',
                description: 'Every step is documented with detailed reports, photos, and updates. You always know exactly what\'s happening.'
              },
              {
                title: 'No Hidden Fees',
                description: 'Clear pricing with no surprises. We provide detailed quotes upfront and stick to them.'
              },
              {
                title: 'Dedicated Support',
                description: 'A single point of contact who understands your business and speaks your language.'
              },
              {
                title: 'Quality Guaranteed',
                description: 'We stand behind our inspections. If issues are found, we work with suppliers to resolve them before shipment.'
              },
              {
                title: 'Fast Turnaround',
                description: 'Efficient processes and strong supplier relationships mean faster sourcing without compromising quality.'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Streamline Your Sourcing?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Contact us today for a free consultation and discover how we can help you source better from China.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Services