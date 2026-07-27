import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, CheckCircle2,
  ArrowRight, Star, Users, Globe, Package, Headphones, TrendingUp,
  AlertTriangle, Clock, DollarSign, HelpCircle, ChevronDown
} from 'lucide-react';
import { useState } from 'react';

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
      {/* Hero Section */}
      <section className="relative bg-brand-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brand-navy transition-colors"
              >
                How It Works
              </Link>
            </div>
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                500+ Verified Suppliers
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                12+ Years Experience
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                30+ Countries Served
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
              End-to-End Sourcing Services
            </h2>
            <p id="services-subtitle" className="mt-4 text-brand-gray text-lg">
              From finding the right supplier to delivering goods at your door — we manage every step of your China sourcing journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">{service.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center text-brand-blue font-semibold hover:text-brand-navy transition-colors">
              View All Services <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
              Our Sourcing Process
            </h2>
            <p id="process-subtitle" className="mt-4 text-brand-gray text-lg">
              A clear, structured approach to sourcing from China — no guesswork, no surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative text-center">
                <div className="w-16 h-16 bg-brand-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{step.title}</h3>
                <p className="text-brand-gray text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-brand-blue font-semibold hover:text-brand-navy transition-colors"
            >
              Learn More About Our Process <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
              Products We Source
            </h2>
            <p id="products-subtitle" className="mt-4 text-brand-gray text-lg">
              We source across a wide range of industries. If it's made in China, we can find it for you.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {productCategories.map((cat) => (
              <div key={cat.id} className="relative rounded-xl overflow-hidden group cursor-pointer">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.titleId}] [products-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <span id={cat.titleId} className="text-white font-semibold text-sm md:text-base">{cat.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center text-brand-blue font-semibold hover:text-brand-navy transition-colors">
              See All Product Categories <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 id="problems-title" className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
              Problems We Solve
            </h2>
            <p id="problems-subtitle" className="mt-4 text-brand-gray text-lg">
              Sourcing from China comes with real challenges. Here's how we address them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem) => (
              <div key={problem.id} className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-1">{problem.problem}</h3>
                    <p className="text-brand-gray text-sm mb-3">{problem.pain}</p>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-brand-dark font-medium">{problem.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 id="trust-title" className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
              Why Buyers Trust Us
            </h2>
            <p id="trust-subtitle" className="mt-4 text-brand-gray text-lg">
              We earn trust through transparency, results, and consistent communication.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point) => (
              <div key={point.id} className="text-center p-6">
                <div className="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  {point.icon}
                </div>
                <div className="text-3xl font-bold text-brand-navy mb-1">{point.stat}</div>
                <div className="text-brand-gray text-sm">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 id="cases-title" className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
              Client Success Stories
            </h2>
            <p id="cases-subtitle" className="mt-4 text-brand-gray text-lg">
              Real results from real sourcing projects we've managed for clients worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <img
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}] [cases-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cs.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6">
                  <span className="text-xs font-medium text-brand-orange uppercase tracking-wide">{cs.category}</span>
                  <h3 id={cs.titleId} className="text-lg font-semibold text-brand-dark mt-1 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-brand-gray text-sm">{cs.description}</p>
                  <div className="mt-4 text-sm font-medium text-brand-green">{cs.result}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center text-brand-blue font-semibold hover:text-brand-navy transition-colors">
              View All Case Studies <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
              Frequently Asked Questions
            </h2>
            <p id="faq-subtitle" className="mt-4 text-brand-gray text-lg">
              Common questions from buyers considering a China sourcing agent.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-brand-dark pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-gray flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-brand-gray text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Inquiry Form */}
      <section className="py-16 md:py-24 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-title" className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Source from China?
          </h2>
          <p id="cta-subtitle" className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Tell us what you need. We'll research suppliers, get quotes, and send you a sourcing plan — free of charge.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <p className="mt-4 text-gray-400 text-sm">No commitment required. Response within 24 hours.</p>
        </div>
      </section>
    </div>
  );
};

// Data
const services = [
  { id: 'supplier-sourcing', icon: <Search className="w-6 h-6 text-brand-blue" />, title: 'Supplier Sourcing', description: 'We identify and shortlist qualified manufacturers based on your product specs, MOQ, budget, and certification requirements.' },
  { id: 'factory-verification', icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />, title: 'Factory Verification', description: 'On-site factory audits to verify production capacity, certifications, working conditions, and business legitimacy.' },
  { id: 'quality-inspection', icon: <ClipboardCheck className="w-6 h-6 text-brand-blue" />, title: 'Quality Inspection', description: 'Pre-production, during-production, and pre-shipment inspections following AQL standards to ensure product quality.' },
  { id: 'production-followup', icon: <Factory className="w-6 h-6 text-brand-blue" />, title: 'Production Follow-up', description: 'Regular factory visits and progress reports so you always know the status of your order.' },
  { id: 'shipping-coordination', icon: <Ship className="w-6 h-6 text-brand-blue" />, title: 'Shipping & Logistics', description: 'We coordinate freight forwarding, customs documentation, and delivery to your warehouse or port.' },
  { id: 'negotiation', icon: <DollarSign className="w-6 h-6 text-brand-blue" />, title: 'Price Negotiation', description: 'Leverage our local market knowledge and supplier relationships to get you the best possible pricing.' },
];

const processSteps = [
  { id: 'step-1', title: 'Share Your Requirements', description: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { id: 'step-2', title: 'We Find Suppliers', description: 'We research, contact, and shortlist qualified factories that match your criteria.' },
  { id: 'step-3', title: 'Verify & Sample', description: 'We audit factories, negotiate terms, and arrange samples for your approval.' },
  { id: 'step-4', title: 'Produce & Ship', description: 'We monitor production, inspect quality, and coordinate shipping to your destination.' },
];

const productCategories = [
  { id: 'electronics', imgId: 'prod-electronics-d4e5f6', titleId: 'prod-cat-electronics', title: 'Electronics & Components' },
  { id: 'textiles', imgId: 'prod-textiles-g7h8i9', titleId: 'prod-cat-textiles', title: 'Textiles & Apparel' },
  { id: 'furniture', imgId: 'prod-furniture-j1k2l3', titleId: 'prod-cat-furniture', title: 'Furniture & Home' },
  { id: 'machinery', imgId: 'prod-machinery-m4n5o6', titleId: 'prod-cat-machinery', title: 'Machinery & Equipment' },
  { id: 'packaging', imgId: 'prod-packaging-p7q8r9', titleId: 'prod-cat-packaging', title: 'Packaging Materials' },
  { id: 'automotive', imgId: 'prod-automotive-s1t2u3', titleId: 'prod-cat-automotive', title: 'Auto Parts' },
  { id: 'beauty', imgId: 'prod-beauty-v4w5x6', titleId: 'prod-cat-beauty', title: 'Beauty & Personal Care' },
  { id: 'construction', imgId: 'prod-construction-y7z8a9', titleId: 'prod-cat-construction', title: 'Building Materials' },
];

const problems = [
  { id: 'p1', problem: 'Unreliable Suppliers', pain: "You found a supplier online but can't verify if they're a real factory or a middleman.", solution: 'We visit factories in person and verify business licenses, production lines, and export history.' },
  { id: 'p2', problem: 'Quality Issues', pain: 'Products arrive damaged, off-spec, or different from samples.', solution: 'We conduct multi-stage inspections (pre-production, inline, pre-shipment) using AQL standards.' },
  { id: 'p3', problem: 'Communication Barriers', pain: 'Language gaps and time zones make it hard to manage suppliers effectively.', solution: 'Our bilingual team communicates daily with your suppliers and provides you with clear English reports.' },
  { id: 'p4', problem: 'Shipping Complications', pain: 'Customs delays, wrong documentation, or unexpected freight costs.', solution: 'We handle all logistics paperwork, coordinate with freight forwarders, and track shipments end-to-end.' },
];

const trustPoints = [
  { id: 't1', icon: <Users className="w-7 h-7 text-brand-navy" />, stat: '500+', label: 'Verified Suppliers' },
  { id: 't2', icon: <Globe className="w-7 h-7 text-brand-navy" />, stat: '30+', label: 'Countries Served' },
  { id: 't3', icon: <Package className="w-7 h-7 text-brand-navy" />, stat: '2,000+', label: 'Orders Managed' },
  { id: 't4', icon: <Star className="w-7 h-7 text-brand-navy" />, stat: '98%', label: 'Client Satisfaction' },
];

const caseStudies = [
  { id: 'cs1', imgId: 'case-furniture-b2c3d4', titleId: 'case-1-title', descId: 'case-1-desc', category: 'Furniture', title: 'Custom Furniture for European Retailer', description: 'Sourced and quality-managed a 40ft container of custom oak furniture for a German home goods brand.', result: '35% cost savings vs. previous supplier' },
  { id: 'cs2', imgId: 'case-electronics-e5f6g7', titleId: 'case-2-title', descId: 'case-2-desc', category: 'Electronics', title: 'LED Lighting for US Distributor', description: 'Found a certified LED manufacturer, managed sampling, and coordinated monthly shipments.', result: 'Zero defects across 12 shipments' },
  { id: 'cs3', imgId: 'case-textiles-h8i9j1', titleId: 'case-3-title', descId: 'case-3-desc', category: 'Textiles', title: 'Private Label Sportswear', description: 'Helped an Australian brand develop and produce a private label activewear line from scratch.', result: 'From concept to delivery in 8 weeks' },
];

const faqs = [
  { question: 'What is a China sourcing agent?', answer: 'A China sourcing agent is a professional or company based in China that helps overseas buyers find suppliers, negotiate prices, verify factories, inspect quality, and manage logistics. We act as your local representative on the ground.' },
  { question: 'How much does your service cost?', answer: 'Our fees depend on the scope of work. Typically, we charge a service fee based on order value (usually 3-8%) or a fixed project fee. We provide a clear quote before starting any work.' },
  { question: 'What is your minimum order requirement?', answer: "We don't have a fixed minimum, but most factories require MOQs. We can help you find suppliers that match your volume needs, whether it's a small trial order or a large production run." },
  { question: 'How do you verify suppliers?', answer: 'We conduct on-site factory visits, check business licenses, review production capabilities, inspect quality management systems, and verify export history and certifications.' },
  { question: 'How long does the sourcing process take?', answer: 'A typical sourcing project takes 2-4 weeks from requirement to supplier shortlist. Sampling adds 1-3 weeks. Total time from inquiry to first shipment is usually 6-12 weeks depending on product complexity.' },
  { question: 'Can you help with small orders or samples?', answer: 'Yes. We can arrange sample orders and help you test suppliers before committing to larger volumes. This is actually what we recommend for new sourcing relationships.' },
];

export default Home;
