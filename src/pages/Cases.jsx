import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Cases = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      id: "case-01",
      client: 'US-based Home Goods Brand',
      challenge: 'Client was experiencing high defect rates (15%+) from their Alibaba supplier for ceramic kitchenware, causing negative Amazon reviews.',
      solution: 'Conducted a factory audit, discovered sub-contracting. Sourced a new, verified OEM manufacturer. Implemented strict DUPRO and PSI inspections.',
      results: ['Defect rate reduced to <1%', 'Production lead time shortened by 10 days', 'Saved 12% on unit cost'],
      imgKeywords: '[client] [challenge] ceramic kitchenware'
    },
    {
      id: "case-02",
      client: 'European Tech Startup',
      challenge: 'Needed to develop a custom smart-home device from scratch. Lacked engineers to oversee the molding and prototyping process in China.',
      solution: 'Assigned a dedicated sourcing manager. Coordinated between client and 3 specialized factories (PCBA, plastic molding, assembly).',
      results: ['Successful working prototype in 45 days', 'Fully protected IP with NNN agreements', 'Launched on Kickstarter on schedule'],
      imgKeywords: '[client] smart home device custom prototype'
    },
    {
      id: "case-03",
      client: 'Australian E-commerce Retailer',
      challenge: 'Paying too much for shipping small, frequent LCL (Less than Container Load) shipments from 5 different suppliers.',
      solution: 'Provided consolidation services at our Guangzhou warehouse. Coordinated production schedules to align shipments.',
      results: ['Combined into full FCL shipments', 'Reduced logistics costs by 35%', 'Simplified customs clearance'],
      imgKeywords: '[client] warehouse consolidation shipping'
    }
  ];

  return (
    <div className="py-16 md:py-24" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 id="cases-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Client Success Stories</h1>
          <p id="cases-desc" className="text-xl text-slate-600">
            See how we've helped businesses around the world overcome supply chain challenges and improve their margins.
          </p>
        </div>

        <div className="space-y-16">
          {cases.map((study, index) => (
            <div key={study.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row">
              <div className="md:w-2/5 relative h-64 md:h-auto bg-slate-200">
                <img 
                  data-strk-img-id={`case-img-${study.id}`}
                  data-strk-img={study.imgKeywords}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`Case study for ${study.client}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-8 md:p-12 pl-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{study.client}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">The Challenge</h3>
                    <p className="text-slate-700">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Our Solution</h3>
                    <p className="text-slate-700">{study.solution}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-3">Key Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, rIndex) => (
                        <li key={rIndex} className="flex items-start text-blue-900 font-medium">
                          <span className="text-blue-500 mr-2">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-slate-600 mb-6">Want similar results for your business?</p>
          <Link to="/contact" className="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition items-center">
            Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cases;