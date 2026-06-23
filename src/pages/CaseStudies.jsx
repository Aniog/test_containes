import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      id: "case-1",
      client: "UK Tech Retailer",
      challenge: "High defect rate (12%) from their previous smart watch supplier, causing returns and brand damage.",
      solution: "We audited 5 new factories, selected a more reliable manufacturer, and implemented strict DUPRO and PSI inspections.",
      result: "Defect rate dropped to <1%. Sourcing costs reduced by 8% due to direct factory negotiation.",
      industry: "Consumer Electronics"
    },
    {
      id: "case-2",
      client: "US Furniture Brand",
      challenge: "Struggling to find a supplier capable of their custom outdoor furniture designs with specific UV-resistant materials.",
      solution: "Sourced a specialized OEM factory, handled the prototyping iterations, and verified material certificates.",
      result: "Successfully launched the new product line 2 months ahead of schedule. Factory became their long-term partner.",
      industry: "Home & Furniture"
    },
    {
      id: "case-3",
      client: "Australian Gym Equipment Startup",
      challenge: "Needed to consolidate multiple small orders (dumbbells, mats, bands) from different suppliers to save shipping costs.",
      solution: "Sourced all items from our trusted network, consolidated goods at our Shenzhen warehouse, and arranged combined LCL shipping.",
      result: "Saved 35% on total logistics costs. Ensured unified branding and packaging across all products before shipping.",
      industry: "Fitness"
    }
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 id="cases-header" className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl text-slate-300">
            Real examples of how we've helped international buyers overcome China manufacturing challenges.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 space-y-16">
          {cases.map((study, index) => (
            <div key={study.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 flex flex-col md:flex-row shadow-sm">
                <div className="md:w-2/5 h-64 md:h-auto relative bg-slate-200">
                    <img 
                      alt={`Case study for ${study.industry}`}
                      className="w-full h-full object-cover"
                      data-strk-img-id={`case-img-${study.id}`}
                      data-strk-img={`[title-${study.id}] manufacturing case study success`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#c2182b] uppercase tracking-wider">
                        {study.industry}
                    </div>
                </div>
                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                    <h2 id={`title-${study.id}`} className="text-2xl font-bold text-slate-900 mb-6">{study.client}</h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">The Challenge</h3>
                            <p className="text-slate-700">{study.challenge}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Our Solution</h3>
                            <p className="text-slate-700">{study.solution}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">The Result</h3>
                            <p className="text-slate-900 font-medium">{study.result}</p>
                        </div>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white text-center border-t border-slate-200">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's write your success story.</h2>
              <Link to="/contact">
                  <Button size="lg" className="bg-[#c2182b] hover:bg-[#a01423] text-white">Get a Free Consultation</Button>
              </Link>
          </div>
      </section>
    </div>
  );
}