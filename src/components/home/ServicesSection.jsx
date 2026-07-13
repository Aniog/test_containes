import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified manufacturers that match your product specifications, MOQ, and budget requirements.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site audits to verify factory capabilities, certifications, production capacity, and compliance standards.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and final inspections to ensure your products meet agreed specifications.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    description: 'Regular updates and on-site monitoring throughout the production cycle to prevent delays and quality issues.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'We coordinate with freight forwarders, handle export documentation, and manage logistics from factory to port.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    description: 'Support for custom packaging, branding, and OEM product development with vetted manufacturing partners.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <p className="section-label mb-3">What We Do</p>
          <h2 className="section-heading mb-4">End-to-End Sourcing Services</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            From finding the right supplier to getting goods delivered, we manage every step of the China sourcing process on your behalf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="card-base group">
                <div className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-brand-navy font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
