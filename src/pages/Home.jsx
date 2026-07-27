import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, Users, Globe, Award, ArrowRight,
  Package, Headphones, BarChart3, AlertTriangle,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { useState } from 'react';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <ProcessSection />
      <ProductsPreview />
      <ProblemsWeSolve />
      <CaseStudiesPreview />
      <FAQSection />
      <CTASection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative bg-brand-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-main-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <p className="text-brand-blue font-semibold text-sm uppercase tracking-wider mb-4">
            Trusted Sourcing Partner Since 2015
          </p>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
            We help overseas businesses find reliable Chinese suppliers, verify factories, 
            inspect quality, follow production, and coordinate shipping — so you can import with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-brand-blue text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition no-underline"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center border-2 border-gray-400 text-white px-8 py-4 rounded-lg text-base font-semibold hover:border-white transition no-underline"
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
    { value: '500+', label: 'Verified Suppliers' },
    { value: '1,200+', label: 'Projects Completed' },
    { value: '35+', label: 'Countries Served' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-brand-navy">{stat.value}</p>
              <p className="text-sm text-brand-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesOverview = () => {
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
      icon: Truck,
      title: 'Shipping & Logistics',
      desc: 'End-to-end freight coordination including customs documentation, consolidation, and door-to-door delivery.',
    },
    {
      id: 'ongoing-support',
      icon: Headphones,
      title: 'Ongoing Support',
      desc: 'Dedicated account manager for communication, negotiation, and issue resolution throughout your project.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            End-to-End Sourcing Services
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            From finding the right supplier to delivering goods at your door — we manage every step of the China sourcing process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-brand-border p-6 hover:shadow-md transition"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">{service.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center text-brand-blue font-semibold hover:underline no-underline"
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
    { num: '02', title: 'We Find Suppliers', desc: 'Our team identifies and vets potential factories based on your criteria.' },
    { num: '03', title: 'Samples & Negotiation', desc: 'We arrange samples, negotiate pricing, and finalize terms on your behalf.' },
    { num: '04', title: 'Production & QC', desc: 'We monitor production progress and conduct quality inspections at key stages.' },
    { num: '05', title: 'Shipping & Delivery', desc: 'We coordinate logistics and documentation for smooth customs clearance and delivery.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            How Our Sourcing Process Works
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            A clear, structured approach that keeps you informed and in control at every stage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center p-6">
              <div className="text-4xl font-bold text-brand-blue/20 mb-2">{step.num}</div>
              <h3 className="text-base font-semibold text-brand-navy mb-2">{step.title}</h3>
              <p className="text-sm text-brand-muted">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 translate-x-1/2">
                  <ArrowRight className="w-5 h-5 text-brand-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductsPreview = () => {
  const categories = [
    { id: 'electronics', title: 'Electronics & Components', titleId: 'prod-electronics-title' },
    { id: 'textiles', title: 'Textiles & Apparel', titleId: 'prod-textiles-title' },
    { id: 'furniture', title: 'Furniture & Home Goods', titleId: 'prod-furniture-title' },
    { id: 'machinery', title: 'Machinery & Equipment', titleId: 'prod-machinery-title' },
    { id: 'packaging', title: 'Packaging & Printing', titleId: 'prod-packaging-title' },
    { id: 'auto-parts', title: 'Auto Parts & Accessories', titleId: 'prod-autoparts-title' },
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            Products We Source
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            We source across a wide range of industries. If it's made in China, we can help you find it.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-xl border border-brand-border p-4 text-center hover:shadow-md transition"
            >
              <div className="w-16 h-16 mx-auto mb-3 rounded-lg overflow-hidden">
                <img
                  data-strk-img-id={`prod-cat-${cat.id}-a1b2c3`}
                  data-strk-img={`[${cat.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p id={cat.titleId} className="text-xs font-medium text-brand-navy">{cat.title}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center text-brand-blue font-semibold hover:underline no-underline"
          >
            See All Product Categories <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProblemsWeSolve = () => {
  const problems = [
    { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'We pre-vet every factory so you avoid scams, delays, and quality failures.' },
    { icon: Globe, title: 'Language & Culture Barriers', desc: 'Our bilingual team bridges communication gaps and prevents misunderstandings.' },
    { icon: Package, title: 'Quality Inconsistency', desc: 'Systematic inspections at every stage ensure your products meet specifications.' },
    { icon: BarChart3, title: 'Hidden Costs & Overcharges', desc: 'Transparent pricing and skilled negotiation protect your margins.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            Problems We Solve
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Sourcing from China comes with real challenges. Here's how we address them.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <div key={i} className="flex gap-4 p-6 bg-brand-light rounded-xl border border-brand-border">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-navy mb-1">{item.title}</h3>
                <p className="text-brand-muted text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudiesPreview = () => {
  const cases = [
    {
      id: 'case-electronics',
      title: 'Electronics Retailer Saves 30% on Component Costs',
      desc: 'Helped a US-based electronics company find verified PCB manufacturers, reducing unit costs while maintaining quality standards.',
      industry: 'Electronics',
      titleId: 'case-electronics-title',
      descId: 'case-electronics-desc',
      imgId: 'case-electronics-img-d4e5f6',
    },
    {
      id: 'case-furniture',
      title: 'Furniture Brand Launches New Product Line',
      desc: 'Sourced custom furniture manufacturers for an Australian brand, managing sampling through to container loading.',
      industry: 'Furniture',
      titleId: 'case-furniture-title',
      descId: 'case-furniture-desc',
      imgId: 'case-furniture-img-g7h8i9',
    },
    {
      id: 'case-apparel',
      title: 'Apparel Company Scales Production 5x',
      desc: 'Identified and verified garment factories for a UK fashion brand, enabling rapid scaling without quality compromise.',
      industry: 'Apparel',
      titleId: 'case-apparel-title',
      descId: 'case-apparel-desc',
      imgId: 'case-apparel-img-j1k2l3',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            Client Success Stories
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Real results from real sourcing projects we've managed for clients worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-md transition">
              <div className="h-48 overflow-hidden">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-brand-blue bg-blue-50 px-2 py-1 rounded">
                  {item.industry}
                </span>
                <h3 id={item.titleId} className="text-base font-semibold text-brand-navy mt-3 mb-2">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-sm text-brand-muted">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-brand-blue font-semibold hover:underline no-underline"
          >
            View All Case Studies <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: 'What is a China sourcing agent?',
      a: 'A sourcing agent acts as your local representative in China. We find suppliers, negotiate prices, verify factories, inspect quality, and coordinate shipping on your behalf — saving you time, money, and risk.',
    },
    {
      q: 'How much does your service cost?',
      a: 'Our fees depend on the scope of work. Typically we charge a service fee based on order value or a fixed project fee. We provide a detailed quote after understanding your requirements — no hidden costs.',
    },
    {
      q: 'What is your minimum order requirement?',
      a: 'We work with orders of all sizes, though most factories have their own MOQs (Minimum Order Quantities). We help you find suppliers whose MOQs match your needs.',
    },
    {
      q: 'How do you verify suppliers?',
      a: 'We conduct on-site factory audits checking business licenses, production capacity, equipment, worker conditions, certifications, and past export experience. We provide detailed audit reports with photos.',
    },
    {
      q: 'Can you help with product customization?',
      a: 'Yes. We work with factories on custom designs, materials, packaging, and branding. We manage the sampling process until you approve the final product.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-muted text-lg">
            Common questions about working with a China sourcing agent.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-brand-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition border-none cursor-pointer"
              >
                <span className="text-base font-medium text-brand-navy pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-brand-muted flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-brand-muted flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-brand-muted leading-relaxed">{faq.a}</p>
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
    <section className="py-16 md:py-24 bg-brand-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Ready to Source from China?
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Tell us what you're looking for and get a free, no-obligation sourcing quote within 24 hours.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center bg-brand-blue text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition no-underline"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default Home;
