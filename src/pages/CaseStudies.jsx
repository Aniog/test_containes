import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { CheckCircle, ArrowRight, Quote, TrendingUp, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import strkImgConfig from '@/strk-img-config.json';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      title: "Cost Optimization for LED Lighting Retailer",
      client: "Global Decor Ltd (Australia)",
      problem: "Rising manufacturing costs and inconsistent quality from current suppliers.",
      solution: "Conducted market scanning, identified a Tier-1 factory in Ningbo, negotiated 22% better pricing, and implemented pre-shipment QC.",
      result: "$150,000 annual savings and 0% return rate on the last 5 shipments.",
      imgId: "cs-page-1"
    },
    {
      title: "New Product Development: Smart Fitness Gear",
      client: "FitTech Startups (USA)",
      problem: "Complex assembly requiring multiple sub-suppliers and tight data security.",
      solution: "Project-managed the entire OEM process. Coordinated 4 sub-suppliers, managed assembly at a certified facility, and ensured IP protection via localized contracts.",
      result: "Launched on time. 10,000 units sold in first 3 months with 4.8 star average rating.",
      imgId: "cs-page-2"
    },
    {
      title: "Crisis Management: Resolving Production Delays",
      client: "EuroBuild Components (Germany)",
      problem: "Supplier went silent 2 weeks before a major construction deadline.",
      solution: "Dispatched ground agent in Guangzhou to the factory. Identified management issues, renegotiated the timeline, and stayed on-site for 3 days to supervise loading.",
      result: "Shipment caught the final vessel before deadline. Client avoided $50k in liquidated damages.",
      imgId: "cs-page-3"
    }
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 italic underline decoration-secondary decoration-4 underline-offset-8">Success Stories</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">How we solve real-world sourcing challenges for our clients every day.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-24">
            {cases.map((cs, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-16 bg-slate-50 p-8 lg:p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="lg:w-1/2">
                  <div className="h-[400px] rounded-3xl overflow-hidden shadow-inner">
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`${cs.title} success China business`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                      className="w-full h-full object-cover transition duration-1000 scale-100 hover:scale-110"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">{cs.client}</span>
                  <h2 className="text-3xl font-bold text-slate-900 leading-tight">{cs.title}</h2>
                  
                  <div className="space-y-6">
                    <ChallengeItem icon={<ShieldAlert className="w-6 h-6" />} label="Challenge" text={cs.problem} />
                    <ChallengeItem icon={<CheckCircle className="w-6 h-6" />} label="Our Solution" text={cs.solution} />
                    <ChallengeItem icon={<TrendingUp className="w-6 h-6" />} label="The Result" text={cs.result} />
                  </div>

                  <div className="pt-8 border-t border-slate-200">
                    <Quote className="text-secondary/20 w-12 h-12 mb-4" />
                    <p className="text-slate-600 italic">"SSourcing China team is truly our eyes and ears in China. Their attention to detail saved us from making a very costly mistake with a bad supplier."</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 italic italic">Join our list of successful importers</h2>
          <Button asChild size="lg" className="bg-white text-secondary hover:bg-slate-100 px-10 py-7 text-xl font-bold rounded-2xl shadow-xl">
            <Link to="/contact">Let's Discuss Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

const ChallengeItem = ({ icon, label, text }) => (
  <div className="flex gap-4">
    <div className="shrink-0 text-secondary">{icon}</div>
    <div>
      <h4 className="font-bold text-slate-800 text-sm">{label}</h4>
      <p className="text-slate-600 font-medium">{text}</p>
    </div>
  </div>
);

export default CaseStudies;
