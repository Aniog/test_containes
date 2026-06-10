import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Shield, ClipboardCheck, Truck, FileText, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We find and vet manufacturers that match your product specifications, quality requirements, and budget.',
    features: [
      'Product requirement analysis',
      'Supplier database of 1,200+ verified factories',
      'Multiple supplier options for comparison',
      'Price negotiation on your behalf',
      'MOQ and lead time verification',
    ],
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'Comprehensive on-site audits to ensure suppliers are legitimate, capable, and compliant.',
    features: [
      'Business license verification',
      'Factory capacity assessment',
      'Quality management system review',
      'Social compliance audits',
      'Financial stability check',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    description: 'Professional inspection services at every stage of production to catch issues early.',
    features: [
      'Pre-production inspection',
      'During-production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Detailed inspection reports with photos',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management from factory to your warehouse.',
    features: [
      'Freight forwarding (sea, air, express)',
      'Customs clearance documentation',
      'Insurance arrangement',
      'Cargo tracking',
      'Last-mile delivery coordination',
    ],
  },
  {
    icon: FileText,
    title: 'Product Sourcing Research',
    description: 'Market research and product development support to help you find winning products.',
    features: [
      'Market trend analysis',
      'Competitor product research',
      'Cost breakdown analysis',
      'Supplier capability mapping',
      'Regulatory compliance guidance',
    ],
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Sourcing Manager',
    description: 'A single point of contact who understands your business and manages all aspects of sourcing.',
    features: [
      'Personal account manager',
      'Regular progress updates',
      'Direct communication channel',
      'Issue resolution support',
      'Long-term relationship building',
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Our Sourcing Services</h1>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive China sourcing solutions designed for overseas buyers. From initial supplier search to final delivery, we provide end-to-end support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base text-slate-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why Choose SSourcing China?</h2>
            <p className="mt-4 text-lg text-slate-600">
              We combine local expertise with international standards to deliver reliable sourcing services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Local Presence', description: 'Based in Shenzhen with on-the-ground teams in major manufacturing hubs.' },
              { title: 'Verified Network', description: '1,200+ pre-vetted factories across multiple industries.' },
              { title: 'Transparent Pricing', description: 'Clear fee structure with no hidden costs or surprises.' },
              { title: 'Quality Guarantee', description: 'Professional QC team with international inspection standards.' },
              { title: 'Fast Turnaround', description: 'Efficient processes to get your products sourced quickly.' },
              { title: 'Ongoing Support', description: 'Long-term partnership approach, not one-time transactions.' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Streamline Your Sourcing?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and quote.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              Get a Free Sourcing Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
