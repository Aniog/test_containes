import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Search, FileText, Factory, Truck, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Initial Consultation',
      duration: '1-2 days',
      desc: 'We discuss your product requirements, target pricing, quality standards, and timeline expectations.',
      activities: [
        'Product specifications review',
        'Quantity and packaging requirements',
        'Budget parameters and timeline',
        'Compliance and certification needs',
      ],
    },
    {
      number: '02',
      icon: Search,
      title: 'Supplier Research',
      duration: '5-7 days',
      desc: 'We search our supplier database and industry networks to identify candidates matching your criteria.',
      activities: [
        'Database and network search',
        'Initial capability screening',
        'Preliminary pricing comparison',
        'Shortlist of 3-5 suppliers',
      ],
    },
    {
      number: '03',
      icon: FileText,
      title: 'Quotation & Samples',
      duration: '7-14 days',
      desc: 'Suppliers provide detailed quotes. We coordinate sample production and delivery for your review.',
      activities: [
        'Detailed quotation collection',
        'Sample ordering and tracking',
        'Sample quality assessment',
        'Supplier comparison report',
      ],
    },
    {
      number: '04',
      icon: Factory,
      title: 'Factory Verification',
      duration: '3-5 days',
      desc: 'For your selected supplier, we conduct an on-site audit to confirm capabilities and legitimacy.',
      activities: [
        'Business documentation review',
        'Production capacity assessment',
        'Quality system evaluation',
        'Audit report with findings',
      ],
    },
    {
      number: '05',
      icon: CheckCircle,
      title: 'Order Placement',
      duration: '1-2 days',
      desc: 'We assist with purchase order finalization, payment terms, and production scheduling.',
      activities: [
        'Contract review support',
        'Payment milestone setup',
        'Production timeline confirmation',
        'Communication protocols established',
      ],
    },
    {
      number: '06',
      icon: Truck,
      title: 'Production & Shipping',
      duration: '4-8 weeks',
      desc: 'We monitor production progress, conduct inspections, and coordinate logistics to delivery.',
      activities: [
        'Weekly production updates',
        'Pre-shipment inspection',
        'Freight booking and documentation',
        'Delivery coordination',
      ],
    },
  ];

  const deliverables = [
    { phase: 'Research Phase', items: ['Supplier shortlist report', 'Pricing comparison matrix', 'Sample evaluation summary'] },
    { phase: 'Verification Phase', items: ['Factory audit report', 'Photo documentation', 'Risk assessment'] },
    { phase: 'Production Phase', items: ['Weekly status reports', 'Inspection certificates', 'Shipping documentation'] },
  ];

  return (
    <div>
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold text-[#0F172A] mb-4">How It Works</h1>
          <p className="text-xl text-[#475569]">A clear, structured process from inquiry to delivery.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-80 flex-shrink-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#EFF6FF] rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-7 h-7 text-[#1E40AF]" />
                  </div>
                  <div>
                    <div className="text-sm font-mono text-[#1E40AF]">{step.number}</div>
                    <div className="font-semibold text-xl text-[#0F172A]">{step.title}</div>
                  </div>
                </div>
                <div className="text-sm text-[#64748B] pl-1">Duration: {step.duration}</div>
              </div>
              <div className="flex-1">
                <p className="text-[#475569] mb-4">{step.desc}</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {step.activities.map((activity, aIdx) => (
                    <div key={aIdx} className="flex gap-2 text-sm text-[#475569]">
                      <span className="text-[#1E40AF] mt-0.5">•</span>
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[#0F172A] mb-8 text-center">What You Receive</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {deliverables.map((del, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-[#E2E8F0]">
                <h3 className="font-semibold text-[#0F172A] mb-4">{del.phase}</h3>
                <ul className="space-y-2">
                  {del.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-sm text-[#475569] flex gap-2">
                      <CheckCircle className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">Ready to Begin?</h2>
        <p className="text-[#475569] mb-8">Start with a consultation to discuss your sourcing needs.</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-[#1E40AF] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1E3A8A] transition-colors"
        >
          Request a Consultation
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
};

export default HowItWorks;
