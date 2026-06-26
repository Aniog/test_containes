import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Building2, 
  ClipboardCheck, 
  Package, 
  Truck, 
  Layers,
  CheckCircle2,
  ArrowRight,
  FileText,
  Users,
  Shield,
  Eye,
  BarChart3,
  FileCheck,
  Container,
  Clock,
  DollarSign,
  MessageSquare,
  Globe
} from 'lucide-react';

const services = [
  {
    id: 'supplier-search',
    icon: Search,
    title: 'Supplier Search & Verification',
    description: 'Finding the right supplier is critical. We conduct thorough verification to ensure you work with legitimate, capable manufacturers.',
    features: [
      { icon: Building2, title: 'Factory Verification', description: 'On-site visits to confirm factory existence, ownership, and legitimacy' },
      { icon: FileText, title: 'License Checks', description: 'Verification of business licenses, export licenses, and certifications' },
      { icon: BarChart3, title: 'Capability Assessment', description: 'Evaluation of production capacity, equipment, and technical capabilities' },
      { icon: Users, title: 'Background Research', description: 'Reference checks and reputation verification through industry contacts' }
    ],
    deliverables: ['Factory visit report with photos', 'Business license verification', 'Production capacity assessment', 'Supplier comparison matrix']
  },
  {
    id: 'factory-audit',
    icon: Building2,
    title: 'Factory Audit & Compliance',
    description: 'Comprehensive audits to ensure factories meet your standards, social compliance requirements, and quality systems.',
    features: [
      { icon: Shield, title: 'Social Compliance', description: 'SA8000, Sedex, BSCI compliance audits for labor and ethical standards' },
      { icon: Eye, title: 'Facility Inspection', description: 'Assessment of facilities, equipment, workflows, and production environment' },
      { icon: FileCheck, title: 'Quality Systems', description: 'Evaluation of QC systems, documentation, and process controls' },
      { icon: BarChart3, title: 'Risk Assessment', description: 'Identification of potential risks and recommended mitigations' }
    ],
    deliverables: ['Detailed audit report', 'Compliance certificate', 'Risk assessment matrix', 'Corrective action plan']
  },
  {
    id: 'quality-control',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    description: 'Professional quality inspections at every production stage to catch issues early and ensure your products meet specifications.',
    features: [
      { icon: Eye, title: 'Pre-Production Inspection', description: 'Verification of materials, components, and production readiness' },
      { icon: BarChart3, title: 'During Production Check', description: 'Monitoring production progress and quality consistency' },
      { icon: FileCheck, title: 'Pre-Shipment Inspection', description: 'Final inspection using AQL sampling against your specifications' },
      { icon: Package, title: 'Loading Supervision', description: 'Witness loading and verify correct packaging and labeling' }
    ],
    deliverables: ['Inspection report with photos', 'AQL sampling results', 'Defect classification', 'Non-conformance reports']
  },
  {
    id: 'production-follow',
    icon: Package,
    title: 'Production Follow-up',
    description: 'Regular monitoring and communication throughout production to ensure timelines are met and issues are resolved promptly.',
    features: [
      { icon: Clock, title: 'Progress Tracking', description: 'Regular updates on production status and milestone achievement' },
      { icon: MessageSquare, title: 'Communication Bridge', description: 'Professional liaison between you and the factory' },
      { icon: BarChart3, title: 'Issue Resolution', description: 'Proactive identification and resolution of production issues' },
      { icon: FileText, title: 'Documentation', description: 'Maintain complete records of production communications and decisions' }
    ],
    deliverables: ['Weekly progress reports', 'Production photos and videos', 'Issue logs and resolutions', 'Timeline adherence tracking']
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    description: 'End-to-end logistics support from factory to your destination, managing freight forwarders and customs documentation.',
    features: [
      { icon: Container, title: 'Freight Coordination', description: 'Arrangement of sea freight, air freight, or express shipping' },
      { icon: FileText, title: 'Documentation', description: 'Preparation of shipping documents, certificates of origin, and invoices' },
      { icon: Globe, title: 'Customs Clearance', description: 'Coordination with customs brokers for smooth clearance' },
      { icon: Eye, title: 'Loading Supervision', description: 'Verification of correct goods, packaging, and container loading' }
    ],
    deliverables: ['Shipping quotation comparison', 'Complete shipping documents', 'Tracking updates', 'Customs clearance support']
  },
  {
    id: 'sample-management',
    icon: Layers,
    title: 'Sample Management',
    description: 'Efficient handling of sample requests, evaluation, and feedback to help you make informed decisions before bulk orders.',
    features: [
      { icon: Package, title: 'Sample Requests', description: 'Coordinating sample orders with factories on your behalf' },
      { icon: Eye, title: 'Quality Evaluation', description: 'Assessment of sample quality against specifications' },
      { icon: MessageSquare, title: 'Feedback Management', description: 'Structured feedback to factories for improvements' },
      { icon: BarChart3, title: 'Modification Tracking', description: 'Managing iterative sample improvements until approval' }
    ],
    deliverables: ['Sample tracking updates', 'Quality comparison reports', 'Feedback documentation', 'Approval records']
  }
];

const ServiceCard = ({ service }) => {
  return (
    <div id={service.id} className="scroll-mt-24">
      <div className="bg-white border border-neutral-200 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <service.icon className="w-7 h-7 text-primary-800" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">{service.title}</h2>
            <p className="text-neutral-600 mt-2">{service.description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {service.features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-neutral-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-neutral-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-neutral-50 rounded-lg p-6">
          <h3 className="font-semibold text-neutral-900 mb-4">What You Receive</h3>
          <ul className="grid md:grid-cols-2 gap-3">
            {service.deliverables.map((deliverable) => (
              <li key={deliverable} className="flex items-center gap-2 text-sm text-neutral-600">
                <CheckCircle2 className="w-4 h-4 text-success-500 flex-shrink-0" />
                {deliverable}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Comprehensive China Sourcing Services
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              From initial supplier search to final delivery, we provide end-to-end solutions that protect your interests and ensure quality outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Why Our Services</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">What Sets Us Apart</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-neutral-200 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Building2 className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Local Presence</h3>
              <p className="text-neutral-600">Our team is based in China, enabling on-site visits, face-to-face negotiations, and real-time monitoring.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-neutral-200 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <MessageSquare className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Clear Communication</h3>
              <p className="text-neutral-600">Professional English communication with regular updates. No language barriers, no miscommunication.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-neutral-200 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Shield className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Risk Mitigation</h3>
              <p className="text-neutral-600">We identify and address risks early, protecting your investment and ensuring smooth operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-xl text-primary-200 mb-8">
            Get a free consultation and customized quote for your sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
