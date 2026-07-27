import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, Shield, Truck, Search } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="[hero-title] [hero-subtitle] factory warehouse"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-5xl md:text-6xl font-extrabold text-navy-900 leading-tight mb-6 mt-12 md:mt-0">
              China Sourcing Agent <br/>
              <span className="text-blue-600">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl">
              From supplier verification to quality control and international shipping. We are your eyes and ears in China, ensuring your production stays on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-navy-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-navy-800 transition-all shadow-lg flex items-center justify-center gap-2">
                Get a Free Sourcing Quote <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="bg-white text-navy-900 border-2 border-navy-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-navy-50 transition-all flex items-center justify-center">
                Our Services
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8 grayscale opacity-60 overflow-hidden">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle className="text-green-500" /> Reliable Suppliers
              </div>
              <div className="flex items-center gap-2 font-semibold border-l pl-8 border-gray-300">
                <Shield className="text-blue-500" /> QC Inspections
              </div>
              <div className="flex items-center gap-2 font-semibold border-l pl-8 border-gray-300">
                <Truck className="text-amber-500" /> Door-to-Door Shipping
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - Problems We Solve */}
      <section className="py-24 bg-navy-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="problems-title" className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 leading-tight">
                Stop Worrying About <br/>Your China Supply Chain
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Finding the right supplier in China shouldn't be a gamble. We help you avoid common pitfalls like quality issues, production delays, and communication breakdowns.
              </p>
              <ul className="space-y-4">
                {[
                  "Eliminate communication barriers with local expertise",
                  "Verify factory legitimacy before sending payment",
                  "Ensure 100% quality compliance with on-site QC",
                  "Reduce costs through price negotiation and logistics"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                data-strk-img-id="qc-inspection-1"
                data-strk-img="[problems-title] quality control technician factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                className="rounded-2xl shadow-2xl relative z-10"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                alt="Quality Control Inspection"
              />
              <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-blue-600 rounded-2xl -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-preview-title" className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Comprehensive Sourcing Solutions</h2>
            <p className="text-lg text-gray-600">Everything you need to source from China with confidence.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Supplier Sourcing", 
                desc: "We identify and vet top-tier manufacturers that match your specific product requirements.",
                icon: <Search className="w-10 h-10 text-blue-600" />
              },
              { 
                title: "Quality Control", 
                desc: "Our inspectors visit the factory during production and before shipping to ensure quality standards.",
                icon: <Shield className="w-10 h-10 text-blue-600" />
              },
              { 
                title: "Logistics Management", 
                desc: "We coordinate shipping, handle customs, and ensure your goods arrive at your warehouse.",
                icon: <Truck className="w-10 h-10 text-blue-600" />
              }
            ].map((service, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <Link to="/services" className="text-blue-600 font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to start sourcing from China?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Get in touch with us today for a free consultation and sourcing quote.</p>
          <Link to="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-500 transition-all shadow-xl inline-flex items-center gap-2">
            Get My Free Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
