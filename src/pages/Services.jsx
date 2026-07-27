import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, FileText, Users } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify and qualify manufacturers that match your product specifications, quality standards, and commercial requirements.',
      points: [
        'Detailed product specification review',
        'Supplier database search and outreach',
        'Capability and capacity assessment',
        'Initial price and lead time benchmarking',
        'Shortlist of 3–5 qualified suppliers',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Factory Verification & Audits',
      description: 'On-site and remote verification to confirm legitimacy, production capacity, and compliance before you place orders.',
      points: [
        'Business registration and export license verification',
        'Production capacity and equipment audit',
        'Workforce and quality system review',
        'Social and environmental compliance checks',
        'Detailed audit report with photos and findings',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection Services',
      description: 'Independent quality control at critical production stages to reduce defects and protect your brand.',
      points: [
        'Pre-production inspection (PPI)',
        'During production inspection (DUPRO)',
        'Pre-shipment inspection (PSI) per AQL standards',
        'Container loading supervision',
        'Customized inspection checklists',
      ],
    },
    {
      icon: Truck,
      title: 'Production Follow-up & Coordination',
      description: 'We monitor production timelines and coordinate samples, approvals, and shipping milestones.',
      points: [
        'Production schedule tracking',
        'Sample development coordination',
        'Milestone reporting and issue escalation',
        'Corrective action follow-up',
        'Final production verification',
      ],
    },
    {
      icon: FileText,
      title: 'Export Documentation & Compliance',
      description: 'We help ensure your shipments meet destination country requirements and clear customs smoothly.',
      points: [
        'Commercial invoice and packing list review',
        'Certificate of origin and other documents',
        'Product compliance guidance (CE, FCC, etc.)',
        'Labeling and packaging requirements',
        'Customs broker coordination support',
      ],
    },
    {
      icon: Users,
      title: 'Ongoing Supplier Management',
      description: 'For clients with recurring orders, we provide continuous supplier oversight and performance tracking.',
      points: [
        'Supplier performance scorecards',
        'Quality trend analysis',
        'Price and lead time negotiations',
        'New product development support',
        'Annual factory re-audits',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-16">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs font-semibold text-sky-600 mb-2">Services</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Sourcing services built for B2B buyers</h1>
            <p className="text-lg text-slate-600">We provide practical, documented support at every stage of the sourcing process — from finding suppliers to managing production and logistics.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight mb-3">How we work with clients</h2>
              <p className="text-slate-300 mb-4">Most clients start with a single sourcing project. After the first successful order, many engage us on a retainer or per-order basis for ongoing support.</p>
              <ul className="text-sm text-slate-300 space-y-1.5">
                <li>• Project-based engagements for one-time sourcing needs</li>
                <li>• Retainer arrangements for ongoing supplier management</li>
                <li>• Inspection-only services for existing supply chains</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-sm">
              <div className="font-medium mb-2">What is included in every engagement:</div>
              <ul className="space-y-1.5 text-slate-300">
                <li>• Written scope and deliverables before work begins</li>
                <li>• Regular progress updates via email and shared reports</li>
                <li>• All inspection reports with photos and measurements</li>
                <li>• Direct communication with your team in English</li>
                <li>• No hidden fees or factory commissions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-14 md:py-16 text-center">
        <h2 className="text-2xl font-semibold tracking-tight mb-3">Ready to discuss your sourcing needs?</h2>
        <p className="text-slate-600 mb-6">Tell us about your product and timeline. We will provide a preliminary assessment at no cost.</p>
        <Link to="/contact" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium bg-slate-900 text-white rounded-md hover:bg-slate-800">Get a Free Sourcing Quote</Link>
      </section>
    </div>
  );
};

export default Services;
