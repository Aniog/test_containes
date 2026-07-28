import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FileCheck, Package, Truck, CheckCircle } from 'lucide-react';
import SectionHeader from '../sections/SectionHeader';

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Requirements & Research",
    description: "We discuss your product needs, specifications, target pricing, and quality standards."
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Supplier Identification",
    description: "We find suitable factories, conduct verification visits, and present detailed reports."
  },
  {
    icon: Package,
    step: "03",
    title: "Sample & Negotiation",
    description: "We coordinate samples, facilitate negotiations, and finalize terms on your behalf."
  },
  {
    icon: Truck,
    step: "04",
    title: "Production & QC",
    description: "We monitor production, conduct inspections, and ensure quality compliance."
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Shipping & Delivery",
    description: "We handle logistics, documentation, and coordinate delivery to your destination."
  }
];

const ProcessTimeline = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Our Process"
          title="How We Work With You"
          subtitle="A transparent, step-by-step approach to sourcing your products from China."
          className="mb-16"
        />
        
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card p-6 text-center relative z-10">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 -mt-12 shadow-lg">
                    <step.icon size={28} className="text-white" />
                  </div>
                  <div className="text-accent font-bold text-sm mb-2">Step {step.step}</div>
                  <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/how-it-works" className="btn-secondary">
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
