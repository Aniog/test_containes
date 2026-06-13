import { Search, ShieldCheck, Eye, BarChart3, Truck, FileCheck } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist reliable manufacturers in China based on your product specifications, volume needs, and quality requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits to confirm business licenses, production capacity, certifications, and compliance with international standards.',
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    description: 'Pre-production, in-line, and pre-shipment inspections to ensure your products meet agreed specifications before they leave the factory.',
  },
  {
    icon: BarChart3,
    title: 'Production Monitoring',
    description: 'Regular updates and on-site visits throughout the production cycle to track progress and address issues before they become costly problems.',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end freight coordination including sea, air, and rail shipping, customs clearance, and last-mile delivery to your warehouse.',
  },
  {
    icon: FileCheck,
    title: 'Sample Management',
    description: 'We arrange product samples, coordinate revisions with manufacturers, and ensure the final sample matches your expectations before bulk orders.',
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-max">
        <SectionHeading
          badge="Our Services"
          title="End-to-End Sourcing Solutions"
          description="From initial supplier research to final delivery, we manage every step of your China sourcing process so you can focus on growing your business."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white border border-gray-100 rounded-xl p-7 hover:shadow-lg hover:border-navy-100 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-navy-500 transition-colors">
                <service.icon className="w-6 h-6 text-navy-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-navy-500 mb-3">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
