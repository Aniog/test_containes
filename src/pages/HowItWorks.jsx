import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, CheckCircle, Truck, Award } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      desc: 'We discuss your product requirements, target markets, quality standards, budget parameters, and timeline expectations.',
      duration: '1-2 days',
      icon: Calendar,
    },
    {
      number: '02',
      title: 'Supplier Research',
      desc: 'Our team screens suppliers from our database and industry networks, matching capabilities to your specifications.',
      duration: '5-10 business days',
      icon: Users,
    },
    {
      number: '03',
      title: 'Supplier Shortlist & Samples',
      desc: 'We present 3-5 qualified suppliers with capability summaries. Approved suppliers provide samples for your evaluation.',
      duration: '2-4 weeks',
      icon: CheckCircle,
    },
    {
      number: '04',
      title: 'Factory Verification',
      desc: 'For shortlisted suppliers, we conduct on-site audits covering production capacity, quality systems, and compliance.',
      duration: '1-2 weeks',
      icon: Award,
    },
    {
      number: '05',
      title: 'Order Placement & Production',
      desc: 'We support purchase order finalization, deposit coordination, and maintain production progress monitoring.',
      duration: 'Varies by product',
      icon: CheckCircle,
    },
    {
      number: '06',
      title: 'Quality Inspection',
      desc: 'Pre-shipment inspection verifies product quality, packaging, and labeling against agreed specifications.',
      duration: '2-5 business days',
      icon: CheckCircle,
    },
    {
      number: '07',
      title: 'Shipping & Documentation',
      desc: 'We coordinate freight booking, prepare export documentation, and support customs clearance processes.',
      duration: 'Varies by destination',
      icon: Truck,
    },
  ];

  const deliverables = [
    'Supplier capability reports',
    'Factory audit documentation',
    'Sample evaluation summaries',
    'Production progress updates',
    'Inspection reports with photos',
    'Export documentation package',
  ];

  return (
    <div>
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">How It Works</h1>
          <p className="text-lg text-[#475569] max-w-2xl">A structured, transparent process designed to reduce sourcing risk and improve outcomes.</p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-12 border-b border-[#E2E8F0] pb-12 last:border-0 last:pb-0">
              <div className="md:w-24 flex-shrink-0">
                <div className="text-[#1E40AF] text-4xl font-semibold tracking-tighter">{step.number}</div>
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <step.icon className="w-5 h-5 text-[#1E40AF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-[#475569] leading-relaxed mb-3">{step.desc}</p>
                    <span className="inline-block text-xs font-medium px-3 py-1 bg-[#F1F5F9] text-[#475569] rounded">Typical duration: {step.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-8">What You Receive</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-[#475569]">
                <CheckCircle className="w-5 h-5 text-[#059669] flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to begin?</h2>
        <p className="text-[#475569] mb-8 max-w-md mx-auto">Contact us to schedule an initial consultation about your sourcing project.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1E40AF] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#1E3A8A] transition-colors">
          Start Your Project <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
};

export default HowItWorks;
