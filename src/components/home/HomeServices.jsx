import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../shared/SectionHeader';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description:
      'We identify and shortlist qualified Chinese manufacturers that match your product specifications, MOQ, and budget requirements.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description:
      'On-site factory audits to verify business licenses, production capacity, certifications, and working conditions before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description:
      'Pre-shipment inspections, during-production checks, and container loading supervision to ensure your goods meet agreed standards.',
  },
  {
    icon: BarChart3,
    title: 'Production Follow-up',
    description:
      'Regular updates and milestone tracking throughout the production cycle so you always know the status of your order.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description:
      'We coordinate with freight forwarders, handle export documentation, and ensure your cargo is ready for on-time departure.',
  },
  {
    icon: ShieldCheck,
    title: 'Supplier Negotiation',
    description:
      'Leverage our local presence and market knowledge to negotiate better pricing, payment terms, and lead times on your behalf.',
  },
];

export default function HomeServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything You Need to Source from China"
          subtitle="From finding the right supplier to getting goods delivered — we manage the entire sourcing process so you can focus on your business."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-gray-200 transition-all group"
            >
              <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors">
                <Icon className="w-6 h-6 text-brand-red" />
              </div>
              <h3 className="text-brand-navy font-semibold text-lg mb-2">{title}</h3>
              <p className="text-brand-slate text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-red transition-colors"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
