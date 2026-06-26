import React from 'react';
import { Quote } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      title: 'Kitchenware Brand Expansion',
      client: 'Retailer (Germany)',
      challenge: 'High defect rates (15%) and missed deadlines from existing supplier.',
      solution: 'Identified a new specialized factory, implemented strict pre-shipment QC.',
      result: 'Defect rate dropped to 0.5%, lead time reduced by 14 days.',
      id: 'case-kitchen'
    },
    {
      title: 'Industrial Parts Sourcing',
      client: 'Wholesaler (USA)',
      challenge: 'Difficulty finding a factory capable of precision tolerance (+/- 0.05mm).',
      solution: 'Audit of 12 CNC factories, technical vetting of production lines.',
      result: 'Sourced reliable partner saving $2.50 per unit (20% reduction).',
      id: 'case-cnc'
    },
    {
      title: 'E-commerce Brand Launch',
      client: 'Startup (Australia)',
      challenge: 'Small order quantity (MOQ) barrier for custom branding.',
      solution: 'Negotiated lower MOQs and consolidated multi-product branding.',
      result: 'Successful launch of 5 SKU lines with custom packaging.',
      id: 'case-startup'
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-slate-900 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Case Studies</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real stories of how we help our clients optimize their China supply chain.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {cases.map((cs, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <img 
                  data-strk-img-id={`case-img-${cs.id}`}
                  data-strk-img={`Manufacturing factory floor quality inspection ${cs.title}`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-80 object-cover"
                  alt={cs.title}
                />
              </div>
              <div className="lg:w-1/2">
                <span className="text-brand-orange font-bold text-sm uppercase mb-2 block">{cs.client}</span>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{cs.title}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-brand-blue uppercase mb-2">The Challenge</h4>
                    <p className="text-slate-600 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-blue uppercase mb-2">Our Solution</h4>
                    <p className="text-slate-600 leading-relaxed">{cs.solution}</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h4 className="text-sm font-bold text-green-600 uppercase mb-2">Impact</h4>
                    <p className="text-lg font-bold text-slate-900 leading-relaxed">{cs.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-slate-900 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Quote className="mx-auto mb-8 text-white/20" size={64} />
          <p className="text-2xl italic text-white leading-relaxed mb-8">
            "Working with SSourcing China changed our entire business model. We no longer worry about quality or shipping delays. They are our eyes and ears on the ground."
          </p>
          <div className="text-white">
            <p className="font-bold text-lg">Mark Henderson</p>
            <p className="text-slate-400 text-sm">Operations Director, Apex Retail Group</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
