import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Search, ShieldCheck, Ship, Box, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Just a mock config for now since we don't have real one
    return ImageHelper.loadImages({}, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pb-20 pt-32 lg:pb-32 lg:pt-48 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Find reliable suppliers, verify factories, inspect quality, and coordinate shipping with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/how-it-works" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center">
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="problems-title" className="text-3xl md:text-4xl font-bold mb-4">Sourcing from China Doesn't Have to Be Hard</h2>
            <p id="problems-subtitle" className="text-lg text-slate-600">We solve the common challenges international buyers face when dealing with overseas factories.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Scams & Fake Factories</h3>
              <p className="text-slate-600 mb-4">Many "manufacturers" online are actually trading companies or scammers.</p>
              <p className="font-semibold text-primary">We conduct on-site factory audits to verify legitimacy.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                <Box className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Poor Quality Control</h3>
              <p className="text-slate-600 mb-4">Receiving a container of defective goods can ruin your business.</p>
              <p className="font-semibold text-primary">We perform strict pre-shipment inspections to guarantee quality.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Ship className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Logistics Headaches</h3>
              <p className="text-slate-600 mb-4">Hidden fees, delays, and complex customs clearance procedures.</p>
              <p className="font-semibold text-primary">We handle all shipping logistics door-to-door transparently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 id="services-main-title" className="text-3xl md:text-4xl font-bold mb-6">End-to-End Sourcing Services</h2>
              <p className="text-lg text-slate-600 mb-8">
                From finding the right supplier to delivering goods to your warehouse, we provide a complete solution for global buyers.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Supplier Filtering & Negotiation</h4>
                    <p className="text-slate-600">We find the best factories and negotiate the best prices on your behalf.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Factory Audits</h4>
                    <p className="text-slate-600">On-site checks to ensure the factory has the capability and certifications required.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Quality Inspections</h4>
                    <p className="text-slate-600">AQL standard inspections during and after production to catch defects early.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Shipping & Logistics</h4>
                    <p className="text-slate-600">FCL, LCL, air freight, and express shipping with competitive rates.</p>
                  </div>
                </li>
              </ul>
              
              <Link to="/services" className="text-primary font-bold hover:underline flex items-center">
                Explore all our services <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                data-strk-img-id="home-services-img"
                data-strk-img="[services-main-title] factory quality control inspection"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality Inspection in China Factory"
                className="rounded-xl shadow-lg w-full aspect-4/3 object-cover bg-slate-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points / Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">10+</div>
              <div className="text-primary-foreground/80 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">500+</div>
              <div className="text-primary-foreground/80 font-medium">Factories Verified</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">200+</div>
              <div className="text-primary-foreground/80 font-medium">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">$50M+</div>
              <div className="text-primary-foreground/80 font-medium">Sourced Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your China Sourcing?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Stop worrying about bad quality and delayed shipments. Let our professional team handle the hard work for you.
          </p>
          <Link to="/contact" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md font-bold text-lg transition-colors inline-flex items-center">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;