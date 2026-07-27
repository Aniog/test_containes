import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, ShieldCheck, Factory, Truck, CheckCircle, ArrowRight } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="absolute inset-0 z-0 bg-slate-900"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 xl:py-40">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors text-center inline-flex justify-center items-center gap-2"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-md font-semibold text-lg transition-colors text-center"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div className="flex flex-col items-center p-4">
              <span className="text-3xl font-bold text-blue-600 mb-2">500+</span>
              <span className="text-sm font-medium text-slate-600">Verified Suppliers</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-3xl font-bold text-blue-600 mb-2">1,200+</span>
              <span className="text-sm font-medium text-slate-600">Quality Inspections</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-3xl font-bold text-blue-600 mb-2">99%</span>
              <span className="text-sm font-medium text-slate-600">Defect-Free Rate</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-3xl font-bold text-blue-600 mb-2">10+</span>
              <span className="text-sm font-medium text-slate-600">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Core Services</h2>
            <p id="services-subtitle" className="text-lg text-slate-600">Comprehensive end-to-end sourcing solutions tailored to protect your business and ensure quality.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-8">
                <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                  <Search className="h-7 w-7" />
                </div>
                <h3 id="service-1-title" className="text-xl font-bold text-slate-900 mb-3">Supplier Sourcing</h3>
                <p id="service-1-desc" className="text-slate-600 mb-6 leading-relaxed">
                  We find reliable manufacturers matching your specifications, negotiate the best prices, and secure samples before you commit.
                </p>
                <Link to="/services" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-8">
                <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                  <Factory className="h-7 w-7" />
                </div>
                <h3 id="service-2-title" className="text-xl font-bold text-slate-900 mb-3">Factory Audits</h3>
                <p id="service-2-desc" className="text-slate-600 mb-6 leading-relaxed">
                  We conduct on-site audits to verify factory legitimacy, production capacity, working conditions, and quality management systems.
                </p>
                <Link to="/services" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-8">
                <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 id="service-3-title" className="text-xl font-bold text-slate-900 mb-3">Quality Inspection</h3>
                <p id="service-3-desc" className="text-slate-600 mb-6 leading-relaxed">
                  Pre-shipment, during production, and piece-by-piece inspections to ensure products meet your exact standards before final payment.
                </p>
                <Link to="/services" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

             {/* Service 4 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-8">
                <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <h3 id="service-4-title" className="text-xl font-bold text-slate-900 mb-3">Production Monitoring</h3>
                <p id="service-4-desc" className="text-slate-600 mb-6 leading-relaxed">
                  Daily tracking of your production schedule to prevent delays and solve manufacturing issues as they arise on the factory floor.
                </p>
                <Link to="/services" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-8">
                <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                  <Truck className="h-7 w-7" />
                </div>
                <h3 id="service-5-title" className="text-xl font-bold text-slate-900 mb-3">Shipping & Logistics</h3>
                <p id="service-5-desc" className="text-slate-600 mb-6 leading-relaxed">
                  Consolidation of goods from multiple suppliers, customs clearance support, and coordination of air, sea, or rail freight.
                </p>
                <Link to="/services" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* CTA Card */}
            <div className="bg-blue-600 rounded-xl shadow-sm overflow-hidden text-white flex flex-col justify-center p-8">
                <h3 className="text-2xl font-bold mb-4">Looking for something specific?</h3>
                <p className="mb-6 opacity-90">Tell us what you need, and we'll handle the rest. We customize our sourcing solutions for your business.</p>
                <Link to="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold inline-flex items-center justify-center w-full hover:bg-slate-50 transition-colors">
                  Contact Us Today
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3">
                 <img
                  alt="Quality Control Inspector examining products"
                  className="w-full h-full object-cover"
                  data-strk-img-id="home-qc-inspector"
                  data-strk-img="[why-title] [why-subtitle] quality control inspection factory"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 id="why-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Why Partner With Us?</h2>
              <p id="why-subtitle" className="text-lg text-slate-600 mb-8 max-w-xl">
                Navigating the Chinese manufacturing landscape can be complex and risky without local representation. We act as your eyes and ears on the ground.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">100% Transparent Communication</h4>
                    <p className="text-slate-600 mt-1">No hidden fees or kickbacks from factories. We work exclusively for you, the buyer.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Direct Factory Access</h4>
                    <p className="text-slate-600 mt-1">We bypass middlemen and trading companies to connect you directly with real manufacturers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Rigorous Quality Control</h4>
                    <p className="text-slate-600 mt-1">Our certified inspectors follow strict AQL standards to ensure your products meet international requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-20 bg-cover bg-center relative">
        <div 
          className="absolute inset-0 z-0 bg-slate-900"
          data-strk-bg-id="cta-bg"
          data-strk-bg="[cta-title] [cta-subtitle] shipping cargo logistics"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-blue-900/90 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 id="cta-title" className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to source safely from China?</h2>
          <p id="cta-subtitle" className="text-xl text-blue-100 mb-10">Stop worrying about scams, language barriers, and poor quality. Let our professional team handle your sourcing needs.</p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-block"
          >
            Request a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
