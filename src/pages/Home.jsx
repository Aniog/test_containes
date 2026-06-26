import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Search, CheckCircle, Truck, ArrowRight, Star, Users, MessageSquare } from 'lucide-react';
import { COMPANY_TAGLINE } from '@/lib/config';

const Home = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-slate-900/60 z-10"
        />
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-99221"
          data-strk-bg="[hero-title] factory warehouse shipping container"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <span className="inline-block text-brand-orange font-bold tracking-widest uppercase text-sm mb-4">
              Your Professional Partner in China
            </span>
            <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-slate-100 mb-10 leading-relaxed max-w-2xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China. Professional, transparent, and results-oriented.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-brand-orange text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1"
              >
                Get a Free Sourcing Quote <ArrowRight size={20} />
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-md font-bold text-lg hover:bg-white/20 transition-all text-center lg:px-10"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-80">
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-brand-blue mb-1">10+</span>
              <span className="text-sm text-slate-500 font-medium">Years Experience</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-brand-blue mb-1">500+</span>
              <span className="text-sm text-slate-500 font-medium">Verified Suppliers</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-brand-blue mb-1">1200+</span>
              <span className="text-sm text-slate-500 font-medium">Shipments Managed</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-brand-blue mb-1">98%</span>
              <span className="text-sm text-slate-500 font-medium">Client Retention</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete China Sourcing Solutions</h2>
            <p className="text-lg text-slate-600">From initial product search to final delivery, we take the risk out of buying from China.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Search, 
                title: 'Supplier Sourcing', 
                desc: 'Finding reliable factories that meet your specific requirements and standards.',
                id: 'service-sourcing'
              },
              { 
                icon: Shield, 
                title: 'Factory Verification', 
                desc: 'On-site audits to verify factory legitimacy, production capacity, and certificates.',
                id: 'service-verify'
              },
              { 
                icon: CheckCircle, 
                title: 'Quality Control', 
                desc: 'Rigorous pre-shipment inspections to ensure products meet your quality standards.',
                id: 'service-qc'
              },
              { 
                icon: Truck, 
                title: 'Shipping & Logistics', 
                desc: 'Consolidating shipments and coordinating sea, air, or rail freight to your door.',
                id: 'service-shipping'
              }
            ].map((service) => (
              <div key={service.title} className="p-8 border border-slate-100 rounded-xl hover:shadow-xl hover:border-brand-blue/10 transition-all group">
                <div className="w-14 h-14 bg-brand-blue/5 text-brand-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-brand-blue text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
              <p className="text-slate-600">We have deep expertise in several key product categories, working with specialized factories across China.</p>
            </div>
            <Link to="/products" className="bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-md font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
              View All Categories <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Electronic Components', desc: 'PCB, sensors, cables, and enclosures.', id: 'cat-elec' },
              { title: 'Home & Kitchen', desc: 'Cookware, appliances, and home decor.', id: 'cat-home' },
              { title: 'Industrial Machinery', desc: 'CNC parts, molds, and equipment.', id: 'cat-ind' },
            ].map((cat) => (
              <div key={cat.title} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 group">
                <div className="h-56 bg-slate-200 overflow-hidden">
                  <img 
                    data-strk-img-id={`prod-img-${cat.id}`}
                    data-strk-img={`[${cat.id}-title] product manufacturing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={cat.title}
                  />
                </div>
                <div className="p-6">
                  <h3 id={`${cat.id}-title`} className="text-xl font-bold text-slate-900 mb-2">{cat.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/5 -skew-x-12 translate-x-1/2 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start sourcing from China safely?</h2>
              <p className="text-xl text-slate-100/90 mb-0 leading-relaxed">
                Contact our team today for a free consultation and project quote. No commitment required.
              </p>
            </div>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="bg-brand-orange text-white px-10 py-5 rounded-md font-extrabold text-xl hover:bg-orange-600 transition-all shadow-xl hover:-translate-y-1"
              >
                Request Your Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
