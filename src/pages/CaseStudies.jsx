import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const studies = [
    {
      id: 'cs1',
      client: 'US Electronics Brand',
      challenge: 'High defect rate (15%) with previous supplier and delayed shipments.',
      solution: 'Identified a new audited factory, implemented strict AQL 2.5 during production, and negotiated priority shipping.',
      result: 'Defect rate dropped to <1%, saving $45,000 annually. Production time reduced by 2 weeks.',
      imgId: 'cs-img-1'
    },
    {
      id: 'cs2',
      client: 'European Furniture Retailer',
      challenge: 'Struggling to consolidate products from 4 different factories into one container, causing huge shipping costs.',
      solution: 'Provided consolidation warehousing in Shenzhen, coordinated delivery schedules, and managed final loading.',
      result: 'Reduced shipping costs by 35% through proper container optimization and lowered customs clearance fees.',
      imgId: 'cs-img-2'
    },
    {
      id: 'cs3',
      client: 'Amazon FBA Seller (Home Goods)',
      challenge: 'Items arriving at Amazon fulfillment centers without proper labeling, causing rejection and fees.',
      solution: 'Set up a dedicated FBA prep process post-production including labeling, poly-bagging, and customized carton packing before export.',
      result: '100% compliance with Amazon requirements, zero rejection fees, and improved inventory availability speed.',
      imgId: 'cs-img-3'
    }
  ];

  return (
    <div ref={containerRef} className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 id="page-title" className="text-4xl font-bold font-['Montserrat'] tracking-tight text-slate-900 sm:text-5xl">Client Success Stories</h1>
        <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">Real results we've achieved for buyers around the world.</p>
      </div>

      <div className="space-y-12">
        {studies.map((study, idx) => (
          <Card key={study.id} className="overflow-hidden border-none shadow-lg grid grid-cols-1 md:grid-cols-2">
            <div className={`h-64 md:h-auto order-1 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
              <img 
                data-strk-img-id={study.imgId}
                data-strk-img={`[client-${study.id}] case study business success results`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={study.client}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className={`p-8 md:p-12 flex flex-col justify-center order-2 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
              <h3 id={`client-${study.id}`} className="text-2xl font-bold font-['Montserrat'] text-slate-900 mb-6">{study.client}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900">The Challenge:</h4>
                  <p className="text-slate-600">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Our Solution:</h4>
                  <p className="text-slate-600">{study.solution}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-4">
                  <h4 className="font-bold text-blue-800">The Result:</h4>
                  <p className="text-blue-900">{study.result}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Link to="/contact" className="inline-flex items-center text-blue-600 font-semibold text-lg hover:text-blue-800">
          Want results like these? Contact us today <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
