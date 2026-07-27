import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    { num: '01', title: 'Initial Consultation', desc: 'We discuss your product requirements, target specifications, volume needs, and timeline. A detailed sourcing brief is prepared.' },
    { num: '02', title: 'Supplier Identification', desc: 'Our team searches our supplier database and industry networks to identify manufacturers matching your criteria.' },
    { num: '03', title: 'Supplier Shortlisting', desc: 'We present 3-5 qualified suppliers with capability summaries, pricing estimates, and initial samples for your review.' },
    { num: '04', title: 'Factory Verification', desc: 'For your selected supplier(s), we conduct on-site verification including facility audit, capacity check, and compliance review.' },
    { num: '05', title: 'Sample Development', desc: 'We coordinate sample production and approval, ensuring products meet your specifications before mass production.' },
    { num: '06', title: 'Production Monitoring', desc: 'Throughout manufacturing, we track progress, conduct inspections, and resolve issues to maintain quality and schedule.' },
    { num: '07', title: 'Quality Inspection', desc: 'Pre-shipment inspection verifies that finished goods meet agreed standards. We provide detailed inspection reports.' },
    { num: '08', title: 'Shipping & Delivery', desc: 'We coordinate logistics, prepare export documentation, and ensure timely delivery to your destination.' },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-4">How It Works</h1>
          <p className="text-xl text-slate-300">A structured process from inquiry to delivery.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-8">
                <div className="text-4xl font-semibold text-slate-200 w-16 flex-shrink-0">{step.num}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 border-t">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to begin?</h3>
          <p className="text-slate-600 mb-6">Start with a free consultation to discuss your sourcing needs.</p>
          <Link to="/contact"><Button>Get a Free Sourcing Quote</Button></Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;