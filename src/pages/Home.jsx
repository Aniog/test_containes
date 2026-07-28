import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ShieldCheck, ClipboardCheck, Truck, CheckCircle2, ChevronRight, MessageSquare } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'sourcing',
    icon: Search,
    titleId: 'service-sourcing-title',
    descId: 'service-sourcing-desc',
    title: 'Product Sourcing',
    desc: 'We find the best manufacturers in China that meet your specific requirements, quality standards, and budget constraints.'
  },
  {
    id: 'verification',
    icon: ShieldCheck,
    titleId: 'service-verification-title',
    descId: 'service-verification-desc',
    title: 'Supplier Verification',
    desc: 'Comprehensive background checks and factory audits to ensure you are dealing with legitimate, capable manufacturers.'
  },
  {
    id: 'quality',
    icon: ClipboardCheck,
    titleId: 'service-quality-title',
    descId: 'service-quality-desc',
    title: 'Quality Control',
    desc: 'Rigorous pre-shipment inspections and middle-of-production checks to guarantee product quality matches your expectations.'
  },
  {
    id: 'shipping',
    icon: Truck,
    titleId: 'service-shipping-title',
    descId: 'service-shipping-desc',
    title: 'Shipping & Logistics',
    desc: 'End-to-end logistics coordination from the factory floor to your warehouse, handling freight, customs, and documentation.'
  }
];

const processes = [
  { step: '01', title: 'Requirement Analysis', desc: 'Tell us what you need. We analyze your product specifications, target price, and volume.' },
  { step: '02', title: 'Supplier Matching', desc: 'We leverage our network to short-list 3-5 verified factories capable of fulfilling your order.' },
  { step: '03', title: 'Sample & Production', desc: 'We manage sample creation for your approval, then oversee the mass production process.' },
  { step: '04', title: 'Inspection & Delivery', desc: 'Our team conducts strict QC before coordinating reliable and cost-effective shipping.' }
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-36 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-slate-900"
          data-strk-bg-id="hero-bg-1a2b3c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold tracking-wider uppercase mb-6 border border-blue-500/30">
            Your Trusted Partner in China
          </span>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Reliable supplier verification, strict quality control, and seamless shipping coordination. We handle the complexities so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/25">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/how-it-works" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-300 bg-white/10 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm border border-slate-700">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-slate-500 font-medium text-sm md:text-base text-center">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span>500+ Verified Factories</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span>Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span>On-the-ground Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Sourcing Solutions</h2>
            <p id="services-desc" className="text-lg text-slate-600">From initial product search to final delivery, our comprehensive services cover every step of the China sourcing process.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 id={service.titleId} className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p id={service.descId} className="text-slate-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">A Streamlined Process Designed for Success</h2>
              <p id="process-desc" className="text-lg text-slate-600">We take the risk and hassle out of importing. Our systematic approach ensures quality control and timely delivery at every stage.</p>
            </div>
            <div className="hidden md:block">
              <Link to="/how-it-works" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                View Detailed Process
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-100 z-0" />
            
            {processes.map((process, index) => (
              <div key={index} className="relative z-10 pt-4 md:pt-0">
                <div className="md:mb-6 flex items-center gap-4 md:block">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-0 md:mx-0 shrink-0 shadow-md">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 md:mt-4 md:mb-0 block md:hidden">{process.title}</h3>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 hidden md:block">{process.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 40%)'}}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Stop worrying about factory scams, poor quality, and delayed shipments. Partner with a reliable sourcing team on the ground in China.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-white rounded-lg hover:bg-slate-50 transition-colors shadow-lg">
              Get a Free Sourcing Quote
            </Link>
            <div className="text-blue-200 mt-4 sm:mt-0 sm:ml-4 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              <span>Replies within 24 hours</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
