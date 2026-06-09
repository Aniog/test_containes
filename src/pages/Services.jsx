import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, ClipboardCheck, Ship, Package, Star, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right supplier for your product',
    description: 'We have a database of thousands of vetted Chinese manufacturers across multiple industries. Our team conducts systematic research to identify suppliers that match your specific product requirements, quality expectations, and budget constraints.',
    features: [
      'Tailored supplier shortlists (3-5 qualified candidates)',
      'Price comparison and negotiation support',
      'Capability assessment against your requirements',
      'References and past client verification',
    ],
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    subtitle: 'Know exactly who you are working with',
    description: 'We visit factories in person to verify their credentials, production capacity, and compliance with international standards. No virtual audits — our team goes on-site.',
    features: [
      'Business license and registration verification',
      'Production line capability assessment',
      'Certification validation (ISO, BSCI, FDA, CE, etc.)',
      'Working conditions and social compliance check',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control Inspections',
    subtitle: 'Catch issues before they reach your customers',
    description: 'Our experienced QC inspectors conduct inspections throughout the production cycle using internationally recognized AQL standards.',
    features: [
      'In-process quality checks during production',
      'Pre-shipment inspection (PSI) before container loading',
      'Container loading supervision',
      'Custom testing protocols for your products',
    ],
  },
  {
    icon: Ship,
    title: 'Production Monitoring',
    subtitle: 'Stay informed at every stage',
    description: 'We provide regular updates on production progress, raw material status, and timeline adherence, so you never have to wonder where your order stands.',
    features: [
      'Weekly production progress reports with photos',
      'Raw material and component verification',
      'Timeline tracking and proactive issue escalation',
      'Dedicated project manager for each order',
    ],
  },
  {
    icon: Package,
    title: 'Shipping & Logistics Coordination',
    subtitle: 'From factory to your doorstep',
    description: 'We handle the complexity of international shipping so you can focus on your core business. Our logistics partners offer competitive rates for all major trade routes.',
    features: [
      'Sea, air, and rail freight booking',
      'Export documentation and customs clearance',
      'Cargo insurance coordination',
      'Door-to-door delivery options',
    ],
  },
  {
    icon: Star,
    title: 'Product Development Support',
    subtitle: 'Bring your product ideas to life',
    description: 'From concept to finished product, we help you navigate the manufacturing process, including customization, packaging, sampling, and supplier negotiation.',
    features: [
      'Product specification development',
      'Sample coordination and review',
      'Custom packaging design and sourcing',
      'Supplier negotiation and contract review',
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            End-to-end China sourcing support designed to help you find quality suppliers,
            manage production, and deliver results with confidence.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24">
        <div className="container-custom space-y-24">
          {services.map((service, idx) => (
            <div key={service.title} id={service.title.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-24">
              <div className={`grid md:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={idx % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">{service.title}</h2>
                  <p className="text-accent font-medium mb-4">{service.subtitle}</p>
                  <p className="text-secondary leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-secondary">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-surface rounded-xl border border-border p-8 ${idx % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <h3 className="text-lg font-semibold text-primary mb-4">Why This Matters</h3>
                  <p className="text-secondary text-sm leading-relaxed mb-4">
                    {idx === 0 && 'Finding a reliable supplier is the foundation of successful sourcing. Without proper vetting, you risk quality issues, delays, and financial losses. Our systematic approach minimizes these risks.'}
                    {idx === 1 && 'A factory that looks good on paper may not meet your standards in reality. On-site verification reveals the truth about production capacity, working conditions, and quality management.'}
                    {idx === 2 && 'Early detection of quality issues saves time and money. Our inspections follow international standards and catch problems when they are still fixable.'}
                    {idx === 3 && 'Production delays are the most common sourcing headache. Active monitoring and regular communication keep your order on track and prevent last-minute surprises.'}
                    {idx === 4 && 'International shipping involves complex documentation and coordination. A small error can cause delays or additional costs. Our experienced team ensures smooth clearance.'}
                    {idx === 5 && 'Bringing a new product to market requires close collaboration between buyer and manufacturer. We bridge that gap and ensure your specifications are clearly understood.'}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Tell us about your project and we will recommend the right services for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Get a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}