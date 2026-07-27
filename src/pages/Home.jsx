import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  ShieldCheck, Search, ClipboardList, Ship, Target, Building2,
  MessageSquare, Users, Factory, CheckCircle, Truck, Handshake,
  AlertTriangle, ShieldAlert, Languages, Clock, DollarSign, Package,
  CheckCircle2, MapPin, Eye, Award, ChevronDown, ChevronUp,
  ArrowRight, Star, Globe, TrendingUp, Send,
} from 'lucide-react';
import { siteData } from '@/data/content';

const iconMap = {
  ShieldCheck, Search, ClipboardList, Ship, Target, Building2,
  MessageSquare, Users, Factory, CheckCircle, Truck, Handshake,
  AlertTriangle, ShieldAlert, Languages, Clock, DollarSign, Package,
  CheckCircle2, MapPin, Eye, Award,
};

const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-primary-dark via-primary-blue to-primary-blue overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/20 to-transparent" />
    </div>
    <div className="container-custom relative py-20 md:py-28 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center px-4 py-1.5 bg-white/10 rounded-full mb-6">
            <Globe className="w-4 h-4 text-accent-orange mr-2" />
            <span className="text-white/90 text-sm font-medium">Trusted by 500+ Global Buyers</span>
          </div>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-lg">
            Find reliable suppliers, verify factories, inspect quality, and coordinate 
            shipping from China. We handle the complexity so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-orange text-white font-bold rounded-lg hover:bg-accent-orange-hover transition-all text-lg shadow-lg shadow-accent-orange/25"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              How It Works
            </Link>
          </div>
          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-success-green mr-2" />
              <span className="text-white/80 text-sm">No upfront fees</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-success-green mr-2" />
              <span className="text-white/80 text-sm">24h response time</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              data-strk-img-id="hero-sourcing-image"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="China sourcing agent helping global buyers find reliable suppliers"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-success-green/10 rounded-full flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-success-green" />
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-sm">Verified Suppliers</p>
              <p className="text-gray-500 text-xs">500+ factories audited</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="bg-white py-12 border-b border-gray-100">
    <div className="container-custom">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {siteData.stats.map((stat) => (
          <div key={stat.id} className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary-blue mb-1">{stat.value}</p>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="section-padding bg-gray-50">
    <div className="container-custom">
      <div className="text-center mb-16">
        <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Comprehensive Sourcing Solutions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From initial supplier identification to final delivery, we provide end-to-end 
          sourcing services to ensure your China procurement is smooth and successful.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteData.services.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <div
              key={service.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
              <Link to="/services" className="text-primary-blue text-sm font-medium hover:text-accent-orange inline-flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const ProcessSection = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our 6-Step Sourcing Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A clear, transparent process that keeps you informed at every stage. 
            No surprises, no hidden steps.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.process.map((step) => {
            const Icon = iconMap[step.icon];
            return (
              <div key={step.step} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center px-6 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            View Detailed Process
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

  return (
    <section ref={containerRef} id="products" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-3">Products We Source</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wide Range of Product Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We source products across diverse industries, connecting you with 
            specialized manufacturers for each category.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  data-strk-img-id={`home-product-${product.id}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={product.titleId} className="font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p id={product.descId} className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            View All Product Categories
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProblemsSection = () => (
  <section className="section-padding bg-white">
    <div className="container-custom">
      <div className="text-center mb-16">
        <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-3">Why Choose Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Problems We Solve for Buyers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Common challenges in China sourcing, and how our expertise helps you overcome them.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteData.problems.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">{item.problem}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const TrustSection = () => (
  <section className="section-padding bg-primary-blue">
    <div className="container-custom">
      <div className="text-center mb-16">
        <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-3">Trust & Reliability</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why Buyers Trust SSourcing China
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          We have built our reputation on transparency, reliability, and results.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteData.trustPoints.map((point, index) => {
          const Icon = iconMap[point.icon];
          return (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-accent-orange/20 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-accent-orange" />
              </div>
              <h3 className="text-white font-semibold mb-3">{point.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{point.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const CaseStudiesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-3">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results for Real Clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how we have helped businesses like yours succeed with China sourcing.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {siteData.caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  data-strk-img-id={`home-case-${study.id}`}
                  data-strk-img={`[case-${study.id}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={study.client}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {study.industry}
                </div>
              </div>
              <div className="p-6">
                <h3 id={`case-${study.id}-title`} className="text-lg font-semibold text-gray-900 mb-3">{study.client}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{study.challenge}</p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-accent-orange font-bold text-lg">{study.savings}</p>
                    <p className="text-gray-500 text-xs">Cost Savings</p>
                  </div>
                  <div>
                    <p className="text-success-green font-bold text-lg">{study.defectRate}</p>
                    <p className="text-gray-500 text-xs">Quality Metric</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center px-6 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
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
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Common questions about our sourcing services. Can not find your answer? Contact us directly.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {siteData.faq.map((item, index) => (
            <div key={index} className="border border-gray-100 rounded-xl mb-3 overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-blue flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InquiryFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2 bg-primary-blue p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">Get a Free Sourcing Quote</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Tell us about your sourcing needs and our team will provide a detailed 
                  quote within 24 hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0" />
                    <span className="text-white/90 text-sm">No upfront fees</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0" />
                    <span className="text-white/90 text-sm">24-hour response</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0" />
                    <span className="text-white/90 text-sm">Confidential handling</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors text-gray-900"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors text-gray-900"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors text-gray-900"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors text-gray-900"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Needed *</label>
                      <input
                        type="text"
                        required
                        value={formData.product}
                        onChange={(e) => setFormData({...formData, product: e.target.value})}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors text-gray-900"
                        placeholder="e.g., Wireless earbuds"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Quantity</label>
                      <input
                        type="text"
                        value={formData.quantity}
                        onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors text-gray-900"
                        placeholder="e.g., 5,000 units"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Details</label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors text-gray-900 resize-none"
                      placeholder="Specifications, target price, delivery timeline..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 bg-accent-orange text-white font-bold rounded-lg hover:bg-accent-orange-hover transition-colors"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquiryFormSection />
    </div>
  );
};

export default Home;
