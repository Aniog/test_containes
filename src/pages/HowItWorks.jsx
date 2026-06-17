import React from 'react';
import { MousePointer2, ClipboardCheck, MessageSquare, Handshake, Box, Ship } from 'lucide-react';
import { cn } from '@/lib/utils';

const HowItWorks = () => {
  const steps = [
    {
      title: "Tell Us What You Need",
      desc: "Send your product specs, target price, and volume. Our experts review the feasibility and shortlist initial options.",
      icon: <MessageSquare className="w-8 h-8" />
    },
    {
      title: "Supplier Matching & Vetting",
      desc: "We research and vet suppliers, negotiate prices, and present you with the top 3 verified manufacturers.",
      icon: <MousePointer2 className="w-8 h-8" />
    },
    {
      title: "Sampling & Development",
      desc: "We coordinate samples from multiple factories, inspect them at our office, and ship the best one to you for approval.",
      icon: <Box className="w-8 h-8" />
    },
    {
      title: "Order Placement & Monitoring",
      desc: "We help with contracts and payments. During production, we monitor progress to ensure quality and lead times are met.",
      icon: <Handshake className="w-8 h-8" />
    },
    {
      title: "Professional Inspection",
      desc: "Our QC team visits the factory to perform an AQL-standard pre-shipment inspection. You get a full report before paying the balance.",
      icon: <ClipboardCheck className="w-8 h-8" />
    },
    {
      title: "Logistics Coordination",
      desc: "We handle container booking, consolidation, and document preparation to ensure smooth sea or air freight to your door.",
      icon: <Ship className="w-8 h-8" />
    }
  ];

  return (
    <div className="pt-24 pb-24">
      <section className="bg-slate-900 py-20 text-white mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 italic text-primary">Your Supply Chain, Simplified.</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">We follow a proven 6-step process to ensure your sourcing journey is safe, efficient, and profitable.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div key={idx} className={cn(
                "relative flex flex-col md:flex-row items-center gap-8 md:gap-0",
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              )}>
                {/* Number Circle */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg border-4 border-white">
                  {idx + 1}
                </div>

                <div className="md:w-1/2 md:px-12 ml-16 md:ml-0">
                  <div className={cn(
                    "bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow",
                    idx % 2 === 0 ? "md:text-right" : "md:text-left"
                  )}>
                    <div className={cn(
                      "mb-4 flex",
                      idx % 2 === 0 ? "md:justify-end" : "justify-start"
                    )}>
                      <div className="text-primary">{step.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
