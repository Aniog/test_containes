import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    { num: '01', title: 'Initial Consultation', desc: 'We discuss your product requirements, target price range, quality expectations, and timeline.' },
    { num: '02', title: 'Supplier Search', desc: 'We identify and shortlist 3-5 qualified manufacturers based on your specifications.' },
    { num: '03', title: 'Factory Verification', desc: 'On-site audits verify legitimacy, capabilities, and compliance of shortlisted suppliers.' },
    { num: '04', title: 'Sample Evaluation', desc: 'We coordinate sample production and inspection before moving to bulk orders.' },
    { num: '05', title: 'Production Oversight', desc: 'Regular monitoring ensures production stays on schedule and meets quality standards.' },
    { num: '06', title: 'Quality Inspection', desc: 'Pre-shipment inspection confirms products meet specifications before release.' },
    { num: '07', title: 'Logistics & Delivery', desc: 'We coordinate shipping, customs clearance, and final delivery to your location.' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-[#1F2937] mb-4">How It Works</h1>
        <p className="text-lg text-[#4B5563]">A structured process designed for transparency and results.</p>
      </div>

      <div className="space-y-6 mb-12">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-6 p-6 border border-slate-200 rounded-lg">
            <div className="text-3xl font-semibold text-[#1E3A5F] w-16 flex-shrink-0">{step.num}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#1F2937]">{step.title}</h3>
              <p className="text-[#4B5563]">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/contact" className="inline-block px-8 py-3 bg-[#1E3A5F] text-white font-semibold rounded hover:bg-[#2E5A8B] transition-colors">Get Started</Link>
      </div>
    </div>
  );
};

export default HowItWorks;
