import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, CheckCircle2,
  ArrowRight, Star, Users, Globe, Package, Headphones, TrendingUp,
  AlertTriangle, Clock, DollarSign, Languages, HelpCircle, ChevronDown
} from 'lucide-react';
import { useState } from 'react';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current);
  }, []);

  return (
    <section ref={heroRef} className="relative bg-neutral-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-neutral-900/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/20 text-accent mb-6">
            Trusted by 500+ Global Buyers
          </span>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed">
            We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all under one roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-base font-semibold transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const stats = [
    { value: '10+', label: 'Years Experience', icon: TrendingUp },
    { value: '500+', label: 'Clients Served', icon: Users },
    { value: '30+', label: 'Countries Reached', icon: Globe },
    { value: '5,000+', label: 'Products Sourced', icon: Package },
  ];

  return (
    <section className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-neutral-900">{stat.value}</p>
                <p className="text-xs md:text-sm text-neutral-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      id: 'supplier-sourcing',
      icon: Search,
      title: 'Supplier Sourcing',
      desc: 'We identify and shortlist qualified manufacturers matching your product specs, MOQ, and budget requirements.',
    },
    {
      id: 'factory-verification',
      icon: ShieldCheck,
      title: 'Factory Verification',
      desc: 'On-site factory audits to verify production capacity, certifications, equipment, and business legitimacy.',
    },
    {
      id: 'quality-inspection',
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      desc: 'Pre-shipment, during-production, and container loading inspections following AQL standards.',
    },
    {
      id: 'production-followup',
      icon: Factory,
      title: 'Production Follow-up',
      desc: 'Regular factory visits and progress reports to keep your order on schedule and within spec.',
    },
    {
      id: 'shipping-coordination',
      icon: Ship,
      title: 'Shipping & Logistics',
      desc: 'End-to-end freight coordination including customs documentation, consolidation, and door-to-door delivery.',
    },
    {
      id: 'ongoing-support',
      icon: Headphones,
      title: 'Ongoing Support',
      desc: 'Dedicated account manager for communication, negotiation, and issue resolution with your suppliers.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            End-to-End China Sourcing Solutions
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From finding the right supplier to delivering goods at your door — we handle every step of the sourcing process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">{service.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { num: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
    { num: '02', title: 'We Find Suppliers', desc: 'Our team identifies and vets 3-5 qualified factories matching your criteria.' },
    { num: '03', title: 'Sample & Negotiate', desc: 'We arrange samples, negotiate pricing, and finalize terms on your behalf.' },
    { num: '04', title: 'Production & QC', desc: 'We monitor production progress and conduct quality inspections at key stages.' },
    { num: '05', title: 'Ship & Deliver', desc: 'We coordinate logistics and customs to deliver goods safely to your warehouse.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Sourcing Process
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A proven 5-step process that takes the complexity out of sourcing from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div key={step.num} className="relative text-center">
              <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                {step.num}
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-px bg-neutral-200" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            Learn More About Our Process
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { id: 'electronics', title: 'Electronics & Components', desc: 'Consumer electronics, PCBs, LED lighting, cables', imgId: 'prod-electronics-4a8b2c' },
    { id: 'textiles', title: 'Textiles & Apparel', desc: 'Clothing, fabrics, home textiles, accessories', imgId: 'prod-textiles-5d9e3f' },
    { id: 'machinery', title: 'Machinery & Equipment', desc: 'Industrial machines, tools, auto parts', imgId: 'prod-machinery-6c7f4a' },
    { id: 'packaging', title: 'Packaging & Printing', desc: 'Custom packaging, labels, promotional materials', imgId: 'prod-packaging-7b8a5d' },
  ];

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Product Categories
          </span>
          <h2 id="products-section-title" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Products We Source
          </h2>
          <p id="products-section-subtitle" className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From electronics to textiles, we source across 50+ product categories from verified Chinese manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white rounded-xl overflow-hidden border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[prod-${cat.id}-desc] [prod-${cat.id}-title] [products-section-subtitle] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 id={`prod-${cat.id}-title`} className="font-semibold text-neutral-900 mb-1">{cat.title}</h3>
                <p id={`prod-${cat.id}-desc`} className="text-sm text-neutral-600">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            See All Product Categories
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProblemsSection = () => {
  const problems = [
    { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Avoid scams and low-quality factories with our verified supplier network.' },
    { icon: Languages, title: 'Language Barriers', desc: 'Our bilingual team handles all communication with Chinese suppliers.' },
    { icon: Clock, title: 'Production Delays', desc: 'We monitor timelines and flag issues before they become costly delays.' },
    { icon: DollarSign, title: 'Hidden Costs', desc: 'Transparent pricing with no surprise fees — you know exactly what you pay.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-4">
            Why Work With Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Sourcing from China comes with real challenges. Here is how we eliminate them for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {problems.map((problem) => (
            <div key={problem.title} className="flex gap-4 p-6 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <problem.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{problem.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{problem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const points = [
    'Based in Shenzhen with direct factory access',
    'English-speaking project managers',
    'Transparent reporting with photos and videos',
    'No hidden fees — clear service pricing',
    'ISO-compliant inspection procedures',
    'Flexible engagement — project-based or ongoing',
  ];

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white mb-4">
              Trust & Transparency
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Buyers Trust SSourcing China
            </h2>
            <p className="text-lg text-white/80 mb-8">
              We have built our reputation on transparency, reliability, and results. Every project gets dedicated attention from start to finish.
            </p>
            <ul className="space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white/90 text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-sm text-white/70 mt-1">Client Satisfaction</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-white">72h</p>
              <p className="text-sm text-white/70 mt-1">Avg. Response Time</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-white">2,000+</p>
              <p className="text-sm text-white/70 mt-1">Factories Audited</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-sm text-white/70 mt-1">Industries Covered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudiesSection = () => {
  const cases = [
    {
      industry: 'Electronics',
      title: 'LED Lighting for European Distributor',
      result: 'Reduced unit cost by 22% while improving quality consistency across 50,000 units.',
    },
    {
      industry: 'Home & Garden',
      title: 'Custom Furniture for US Retailer',
      result: 'Sourced 3 verified factories and delivered first container in 45 days.',
    },
    {
      industry: 'Automotive',
      title: 'Auto Parts for Australian Importer',
      result: 'Passed all compliance tests on first shipment with zero defects reported.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Real Results for Real Buyers
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            See how we have helped businesses like yours source successfully from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
              <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                {item.industry}
              </span>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">{item.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">{item.result}</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'What is the minimum order quantity (MOQ) for sourcing?',
      a: 'MOQ varies by product and factory. We work with suppliers offering MOQs from as low as 100 units for some products, while others may require 500-1,000 units. We always negotiate the best terms for your needs.',
    },
    {
      q: 'How long does the sourcing process take?',
      a: 'Typically 2-4 weeks from initial inquiry to receiving supplier quotes and samples. Full production and shipping timelines depend on product complexity and order size.',
    },
    {
      q: 'Do you charge for initial consultations?',
      a: 'No. Your first consultation and sourcing quote are completely free. We only charge once you decide to proceed with our services.',
    },
    {
      q: 'Can you source products I already have a supplier for?',
      a: 'Yes. We can audit your existing supplier, negotiate better terms, or find alternative factories to compare pricing and quality.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept bank transfers (T/T), PayPal, and Western Union. Payment terms are flexible and discussed during project scoping.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-neutral-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-neutral-50 transition-colors border-none"
              >
                <span className="font-medium text-neutral-900 pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-neutral-600 flex-shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5">
                  <p className="text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
          Tell us what you need and get a free, no-obligation sourcing quote within 24 hours.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default Home;
