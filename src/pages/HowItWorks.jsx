import React from 'react';
import { ArrowRight, MessageSquare, Search, FileText, CheckCircle, Package } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: "1. Inquiry & Analysis",
      desc: "Tell us your product requirements, target price, and volume. We analyze the market and provide a preliminary feasibility report.",
      icon: MessageSquare,
      color: "bg-blue-500"
    },
    {
      title: "2. Supplier Sourcing",
      desc: "We shortlist 3-5 verified manufacturers based on quality, capacity, and cost. You receive a detailed comparison report.",
      icon: Search,
      color: "bg-indigo-500"
    },
    {
      title: "3. Sampling & Negotiation",
      desc: "We coordinate sample production and testing. Once approved, we negotiate the best terms and payment security for your order.",
      icon: FileText,
      color: "bg-violet-500"
    },
    {
      title: "4. Production & QC",
      desc: "Mass production begins under our supervision. Our inspectors visit the factory for pre-shipment quality control (PSI).",
      icon: CheckCircle,
      color: "bg-emerald-500"
    },
    {
      title: "5. Shipping & Delivery",
      desc: "Final packaging check, logistics coordination, and customs documentation. Your goods are shipped and delivered to your doorstep.",
      icon: Package,
      color: "bg-slate-900"
    }
  ];

  return (
    <div className="bg-white pb-24">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          data-strk-bg-id="how-it-works-bg"
          data-strk-bg="abstract business flow diagram connectivity connections global [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 id="hero-title" className="text-4xl md:text-5xl font-extrabold mb-6">Our Sourcing <span className="text-yellow-500">Process</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A transparent and proven methodology to ensure your sourcing experience is risk-free and profitable.
          </p>
        </div>
      </section>

      {/* Steps List */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

          <div className="space-y-24">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''} gap-12 relative`}>
                {/* Step Circle */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-slate-100 rounded-full z-10 items-center justify-center font-bold text-slate-800">
                  {idx + 1}
                </div>

                <div className="lg:w-1/2 text-center lg:text-left">
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto lg:mx-0 shadow-lg`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                    {step.desc}
                  </p>
                </div>
                
                <div className="lg:w-1/2">
                   <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 relative group">
                      <img 
                        data-strk-img-id={`process-img-${idx}`}
                        data-strk-img={`[step-title-${idx}] [hero-title] sourcing business logistics professional`}
                        data-strk-img-ratio="16x9"
                        data-strk-img-width="600"
                        className="rounded-2xl shadow-sm filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                        alt={step.title}
                      />
                      <span id={`step-title-${idx}`} className="hidden">{step.title}</span>
                      <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                         <div className="bg-white/90 p-4 rounded-xl font-bold text-slate-900 transform scale-90 group-hover:scale-100 transition-transform">
                            Standard Operating Procedure
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="bg-slate-50 py-20 px-4">
         <div className="max-w-4xl mx-auto text-center border-l-4 border-yellow-500 pl-8 bg-white p-12 shadow-sm rounded-r-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 italic">"Our mission is to be your eyes and ears in China, protecting your interests as if they were our own."</h2>
            <div className="flex items-center justify-center gap-4">
               <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-yellow-500 font-bold">SY</div>
               <div className="text-left">
                  <div className="font-bold text-slate-900">Steven Yang</div>
                  <div className="text-slate-500 text-sm italic">Founder & CEO, SSourcing China</div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default HowItWorks;