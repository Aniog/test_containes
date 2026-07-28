import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { submitSourcingInquiry } from '../api/inquiries.js';
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship,
  CheckCircle, Users, Globe, Award, ArrowRight,
  Package, Cpu, Shirt, Wrench, Sofa, Lightbulb,
  ChevronDown, ChevronUp, MessageSquare
} from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <CaseStudiesSection />
      <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <InquirySection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-navy-dark">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-9f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(21, 42, 69, 0.88)' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can import with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-orange text-white px-7 py-3.5 rounded-lg font-semibold text-base no-underline hover:bg-orange-dark transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold text-base no-underline hover:bg-white/10 transition-colors"
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
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Factory, value: '2,000+', label: 'Factories Verified' },
    { icon: Globe, value: '35+', label: 'Countries Reached' },
    { icon: Award, value: '12+', label: 'Years Experience' },
  ];

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-navy" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-xs md:text-sm text-slate-500">{stat.label}</p>
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
      icon: Search,
      title: 'Supplier Sourcing',
      desc: 'We identify and shortlist qualified manufacturers based on your product specs, MOQ, budget, and certification requirements.',
    },
    {
      icon: ShieldCheck,
      title: 'Factory Verification',
      desc: 'On-site factory audits to verify production capacity, certifications, equipment, workforce, and business legitimacy.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      desc: 'Pre-production, during-production, and pre-shipment inspections following AQL standards to ensure product quality.',
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      desc: 'Regular factory visits and progress reports throughout production to keep your order on schedule.',
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      desc: 'End-to-end logistics support including freight booking, customs documentation, and delivery tracking.',
    },
    {
      icon: MessageSquare,
      title: 'Negotiation Support',
      desc: 'Bilingual negotiation to secure better pricing, payment terms, and contract conditions with suppliers.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Sourcing Services
          </h2>
          <p id="services-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
            From finding the right supplier to delivering goods at your door — we cover every step of the China sourcing process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center text-navy font-semibold no-underline hover:text-navy-light transition-colors"
          >
            View All Services <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { num: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
    { num: '02', title: 'We Find Suppliers', desc: 'Our team identifies and vets potential factories through our network and on-ground research.' },
    { num: '03', title: 'Samples & Verification', desc: 'We arrange samples, conduct factory audits, and present you with a shortlist of verified options.' },
    { num: '04', title: 'Production & QC', desc: 'We monitor production progress and perform quality inspections at key stages.' },
    { num: '05', title: 'Shipping & Delivery', desc: 'We coordinate logistics, handle documentation, and track your shipment to destination.' },
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How Our Sourcing Process Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A clear, structured approach that keeps you informed and in control at every stage.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 md:gap-6 items-start bg-white rounded-xl p-5 md:p-6 border border-slate-200">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">{step.num}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center text-navy font-semibold no-underline hover:text-navy-light transition-colors"
          >
            Learn More About Our Process <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductsSection = () => {
  const categories = [
    { icon: Cpu, name: 'Electronics & Components' },
    { icon: Shirt, name: 'Apparel & Textiles' },
    { icon: Wrench, name: 'Hardware & Tools' },
    { icon: Sofa, name: 'Furniture & Home' },
    { icon: Package, name: 'Packaging & Printing' },
    { icon: Lightbulb, name: 'Lighting & Electrical' },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Products We Source
          </h2>
          <p id="products-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
            We source across a wide range of industries. If it's made in China, we can help you find the right supplier.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-navy/20 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center mb-3">
                <cat.icon className="w-6 h-6 text-navy" />
              </div>
              <p className="text-sm font-medium text-slate-700">{cat.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center text-navy font-semibold no-underline hover:text-navy-light transition-colors"
          >
            See Full Product List <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProblemsSection = () => {
  const problems = [
    { problem: 'Unreliable suppliers', solution: 'We verify every factory on-site before recommending them.' },
    { problem: 'Quality inconsistency', solution: 'Our QC team inspects at multiple production stages.' },
    { problem: 'Communication barriers', solution: 'Bilingual team bridges language and cultural gaps.' },
    { problem: 'Shipping delays', solution: 'Proactive logistics management and real-time tracking.' },
    { problem: 'Scams and fraud', solution: 'Background checks, business license verification, and trade references.' },
    { problem: 'Hidden costs', solution: 'Transparent pricing with no surprise fees or commissions.' },
  ];

  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Sourcing from China comes with real challenges. Here's how we address them.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <p className="text-orange font-semibold text-sm mb-2">Problem:</p>
              <p className="text-white font-medium mb-3">{item.problem}</p>
              <p className="text-emerald-400 font-semibold text-sm mb-2">Our Solution:</p>
              <p className="text-slate-300 text-sm leading-relaxed">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudiesSection = () => {
  const cases = [
    {
      id: 'case-electronics',
      title: 'Electronics Accessories for EU Distributor',
      result: 'Reduced unit cost by 22% while maintaining CE compliance',
      industry: 'Electronics',
      imgId: 'case-electronics-img-4b7e1a',
    },
    {
      id: 'case-furniture',
      title: 'Custom Furniture for US Retailer',
      result: 'Delivered 3,000 units on time with 99.2% pass rate',
      industry: 'Furniture',
      imgId: 'case-furniture-img-8c2d5f',
    },
    {
      id: 'case-apparel',
      title: 'Private Label Apparel for UK Brand',
      result: 'Found 3 verified factories within 2 weeks',
      industry: 'Apparel',
      imgId: 'case-apparel-img-6a9e3b',
    },
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="cases-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Case Studies
          </h2>
          <p id="cases-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real results from real sourcing projects we've managed for clients worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
              <div className="aspect-video relative">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}-title] [cases-subtitle] [cases-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <span className="text-xs font-medium text-orange uppercase tracking-wide">{item.industry}</span>
                <h3 id={`${item.id}-title`} className="text-base font-semibold text-slate-900 mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 flex items-start gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  {item.result}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-navy font-semibold no-underline hover:text-navy-light transition-colors"
          >
            View All Case Studies <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const FaqSection = ({ openFaq, setOpenFaq }) => {
  const faqs = [
    {
      q: 'What is a sourcing agent and why do I need one?',
      a: 'A sourcing agent acts as your local representative in China. We find suppliers, verify their legitimacy, negotiate pricing, inspect quality, and coordinate shipping — saving you time, money, and risk.',
    },
    {
      q: 'How much does your service cost?',
      a: 'Our fees depend on the scope of work. Typically we charge a service fee or a percentage of the order value. We provide a clear quote upfront with no hidden costs.',
    },
    {
      q: 'What is your minimum order requirement?',
      a: 'We work with orders of all sizes, though most factories have their own MOQs. We can help you find suppliers that match your volume needs.',
    },
    {
      q: 'How do you verify suppliers?',
      a: 'We conduct on-site factory audits checking business licenses, production capacity, equipment, certifications, worker conditions, and past export records.',
    },
    {
      q: 'Can you source any product from China?',
      a: "We source across most product categories including electronics, textiles, furniture, hardware, packaging, and more. If it's manufactured in China, we can likely help.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Common questions from buyers considering a China sourcing agent.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-white hover:bg-slate-50 transition-colors border-none cursor-pointer"
              >
                <span className="text-sm md:text-base font-medium text-slate-900 pr-4">{faq.q}</span>
                {openFaq === i ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openFaq === i && (
                <div className="px-4 md:px-5 pb-4 md:pb-5 bg-white">
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InquirySection = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', product: '', quantity: '', message: ''
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    try {
      await submitSourcingInquiry(formData, 'home_page');
      setStatus('success');
      setFormData({ name: '', email: '', company: '', product: '', quantity: '', message: '' });
    } catch (err) {
      console.error('Inquiry submission failed:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-slate-600">
              Tell us what you're looking for and we'll respond within 24 hours with a sourcing plan.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                placeholder="Your Company Ltd."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Product / Category *</label>
              <input
                type="text"
                required
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                placeholder="e.g. LED lighting, furniture"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Quantity</label>
              <input
                type="text"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                placeholder="e.g. 1,000 units"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Details</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy resize-none"
                placeholder="Tell us more about your sourcing needs, timeline, certifications required, etc."
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-orange text-white px-6 py-3.5 rounded-lg font-semibold text-base hover:bg-orange-dark transition-colors border-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry — It\u2019s Free'}
              </button>
              {status === 'success' && (
                <p className="text-sm text-emerald-600 text-center mt-3 font-medium">
                  Thank you! Your inquiry has been received. We will respond within 24 hours.
                </p>
              )}
              {status === 'error' && error && (
                <p className="text-sm text-red-600 text-center mt-3 font-medium">
                  {error}
                </p>
              )}
              {status !== 'success' && status !== 'error' && (
                <p className="text-xs text-slate-500 text-center mt-3">
                  No commitment required. We'll review your request and respond within 24 hours.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Home;
