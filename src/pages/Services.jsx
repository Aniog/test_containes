import { Search, Factory, ClipboardCheck, BarChart3, Truck, ShieldCheck, FileText, MessageSquare } from 'lucide-react';
import SectionCTA from '../components/shared/SectionCTA';
import SectionHeader from '../components/shared/SectionHeader';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Shortlisting',
    desc: 'We research the Chinese market to identify manufacturers that match your product specifications, quality requirements, MOQ, and target price. You receive a shortlist of 3–5 vetted suppliers with detailed profiles.',
    includes: ['Market research across Alibaba, trade shows, and our network', 'Supplier profile with company background and certifications', 'Initial price benchmarking', 'Communication in Chinese on your behalf'],
  },
  {
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'Before you commit to a supplier, we visit the factory in person to verify their legitimacy, production capacity, quality management systems, and working conditions.',
    includes: ['Business license and registration verification', 'Production capacity and equipment assessment', 'Quality management system review', 'Written audit report with photos'],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'We conduct inspections at key stages of production to ensure your goods meet your specifications and quality standards before they leave China.',
    includes: ['Pre-production inspection (materials and components)', 'During-production inspection (DUPRO)', 'Pre-shipment inspection (PSI)', 'Container loading supervision'],
  },
  {
    icon: BarChart3,
    title: 'Production Follow-up',
    desc: 'Once your order is placed, we act as your eyes and ears on the ground — monitoring production progress, communicating with the factory, and flagging issues early.',
    includes: ['Regular production status updates', 'Factory communication in Chinese', 'Issue escalation and resolution', 'Milestone-based reporting'],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, prepare export documentation, and ensure your goods are shipped correctly and on time.',
    includes: ['Freight forwarder coordination', 'Export documentation review', 'Packing list and commercial invoice verification', 'Booking confirmation and tracking'],
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Certification Support',
    desc: 'We help ensure your products meet the regulatory requirements of your destination market, reducing the risk of customs delays or product recalls.',
    includes: ['CE, FCC, FDA, REACH, RoHS guidance', 'Third-party lab testing coordination', 'Certificate of Origin and compliance documents', 'Labeling and packaging compliance review'],
  },
  {
    icon: FileText,
    title: 'Sample Management',
    desc: 'We manage the sample development process — from requesting samples to reviewing quality and coordinating revisions with the factory.',
    includes: ['Sample request and follow-up', 'Sample quality review against specs', 'Revision coordination with factory', 'Sample shipping to your location'],
  },
  {
    icon: MessageSquare,
    title: 'Supplier Negotiation',
    desc: 'We negotiate pricing, payment terms, lead times, and contract terms on your behalf — using our local knowledge and relationships to get you better outcomes.',
    includes: ['Price negotiation in Chinese', 'Payment term structuring', 'Lead time and MOQ negotiation', 'Contract review and recommendations'],
  },
];

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3 block">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            China Sourcing Services
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            End-to-end sourcing support — from finding the right supplier to getting your goods delivered. Every service is designed to reduce risk and give you full control.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="flex flex-col gap-2">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        title="Not Sure Which Service You Need?"
        subtitle="Tell us about your sourcing project and we'll recommend the right combination of services for your situation."
        ctaLabel="Get a Free Sourcing Quote"
      />
    </>
  );
}
