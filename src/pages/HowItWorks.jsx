import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, Mail, FileText, CheckCircle2, ShieldCheck, Box, Truck, CreditCard } from 'lucide-react';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      title: 'Submit Inquiry',
      desc: 'Tell us your product specs, target price, and quantity. We review your requirements to ensure feasibility.',
      icon: Mail,
    },
    {
      title: 'Supplier Sourcing',
      desc: 'Our local team finds 3-5 qualified manufacturers and provides a detailed comparison report with quotes.',
      icon: Search,
    },
    {
      title: 'Sampling',
      desc: 'We coordinate sample production and consolidate them into one shipment to save you time and postage.',
      icon: Box,
    },
    {
      title: 'Factory Audit',
      desc: 'If samples are approved, we perform a final on-site audit to verify the manufacturers legal and production status.',
      icon: ShieldCheck,
    },
    {
      title: 'Order Placement',
      desc: 'Secure contracts are signed. We help you manage deposits and ensure the factory understands every detail.',
      icon: CreditCard,
    },
    {
      title: 'Production & QC',
      desc: 'We monitor production daily and perform a full pre-shipment inspection (PSI) before final payment.',
      icon: CheckCircle2,
    },
    {
      title: 'Shipping',
      desc: 'We coordinate all logistics, sea/air cargo, and provide all necessary customs and shipping documents.',
      icon: Truck,
    }
  ];

  return (
    <div ref={containerRef} className="bg-slate-50">
      {/* Hero Header */}
      <section className="bg-blue-600 py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Truck className="w-96 h-96 -right-20 -bottom-20 absolute rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h1 id="hiw-title" className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Our Sourcing Process
          </h1>
          <p id="hiw-subtitle" className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
            A structured, transparent pathway from your initial idea to products delivered at your doorstep.
          </p>
        </div>
      </section>

      {/* Horizontal Steps (Desktop) / Vertical (Mobile) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute left-12 right-12 top-10 h-0.5 bg-slate-200 z-0"></div>
            
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-7 lg:gap-4 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-white rounded-full border-4 border-slate-50 shadow-md flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 id={`step-title-${idx}`} className="text-lg font-bold text-slate-900 mb-2 px-2 leading-tight">
                    {idx + 1}. {step.title}
                  </h3>
                  <p id={`step-desc-${idx}`} className="text-sm text-slate-500 leading-relaxed px-2">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Workflow Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Real-Time Transparency at Every Stage
              </h2>
              <div className="space-y-6">
                {[
                  {
                    t: "Daily Updates",
                    d: "We act as your office in China. You receive regular updates via your preferred channel (Slack, WhatsApp, Email)."
                  },
                  {
                    t: "Comprehensive Reports",
                    d: "Inspection reports include 50+ photos, videos, and meticulous fault analysis based on your QC checklist."
                  },
                  {
                    t: "Secure Payments",
                    d: "We ensure factories only receive final payment after your quality standards have been fully verified."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{item.t}</h4>
                      <p className="text-slate-600">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 lg:mt-0 relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="workflow-img-inspections"
                data-strk-img="China sourcing agent team meeting factory management and inspecting goods"
                data-strk-img-ratio="16x9"
                data-strk-img-width="1000"
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="SSourcing China Process"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                q: "What is your main sourcing area in China?",
                a: "Our head office is in Shenzhen, giving us direct access to the manufacturing hubs of the Pearl River Delta (Guangzhou, Dongguan, Foshan). We also have partner inspectors in Ningbo and Yiwu for East China sourcing."
              },
              {
                q: "Do you charge upfront sourcing fees?",
                a: "For complex, niche research, we may charge a small commitment fee that is later credited toward your commission. For standard product inquiries, we often provide initial supplier quotes for free."
              },
              {
                q: "Can you help with Amazon FBA?",
                a: "Yes. We are experts in FBA requirements. We handle FNSKU labeling, carton markings, palletization, and shipping directly to Amazon warehouses worldwide."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                <h4 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
