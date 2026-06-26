import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Search,
  Shield,
  FileCheck,
  Package,
  Truck,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Globe,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: 'Supplier Sourcing',
      description: 'We find and vet reliable manufacturers in China that match your product requirements, quality standards, and budget.',
      features: [
        'Extensive network of verified suppliers',
        'Product specification matching',
        'Price negotiation on your behalf',
        'Multiple supplier options',
        'Background checks and references',
      ],
      benefits: 'Save time and reduce risk by working with pre-vetted suppliers who meet your quality and capacity requirements.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Factory Verification',
      description: 'On-site factory audits to verify capabilities, certifications, and business legitimacy before you commit to a partnership.',
      features: [
        'On-site factory visits',
        'Business license verification',
        'Production capacity assessment',
        'Quality system evaluation',
        'Financial stability check',
      ],
      benefits: 'Avoid costly mistakes by ensuring your supplier is legitimate, capable, and financially stable.',
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: 'Quality Inspection',
      description: 'Professional pre-shipment and during-production inspections to ensure products meet your specifications and quality standards.',
      features: [
        'Pre-production inspections',
        'During-production inspections',
        'Pre-shipment inspections',
        'Container loading supervision',
        'Detailed inspection reports',
      ],
      benefits: 'Catch defects and quality issues before products leave the factory, protecting your brand and customers.',
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: 'Production Monitoring',
      description: 'Regular progress updates and on-site monitoring to keep your production on schedule and within budget.',
      features: [
        'Weekly progress reports',
        'On-site production monitoring',
        'Schedule management',
        'Issue resolution',
        'Milestone tracking',
      ],
      benefits: 'Stay informed about your production status and address issues early to avoid delays.',
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics management from factory to your warehouse, including freight forwarding and customs clearance.',
      features: [
        'Freight forwarding',
        'Customs clearance',
        'Insurance coordination',
        'Documentation handling',
        'Door-to-door delivery',
      ],
      benefits: 'Simplify international shipping with a single point of contact who manages the entire logistics process.',
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8" />,
      title: 'Dedicated Support',
      description: 'A single point of contact who understands your business, speaks your language, and is available when you need them.',
      features: [
        'Dedicated project manager',
        'Bilingual communication',
        'Time zone coverage',
        'Regular updates',
        'Emergency support',
      ],
      benefits: 'Work with someone who knows your business and can proactively address any issues that arise.',
    },
  ];

  const whyChooseUs = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Local Presence',
      description: 'Based in Shenzhen with offices across major manufacturing regions in China.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Verified Network',
      description: '500+ pre-vetted suppliers across multiple industries.',
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: 'Transparent Pricing',
      description: 'Clear, upfront pricing with no hidden fees or surprises.',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Fast Response',
      description: 'Quick turnaround on inquiries and urgent requests.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Services
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Comprehensive China sourcing solutions designed to help global buyers find reliable suppliers, ensure quality, and manage logistics with confidence.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-sm text-slate-600 italic">{service.benefits}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose SSourcing China
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine local expertise with international service standards to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 mx-auto mb-4">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Streamline Your China Sourcing?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can help you source quality products from China with confidence.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
