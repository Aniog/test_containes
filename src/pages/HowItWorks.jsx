import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Search, 
  Building2, 
  ClipboardCheck,
  Package,
  Truck,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Clock,
  Users,
  Shield,
  DollarSign,
  BarChart3,
  FileCheck
} from 'lucide-react';

const phases = [
  {
    number: 1,
    title: 'Inquiry & Planning',
    description: 'We start by understanding your requirements, budget, and timeline.',
    duration: '1-2 days',
    steps: [
      { icon: FileText, title: 'Requirements Gathering', description: 'We collect detailed product specifications, quality requirements, and target pricing' },
      { icon: MessageSquare, title: 'Needs Analysis', description: 'Discussion of your business goals, volume expectations, and delivery timeline' },
      { icon: BarChart3, title: 'Project Scope Definition', description: 'Clear outline of services needed and expected deliverables' }
    ],
    deliverables: ['Project scope document', 'Service proposal', 'Timeline estimate', 'Cost quotation']
  },
  {
    number: 2,
    title: 'Supplier Search & Verification',
    description: 'We find and verify suitable manufacturers through rigorous screening.',
    duration: '5-15 days',
    steps: [
      { icon: Search, title: 'Supplier Identification', description: 'Research and identification of potential manufacturers from our network and industry databases' },
      { icon: Building2, title: 'Factory Visits', description: 'On-site visits to verify factory existence, assess facilities, and meet management' },
      { icon: FileCheck, title: 'Background Verification', description: 'Business license checks, export experience verification, and reference checks' },
      { icon: BarChart3, title: 'Capability Assessment', description: 'Evaluation of production capacity, equipment, certifications, and quality systems' }
    ],
    deliverables: ['Supplier shortlist (3-5 options)', 'Factory visit reports with photos', 'Capability comparison matrix', 'Supplier recommendation report']
  },
  {
    number: 3,
    title: 'Negotiation & Selection',
    description: 'We handle negotiations and help you select the best supplier for your needs.',
    duration: '3-7 days',
    steps: [
      { icon: DollarSign, title: 'Price Negotiation', description: 'Professional negotiation to secure competitive pricing and favorable payment terms' },
      { icon: FileText, title: 'Contract Review', description: 'Review and refinement of purchase agreements, ensuring protective clauses' },
      { icon: MessageSquare, title: 'Terms Discussion', description: 'Clarification of MOQ, lead times, quality standards, and penalty clauses' },
      { icon: CheckCircle2, title: 'Supplier Selection', description: 'Final decision support based on your priorities and our recommendations' }
    ],
    deliverables: ['Negotiation summary', 'Price comparison report', 'Draft contract review', 'Final supplier recommendation']
  },
  {
    number: 4,
    title: 'Sample Development',
    description: 'We coordinate sample production and evaluation to ensure product fit.',
    duration: '2-6 weeks',
    steps: [
      { icon: Package, title: 'Sample Requests', description: 'Coordinating sample orders with clear specifications and requirements' },
      { icon: ClipboardCheck, title: 'Quality Evaluation', description: 'Detailed assessment of sample quality against your specifications' },
      { icon: MessageSquare, title: 'Feedback Loop', description: 'Structured communication of required modifications to suppliers' },
      { icon: CheckCircle2, title: 'Sample Approval', description: 'Final approval process before proceeding to bulk production' }
    ],
    deliverables: ['Sample tracking updates', 'Quality evaluation reports', 'Modification feedback documentation', 'Approved sample reference']
  },
  {
    number: 5,
    title: 'Production Monitoring',
    description: 'We oversee production to ensure quality standards and timelines are met.',
    duration: 'Varies by order',
    steps: [
      { icon: ClipboardCheck, title: 'Pre-Production Inspection', description: 'Verification of materials, components, and production readiness' },
      { icon: BarChart3, title: 'Production Follow-up', description: 'Regular monitoring of production progress and quality consistency' },
      { icon: FileCheck, title: 'During Production Check', description: 'Quality audits at key production stages' },
      { icon: MessageSquare, title: 'Issue Resolution', description: 'Proactive communication and resolution of any issues' }
    ],
    deliverables: ['Weekly progress reports', 'Production photos and videos', 'QC inspection reports', 'Issue resolution logs']
  },
  {
    number: 6,
    title: 'Final Inspection & Shipping',
    description: 'Rigorous final checks before coordinating shipment to your location.',
    duration: '3-7 days',
    steps: [
      { icon: ClipboardCheck, title: 'Pre-Shipment Inspection', description: 'Final inspection using AQL sampling against all specifications' },
      { icon: Package, title: 'Packaging Verification', description: 'Check of packaging, labeling, and barcodes for accuracy' },
      { icon: Truck, title: 'Loading Supervision', description: 'Witness loading and verify correct goods are shipped' },
      { icon: FileCheck, title: 'Documentation', description: 'Preparation and verification of all shipping documents' }
    ],
    deliverables: ['Final inspection report', 'Loading supervision photos', 'Complete shipping documents', 'Bill of lading copy']
  }
];

const benefits = [
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'Every step is designed to identify and address potential issues before they become problems.',
    stat: '95%',
    statLabel: 'Issues caught early'
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'We handle the time-consuming aspects of China sourcing so you can focus on your business.',
    stat: '40%',
    statLabel: 'Faster time-to-market'
  },
  {
    icon: DollarSign,
    title: 'Cost Efficiency',
    description: 'Our local expertise and negotiation skills help secure better pricing and terms.',
    stat: '25%',
    statLabel: 'Average cost reduction'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Access to a team of sourcing experts with deep knowledge of Chinese manufacturing.',
    stat: '24/7',
    statLabel: 'Communication support'
  }
];

const PhaseCard = ({ phase, isLast }) => {
  return (
    <div className="relative">
      <div className={`flex flex-col lg:flex-row gap-6 ${isLast ? '' : 'pb-12'}`}>
        {/* Phase Number & Info */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-primary-800 rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{phase.number}</span>
            </div>
            <div className="hidden lg:block flex-1 h-px bg-primary-200" />
          </div>
          <div className="lg:text-right">
            <h3 className="text-xl font-bold text-neutral-900">{phase.title}</h3>
            <p className="text-neutral-600 text-sm mt-1">{phase.description}</p>
            <div className="inline-flex items-center gap-1 mt-2 text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
              <Clock className="w-3 h-3" />
              {phase.duration}
            </div>
          </div>
        </div>

        {/* Steps & Deliverables */}
        <div className="flex-1 bg-white border border-neutral-200 rounded-xl p-6">
          <h4 className="font-semibold text-neutral-900 mb-4">What We Do</h4>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {phase.steps.map((step) => (
              <div key={step.title} className="flex gap-3">
                <div className="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-4 h-4 text-neutral-600" />
                </div>
                <div>
                  <h5 className="font-medium text-neutral-900 text-sm">{step.title}</h5>
                  <p className="text-xs text-neutral-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-neutral-100 pt-4">
            <h4 className="font-semibold text-neutral-900 mb-3">What You Receive</h4>
            <ul className="grid md:grid-cols-2 gap-2">
              {phase.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-center gap-2 text-sm text-neutral-600">
                  <CheckCircle2 className="w-4 h-4 text-success-500 flex-shrink-0" />
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Connecting Line */}
      {!isLast && (
        <div className="hidden lg:block absolute left-8 top-32 w-px h-12 bg-primary-200" />
      )}
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              How Our China Sourcing Works
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              A systematic, transparent approach to sourcing from China. Every step is designed to minimize risk and ensure quality outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <PhaseCard 
                key={phase.number} 
                phase={phase} 
                isLast={index === phases.length - 1} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Why It Works</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">Benefits of Our Process</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Our systematic approach delivers measurable results for our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl p-6 border border-neutral-200 text-center">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary-800" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-neutral-600 mb-4">{benefit.description}</p>
                <div className="border-t border-neutral-100 pt-4">
                  <div className="text-2xl font-bold text-primary-800">{benefit.stat}</div>
                  <div className="text-xs text-neutral-500">{benefit.statLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Typical Timeline</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">How Long Does It Take?</h2>
            <p className="text-neutral-600 text-lg">
              Timelines vary based on product complexity and requirements. Here's a general overview.
            </p>
          </div>
          <div className="bg-neutral-50 rounded-xl p-6 lg:p-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                <span className="font-medium text-neutral-900">Supplier Search & Verification</span>
                <span className="text-neutral-600">1-3 weeks</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                <span className="font-medium text-neutral-900">Negotiation & Selection</span>
                <span className="text-neutral-600">3-7 days</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                <span className="font-medium text-neutral-900">Sample Development</span>
                <span className="text-neutral-600">2-6 weeks</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                <span className="font-medium text-neutral-900">Production</span>
                <span className="text-neutral-600">2-12 weeks (varies by product)</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                <span className="font-medium text-neutral-900">Inspection & Shipping</span>
                <span className="text-neutral-600">1-2 weeks</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-primary-50 -mx-6 px-6 rounded-lg">
                <span className="font-bold text-neutral-900">Total (Typical First Order)</span>
                <span className="font-bold text-primary-800">2-4 months</span>
              </div>
            </div>
            <p className="text-sm text-neutral-500 mt-6 text-center">
              * Timelines are estimates and may vary based on product complexity, quantity, and supplier availability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-xl text-primary-200 mb-8">
            Let us handle the complexity of China sourcing while you focus on growing your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
