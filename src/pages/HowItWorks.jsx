import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ClipboardList, MessageSquareText, ThumbsUp, Layers, BadgeCheck, Ship } from 'lucide-react';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const steps = [
    {
      id: 'step-1',
      title: '1. Submit Your Request',
      desc: 'Send us your product details, specifications, target price, and quantity. The more details, the better.',
      icon: <ClipboardList className="w-8 h-8 text-white" />
    },
    {
      id: 'step-2',
      title: '2. We Source & Quote',
      desc: 'Our team contacts 5-10 suitable factories, negotiates prices, and presents you with the best options and a transparent quote.',
      icon: <MessageSquareText className="w-8 h-8 text-white" />
    },
    {
      id: 'step-3',
      title: '3. Sample Approval',
      desc: 'We collect samples from suppliers, consolidate them into one package, and send them to you for final approval to save shipping costs.',
      icon: <ThumbsUp className="w-8 h-8 text-white" />
    },
    {
      id: 'step-4',
      title: '4. Order & Production',
      desc: 'Once you approve the sample, we place the official order. We monitor the production timeline to prevent any delays.',
      icon: <Layers className="w-8 h-8 text-white" />
    },
    {
      id: 'step-5',
      title: '5. Quality Inspection',
      desc: 'Before completing payment, our QC team goes to the factory to inspect the goods based on your AQL standards. A detailed report is provided.',
      icon: <BadgeCheck className="w-8 h-8 text-white" />
    },
    {
      id: 'step-6',
      title: '6. Shipping & Delivery',
      desc: 'We handle shipping arrangements (air, sea, or express), assist with customs clearance, and ensure safe delivery to your warehouse.',
      icon: <Ship className="w-8 h-8 text-white" />
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          data-strk-bg-id="hiw-hero-bg-99zz"
          data-strk-bg="[hiw-title] [hiw-desc]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h1 id="hiw-title" className="text-4xl md:text-5xl font-bold mb-6">How Our Sourcing Process Works</h1>
          <p id="hiw-desc" className="text-xl text-slate-300">
            A proven, 6-step framework to take your product from idea to reality, safely and efficiently.
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                  <div className="bg-slate-100 rounded-2xl p-8 relative overflow-hidden h-64 flex items-center justify-center">
                    <img
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      data-strk-img-id={`hiw-img-${step.id}`}
                      data-strk-img={`[hiw-title-${step.id}] [hiw-desc-${step.id}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    {step.icon}
                  </div>
                  <h3 id={`hiw-title-${step.id}`} className="text-2xl font-bold text-slate-900">{step.title}</h3>
                  <p id={`hiw-desc-${step.id}`} className="text-lg text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 py-20 text-center text-white mt-auto">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Ready for Step 1?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Tell us about your product requirements. It costs nothing to get a quote.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg">
            <Link to="/contact">Submit Your Sourcing Request</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;