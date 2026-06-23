import React, { useEffect, useRef } from 'react';
import { ClipboardList, Search, Microscope, PenTool, ClipboardCheck, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      title: "1. Tell Us What You Need",
      desc: "Send us your product specifications, target price, and volume. We'll have a quick consultation to understand your business goals and quality requirements.",
      icon: <ClipboardList className="text-blue-900" size={40} />,
      img: "person writing on clipboard business meeting"
    },
    {
      title: "2. Supplier Search & Selection",
      desc: "We research and shortlist 5-10 manufacturers. We filter out trading companies masquerading as factories and verify the manufacturers' production capabilities.",
      icon: <Search className="text-blue-900" size={40} />,
      img: "industrial cluster map china guangzhou factory"
    },
    {
      title: "3. Sampling & Approval",
      desc: "We collect samples from the top candidates and consolidate them to save on your shipping costs. We help you review the samples and finalize the 'Golden Sample'.",
      icon: <Microscope className="text-blue-900" size={40} />,
      img: "person comparing products samples quality"
    },
    {
      title: "4. Production Monitoring",
      desc: "Once you place the order, we provide weekly status updates. We act as your eyes and ears on the factory floor to ensure production stays on schedule.",
      icon: <PenTool className="text-blue-900" size={40} />,
      img: "factory production line supervisor monitoring machines"
    },
    {
      title: "5. QC Inspection & Loading",
      desc: "Our inspectors perform a full AQL inspection before you make the final payment. We also supervise the container loading to prevent damage during transit.",
      icon: <ClipboardCheck className="text-blue-900" size={40} />,
      img: "inspector checking boxes warehouse loading"
    },
    {
      title: "6. Door-to-Door Delivery",
      desc: "We handle the export documents, ocean/air freight, and customs clearance. Your goods are delivered directly to your warehouse.",
      icon: <Truck className="text-blue-900" size={40} />,
      img: "logistics truck cargo ship containers"
    }
  ];

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 id="how-works-title" className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Sourcing Process</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We've refined our workflow over a decade to ensure your China sourcing journey is transparent, secure, and profitable.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full"></div>

            <div className="space-y-24">
              {steps.map((step, idx) => (
                <div key={idx} className={`flex flex-col lg:flex-row gap-8 lg:gap-24 items-center relative ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Step Content */}
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="inline-block p-4 bg-white rounded-2xl shadow-sm mb-6 lg:mb-8">
                      {step.icon}
                    </div>
                    <h2 id={`step-h-${idx}`} className="text-3xl font-bold text-blue-900 mb-4">{step.title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      {step.desc}
                    </p>
                  </div>

                  {/* Step Image */}
                  <div className="lg:w-1/2 w-full">
                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group">
                      <img 
                        data-strk-img-id={`how-it-works-img-${idx}`}
                        data-strk-img={`[step-h-${idx}] ${step.img}`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                    </div>
                  </div>

                  {/* Dot on timeline */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-amber-600 rounded-full border-4 border-white shadow-md z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
            <blockquote className="text-2xl md:text-3xl font-light italic max-w-4xl mx-auto leading-relaxed mb-10">
              "SSourcing China acts as our internal purchasing department. Since we started working with them, our defect rate dropped from 5% to less than 0.5%, and we've saved thousands on LCL shipping costs."
            </blockquote>
            <div className="text-lg font-bold">David Thompson</div>
            <div className="text-slate-400 text-sm">CEO, HomeEquip Solutions (USA)</div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Ready to Start Your First Project?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-md font-bold text-lg transition-all">
              Request a Free Quote
            </Link>
            <Link to="/services" className="bg-white border-2 border-blue-900 text-blue-900 px-12 py-5 rounded-md font-bold text-lg hover:bg-blue-900 hover:text-white transition-all">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
