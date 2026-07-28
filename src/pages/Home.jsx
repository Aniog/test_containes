import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Search, Box, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="flex flex-col w-full" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-blue-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-9j2k3l"
          data-strk-bg="[hero-subtitle] [hero-title] China massive modern factory production line"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-900/70" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China with zero hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 text-lg px-8 py-6 h-auto font-semibold">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
                <Link to="/how-it-works">How We Work</Link>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-blue-200 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                <span>Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                <span>Strict QC</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                <span>On-Time Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Problems Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="problems-title" className="text-3xl font-bold text-slate-900 mb-4">Sourcing from China shouldn't be a gamble.</h2>
            <p id="problems-desc" className="text-lg text-slate-600">We solve the common headaches international buyers face when importing from Chinese manufacturers.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Avoid Scams & Bad Factories</h3>
              <p className="text-slate-600">We physically verify factories in China to ensure they are real manufacturers, not just trading companies or scammers.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
             <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-4">
                <Box className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Prevent Quality Issues</h3>
              <p className="text-slate-600">Our native QC inspectors check your products before they leave the factory, ensuring you get exactly what you paid for.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center mb-4">
                <Plane className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Streamline Logistics</h3>
              <p className="text-slate-600">We consolidate shipments and handle complex customs documentation so your goods arrive safely and on time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">End-to-End Sourcing Services</h2>
            <p id="services-desc" className="text-lg text-slate-600">A complete solution from finding the right factory to delivering goods to your door.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 id="srv-1-title" className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-lg">1</span>
                Supplier Search & Verification
              </h3>
              <p id="srv-1-desc" className="text-lg text-slate-600 mb-6 leading-relaxed">
                We leverage our local network to find genuine manufacturers that meet your specific requirements. We conduct background checks, verify business licenses, and perform on-site factory audits to ensure reliability and capacity.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" /> Price negotiation & sample arrangement</li>
                <li className="flex items-start gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" /> Factory capacity & social compliance audits</li>
                <li className="flex items-start gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" /> Direct communication with management</li>
              </ul>
              <Button asChild variant="outline" className="text-sky-700 border-sky-200 hover:bg-sky-50">
                <Link to="/services">Learn more <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-slate-200">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Factory Inspection"
                  className="w-full h-full object-cover"
                  data-strk-img-id="srv-img-1-a8b3c"
                  data-strk-img="[srv-1-desc] [srv-1-title] business people inspecting manufacturing plant"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-slate-200">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Quality Control"
                  className="w-full h-full object-cover"
                  data-strk-img-id="srv-img-2-d4e5f"
                  data-strk-img="[srv-2-desc] [srv-2-title] professional quality control worker checking products"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                />
              </div>
            </div>
            <div>
              <h3 id="srv-2-title" className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-lg">2</span>
                Production Follow-up & QC
              </h3>
              <p id="srv-2-desc" className="text-lg text-slate-600 mb-6 leading-relaxed">
                Don't wait until products arrive to find out they're defective. Our inspectors monitor production progress and conduct strict pre-shipment inspections based on AQL standards to guarantee quality.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" /> First article & during-production inspection</li>
                <li className="flex items-start gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" /> Pre-shipment inspection (PSI)</li>
                <li className="flex items-start gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" /> Detailed photo & video reporting</li>
              </ul>
               <Button asChild variant="outline" className="text-sky-700 border-sky-200 hover:bg-sky-50">
                <Link to="/services">Learn more <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
          
           <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 id="srv-3-title" className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-lg">3</span>
                Shipping & Fulfillment
              </h3>
              <p id="srv-3-desc" className="text-lg text-slate-600 mb-6 leading-relaxed">
                We handle the complex logistics of getting your goods out of China. Whether you need consolidation, sea freight, air freight, or Amazon FBA prep, we provide cost-effective and reliable shipping solutions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" /> Warehouse consolidation in China</li>
                <li className="flex items-start gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" /> Competitive sea and air freight rates</li>
                <li className="flex items-start gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" /> Export documents & customs clearance</li>
              </ul>
               <Button asChild variant="outline" className="text-sky-700 border-sky-200 hover:bg-sky-50">
                <Link to="/services">Learn more <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-slate-200">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Shipping Logistics"
                  className="w-full h-full object-cover"
                  data-strk-img-id="srv-img-3-x7y8z"
                  data-strk-img="[srv-3-desc] [srv-3-title] shipping containers at busy port logistics"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to scale your business with reliable Chinese suppliers?</h2>
          <p className="text-xl text-blue-100 mb-10">Get a free consultation and sourcing quote from our English-speaking experts typically within 24 hours.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 text-lg px-8 py-6 h-auto font-semibold">
                <Link to="/contact">Get a Free Quote Now</Link>
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
}