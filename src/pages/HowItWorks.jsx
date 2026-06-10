import React from 'react';
import { ArrowRight, MessageSquare, ClipboardList, CheckCircle2, Package, Ship } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: "Tell Us Your Needs",
      desc: "Send us your product specifications, quantity, and quality requirements. We'll sign an NDA to protect your IP.",
      icon: <MessageSquare className="w-8 h-8 text-blue-700" />,
      tag: "STEP 1"
    },
    {
      title: "Supplier Matching",
      desc: "We shortlist 3-5 verified factories, negotiate prices, and present a detailed sourcing report with samples.",
      icon: <ClipboardList className="w-8 h-8 text-blue-700" />,
      tag: "STEP 2"
    },
    {
      title: "Sampling & Verification",
      desc: "We manage sample development and conduct on-site factory audits to ensure they can produce what you need.",
      icon: <CheckCircle2 className="w-8 h-8 text-blue-700" />,
      tag: "STEP 3"
    },
    {
      title: "Production & QC",
      desc: "We monitor production progress and perform final inspections (AQL 2.5/4.0) before any payment is finished.",
      icon: <Package className="w-8 h-8 text-blue-700" />,
      tag: "STEP 4"
    },
    {
      title: "Shipping & Delivery",
      desc: "We coordinate inland transport, customs handling, and international freight to your warehouse door.",
      icon: <Ship className="w-8 h-8 text-blue-700" />,
      tag: "STEP 5"
    }
  ];

  return (
    <div className="bg-white pb-20">
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Sourcing Process</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">A transparent, step-by-step approach designed to remove the complexity and risk from China manufacturing.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-100 hidden md:block"></div>
            
            <div className="space-y-20">
              {steps.map((step, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Step Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-700 border-4 border-white z-10 hidden md:block"></div>
                  
                  <div className="md:w-1/2 px-8">
                    <div className={`bg-slate-50 p-10 rounded-3xl border border-slate-100 ${idx % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="text-blue-700 font-bold text-xs tracking-widest mb-4 block underline decoration-2 underline-offset-4">{step.tag}</span>
                      <div className={`flex ${idx % 2 === 1 ? 'md:justify-end' : ''} mb-6`}>
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="container mx-auto px-4 mt-20">
        <div className="bg-blue-50 rounded-3xl p-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-primary">Real Results for Real Businesses</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">See how we helped a UK retailer reduce their defect rate from 14% to under 1% while lowering their landed costs by 22%.</p>
            <a href="/case-studies" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:gap-3 transition-all">
              Read Our Case Studies <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-xl aspect-video bg-white">
            <img 
              data-strk-img-id="process-case-study"
              data-strk-img="china sourcing professional case study success story inspection"
              data-strk-img-ratio="16x9"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E' alt='Case Study"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
EOF > /workspace/my-app/src/pages/HowItWorks.jsx
import React from 'react';
import { ArrowRight, MessageSquare, ClipboardList, CheckCircle2, Package, Ship } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: "Tell Us Your Needs",
      desc: "Send us your product specifications, quantity, and quality requirements. We'll sign an NDA to protect your IP.",
      icon: <MessageSquare className="w-8 h-8 text-blue-700" />,
      tag: "STEP 1"
    },
    {
      title: "Supplier Matching",
      desc: "We shortlist 3-5 verified factories, negotiate prices, and present a detailed sourcing report with samples.",
      icon: <ClipboardList className="w-8 h-8 text-blue-700" />,
      tag: "STEP 2"
    },
    {
      title: "Sampling & Verification",
      desc: "We manage sample development and conduct on-site factory audits to ensure they can produce what you need.",
      icon: <CheckCircle2 className="w-8 h-8 text-blue-700" />,
      tag: "STEP 3"
    },
    {
      title: "Production & QC",
      desc: "We monitor production progress and perform final inspections (AQL 2.5/4.0) before any payment is finished.",
      icon: <Package className="w-8 h-8 text-blue-700" />,
      tag: "STEP 4"
    },
    {
      title: "Shipping & Delivery",
      desc: "We coordinate inland transport, customs handling, and international freight to your warehouse door.",
      icon: <Ship className="w-8 h-8 text-blue-700" />,
      tag: "STEP 5"
    }
  ];

  return (
    <div className="bg-white pb-20">
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Sourcing Process</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">A transparent, step-by-step approach designed to remove the complexity and risk from China manufacturing.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-100 hidden md:block"></div>
            
            <div className="space-y-20">
              {steps.map((step, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Step Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-700 border-4 border-white z-10 hidden md:block"></div>
                  
                  <div className="md:w-1/2 px-8">
                    <div className={`bg-slate-50 p-10 rounded-3xl border border-slate-100 ${idx % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="text-blue-700 font-bold text-xs tracking-widest mb-4 block underline decoration-2 underline-offset-4">{step.tag}</span>
                      <div className={`flex ${idx % 2 === 1 ? 'md:justify-end' : ''} mb-6`}>
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="container mx-auto px-4 mt-20">
        <div className="bg-blue-50 rounded-3xl p-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-primary">Real Results for Real Businesses</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">See how we helped a UK retailer reduce their defect rate from 14% to under 1% while lowering their landed costs by 22%.</p>
            <a href="/case-studies" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:gap-3 transition-all">
              Read Our Case Studies <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-xl aspect-video bg-white">
            <img 
              data-strk-img-id="process-case-study"
              data-strk-img="china sourcing professional case study success story inspection"
              data-strk-img-ratio="16x9"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E' alt='Case Study"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
