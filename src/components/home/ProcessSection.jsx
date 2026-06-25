import { Link } from 'react-router-dom';
import { MessageSquare, Search, Factory, ClipboardCheck, Package, Truck, ArrowRight } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Inquiry',
    description: 'Tell us what you need — product type, specifications, target price, and quantity. We respond within 24 hours.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Identification',
    description: 'We search our verified network and identify 3–5 qualified suppliers that match your requirements.',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Factory Audit',
    description: 'We conduct on-site or document-based audits to verify production capacity, certifications, and reliability.',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Sample & Approval',
    description: 'Samples are arranged, inspected, and shipped to you for approval before any bulk order is placed.',
  },
  {
    number: '05',
    icon: Package,
    title: 'Production Monitoring',
    description: 'We follow up with the factory during production and conduct mid-production and pre-shipment inspections.',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate with freight forwarders, prepare export documents, and track your shipment to destination.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f4f6f9]" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Sourcing Process"
          title="How We Source for You"
          subtitle="A structured, transparent process from inquiry to delivery — designed to minimize risk and maximize efficiency."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#1a4f8a] rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#e8621a] font-bold text-sm">{step.number}</span>
                      <h3 className="font-bold text-[#0d2340] text-base">{step.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    {(index + 1) % 3 !== 0 && (
                      <ArrowRight className="w-5 h-5 text-[#1a4f8a]/30" />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-[#1a4f8a] hover:bg-[#0d2340] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            See Full Process Details <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
