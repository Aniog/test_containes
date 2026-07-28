import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Search, CheckCircle, Factory, Truck, Headphones } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      number: '01',
      title: 'Submit Your Requirements',
      desc: 'Complete our inquiry form or contact us directly. Provide product specifications, target price range, estimated quantity, quality requirements, and timeline.',
      details: [
        'Product description and technical specifications',
        'Target unit price and total budget',
        'Order quantity and frequency expectations',
        'Quality standards and certifications required',
        'Preferred shipping destination and timeline',
      ],
    },
    {
      icon: Search,
      number: '02',
      title: 'Supplier Research & Shortlisting',
      desc: 'We search our supplier database and industry networks to identify manufacturers that match your criteria. We prepare a shortlist with capability summaries.',
      details: [
        'Database and trade show network search',
        'Initial capability and capacity screening',
        'Preliminary pricing and lead time assessment',
        'Shortlist presentation with comparison',
        'Discussion and refinement of options',
      ],
    },
    {
      icon: Factory,
      number: '03',
      title: 'Factory Verification',
      desc: 'We conduct on-site audits of shortlisted suppliers to verify legitimacy, production capability, quality systems, and working conditions.',
      details: [
        'Business registration and legal verification',
        'Production facility inspection',
        'Equipment and capacity assessment',
        'Quality control process review',
        'Written audit report with photos',
      ],
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Samples & Approval',
      desc: 'We coordinate sample production and delivery. You evaluate samples against your specifications and provide feedback for adjustments.',
      details: [
        'Sample order placement and tracking',
        'Sample shipping and customs assistance',
        'Sample evaluation support',
        'Specification clarification with supplier',
        'Final approval documentation',
      ],
    },
    {
      icon: Factory,
      number: '05',
      title: 'Production Oversight',
      desc: 'Once production begins, we monitor progress at key milestones and conduct inspections to catch issues before they become problems.',
      details: [
        'Production schedule confirmation',
        'Pre-production meeting attendance',
        'In-process quality checks',
        'Pre-shipment inspection (AQL)',
        'Progress reports and issue escalation',
      ],
    },
    {
      icon: Truck,
      number: '06',
      title: 'Shipping & Delivery',
      desc: 'We coordinate freight booking, documentation, and track your shipment through to final delivery at your specified destination.',
      details: [
        'Freight quote comparison',
        'Booking and carrier coordination',
        'Export documentation preparation',
        'Customs clearance support',
        'Delivery confirmation and feedback',
      ],
    },
  ];

  const timeline = [
    { phase: 'Inquiry to Shortlist', time: '2-3 weeks' },
    { phase: 'Verification & Samples', time: '3-5 weeks' },
    { phase: 'Production', time: '4-10 weeks' },
    { phase: 'Shipping', time: '2-6 weeks' },
    { phase: 'Total (typical)', time: '11-24 weeks' },
  ];

  return (
    <div>
      <section className="bg-[#0F172A] text-white py-14">
        <div className="container">
          <h1 className="text-white text-3xl md:text-4xl font-semibold mb-4">How It Works</h1>
          <p className="text-[#94A3B8] max-w-2xl">
            A clear, structured process designed to reduce risk and deliver reliable sourcing outcomes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="space-y-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="card">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-80 flex-shrink-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#0F172A] text-white rounded-full flex items-center justify-center font-semibold text-sm">
                          {step.number}
                        </div>
                        <div className="w-10 h-10 bg-[#F1F5F9] rounded-lg flex items-center justify-center">
                          <Icon className="text-[#0EA5E9]" size={22} />
                        </div>
                      </div>
                      <h2 className="font-semibold text-xl">{step.title}</h2>
                    </div>
                    <div className="flex-1">
                      <p className="text-[#475569] mb-4">{step.desc}</p>
                      <ul className="grid md:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
                        {step.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-[#475569]">
                            <span className="text-[#0EA5E9] mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white border-y border-[#E2E8F0]">
        <div className="container">
          <h2 className="section-title mb-6">Typical Timeline</h2>
          <div className="max-w-2xl">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-3 border-b border-[#E2E8F0] last:border-0">
                <span className="text-[#334155]">{item.phase}</span>
                <span className="font-medium text-[#0F172A]">{item.time}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#64748B] mt-4">
            Actual timelines vary based on product complexity, order size, and supplier location. We provide a project-specific schedule after initial assessment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 className="section-title mb-3">Ready to Start?</h2>
          <p className="text-[#475569] mb-6">Submit your requirements and receive a response within one business day.</p>
          <Link to="/contact" className="btn-primary">Get a Free Sourcing Quote</Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
