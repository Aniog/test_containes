import { Search, Factory, ClipboardCheck, BarChart3, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/shared/PageHero';
import SectionCTA from '@/components/shared/SectionCTA';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    description:
      'We identify qualified Chinese manufacturers that match your product specifications, MOQ requirements, and budget. Our research draws on verified supplier databases, trade show contacts, and our established network across major manufacturing regions.',
    includes: [
      'Product specification analysis',
      'Supplier database research',
      'Initial supplier screening (3–5 candidates)',
      'Comparative supplier report',
      'Introduction and communication setup',
    ],
  },
  {
    icon: Factory,
    title: 'Factory Verification & Audit',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    description:
      'Before you commit to a supplier, we visit the factory in person to verify their legitimacy, production capacity, and quality standards. Our audit reports give you the facts you need to make an informed decision.',
    includes: [
      'Business license and registration check',
      'Production capacity assessment',
      'Equipment and facility inspection',
      'Quality management system review',
      'Worker conditions and compliance check',
      'Detailed written audit report with photos',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    description:
      'We conduct inspections at key stages of production to ensure your goods meet agreed specifications. Our inspectors follow international AQL standards and provide detailed reports with photographic evidence.',
    includes: [
      'Pre-production inspection (materials & components)',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'AQL sampling and defect classification',
      'Full inspection report within 24 hours',
    ],
  },
  {
    icon: BarChart3,
    title: 'Production Follow-up',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    description:
      'Once your order is placed, we monitor production progress and keep you informed at every milestone. We act as your eyes and ears on the factory floor, resolving issues before they become delays.',
    includes: [
      'Production timeline tracking',
      'Weekly progress updates with photos',
      'Issue identification and escalation',
      'Supplier communication management',
      'Delivery date confirmation',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    description:
      'We coordinate with freight forwarders to arrange sea or air freight from the factory to your destination. We handle export documentation on the Chinese side and ensure goods are properly packed and labeled.',
    includes: [
      'Freight forwarder coordination',
      'Sea freight (FCL and LCL) and air freight',
      'Export documentation (packing list, commercial invoice, B/L)',
      'Cargo insurance guidance',
      'Tracking and delivery updates',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Certification Support',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    description:
      'We help you understand and meet the regulatory requirements for your target market. We work with accredited testing labs to obtain the certifications your products need.',
    includes: [
      'CE, FCC, RoHS, REACH guidance',
      'Product testing lab coordination',
      'Certification documentation support',
      'Labeling and packaging compliance review',
      'Import regulation guidance',
    ],
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="End-to-End China Sourcing Services"
        subtitle="From finding the right supplier to delivering goods to your warehouse — we manage every step of the process on your behalf."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`bg-white border ${service.border} rounded-2xl p-8 hover:shadow-card-hover transition-shadow`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center mb-4`}>
                        <Icon className={`w-7 h-7 ${service.color}`} />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h2>
                      <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
                        What's Included
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-slate-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionCTA
        title="Not Sure Which Service You Need?"
        subtitle="Contact us for a free consultation. We'll assess your situation and recommend the right approach."
      />
    </>
  );
}
