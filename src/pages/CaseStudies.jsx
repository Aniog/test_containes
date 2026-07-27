import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Quote } from 'lucide-react';

const cases = [
  {
    id: "case-1",
    title: "Eco-Tech Electronics (USA)",
    challenge: "A startup needed to source high-quality biodegradable phone cases but faced high prices and poor quality from random Alibaba suppliers.",
    solution: "We found a specialized factory in Ningbo, negotiated 20% lower MOQ, and implemented a strict QC process before shipping.",
    results: "Reduced unit cost by 15% and maintained a 0.2% defect rate over 10,000 units.",
    imgId: "case-1-img",
    imgQuery: "electronics manufacturing quality control factory"
  },
  {
    id: "case-2",
    title: "Nordic Home Decor (Germany)",
    challenge: "A boutique retailer struggled with inconsistent finishes on their custom furniture line and frequent shipping delays.",
    solution: "We audited 5 furniture factories in Foshan, selected a master craftsman partner, and consolidated shipments to save 30% on logistics.",
    results: "Launched 12 new SKUs successfully within 6 months with zero quality complaints.",
    imgId: "case-2-img",
    imgQuery: "furniture manufacturing warehouse shipping"
  },
  {
    id: "case-3",
    title: "AutoParts UK",
    challenge: "A distributor needed specialized CNC machined parts with high precision but couldn't verify the technical capacity of factories remotely.",
    solution: "Our engineering team performed a technical audit of the machinery and oversaw the creation of the first 100 prototype units.",
    results: "Secured a long-term reliable production partner with 99.9% dimensional accuracy.",
    imgId: "case-3-img",
    imgQuery: "industrial machinery cnc parts manufacturing"
  }
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = "Case Studies | Success Stories & Client Results | SSourcing China";
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Client Success Stories</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            See how we help businesses worldwide solve sourcing challenges and scale their operations in China.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {cases.map((item, index) => (
              <div 
                key={item.id} 
                className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl relative">
                  <img 
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[case-title-${item.id}] ${item.imgQuery}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white p-3 rounded-full shadow-lg">
                    <Quote className="w-5 h-5" />
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <h2 id={`case-title-${item.id}`} className="text-3xl font-bold text-slate-900 tracking-tight">{item.title}</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-1 italic text-primary">The Challenge</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">{item.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-1 italic text-primary">Our Solution</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">{item.solution}</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                      <h3 className="font-bold text-slate-900 mb-2">Key Results</h3>
                      <p className="text-primary font-bold text-xl">{item.results}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-6 italic tracking-tight">Be Our Next Success Story</h2>
          <p className="text-slate-400 text-lg mb-10">
            Let us handle the complexities of sourcing in China so you can focus on growing your brand.
          </p>
          <Link to="/contact">
            <Button size="xl" className="h-14 px-10">Start Your Sourcing Project</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
