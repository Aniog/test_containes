import React, { useEffect, useRef } from 'react';
import { Send, Search, CheckCircle, Package, Truck, MessageSquare } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    { title: "Send Inquiry", desc: "Detail your product needs, price target, and quantity in our simple form.", icon: MessageSquare },
    { title: "Supplier Selection", desc: "We source 3-5 verified factories and provide a transparent comparison list.", icon: Search },
    { title: "Sample Consolidation", desc: "We gather samples from multiple vendors and ship them to you in one package.", icon: Package },
    { title: "Order Placement", desc: "We handle the contracts and ensure your payment terms protect your interests.", icon: Send },
    { title: "Quality Inspection", desc: "Our QC team verifies the final goods at the factory before shipping begins.", icon: CheckCircle },
    { title: "Shipping & Delivery", desc: "We coordinate with freight forwarders to ensure smooth customs and delivery.", icon: Truck },
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-muted/50 py-24 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 id="hiw-title" className="text-4xl md:text-6xl font-extrabold font-heading mb-6 tracking-tight text-primary uppercase tracking-widest leading-tight">Our Sourcing Process</h1>
          <p id="hiw-subtitle" className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            We simplify the complexity of China manufacturing into 6 clear steps, acting as your eyes and ears on the ground.
          </p>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-background">
        {/* Connection line for desktop */}
        <div className="hidden lg:block absolute top-[50%] left-0 w-full h-1 bg-primary/5 -z-0" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-16 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group z-10">
                <div className="w-24 h-24 rounded-3xl bg-background border-2 border-slate-100 flex items-center justify-center mb-8 shadow-xl group-hover:shadow-secondary/20 group-hover:border-secondary group-hover:-translate-y-2 transition-all duration-500 z-10 font-bold text-primary relative">
                   <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-secondary text-white text-sm flex items-center justify-center font-bold">0{idx + 1}</div>
                  <step.icon className="w-12 h-12 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 id={`step-${idx}-title`} className="text-2xl md:text-3xl font-bold mb-4 text-primary font-heading tracking-tight">{step.title}</h3>
                <p id={`step-${idx}-desc`} className="text-muted-foreground leading-relaxed px-2 text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">Managing Complexity, So You Can Focus on Sales.</h2>
              <p className="text-xl text-primary-foreground/75 leading-relaxed font-light">
                Direct sourcing from factories sounds simple, but communication gaps, quality drift, and logistics hurdles can drain your budget and time. We provide a bridge.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Eliminate Language Barriers",
                  "Verify Factory Legitimacy",
                  "Secure Better Payment Terms",
                  "Consolidate Logistical Costs",
                  "Enforce Quality Standards",
                  "100% Data Transparency"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="text-secondary h-6 w-6 shrink-0" />
                    <span className="font-semibold text-lg opacity-90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div 
                className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-2 hover:rotate-0 transition-transform duration-700"
                data-strk-bg-id="hiw-process-img"
                data-strk-bg="Expert sourcing agent inspecting a product in a factory showroom"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
