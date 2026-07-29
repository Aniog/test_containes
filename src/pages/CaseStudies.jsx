import React, { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      id: "case-1",
      title: "25% Cost Reduction for UK Consumer Electronics Retailer",
      client: "UK Tech Solutions Ltd",
      category: "Consumer Electronics",
      challenge: "High middleman commissions on Alibaba were draining margins and affecting competitiveness.",
      solution: "We identified three direct-to-manufacturer factories in Dongguan, negotiated volume pricing, and implemented regular consolidated shipping.",
      results: ["25% overall unit cost reduction", "100% material compliance certification", "Successfully launched private-label packaging"]
    },
    {
      id: "case-2",
      title: "Zero-Defect Furniture Production for US Design Firm",
      client: "Modern Home US",
      category: "Home & Furniture",
      challenge: "Previous supplier had a consistent 15% defect rate on wood finishes and loose joints.",
      solution: "We audited 10 specialized suppliers in Foshan, selected a high-precision factory, and implemented a 'During Production' QC protocol.",
      results: ["0% defect rate for 5 consecutive shipments", "30% reduction in production lead times", "Full supply chain transparency for certifications"]
    },
    {
      id: "case-3",
      title: "Saving $50k by Identifying a Phantom Supplier",
      client: "Industrial Parts Co. (Germany)",
      category: "Industrial Equipment",
      challenge: "A supplier requested a 100% upfront deposit for custom industrial molds.",
      solution: "Our field agent conducted a physical audit of the factory address and found a residential apartment. We exposed the scam.",
      results: ["$50,000 in capital successfully protected", "Verified a legitimate alternative factory within 72 hours", "Secured 30/70 payment terms for the client"]
    }
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 id="cases-hero-title" className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight uppercase tracking-wider">Client Success Stories</h1>
          <p id="cases-hero-subtitle" className="text-xl text-primary-foreground/70 max-w-2xl mx-auto font-light">
            Real examples of how we've helped international companies optimize their China sourcing operations and protect their capital.
          </p>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {cases.map((cs, idx) => (
              <div key={cs.id} className="bg-background rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-100 group">
                <div className="lg:w-1/2 relative h-80 lg:h-auto overflow-hidden">
                  <img 
                    data-strk-img-id={`case-img-${cs.id}`}
                    data-strk-img={`[case-title-${cs.id}] [case-category-${cs.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="800"
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute top-8 left-8">
                    <div id={`case-category-${cs.id}`} className="bg-secondary text-white px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-2xl">
                      {cs.category}
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 p-10 lg:p-16 space-y-10">
                  <h2 id={`case-title-${cs.id}`} className="text-3xl font-bold font-heading text-primary leading-tight tracking-tight">{cs.title}</h2>
                  
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <h3 className="text-xs font-black text-secondary uppercase tracking-[0.2em]">The Challenge</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed font-light">{cs.challenge}</p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xs font-black text-secondary uppercase tracking-[0.2em]">Our Solution</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed font-light">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="bg-muted/50 p-8 rounded-2xl border border-slate-100 shadow-inner">
                    <h3 className="text-sm font-bold text-primary mb-6 uppercase tracking-widest border-b border-primary/10 pb-2">Business Impact</h3>
                    <ul className="grid grid-cols-1 gap-4">
                      {cs.results.map((res, i) => (
                        <li key={i} className="flex items-start space-x-3 text-primary font-semibold">
                          <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                          <span className="text-lg">{res}</span>
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
    </div>
  );
};

export default CaseStudies;
