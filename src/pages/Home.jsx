import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Ship, Search, Factory, ClipboardCheck, Package, ArrowRight, Phone, Mail, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const productsRef = useRef(null);
  const problemsRef = useRef(null);
  const trustRef = useRef(null);
  const casesRef = useRef(null);
  const faqRef = useRef(null);
  const inquiryRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, heroRef.current);
      ImageHelper.loadImages(strkImgConfig, servicesRef.current);
      ImageHelper.loadImages(strkImgConfig, processRef.current);
      ImageHelper.loadImages(strkImgConfig, productsRef.current);
      ImageHelper.loadImages(strkImgConfig, problemsRef.current);
      ImageHelper.loadImages(strkImgConfig, trustRef.current);
      ImageHelper.loadImages(strkImgConfig, casesRef.current);
      ImageHelper.loadImages(strkImgConfig, faqRef.current);
      ImageHelper.loadImages(strkImgConfig, inquiryRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify and vet reliable manufacturers in China based on your product requirements, budget, and quality standards.',
    },
    {
      icon: Factory,
      title: 'Factory Verification',
      description: 'On-site factory audits to verify business licenses, production capacity, quality systems, and social compliance.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics support including freight forwarding, customs clearance, and door-to-door delivery.',
    },
  ];

  const processSteps = [
    { step: '01', title: 'Share Requirements', description: 'Tell us your product specs, target price, and quantity. We review your needs and propose a sourcing plan.' },
    { step: '02', title: 'Supplier Matching', description: 'We search, shortlist, and verify suppliers. You review profiles and we arrange video calls or factory visits.' },
    { step: '03', title: 'Sample & Negotiation', description: 'We coordinate samples, track feedback, and negotiate pricing, payment terms, and delivery schedules.' },
    { step: '04', title: 'Production & QC', description: 'We monitor production, conduct inspections, and provide detailed reports with photos and videos.' },
    { step: '05', title: 'Shipping & Delivery', description: 'We arrange logistics, handle export documentation, and track shipment until it reaches your warehouse.' },
  ];

  const productCategories = [
    'Electronics & Components',
    'Home & Kitchen',
    'Textiles & Apparel',
    'Hardware & Tools',
    'Gifts & Promotional',
    'Toys & Recreation',
    'Automotive Parts',
    'Beauty & Personal Care',
  ];

  const problems = [
    { title: 'Unreliable suppliers', description: 'We verify every factory and negotiate contracts that protect your interests.' },
    { title: 'Quality issues', description: 'Our QC team inspects at every stage so defects are caught before shipment.' },
    { title: 'Communication barriers', description: 'Native English-speaking sourcing managers bridge language and cultural gaps.' },
    { title: 'Hidden costs', description: 'We provide transparent quotes with all fees included—no surprises.' },
    { title: 'Shipping delays', description: 'We coordinate logistics proactively and provide real-time tracking.' },
  ];

  const trustPoints = [
    { stat: '500+', label: 'Factories Verified' },
    { stat: '1,200+', label: 'Shipments Completed' },
    { stat: '98%', label: 'Client Retention' },
    { stat: '15+', label: 'Years Combined Experience' },
  ];

  const caseStudies = [
    {
      title: 'Home Goods Importer — USA',
      result: 'Reduced supplier lead time by 22% and cut defect rate from 8% to 1.2% within 6 months.',
      category: 'Home & Kitchen',
    },
    {
      title: 'Electronics Brand — Germany',
      result: 'Secured 3 certified suppliers and achieved 99.1% on-time delivery for 18 consecutive months.',
      category: 'Electronics',
    },
    {
      title: 'Promotional Products Distributor — UK',
      result: 'Consolidated 12 SKUs under one factory audit, reducing QC costs by 35%.',
      category: 'Gifts & Promotional',
    },
  ];

  const faqs = [
    {
      question: 'What does a sourcing agent do?',
      answer: 'A sourcing agent helps you find suppliers, negotiate prices, inspect quality, and manage shipping. We act as your local representative in China, reducing risk and saving you time.',
    },
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct on-site factory audits, check business licenses, assess production capacity, review quality management systems, and verify references. We only recommend suppliers that meet your standards.',
    },
    {
      question: 'What are your fees?',
      answer: 'Our fees depend on project scope. We typically charge a sourcing fee plus a percentage of order value. We provide transparent quotes before any work begins.',
    },
    {
      question: 'Can you handle small orders?',
      answer: 'Yes. We work with orders of all sizes, from sample quantities to full container loads. Our network includes suppliers that accommodate different MOQs.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Supplier identification usually takes 1-2 weeks. Sample approval takes 2-4 weeks. Production and shipping timelines depend on product complexity and quantity.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div
          data-strk-bg-id="hero-bg-8f2a9c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-slate-900"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <h1 id="hero-title" className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg text-slate-200 leading-relaxed">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping—all from one trusted partner in China.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                See How It Works
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                No-obligation quote
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Response within 24 hours
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">End-to-End Sourcing Services</h2>
            <p className="mt-4 text-slate-600 text-lg">
              From finding the right factory to delivering goods to your door, we manage the full sourcing cycle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-slate-900 font-medium hover:underline">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">How It Works</h2>
            <p className="mt-4 text-slate-600 text-lg">
              A proven 5-step process designed to reduce risk and deliver consistent results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-bold text-slate-200 mb-3">{item.step}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-slate-900 font-medium hover:underline">
              Learn more about our process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section ref={productsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Products We Source</h2>
            <p className="mt-4 text-slate-600 text-lg">
              We source across a wide range of categories with experienced category specialists.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category) => (
              <div key={category} className="p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all">
                <p className="text-slate-900 font-medium">{category}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/products" className="inline-flex items-center gap-2 text-slate-900 font-medium hover:underline">
              Browse all categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section ref={problemsRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Problems We Solve</h2>
            <p className="mt-4 text-slate-600 text-lg">
              Common sourcing challenges and how we help you avoid them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section ref={trustRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Trusted by Buyers Worldwide</h2>
            <p className="mt-4 text-slate-600 text-lg">
              Numbers that reflect our commitment to quality and reliability.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-4xl font-bold text-slate-900">{item.stat}</div>
                <div className="mt-2 text-slate-600 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                "SSourcing China helped us find a reliable electronics supplier within 2 weeks. Their QC reports are detailed and professional."
              </p>
              <p className="mt-3 text-sm font-medium text-slate-900">Procurement Manager, EU Retailer</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                "We reduced defects from 9% to under 1% after switching to their inspection process. Highly recommended."
              </p>
              <p className="mt-3 text-sm font-medium text-slate-900">Operations Director, US Brand</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                "Clear communication, transparent pricing, and on-time shipping. They feel like an extension of our team."
              </p>
              <p className="mt-3 text-sm font-medium text-slate-900">Founder, UK E-commerce Store</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={casesRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Case Studies</h2>
            <p className="mt-4 text-slate-600 text-lg">
              Real results for real buyers. Here is how we have helped companies source better from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white border border-slate-200">
                <span className="inline-block text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">{item.category}</span>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.result}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-slate-900 font-medium hover:underline">
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-4 text-slate-600 text-lg">
              Quick answers to common questions about working with a China sourcing agent.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.question} className="p-6 rounded-2xl border border-slate-200 bg-white">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.question}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section ref={inquiryRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Get a Free Sourcing Quote</h2>
              <p className="mt-4 text-slate-600 text-lg">
                Tell us what you need. We will review your requirements and send you a tailored sourcing plan within 24 hours.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <p className="text-slate-700 text-sm">No-obligation consultation and quote</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <p className="text-slate-700 text-sm">Confidential handling of your product details</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <p className="text-slate-700 text-sm">Clear pricing with no hidden fees</p>
                </div>
              </div>
              <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Prefer to talk first?</h3>
                <p className="text-slate-600 text-sm mb-4">Schedule a 15-minute call with our sourcing specialist.</p>
                <a href="mailto:info@ssourcingchina.com" className="inline-flex items-center gap-2 text-slate-900 font-medium hover:underline">
                  <Mail className="w-4 h-4" />
                  info@ssourcingchina.com
                </a>
              </div>
            </div>

            <form className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm" onSubmit={(e) => { e.preventDefault(); alert('Thank you. This is a demo form.'); }}>
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-1">First Name</label>
                    <input type="text" required className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-1">Last Name</label>
                    <input type="text" required className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">Company</label>
                  <input type="text" required className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">Email</label>
                  <input type="email" required className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">Product Category</label>
                  <select required className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900">
                    <option value="">Select a category</option>
                    {productCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">Estimated Order Quantity</label>
                  <input type="text" placeholder="e.g. 5,000 units / 1 container" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">Project Details</label>
                  <textarea rows="4" placeholder="Describe your product, target price range, and any specific requirements..." className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"></textarea>
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors">
                  Submit Inquiry
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-slate-500 text-center">
                  By submitting, you agree to our Privacy Policy. We will never share your information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
