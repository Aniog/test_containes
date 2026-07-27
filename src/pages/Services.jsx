import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ClipboardCheck, BarChart3, Truck, Headphones, Shield, FileText, Camera, Box, Ship, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    shortDesc: 'Find the right manufacturers for your products.',
    fullDesc: 'We search, shortlist, and pre-qualify suppliers from our extensive network and market research. Our team evaluates potential partners based on production capability, certifications, pricing, and reliability — saving you weeks of research and reducing the risk of working with unverified vendors.',
    features: ['Market & supplier research', 'Request for Quotation (RFQ) management', 'Initial supplier vetting', 'Sample coordination'],
    highlight: '3-5 qualified suppliers within 3-5 days',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    shortDesc: 'Know who you are working with before placing orders.',
    fullDesc: 'Our auditors visit factories in person to verify legitimacy, assess production capacity, inspect equipment, review quality systems, and check social compliance. You receive a detailed audit report with photos, scores, and recommendations.',
    features: ['Business license verification', 'Production capacity assessment', 'Equipment & facility inspection', 'Social compliance audit'],
    highlight: 'On-site audits in Shenzhen, Guangzhou, Dongguan, Yiwu & more',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    shortDesc: 'Ensure every shipment meets your standards.',
    fullDesc: 'Quality issues can destroy a brand. Our inspectors follow AQL sampling standards to check products at critical stages — raw materials, during production, pre-shipment, and container loading. Every inspection includes a detailed report with photos and pass/fail conclusions.',
    features: ['Pre-shipment inspection (PSI)', 'During production inspection (DUPRO)', 'Container loading supervision', 'AQL-based sampling protocols'],
    highlight: 'AQL 2.5 standard inspection reports with photos',
  },
  {
    icon: BarChart3,
    title: 'Production Monitoring',
    shortDesc: 'Stay on top of your orders from start to finish.',
    fullDesc: 'Production delays are costly. We assign a dedicated project manager to track your order milestones, provide weekly updates with photos, flag risks early, and coordinate with the factory to keep everything on schedule.',
    features: ['Weekly progress reports', 'Milestone tracking', 'Issue identification & resolution', 'Production timeline management'],
    highlight: 'Real-time updates with photos and videos',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    shortDesc: 'From factory floor to your warehouse door.',
    fullDesc: 'We manage the entire logistics chain including freight forwarding, customs documentation, consolidation, and last-mile delivery. Whether you need sea freight, air freight, or express courier, we find the best balance of cost and speed.',
    features: ['Freight forwarding (sea, air, rail)', 'Customs documentation', 'FBA prep & delivery', 'Cargo insurance coordination'],
    highlight: 'Door-to-door or FBA delivery worldwide',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    shortDesc: 'A long-term partner, not a one-time service.',
    fullDesc: 'Sourcing is not a one-time task. We stay engaged for reorders, price renegotiations, new product development, supplier relationship management, and continuous improvement. Consider us your China office.',
    features: ['Dedicated account manager', 'Bilingual communication', 'Reorder management', 'Supplier relationship optimization'],
    highlight: '98% client retention rate over 12 years',
  },
];

const additionalServices = [
  { icon: Shield, title: 'Product Compliance', desc: 'CE, FCC, RoHS, REACH testing and certification support.' },
  { icon: FileText, title: 'Contract Review', desc: 'We review purchase agreements and terms to protect your interests.' },
  { icon: Camera, title: 'Product Photography', desc: 'Professional product photos for e-commerce and marketing.' },
  { icon: Box, title: 'Custom Packaging', desc: 'Design and source branded boxes, inserts, and labels.' },
  { icon: Ship, title: 'Amazon FBA Prep', desc: 'Labeling, bundling, and direct delivery to Amazon warehouses.' },
  { icon: MessageSquare, title: 'Supplier Negotiation', desc: 'We negotiate pricing, MOQ, and payment terms on your behalf.' },
];

const Services = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-800 py-16 md:py-24">
        <div className="container mx-auto text-center">
          <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            End-to-End China Sourcing Solutions
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            From finding your first supplier to managing reorders at scale, we provide the full range of services you need to source successfully from China.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-primary-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">{service.title}</h2>
                  <p className="text-slate-500 text-lg mb-4">{service.shortDesc}</p>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.fullDesc}</p>
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 text-sm font-medium px-4 py-2 rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {service.highlight}
                  </div>
                </div>
                <div className={`bg-slate-100 rounded-xl aspect-[4/3] flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <service.icon className="w-20 h-20 text-slate-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Additional Services
            </h2>
            <p className="text-slate-600 text-lg">
              Beyond our core offerings, we provide a range of specialized services to support your China operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-7 border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-primary-200 text-lg mb-8 max-w-2xl mx-auto">
            Tell us about your product and we will provide a free sourcing plan with supplier recommendations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-md transition-colors"
          >
            Get a Free Sourcing Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;