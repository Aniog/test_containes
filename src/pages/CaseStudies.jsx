import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      id: 'case1',
      title: 'Scaling Consumer Electronics Production for a US Brand',
      client: 'US-Based Tech Startup',
      challenge: 'The client was facing consistent quality issues and delayed shipments from their existing factory in Shenzhen, putting their upcoming product launch at risk.',
      solution: 'We audited 5 alternative factories, selected a more capable partner, negotiated a 12% cost reduction, and placed our QC inspector on-site during crucial production phases.',
      results: ['12% cost reduction', '0% defect rate on final shipment', 'Delivered 2 weeks ahead of launch schedule']
    },
    {
      id: 'case2',
      title: 'Consolidating 15 Suppliers for an Australian E-commerce Business',
      client: 'Australian Home & Garden Retailer',
      challenge: 'The client was importing various home decor items from 15 different small factories, leading to massive logistics headaches, high shipping costs, and inconsistent packaging.',
      solution: 'We centralized their purchasing, renegotiated terms with the top 8 performing factories, replaced the underperforming ones, and established a consolidation warehouse to repalletize goods.',
      results: ['35% reduction in shipping/logistics costs', 'Unified custom brand packaging', 'Freed up 20+ hours of the client\'s time per week']
    },
    {
      id: 'case3',
      title: 'Custom Tooling & ODM for a European Fitness Brand',
      client: 'European Fitness Equipment Company',
      challenge: 'The brand needed to develop a proprietary piece of fitness equipment but was worried about IP theft and finding a supplier capable of precise custom molding.',
      solution: 'We signed strict NNN agreements, sourced a specialized precision engineering factory, oversaw the entire 3D prototyping phase, and managed the tooling process.',
      results: ['Successfully protected IP', 'Mold completed in 45 days', 'First mass production run passed all CE safety certifications']
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-20 relative">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          data-strk-bg-id="cases-header-bg"
          data-strk-bg="[cases-header-title] success business growth"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container relative mx-auto px-4 text-center z-10">
          <h1 id="cases-header-title" className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            Real examples of how we've helped global businesses solve their China sourcing challenges.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-20">
            {cases.map((study) => (
              <div key={study.id} className="bg-white border text-left border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-auto bg-gray-200">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.title}
                      data-strk-img-id={`case-${study.id}-img`}
                      data-strk-img={`[case-${study.id}-title] b2b success`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">{study.client}</span>
                    <h2 id={`case-${study.id}-title`} className="text-2xl font-bold text-gray-900 mb-6">{study.title}</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">The Challenge:</h3>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Our Solution:</h3>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Key Results:</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start">
                              <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-800 font-medium">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Become Our Next Success Story</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you are a startup launching your first product or an established enterprise optimizing your supply chain, we are here to help.
          </p>
          <Button size="lg" className="bg-blue-600 text-white" asChild>
            <Link to="/contact">Let's Discuss Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
