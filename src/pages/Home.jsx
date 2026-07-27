import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Truck, Factory, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-slate-900/60"
          data-strk-bg-id="hero-bg-928341"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-in fade-in slide-in-from-left duration-700">
              China Sourcing Agent <br />
              <span className="text-amber-500">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl animate-in fade-in slide-in-from-left duration-700 delay-100">
              Eliminate supply chain risks. We help you find reliable suppliers, verify factories, inspect quality, and coordinate shipping directly from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left duration-700 delay-200">
              <Link to="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-md transition-all text-center shadow-lg transform hover:-translate-y-1">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-bold py-4 px-8 rounded-md transition-all text-center">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges / Stats */}
      <section className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p id="stat-1-val" className="text-3xl font-bold text-slate-900">$500M+</p>
              <p id="stat-1-label" className="text-slate-500 text-sm">Goods Sourced Yearly</p>
            </div>
            <div>
              <p id="stat-2-val" className="text-3xl font-bold text-slate-900">1,200+</p>
              <p id="stat-2-label" className="text-slate-500 text-sm">Active Suppliers</p>
            </div>
            <div>
              <p id="stat-3-val" className="text-3xl font-bold text-slate-900">100%</p>
              <p id="stat-3-label" className="text-slate-500 text-sm">Factory Verified</p>
            </div>
            <div>
              <p id="stat-4-val" className="text-3xl font-bold text-slate-900">15+</p>
              <p id="stat-4-label" className="text-slate-500 text-sm">Years Expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete Sourcing Solution</h2>
          <p id="services-subtitle" className="text-slate-600 max-w-2xl mx-auto">From product development to door-to-door delivery, we handle every step of your China supply chain.</p>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Product Sourcing",
              desc: "Deep search in mainland China to find original manufacturers and the best pricing.",
              icon: <Search className="w-10 h-10 text-amber-500" />,
              imgId: "srv-sourcing-8fd3"
            },
            {
              title: "Factory Verification",
              desc: "On-site audits to verify production capabilities, licenses, and social compliance.",
              icon: <Factory className="w-10 h-10 text-amber-500" />,
              imgId: "srv-verify-4ca1"
            },
            {
              title: "Quality Control",
              desc: "Rigorous pre-shipment inspections following AQL standards to ensure 0% defect rate.",
              icon: <ShieldCheck className="w-10 h-10 text-amber-500" />,
              imgId: "srv-qc-28b9"
            },
            {
              title: "Logistics & Shipping",
              desc: "Consolidation, customs clearance, and door-to-door shipping worldwide.",
              icon: <Truck className="w-10 h-10 text-amber-500" />,
              imgId: "srv-logistics-19e0"
            }
          ].map((srv, idx) => (
            <div key={idx} className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img 
                  data-strk-img-id={srv.imgId}
                  data-strk-img={`[service-card-title-${idx}] [service-card-desc-${idx}] [services-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={srv.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex-grow">
                <div className="mb-4">{srv.icon}</div>
                <h3 id={`service-card-title-${idx}`} className="text-xl font-bold text-slate-900 mb-3">{srv.title}</h3>
                <p id={`service-card-desc-${idx}`} className="text-slate-600 text-sm leading-relaxed">{srv.desc}</p>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link to="/services" className="text-amber-600 font-semibold flex items-center hover:text-amber-700">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-center mb-16">Simple 4-Step Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Submit Request", desc: "Tell us your product specs and requirements." },
              { num: "02", title: "Sourcing & Quote", desc: "We find suppliers and provide a broken-down cost analysis." },
              { num: "03", title: "Quality Check", desc: "On-site inspection after production is complete." },
              { num: "04", title: "Shipping", desc: "Cargo is loaded and shipped to your destination." }
            ].map((step, idx) => (
              <div key={idx} className="relative p-6 border border-slate-700 rounded-lg">
                <span className="text-5xl font-black text-slate-800 absolute -top-4 -left-4 z-0 opacity-50">{step.num}</span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-amber-500">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points / Why Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              data-strk-img-id="why-us-img-1"
              data-strk-img="[why-us-title] [trust-point-1] [trust-point-2]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Professional Sourcing Team"
              className="rounded-2xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500 rounded-2xl z-0" />
          </div>
          <div>
            <h2 id="why-us-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Professional Boots on the Ground</h2>
            <div className="space-y-6">
              {[
                { title: "No Hidden Commissions", desc: "Transparent flat-fee or percentage based on project size. You pay the factory directly.", id: "trust-point-1" },
                { title: "Local Presence", desc: "Offices in Shenzhen and Ningbo, placing us at the heart of China's manufacturing hubs.", id: "trust-point-2" },
                { title: "Western Standards", desc: "Communication in native-level English with professional reporting and accountability.", id: "trust-point-3" }
              ].map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 className="text-amber-500 w-6 h-6 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 id={point.id} className="text-xl font-bold text-slate-900 mb-1">{point.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/contact" className="inline-flex items-center text-amber-600 font-bold text-lg hover:text-amber-700">
                Learn how we protect your business <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-500">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-title" className="text-3xl md:text-5xl font-extrabold text-white mb-8">Ready to Start Your Next Project?</h2>
          <p id="cta-subtitle" className="text-amber-50 text-xl font-medium mb-12 max-w-2xl mx-auto">Get connected with 3+ reliable suppliers within 48 hours. No upfront sourcing fees for initial research.</p>
          <Link to="/contact" className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-5 px-12 rounded-full text-lg shadow-2xl transition-all transform hover:scale-105 inline-block">
            Get Your Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
