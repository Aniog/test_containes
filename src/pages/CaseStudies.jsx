import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button.jsx';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      id: "smart-home",
      client: "European Smart Home Tech Co.",
      challenge: "The client was experiencing a 15% defect rate with their current supplier, leading to costly returns and damaged brand reputation. They needed to find a new manufacturer and implement strict QC.",
      solution: "We audited 8 alternative factories, selected the top 2 for prototyping, and negotiated a rigorous quality control agreement. We implemented a 3-stage inspection process (FAI, DUPRO, PSI).",
      results: "Defect rate reduced to <0.5%. Unit cost decreased by 8% due to our direct negotiation. The client successfully scaled their product line.",
    },
    {
      id: "apparel-brand",
      client: "US Activewear Startup",
      challenge: "A fast-growing brand needed a reliable partner to handle complex custom fabrics and tight production deadlines, while ensuring ethical labor practices.",
      solution: "We sourced a WRAP-certified factory specializing in performance textiles. We managed the entire sample iterations, ensuring the custom fabric blends met exactly the client's specifications.",
      results: "Launched new collection on time. Improved fabric quality and durability. Established a long-term, scalable supply chain.",
    },
    {
      id: "industrial-parts",
      client: "Australian Construction Supplier",
      challenge: "Sourcing heavy, specialized industrial brackets. The client struggled with inconsistent material quality and expensive shipping costs.",
      solution: "We found a specialized metal fabrication plant, conducted independent material testing (SGS), and consolidated their shipments with other clients to optimize freight costs.",
      results: "Consistent, certified material quality. Reduced shipping costs by 22% through LCL consolidation.",
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 id="cs-title" className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            Case Studies
          </h1>
          <p id="cs-subtitle" className="text-lg md:text-xl text-slate-600 leading-relaxed">
            See how we've helped businesses around the world overcome sourcing challenges, reduce costs, and scale effectively.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-16">
            {cases.map((study, index) => (
              <div key={study.id} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-2 h-64 md:h-auto relative bg-slate-100">
                     <img
                      data-strk-img-id={`cs-img-${study.id}`}
                      data-strk-img={`[cs-client-${study.id}] manufacturing case study success`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      className="w-full h-full object-cover"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.client}
                    />
                  </div>
                  <div className="md:col-span-3 p-8 md:p-10">
                    <h3 id={`cs-client-${study.id}`} className="text-2xl font-bold mb-6 text-slate-900">{study.client}</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2 text-sm uppercase tracking-wider">The Challenge</h4>
                        <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-2 text-sm uppercase tracking-wider">Our Solution</h4>
                        <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                      </div>
                      
                      <div className="bg-slate-50 p-4 rounded border border-slate-100">
                        <h4 className="font-semibold text-slate-900 mb-2">Results</h4>
                        <p className="text-slate-700 font-medium">{study.results}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Want similar results for your business?</h2>
          <Button asChild size="lg" variant="secondary" className="text-primary hover:bg-slate-100 h-12 px-8 text-base">
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;