import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Building2, ClipboardCheck, Factory, Ship, FileCheck, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    summary: 'Find the right manufacturers for your products.',
    description: 'We leverage our extensive network and on-the-ground research to identify suppliers that match your quality standards, pricing targets, and production capacity needs. Our team screens potential partners before you ever contact them.',
    features: [
      'Market research and supplier identification',
      'Capability and capacity assessment',
      'Initial pricing and MOQ negotiation',
      'Shortlist of 3-5 qualified suppliers',
      'Sample coordination from multiple sources',
    ],
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    summary: 'Know who you are working with before you pay.',
    description: 'Our auditors visit factories in person to verify business registration, inspect production facilities, review quality management systems, and assess working conditions. You receive a detailed report with photos and a risk rating.',
    features: [
      'On-site factory audit',
      'Business license and registration verification',
      'Production line and equipment inspection',
      'Quality management system review',
      'Social compliance assessment',
      'Reference checks with existing clients',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    summary: 'Catch defects before they leave China.',
    description: 'We conduct inspections at multiple stages of production to ensure your products meet specifications. From incoming material checks to pre-shipment inspections, we provide detailed reports with photos so you can make informed decisions.',
    features: [
      'Incoming material inspection (IMI)',
      'During production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'AQL-based sampling plans',
      'Detailed photo reports with pass/fail criteria',
    ],
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    summary: 'Stay informed at every stage of manufacturing.',
    description: 'Once production begins, we track progress with regular factory visits, photo updates, and milestone reports. If issues arise, we flag them early and work with the factory to resolve them before they impact your delivery timeline.',
    features: [
      'Regular factory visits and status updates',
      'Milestone tracking against agreed schedules',
      'Photo and video progress reports',
      'Early warning for potential delays',
      'Direct communication with factory management',
      'Coordination of design or spec changes',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    summary: 'From factory floor to your warehouse.',
    description: 'We handle the logistics of getting your goods from the factory to your destination. This includes freight booking, export documentation, customs clearance coordination, and delivery tracking. We work with reliable freight partners to keep costs competitive.',
    features: [
      'Sea, air, and rail freight booking',
      'Export documentation preparation',
      'Customs clearance support',
      'Insurance coordination',
      'Delivery tracking and status updates',
      'Warehousing and consolidation options',
    ],
  },
  {
    icon: FileCheck,
    title: 'Contract Negotiation',
    summary: 'Secure better terms with expert support.',
    description: 'We negotiate pricing, payment terms, lead times, quality standards, and warranty conditions on your behalf. Our bilingual team ensures nothing is lost in translation, and we help structure agreements that protect your interests.',
    features: [
      'Price and MOQ negotiation',
      'Payment term structuring',
      'Lead time agreements with penalties',
      'Quality standard definitions',
      'Warranty and after-sales terms',
      'NDA and exclusivity agreements',
    ],
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-800 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-teal-400 uppercase tracking-wider">Our Services</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Complete Sourcing Support from China
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            From finding suppliers to delivering goods, we provide end-to-end sourcing services that reduce risk and save you time.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center justify-center w-14 h-14 bg-teal-50 rounded-xl mb-5">
                      <Icon className="w-7 h-7 text-teal-700" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">{service.title}</h2>
                    <p className="text-teal-700 font-medium mb-4">{service.summary}</p>
                    <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2.5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-slate-50 rounded-lg border border-slate-200 p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="space-y-4">
                      <div className="h-3 bg-slate-200 rounded-full w-3/4" />
                      <div className="h-3 bg-slate-200 rounded-full w-full" />
                      <div className="h-3 bg-slate-200 rounded-full w-5/6" />
                      <div className="h-3 bg-slate-200 rounded-full w-full" />
                      <div className="h-3 bg-slate-200 rounded-full w-2/3" />
                    </div>
                    <div className="mt-6 p-4 bg-white rounded border border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-xs font-medium text-slate-600">Service status: Available</span>
                      </div>
                      <p className="text-xs text-slate-500">Typical turnaround: 5-15 business days depending on scope.</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to Start Sourcing?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Tell us about your product and we will put together a custom sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-md transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
