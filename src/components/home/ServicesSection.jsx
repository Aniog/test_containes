import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../shared/SectionHeader';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified Chinese manufacturers that match your product specifications, MOQ, and budget requirements.',
    link: '/services',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify business licenses, production capacity, certifications, and working conditions before you commit.',
    link: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections, during-production checks, and container loading supervision to ensure your products meet specifications.',
    link: '/services',
  },
  {
    icon: BarChart3,
    title: 'Production Follow-up',
    description: 'Regular updates and milestone tracking throughout the production cycle, so you always know the status of your order.',
    link: '/services',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'We coordinate with freight forwarders, handle export documentation, and ensure your goods are shipped on time and correctly.',
    link: '/services',
  },
  {
    icon: ShieldCheck,
    title: 'Supplier Negotiation',
    description: 'Leverage our local knowledge and relationships to negotiate better prices, payment terms, and lead times on your behalf.',
    link: '/services',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything You Need to Source from China"
          subtitle="From finding the right supplier to getting goods delivered — we manage the entire sourcing process on your behalf."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                to={service.link}
                className="group bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary-dark mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  Learn more →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
