import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { submitSourcingInquiry } from '../api/sourcing-inquiry.js';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, ArrowRight,
  CheckCircle2, ChevronDown, ChevronUp, Factory, Users,
  Globe2, Award, ThumbsUp, Package, Building2, Wrench,
  Zap, Shirt, Utensils, Dumbbell, Baby, Home as HomeIcon,
  Cpu, Car, Flower2, AlertCircle
} from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-primary overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Trusted China Sourcing Partner</p>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
            We help you find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can import from China with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors no-underline"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors no-underline"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers from our verified network based on your product requirements, target price, and quality standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify business licenses, production capacity, quality systems, and working conditions before you place orders.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections to ensure your products meet agreed specifications and standards.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics support including freight booking, customs documentation, and delivery tracking from factory to your door.',
  },
];

const ServicesSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Sourcing Support</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          From finding suppliers to delivering goods, we handle every step of your China sourcing journey.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {services.map((s) => (
          <div key={s.title} className="bg-white border border-gray-100 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow group">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
              <s.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors no-underline">
          View All Services <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

const processSteps = [
  { num: '01', title: 'Tell Us What You Need', desc: 'Share your product specifications, target price, and order quantity. We assess feasibility and provide initial feedback.' },
  { num: '02', title: 'Supplier Search & Verification', desc: 'We search our network, shortlist suitable suppliers, and conduct factory audits to verify capabilities.' },
  { num: '03', title: 'Sample & Price Negotiation', desc: 'We arrange samples, negotiate pricing and terms on your behalf, and keep you informed at every step.' },
  { num: '04', title: 'Production & Quality Control', desc: 'We monitor production progress and conduct inspections at key stages to ensure quality standards are met.' },
  { num: '05', title: 'Shipping & Delivery', desc: 'We coordinate logistics, handle documentation, and track your shipment until it reaches your destination.' },
];

const ProcessSection = () => (
  <section className="py-16 md:py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">How It Works</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Sourcing Process, Simplified</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          A clear, structured process that takes you from initial inquiry to delivered goods.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
        {processSteps.map((step, i) => (
          <div key={step.num} className="flex gap-4 md:gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-base">{step.num}</span>
            </div>
            <div className="flex-1 pb-6 md:pb-8 border-b border-gray-200 last:border-0">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/how-it-works" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors no-underline">
          Learn More About Our Process <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

const productCategories = [
  { icon: Package, name: 'Consumer Electronics', desc: 'Phones, tablets, accessories, smart home devices' },
  { icon: HomeIcon, name: 'Home & Garden', desc: 'Furniture, decor, kitchenware, lighting' },
  { icon: Shirt, name: 'Apparel & Textiles', desc: 'Clothing, fabrics, bags, fashion accessories' },
  { icon: Wrench, name: 'Industrial & Hardware', desc: 'Tools, fasteners, machinery parts, equipment' },
  { icon: Dumbbell, name: 'Sports & Outdoors', desc: 'Fitness equipment, camping gear, sporting goods' },
  { icon: Utensils, name: 'Food & Beverage', desc: 'Packaged foods, ingredients, kitchen supplies' },
  { icon: Baby, name: 'Baby & Kids', desc: 'Toys, clothing, nursery items, educational products' },
  { icon: Cpu, name: 'Electrical & Components', desc: 'PCBs, connectors, motors, sensors' },
  { icon: Car, name: 'Auto Parts', desc: 'Aftermarket parts, accessories, EV components' },
  { icon: Flower2, name: 'Beauty & Personal Care', desc: 'Cosmetics, skincare, hair care, wellness' },
  { icon: Building2, name: 'Building Materials', desc: 'Tiles, fixtures, plumbing, construction supplies' },
  { icon: Zap, name: 'Energy & Solar', desc: 'Solar panels, batteries, LED lighting, power systems' },
];

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Product Categories</p>
          <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Products We Source</h2>
          <p id="products-subtitle" className="text-gray-600 max-w-2xl mx-auto text-lg">
            We source a wide range of product categories across China's manufacturing hubs.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {productCategories.map((cat) => (
            <div key={cat.name} className="bg-gray-50 rounded-xl p-5 hover:bg-blue-50 transition-colors group cursor-pointer">
              <cat.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-1">{cat.name}</h3>
              <p className="text-gray-500 text-xs md:text-sm">{cat.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors no-underline">
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const problems = [
  {
    title: 'Unreliable Suppliers',
    desc: 'Finding trustworthy suppliers online is risky. Many listings are trading companies, not real factories, leading to quality and communication issues.',
  },
  {
    title: 'Quality Inconsistency',
    desc: 'Production quality can vary significantly from samples. Without on-site inspection, defects and deviations go unnoticed until delivery.',
  },
  {
    title: 'Communication Barriers',
    desc: 'Language differences, time zones, and cultural misunderstandings create costly delays and errors in orders.',
  },
  {
    title: 'Logistics Complexity',
    desc: 'Navigating freight options, customs regulations, and documentation requirements can be overwhelming for first-time importers.',
  },
];

const ProblemsSection = () => (
  <section className="py-16 md:py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Common Challenges</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Problems We Solve</h2>
          <p className="text-gray-600 text-lg mb-8">
            Importing from China doesn't have to be risky or complicated. We address the most common pain points that buyers face.
          </p>
          <div className="space-y-6">
            {problems.map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-50 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-red-500 font-bold text-sm">!</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-primary rounded-2xl p-8 md:p-10 text-white">
          <h3 className="text-2xl font-bold mb-6">How We Help</h3>
          <ul className="space-y-4">
            {[
              'Verified factory network with on-site audit reports',
              'Multi-stage quality inspections by experienced QC teams',
              'Bilingual project managers as your single point of contact',
              'End-to-end logistics coordination and documentation',
              'Transparent pricing with no hidden fees',
              'Regular progress updates with photo and video evidence',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-blue-50 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors no-underline"
          >
            Discuss Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const trustPoints = [
  { icon: Factory, value: '2,000+', label: 'Verified Suppliers' },
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Globe2, value: '40+', label: 'Countries Shipped To' },
  { icon: Award, value: '10+', label: 'Years of Experience' },
];

const TrustSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {trustPoints.map((tp) => (
          <div key={tp.label} className="text-center">
            <tp.icon className="w-10 h-10 text-accent mx-auto mb-3" />
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{tp.value}</div>
            <div className="text-gray-600 text-sm font-medium">{tp.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const caseStudies = [
  {
    title: 'US Retailer Cuts Defect Rate by 85%',
    industry: 'Consumer Electronics',
    desc: 'A US-based electronics retailer was struggling with a 20% defect rate from their Chinese supplier. We identified a better factory, implemented strict QC protocols, and reduced defects to under 3%.',
    imgId: 'case-electronics-d4e5f6',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    title: 'European Brand Scales Production 5x',
    industry: 'Home & Garden',
    desc: 'A European home goods brand needed to rapidly scale production for a new product line. We coordinated 3 verified factories and managed the entire production timeline to deliver on schedule.',
    imgId: 'case-homegoods-g7h8i9',
    titleId: 'case-homegoods-title',
    descId: 'case-homegoods-desc',
  },
  {
    title: 'Australian Importer Saves 30% on Logistics',
    industry: 'Apparel & Textiles',
    desc: 'An Australian clothing importer was overpaying for freight. We optimized their shipping routes, consolidated shipments, and renegotiated carrier contracts, saving 30% on logistics costs.',
    imgId: 'case-apparel-j1k2l3',
    titleId: 'case-apparel-title',
    descId: 'case-apparel-desc',
  },
];

const CaseStudiesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Results for Real Buyers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            See how we have helped businesses like yours source better from China.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <div key={cs.title} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-accent text-xs font-semibold uppercase tracking-wider">{cs.industry}</span>
                <h3 id={cs.titleId} className="text-lg font-bold text-gray-900 mt-2 mb-3">{cs.title}</h3>
                <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed">{cs.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors no-underline">
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const faqs = [
  {
    q: 'How do you find and verify suppliers?',
    a: 'We maintain a database of over 2,000 verified suppliers across China. For new suppliers, we conduct on-site factory audits covering business licenses, production capacity, quality management systems, and worker conditions. We also check references from existing clients.',
  },
  {
    q: 'What does your quality inspection process include?',
    a: 'We offer three types of inspections: pre-production (checking raw materials and components), during-production (monitoring production quality at key milestones), and pre-shipment (final inspection before goods leave the factory). Each inspection includes detailed photo and video documentation.',
  },
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our pricing depends on the complexity and scope of your project. We offer free initial consultations and quotes. There are no hidden fees — we provide transparent pricing upfront so you know exactly what to expect.',
  },
  {
    q: 'Can you handle small order quantities?',
    a: 'Yes, we work with buyers of all sizes. While minimum order quantities vary by product and supplier, we can often negotiate lower MOQs for new buyers looking to test the market before scaling up.',
  },
  {
    q: 'How long does the sourcing process typically take?',
    a: 'Timelines vary by product and order complexity. Supplier sourcing and verification typically takes 1-2 weeks. Sample development takes 2-4 weeks. Production timelines depend on order size and product type. We provide detailed timelines at the start of each project.',
  },
  {
    q: 'Do you provide after-sales support?',
    a: 'Yes, we provide ongoing support including warranty claim management, re-order coordination, and supplier relationship management. We aim to be your long-term sourcing partner in China.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
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
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product_description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      await submitSourcingInquiry(values);
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Sourcing from China?</h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              Tell us about your product requirements and we will provide a free sourcing assessment within 24 hours.
            </p>
            <ul className="space-y-3">
              {[
                'Free initial consultation and feasibility assessment',
                'No commitment required — explore your options',
                'Response within 24 business hours',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-blue-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">Your inquiry has been received. Our team will contact you within 24 business hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get a Free Sourcing Quote</h3>
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-3 mb-4">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input type="text" name="name" required value={values.name} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-900" placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input type="text" name="company" value={values.company} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-900" placeholder="Your Company" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input type="email" name="email" required value={values.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-900" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input type="tel" name="phone" value={values.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-900" placeholder="+1 234 567 890" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Description *</label>
                    <textarea name="product_description" rows={4} required value={values.product_description} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none text-gray-900" placeholder="Describe the product you want to source, including specifications, quantity, and target price..." />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Submitting...' : 'Submit Your Inquiry'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => (
  <>
    <HeroSection />
    <TrustSection />
    <ServicesSection />
    <ProcessSection />
    <ProductsSection />
    <ProblemsSection />
    <CaseStudiesSection />
    <FAQSection />
    <InquirySection />
  </>
);

export default Home;
