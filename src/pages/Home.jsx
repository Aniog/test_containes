import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Factory, Search, CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-900 text-white">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          data-strk-bg-id="hero-bg-4321"
          data-strk-bg="[hero-title] [hero-subtitle] logistics factory"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Find reliable suppliers, verify factories, and ensure product quality with a professional sourcing partner in China. We handle everything from sourcing to shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg text-center">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-md font-bold text-lg transition-all text-center">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 border-b border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mb-4">Trusted by buyers across 30+ countries</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Logos would go here */}
            <span className="text-2xl font-bold">EUROPE</span>
            <span className="text-2xl font-bold">USA</span>
            <span className="text-2xl font-bold">AUSTRALIA</span>
            <span className="text-2xl font-bold">CANADA</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Sourcing Solutions</h2>
            <p className="text-slate-600">We provide end-to-end services to minimize your risks and maximize your profit margins when importing from China.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Supplier Sourcing", 
                desc: "Identify & vet top manufacturers matching your specific product requirements.",
                icon: Search,
                id: "service-1"
              },
              { 
                title: "Factory Verification", 
                desc: "On-site audits to verify legitimacy, capacity, and ethical standards.",
                icon: ShieldCheck,
                id: "service-2"
              },
              { 
                title: "Quality Control", 
                desc: "Rigorous inspections during production and before shipping to ensure quality.",
                icon: Factory,
                id: "service-3"
              },
              { 
                title: "Logistics Support", 
                desc: "Consolidation, customs clearance, and cost-effective shipping coordination.",
                icon: Truck,
                id: "service-4"
              }
            ].map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 id={`${service.id}-title`} className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:underline">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Sourcing Process</h2>
              <p className="text-slate-600 mb-10">We follow a proven structured approach to ensure your project is completed on time and meets all specifications.</p>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Inquiry & Analysis", desc: "Understanding your requirements and product specifications." },
                  { step: "02", title: "Supplier Matching", desc: "Comparison of 5-10 suppliers to find the best value and quality." },
                  { step: "03", title: "Sample Development", desc: "Managing samples and revisions until you are 100% satisfied." },
                  { step: "04", title: "Production & QC", desc: "Strict monitoring of production with professional on-site inspections." }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="text-3xl font-bold text-blue-100 flex-shrink-0">{item.step}</span>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
               <img 
                data-strk-img-id="process-img-1"
                data-strk-img="[process-title] sourcing agent office china"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                className="rounded-2xl shadow-2xl border-8 border-slate-50"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Our Process"
              />
              <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-xl shadow-xl hidden md:block max-w-xs">
                <p className="text-2xl font-bold mb-2">10+ Years</p>
                <p className="text-sm opacity-90">Experience in supply chain management across Mainland China.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
               <img 
                data-strk-img-id="problems-img-1"
                data-strk-img="factory problems quality control inspection"
                data-strk-img-ratio="3x2"
                data-strk-img-width="800"
                className="rounded-2xl shadow-xl grayscale"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Supply Chain Risks"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-8">Stop Worrying About Imports</h2>
              <p className="text-slate-400 mb-10 leading-relaxed">Importing from China shouldn't be a gamble. We eliminate the common headaches overseas buyers face.</p>
              
              <ul className="space-y-6">
                {[
                  "Eliminate language and cultural barriers with local experts.",
                  "Avoid factory scammers and middleman markups.",
                  "No more quality surprises upon container arrival.",
                  "Real-time production updates without time-zone delays.",
                  "Reduced shipping costs through container consolidation."
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Scale Your Sourcing?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">Get in touch today for a free initial consultation and a custom sourcing quote for your products.</p>
          <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-md font-bold text-xl inline-block transition-transform hover:scale-105 shadow-xl">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
