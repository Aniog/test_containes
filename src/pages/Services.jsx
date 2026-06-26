import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ClipboardCheck, Eye, Truck, Package, FileText, ShieldCheck, ArrowRight, CheckCircle2, Globe, Users, Award } from 'lucide-react';

const servicesList = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Selection',
    desc: 'We search our verified network of 5,000+ factories to find suppliers that match your product requirements, target price, and quality standards.',
    features: ['Market research and supplier identification', 'RFQ management and price comparison', 'Supplier shortlisting with detailed profiles', 'Negotiation support for pricing and terms'],
    imgId: 'service-sourcing-supplier-e5f2a1',
    imgQuery: 'china supplier factory meeting business negotiation',
  },
  {
    icon: Factory,
    title: 'Factory Verification & Audits',
    desc: 'We visit factories in person to verify their legitimacy, production capabilities, certifications, and compliance with your requirements.',
    features: ['On-site factory visits and audits', 'Business license and certification verification', 'Production capacity assessment', 'Social compliance and ethical standards checks'],
    imgId: 'service-factory-audit-b3c9d4',
    imgQuery: 'china factory audit inspection industrial manufacturing',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Multi-stage inspections at every point of the production process to ensure products meet your specifications before shipping.',
    features: ['Pre-production material inspection', 'In-line production monitoring', 'Pre-shipment inspection (AQL sampling)', 'Detailed inspection reports with photos'],
    imgId: 'service-qc-inspection-f7a2e8',
    imgQuery: 'quality control inspection products warehouse checklist',
  },
  {
    icon: Eye,
    title: 'Production Follow-up & Monitoring',
    desc: 'We stay in close contact with suppliers throughout production, providing regular updates and addressing any issues that arise.',
    features: ['Weekly production progress reports', 'Timeline tracking and milestone verification', 'Issue identification and resolution', 'Photo and video documentation'],
    imgId: 'service-production-monitoring-d1b5c6',
    imgQuery: 'factory production line monitoring quality check',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    desc: 'We handle the complete logistics chain from factory to your door, including freight, customs documentation, and delivery scheduling.',
    features: ['Ocean freight (FCL/LCL) booking', 'Air freight for urgent shipments', 'Customs documentation preparation', 'Door-to-door delivery coordination'],
    imgId: 'service-shipping-logistics-a8f3e2',
    imgQuery: 'container shipping logistics cargo port',
  },
  {
    icon: Package,
    title: 'Sample Collection & Management',
    desc: 'We collect samples from multiple suppliers, consolidate them, and ship them together so you can evaluate quality before committing.',
    features: ['Multi-supplier sample collection', 'Sample consolidation and repackaging', 'Express shipping to your location', 'Sample comparison documentation'],
    imgId: 'service-sample-management-c4d7f9',
    imgQuery: 'product samples collection packaging shipping boxes',
  },
];

const whyChooseUs = [
  { icon: Award, title: 'Licensed & Insured', desc: 'Fully registered Chinese business with export licenses and professional indemnity insurance.' },
  { icon: Users, title: 'Dedicated Account Manager', desc: 'One point of contact who understands your business, preferences, and sourcing history.' },
  { icon: Globe, title: 'Global Client Base', desc: 'Trusted by 500+ businesses across 30+ countries on 5 continents.' },
  { icon: ShieldCheck, title: 'No Hidden Fees', desc: 'Transparent, itemized quotes with clear breakdowns for every service we provide.' },
];

const Services = () => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-white/10 text-white/90 text-sm font-semibold rounded-full mb-4">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Comprehensive China Sourcing Services</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">Everything you need to source products from China — from initial supplier discovery to final delivery at your door.</p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {servicesList.map((service, i) => (
            <div key={service.title} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-text mb-4">{service.title}</h2>
                <p className="text-text-secondary text-base leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-3 list-none p-0 m-0">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm text-text">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} rounded-2xl overflow-hidden`}>
                <img
                  data-strk-img-id={service.imgId}
                  data-strk-img={`[${service.imgId}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={service.title}
                  className="w-full h-auto rounded-2xl"
                />
                <span id={`${service.imgId}-title`} className="sr-only">{service.title} {service.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-text text-center mb-12">Why Global Buyers Choose SSourcing China</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-white border border-border rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-text mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Tell us about your project and we'll create a tailored sourcing plan with transparent pricing.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold rounded-xl transition-colors no-underline shadow-lg">
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
