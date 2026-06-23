import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, CheckCircle2, ShieldCheck, Search, Truck, Zap } from 'lucide-react';
import { InquiryForm } from '@/components/InquiryForm.jsx';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      id: 'sourcing',
      title: 'Supplier Sourcing',
      description: 'We find and verify reputable factories matching your quality and price requirements.',
      icon: <Search className="w-8 h-8 text-blue-600" />
    },
    {
      id: 'audits',
      title: 'Factory Audits',
      description: 'On-site inspections to verify production capacity, working conditions, and certifications.',
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
    },
    {
      id: 'quality',
      title: 'Quality Control',
      description: 'Pre-shipment inspections to ensure every product meets your exact specifications.',
      icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />
    },
    {
      id: 'logistics',
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination from factory floor to your warehouse.',
      icon: <Truck className="w-8 h-8 text-blue-600" />
    }
  ];

  const processSteps = [
    { step: 1, title: 'Requirement Analysis', desc: 'Tell us exactly what you need' },
    { step: 2, title: 'Supplier Matching', desc: 'We shortlist verified factories' },
    { step: 3, title: 'Sample Approval', desc: 'Review samples before production' },
    { step: 4, title: 'Production & QC', desc: 'We monitor making and inspect goods' },
    { step: 5, title: 'Delivery', desc: 'Secure shipping to your final destination' }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-slate-900 text-white">
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="hero-bg-v1"
          data-strk-bg="busy industrial shipping port container terminal in China"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold font-sans tracking-tight mb-6 leading-tight">
              China Sourcing Agent <br/>for <span className="text-blue-400">Global Buyers</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping. Your trusted boots-on-the-ground partner in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  Get a Free Sourcing Quote
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 bg-white/10 hover:bg-white/20 border-white/20 text-white">
                  See How It Works
                </Button>
              </Link>
            </div>
            
            <div className="mt-10 flex items-center space-x-6 text-sm font-medium text-slate-300">
               <span className="flex items-center"><CheckCircle2 className="w-5 h-5 text-blue-400 mr-2"/> 10+ Years Experience</span>
               <span className="flex items-center"><CheckCircle2 className="w-5 h-5 text-blue-400 mr-2"/> 500+ Factories</span>
            </div>
          </div>

          {/* Quick Inquiry Card */}
          <div className="bg-white text-slate-900 rounded-xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">Start Your Sourcing Project</h3>
            <p className="text-slate-500 mb-6 font-medium">Tell us what you need, and we'll get back to you within 24 hours.</p>
            <InquiryForm simplified={true} buttonText="Get Started Now" />
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-slate-50 py-10 border-b border-slate-200">
         <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Trusted by businesses worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
               {/* Placeholders for logos */}
               <div className="h-8 flex items-center font-bold text-xl uppercase">TechCorp</div>
               <div className="h-8 flex items-center font-bold text-xl uppercase">GlobalRetail</div>
               <div className="h-8 flex items-center font-bold text-xl uppercase">MegaBrand</div>
               <div className="h-8 flex items-center font-bold text-xl uppercase">PrimeSupply</div>
               <div className="h-8 flex items-center font-bold text-xl uppercase">NexusGoods</div>
            </div>
         </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Our Services</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">End-to-End Sourcing Solutions</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We handle every step of the supply chain in China, protecting your investments and saving you time and money.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to={`/services#${service.id}`} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
                  Read more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Image Split Section */}
      <section className="py-24 bg-slate-900 text-white">
         <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <img 
                  data-strk-img-id="quality-inspection-v1"
                  data-strk-img="professional quality inspector checking electronic products in a modern chinese factory"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Quality Control Inspector"
                  className="rounded-xl shadow-2xl object-cover"
               />
            </div>
            <div>
               <h2 className="text-4xl font-bold mb-6">Why Choose SSourcing China?</h2>
               <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  Language barriers, cultural differences, and distance make sourcing from China difficult. We act as your dedicated office in China, communicating directly with factory bosses to negotiate the best terms and ensure quality standards are met.
               </p>
               <div className="grid grid-cols-2 gap-8">
                  <div>
                     <h4 className="text-4xl font-bold text-blue-400 mb-2">99%</h4>
                     <p className="text-slate-300 font-medium">Quality pass rate on shipped orders</p>
                  </div>
                  <div>
                     <h4 className="text-4xl font-bold text-blue-400 mb-2">$50M+</h4>
                     <p className="text-slate-300 font-medium">Sourced for clients annually</p>
                  </div>
                  <div>
                     <h4 className="text-4xl font-bold text-blue-400 mb-2">30%</h4>
                     <p className="text-slate-300 font-medium">Average cost savings</p>
                  </div>
                  <div>
                     <h4 className="text-4xl font-bold text-blue-400 mb-2">24/7</h4>
                     <p className="text-slate-300 font-medium">Support & dedicated account manager</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Streamlined Process</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">How Sourcing With Us Works</h3>
          </div>

          <div className="relative">
             {/* Desktop connecting line */}
             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                {processSteps.map((step) => (
                   <div key={step.step} className="bg-white rounded-xl p-6 shadow-md border border-slate-100 text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 border-4 border-white shadow">
                         {step.step}
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                      <p className="text-sm text-slate-600">{step.desc}</p>
                   </div>
                ))}
             </div>
          </div>
          <div className="mt-16 text-center">
             <Link to="/how-it-works">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">Read Detailed Process</Button>
             </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white text-center">
         <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">Ready to scale your business with reliable Chinese suppliers?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
               Lower your costs and improve quality with SSourcing China. Request a free assessment of your sourcing project today.
            </p>
            <Link to="/contact">
               <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-10 py-6 font-bold">
                  Start Your Project
               </Button>
            </Link>
         </div>
      </section>
    </div>
  );
}
