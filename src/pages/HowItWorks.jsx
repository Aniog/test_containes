import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ClipboardList, Search, Box, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (ImageHelper && ImageHelper.loadImages) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const steps = [
    {
      title: 'Submit Your Inquiry',
      desc: 'Fill out our inquiry form with your product specifications, target price, and estimated quantity. We review your request and assign a dedicated project manager.',
      icon: <ClipboardList className="w-8 h-8" />,
      imgId: 'step-inquiry-img'
    },
    {
      title: 'Supplier Sourcing & Selection',
      desc: 'Our sourcing team identifies 10-15 potential suppliers, filters them down to the top 3-5, and provides you with a comprehensive sourcing report within 3 days.',
      icon: <Search className="w-8 h-8" />,
      imgId: 'step-sourcing-img'
    },
    {
      title: 'Sampling & Verification',
      desc: 'We collect samples from different factories, verify them against your specs, and consolidate them into one package for you to save on international shipping costs.',
      icon: <Box className="w-8 h-8" />,
      imgId: 'step-sampling-img'
    },
    {
      title: 'Order Tracking & QC',
      desc: 'Once production starts, we monitor the progress and perform on-site quality inspections. We provide a detailed QC report with photos and videos for your approval.',
      icon: <ShieldCheck className="w-8 h-8" />,
      imgId: 'step-qc-img'
    },
    {
      title: 'Shipping & Delivery',
      desc: 'We coordinate with freight forwarders to book the space, handle the export customs in China, and ensure the goods are delivered safely to your warehouse.',
      icon: <Truck className="w-8 h-8" />,
      imgId: 'step-shipping-img'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Sourcing Process</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From initial concept to final delivery, we handle every detail of your China supply chain.
          </p>
        </div>
      </section>

      {/* Steps List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-500 text-slate-900 flex items-center justify-center text-xl font-bold">
                      {index + 1}
                    </div>
                    <div className="h-0.5 flex-grow bg-slate-100 lg:hidden" />
                  </div>
                  <h2 id={`step-title-${index}`} className="text-3xl font-bold text-slate-900 leading-tight">
                    {step.title}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                  <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600" />
                      <span>Professional Support</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600" />
                      <span>Transparent Pricing</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[step-title-${index}] China sourcing workflow`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="1000"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                      alt={step.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Flowchart Visual (Simple) */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Estimated Timeline</h2>
            <p className="text-slate-400">Average duration for each major phase</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="text-4xl font-bold text-yellow-500 mb-2">3-5 Days</div>
              <div className="text-lg font-bold mb-2">Sourcing Report</div>
              <p className="text-sm text-slate-400">Finding suppliers, quoting, and basic verification.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="text-4xl font-bold text-yellow-500 mb-2">10-30 Days</div>
              <div className="text-lg font-bold mb-2">Mass Production</div>
              <p className="text-sm text-slate-400">Manufacturing time depending on complexity and quantity.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="text-4xl font-bold text-yellow-500 mb-2">20-40 Days</div>
              <div className="text-lg font-bold mb-2">Sea Shipping</div>
              <p className="text-sm text-slate-400">Transit time from China port to your local warehouse.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-white italic text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="text-2xl md:text-3xl font-medium text-slate-700 leading-relaxed mb-8">
            "Our goal is to make sourcing from China as easy as buying from your local supplier across the street. We take the complexity out so you can focus on selling."
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-slate-200 mb-4 overflow-hidden">
              <img src="https://i.pravatar.cc/150?u=founder" alt="Founder" />
            </div>
            <div className="font-bold text-slate-900 text-lg">Chen Wei</div>
            <div className="text-slate-500">Founder & CEO, SSourcing China</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;

