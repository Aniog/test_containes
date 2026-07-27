import React, { useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      id: 'step1',
      number: '01',
      title: 'Submit Your Requirements',
      desc: 'Fill out our inquiry form with your product specifications, target price, estimated order quantity, and any reference materials or links.',
      bullets: ['Detailed product specifications', 'Quality requirements & certifications', 'Target pricing & packaging needs'],
      imgId: 'hw-step-1'
    },
    {
      id: 'step2',
      number: '02',
      title: 'Supplier Matching & Quotation',
      desc: 'Our local team identifies and contacts suitable manufacturers. We negotiate prices, check their credentials, and present you with a detailed comparative quote within 24-48 hours.',
      bullets: ['Verify factory licenses and capacity', 'Negotiate best possible pricing', 'Detailed cost breakdown (Ex-works, FOB, DDP)'],
      imgId: 'hw-step-2'
    },
    {
      id: 'step3',
      number: '03',
      title: 'Sampling & Prototyping',
      desc: 'Once you select a supplier, we arrange for samples to be produced. We verify the samples in our office first before consolidating and shipping to you globally by express.',
      bullets: ['Initial sample inspection by our staff', 'Consolidation to save your shipping costs', 'Revisions and improvements negotiation'],
      imgId: 'hw-step-3'
    },
    {
      id: 'step4',
      number: '04',
      title: 'Order Placement & Production Follow-up',
      desc: 'After sample approval, you place the bulk order. We draft standard agreements to protect you and closely monitor the production timeline to prevent delays.',
      bullets: ['Secure payment arrangements', 'Regular production status updates', 'Early intervention if issues arise'],
      imgId: 'hw-step-4'
    },
    {
      id: 'step5',
      number: '05',
      title: 'Quality Control & Inspection',
      desc: 'We perform rigorous pre-shipment inspections based on international AQL standards. You receive a comprehensive report with photos and videos before the final payment is released.',
      bullets: ['During Production Inspection (DUPRO)', 'Pre-Shipment Inspection (PSI)', 'Defect sorting and rejection management'],
      imgId: 'hw-step-5'
    },
    {
      id: 'step6',
      number: '06',
      title: 'Logistics & Final Delivery',
      desc: 'Once the goods pass inspection, we handle the complex logistics. Whether you need sea freight, air freight, or direct delivery to an Amazon FBA warehouse, we ensure smooth delivery.',
      bullets: ['Space booking and container loading', 'Customs clearance handling', 'Door-to-door or FBA coordination'],
      imgId: 'hw-step-6'
    }
  ];

  return (
    <div ref={containerRef} className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 id="page-title" className="text-4xl font-bold font-['Montserrat'] tracking-tight text-slate-900 sm:text-5xl">Our Proven Sourcing Process</h1>
        <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">A transparent, step-by-step methodology to ensure your sourcing success from China.</p>
      </div>

      <div className="space-y-24">
        {steps.map((step, index) => (
          <div key={step.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative h-80 md:h-[400px]">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur text-blue-600 font-bold font-['Montserrat'] text-2xl h-12 w-12 flex items-center justify-center rounded-xl shadow-sm">
                  {step.number}
                </div>
                <img 
                  data-strk-img-id={step.imgId}
                  data-strk-img={`[step-title-${step.id}] [page-title] global sourcing step process`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <h2 id={`step-title-${step.id}`} className="text-3xl font-bold font-['Montserrat'] text-slate-900">{step.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{step.desc}</p>
              
              <ul className="space-y-4 pt-4">
                {step.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                    <span className="text-slate-700 font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <h3 className="text-2xl font-bold font-['Montserrat'] text-slate-900 mb-6">Ready to start step one?</h3>
        <Link to="/contact" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 text-lg rounded-md font-semibold transition-colors shadow-md">
          Send Your Inquiry Details <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
