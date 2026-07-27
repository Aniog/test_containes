import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SectionHeading from '@/components/SectionHeading'
import { Users, Shield, CheckCircle, Clock, Truck, Award, FileText, Search, Package } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Identification & Sourcing',
    description: 'We identify manufacturers that match your exact specifications, volume requirements, and quality standards. Our database and network covers major industrial regions across China.',
    details: [
      'Product specification analysis',
      'Supplier database search and outreach',
      'Initial capability screening',
      'Competitive pricing comparison'
    ]
  },
  {
    icon: Shield,
    title: 'Factory Verification & Audits',
    description: 'On-site verification to confirm that suppliers are legitimate, have the claimed production capacity, and meet your quality and compliance requirements.',
    details: [
      'Business license and legal verification',
      'Production capacity assessment',
      'Quality management system review',
      'Social compliance and workplace audit'
    ]
  },
  {
    icon: CheckCircle,
    title: 'Quality Control & Inspection',
    description: 'Independent quality inspections at key production stages to catch issues before they become expensive problems.',
    details: [
      'Pre-production inspection',
      'During production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision'
    ]
  },
  {
    icon: Clock,
    title: 'Production Monitoring',
    description: 'Regular progress tracking and milestone reporting so you always know the status of your order.',
    details: [
      'Production schedule verification',
      'Weekly progress reports',
      'Photo and video documentation',
      'Issue escalation and resolution'
    ]
  },
  {
    icon: Package,
    title: 'Sample Management',
    description: 'We coordinate sample requests, evaluate samples against your specifications, and provide clear feedback to suppliers.',
    details: [
      'Sample ordering and tracking',
      'Sample evaluation reports',
      'Specification clarification',
      'Approval documentation'
    ]
  },
  {
    icon: Truck,
    title: 'Logistics & Shipping Coordination',
    description: 'End-to-end logistics support from factory to your warehouse, including documentation and customs guidance.',
    details: [
      'Freight quote comparison',
      'Booking and documentation',
      'Export compliance support',
      'Delivery coordination'
    ]
  },
  {
    icon: FileText,
    title: 'Compliance & Documentation',
    description: 'Support for product certifications, testing requirements, and export documentation.',
    details: [
      'Certification guidance (CE, FCC, etc.)',
      'Testing lab coordination',
      'Commercial documents preparation',
      'Regulatory requirement research'
    ]
  },
  {
    icon: Award,
    title: 'Ongoing Supplier Management',
    description: 'Long-term supplier relationship management for repeat orders and continuous improvement.',
    details: [
      'Performance tracking',
      'Price negotiation support',
      'Quality improvement programs',
      'New product development support'
    ]
  }
]

const Services = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[2px] uppercase text-slate-400 mb-3">OUR SERVICES</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Professional China Sourcing Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive support from supplier discovery through delivery. Choose the services you need.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-slate-200">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-3">Need a custom service package?</h2>
          <p className="text-slate-600 mb-6">We tailor our services to your specific requirements and order volume.</p>
          <Link to="/contact">
            <Button size="lg">Get a Free Sourcing Quote</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
