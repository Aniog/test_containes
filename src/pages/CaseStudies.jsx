import React, { useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 'cs-electronics',
    client: 'UK Electronics Distributor',
    titleId: 'cs-elec-title',
    title: 'Reducing Defect Rates from 12% to 0.5% in Smart Home Devices',
    descId: 'cs-elec-desc',
    desc: 'A UK distributor was facing severe returns due to inconsistent quality from their smart plug supplier. We stepped in to audit the factory and establish a strict QC protocol.',
    challenge: 'High defect rate (12%) leading to Amazon account suspension warnings. The original factory was secretly subcontracting orders to smaller, unverified workshops to cut costs.',
    solution: 'We conducted a surprise audit, uncovered the subcontracting, and moved production to a verified tier-1 facility. We implemented daily DPI (During Production Inspection) and 100% functional testing PSI (Pre-Shipment Inspection).',
    results: [
      'Defect rate dropped to 0.5% within two production cycles.',
      'Unit cost remained stable due to better efficiency and zero waste.',
      'Amazon ratings improved from 3.2 to 4.6 stars.'
    ]
  },
  {
    id: 'cs-furniture',
    client: 'US E-commerce Brand',
    titleId: 'cs-furn-title',
    title: 'Consolidating Suppliers to Slash Shipping Costs by 30%',
    descId: 'cs-furn-desc',
    desc: 'An emerging US and Canada e-commerce brand was sourcing outdoor furniture from five different factories, resulting in scattered LCL shipments and exorbitant logistics fees.',
    challenge: 'Managing five separate suppliers caused endless communication delays, inconsistent packaging, and high LCL (Less than Container Load) shipping costs.',
    solution: 'We identified a single, large-scale manufacturer in Guangdong capable of producing 80% of their catalog. For the remaining 20%, we arranged for the goods to be sent to our consolidation warehouse to ship as FCL (Full Container Load).',
    results: [
      'Shipping and logistics costs reduced by roughly 30%.',
      'Communication streamlined to a single point of contact (us).',
      'Standardized packaging lowered shipping damages by 40%.'
    ]
  },
  {
    id: 'cs-apparel',
    client: 'Australian Activewear Startup',
    titleId: 'cs-app-title',
    title: 'Navigating Minimum Order Quantities (MOQs) for Premium Fabrics',
    descId: 'cs-app-desc',
    desc: 'A startup needed custom activewear using a specific recycled performance fabric, but factories demanded MOQs of 5,000 units per color, well beyond their budget.',
    challenge: 'Finding a manufacturer willing to produce high-quality, custom-fabric activewear at lower initial MOQs to allow the startup to test the market.',
    solution: 'Leveraging our established relationship with textile mills, we negotiated a split-production deal. The factory agreed to produce the fabric in bulk but store it, manufacturing the garments in smaller batches of 500 units over 6 months.',
    results: [
      'Successfully launched with only 500 units per style/color.',
      'Maintained tier-1 factory quality standards despite small order sizes.',
      'Enabled the brand to scale inventory safely matching demand.'
    ]
  }
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pb-20">
       {/* Header */}
       <section className="bg-slate-900 pt-20 pb-20 relative overflow-hidden">
         <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="casestudies-header-bg"
          data-strk-bg="[casestudies-header-desc] [casestudies-header-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 id="casestudies-header-title" className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Client Success Stories</h1>
          <p id="casestudies-header-desc" className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            See how we have helped businesses worldwide overcome sourcing challenges, improve product quality, and increase profit margins.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
               <div className="flex flex-col lg:flex-row">
                  {/* Image Side */}
                  <div className="lg:w-2/5 relative">
                     <img
                        alt={study.title}
                        data-strk-img-id={`img-${study.id}`}
                        data-strk-img={`[${study.descId}] [${study.titleId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover min-h-[300px]"
                     />
                     <div className="absolute top-4 left-4 bg-white/90 backdrop-blur top-4 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-700 shadow-sm border border-white/20">
                        {study.client}
                     </div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:w-3/5 p-8 lg:p-12">
                     <h2 id={study.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{study.title}</h2>
                     <p id={study.descId} className="text-lg text-slate-600 mb-8 leading-relaxed">
                        {study.desc}
                     </p>

                     <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                           <div className="flex items-center gap-2 mb-3">
                              <AlertTriangle className="w-5 h-5 text-amber-500" />
                              <h3 className="font-bold text-slate-900">The Challenge</h3>
                           </div>
                           <p className="text-sm text-slate-600 leading-relaxed">{study.challenge}</p>
                        </div>
                        <div>
                           <div className="flex items-center gap-2 mb-3">
                              <CheckCircle2 className="w-5 h-5 text-blue-500" />
                              <h3 className="font-bold text-slate-900">Our Solution</h3>
                           </div>
                           <p className="text-sm text-slate-600 leading-relaxed">{study.solution}</p>
                        </div>
                     </div>

                     <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-2 mb-4">
                           <TrendingUp className="w-5 h-5 text-green-600" />
                           <h3 className="font-bold text-slate-900">The Results</h3>
                        </div>
                        <ul className="space-y-3">
                           {study.results.map((result, i) => (
                              <li key={i} className="flex items-start gap-3">
                                 <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></div>
                                 <span className="text-sm text-slate-700 leading-relaxed">{result}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Become Our Next Success Story</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
               Whether you're facing quality issues, communication barriers, or simply want to improve your margins, we have the experience to help.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-50 transition-colors shadow-lg">
               Get a Free Consultation
               <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
         </div>
      </section>
    </div>
  );
}
