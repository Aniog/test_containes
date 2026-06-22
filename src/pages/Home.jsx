import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Search, CheckCircle, PackageOpen, Ship, PenTool as Tool, Factory, Globe2, ChevronRight, MessageSquare, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // initialize images after mounting
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="flex flex-col" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" />
          <div 
             className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
             data-strk-bg-id="hero-bg-48d9a"
             data-strk-bg="[hero-title] container ship port global trade"
             data-strk-bg-ratio="16x9"
             data-strk-bg-width="2000"
          ></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Find reliable suppliers, verify factories, inspect quality, and optimize your supply chain. We are your trusted partner on the ground in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center rounded-md bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex justify-center items-center rounded-md bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 hover:text-white backdrop-blur-sm transition-all border border-white/20"
              >
                See How It Works
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span>Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span>100% Quality Checked</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points / Logos */}
      <section className="py-10 border-b border-slate-200 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 mb-6">
            Trusted by businesses across the globe
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
             {/* Placeholder placeholders for client logos */}
             <div className="flex items-center gap-2 text-xl font-bold font-serif"><Globe2/> Amazon Sellers</div>
             <div className="flex items-center gap-2 text-xl font-bold font-serif"><PackageOpen/> B2B Wholesalers</div>
             <div className="flex items-center gap-2 text-xl font-bold font-serif"><Factory/> Retail Brands</div>
             <div className="flex items-center gap-2 text-xl font-bold font-serif"><Ship/> Importers</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Comprehensive China Sourcing Services
            </h2>
            <p className="text-lg text-slate-600">
              We manage the entire sourcing process from end to end, so you can focus on growing your business while we handle the supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Supplier Search</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                We identify and evaluate multiple qualified manufacturers to get you the best prices and capabilities for your products.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Factory Audit</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                We visit factories in person to verify their legitimacy, production capacity, certifications, and working conditions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Quality Control</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Pre-shipment inspections (PSI) and during-production checks to ensure products meet your exact specifications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <Ship className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Shipping & Logistics</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                We manage consolidation, customs clearance, and negotiate the best freight rates for sea, air, or rail transport.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
              View all our services <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                Overcome the challenges of importing from China
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Buying directly from overseas factories can be risky and time-consuming. We act as your eyes and ears on the ground to mitigate these risks.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-bold text-sm">X</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Language & Cultural Barriers</h4>
                    <p className="text-slate-600">Miscommunications leading to wrong product specs or delayed production. We speak native Chinese and fluent English.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-bold text-sm">X</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Poor Quality Control</h4>
                    <p className="text-slate-600">Receiving a container full of defective items you can't return. We inspect goods before you pay the final balance.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-bold text-sm">X</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Scams & Fake Factories</h4>
                    <p className="text-slate-600">Trading companies pretending to be manufacturers. We verify factory licenses and physical locations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                 <div className="aspect-w-4 aspect-h-3 bg-slate-200">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      data-strk-img-id="inspection-img-838dc"
                      data-strk-img="factory inspection quality control"
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      alt="Factory Inspection" 
                      className="object-cover w-full h-full" 
                    />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Ready to streamline your China sourcing?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Tell us about your product requirements, and our sourcing experts will get back to you within 24 hours with a customized plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center rounded-md bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-sm hover:bg-slate-50 transition-colors"
          >
            Start Your Sourcing Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;