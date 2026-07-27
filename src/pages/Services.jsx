import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  ArrowRight,
  CheckCircle2,
  FileText,
  Truck,
  PackageCheck,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Finding',
      description: 'We identify and vet reliable manufacturers in China that match your product requirements, quality standards, and budget.',
      features: [
        'Product specification analysis',
        'Supplier database search',
        'Initial qualification screening',
        'Price negotiation support',
        'Multiple supplier options',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Factory Verification',
      description: 'On-site audits to verify factory credentials, capacity, compliance, and business legitimacy before you commit.',
      features: [
        'Business license verification',
        'Factory capacity assessment',
        'Quality system evaluation',
        'Financial stability check',
        'Reference checks',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
      features: [
        'Pre-production inspection',
        'During-production inspection',
        'Pre-shipment inspection',
        'Container loading supervision',
        'Detailed inspection reports',
      ],
    },
    {
      icon: Factory,
      title: 'Production Monitoring',
      description: 'Regular factory visits and progress tracking to keep your production on schedule and within budget.',
      features: [
        'Production schedule tracking',
        'Regular factory visits',
        'Progress photo/video updates',
        'Issue escalation and resolution',
        'Timeline management',
      ],
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics support including freight forwarding, customs clearance, and delivery coordination.',
      features: [
        'Freight forwarding',
        'Customs documentation',
        'Insurance coordination',
        'Port handling',
        'Final delivery tracking',
      ],
    },
    {
      icon: FileText,
      title: 'Product Sourcing Consultation',
      description: 'Expert advice on product specifications, materials, manufacturing processes, and cost optimization.',
      features: [
        'Product feasibility analysis',
        'Material recommendations',
        'Cost optimization advice',
        'Regulatory compliance guidance',
        'Market insights',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              Our Sourcing Services
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive China sourcing solutions tailored to your business needs. From supplier discovery to final delivery, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-slate-300"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100">
                  <service.icon className="h-7 w-7 text-slate-700" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-600">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Why Choose SSourcing China?
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We combine local expertise with international standards to deliver exceptional sourcing experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Presence',
                description: 'Based in Shenzhen with a network of trusted partners across major manufacturing hubs in China.',
              },
              {
                title: 'Transparent Pricing',
                description: 'Clear, upfront pricing with no hidden fees. You pay for the services you need, nothing more.',
              },
              {
                title: 'Quality Guaranteed',
                description: 'Our rigorous inspection process ensures products meet your specifications before they leave the factory.',
              },
              {
                title: 'Fast Response',
                description: 'Dedicated account managers respond to your inquiries within 24 hours, keeping your project on track.',
              },
              {
                title: 'End-to-End Service',
                description: 'From initial inquiry to final delivery, we manage every step of the sourcing process.',
              },
              {
                title: 'Risk Mitigation',
                description: 'We help you avoid common sourcing pitfalls through thorough verification and quality control.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Contact us today for a free consultation and quote. Let us help you source with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/how-it-works">Learn About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
