import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Truck, Factory, Search, ChevronRight } from 'lucide-react';
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
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-92hf83"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Helping you find reliable suppliers, verify factories, inspect quality, and coordinate shipping with zero hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-[#D97706] hover:bg-[#B45309] text-white px-8 py-4 rounded-md text-lg font-bold transition-all shadow-lg flex items-center justify-center"
            >
              Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-md text-lg font-bold transition-all flex items-center justify-center"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Sourcing Services</h2>
            <p id="services-subtitle" className="text-gray-600 max-w-2xl mx-auto">Comprehensive end-to-end solutions to make your China sourcing safe and profitable.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 'svc-1',
                title: 'Supplier Sourcing',
                desc: 'Finding 5-10 verified suppliers and providing detailed price comparisons.',
                icon: <Search className="w-10 h-10 text-[#0F4C81]" />,
              },
              {
                id: 'svc-2',
                title: 'Factory Audits',
                desc: 'On-site verification of factory capabilities, certifications, and social compliance.',
                icon: <Factory className="w-10 h-10 text-[#0F4C81]" />,
              },
              {
                id: 'svc-3',
                title: 'Quality Control',
                desc: 'Strict inspections at mid-production and before shipment to ensure zero defects.',
                icon: <ShieldCheck className="w-10 h-10 text-[#0F4C81]" />,
              },
              {
                id: 'svc-4',
                title: 'Sample Consolidation',
                desc: 'Collecting samples from multiple suppliers and shipping them to you in one package.',
                icon: <ArrowRight className="w-10 h-10 text-[#0F4C81]" />,
              },
              {
                id: 'svc-5',
                title: 'Shipping Coordination',
                desc: 'Full logistics support including sea, air, and rail freight to your doorstep.',
                icon: <Truck className="w-10 h-10 text-[#0F4C81]" />,
              },
              {
                id: 'svc-6',
                title: 'Amazon FBA Prep',
                desc: 'Custom labeling, packing, and direct shipping to Amazon warehouses worldwide.',
                icon: <CheckCircle className="w-10 h-10 text-[#0F4C81]" />,
              }
            ].map((service) => (
              <div key={service.id} className="p-8 border border-gray-100 rounded-xl hover:shadow-xl transition-all group bg-gray-50/50">
                <div className="mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 id={`service-title-${service.id}`} className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p id={`service-desc-${service.id}`} className="text-gray-600 mb-6">{service.desc}</p>
                <Link to="/services" className="text-[#0F4C81] font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Sourcing Process</h2>
            <p id="process-subtitle" className="text-gray-600 max-w-2xl mx-auto">A transparent, step-by-step approach to successful procurement.</p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: '01', title: 'Submit Inquiry', desc: 'Share your product requirements and specifications with us.' },
                { step: '02', title: 'Find Suppliers', desc: 'We source and vet the best-matched factories for your needs.' },
                { step: '03', title: 'QC & Production', desc: 'We monitor production and perform strict on-site quality checks.' },
                { step: '04', title: 'Shipping & Delivery', desc: 'Safe delivery via our global logistics network to your door.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-[#0F4C81] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 id={`step-title-${idx}`} className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p id={`step-desc-${idx}`} className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 bg-[#0F4C81] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl font-extrabold mb-2">10+</div>
              <p className="text-gray-300">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2">500+</div>
              <p className="text-gray-300">Verified Suppliers</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2">50+</div>
              <p className="text-gray-300">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2">100%</div>
              <p className="text-gray-300">Transparency Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Products We Source</h2>
            <p id="products-subtitle" className="text-gray-600">Expertise across a wide range of industries.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Electronics', id: 'prod-1' },
              { name: 'Home & Kitchen', id: 'prod-2' },
              { name: 'Outdoor Gear', id: 'prod-3' },
              { name: 'Apparel', id: 'prod-4' },
              { name: 'Toys', id: 'prod-5' },
              { name: 'Industrial Parts', id: 'prod-6' },
              { name: 'Beauty & Care', id: 'prod-7' },
              { name: 'Pet Products', id: 'prod-8' }
            ].map((prod) => (
              <div key={prod.id} className="relative group overflow-hidden rounded-lg aspect-square">
                <img 
                  data-strk-img-id={`prod-img-${prod.id}`}
                  data-strk-img={`[${prod.id}-name] product sourcing china`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={prod.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <span id={`${prod.id}-name`} className="text-white font-bold">{prod.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-title" className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Ready to start sourcing?</h2>
          <p id="cta-desc" className="text-xl text-gray-600 mb-10">Get a free consultation and a detailed quote for your sourcing project within 48 hours.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-[#D97706] hover:bg-[#B45309] text-white px-10 py-5 rounded-md text-xl font-bold transition-all shadow-xl"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
