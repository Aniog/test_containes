import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { 
  Search, CheckCircle, Package, Truck, Shield, Users, 
  FileText, Award, Clock, MessageCircle 
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify manufacturers that match your product specifications, quality requirements, and commercial terms.',
      details: [
        'Product specification analysis and supplier matching',
        'Database search across verified manufacturer networks',
        'Initial capability and capacity screening',
        'Competitive supplier shortlisting with comparison',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Factory Verification',
      description: 'On-site audits confirm that suppliers are legitimate, capable, and suitable for your order.',
      details: [
        'Business license and legal status verification',
        'Production facility inspection and capacity assessment',
        'Quality management system review',
        'Reference checks and past client verification',
      ],
    },
    {
      icon: Shield,
      title: 'Quality Inspection',
      description: 'Independent inspection at key production stages ensures products meet your specifications.',
      details: [
        'Pre-production sample verification',
        'During-production quality checks',
        'Pre-shipment inspection with detailed reporting',
        'Third-party lab testing coordination when required',
      ],
    },
    {
      icon: Package,
      title: 'Production Monitoring',
      description: 'Regular oversight throughout manufacturing keeps projects on schedule and on specification.',
      details: [
        'Production schedule tracking and milestone reporting',
        'Issue identification and resolution coordination',
        'Material and component quality verification',
        'Progress photos and status updates',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'We manage logistics from factory to your destination, handling documentation and freight.',
      details: [
        'Freight forwarder selection and booking',
        'Export documentation preparation',
        'Customs clearance support',
        'Shipment tracking and delivery coordination',
      ],
    },
    {
      icon: FileText,
      title: 'Order Management',
      description: 'We coordinate the commercial and administrative aspects of your sourcing project.',
      details: [
        'Sample development and approval coordination',
        'Contract and purchase order review',
        'Payment milestone management',
        'Communication and documentation centralization',
      ],
    },
  ]

  const additionalServices = [
    {
      icon: Award,
      title: 'Compliance Support',
      description: 'Guidance on product certifications, safety standards, and regulatory requirements for target markets.',
    },
    {
      icon: Clock,
      title: 'Expedited Projects',
      description: 'Priority handling for time-sensitive orders with dedicated coordination and faster response times.',
    },
    {
      icon: MessageCircle,
      title: 'Ongoing Supplier Relations',
      description: 'Continued support for repeat orders, quality improvement, and long-term supplier management.',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0A2540] text-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-[36px] font-semibold mb-4">Our Services</h1>
            <p className="text-lg text-[#94A3B8]">
              Comprehensive sourcing support from supplier identification through delivery. 
              Select the services that match your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#F1F5F9] flex items-center justify-center shrink-0">
                      <service.icon className="w-6 h-6 text-[#0A2540]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#0A2540] mb-2">{service.title}</h3>
                      <p className="text-sm text-[#475569] mb-4">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 pl-16">
                    {service.details.map((detail, i) => (
                      <li key={i} className="text-sm text-[#475569] flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-20 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[#0A2540] mb-8 text-center">
            Additional Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="p-6 border border-[#E2E8F0] rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-[#F1F5F9] flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-[#0A2540]" />
                </div>
                <h3 className="font-semibold text-[#0A2540] mb-2">{service.title}</h3>
                <p className="text-sm text-[#475569]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-[#0A2540] mb-3">How We Work Together</h2>
            <p className="text-[#475569] max-w-xl mx-auto">
              You can engage us for a single service or a complete sourcing project. 
              We tailor our involvement to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="text-sm font-semibold text-[#2563EB] mb-1">PROJECT-BASED</div>
                <h3 className="text-lg font-semibold text-[#0A2540] mb-2">Full Sourcing Support</h3>
                <p className="text-sm text-[#475569] mb-4">
                  End-to-end management from supplier search through delivery. Best for first-time 
                  importers or complex products.
                </p>
                <ul className="text-sm text-[#475569] space-y-1">
                  <li>• Supplier identification</li>
                  <li>• Verification and sampling</li>
                  <li>• Production monitoring</li>
                  <li>• QC and shipping coordination</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm font-semibold text-[#2563EB] mb-1">SELECTIVE</div>
                <h3 className="text-lg font-semibold text-[#0A2540] mb-2">Targeted Services</h3>
                <p className="text-sm text-[#475569] mb-4">
                  Engage us for specific needs such as factory verification, quality inspection, 
                  or logistics coordination.
                </p>
                <ul className="text-sm text-[#475569] space-y-1">
                  <li>• Individual service selection</li>
                  <li>• Existing supplier support</li>
                  <li>• One-time or recurring</li>
                  <li>• Flexible scope</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm font-semibold text-[#2563EB] mb-1">ONGOING</div>
                <h3 className="text-lg font-semibold text-[#0A2540] mb-2">Retainer Arrangement</h3>
                <p className="text-sm text-[#475569] mb-4">
                  Monthly support for companies with regular sourcing needs. Includes priority 
                  response and dedicated coordination.
                </p>
                <ul className="text-sm text-[#475569] space-y-1">
                  <li>• Priority project handling</li>
                  <li>• Regular supplier reviews</li>
                  <li>• New product sourcing</li>
                  <li>• Quality program management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F1F5F9] py-16">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-[#0A2540] mb-3">
            Need a specific service or full project support?
          </h2>
          <p className="text-[#475569] mb-6">Tell us what you need and we will provide a clear scope and quote.</p>
          <Button asChild size="lg">
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Services
