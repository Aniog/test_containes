import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: "1. Detailed Product Specification",
    desc: "You provide us with your product requirements, including drawings, material specs, and reference samples if available.",
    details: ["Technical reviews", "Compliance verification", "Target price analysis"],
    img: "business meeting product design"
  },
  {
    title: "2. Supplier Identification & Quote",
    desc: "We scan the market and our internal database to find the best factories that match your needs. We provide a comparison of top 3 suppliers.",
    details: ["Price benchmarking", "Factory capability check", "Lead time estimation"],
    img: "China factory showroom products"
  },
  {
    title: "3. Sample Development & Review",
    desc: "We manage the prototyping phase. Our team inspects samples locally before shipping them to you for final approval.",
    details: ["Sample consolidated shipping", "Feature testing", "Material verification"],
    img: "industrial prototype testing lab"
  },
  {
    title: "4. Production Oversight",
    desc: "Once you approve the sample, we manage the contract and payment. We visit the factory regularly to ensure production stays on track.",
    details: ["Milestone monitoring", "Real-time issues solving", "Weekly status reports"],
    img: "manufacturing assembly line China"
  },
  {
    title: "5. Professional Inspection",
    desc: "Our QC engineers perform pre-shipment inspections based on AQL standards. Goods don't ship until you are satisfied.",
    details: ["AQL 2.5/4.0 standards", "Defect photography", "Packaging & loading check"],
    img: "quality control inspector factory"
  },
  {
    title: "6. Consolidation & Logistics",
    desc: "We coordinate shipping with our partners or your designated forwarder. We handle all export paperwork and customs clearance.",
    details: ["FCL/LCL management", "Export license handling", "Door-to-door tracking"],
    img: "container port logistics China"
  }
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="pt-24 pb-20" ref={containerRef}>
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">A Workflow Built for Reliability</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From the first email to the final delivery, we act as your local office in China, managing every detail.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {steps.map((step, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 space-y-8">
                  <h2 className="text-3xl font-extrabold text-slate-900">{step.title}</h2>
                  <p className="text-xl text-slate-600 leading-relaxed">{step.desc}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.details.map((detail, j) => (
                      <div key={j} className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle className="w-5 h-5 text-amber-500" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2 w-full relative">
                  <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50">
                    <img 
                      data-strk-img-id={`hiw-img-${i}`}
                      data-strk-img={step.img}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      alt={step.title}
                      className="w-full h-full object-cover"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  {/* Step Number Badge */}
                  <div className={`absolute -top-6 ${i % 2 === 1 ? '-left-6' : '-right-6'} w-20 h-20 bg-blue-900 rounded-2xl rotate-12 flex items-center justify-center text-white text-3xl font-black shadow-xl`}>
                    0{i+1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Partnership */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8 underline decoration-amber-500 decoration-8 underline-offset-4">Ready to start your first project?</h2>
          <p className="text-xl text-slate-600 mb-12">
            We offer fixed-fee and commission-based sourcing packages depending on your order volume and complexity. No hidden markups, ever.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-blue-900 hover:bg-slate-800 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all">
              Request a Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/services" className="bg-white hover:bg-slate-50 text-blue-900 border border-slate-200 px-10 py-4 rounded-xl font-bold text-lg transition-all">
              See Service Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
