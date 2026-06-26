import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages({}, containerRef.current);
  }, []);

  const studies = [
    {
      id: "electronics-brand",
      client: "US Electronics Brand",
      challenge: "High defect rate (15%) on their flagship Bluetooth speaker and delayed shipments from their previous factory.",
      solution: "We conducted a comprehensive audit of their supply chain, found a highly-certified alternative factory with better automated testing equipment. We implemented a strict AQL 1.0 inspection standard.",
      results: "Defect rate dropped to 0.8%. Unit cost decreased by 5% due to better negotiation. On-time delivery rate improved to 98%.",
      testimonial: "SSourcing China saved our flagship product line. Their on-the-ground presence in Shenzhen is invaluable to our business.",
      author: "David M., CEO"
    },
    {
      id: "furniture-retailer",
      client: "European Furniture Retailer",
      challenge: "Needed to source 12 different SKUs from 4 different factories, coordinate consolidation, and manage complex customs requirements for timber products.",
      solution: "We acted as their central purchasing office, handling all factory communications. We set up an intermediate warehouse in Guangzhou to consolidate all goods into three 40HQ containers.",
      results: "Saved 22% on logistics costs through efficient consolidation. Eliminated all customs delays. Simplified their accounting from 4 suppliers to 1 consolidated payment.",
      testimonial: "They handle all the headaches of dealing with multiple suppliers so we can focus on selling.",
      author: "Sarah L., Purchasing Director"
    },
    {
      id: "apparel-startup",
      client: "Australian Apparel Startup",
      challenge: "Needed a reliable OEM manufacturer for high-end activewear with specific eco-friendly fabric requirements and low Minimum Order Quantity (MOQ).",
      solution: "We leveraged our network to find a mid-sized factory specializing in eco-fabrics willing to accept a lower initial MOQ to build a long-term relationship.",
      results: "Successfully launched 5 SKUs on time. Now scaling up to 10,000 units per month with the same trusted factory.",
      testimonial: "Finding a factory willing to do our low MOQ without sacrificing quality was impossible until we found SSourcing China.",
      author: "James T., Founder"
    }
  ];

  return (
    <div ref={containerRef} className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 id="cases-header" className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h1>
          <p id="cases-subheader" className="text-xl text-slate-300">
            Real results we've delivered for businesses sourcing from China.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-16">
            {studies.map((study, index) => (
              <div key={study.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative min-h-[300px]">
                    <img 
                      data-strk-img-id={`case-img-${study.id}`}
                      data-strk-img={`[case-title-${study.id}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.client}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8 md:p-10">
                    <h2 id={`case-title-${study.id}`} className="text-2xl font-bold mb-6 text-slate-900">{study.client}</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-2">The Challenge</h4>
                        <p className="text-slate-700">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-2">Our Solution</h4>
                        <p className="text-slate-700">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-primary font-bold mb-2">The Results</h4>
                        <p className="font-medium text-slate-900">{study.results}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial Bar */}
                <div className="bg-slate-100 p-6 md:px-10 border-t border-slate-200 flex items-start">
                  <Quote className="w-8 h-8 text-slate-300 mr-4 shrink-0" />
                  <div>
                    <p className="italic text-slate-700 mb-2">"{study.testimonial}"</p>
                    <p className="text-sm font-bold text-slate-900">— {study.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Become Our Next Success Story</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Let us help you achieve better quality, lower costs, and zero headaches in your supply chain.
          </p>
          <Link to="/contact" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md font-bold text-lg transition-colors inline-flex">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;