import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Truck, Factory, Search, ChevronRight, BarChart3, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      title: 'Supplier Sourcing',
      desc: 'We find high-quality, verified manufacturers that match your specific requirements and budget.',
      icon: Search
    },
    {
      title: 'Factory Audit',
      desc: 'In-depth verification of factory capacity, certifications, and compliance standards.',
      icon: ShieldCheck
    },
    {
      title: 'Quality Control',
      desc: 'Rigorous pre-shipment inspections to ensure every unit meets your exact specifications.',
      icon: CheckCircle2
    },
    {
      title: 'Logistics Support',
      desc: 'Coordinating sea, air, and rail freight to deliver your goods efficiently to your doorstep.',
      icon: Truck
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-ssourcing"
          data-strk-bg="[hero-title] [hero-subtitle] china factory production line"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl text-slate-300 mb-10 leading-relaxed">
              Simplify your procurement in China. From supplier verification to quality control and shipping, we handle the complexities so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition-all"
              >
                Get a Free Sourcing Quote
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-slate-900 transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-blue-600" />
              <div>
                <div className="font-bold text-slate-900">12+ Years</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8 text-blue-600" />
              <div>
                <div className="font-bold text-slate-900">50+ Countries</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Buyers Served</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Factory className="w-8 h-8 text-blue-600" />
              <div>
                <div className="font-bold text-slate-900">1000+ Verified</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Factory Pool</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <div>
                <div className="font-bold text-slate-900">100% Secure</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Trade Protection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Sourcing Solutions
            </h2>
            <p id="services-subtitle" className="max-w-2xl mx-auto text-slate-600">
              We provide end-to-end support to ensure your China sourcing project is successful, transparent, and risk-free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <service.icon className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="why-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Avoid Common China Sourcing Risks
              </h2>
              <div className="space-y-6">
                {[
                  { t: 'Communication Barriers', d: "We speak the language and understand the local culture, ensuring your requirements are never 'lost in translation'." },
                  { t: 'Quality Inconsistency', d: "Our on-the-ground QC team inspects production at multiple stages, not just before shipping." },
                  { t: 'Hidden Fees', d: "Enjoy transparent pricing with no kickbacks from suppliers. We work exclusively for you." },
                  { t: 'Shipping Delays', d: "We manage logistics from factory to port, handling all documentation and customs requirements." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900">{item.t}</h4>
                      <p className="text-sm text-slate-600">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="why-us-img"
                data-strk-img="[why-title] quality inspection in china factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality Inspection"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-blue-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-title" className="text-3xl md:text-5xl font-bold text-white mb-8">
            Ready to find your next reliable supplier in China?
          </h2>
          <p id="cta-subtitle" className="text-xl text-blue-100 mb-10 leading-relaxed">
            Tell us about your product requirements and get a professional sourcing proposal within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 text-xl font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-xl"
          >
            Start Your Sourcing Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
