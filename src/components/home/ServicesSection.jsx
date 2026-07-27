import { Link } from 'react-router-dom';
import { Search, ClipboardCheck, Box, Truck, MessageSquare, FileCheck, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    description: 'We conduct thorough background checks on factories, verify business licenses, and assess production capabilities to ensure you work with legitimate partners.',
    href: '/services#verification',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our QC team performs inline, during-production, and pre-shipment inspections following AQL standards to catch issues before products leave China.',
    href: '/services#inspection',
  },
  {
    icon: Box,
    title: 'Production Follow-up',
    description: 'We monitor your order progress, track production timelines, and ensure manufacturers meet specifications and delivery schedules.',
    href: '/services#production',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'From freight forwarding to customs clearance, we coordinate efficient shipping solutions tailored to your timeline and budget.',
    href: '/services#shipping',
  },
  {
    icon: MessageSquare,
    title: 'Communication Support',
    description: 'We bridge language and cultural gaps, facilitating clear communication between you and your suppliers throughout the process.',
    href: '/services#communication',
  },
  {
    icon: FileCheck,
    title: 'Documentation',
    description: 'We handle export documentation, certificates of origin, and compliance paperwork to ensure smooth customs processing.',
    href: '/services#documentation',
  },
];

const ServicesSection = () => {
  return (
    <section className="section-spacing bg-white" id="services">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-primary mb-4">Our Services</span>
          <h2 className="section-heading mb-4">
            Everything You Need for Successful China Sourcing
          </h2>
          <p className="section-subheading mx-auto">
            From initial supplier search to final delivery, we provide comprehensive support at every stage of your sourcing journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                to={service.href}
                className="group card-hover p-6 lg:p-8"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-800 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-500 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-primary-700 font-medium text-sm group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
