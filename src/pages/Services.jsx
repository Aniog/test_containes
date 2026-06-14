import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Shield, ClipboardCheck, Factory, Truck, 
  FileText, Users, Award, Package, Calendar 
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Identification & Sourcing',
      description: 'We locate manufacturers capable of producing your products to the required specifications, quality level, and volume.',
      details: [
        'Product requirement analysis and specification review',
        'Targeted supplier search across relevant industrial clusters',
        'Initial screening for capability, export experience, and capacity',
        'Shortlist presentation with preliminary pricing and MOQs',
        'Introduction and communication facilitation',
      ],
    },
    {
      icon: Shield,
      title: 'Factory Verification & Audits',
      description: 'On-site verification to confirm that a supplier is legitimate, has the claimed production capacity, and operates to acceptable standards.',
      details: [
        'Business registration and ownership verification',
        'Production facility inspection and equipment assessment',
        'Quality management system review',
        'Workforce and capacity evaluation',
        'Written audit report with photographs and risk rating',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control & Inspection',
      description: 'Independent inspection services to verify product quality before and during production, reducing the risk of receiving defective goods.',
      details: [
        'Pre-shipment inspection (PSI) per AQL standards',
        'During production inspection (DUPRO)',
        'Initial production check and sample approval',
        'Container loading supervision',
        'Detailed inspection reports with photos and measurements',
      ],
    },
    {
      icon: Factory,
      title: 'Production Monitoring',
      description: 'Ongoing oversight of your orders to track progress, identify delays early, and address issues before they become critical.',
      details: [
        'Production schedule review and milestone tracking',
        'Weekly status reports with photos',
        'Issue identification and escalation to factory management',
        'Coordination of corrective actions',
        'Updated delivery timeline communication',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics Coordination',
      description: 'Support for moving goods from the factory to your destination, including freight arrangement and documentation handling.',
      details: [
        'Freight quote comparison (sea, air, rail, express)',
        'Booking and carrier coordination',
        'Export documentation preparation (commercial invoice, packing list, certificate of origin)',
        'Bill of lading review and release management',
        'Customs documentation support for destination clearance',
      ],
    },
    {
      icon: FileText,
      title: 'Compliance & Documentation Support',
      description: 'Assistance with product testing coordination and documentation required for import compliance in your market.',
      details: [
        'Coordination with accredited testing laboratories',
        'Guidance on common standards (CE, FCC, RoHS, REACH, CPSIA, etc.)',
        'Review of supplier-provided compliance documents',
        'Record keeping for traceability',
        'Support for buyer-specific quality agreements',
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Package,
      title: 'Sample Coordination',
      description: 'We manage the process of obtaining, reviewing, and shipping samples for your approval before production begins.',
    },
    {
      icon: Calendar,
      title: 'Trade Show Support',
      description: 'On-site assistance during major trade shows such as Canton Fair, including supplier meetings and product research.',
    },
    {
      icon: Users,
      title: 'Supplier Negotiation Support',
      description: 'We help structure discussions around pricing, payment terms, quality expectations, and production timelines.',
    },
    {
      icon: Award,
      title: 'Ongoing Supplier Management',
      description: 'For clients with recurring orders, we provide retainer-based support for supplier relationship management and continuous improvement.',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h1>
            <p className="text-lg text-slate-600">
              We provide practical, documented support at each stage of the sourcing process. 
              You can engage us for a single service or a complete end-to-end engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section container">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Core Services</h2>
          <p className="text-slate-600">These are the services we provide most frequently for international buyers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="card">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-1.5">{service.title}</h3>
                  <p className="text-slate-600 text-sm">{service.description}</p>
                </div>
              </div>
              <ul className="text-sm text-slate-600 space-y-1.5 pl-1">
                {service.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">Additional Support</h2>
            <p className="text-slate-600">We also provide targeted assistance for specific situations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {additionalServices.map((svc, idx) => (
              <div key={idx} className="card">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <svc.icon className="w-5 h-5 text-slate-700" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{svc.title}</h3>
                <p className="text-sm text-slate-600">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section container">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">How We Engage</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-slate-900 pl-5">
              <h3 className="font-semibold text-lg mb-1">Project-Based Engagements</h3>
              <p className="text-slate-600 text-sm">For one-time sourcing needs, new product development, or specific audits and inspections. We provide a clear scope and fixed or estimated fee before work begins.</p>
            </div>
            <div className="border-l-4 border-slate-900 pl-5">
              <h3 className="font-semibold text-lg mb-1">Retainer Arrangements</h3>
              <p className="text-slate-600 text-sm">For companies with ongoing sourcing activity, we offer monthly support covering supplier management, order tracking, and quality oversight across multiple suppliers.</p>
            </div>
            <div className="border-l-4 border-slate-900 pl-5">
              <h3 className="font-semibold text-lg mb-1">Service Packages</h3>
              <p className="text-slate-600 text-sm">Common combinations such as "New Supplier Setup" (audit + samples + first order support) or "Production Run Support" (monitoring + inspection + shipping coordination).</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-slate-900 text-white">
        <div className="container text-center">
          <h2 className="text-2xl font-semibold text-white mb-3">Need a Specific Service?</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">Tell us what you need and we will provide a scope and quote.</p>
          <Link to="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100 px-8">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;