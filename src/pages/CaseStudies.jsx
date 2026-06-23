import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      id: "case-1",
      client: "EcoHome Brand",
      industry: "Home & Garden",
      location: "United States",
      challenge: "The client was experiencing a 15% defect rate on their bamboo kitchenware imported from a generic supplier on Alibaba. They were losing money on returns and bad reviews.",
      solution: "We conducted a factory audit and found the current supplier was a trading company outsourcing to multiple small workshops with no QC. We resourced the product to a dedicated bamboo manufacturer, implemented DPI and PSI inspections.",
      result: "Defect rate dropped to 0.5%. The client saved 12% on unit costs by going direct to the manufacturer.",
      imgQuery: "bamboo kitchenware cutting boards sustainable products",
      quote: "SSourcing essentially rescued our brand. The quality consistency is exactly what we needed to scale on Amazon."
    },
    {
      id: "case-2",
      client: "TechFit Pro",
      industry: "Fitness Electronics",
      location: "United Kingdom",
      challenge: "Needed to develop a custom smartwatch from scratch within 4 months for a holiday launch involving complex PCB design and custom firmware.",
      solution: "We paired them with an experienced OEM smartwatch factory in Shenzhen, coordinated daily with their engineers to finalize prototyping, and oversaw the private tooling molding.",
      result: "Product launched on time. Zero IP leaks. First production run of 10,000 units sold out in 3 weeks.",
      imgQuery: "smartwatch fitness tracker manufacturing electronics assembly",
      quote: "Developing electronics overseas is a nightmare without boots on the ground. They managed the engineering communication flawlessly."
    },
    {
      id: "case-3",
      client: "Lumina Fashion",
      industry: "Apparel",
      location: "Australia",
      challenge: "Struggling with high MOQs (Minimum Order Quantities) from large factories and inconsistent sizing from smaller ones.",
      solution: "We mapped out a network of mid-sized garment factories willing to do lower MOQs (500pcs/style) but with strict adherence to the client's provided grading charts. We also consolidated fabrics from central markets.",
      result: "Client launched 3x more styles per season without increasing inventory risk. Sizing complaints dropped by 80%.",
      imgQuery: "garment manufacturing fashion textile stitching factory",
      quote: "They understood that we needed flexibility without sacrificing quality. A perfect sourcing partner for growing fashion labels."
    }
  ];

  return (
    <div ref={containerRef} className="pt-8 pb-24 top-padding">
       <div className="bg-slate-50 py-20 mb-16 border-b">
         <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-6 text-slate-900">
               Case Studies
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
               Real examples of how we've helped international buyers overcome sourcing challenges, improve quality, and increase profit margins.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-4">
         <div className="space-y-16">
            {cases.map((study, index) => (
               <div key={study.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xl flex flex-col lg:flex-row">
                  {/* Image Side */}
                  <div className="w-full lg:w-2/5 h-64 lg:h-auto min-h-[300px] relative">
                     <img 
                        data-strk-img-id={`case-img-${study.id}`}
                        data-strk-img={study.imgQuery}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={study.client}
                        className="absolute inset-0 w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
                     <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <div className="bg-white/90 backdrop-blur rounded-lg p-4 inline-block max-w-max">
                           <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{study.industry}</p>
                           <h3 className="text-xl font-bold text-slate-900">{study.client}</h3>
                           <p className="text-sm text-slate-600">{study.location}</p>
                        </div>
                     </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center bg-white">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                           <h4 className="text-lg font-bold text-slate-900 mb-2 border-b border-red-100 pb-2 inline-block">The Challenge</h4>
                           <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                        </div>
                        <div>
                           <h4 className="text-lg font-bold text-slate-900 mb-2 border-b border-green-100 pb-2 inline-block">Our Solution</h4>
                           <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                        </div>
                     </div>
                     
                     <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-100">
                        <h4 className="text-lg font-bold text-slate-900 mb-2">The Result</h4>
                        <p className="text-blue-700 font-medium leading-relaxed">{study.result}</p>
                     </div>

                     <div className="relative">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-slate-200" />
                        <p className="pl-8 text-slate-700 italic font-medium leading-relaxed text-lg">
                           "{study.quote}"
                        </p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}