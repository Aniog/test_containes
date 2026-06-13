import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      id: 'smart-home-brand',
      client: 'European Smart Home Brand',
      challenge: 'The client was experiencing high defect rates (15%) with their current supplier for smart thermostats, leading to negative Amazon reviews and returns.',
      solution: 'We audited 5 new factories, selected a more capable manufacturer, and implemented a rigorous pre-shipment inspection protocol based on AQL 1.5.',
      results: [
        'Defect rate reduced to under 1%',
        'Unit cost reduced by 8% due to better negotiation',
        'Amazon rating improved from 3.2 to 4.5 stars'
      ],
      imageQuery: 'smart thermostat electronics manufacturing quality control'
    },
    {
      id: 'fitness-equipment',
      client: 'US Fitness Equipment Startup',
      challenge: 'A growing startup needed to consolidate their supply chain. They were buying dumbbells, resistance bands, and yoga mats from 4 different factories, causing high shipping costs and inconsistent branding.',
      solution: 'We sourced a primary manufacturer for the bulk of the items and handled the consolidation of the remaining specialized items at our warehouse before final shipping.',
      results: [
        'Shipping costs reduced by 35% through consolidation',
        '100% brand consistency across all product lines',
        'Lead time reduced by 2 weeks'
      ],
      imageQuery: 'fitness equipment warehouse yoga mats dumbbells'
    },
    {
      id: 'eco-packaging',
      client: 'Australian E-commerce Brand',
      challenge: 'The client wanted to switch to 100% biodegradable packaging but found European suppliers too expensive. They were worried about greenwashing from Chinese suppliers.',
      solution: 'We conducted on-site visits to verify environmental certifications (FSC, biodegradable certificates) and oversaw the custom tooling for their new packaging design.',
      results: [
        'Sourced verified biodegradable materials',
        'Saved 60% on unit costs compared to local suppliers',
        'Successfully launched their eco-friendly rebranding'
      ],
      imageQuery: 'eco friendly packaging cardboard mailer'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <div className="bg-gray-50 py-20 text-center border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Case Studies</h1>
          <p className="text-xl text-gray-600">
            Real examples of how we've helped international buyers overcome challenges and build profitable, scalable supply chains.
          </p>
        </div>
      </div>

      {/* Case Studies List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {cases.map((study, index) => (
              <div key={study.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      data-strk-img-id={`case-study-${study.id}`}
                      data-strk-img={study.imageQuery}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.client}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="mb-2 text-blue-600 font-bold tracking-wider uppercase text-sm">Case Study</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{study.client}</h2>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-red-400">
                    <h3 className="font-bold text-gray-900 mb-2">The Challenge:</h3>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-blue-400">
                    <h3 className="font-bold text-gray-900 mb-2">Our Solution:</h3>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">The Results:</h3>
                    <ul className="space-y-3">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-800 font-medium">{result}</span>
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

      {/* CTA */}
      <section className="bg-blue-900 py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-6">Want to be our next success story?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Stop losing money on poor quality and inefficient logistics. Let us manage your China sourcing.
          </p>
          <Link to="/contact" className="inline-flex px-8 py-4 bg-white text-blue-900 font-bold rounded-md hover:bg-gray-100 transition-colors text-lg shadow-md">
            Contact Our Sourcing Experts
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;