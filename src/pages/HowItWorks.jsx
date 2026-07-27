import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      id: 'step-1',
      number: '01',
      title: 'Submit Your Requirements',
      duration: 'Day 1',
      desc: 'Fill out our inquiry form with detailed specifications of the product you want to source. Include target prices, order quantities, materials, and any reference images or CAD files.',
      details: [
        'Detailed product specifications review',
        'Target price analysis',
        'Initial feasibility assessment'
      ]
    },
    {
      id: 'step-2',
      number: '02',
      title: 'Supplier Search & Quoting',
      duration: 'Days 2-5',
      desc: 'Our sourcing experts tap into our network and local industrial clusters to find 3-5 qualified manufacturers. We negotiate prices, request factory profiles, and compile a comprehensive quote comparison for you.',
      details: [
        'Shortlisting 3-5 verified factories',
        'Price negotiation in local language',
        'Comprehensive quotation report provided'
      ]
    },
    {
      id: 'step-3',
      number: '03',
      title: 'Sample Arrangement & Approval',
      duration: 'Days 6-15',
      desc: 'Once you select a supplier, we arrange for samples to be made. We perform a preliminary check in our office before consolidating and shipping them to you via express courier for final approval.',
      details: [
        'Sample production monitoring',
        'Initial quality check by our team',
        'Fast shipping via DHL/FedEx to your door'
      ]
    },
    {
      id: 'step-4',
      number: '04',
      title: 'Contract & Mass Production',
      duration: 'Varies',
      desc: 'Upon sample approval, we help draft a secure Purchase Agreement protecting your interests. You pay the deposit, and manufacturing begins. We follow up regularly to prevent delays.',
      details: [
        'Drafting bilingual manufacturing contracts',
        'Payment protection guidance',
        'Weekly production status updates'
      ]
    },
    {
      id: 'step-5',
      number: '05',
      title: 'Quality Inspection',
      duration: 'Pre-shipment',
      desc: 'Before you pay the final balance, our QC team visits the factory to conduct rigorous inspections based on AQL standards to ensure the mass production matches the approved sample.',
      details: [
        'On-site factory inspection',
        'Detailed QC report with photos/videos',
        'Defect resolution negotiation if needed'
      ]
    },
    {
      id: 'step-6',
      number: '06',
      title: 'Shipping & Delivery',
      duration: 'Varies',
      desc: 'We arrange the most efficient shipping method (Air, Sea, or Rail) based on your budget and timeline. We handle all export customs clearance and ensure safe delivery to your final destination.',
      details: [
        'Freight rate comparison',
        'Customs documentation handling',
        'Final delivery to warehouse or FBA'
      ]
    }
  ];

  return (
    <div ref={containerRef} className="py-12 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 id="hiw-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How Our Sourcing Process Works</h1>
          <p id="hiw-desc" className="text-xl text-slate-600 max-w-3xl mx-auto">
            A transparent, step-by-step approach to importing from China safely and profitably.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={step.id} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 relative overflow-hidden">
               {/* Large background number */}
              <div className="absolute -right-4 -top-8 text-9xl font-extrabold text-slate-50 opacity-50 pointer-events-none select-none">
                {step.number}
              </div>
              
              <div className="md:w-1/3 flex flex-col">
                <div className="text-blue-600 font-bold text-lg mb-2">Step {step.number}</div>
                <h2 id={`step-title-${step.id}`} className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h2>
                <div className="flex items-center text-slate-500 font-medium text-sm mt-auto">
                  <Clock className="w-4 h-4 mr-2" />
                  Estimated time: {step.duration}
                </div>
              </div>
              
              <div className="md:w-2/3 relative z-10">
                <p id={`step-desc-${step.id}`} className="text-slate-600 text-lg mb-6 leading-relaxed">
                  {step.desc}
                </p>
                <ul className="space-y-3">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-xl p-10 text-center shadow-lg pt-16 pb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Minimize Your Risks Today</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't navigate the complexities of international manufacturing alone. Let our experts handle the heavy lifting.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-50 font-bold h-14 px-10 text-lg shadow-md hover:shadow-xl transition-all">
              Submit Your Product Inquiry
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
