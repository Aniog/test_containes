import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle2, MessageSquare, ClipboardCheck, Factory, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      title: "Inquiry & Consultant",
      desc: "Send us your product specs or samples. We analyze technical feasibility, target price, and compliance requirements.",
      icon: MessageSquare,
      color: "blue"
    },
    {
      title: "Supplier Matching",
      desc: "We research and shortlist 3-5 pre-verified suppliers. You receive a comparison report with pricing and capabilities.",
      icon: Factory,
      color: "indigo"
    },
    {
      title: "Sampling & Verification",
      desc: "We arrange samples, perform on-site audits, and coordinate technical feedback until the product is perfect.",
      icon: ClipboardCheck,
      color: "purple"
    },
    {
      title: "Order & Production",
      desc: "Contract negotiation and deposit payment. We monitor production daily and provide weekly progress photos.",
      icon: CheckCircle2,
      color: "emerald"
    },
    {
      title: "QC & Logistics",
      desc: "Random onsite inspection (AQL). After your approval, we coordinate sea/air freight and export clearance.",
      icon: Truck,
      color: "orange"
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 border-b py-20 lg:py-28 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 id="how-title" className="text-4xl md:text-5xl font-extrabold mb-6 text-primary tracking-tight">Our Sourcing Process</h1>
          <p id="how-subtitle" className="text-lg text-gray-500 font-light italic leading-relaxed">
            A systematic, transparent approach to securing high-quality manufacturing from China. No shortcuts, just professional execution.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 relative">
        <div className="hidden lg:block absolute left-1/2 top-48 bottom-48 w-px bg-gray-100 -translate-x-1/2" />
        
        <div className="space-y-24 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-secondary to-blue-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                  <img 
                    data-strk-img-id={`step-img-${idx}`}
                    data-strk-img={`China sourcing agent ${step.title} factory professional`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={step.title}
                    className="rounded-2xl shadow-xl w-full relative z-10 bg-white"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg ring-4 ring-primary/10">
                    {idx + 1}
                  </div>
                  <div className={`p-2 rounded-lg bg-gray-50 text-secondary`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-primary tracking-tight">{step.title}</h2>
                <p className="text-gray-500 text-lg leading-relaxed">{step.desc}</p>
                <div className="pt-4">
                  <Link to="/contact" className="inline-flex items-center font-bold text-secondary hover:underline group">
                    Learn more about this step <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 italic">Ready to take the first step?</h2>
        <Link 
          to="/contact" 
          className="bg-accent text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition shadow-2xl inline-block"
        >
          Book a Free Strategy Call
        </Link>
      </section>
    </div>
  );
};

export default HowItWorks;
