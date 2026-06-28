import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Search, ClipboardCheck, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      title: "Product Sourcing",
      desc: "We find the best-matched manufacturers across China's industrial clusters.",
      icon: Search
    },
    {
      title: "Supplier Verification",
      desc: "Full factory audits to ensure legality, capacity, and ethical standards.",
      icon: ShieldCheck
    },
    {
      title: "Quality Inspection",
      desc: "On-site QC before shipment to ensure every unit meets your specs.",
      icon: ClipboardCheck
    },
    {
      title: "Shipping & Logistics",
      desc: "FCL, LCL, Air, or Courier coordination with full customs handling.",
      icon: Truck
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-primary text-white">
        <div 
          className="absolute inset-0 opacity-30 object-cover"
          data-strk-bg-id="hero-bg-982312"
          data-strk-bg="[hero-title] [hero-subtitle] China factory industrial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Professional China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Find reliable suppliers, verify factories, and ensure product quality before your goods leave China. We are your eyes and ears on the ground.
            </p>
            <div className="flex flex-col sm:row gap-4">
              <Link 
                to="/contact" 
                className="bg-secondary text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-secondary/90 transition shadow-lg inline-flex items-center justify-center"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-lg font-bold text-center hover:bg-white/20 transition"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale">
            <span className="font-bold text-xl text-primary">MANUFACTURING+</span>
            <span className="font-bold text-xl text-primary">GLOBAL LOGISTICS</span>
            <span className="font-bold text-xl text-primary">ISO CERTIFIED</span>
            <span className="font-bold text-xl text-primary">CHINA TRADE FED</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 id="services-title" className="text-3xl md:text-4xl font-bold mb-4 text-primary">End-to-End Sourcing Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto italic">Everything you need to source from China safely and efficiently.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl border hover:border-secondary transition-all group hover:shadow-xl">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 pt-1 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us / Trust Points */}
      <section className="py-20 lg:py-28 bg-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <img 
               data-strk-img-id="why-us-img-1"
               data-strk-img="[trust-title] China quality inspection team factory"
               data-strk-img-ratio="4x3"
               data-strk-img-width="800"
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
               alt="Quality Inspection"
               className="rounded-2xl shadow-2xl relative z-10"
             />
             <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-8 rounded-2xl shadow-xl z-20 hidden md:block">
               <div className="text-3xl font-extrabold mb-1">10+ Years</div>
               <div className="text-sm opacity-80 uppercase tracking-widest">Local Experience</div>
             </div>
          </div>
          <div>
            <h2 id="trust-title" className="text-3xl md:text-4xl font-bold mb-8 text-primary">Why International Brands Choose Us</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 p-1 rounded-full mr-4 mt-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Total Transparency</h4>
                  <p className="text-gray-600 text-sm">No hidden markups. You pay factory direct prices. We only charge a clear service fee.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 p-1 rounded-full mr-4 mt-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Strict Quality Protocols</h4>
                  <p className="text-gray-600 text-sm">We follow international AQL standards for all inspections. Zero tolerance for defects.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 p-1 rounded-full mr-4 mt-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Expert Negotiation</h4>
                  <p className="text-gray-600 text-sm">Fluent in local business culture. We get you the best terms and MOQs.</p>
                </div>
              </div>
            </div>
            <Link to="/contact" className="mt-10 inline-flex items-center font-bold text-secondary hover:underline">
              Start Your Project Today <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products We Source */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Production Expertise</h2>
            <p className="text-gray-600 italic">Specializing in high-growth consumer and industrial sectors.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Electronics", img: "Electronics factory production line" },
            { name: "Machinery", img: "Industrial machinery equipment" },
            { name: "Auto Parts", img: "Automotive components warehouse" },
            { name: "Furniture", img: "Modern designer furniture showroom" }
          ].map((cat, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl h-64 shadow-lg">
              <div 
                data-strk-bg-id={`cat-bg-${i}`}
                data-strk-bg={cat.img}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="400"
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <h4 className="text-white font-bold text-lg">{cat.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary text-white text-center rounded-none sm:rounded-3xl mx-0 sm:mx-8 mb-20 shadow-2xl overflow-hidden relative">
        <div 
          className="absolute inset-0 opacity-10"
          data-strk-bg-id="cta-bg-001"
          data-strk-bg="China port shipping containers"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1200"
        />
        <div className="relative z-10 px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to streamline your China sourcing?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-light italic">Let us handle the complexity while you focus on growing your brand.</p>
          <Link 
            to="/contact" 
            className="bg-white text-secondary px-10 py-4 rounded-xl font-extrabold text-lg hover:bg-gray-100 transition shadow-xl inline-block"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
