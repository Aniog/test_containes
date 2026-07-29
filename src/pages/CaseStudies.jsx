import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    title: "Eco-Friendly Kitchenware Brand",
    client: "Retailer (UK)",
    challenge: "High defect rate from original supplier and lack of communication.",
    solution: "Sourced 3 new factories, performed on-site audits, and implemented 100% pre-shipment inspection.",
    results: ["Defect rate dropped from 12% to 0.5%", "20% reduction in unit cost", "Stable production cycle"],
    img: "bamboo kitchen products display"
  },
  {
    title: "Precision Engineering Components",
    client: "Manufacturer (Germany)",
    challenge: "Complex custom parts requiring high tolerance levels.",
    solution: "Identified a specialized factory in Ningbo with advanced CNC capabilities. Managed technical drawings locally.",
    results: ["Tolerance requirements met 100%", "Shortened R&D cycle by 3 weeks", "Secure IP protection agreement"],
    img: "cnc precision parts manufacturing"
  },
  {
    title: "Global E-commerce Apparel Launch",
    client: "DTC Brand (USA)",
    challenge: "Finding reliable fabric sourcing for a sustainable clothing line.",
    solution: "Source GOTS certified organic cotton factories and managed private labeling.",
    results: ["Successfully launched with 15 SKUs", "Automated fulfillment coordination", "Reliable seasonal restocks"],
    img: "apparel warehouse clothing brand"
  }
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="pt-24 pb-20" ref={containerRef}>
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Proven Success Stories</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            See how we help businesses worldwide optimize their China supply chain and protect their margins.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {cases.map((cs, i) => (
              <div key={i} className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    data-strk-img-id={`cs-img-${i}`}
                    data-strk-img={cs.img}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="lg:w-1/2 space-y-8">
                  <div className="space-y-2">
                    <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">{cs.client}</span>
                    <h2 className="text-3xl font-extrabold text-slate-900">{cs.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-2">The Challenge</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-2">Our Solution</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                    <h3 className="font-bold text-blue-900 mb-4">Key Outcomes</h3>
                    <ul className="space-y-3">
                      {cs.results.map((res, j) => (
                        <li key={j} className="flex items-center gap-3 text-slate-800 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-blue-900" />
                          {res}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white italic text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
            "SSourcing China transformed our procurement process. We no longer worry about quality issues or late shipments. They are truly an extension of our team."
          </p>
          <div className="font-bold text-amber-500 uppercase tracking-widest text-sm">— Operations Director, Major EU Importer</div>
        </div>
      </section>
    </div>
  );
}
