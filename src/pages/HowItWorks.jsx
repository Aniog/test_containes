import React from 'react';
import { Search, ShieldAlert, BarChart3, Truck, MessageSquare, Briefcase, Workflow, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: "Discovery & Inquiry",
      desc: "Contact us with your product specifications, target quality, and target pricing. We'll sign an NDA to protect your IP before starting our research.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Supplier Matching",
      desc: "We screen 10+ suppliers and shortlist the top 3 based on capacity, pricing, and reliability. We provide a comprehensive comparison report.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Sampling & Prototyping",
      desc: "Our team manages sample production, performs initial checks in China, and consolidates samples into one shipment to your office.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Production & Monitoring",
      desc: "Once you approve samples, we finalize the contract and secure your deposit. We perform weekly factory visits to monitor timelines.",
      icon: <Workflow className="w-6 h-6" />
    },
    {
      title: "Quality Control",
      desc: "We perform a formal Pre-Shipment Inspection (PSI) following AQL Standards. You receive a detailed photo/video report for approval.",
      icon: <ShieldAlert className="w-6 h-6" />
    },
    {
      title: "Full Cargo Logistics",
      desc: "We book shipping space, handle export documents, and coordinate final delivery. We ensure everything is loaded safely.",
      icon: <Truck className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Our Sourcing Process</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">A structured, transparent approach designed to eliminate risks and deliver high-quality goods at the right price.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="flex group mb-12 last:mb-0">
                <div className="flex flex-col items-center mr-8">
                  <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg z-10">
                    {step.icon}
                  </div>
                  {idx !== steps.length - 1 && (
                    <div className="w-1 bg-slate-100 flex-grow my-4 rounded-full" />
                  )}
                </div>
                <div className="pt-2 pb-12 border-b border-slate-50 last:border-0 grow">
                  <span className="text-amber-500 font-bold mb-2 block uppercase tracking-widest text-sm">Step {idx + 1}</span>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">{step.title}</h2>
                  <p className="text-slate-600 leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Are Different */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-12">How We Protect You</h2>
            <div className="space-y-8">
              {[
                { title: "Direct Payment to Factories", desc: "You pay the factory directly for the goods. We never hold your manufacturing funds, ensuring full financial transparency." },
                { title: "Legal Contracts", desc: "We use Bilingual English-Chinese manufacturing agreements recognized in Chinese courts." },
                { title: "IP Protection", desc: "Rigorous NDAs and strategic production (splitting assembly) to keep your intellectual property safe." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex">
                  <CheckCircle className="text-amber-500 w-8 h-8 mr-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              data-strk-img-id="process-hero-viz"
              data-strk-img="[process-header-title] factory audit inspection shipping"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Professional Sourcing Workflow"
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-slate-900 rounded-3xl -z-10" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
