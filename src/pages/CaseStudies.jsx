import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { TrendingUp, Clock, DollarSign } from 'lucide-react';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      id: 'electronics-brand',
      title: 'Scaling Production for a US Tech Startup',
      descId: 'case-1-desc',
      client: 'Consumer Electronics Brand, USA',
      challenge: 'The client had a working prototype for a new smart home device but their initial factory couldn\'t meet the quality standards needed for a large-scale retail launch. Defect rates were over 15%.',
      solution: 'We audited 5 alternative factories, selecting one with ISO 9001 certification and experience with similar IoT devices. We implemented a strict Quality Control Plan (QCP) and stationed an inspector on-site during the first pilot run.',
      results: [
        { icon: <TrendingUp className="h-5 w-5 text-blue-600" />, text: 'Defect rate reduced from 15% to 0.8%' },
        { icon: <Clock className="h-5 w-5 text-blue-600" />, text: 'Production time cut by 2 weeks' },
        { icon: <DollarSign className="h-5 w-5 text-blue-600" />, text: 'Manufacturing costs decreased by 12%' }
      ]
    },
    {
      id: 'furniture-retailer',
      title: 'Consolidating Suppliers for a European Retailer',
      descId: 'case-2-desc',
      client: 'Furniture Chain, Germany',
      challenge: 'The client was buying from 12 different factories across China, causing massive logistical headaches, inconsistent quality, and high shipping costs due to shipping multiple LCL (Less than Container Load) shipments.',
      solution: 'We streamlined their supply chain by finding 3 larger, capable factories that could produce multiple product lines. We also set up a central consolidation warehouse in Shenzhen to combine their goods into FCL (Full Container Load) shipments.',
      results: [
        { icon: <TrendingUp className="h-5 w-5 text-blue-600" />, text: 'Supply chain management time reduced by 60%' },
        { icon: <Clock className="h-5 w-5 text-blue-600" />, text: 'Consistent quality across all product lines' },
        { icon: <DollarSign className="h-5 w-5 text-blue-600" />, text: 'Logistics costs reduced by 22% annually' }
      ]
    },
    {
      id: 'apparel-brand',
      title: 'Rescuing a Delayed Apparel Collection',
      descId: 'case-3-desc',
      client: 'Fashion Retailer, Australia',
      challenge: 'A major seasonal collection was 4 weeks behind schedule, threatening to miss the crucial holiday sales window. Communication with the factory had broken down.',
      solution: 'We sent a team to the factory in Guangdong within 24 hours. We discovered the delay was due to a fabric shortage. We quickly sourced the matching fabric from an alternative mill and negotiated priority production shifts with factory management.',
      results: [
        { icon: <Clock className="h-5 w-5 text-blue-600" />, text: 'Order shipped via urgent air freight just in time' },
        { icon: <TrendingUp className="h-5 w-5 text-blue-600" />, text: '100% of the collection reached stores for the holiday' },
        { icon: <ShieldCheck className="h-5 w-5 text-blue-600" />, text: 'Established a new, reliable backup supplier network' }
      ]
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <div className="bg-slate-900 py-16 lg:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 id="page-title" className="text-4xl md:text-5xl font-bold text-white mb-6">Client Success Stories</h1>
          <p id="page-subtitle" className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real examples of how we've helped global businesses overcome sourcing challenges, reduce costs, and improve quality.
          </p>
        </div>
      </div>

      {/* Case Studies Content */}
      <div className="py-20 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((study) => (
              <div key={study.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  {/* Image Side */}
                  <div className="relative aspect-video lg:aspect-auto">
                    <img
                      alt={study.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={`case-img-${study.id}`}
                      data-strk-img={`[case-title-${study.id}] [${study.descId}] factory manufacturing business`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  
                  {/* Content Side */}
                  <div className="p-8 lg:p-12 border-l border-slate-100">
                    <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                      {study.client}
                    </div>
                    <h2 id={`case-title-${study.id}`} className="text-3xl font-bold text-slate-900 mb-6">{study.title}</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">The Challenge</h3>
                        <p id={study.descId} className="text-slate-600 leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Our Solution</h3>
                        <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                      </div>
                      
                      <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mt-8">
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Key Results</h3>
                        <ul className="space-y-3">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-center gap-3">
                              {result.icon}
                              <span className="text-slate-700 font-medium">{result.text}</span>
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
      </div>

       {/* CTA */}
       <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to write your own success story?</h2>
          <a href="/contact" className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-block">
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </div>
  );
};

// added ShieldCheck to imports to fix build error
import { ShieldCheck } from 'lucide-react';

export default CaseStudies;
