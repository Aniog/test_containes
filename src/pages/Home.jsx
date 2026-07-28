import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { submitSourcingInquiry } from '../api/inquiries.js';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, Users, Globe, Award, ArrowRight,
  ChevronDown, ChevronUp, Package, Cpu, Shirt,
  Wrench, Sofa, Lightbulb
} from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-primary-light overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
              Trusted China Sourcing Partner
            </p>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg text-neutral-700 leading-relaxed mb-8 max-w-lg">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can buy with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-accent text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-accent-dark transition-colors text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center border-2 border-primary text-primary font-semibold px-7 py-3.5 rounded-lg hover:bg-primary hover:text-white transition-colors text-base"
              >
                How It Works
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              data-strk-img-id="hero-factory-img-4b8e1d"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="China factory sourcing"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified manufacturers matching your product specs, MOQ, and budget requirements.',
    titleId: 'svc-supplier-sourcing-title',
    descId: 'svc-supplier-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify production capacity, certifications, equipment, and business legitimacy.',
    titleId: 'svc-factory-verification-title',
    descId: 'svc-factory-verification-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and container loading inspections following AQL standards.',
    titleId: 'svc-quality-inspection-title',
    descId: 'svc-quality-inspection-desc',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'Regular factory visits and progress reports to keep your order on schedule and within spec.',
    titleId: 'svc-production-followup-title',
    descId: 'svc-production-followup-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight coordination including customs documentation, consolidation, and door-to-door delivery.',
    titleId: 'svc-shipping-coordination-title',
    descId: 'svc-shipping-coordination-desc',
  },
  {
    id: 'negotiation',
    icon: Users,
    title: 'Price Negotiation',
    desc: 'Leverage our local market knowledge to negotiate better pricing, payment terms, and MOQ reductions.',
    titleId: 'svc-negotiation-title',
    descId: 'svc-negotiation-desc',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
            End-to-End Sourcing Services
          </h2>
          <p className="mt-4 text-neutral-500 max-w-2xl mx-auto">
            From finding the right supplier to delivering goods at your door — we handle every step of the China sourcing process.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 id={svc.titleId} className="text-lg font-semibold text-neutral-900 mb-2">
                  {svc.title}
                </h3>
                <p id={svc.descId} className="text-neutral-500 text-sm leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const processSteps = [
  { step: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { step: '02', title: 'Supplier Shortlisting', desc: 'We research and shortlist 3-5 verified suppliers that match your criteria.' },
  { step: '03', title: 'Samples & Negotiation', desc: 'We arrange samples, negotiate pricing, and finalize terms on your behalf.' },
  { step: '04', title: 'Production Monitoring', desc: 'We visit the factory during production to ensure quality and schedule compliance.' },
  { step: '05', title: 'Quality Inspection', desc: 'Professional QC inspection before shipment with detailed photo reports.' },
  { step: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics and documentation for smooth customs clearance.' },
];

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
            How We Work With You
          </h2>
          <p className="mt-4 text-neutral-500 max-w-2xl mx-auto">
            A transparent, step-by-step process designed to minimize risk and maximize value for your sourcing projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {processSteps.map((item) => (
            <div key={item.step} className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8">
              <span className="text-3xl font-bold text-primary opacity-60">{item.step}</span>
              <h3 className="text-lg font-semibold text-neutral-900 mt-3 mb-2">{item.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const productCategories = [
  { id: 'electronics', icon: Cpu, title: 'Electronics & Components', titleId: 'prod-electronics-title' },
  { id: 'textiles', icon: Shirt, title: 'Textiles & Apparel', titleId: 'prod-textiles-title' },
  { id: 'hardware', icon: Wrench, title: 'Hardware & Tools', titleId: 'prod-hardware-title' },
  { id: 'furniture', icon: Sofa, title: 'Furniture & Home', titleId: 'prod-furniture-title' },
  { id: 'packaging', icon: Package, title: 'Packaging & Printing', titleId: 'prod-packaging-title' },
  { id: 'lighting', icon: Lightbulb, title: 'Lighting & Electrical', titleId: 'prod-lighting-title' },
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
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Industries</p>
          <h2 id="products-section-title" className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
            Products We Source
          </h2>
          <p className="mt-4 text-neutral-500 max-w-2xl mx-auto">
            We source across a wide range of product categories from China's manufacturing hubs.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {productCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="bg-neutral-50 rounded-xl border border-neutral-200 p-5 text-center hover:border-primary hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 id={cat.titleId} className="text-sm font-semibold text-neutral-900">
                  {cat.title}
                </h3>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/products"
            className="inline-flex items-center text-primary font-semibold text-sm hover:text-primary-dark transition-colors"
          >
            View All Product Categories
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const problems = [
  'Unreliable suppliers who disappear after payment',
  'Quality issues discovered only after goods arrive',
  'Communication barriers and timezone differences',
  'Overpaying due to lack of local market knowledge',
  'Shipping delays and customs complications',
  'No visibility into production progress',
];

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary-light font-semibold text-sm uppercase tracking-wide mb-2">Why You Need Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              Problems We Solve
            </h2>
            <p className="text-primary-light text-base leading-relaxed mb-8">
              Sourcing from China without a local partner exposes your business to significant risks. We eliminate these common pain points.
            </p>
            <ul className="space-y-4">
              {problems.map((problem, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-white text-sm">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">500+</p>
                  <p className="text-primary-light text-sm mt-1">Verified Suppliers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">12+</p>
                  <p className="text-primary-light text-sm mt-1">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">30+</p>
                  <p className="text-primary-light text-sm mt-1">Countries Served</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">98%</p>
                  <p className="text-primary-light text-sm mt-1">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const trustPoints = [
  { icon: Globe, title: 'Based in China', desc: 'Our team is on the ground in major manufacturing hubs — Guangzhou, Shenzhen, Yiwu, and Ningbo.' },
  { icon: ShieldCheck, title: 'Verified Suppliers Only', desc: 'Every supplier we recommend has passed our multi-point verification process.' },
  { icon: Award, title: 'Transparent Pricing', desc: 'No hidden fees. You see the factory price and our service fee separately.' },
  { icon: Users, title: 'Dedicated Project Manager', desc: 'One point of contact who speaks your language and understands your market.' },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
            Built on Trust & Transparency
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-neutral-900 mb-2">{point.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{point.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const caseStudies = [
  {
    id: 'case-electronics',
    title: 'LED Lighting for European Distributor',
    category: 'Electronics',
    result: '35% cost reduction with same quality standards',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
    imgId: 'case-electronics-img-9d4f2a',
  },
  {
    id: 'case-furniture',
    title: 'Custom Furniture for US Retailer',
    category: 'Furniture',
    result: 'Delivered 2,000 units on time with zero defects',
    titleId: 'case-furniture-title',
    descId: 'case-furniture-desc',
    imgId: 'case-furniture-img-3e7b1c',
  },
  {
    id: 'case-textiles',
    title: 'Sportswear Line for Australian Brand',
    category: 'Textiles',
    result: 'Found certified factory meeting OEKO-TEX standards',
    titleId: 'case-textiles-title',
    descId: 'case-textiles-desc',
    imgId: 'case-textiles-img-6a2d8f',
  },
];

const CaseStudiesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Results</p>
          <h2 id="case-studies-section-title" className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
            Client Success Stories
          </h2>
          <p className="mt-4 text-neutral-500 max-w-2xl mx-auto">
            Real results from real sourcing projects we've managed for clients worldwide.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
              <img
                data-strk-img-id={cs.imgId}
                data-strk-img={`[${cs.descId}] [${cs.titleId}] [case-studies-section-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cs.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">{cs.category}</span>
                <h3 id={cs.titleId} className="text-base font-semibold text-neutral-900 mt-2 mb-2">{cs.title}</h3>
                <p id={cs.descId} className="text-neutral-500 text-sm">{cs.result}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-primary font-semibold text-sm hover:text-primary-dark transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const faqItems = [
  {
    q: 'What is the minimum order quantity (MOQ) for sourcing?',
    a: 'MOQ varies by product and supplier. We work with factories that accept orders from as low as 100-500 units for many product categories. We can negotiate MOQ reductions for new clients.',
  },
  {
    q: 'How do you charge for your services?',
    a: 'We offer transparent pricing with a service fee based on order value (typically 5-10%). There are no hidden costs — you see the factory price and our fee separately.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Initial supplier shortlisting takes 5-7 business days. The full process from inquiry to shipment typically takes 4-8 weeks depending on product complexity and order size.',
  },
  {
    q: 'Can you handle small orders or samples?',
    a: 'Yes. We help clients start with sample orders to verify quality before committing to larger production runs. Sample costs are typically covered by the buyer.',
  },
  {
    q: 'What if there are quality issues with my order?',
    a: 'Our pre-shipment inspection catches issues before goods leave China. If problems are found, we work with the factory to resolve them — whether that means rework, replacement, or refund negotiation.',
  },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer"
              >
                <span className="text-sm font-semibold text-neutral-900 pr-4">{item.q}</span>
                {openIdx === idx ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                )}
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-5">
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.a}</p>
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setStatus('submitting');

    try {
      await submitSourcingInquiry({
        full_name: formData.name,
        email: formData.email,
        company_name: formData.company,
        product_description: formData.product,
        estimated_quantity: formData.quantity,
        additional_details: formData.message,
      });

      setStatus('success');
      setFormData({ name: '', email: '', company: '', product: '', quantity: '', message: '' });
    } catch (err) {
      console.error('Inquiry submission failed:', err);
      setError(err.message || 'Submission failed. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-6">
              Tell us about your sourcing needs and we'll get back to you within 24 hours with a tailored plan and cost estimate.
            </p>
            <ul className="space-y-3 text-sm text-neutral-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                No commitment required
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Response within 24 hours
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Free initial supplier research
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Transparent pricing — no hidden fees
              </li>
            </ul>
          </div>
          <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Product *</label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="e.g. LED panel lights"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="e.g. 1,000 units"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell us more about your requirements..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'}
              </button>

              {status === 'success' && (
                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm font-medium flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Thank you! We will get back to you within 24 hours.
                  </p>
                </div>
              )}

              {status === 'error' && error && (
                <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm font-medium">{error}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquirySection />
    </div>
  );
};

export default Home;
