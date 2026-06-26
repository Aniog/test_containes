import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Search, Factory, Truck, Package, Settings, CheckCircle, ArrowRight, Clock, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    id: 'verification',
    icon: Shield,
    title: 'Supplier Verification',
    description: 'Protect your business from fraud and ensure you work with legitimate, capable manufacturers.',
    features: [
      'Business license verification',
      'Factory facility audits',
      'Production capacity assessment',
      'Quality management system review',
      'Export history verification',
      'Reference checks',
    ],
    process: [
      'Initial supplier shortlist based on your criteria',
      'Background check on company registration',
      'On-site factory visit and audit',
      'Production capability assessment',
      'Quality systems evaluation',
      'Detailed verification report',
    ],
  },
  {
    id: 'inspection',
    icon: Search,
    title: 'Quality Inspection',
    description: 'Ensure your products meet specifications and quality standards before shipment.',
    features: [
      'Pre-production inspection',
      'Inline inspection during production',
      'Pre-shipment inspection',
      'Loading supervision',
      'Lab testing coordination',
      'Detailed inspection reports',
    ],
    process: [
      'Review your product specifications',
      'Define inspection criteria and AQL levels',
      'Schedule inspection at production stage',
      'On-site inspection with photos and measurements',
      'Lab testing for compliance (if required)',
      'Comprehensive inspection report within 24 hours',
    ],
  },
  {
    id: 'production',
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Monitor production progress and address issues promptly to ensure on-time delivery.',
    features: [
      'Production progress monitoring',
      'Weekly status updates',
      'Issue identification and resolution',
      'Sample approval coordination',
      'Production milestone tracking',
      'Factory liaison services',
    ],
    process: [
      'Establish production timeline and milestones',
      'Regular factory visits or virtual check-ins',
      'Monitor raw material procurement',
      'Track production progress',
      'Address any delays or issues',
      'Coordinate sample approval',
    ],
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'Simplify your supply chain with comprehensive logistics and freight forwarding services.',
    features: [
      'Freight forwarding',
      'Customs clearance',
      'Documentation handling',
      'Door-to-door delivery',
      'Cargo insurance',
      'Multi-modal transport (sea, air, land)',
    ],
    process: [
      'Discuss shipping requirements and timeline',
      'Compare freight options and rates',
      'Prepare export documentation',
      'Coordinate with shipping lines/agents',
      'Track shipment in transit',
      'Arrange customs clearance and delivery',
    ],
  },
  {
    id: 'sourcing',
    icon: Package,
    title: 'Product Sourcing',
    description: 'Find the right suppliers for your specific product requirements at competitive prices.',
    features: [
      'Supplier identification',
      'Price negotiation',
      'Sample management',
      'MOQ optimization',
      'Contract review',
      'Ongoing supplier management',
    ],
    process: [
      'Define product requirements and specifications',
      'Identify potential suppliers',
      'Request and evaluate quotations',
      'Negotiate terms and pricing',
      'Coordinate sample production and approval',
      'Finalize orders and production',
    ],
  },
  {
    id: 'custom',
    icon: Settings,
    title: 'Custom Solutions',
    description: 'Tailored services to meet your unique sourcing needs and business objectives.',
    features: [
      'OEM/ODM manufacturing',
      'Product development support',
      'Prototype development',
      'Supply chain optimization',
      'Vendor management',
      'Market intelligence',
    ],
    process: [
      'Understand your specific requirements',
      'Design customized service package',
      'Implement tailored solutions',
      'Regular progress reporting',
      'Continuous optimization',
      'Long-term partnership support',
    ],
  },
];

const whyChooseUs = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Skip the research and verification. We handle everything from supplier finding to delivery.',
  },
  {
    icon: Shield,
    title: 'Reduce Risk',
    description: 'Our verification and inspection services protect you from fraud and quality issues.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced professionals with deep knowledge of Chinese manufacturing and business culture.',
  },
  {
    icon: FileText,
    title: 'Transparent Process',
    description: 'Clear communication and detailed reporting at every step of the sourcing process.',
  },
];

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A8A] py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive China sourcing solutions designed to help you find reliable 
            suppliers, ensure quality, and streamline your supply chain.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} id={service.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#F8FAFC] rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-[#1E3A5F]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#64748B] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#64748B]">
                        <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full">
                      Request Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section key={service.id} className={`py-16 lg:py-24 ${index % 2 === 0 ? 'bg-[#F8FAFC]' : 'bg-white'}`}>
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">
                  {service.title}
                </h2>
                <p className="text-[#64748B] mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span className="text-[#1E293B]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-6">
                    Our Process
                  </h3>
                  <ol className="space-y-4">
                    {service.process.map((step, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="flex-shrink-0 w-6 h-6 bg-[#F7931E] text-white rounded-full flex items-center justify-center text-sm font-medium">
                          {idx + 1}
                        </span>
                        <span className="text-[#64748B] text-sm pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-[#1E3A5F]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We're committed to making your China sourcing experience smooth, reliable, and successful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-[#F7931E] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[#64748B] mb-8">
            Contact us today for a free consultation and sourcing quote. 
            Our team is ready to help you find the right suppliers.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;