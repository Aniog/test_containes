import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Ship, FileCheck, Truck, Package, HeadphonesIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: 'Supplier Sourcing',
      description: 'Find the right manufacturers and suppliers for your products. We search our network of 500+ verified suppliers to match you with partners that meet your quality, capacity, and price requirements.',
      features: ['Supplier database access', 'Multiple quotes comparison', 'Supplier capability assessment', 'Price negotiation support']
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
      title: 'Factory Verification',
      description: 'Ensure you are working with legitimate, capable manufacturers. Our factory verification services include business license checks, on-site audits, and production capacity assessments.',
      features: ['Business license verification', 'Factory audit reports', 'Production capacity assessment', 'Quality system evaluation']
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-blue-600" />,
      title: 'Quality Inspection',
      description: 'Protect your brand and customers with comprehensive quality control. We conduct inspections at every stage of production to catch issues before they become costly problems.',
      features: ['Pre-production inspection', 'During-production inspection', 'Pre-shipment inspection', 'Container loading supervision']
    },
    {
      icon: <Ship className="w-12 h-12 text-blue-600" />,
      title: 'Shipping Coordination',
      description: 'Simplify international logistics with our end-to-end shipping services. From factory to your warehouse, we handle all logistics, documentation, and customs clearance.',
      features: ['Freight forwarding', 'Customs clearance', 'Insurance coordination', 'Door-to-door delivery']
    },
    {
      icon: <FileCheck className="w-12 h-12 text-blue-600" />,
      title: 'Product Sourcing',
      description: 'Need help finding a specific product? We leverage our extensive network and market knowledge to source exactly what you need, even for niche or custom products.',
      features: ['Product research', 'Custom product development', 'Sample coordination', 'MOQ negotiation']
    },
    {
      icon: <Truck className="w-12 h-12 text-blue-600" />,
      title: 'Logistics Management',
      description: 'Optimize your supply chain with our logistics expertise. We coordinate air, sea, and rail freight to find the best balance of cost and delivery time for your needs.',
      features: ['Multi-modal transport', 'Route optimization', 'Tracking & updates', 'Consolidation services']
    },
    {
      icon: <Package className="w-12 h-12 text-blue-600" />,
      title: 'Order Management',
      description: 'Keep your orders on track with our comprehensive order management. We monitor production, coordinate inspections, and ensure timely delivery.',
      features: ['Production monitoring', 'Quality control', 'Documentation handling', 'Issue resolution']
    },
    {
      icon: <HeadphonesIcon className="w-12 h-12 text-blue-600" />,
      title: 'Dedicated Support',
      description: 'Get personalized attention from a dedicated sourcing agent who understands your business. We are your local representative in China, available when you need us.',
      features: ['Dedicated account manager', 'Bilingual communication', 'Regular progress updates', 'Emergency support']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Comprehensive China sourcing solutions designed to help you find reliable suppliers, ensure quality, and deliver products on time.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Complete Sourcing Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From initial supplier search to final delivery, we provide end-to-end support for all your China sourcing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Streamline Your Sourcing?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Contact us today for a free consultation and discover how we can help you source better from China.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
