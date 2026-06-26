import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Supplier Sourcing & Verification',
      description: 'We help you find reliable suppliers that match your requirements and quality standards.',
      features: [
        'Supplier identification based on your product specifications',
        'Background checks and legitimacy verification',
        'Factory audits (on-site visits)',
        'Capability and capacity assessment',
        'Certification verification (ISO, CE, FDA, etc.)',
        'Financial stability check'
      ],
      image: 'supplier-sourcing-verification'
    },
    {
      title: 'Quality Control & Inspection',
      description: 'Comprehensive quality control at every stage of production to ensure your products meet specifications.',
      features: [
        'Pre-production inspection (material check)',
        'During production inspection (process monitoring)',
        'Pre-shipment inspection (final product check)',
        'Container loading supervision',
        'Laboratory testing coordination',
        'Quality standard definition and documentation'
      ],
      image: 'quality-control-inspection'
    },
    {
      title: 'Production Monitoring',
      description: 'Regular monitoring and updates throughout the production process to ensure timelines and quality.',
      features: [
        'Production schedule tracking',
        'Regular progress updates with photos/videos',
        'Issue identification and resolution',
        'Production capacity verification',
        'Delivery timeline management',
        'Communication with factory on your behalf'
      ],
      image: 'production-monitoring'
    },
    {
      title: 'Price Negotiation & Cost Optimization',
      description: 'Leverage our expertise to get the best prices and terms from suppliers.',
      features: [
        'Multiple supplier quotation comparison',
        'Price negotiation on your behalf',
        'Payment term optimization',
        'Cost breakdown analysis',
        'Alternative material/process suggestions',
        'Total landed cost calculation'
      ],
      image: 'price-negotiation'
    },
    {
      title: 'Shipping & Logistics Coordination',
      description: 'End-to-end logistics support from factory pickup to delivery at your warehouse.',
      features: [
        'Freight forwarding arrangement (air, sea, express)',
        'Customs documentation preparation',
        'Insurance coordination',
        'Amazon FBA shipment support',
        'Consolidation and warehousing in China',
        'Door-to-door delivery coordination'
      ],
      image: 'shipping-logistics'
    },
    {
      title: 'Sourcing Consultation & Strategy',
      description: 'Strategic advice to optimize your sourcing operations and reduce risks.',
      features: [
        'Sourcing strategy development',
        'Market research and analysis',
        'Supplier consolidation recommendations',
        'Risk assessment and mitigation',
        'Intellectual property protection guidance',
        'Long-term partnership development'
      ],
      image: 'sourcing-consultation'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive sourcing solutions designed to help you buy from China
              with confidence. From supplier identification to final delivery, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image Placeholder */}
                <div className="lg:w-1/2">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">🏭</div>
                      <p className="text-gray-500">{service.title}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      What we do:
                    </h3>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free consultation and sourcing quote. No obligations, no hidden costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
