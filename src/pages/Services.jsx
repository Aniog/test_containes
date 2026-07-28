import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Building2, ClipboardCheck, Truck, Package, HeadphonesIcon, CheckCircle, ArrowRight } from 'lucide-react';
import Hero from '../components/sections/Hero';
import FAQ from '../components/sections/FAQ';
import InquiryForm from '../components/sections/InquiryForm';

const services = [
  {
    icon: Search,
    title: "Supplier Search & Verification",
    description: "We identify and verify reliable manufacturers through comprehensive due diligence.",
    features: [
      "On-site factory visits",
      "Business license verification",
      "Production capacity assessment",
      "Financial stability checks",
      "Reference verification",
      "Detailed written reports"
    ]
  },
  {
    icon: Building2,
    title: "Factory Audits",
    description: "Comprehensive audits to ensure factories meet your standards and requirements.",
    features: [
      "ISO compliance verification",
      "Quality management systems review",
      "Production line inspection",
      "Worker conditions assessment",
      "Environmental compliance",
      "Video documentation"
    ]
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control & Inspection",
    description: "Professional inspection services at every stage of production.",
    features: [
      "Pre-production inspection",
      "During-production inspection",
      "Pre-shipment inspection",
      "AQL sampling methodology",
      "Detailed inspection reports",
      "Corrective action recommendations"
    ]
  },
  {
    icon: Package,
    title: "Production Follow-up",
    description: "Ongoing monitoring to keep your production on track and on schedule.",
    features: [
      "Regular progress updates",
      "Production schedule tracking",
      "Issue identification & resolution",
      "Capacity monitoring",
      "Timeline management",
      "Photo/video documentation"
    ]
  },
  {
    icon: Truck,
    title: "Shipping & Logistics",
    description: "End-to-end logistics coordination from factory to your door.",
    features: [
      "Freight forwarding services",
      "Customs documentation",
      "Export/import compliance",
      "Container consolidation",
      "Track & trace services",
      "Insurance coordination"
    ]
  },
  {
    icon: HeadphonesIcon,
    title: "Sample Management",
    description: "Streamlined sample coordination and quality assessment.",
    features: [
      "Sample procurement",
      "Quality assessment",
      "Modification coordination",
      "Shipping arrangements",
      "Pre-production approval",
      "Reference sample retention"
    ]
  }
];

const faqs = [
  {
    question: "What is included in a factory verification report?",
    answer: "Our factory verification reports include factory photos, business license verification, production capacity assessment, equipment inventory, quality management system review, and our professional recommendation based on the visit."
  },
  {
    question: "How do you select factories for my project?",
    answer: "We match factories based on your product requirements, quality standards, volume needs, and budget. We first identify 3-5 potential suppliers, verify each one, and present you with detailed options."
  },
  {
    question: "What inspection standards do you follow?",
    answer: "We follow internationally recognized standards including AQL (Acceptable Quality Limit), ISO 2859, and custom specifications. We can also adapt to your specific quality requirements."
  },
  {
    question: "Can I customize services based on my needs?",
    answer: "Yes, we offer flexible service packages. You can choose individual services or opt for our comprehensive sourcing package that covers the entire process from supplier identification to delivery."
  }
];

const Services = () => {
  return (
    <div>
      <Hero
        title="Our Services"
        subtitle="Comprehensive China sourcing solutions tailored to your business needs. From supplier verification to final delivery."
        ctaText="Request a Quote"
        secondaryCta="View Our Process"
        secondaryLink="/how-it-works"
        showTrust={false}
      />
      
      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-lg text-text-secondary mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-success flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-bg-alt rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                    <service.icon size={80} className="text-primary/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Sourcing?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and custom quote for your China sourcing needs. No obligation, just practical advice.
          </p>
          <Link to="/contact" className="btn-primary">
            Get Your Free Quote
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
      
      <FAQ 
        eyebrow="Common Questions"
        title="Service-Related FAQs"
        subtitle="Answers to frequently asked questions about our services."
        faqs={faqs}
      />
      
      <InquiryForm />
    </div>
  );
};

export default Services;
