import React, { useEffect, useRef } from 'react';
import { Search, ClipboardList, PenTool, CheckCircle, Package, Truck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      title: 'Consultation & Product Specs',
      desc: 'Tell us about your sourcing needs, budget, and quality requirements. We define the specs together to ensure perfect alignment.',
      icon: <ClipboardList className="w-10 h-10" />
    },
    {
      title: 'Supplier Search & Quotation',
      desc: 'We research dozens of providers, shortlist the best 3-5, and provide you with a comprehensive quotation list.',
      icon: <Search className="w-10 h-10" />
    },
    {
      title: 'Samples & Prototyping',
      desc: 'We coordinate sample production, consolidate them in our warehouse, and ship them to you for approval.',
      icon: <PenTool className="w-10 h-10" />
    },
    {
      title: 'Production Management',
      desc: 'Once samples are approved, we oversee the bulk production, managing timelines and quality benchmarks on-site.',
      icon: <CheckCircle className="w-10 h-10" />
    },
    {
      title: 'Quality Inspection',
      desc: 'Our inspectors check the final batch using AQL standards before you make the final payment to the supplier.',
      icon: <Package className="w-10 h-10" />
    },
    {
      title: 'Logistics & Shipping',
      desc: 'We arrange the most efficient shipping method (Air, Sea, or Express) and handle all customs documentation.',
      icon: <Truck className="w-10 h-10" />
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            data-strk-img-id="how-it-works-bg"
            data-strk-img="China factory production line workers professional supply chain"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 id="how-title" className="text-4xl md:text-5xl font-extrabold mb-6">Our Sourcing Process</h1>
          <p id="how-desc" className="text-xl text-gray-300 max-w-2xl mx-auto">
            From your initial idea to the final product delivered to your doorstep. Here is how we make it happen.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2 hidden md:block" />

            {/* Steps */}
            <div className="space-y-16">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                  <div className={`md:w-1/2 flex ${idx % 2 === 0 ? 'md:justify-end md:pr-12' : 'md:order-2 md:justify-start md:pl-12'}`}>
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-md w-full hover:border-primary transition-colors">
                      <div className="text-primary mb-4">{step.icon}</div>
                      <h3 className="text-xl font-extrabold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Circle Indicator */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary border-4 border-white shadow-md z-20" />
                    <div className="w-12 h-12 rounded-full bg-primary/10 absolute animate-ping z-10" />
                  </div>

                  <div className={`md:w-1/2 hidden md:block ${idx % 2 === 0 ? 'order-2' : ''}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Callout */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to follow this path?</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We've helped hundreds of clients successfully navigate the complexities of China's manufacturing landscape. Let's talk about your project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-10 py-5 rounded-md text-lg font-bold hover:bg-blue-800 transition-colors shadow-xl"
          >
            Start Your Sourcing Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
