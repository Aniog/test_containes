import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Factory, ClipboardCheck, PackageSearch, Ship, HeadphonesIcon, FileSearch, ShieldCheck, BarChart3, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and match you with reliable manufacturers that meet your product specifications, quality standards, and budget. We filter out trading companies and middlemen so you deal directly with capable factories.',
    benefits: ['Verified manufacturer network', 'Competitive pricing negotiation', 'Capability and capacity matching'],
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description: 'Before you commit, we conduct on-site factory audits to verify business registration, production lines, quality systems, and social compliance. You get a clear report with photos and our professional assessment.',
    benefits: ['On-site audit reports', 'Business license verification', 'Production capacity assessment'],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    description: 'We perform inspections at every critical stage: pre-production, during production, and pre-shipment. This reduces defects, returns, and costly delays.',
    benefits: ['Pre-production checks', 'During-production monitoring', 'Pre-shipment final inspection'],
  },
  {
    icon: PackageSearch,
    title: 'Production Follow-Up',
    description: 'We stay on the ground to follow up on production schedules, material sourcing, and milestone delivery. You receive regular updates so you always know the real status.',
    benefits: ['Weekly progress reports', 'Schedule risk alerts', 'Direct factory communication'],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    description: 'From factory to your warehouse, we coordinate freight forwarding, customs documentation, consolidation, and last-mile delivery. We help you choose the right Incoterms and shipping method.',
    benefits: ['Freight forwarding coordination', 'Customs documentation support', 'Consolidation and warehousing'],
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Sourcing Manager',
    description: 'You get a single point of contact who understands your business, remembers your preferences, and proactively manages your orders. No call centers, no handoffs.',
    benefits: ['Single point of contact', 'Proactive issue resolution', 'Business continuity'],
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Sourcing Services</h1>
            <p className="text-lg text-slate-300 mb-8">
              Comprehensive sourcing support designed for overseas buyers who want reliable suppliers, consistent quality, and smooth logistics — without the usual China sourcing headaches.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {services.map((service) => (
              <div key={service.title} className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h2>
                <p className="text-slate-600 mb-5 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need a Custom Sourcing Plan?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Tell us about your product and requirements. We will propose a tailored sourcing plan with clear milestones and pricing.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

const CheckIcon = ({ className }) => (
  <CheckCircle2 className={className} />
);

export default Services;
