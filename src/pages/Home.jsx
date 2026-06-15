import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Hero from '@/components/home/Hero';
import { Shield, Target, Search, Package, Factory, Truck, CheckSquare, MessageSquare } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      title: 'Supplier Sourcing',
      description: 'We identify and vet top-tier Chinese manufacturers that meet your specific quality and price requirements.',
      icon: Search,
    },
    {
      title: 'Factory Audit',
      description: 'On-site verification of factory capacity, quality systems, and legal compliance before you place an order.',
      icon: Factory,
    },
    {
      title: 'Production Follow-up',
      description: 'Direct communication with the factory to ensure production timelines are met and delays are minimized.',
      icon: Target,
    },
    {
      title: 'Quality Inspection',
      description: 'Rigorous QC inspections at various stages (Initial, During, and Pre-shipment) to ensure zero defects.',
      icon: CheckSquare,
    },
    {
      title: 'Logistics & Shipping',
      description: 'Consolidation, customs clearance, and global shipping coordination to your doorstep.',
      icon: Truck,
    },
    {
      title: 'Custom Branding',
      description: 'Assistance with OEM/ODM production and specialized packaging to build your private label brand.',
      icon: Package,
    }
  ];

  return (
    <div ref={containerRef}>
      <Hero />
      
      {/* Problem Solver Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Why Overseas Buyers Need a China Agent
            </h2>
            <p className="mt-4 text-xl text-slate-500 max-w-3xl mx-auto">
              Sourcing from China directly can be complex. We bridge the gap and eliminate common risks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                q: "Language & Culture Barrier",
                a: "Incorrect specifications often lead to production disasters. We speak the local language and understand the business culture."
              },
              {
                q: "Quality Inconsistency",
                a: "A 'perfect' sample doesn't mean perfect bulk production. We provide on-site inspections to verify bulk quality."
              },
              {
                q: "Scams & Fake Factories",
                a: "The internet is full of middlemen posing as factories. We physically verify every supplier before you send money."
              },
              {
                q: "Hidden Costs",
                a: "Unexpected tariffs, shipping delays, and port fees can eat your margin. We provide transparent, end-to-end pricing."
              },
              {
                q: "Production Delays",
                a: "Chinese holidays and power cuts can stall orders. We maintain daily contact with factories to keep you on schedule."
              },
              {
                q: "Shipping Complexity",
                a: "Navigating LCL, FCL, and customs regulations is difficult. We handle all logistics and documentation for you."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm mr-3">?</span>
                  {item.q}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-preview" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Our Core Sourcing Services</h2>
              <p className="mt-4 text-lg text-slate-500">
                End-to-end solutions for e-commerce sellers, wholesalers, and specialized manufacturers.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <a href="/services" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                View all services <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col group">
                <div className="mb-6 w-14 h-14 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Globe className="w-full h-full rotate-12 scale-150" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Founded in', value: '2012' },
              { label: 'Active Suppliers', value: '1,500+' },
              { label: 'Containers Shipped', value: '8,000+' },
              { label: 'Product Categories', value: '50+' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.value}</div>
                <div className="text-blue-100 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Sample */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="products-title" className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Common Products We Source</h2>
            <p className="mt-4 text-xl text-slate-500">Expertise across multiple specialized categories.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Consumer Electronics', 'Home & Kitchen', 'Textiles & Apparel', 
              'Furniture & Hardware', 'Outdoor & Sporting', 'Toys & Baby Products',
              'Industrial Machinery', 'Auto Parts'
            ].map((item, idx) => (
              <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer">
                <img
                  data-strk-img-id={`prod-sample-${idx}`}
                  data-strk-img={`[products-title] ${item} products china factory`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-6">
                  <span className="text-white font-bold">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-8">
            Ready to find your next reliable supplier in China?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Tell us what products you're looking for and our sourcing team will get back to you within 24 hours.
          </p>
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 border border-transparent text-lg font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/20"
          >
            Get a Free Sourcing Quote <ArrowRight className="ml-3 h-6 w-6" />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
