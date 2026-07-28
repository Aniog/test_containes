import React, { useEffect, useRef } from 'react';
import { Search, FileSignature, Box, Settings, CheckCircle, Ship, Plane } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      id: 'step-1',
      number: '01',
      title: 'Submit Inquiry & Consultation',
      desc: 'Send us your product specifications, target pricing, quantities, and compliance requirements. We will review your project and schedule a free consultation to align on your goals and explain our process.',
      icon: <FileSignature className="w-8 h-8 text-blue-600" />,
      imgId: 'how-step-1',
      imgQuery: '[step-title-step-1] business meeting'
    },
    {
      id: 'step-2',
      number: '02',
      title: 'Supplier Sourcing & Quotation',
      desc: 'Our sourcing agents begin scanning our network and contacting manufacturers across China. We verify their credentials and request detailed quotes. Within 3-5 days, we present you with a comprehensive quotation report.',
      icon: <Search className="w-8 h-8 text-blue-600" />,
      imgId: 'how-step-2',
      imgQuery: '[step-title-step-2] searching files'
    },
    {
      id: 'step-3',
      number: '03',
      title: 'Sample Development',
      desc: 'Before any mass production begins, we arrange for samples to be made. We consolidate samples from different suppliers at our office, inspect them, and ship them to you in one package to save on international courier fees.',
      icon: <Box className="w-8 h-8 text-blue-600" />,
      imgId: 'how-step-3',
      imgQuery: '[step-title-step-3] product prototype'
    },
    {
      id: 'step-4',
      number: '04',
      title: 'Order Placement & Production',
      desc: 'Once you approve the sample, we finalize the contract with the supplier, clearly defining production timelines, quality standards, and payment terms. We monitor the production daily to prevent delays.',
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      imgId: 'how-step-4',
      imgQuery: '[step-title-step-4] manufacturing assembly line'
    },
    {
      id: 'step-5',
      number: '05',
      title: 'Quality Control Inspection',
      desc: 'As production nears completion, our QC team heads to the factory for a Pre-Shipment Inspection (PSI). We provide a detailed photo and video report. The balance payment is only released if the goods pass inspection.',
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      imgId: 'how-step-5',
      imgQuery: '[step-title-step-5] inspecting goods'
    },
    {
      id: 'step-6',
      number: '06',
      title: 'Logistics & Delivery',
      desc: 'We arrange the most cost-effective shipping method (sea freight, air freight, or express courier). We handle customs clearance in China and ensure smooth delivery to your designated warehouse or directly to Amazon FBA.',
      icon: <Ship className="w-8 h-8 text-blue-600" />,
      imgId: 'how-step-6',
      imgQuery: '[step-title-step-6] cargo port'
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How Our Sourcing Process Works</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            A transparent, step-by-step methodology designed to minimize risk and maximize your profit margins when importing from China.
          </p>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-16 md:space-y-32">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={step.id} className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                    
                    {/* Timeline Node */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border-4 border-slate-100 rounded-full items-center justify-center shadow-sm z-10">
                      <span className="text-xl font-bold text-blue-600">{step.number}</span>
                    </div>

                    {/* Content */}
                    <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:pr-16 md:items-end md:text-right' : 'md:pl-16 md:items-start md:text-left'} items-center text-center`}>
                      <div className="flex md:hidden w-16 h-16 mb-4 bg-white border-4 border-slate-100 rounded-full items-center justify-center shadow-sm z-10">
                        <span className="text-xl font-bold text-blue-600">{step.number}</span>
                      </div>
                      <div className="mb-4 p-4 bg-white rounded-xl shadow-sm inline-block">
                        {step.icon}
                      </div>
                      <h3 id={`step-title-${step.id}`} className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed max-w-md">{step.desc}</p>
                    </div>

                    {/* Image */}
                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-white">
                        <img
                          alt={step.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          data-strk-img-id={step.imgId}
                          data-strk-img={step.imgQuery}
                          data-strk-img-ratio="4x3"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        />
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* Promise Section */}
      <section className="bg-white py-20 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Promise to You</h2>
          <p className="text-lg text-slate-600 mb-10">
            We operate with total transparency. We do not take hidden commissions from factories. We act solely on your behalf to secure the best possible outcomes for your business.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            <Link to="/contact">Start Your Project Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;