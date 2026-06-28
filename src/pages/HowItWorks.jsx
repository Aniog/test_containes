import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, ShieldAlert, BadgeCheck, PackageSearch, HelpCircle } from 'lucide-react';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      title: '1. Tell Us Your Needs',
      desc: 'Send us your product requirements, including quantity, target price, and specifications.',
      icon: Search
    },
    {
      title: '2. We Source & Quote',
      desc: 'We identify the best-fit manufacturers and present you with a detailed sourcing report and pricing.',
      icon: PackageSearch
    },
    {
      title: '3. Sample Verification',
      desc: 'We collect and inspect samples for you. You only pay for production when you’re 100% satisfied.',
      icon: ShieldAlert
    },
    {
      title: '4. Production & Inspection',
      desc: 'We oversee the production and conduct on-site QC inspections to ensure standards are met.',
      icon: BadgeCheck
    }
  ];

  const faqs = [
    {
      q: 'How much do you charge for your services?',
      a: 'We offer flexible pricing. For standard sourcing, we typically charge a percentage of the total order value (5-10%) or a flat service fee depending on the complexity.'
    },
    {
      q: 'Do you handle the shipping and customs?',
      a: 'Yes, we provide full shipping coordination. We work with sea, air, and rail freight partners and can handle customs clearance to provide door-to-door delivery.'
    },
    {
      q: 'How do you ensure the quality of products?',
      a: 'We perform on-site inspections at different stages: during production and before shipment. We follow international AQL standards or your specific checklist.'
    },
    {
      q: 'Can you source any type of product?',
      a: 'We source a wide variety of industrial and consumer goods. However, we do not source hazardous materials or illegal items. Check our "Products" page for more details.'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Process</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            A transparent and proven workflow to ensure your China sourcing journey is successful and risk-free.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-1 bg-slate-100 -z-0"></div>
            
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center mb-6 shadow-xl">
                  <step.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8 text-blue-600" /> Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-4">{faq.q}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
