import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Cases = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const studies = [
    {
      id: 'case-1',
      client: 'US Electronics Brand',
      title: 'Sourcing Custom Smart Home Devices',
      challenge: 'Client needed a reliable manufacturer for a new line of smart plugs but was struggling with high defect rates from their current supplier.',
      solution: 'We audited 5 new factories, selected one with strict ISO9001 standards, negotiated a 15% lower unit price, and implemented DUPRO (During Production) inspections.',
      results: ['Defect rate dropped from 8% to 0.5%', 'Unit cost reduced by 15%', 'Successfully launched 3 new SKUs on Amazon']
    },
    {
      id: 'case-2',
      client: 'European Furniture Retailer',
      title: 'Consolidating Multiple Suppliers',
      challenge: 'Client was buying from 4 different factories in China and paying exorbitant LCL (Less than Container Load) shipping fees for each.',
      solution: 'We arranged for all 4 factories to send goods to our Guangzhou warehouse. We consolidated the cargo into a single 40HQ container and handled all export documentation.',
      results: ['Saved $4,500 per month in shipping costs', 'Reduced average transit time by 12 days', 'Simplified supplier payment process']
    },
    {
      id: 'case-3',
      client: 'Australian Apparel Startup',
      title: 'Developing a New Activewear Line',
      challenge: 'A new brand needed an OEM manufacturer capable of working with custom sustainable fabrics but had low initial order quantities (MOQ).',
      solution: 'Leveraged our network to find a mid-sized factory willing to accept a low MOQ for the first order in exchange for long-term partnership commitments.',
      results: ['Successfully produced initial batch of 500 units', 'Matched exact fabric specifications', 'Brand grew to $1M+ revenue in year one']
    }
  ];

  return (
    <div ref={containerRef} className="py-12 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 id="cases-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Client Success Stories</h1>
          <p id="cases-desc" className="text-xl text-slate-600">
            See how we've helped businesses around the world optimize their China supply chain, reduce costs, and improve quality.
          </p>
        </div>

        <div className="space-y-12">
          {studies.map((study, index) => (
             <div key={study.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col lg:flex-row">
              <div className="lg:w-2/5 relative h-64 lg:h-auto">
                 <img
                    data-strk-img-id={`case-img-${study.id}`}
                    data-strk-img={`[case-title-${study.id}] manufacturing logistics`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.title}
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                   {study.client}
                 </div>
              </div>
              <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                <h2 id={`case-title-${study.id}`} className="text-2xl font-bold text-slate-900 mb-6">{study.title}</h2>
                
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">The Challenge</h3>
                  <p className="text-slate-700">{study.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Our Solution</h3>
                  <p className="text-slate-700">{study.solution}</p>
                </div>

                <div>
                   <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Key Results</h3>
                   <ul className="space-y-2">
                     {study.results.map((result, i) => (
                       <li key={i} className="flex items-start">
                         <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 mt-2 shrink-0"></div>
                         <span className="text-slate-900 font-medium">{result}</span>
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
             </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/contact">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-semibold h-14 px-8 text-lg">
              Start Your Success Story <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cases;
