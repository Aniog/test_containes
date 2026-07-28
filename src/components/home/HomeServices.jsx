import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../shared/SectionHeader';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified Chinese manufacturers that match your product specs, MOQ, and budget — saving you weeks of research.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify business licenses, production capacity, certifications, and working conditions before you commit.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and container loading inspections to ensure your goods meet specifications and quality standards.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: BarChart3,
    title: 'Production Follow-up',
    desc: 'We monitor your order progress, communicate with the factory on your behalf, and flag issues before they become costly problems.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and ensure your goods are shipped on time and correctly.',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Certification',
    desc: 'We help ensure your products meet destination-country standards — CE, FCC, FDA, REACH, and other required certifications.',
    color: 'bg-purple-50 text-purple-600',
  },
];

export default function HomeServices() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything You Need to Source from China"
          subtitle="From finding the right supplier to getting goods delivered — we handle every step of the sourcing process so you can focus on your business."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 md:p-8">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${s.color}`}>
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
