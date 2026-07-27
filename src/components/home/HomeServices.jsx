import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified Chinese manufacturers that match your product specifications, budget, and quality requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering production capacity, certifications, equipment, workforce, and export experience.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    desc: 'Pre-production, during-production, and pre-shipment inspections to ensure your products meet specifications.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Weekly progress reports, timeline tracking, and proactive issue resolution throughout the production cycle.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'Freight forwarding, customs documentation, consolidation, and door-to-door delivery management.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing Support',
    desc: 'Dedicated account manager providing continuous communication, problem-solving, and supplier relationship management.',
  },
];

export default function HomeServices() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            End-to-End Sourcing Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From finding the right supplier to delivering finished goods to your warehouse,
            we handle every step of the sourcing process.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-lg border border-gray-100 hover:border-brand-navy/20 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-navy transition-colors">
                <service.icon className="w-6 h-6 text-brand-navy group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-navy-light transition-colors"
          >
            View all services <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
