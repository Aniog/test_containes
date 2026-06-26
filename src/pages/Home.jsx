import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Shield, Truck, Search, Factory, Box, Users, Clock, Globe, Star, MessageSquare } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Layout from '@/Layout';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const services = [
    {
      title: 'Supplier Sourcing',
      desc: 'We find the most reliable manufacturers matching your specific product requirements and target pricing.',
      icon: Search,
      id: 'ser-1'
    },
    {
      title: 'Factory Verification',
      desc: 'On-site audits to verify factory legitimacy, production capacity, and social compliance.',
      icon: Factory,
      id: 'ser-2'
    },
    {
      title: 'Quality Control',
      desc: 'Strict inspections at every stage—Pre-production, During Production, and Pre-shipment (PSI).',
      icon: Shield,
      id: 'ser-3'
    },
    {
      title: 'Shipping Coordination',
      desc: 'Complete logistics management, including consolidation, documentation, and sea/air freight booking.',
      icon: Truck,
      id: 'ser-4'
    }
  ];

  const steps = [
    { title: 'Inquiry', desc: 'Tell us your sourcing needs' },
    { title: 'Sourcing', desc: 'We filter & select suppliers' },
    { title: 'Quotation', desc: 'Detailed cost & timeline analysis' },
    { title: 'Production', desc: 'Manufacturing & QC oversight' },
    { title: 'Shipping', desc: 'Secure delivery to your door' }
  ];

  const testimonials = [
    {
      name: 'Mark Thompson',
      role: 'CEO, Retail Solutions Inc.',
      content: 'SSourcing China transformed our supply chain. Their on-site inspections gave us the confidence we lacked when ordering from half a world away.',
      id: 'test-1'
    },
    {
      name: 'Sarah Jenkins',
      role: 'Procurement Manager, TechGear Ltd.',
      content: 'Reliable, transparent, and highly professional. They don’t just find suppliers; they find partners who understand our quality standards.',
      id: 'test-2'
    }
  ];

  return (
    <Layout>
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden py-24 lg:py-32">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-8822"
          data-strk-bg="[hero-title] sourcing agent china factory shipping"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              We help you source high-quality products from reliable Chinese suppliers while managing everything from factory verification to final shipping. Minimal hassle, maximum reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink 
                to="/contact" 
                className="bg-accent hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg text-center transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-accent/40"
              >
                Get a Free Sourcing Quote <ArrowRight className="h-5 w-5" />
              </NavLink>
              <NavLink 
                to="/services" 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg text-center backdrop-blur-sm transition-all"
              >
                Explore Services
              </NavLink>
            </div>
            <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
              <div className="text-white">
                <span className="block text-2xl font-bold">12+</span>
                <span className="text-sm text-gray-400">Years Experience</span>
              </div>
              <div className="text-white">
                <span className="block text-2xl font-bold">500+</span>
                <span className="text-sm text-gray-400">Verified Factories</span>
              </div>
              <div className="text-white">
                <span className="block text-2xl font-bold">10k+</span>
                <span className="text-sm text-gray-400">Shipments Managed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 py-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 font-semibold mb-6 uppercase tracking-wider text-xs">Trusted by Businesses Worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Simple logo placeholders */}
            <div className="text-2xl font-black text-primary">RETAIL<span className="text-accent">HUB</span></div>
            <div className="text-2xl font-black text-primary uppercase italic">GlobalProcure</div>
            <div className="text-2xl font-black text-primary tracking-tighter">TECH<span className="text-accent">FLOW</span></div>
            <div className="text-2xl font-black text-primary">SMART<span className="font-light">Source</span></div>
            <div className="text-2xl font-black text-primary">ASIA<span className="text-accent">CONNECT</span></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="services-title" className="text-base text-accent font-bold tracking-wide uppercase mb-2">Our Services</h2>
            <p id="services-subtitle" className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
              End-to-End Sourcing Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              We handle the complexities of international trade so you can focus on growing your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="p-8 bg-white border border-gray-100 rounded-2xl hover:border-accent transition-all hover:shadow-xl group">
                <div className="w-14 h-14 bg-blue-50 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us / Problem Solver */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <img 
                data-strk-img-id="why-us-img"
                data-strk-img="china sourcing agent factory inspection quality control"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="SSourcing China QC Team"
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl -z-0"></div>
            </div>
            <div className="mt-16 lg:mt-0">
              <h2 className="text-3xl font-extrabold text-primary mb-6">Why Work With SSourcing China?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary">Transparent Communication</h4>
                    <p className="text-gray-600">No hidden fees, no kickbacks from factories. We work exclusively in your interest.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary">Localized Negotiation</h4>
                    <p className="text-gray-600">Our native team negotiates directly with factories to secure the best prices without compromising quality.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary">Zero Risk Approach</h4>
                    <p className="text-gray-600">We verify suppliers before any money is paid, ensuring you are dealing with legitimate manufacturers.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <NavLink to="/how-it-works" className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn about our process <ArrowRight className="h-5 w-5" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-primary mb-4">Our Simple 5-Step Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From yours first inquiry to final delivery, we keep you informed every step of the way.</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 ring-8 ring-white">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-primary text-lg mb-2">{step.title}</h3>
                  <p className="text-center text-gray-500 text-sm px-4">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl font-extrabold mb-4">Success Stories</h2>
              <p className="text-gray-400 max-w-xl">Real results for real clients across different industries.</p>
            </div>
            <NavLink to="/case-studies" className="text-accent font-bold flex items-center gap-2">
              View all case studies <ArrowRight className="h-5 w-5" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden mb-6 h-64">
                <div 
                  className="absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                  data-strk-bg-id="case-1-bg"
                  data-strk-bg="electronic consumer products factory production line"
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block uppercase">Electronics</span>
                  <h3 className="text-xl font-bold">Scaling Sourcing for a Growing EU Tech Brand</h3>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden mb-6 h-64">
                <div 
                  className="absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                  data-strk-bg-id="case-2-bg"
                  data-strk-bg="furniture wooden products china manufacturing"
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block uppercase">Furniture</span>
                  <h3 className="text-xl font-bold">Consolidating Shipments for a US Home Decor Chain</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-primary text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold text-primary flex gap-2 items-center">
                <span className="text-accent">Q:</span> How do you charge for your services?
              </h4>
              <p className="mt-2 text-gray-600 pl-7 leading-relaxed">
                We typically work on a commission basis (percentage of order value) or a flat service fee for one-off tasks like audits or inspections. Contact us for a customized proposal.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-primary flex gap-2 items-center">
                <span className="text-accent">Q:</span> Do you offer warehousing and consolidation?
              </h4>
              <p className="mt-2 text-gray-600 pl-7 leading-relaxed">
                Yes, we have partner warehouses in Shenzhen, Ningbo, and Shanghai where we can consolidate items from different suppliers into one shipment to save on shipping costs.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
             <NavLink to="/blog" className="text-gray-500 hover:text-accent font-medium">Have more questions? Read our blog guide</NavLink>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6">Ready to Start Sourcing?</h2>
            <p className="text-xl text-gray-600 mb-10">Get a professional sourcing analysis and price quotation for your next project within 24 hours.</p>
            <NavLink 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-accent hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-accent/40"
            >
              Request Your Free Quote <ArrowRight className="h-6 w-6" />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default Home;
