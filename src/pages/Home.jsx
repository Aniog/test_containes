import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle2, ShieldCheck, Truck, Factory, Search, ChevronRight, Star } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (ImageHelper && ImageHelper.loadImages) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const services = [
    {
      title: 'Supplier Sourcing',
      desc: 'Find the best manufacturers in China. Local presence allows us to negotiate better prices and terms.',
      icon: <Search className="w-10 h-10 text-yellow-500" />,
      imgId: 'service-sourcing-8f2a'
    },
    {
      title: 'Factory Audits',
      desc: 'Verify if a supplier is a real factory. We check business licenses, production capacity, and social compliance.',
      icon: <Factory className="w-10 h-10 text-yellow-500" />,
      imgId: 'service-audit-9g3b'
    },
    {
      title: 'Quality Control',
      desc: 'Comprehensive inspections during production and before shipping to ensure products meet your standards.',
      icon: <ShieldCheck className="w-10 h-10 text-yellow-500" />,
      imgId: 'service-qc-1h4c'
    },
    {
      title: 'Logistics Support',
      desc: 'Consolidate orders and coordinate air or sea freight. We handle the paperwork for a smooth transit.',
      icon: <Truck className="w-10 h-10 text-yellow-500" />,
      imgId: 'service-logistics-2j5d'
    }
  ];

  const steps = [
    { title: 'Inquiry', desc: 'Tell us what you need and your target price.' },
    { title: 'Searching', desc: 'We source multiple suppliers and provide quotes.' },
    { title: 'Sampling', desc: 'Consolidate and verify samples from factories.' },
    { title: 'Production', desc: 'Monitor production and perform QC inspections.' },
    { title: 'Shipping', desc: 'Coordinate safe shipping to your destination.' }
  ];

  const categories = [
    { name: 'Electronics & Gadgets', id: 'cat-elec' },
    { name: 'Home & Kitchen', id: 'cat-home' },
    { name: 'Textiles & Apparel', id: 'cat-text' },
    { name: 'Toys & Gifts', id: 'cat-toys' },
    { name: 'Industrial Parts', id: 'cat-ind' },
    { name: 'Packaging Materials', id: 'cat-pack' }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
        <div 
          className="absolute inset-0 z-0 opacity-40"
          data-strk-bg-id="hero-bg-2024"
          data-strk-bg="[hero-title] [hero-desc] China factory production line"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-2/3">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              China Sourcing Agent for <span className="text-yellow-500">Global Buyers</span>
            </h1>
            <p id="hero-desc" className="text-xl text-slate-300 mb-10 max-w-2xl">
              SSourcing China helps you find reliable suppliers, verify factories, inspect quality, and manage shipping directly from China manufacturers to your warehouse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-600 transition-all text-center">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/services" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-md font-bold text-lg hover:bg-white/20 transition-all text-center backdrop-blur-sm">
                Our Services
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] text-white overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-sm">
                Trusted by <span className="text-white font-semibold">500+</span> businesses worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-yellow-500 w-6 h-6 shrink-0" />
              <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-yellow-500 w-6 h-6 shrink-0" />
              <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Local Experts</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-yellow-500 w-6 h-6 shrink-0" />
              <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Physical Audits</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-yellow-500 w-6 h-6 shrink-0" />
              <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Door-to-Door</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive China Sourcing Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We act as your local eyes and ears in China, ensuring your supply chain remains transparent and efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group border border-slate-200 rounded-2xl p-8 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 id={`service-title-${index}`} className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p id={`service-desc-${index}`} className="text-slate-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <div className="overflow-hidden rounded-lg mb-6 aspect-[3/2]">
                  <img
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[service-title-${index}] [service-desc-${index}] China sourcing service`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <Link to="/services" className="text-slate-900 font-bold flex items-center gap-2 group-hover:text-yellow-600">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What Products We Source
              </h2>
              <p className="text-lg text-slate-600">
                With a vast network of verified factories, we can source almost any product category for your business.
              </p>
            </div>
            <Link to="/products" className="text-slate-900 font-bold border-b-2 border-yellow-500 pb-1 hover:text-yellow-600 hover:border-yellow-600 transition-colors">
              View All Categories
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat, index) => (
              <Link key={index} to="/products" className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-all group">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-slate-100">
                  <img
                    data-strk-img-id={`cat-img-${index}`}
                    data-strk-img={`${cat.name} product`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                  />
                </div>
                <span className="text-sm font-bold text-slate-900 block">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Sourcing Process</h2>
            <p className="text-lg text-slate-600">A clear, documented path from your idea to your doorstep.</p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-slate-900 text-yellow-500 flex items-center justify-center text-2xl font-bold mb-6 ring-8 ring-white shadow-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-slate-900 relative">
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          data-strk-bg-id="cta-bg-2024"
          data-strk-bg="Global logistics shipping containers"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto">
            Get a obligation-free consultation and quote for your sourcing needs. Our team is ready to help you thrive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-yellow-500 text-slate-900 px-10 py-5 rounded-md font-bold text-xl hover:bg-yellow-600 transition-all">
              Get Started Now
            </Link>
            <Link to="/how-it-works" className="bg-transparent text-white border-2 border-white/30 px-10 py-5 rounded-md font-bold text-xl hover:bg-white/10 transition-all">
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
