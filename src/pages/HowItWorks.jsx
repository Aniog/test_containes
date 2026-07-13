import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, MessageSquare, Search, Factory, ClipboardCheck, Eye, Truck, Package } from 'lucide-react';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Initial Consultation',
    icon: MessageSquare,
    color: 'bg-blue-50 text-brand-navy',
    steps: [
      {
        number: '01',
        title: 'Submit Your Inquiry',
        desc: 'Fill out our sourcing inquiry form with your product requirements, target price, quantity, and any specific needs. The more detail you provide, the better we can match you with the right suppliers.',
      },
      {
        number: '02',
        title: 'Consultation Call',
        desc: 'We schedule a brief call to clarify your requirements, discuss your timeline, and explain our process and fees. No obligation at this stage.',
      },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Supplier Identification',
    icon: Search,
    color: 'bg-orange-50 text-brand-orange',
    steps: [
      {
        number: '03',
        title: 'Market Research',
        desc: 'We search our supplier network, trade databases, and manufacturing hubs to identify factories that produce your product and meet your criteria.',
      },
      {
        number: '04',
        title: 'Supplier Shortlist',
        desc: 'We present you with 3–5 qualified suppliers, including pricing, MOQ, lead times, and our initial assessment of each. You choose which to proceed with.',
      },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Verification & Sampling',
    icon: Factory,
    color: 'bg-green-50 text-brand-green',
    steps: [
      {
        number: '05',
        title: 'Factory Audit',
        desc: 'We visit the selected factory in person to verify their business registration, production capacity, equipment, workforce, and certifications. You receive a written audit report.',
      },
      {
        number: '06',
        title: 'Sample Request & Review',
        desc: 'We request product samples from the factory, review them against your specifications, and send you a detailed sample assessment before you approve production.',
      },
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Order & Production',
    icon: Eye,
    color: 'bg-purple-50 text-purple-700',
    steps: [
      {
        number: '07',
        title: 'Price Negotiation',
        desc: 'Our bilingual team negotiates pricing, payment terms, and delivery schedules directly with the factory in Chinese to get you the best possible deal.',
      },
      {
        number: '08',
        title: 'Production Monitoring',
        desc: 'Once your order is placed, we monitor production progress with weekly updates, flag any issues early, and maintain direct communication with the factory on your behalf.',
      },
    ],
  },
  {
    phase: 'Phase 5',
    title: 'Quality Control',
    icon: ClipboardCheck,
    color: 'bg-yellow-50 text-yellow-700',
    steps: [
      {
        number: '09',
        title: 'Pre-Shipment Inspection',
        desc: 'Before goods are packed and shipped, our inspectors conduct a thorough quality check using AQL sampling standards. You receive a full report with photos and videos.',
      },
      {
        number: '10',
        title: 'Approval & Release',
        desc: 'You review the inspection report and decide whether to approve shipment. If issues are found, we work with the factory to resolve them before goods leave China.',
      },
    ],
  },
  {
    phase: 'Phase 6',
    title: 'Shipping & Delivery',
    icon: Truck,
    color: 'bg-teal-50 text-teal-700',
    steps: [
      {
        number: '11',
        title: 'Shipping Coordination',
        desc: 'We coordinate with your freight forwarder, review all export documents, and ensure goods are booked and loaded correctly for shipment.',
      },
      {
        number: '12',
        title: 'Delivery Confirmation',
        desc: 'We track your shipment and keep you updated until goods arrive at your destination. We\'re available to assist with any issues that arise during transit.',
      },
    ],
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-dark py-20">
        <div className="section-container text-center">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            How It Works
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A transparent, step-by-step process from your first inquiry to final delivery.
            You stay informed and in control at every stage.
          </p>
        </div>
      </section>

      {/* Process Phases */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="flex flex-col gap-16">
            {phases.map((phase, phaseIdx) => {
              const Icon = phase.icon;
              return (
                <div key={phase.phase}>
                  {/* Phase Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${phase.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-brand-muted text-xs font-medium uppercase tracking-wider">{phase.phase}</span>
                      <h2 className="text-xl font-bold text-brand-dark">{phase.title}</h2>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-0 md:pl-13">
                    {phase.steps.map((step) => (
                      <div key={step.number} className="bg-brand-light-blue rounded-xl p-6 border border-brand-border relative overflow-hidden">
                        <div className="absolute top-3 right-4 text-5xl font-bold text-white/60 leading-none select-none">
                          {step.number}
                        </div>
                        <div className="relative z-10">
                          <div className="w-8 h-8 bg-brand-navy rounded-lg flex items-center justify-center mb-3">
                            <span className="text-white font-bold text-xs">{step.number}</span>
                          </div>
                          <h3 className="text-base font-semibold text-brand-dark mb-2">{step.title}</h3>
                          <p className="text-brand-body text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Connector */}
                  {phaseIdx < phases.length - 1 && (
                    <div className="flex justify-center mt-8">
                      <div className="w-px h-8 bg-brand-border" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-brand-light-blue">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">What You Get at Every Stage</h2>
            <p className="text-brand-body max-w-xl mx-auto">
              Transparency is central to how we work. Here's what you receive throughout the process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'Written supplier shortlist with comparison',
              'Factory audit report with photos',
              'Sample assessment report',
              'Weekly production status updates',
              'Pre-shipment inspection report with photos/video',
              'Export documentation review',
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-5 border border-brand-border flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                <span className="text-brand-dark text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Submit your sourcing inquiry and we'll respond within 24 hours.
          </p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
