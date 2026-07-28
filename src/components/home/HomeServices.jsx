import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, Package } from 'lucide-react';
import { SectionHeader } from '@/components/shared';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified manufacturers that match your product specs, MOQ, and budget — saving you weeks of research.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits to verify business licenses, production capacity, certifications, and working conditions before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and container loading inspections by our trained QC team to catch defects early.',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'We monitor your order from raw material to finished goods, providing regular updates and resolving issues on the ground.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and ensure your goods arrive on time and in full.',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'From product design to branded packaging, we help you develop private label products with reliable OEM manufacturers.',
  },
];

const HomeServices = () => (
  <section className="py-16 md:py-24 bg-bg-light">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="What We Do"
        title="End-to-End China Sourcing Services"
        subtitle="From finding the right supplier to delivering goods to your door — we manage every step of the sourcing process."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow group"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-navy transition-colors">
              <Icon className="w-6 h-6 text-blue-navy group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-blue-navy mb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/services"
          className="inline-block border-2 border-blue-navy text-blue-navy hover:bg-blue-navy hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
        >
          View All Services
        </Link>
      </div>
    </div>
  </section>
);

export default HomeServices;
