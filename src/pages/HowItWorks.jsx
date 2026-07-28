import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, FileText, Users, PackageCheck, Truck } from 'lucide-react';
import CTAButton from '../components/ui/CTAButton';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      duration: '1-3 days',
      description: 'We discuss your product requirements, target specifications, budget range, and timeline. This helps us understand your priorities and constraints.',
      activities: [
        'Review product specifications and requirements',
        'Clarify quality standards and certifications needed',
        'Discuss target pricing and volume expectations',
        'Identify any regulatory or market-specific requirements',
      ],
    },
    {
      number: '02',
      title: 'Supplier Search',
      duration: '1-2 weeks',
      description: 'We search our supplier database and industry networks to identify candidates that match your criteria. Initial screening eliminates suppliers that clearly do not fit.',
      activities: [
        'Database and network search for relevant suppliers',
        'Initial capability and capacity screening',
        'Preliminary pricing and lead time assessment',
        'Shortlist of 3-5 qualified candidates',
      ],
    },
    {
      number: '03',
      title: 'Verification & Sampling',
      duration: '2-4 weeks',
      description: 'We conduct on-site verification of shortlisted suppliers and coordinate sample production. This stage confirms supplier legitimacy and capability before committing to production.',
      activities: [
        'On-site factory audit and verification',
        'Sample order coordination and review',
        'Quality system and process assessment',
        'Final supplier recommendation with documentation',
      ],
    },
    {
      number: '04',
      title: 'Order Placement',
      duration: '1 week',
      description: 'We support contract negotiation, payment terms, and production scheduling. Clear documentation helps prevent misunderstandings during production.',
      activities: [
        'Contract and purchase order review',
        'Payment term negotiation support',
        'Production schedule confirmation',
        'Quality checkpoints and acceptance criteria',
      ],
    },
    {
      number: '05',
      title: 'Production Monitoring',
      duration: 'Production timeline',
      description: 'We track production progress and conduct in-process checks. Regular updates keep you informed and allow early intervention if issues arise.',
      activities: [
        'Weekly progress reports with photos',
        'Material and component verification',
        'In-process quality checks',
        'Issue identification and resolution support',
      ],
    },
    {
      number: '06',
      title: 'Inspection & Shipping',
      duration: '1-2 weeks',
      description: 'Final inspection confirms products meet specifications before shipment. We coordinate logistics and documentation for smooth customs clearance.',
      activities: [
        'Pre-shipment inspection',
        'Documentation review and preparation',
        'Freight forwarder coordination',
        'Shipping tracking and delivery confirmation',
      ],
    },
  ];

  const deliverables = [
    { icon: FileText, title: 'Written Reports', desc: 'Audit reports, inspection reports, and progress updates with photos and findings.' },
    { icon: Users, title: 'Direct Communication', desc: 'Access to our team for questions and clarifications throughout the project.' },
    { icon: PackageCheck, title: 'Quality Documentation', desc: 'Inspection records, test results, and compliance documentation as applicable.' },
    { icon: Truck, title: 'Shipping Support', desc: 'Coordination with forwarders and guidance on export documentation.' },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#F9FAFB] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold text-[#0A2540] mb-4">How It Works</h1>
            <p className="text-lg text-[#4B5563] mb-6">
              A structured process designed to reduce risk and improve outcomes when sourcing from China. Each step builds on the previous to verify suppliers and control quality.
            </p>
            <CTAButton />
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="grid md:grid-cols-12 gap-8 border-b border-gray-200 pb-12 last:border-b-0 last:pb-0">
                <div className="md:col-span-3">
                  <div className="text-[#1E40AF] text-sm font-semibold mb-1">{step.number}</div>
                  <h3 className="text-xl font-semibold text-[#0A2540] mb-2">{step.title}</h3>
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] bg-gray-100 px-2.5 py-1 rounded">
                    <Clock className="w-3.5 h-3.5" />
                    {step.duration}
                  </div>
                </div>
                <div className="md:col-span-9">
                  <p className="text-[#4B5563] mb-4">{step.description}</p>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1">
                    {step.activities.map((activity, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[#1F2937] py-1">
                        <CheckCircle className="w-4 h-4 text-[#059669] mt-0.5 flex-shrink-0" />
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className="py-16 md:py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[#0A2540] mb-8 text-center">What You Receive</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-11 h-11 rounded-lg bg-[#EFF6FF] flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#1E40AF]" />
                </div>
                <h3 className="font-semibold text-[#0A2540] mb-2">{item.title}</h3>
                <p className="text-sm text-[#4B5563]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Expectations */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[#0A2540] mb-8 text-center">Typical Timelines</h2>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4 p-5 border border-gray-200 rounded-lg">
              <div className="md:w-48 font-semibold text-[#0A2540]">Simple products</div>
              <div className="text-sm text-[#4B5563]">6-10 weeks from inquiry to shipment for standard items with existing supplier capabilities.</div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4 p-5 border border-gray-200 rounded-lg">
              <div className="md:w-48 font-semibold text-[#0A2540]">Custom products</div>
              <div className="text-sm text-[#4B5563]">10-16 weeks including tooling, sampling, and production for products requiring development work.</div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4 p-5 border border-gray-200 rounded-lg">
              <div className="md:w-48 font-semibold text-[#0A2540]">Urgent projects</div>
              <div className="text-sm text-[#4B5563]">Expedited timelines available for time-sensitive requirements. Additional fees may apply.</div>
            </div>
          </div>
          <p className="text-xs text-[#6B7280] mt-4 text-center">
            Actual timelines depend on product complexity, supplier availability, and production schedules.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A2540] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Have a specific sourcing requirement?</h2>
          <p className="text-gray-300 mb-6">We can provide a preliminary timeline and approach based on your needs.</p>
          <CTAButton />
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
