import React, { useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 id="page-title" className="text-4xl font-bold font-['Montserrat'] tracking-tight text-slate-900 sm:text-5xl">Our Sourcing Services</h1>
        <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">End-to-end supply chain solutions tailored for international buyers.</p>
      </div>

      <div className="space-y-16">
        {/* Service 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="sourcing-title" className="text-3xl font-bold font-['Montserrat'] text-slate-900 mb-4">Supplier Sourcing</h2>
            <p className="text-lg text-slate-600 mb-6">Finding the right factory is the most critical step. We don't just search Alibaba; we leverage our localized network to find manufacturers that meet your specific quality standards and price points.</p>
            <ul className="space-y-3">
              <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-blue-600 mr-3 shrink-0" /><span className="text-slate-700">Identifying 5-10 capable manufacturers</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-blue-600 mr-3 shrink-0" /><span className="text-slate-700">Price and MOQ negotiation</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-blue-600 mr-3 shrink-0" /><span className="text-slate-700">Background verification (licenses, certs)</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-blue-600 mr-3 shrink-0" /><span className="text-slate-700">Sample consolidation and evaluation</span></li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl h-80">
            <img 
              data-strk-img-id="serv-detail-1"
              data-strk-img="[sourcing-title] [page-title] supplier sourcing factory negotiation business"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Supplier Sourcing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Service 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl h-80">
            <img 
              data-strk-img-id="serv-detail-2"
              data-strk-img="[audit-title] [page-title] factory audit safety evaluation production line"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Factory Audit"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 id="audit-title" className="text-3xl font-bold font-['Montserrat'] text-slate-900 mb-4">Factory Audit</h2>
            <p className="text-lg text-slate-600 mb-6">Never wire money blindly. Our team physically visits the factory to ensure they are who they say they are, and that they have the capacity to produce your goods to standard.</p>
            <ul className="space-y-3">
              <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-blue-600 mr-3 shrink-0" /><span className="text-slate-700">On-site verification of facilities</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-blue-600 mr-3 shrink-0" /><span className="text-slate-700">Production capacity assessment</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-blue-600 mr-3 shrink-0" /><span className="text-slate-700">Quality management system check</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-blue-600 mr-3 shrink-0" /><span className="text-slate-700">Comprehensive audit report with photos</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
