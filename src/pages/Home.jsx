import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Factory, Search, ShieldCheck, Ship, Star, ArrowRight, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="hero-factory-bg-01"
          data-strk-bg="factory assembly line workers manufacturing quality"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              China Sourcing Agent <br/> for <span className="text-blue-500">Global Buyers</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, 
              follow production, and coordinate shipping—acting as your dedicated team on the ground in China.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors flex items-center space-x-2"
              >
                <span>Get a Free Sourcing Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/how-it-works" 
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
              >
                How It Works
              </Link>
            </div>
            
            <div className="mt-12 flex items-center space-x-6 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                <span>Verified Suppliers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                <span>Direct Factory Prices</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                <span>Zero Hidden Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points / Featured Logos (Placeholder for trust) */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-center text-slate-500 font-medium mb-6 uppercase tracking-wider text-sm">Trusted by importing businesses worldwide</p>
          <div className="flex justify-center gap-12 opacity-50 grayscale flex-wrap">
            {/* Simple logo placeholders */}
            <div className="h-8 flex items-center font-bold text-xl">GlobalTrade Inc</div>
            <div className="h-8 flex items-center font-bold text-xl">EuroImports</div>
            <div className="h-8 flex items-center font-bold text-xl">Nexus Supply</div>
            <div className="h-8 flex items-center font-bold text-xl">AmeriBuy Tech</div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete Sourcing Solutions</h2>
            <p className="text-lg text-slate-600">
              From finding the right factory to delivering goods to your warehouse, we manage the entire supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Supplier Sourcing</h3>
              <p className="text-slate-600 mb-4">We find the best manufacturers based on your price and quality requirements, not just traders on Alibaba.</p>
              <Link to="/services" className="text-blue-600 font-medium hover:text-blue-800 flex items-center space-x-1">
                <span>Learn more</span> <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Factory className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Factory Audit</h3>
              <p className="text-slate-600 mb-4">We visit the factory to verify their true capability, production capacity, and social compliance.</p>
              <Link to="/services" className="text-blue-600 font-medium hover:text-blue-800 flex items-center space-x-1">
                <span>Learn more</span> <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Control</h3>
              <p className="text-slate-600 mb-4">Pre-shipment inspections and production monitoring to ensure your products meet your exact specifications.</p>
              <Link to="/services" className="text-blue-600 font-medium hover:text-blue-800 flex items-center space-x-1">
                <span>Learn more</span> <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Ship className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Logistics & Shipping</h3>
              <p className="text-slate-600 mb-4">Cost-effective sea, air, and train freight solutions to get your products safely to your door or Amazon FBA.</p>
              <Link to="/services" className="text-blue-600 font-medium hover:text-blue-800 flex items-center space-x-1">
                <span>Learn more</span> <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id="home-problems-image"
                data-strk-img="quality inspection factory worker checking products"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                alt="Quality inspection in factory"
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">We solve your biggest sourcing headaches in China</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Communication barriers</h4>
                    <p className="text-slate-600">Language differences and time zones lead to costly misunderstandings and delayed responses.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Quality inconsistency</h4>
                    <p className="text-slate-600">The sample looks great, but the bulk production arrives with defects, wrong materials, or bad packaging.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Hidden middlemen</h4>
                    <p className="text-slate-600">You think you're talking to a factory on Alibaba, but they are actually a trading company adding 20% to your price.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stop risking your capital on unverified suppliers.</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our local team handle the sourcing, verification, and QC so you can focus on growing your business.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center space-x-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg"
          >
            <span>Get your project evaluated for free</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
// Note: lucide-react X import was missing above. Let's fix that.