import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, FileCheck, Truck, Award } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      title: 'Initial Consultation',
      duration: 'Week 1',
      desc: 'We discuss your product requirements, target specifications, volume needs, timeline, and budget parameters.',
      details: ['Product specifications review', 'Volume and timeline requirements', 'Quality standards definition', 'Budget parameters'],
    },
    {
      icon: Users,
      title: 'Supplier Identification',
      duration: 'Weeks 2-3',
      desc: 'We search our supplier database and industry networks to identify manufacturers matching your criteria.',
      details: ['Database and network search', 'Initial capability screening', 'RFQ distribution', 'Response evaluation'],
    },
    {
      icon: FileCheck,
      title: 'Factory Verification',
      duration: 'Weeks 3-5',
      desc: 'On-site audits verify supplier legitimacy, production capacity, quality systems, and compliance.',
      details: ['Business verification', 'Production capacity audit', 'Quality system review', 'Final supplier shortlist'],
    },
    {
      icon: Award,
      title: 'Sample & Approval',
      duration: 'Weeks 5-7',
      desc: 'We coordinate sample production, review quality, and facilitate approval before mass production.',
      details: ['Sample coordination', 'Quality assessment', 'Specification refinement', 'Production approval'],
    },
    {
      icon: Truck,
      title: 'Production & Delivery',
      duration: 'Weeks 7+',
      desc: 'Production monitoring, quality inspection, and shipping coordination ensure on-time delivery.',
      details: ['Production monitoring', 'Pre-shipment inspection', 'Logistics coordination', 'Delivery confirmation'],
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-6">How It Works</h1>
          <p className="text-xl text-slate-300">A structured process designed to minimize risk and deliver reliable results.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="md:w-1/3">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <div className="text-sm font-medium text-slate-500">{step.duration}</div>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-slate-600 mb-6">{step.desc}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Ready to Begin?</h2>
          <p className="text-slate-600 mb-8">Start with a free consultation to discuss your sourcing requirements.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded font-medium hover:bg-slate-800 transition-colors">
            Schedule a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;