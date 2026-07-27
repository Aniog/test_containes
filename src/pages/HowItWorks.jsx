import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Search, Samples, Factory, ShieldCheck, Truck, Check } from 'lucide-react';
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const steps = [
    {
      title: "1. Tell Us Your Needs",
      desc: "Contact us with your product requirements, target price, and quantity. The more details you provide, the better we can help.",
      icon: <Mail className="text-white" />,
      imgId: "step-contact-img"
    },
    {
      title: "2. Sourcing & Quoting",
      desc: "Our team searches for the best manufacturers and provides you with a detailed sourcing report including multiple supplier options and prices.",
      icon: <Search className="text-white" />,
      imgId: "step-sourcing-img"
    },
    {
      title: "3. Samples & Modification",
      desc: "We collect samples from different suppliers and send them to you for approval. We also assist with any product modifications or custom designs.",
      icon: <Check className="text-white" />,
      imgId: "step-sample-img"
    },
    {
      title: "4. Order & Mass Production",
      desc: "Once you approve the sample, we assist with contract drafting and payment. We strictly monitor the production schedule to ensure on-time delivery.",
      icon: <Factory className="text-white" />,
      imgId: "step-production-img"
    },
    {
      title: "5. QC & Verification",
      desc: "Our QC team performs on-site inspections during and after production to ensure quality is 100% as per your requirements.",
      icon: <ShieldCheck className="text-white" />,
      imgId: "step-qc-img"
    },
    {
      title: "6. Shipping Coordination",
      desc: "We handle container loading, consolidation, and all export documents. Your goods are shipped via the most cost-effective method.",
      icon: <Truck className="text-white" />,
      imgId: "step-shipping-img"
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container-custom text-center">
          <h1 id="hiw-title" className="text-4xl md:text-5xl font-display font-bold mb-6">Our 6-Step Sourcing Process</h1>
          <p id="hiw-subtitle" className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Transparent, efficient, and risk-free. We manage the complexity of China sourcing so you can focus on selling.
          </p>
        </div>
      </section>

      {/* Steps List */}
      <section className="py-20">
        <div className="container-custom">
          <div className="relative">
            {/* Timeline Line (Desktop) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 hidden lg:block"></div>
            
            <div className="space-y-20">
              {steps.map((step, index) => (
                <div key={index} className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Icon Bubble */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-accent rounded-full border-4 border-white shadow-md z-10 hidden lg:flex items-center justify-center">
                    {step.icon}
                  </div>

                  <div className="flex-1 lg:w-1/2 lg:pr-12 lg:text-right">
                    {index % 2 !== 0 ? '' : (
                      <div className="space-y-4">
                        <h3 id={`step-title-${index}`} className="text-2xl font-display font-bold text-slate-900">{step.title}</h3>
                        <p id={`step-desc-${index}`} className="text-slate-600 leading-relaxed text-lg">{step.desc}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 lg:w-1/2 lg:pl-12">
                    {index % 2 === 0 ? (
                       <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-slate-100">
                        <img 
                          data-strk-img-id={step.imgId}
                          data-strk-img={`[step-desc-${index}] [step-title-${index}] [hiw-title]`}
                          data-strk-img-ratio="16x9"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <h3 id={`step-title-${index}`} className="text-2xl font-display font-bold text-slate-900">{step.title}</h3>
                        <p id={`step-desc-${index}`} className="text-slate-600 leading-relaxed text-lg">{step.desc}</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Fill in the gaps for alternative layout */}
                  {index % 2 !== 0 && (
                     <div className="flex-1 lg:w-1/2 lg:pr-12 lg:order-first">
                       <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-slate-100">
                        <img 
                          data-strk-img-id={step.imgId}
                          data-strk-img={`[step-desc-${index}] [step-title-${index}] [hiw-title]`}
                          data-strk-img-ratio="16x9"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                     </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-display italic leading-relaxed mb-8">
               "We act as your eyes and ears in China, ensuring that your expectations are met by manufacturers who understand quality."
             </h2>
             <p className="font-bold text-accent text-xl uppercase tracking-widest">— SSourcing Team</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
