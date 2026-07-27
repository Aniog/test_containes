import React from 'react';

const HowItWorks = () => {
  const steps = [
    { num: '01', title: 'Initial Consultation', desc: 'We discuss your product requirements, target specifications, budget range, and timeline expectations.' },
    { num: '02', title: 'Requirement Documentation', desc: 'Detailed product specifications, quality standards, and compliance requirements are documented.' },
    { num: '03', title: 'Supplier Search', desc: 'We identify 3-5 potential suppliers matching your criteria from our verified database and network.' },
    { num: '04', title: 'Verification & Audit', desc: 'Selected suppliers undergo factory audits, document verification, and capability assessments.' },
    { num: '05', title: 'Sample Coordination', desc: 'We arrange sample production and delivery for your evaluation and approval.' },
    { num: '06', title: 'Order Placement', desc: 'Once samples are approved, we assist with purchase order negotiation and contract terms.' },
    { num: '07', title: 'Production Oversight', desc: 'Regular monitoring ensures production stays on schedule and meets quality standards.' },
    { num: '08', title: 'Inspection & Shipping', desc: 'Final quality inspection precedes shipping coordination and documentation support.' }
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4 text-white">How It Works</h1>
          <p className="text-xl text-slate-300 max-w-2xl">A clear, step-by-step process for sourcing from China.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 pb-8 border-l-2 border-slate-200 last:border-l-0 last:pb-0 ml-4">
                <div className="flex-shrink-0 -ml-4">
                  <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-mono font-semibold">
                    {step.num}
                  </div>
                </div>
                <div className="pt-1 pb-8">
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container text-center">
          <h2 className="section-title">Ready to Start?</h2>
          <p className="text-slate-600 mb-6">Contact us to begin the sourcing process for your next project.</p>
          <a href="/contact" className="btn-primary">Get Started</a>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;