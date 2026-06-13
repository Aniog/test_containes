import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        try {
            if (strkImgConfig) {
                return ImageHelper.loadImages(strkImgConfig, containerRef.current);
            }
        } catch (e) {
            console.log('ImageHelper config not found yet');
        }
    }, []);

    const studies = [
        {
            id: 'electronics-brand',
            client: 'European Electronics Brand',
            challenge: 'The client was experiencing a 15% defect rate with their previous supplier for smart home sensors, leading to high return rates and damaged brand reputation.',
            solution: 'We audited 5 new factories, selected a certified manufacturer, implemented strict DUPRO (During Production) inspections, and completely rewrote their quality manual in Chinese.',
            result: 'Defect rate dropped to < 0.5% within 3 months. Client saved €120,000 annually in return costs and grew their product line by 3x with the new factory.',
            testimonial: "SSourcing China saved our business. We were about to give up on manufacturing in China, but their team brought transparency and control back to our supply chain."
        },
        {
            id: 'fitness-startup',
            client: 'US Fitness Equipment Startup',
            challenge: 'Needed to develop a custom mold for a new adjustable dumbbell. Previous quotes were wildly inconsistent, and communication with factories was stalling development.',
            solution: 'Our engineers sat down with the factory tooling department to clarify structural requirements. We negotiated the mold cost down by 30% and managed the entire prototyping phase.',
            result: 'Product launched 2 months ahead of schedule. The client achieved a 45% better profit margin than initially projected.',
            testimonial: "The communication gap was killing us. Having a bilingual team on the ground who actually understood the engineering side made all the difference."
        },
        {
            id: 'retail-chain',
            client: 'Australian Retail Chain',
            challenge: 'Importing seasonal home decor items from 8 different suppliers. Managing shipping, consolidation, and varying lead times was a logistical nightmare.',
            solution: 'We acted as their central purchasing office. We aligned production schedules across all 8 factories, performed combined final inspections, and consolidated goods into mixed containers.',
            result: 'Reduced shipping volumes from LCL to FCL, saving 25% on freight costs. Zero delayed shipments for the critical holiday season.',
            testimonial: "They are literally our office in China. They handle the mess so we can focus on selling."
        }
    ];

  return (
    <div ref={containerRef} className="pb-20">
      {/* Page Header */}
      <div className="bg-secondary py-16 text-center text-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Real examples of how we've helped businesses overcome sourcing challenges and improve their bottom line.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
          <div className="space-y-16 max-w-5xl mx-auto">
              {studies.map((study, index) => (
                  <div key={study.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row">
                      <div className="md:w-2/5 h-64 md:h-auto bg-slate-100 relative">
                           <img 
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                alt={study.client}
                                className="w-full h-full object-cover"
                                data-strk-img-id={`case-img-${study.id}`}
                                data-strk-img={`[case-client-${study.id}] business success logistics`}
                                data-strk-img-ratio="3x4"
                                data-strk-img-width="600"
                            />
                      </div>
                      <div className="p-8 md:w-3/5">
                          <h2 id={`case-client-${study.id}`} className="text-2xl font-bold text-secondary mb-6 pb-4 border-b border-slate-100">{study.client}</h2>
                          
                          <div className="space-y-4 mb-8">
                              <div>
                                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">The Challenge</h3>
                                  <p className="text-slate-700">{study.challenge}</p>
                              </div>
                              <div>
                                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Our Solution</h3>
                                  <p className="text-slate-700">{study.solution}</p>
                              </div>
                              <div>
                                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-1">The Result</h3>
                                  <p className="text-secondary font-medium">{study.result}</p>
                              </div>
                          </div>

                          <div className="bg-slate-50 p-6 rounded-lg relative mt-6">
                              <Quote className="absolute top-4 right-4 h-8 w-8 text-slate-200" />
                              <p className="text-slate-600 italic relative z-10">"{study.testimonial}"</p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>

    </div>
  );
};

export default CaseStudies;