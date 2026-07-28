import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowUpRight, CheckCircle2, Factory, BarChart as ChartBar } from 'lucide-react';
import Button from '@/components/ui/Button';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      id: "case-1",
      client: "EcoKitchen Gear (USA)",
      product: "Bamboo Kitchenware Sets",
      problem: "Previous supplier had high defect rates (15%) and missed delivery windows by weeks.",
      solution: "We audited 8 factories, found a specialized bamboo manufacturer with ISO 9001, and implemented strict in-process QC.",
      result: "Defect rate dropped to <1%. Shipping consolidated to save 22% in costs.",
      imgQuery: "bamboo kitchenware product lifestyle"
    },
    {
      id: "case-2",
      client: "TechStream Solutions (Europe)",
      product: "Electronic Smart Panels",
      problem: "Complex technical specs were getting 'lost in translation' leading to functional errors.",
      solution: "Our bilingual engineers translated technical drawings and supervised the mold-making process on-site.",
      result: "100% of samples passed initial testing. Successful launch of 5 new SKUs in 6 months.",
      imgQuery: "electronic circuit smart panel production"
    },
    {
      id: "case-3",
      client: "ActiveGear Australia",
      product: "Custom Fitness Equipment",
      problem: "Dealing with 5 different suppliers for various gym components was a logistical nightmare.",
      solution: "Consolidated all 5 suppliers through our warehouse. Coordinated multi-stop QC and unified shipping labels.",
      result: "Reduced administrative time by 60%. Saved ,000 per month in separate shipping fees.",
      imgQuery: "gym equipment weights warehouse"
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 id="case-hero-title" className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Case Studies</h1>
          <p id="case-hero-subtitle" className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
            Real stories of how we've helped our clients overcome challenges and succeed in sourcing from China.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {cases.map((cs, index) => (
              <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-black mb-6 uppercase tracking-widest">{cs.client}</div>
                  <h2 id={`case-title-${cs.id}`} className="text-3xl font-black text-slate-900 mb-6">{cs.product}</h2>
                  
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0 mt-1">!</div>
                      <div>
                        <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-1">The Problem</h4>
                        <p id={`case-prob-${cs.id}`} className="text-slate-600 font-medium">{cs.problem}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 mt-1">✓</div>
                      <div>
                        <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-1">Our Solution</h4>
                        <p id={`case-sol-${cs.id}`} className="text-slate-600 font-medium">{cs.solution}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0 mt-1">★</div>
                      <div>
                        <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-1">Final Result</h4>
                        <p id={`case-res-${cs.id}`} className="text-slate-900 font-bold">{cs.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-blue-600 translate-x-4 translate-y-4 rounded-3xl -z-10 opacity-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl skew-y-1 group-hover:skew-y-0 transition-transform duration-500">
                      <img 
                        data-strk-img-id={`case-img-${cs.id}`}
                        data-strk-img={`[case-res-${cs.id}] [case-title-${cs.id}] ${cs.imgQuery}`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={cs.product}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-8 text-slate-900 uppercase">Want Similar Results for Your Brand?</h2>
          <Link to="/contact">
            <Button size="lg" className="h-16 px-10 text-xl font-black uppercase">
              Schedule Your Free Case Audit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
