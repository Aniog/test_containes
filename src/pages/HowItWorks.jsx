import React from 'react';
import { ClipboardList, Search, FileCheck, PlayCircle, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: "Step 1: Submission & Analysis",
      icon: <ClipboardList className="w-12 h-12 text-blue-600" />,
      desc: "You send us your product specifications, target price, and estimated order quantity. Our experts analyze the requirements to ensure feasibility.",
      id: "step-1"
    },
    {
      title: "Step 2: Sourcing & Vetting",
      icon: <Search className="w-12 h-12 text-blue-600" />,
      desc: "We contact multiple suppliers from our network and the wider market. We vet them based on capacity, quality history, and creditworthiness.",
      id: "step-2"
    },
    {
      title: "Step 3: Quote & Sampling",
      icon: <FileCheck className="w-12 h-12 text-blue-600" />,
      desc: "We provide you with a detailed comparison of top suppliers. Once you select one, we coordinate the production and delivery of samples for your approval.",
      id: "step-3"
    },
    {
      title: "Step 4: Production Management",
      icon: <PlayCircle className="w-12 h-12 text-blue-600" />,
      desc: "After sample approval, we manage the contract and deposit. We monitor the entire production line to ensure timelines are met.",
      id: "step-4"
    },
    {
      title: "Step 5: Quality Inspection",
      icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
      desc: "Our QC team performs a pre-shipment inspection. You receive a full report with photos and videos. We only release final payment after your approval.",
      id: "step-5"
    },
    {
      title: "Step 6: Logistics Coordination",
      icon: <Truck className="w-12 h-12 text-blue-600" />,
      desc: "We coordinate with freight forwarders for the most cost-effective shipping method (Sea, Air, or Rail) and handle all export documentation.",
      id: "step-6"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A transparent, step-by-step process that takes the complexity out of buying from China.
          </p>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-16 mb-20 last:mb-0 group">
                {/* Number & Icon */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-xl shadow-blue-200 group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  {idx !== steps.length - 1 && (
                    <div className="hidden md:block w-0.5 h-full bg-slate-100 my-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 group-hover:bg-white group-hover:shadow-2xl group-hover:border-blue-100 transition-all">
                  <div className="mb-6">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Transparency Matters */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
               <img 
                data-strk-img-id="transparency-img"
                data-strk-img="Business professionals in China factory meeting office"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Transparency"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-8">Absolute Transparency at Every Stage</h2>
              <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                Unlike traditional agents who take hidden kickbacks from factories, we work on a fixed-fee or transparent percentage basis. Your interests are always our priority.
              </p>
              
              <div className="space-y-6">
                {[
                  "Direct contact with factories when needed",
                  "Open-book pricing and negotiations",
                  "Detailed inspection reports with real-time video",
                  "Verified shipping documents and certificates"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to follow this process?</h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto">Start your journey with a reliable partner in China today.</p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl shadow-xl hover:bg-blue-50 transition-colors">
            Contact Us to Start
          </a>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;

