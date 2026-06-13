import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Globe, Search, RefreshCw, CheckCircle, Package } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-multiply"
          data-strk-bg-id="hero-bg-ssourcing"
          data-strk-bg="busy port shipping containers logistics cargo ship"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 lg:py-32">
          <h1 id="hero-title" className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl mb-6">
            China Sourcing Agent <br/>
            <span className="text-blue-400">for Global Buyers</span>
          </h1>
          <p id="hero-subtitle" className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10">
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping—acting as your local team in China.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-blue-600 font-bold rounded-md hover:bg-blue-700 transition-colors md:text-lg">
              Get a Free Sourcing Quote
            </Link>
            <Link to="/services" className="px-8 py-4 bg-transparent border-2 border-white font-bold rounded-md hover:bg-white hover:text-gray-900 transition-colors md:text-lg">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve / Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="problems-title" className="text-3xl font-extrabold text-gray-900">Why You Need a Local Sourcing Partner</h2>
            <p id="problems-subtitle" className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Sourcing from China can be risky and time-consuming. We eliminate the common headaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Scam Prevention</h3>
              <p className="text-gray-600">We verify factory licenses, visit facilities, and ensure you're dealing with real manufacturers, not middlemen or scammers.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Quality Assurance</h3>
              <p className="text-gray-600">We conduct rigorous pre-shipment inspections to guarantee your products meet your exact specifications before you pay the balance.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Time & Cost Savings</h3>
              <p className="text-gray-600">Stop wasting time dealing with language barriers, time zone differences, and logistics. We handle the entire process for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                data-strk-img-id="home-services-inspection"
                data-strk-img="warehouse worker inspecting goods quality control chart"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality inspection process"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">End-to-End Sourcing Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                From finding the right factory to delivering goods to your warehouse, we provide a complete sourcing solution.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 rounded-full bg-blue-100 text-blue-600 p-1">
                    <Search size={20} />
                  </span>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Supplier Sourcing</h4>
                    <p className="mt-1 text-gray-600">We identify and audit potential suppliers based on your specific requirements.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 rounded-full bg-blue-100 text-blue-600 p-1">
                    <RefreshCw size={20} />
                  </span>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Production Management</h4>
                    <p className="mt-1 text-gray-600">We monitor the manufacturing process to ensure timelines and standards are met.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 rounded-full bg-blue-100 text-blue-600 p-1">
                    <Package size={20} />
                  </span>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Logistics & Shipping</h4>
                    <p className="mt-1 text-gray-600">We optimize shipping routes and consolidate items to reduce freight costs.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-10">
                <Link to="/services" className="text-blue-600 font-bold hover:text-blue-800 inline-flex items-center">
                  Explore all our services
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold mb-2">10+</div>
              <div className="text-blue-100 font-medium tracking-wide">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2">500+</div>
              <div className="text-blue-100 font-medium tracking-wide">Factories Audited</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2">150+</div>
              <div className="text-blue-100 font-medium tracking-wide">Global Clients</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2">100%</div>
              <div className="text-blue-100 font-medium tracking-wide">Transparent Pricing</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Ready to streamline your China sourcing?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Tell us about the products you need. Our team will get back to you within 24 hours with a free consultation.
          </p>
          <Link to="/contact" className="inline-flex px-8 py-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors text-lg shadow-lg">
            Start Your Project Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
