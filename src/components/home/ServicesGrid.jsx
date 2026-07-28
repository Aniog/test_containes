import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Building2, ClipboardCheck, Truck, Package, HeadphonesIcon } from 'lucide-react';
import SectionHeader from '../sections/SectionHeader';

const services = [
  {
    icon: Search,
    title: "Supplier Search & Verification",
    description: "We identify and verify reliable manufacturers through on-site visits, business license checks, and capacity assessments.",
    link: "/services"
  },
  {
    icon: Building2,
    title: "Factory Audits",
    description: "Comprehensive factory audits including production capacity, quality management systems, and compliance verification.",
    link: "/services"
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control & Inspection",
    description: "Pre-production, during-production, and pre-shipment inspections using AQL standards to ensure your products meet specifications.",
    link: "/services"
  },
  {
    icon: Package,
    title: "Production Follow-up",
    description: "Regular progress updates, production monitoring, and issue resolution throughout the manufacturing process.",
    link: "/services"
  },
  {
    icon: Truck,
    title: "Shipping & Logistics",
    description: "End-to-end shipping coordination including documentation, freight forwarding, and customs clearance support.",
    link: "/services"
  },
  {
    icon: HeadphonesIcon,
    title: "Sample Management",
    description: "Sample coordination, quality assessment, and pre-production approval to ensure your product meets expectations.",
    link: "/services"
  }
];

const ServicesGrid = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Our Services"
          title="Complete China Sourcing Solutions"
          subtitle="From supplier identification to final delivery, we handle every step of your China sourcing journey."
          className="mb-12"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="card p-8 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
