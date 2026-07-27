import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Your Trusted Sourcing Partner in China</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg text-slate-600 max-w-xl leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping. Minimize risks and maximize profits in your China supply chain.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="bg-accent text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl text-center"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/services"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-50 transition-all text-center"
              >
                Our Services
              </Link>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/40?img=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Trusted by <span className="text-primary font-bold">500+</span> businesses worldwide
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                data-strk-img-id="hero-image-home"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                alt="China Sourcing Agent"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block border border-slate-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 leading-none">100% Guaranteed</p>
                  <p className="text-xs text-slate-500 mt-1">Supplier Verification</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent/5 rounded-full -z-0"></div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-2">
              <span className="text-3xl font-bold text-primary">10+</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Years Experience</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <span className="text-3xl font-bold text-primary">2000+</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Sourced Managed</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <span className="text-3xl font-bold text-primary">500+</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Reliable Suppliers</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <span className="text-3xl font-bold text-primary">24/7</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Summary */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Comprehensive Sourcing Solutions
            </h2>
            <p id="services-desc" className="text-lg text-slate-600">
              We cover every step of your supply chain in China, from initial product research to final delivery at your warehouse.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="text-primary" />,
                title: "Product Sourcing",
                desc: "Finding the best manufacturers that meet your specific quality and price requirements."
              },
              {
                icon: <ShieldCheck className="text-primary" />,
                title: "Supplier Verification",
                desc: "Thorough background checks, on-site factory audits, and business license verification."
              },
              {
                icon: <ClipboardCheck className="text-primary" />,
                title: "Quality Control",
                desc: "Pre-shipment inspections, during-production checks, and lab testing coordination."
              },
              {
                icon: <Truck className="text-primary" />,
                title: "Shipping Logistics",
                desc: "Managing sea, air, and train freight with all necessary customs documentation."
              }
            ].map((service, index) => (
              <div key={index} className="p-8 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-primary font-bold text-sm inline-flex items-center group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
