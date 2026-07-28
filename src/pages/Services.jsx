import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  FileText,
  MessageSquare,
  BarChart3,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import InquiryForm from '../components/InquiryForm.jsx';

const services = [
  {
    icon: Search,
    title: 'Supplier Discovery',
    description: 'We map the supplier landscape for your product, identify real manufacturers, and prepare a shortlist that matches your specs, certifications, and volume.',
    deliverables: ['Shortlist of 3–5 verified suppliers', 'Capability comparison sheet', 'Initial quotation summary'],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'Our team visits or audits factories to confirm business licenses, production capacity, equipment, quality systems, and social compliance where required.',
    deliverables: ['Factory audit report with photos', 'License and certification check', 'Risk rating and recommendation'],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Independent inspections before, during, and after production to verify materials, workmanship, quantities, packing, and labeling against your standards.',
    deliverables: ['AQL-based inspection report', 'Defect photos and classification', 'Pass / fail recommendation'],
  },
  {
    icon: Factory,
    title: 'Production Follow-Up',
    description: 'We monitor manufacturing milestones, push suppliers to meet deadlines, and report progress so you are never left guessing.',
    deliverables: ['Weekly progress updates', 'Milestone tracking sheet', 'Delay alerts and recovery plans'],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'From export documentation and consolidation to booking freight and tracking departure, we coordinate the handoff from factory floor to port or door.',
    deliverables: ['Booking and document support', 'Packing list and invoice review', 'Shipment tracking updates'],
  },
  {
    icon: MessageSquare,
    title: 'Negotiation & Contract Support',
    description: 'We help negotiate pricing, payment terms, lead times, and penalty clauses, then translate key terms into a clear bilingual purchase contract.',
    deliverables: ['Negotiation summary', 'Bilingual contract draft', 'Payment and term recommendations'],
  },
];

const addOns = [
  {
    icon: FileText,
    title: 'Sample Coordination',
    description: 'Arrange prototype or production samples, track delivery, and compare against specifications.',
  },
  {
    icon: BarChart3,
    title: 'Cost Breakdown Analysis',
    description: 'Understand material, labor, overhead, and logistics costs to identify where quotes can improve.',
  },
  {
    icon: ShieldCheck,
    title: 'IP & Compliance Checks',
    description: 'Review certifications, labeling, and regulatory requirements for your target market.',
  },
];

const Services = () => {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold tracking-wide uppercase text-amber mb-3">
              Services
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Sourcing services that protect your business
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              From supplier search to shipping, we provide the hands-on support you need to source from China with less risk and more control.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="services-main-title"
            eyebrow="What We Do"
            title="Core sourcing services"
            description="Each service can be used alone or combined into a complete sourcing package."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-border p-6 md:p-8 shadow-card hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-light text-amber flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{service.title}</h3>
                <p className="text-slate-muted leading-relaxed mb-5">{service.description}</p>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate">Deliverables</span>
                  <ul className="mt-2 space-y-1.5">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="text-sm text-slate flex items-start gap-2">
                        <span className="text-amber mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="services-addons-title"
            eyebrow="Add-Ons"
            title="Extra support when you need it"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {addOns.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-border p-6 shadow-card">
                <div className="w-12 h-12 rounded-lg bg-navy text-white flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-slate-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
            Not sure which service fits your project?
          </h2>
          <p className="text-lg text-slate-muted leading-relaxed mb-8">
            Tell us about your product and goals. We will recommend a service package and provide a clear quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-amber text-white font-semibold px-8 py-4 rounded-lg hover:bg-amber-hover transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </>
  );
};

export default Services;
