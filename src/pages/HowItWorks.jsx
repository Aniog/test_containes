import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const steps = [
  {
    number: '01',
    title: 'Requirement Briefing',
    desc: 'You provide us with detailed product specifications, target pricing, estimated quantities, and any mandatory certifications. The more detail you provide, the faster we can find the perfect match.'
  },
  {
    number: '02',
    title: 'Supplier Selection',
    desc: 'We filter through our database and on-the-ground networks to identify 3-5 high-potential suppliers. We collect initial quotes and verify their production capacity and lead times.'
  },
  {
    number: '03',
    title: 'Sampling & Validation',
    desc: 'We coordinate the production and delivery of samples to your office. If the samples meet your standards, we move forward with a physical factory audit to ensure legitimacy.'
  },
  {
    number: '04',
    title: 'Contract & Deposit',
    desc: 'We help you negotiate terms and ensure the contract protects your interests. Payment is made through secure channels, usually with 30% deposit to start production.'
  },
  {
    number: '05',
    title: 'Production Support',
    desc: 'We visit the factory during production to ensure there are no shortcuts being taken. You receive weekly photo/video updates on your order progress.'
  },
  {
    number: '06',
    title: 'Quality Check & Loading',
    desc: 'Before the final 70% payment, our QC team performs a rigorous pre-shipment inspection. We only authorize release once the goods pass your standards.'
  },
  {
    number: '07',
    title: 'Shipping Coordination',
    desc: 'We manage the booking of containers, export customs in China, and coordinate with your freight forwarder (or use ours) for a smooth delivery.'
  }
];

const faqs = [
  {
    q: 'How much do your services cost?',
    a: 'We offer flexible pricing: either a fixed project fee or a percentage of the total order value (typically 3-7%), depending on the complexity and volume of the shipment.'
  },
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'MOQs are set by the factories, not by us. However, we have experience negotiating MOQs for smaller brands. Generally, a sourcing project is most cost-effective for orders over $5,000 USD.'
  },
  {
    q: 'Can you consolidate orders from multiple suppliers?',
    a: 'Yes, we have a warehouse network that allows us to collect goods from multiple factories and consolidate them into a single container to save you shipping costs.'
  },
  {
    q: 'How do you ensure factory quality?',
    a: 'We use professional auditors and QC inspectors. We verify ISO certifications, business licenses, and perform on-site "black-box" testing on products before they leave the factory floor.'
  },
  {
    q: 'Do you handle customs clearance?',
    a: 'While we manage the export side in China, we work with licensed customs brokers in your home country to ensure a smooth transition through your local customs.'
  }
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero */}
      <section className="bg-blue-600 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 id="hiw-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Proven Sourcing Process</h1>
            <p id="hiw-subtitle" className="mt-6 text-xl text-blue-100">
              Transparency, accountability, and efficiency at every stage of your supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Steps List */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 hidden lg:block" />
            
            <div className="space-y-16">
              {steps.map((step) => (
                <div key={step.number} className="relative flex flex-col lg:flex-row gap-8 lg:gap-16">
                  {/* Circle Indicator */}
                  <div className="lg:absolute lg:left-0 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl z-10 border-4 border-white lg:translate-x-0 group">
                    {step.number}
                  </div>
                  
                  <div className="flex-1 lg:pl-24 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
                    <h2 id={`step-title-${step.number}`} className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h2>
                    <p id={`step-desc-${step.number}`} className="text-lg text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>

                  <div className="flex-1 lg:max-w-md">
                     <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="rounded-2xl w-full h-auto object-cover shadow-sm"
                      data-strk-img-id={`hiw-img-${step.number}`}
                      data-strk-img={`[step-title-${step.number}] [step-desc-${step.number}] sourcing logistics china`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="faq-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Frequently Asked Questions</h2>
            <p id="faq-subtitle" className="mt-4 text-lg text-slate-600">Everything you need to know about partnering with SSourcing China.</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-lg mb-4 border-none shadow-sm">
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-blue-600">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
