import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship,
  CheckCircle, Users, Globe, Award, ArrowRight,
  Package, Cpu, Shirt, Wrench, Sofa, Lightbulb,
  AlertTriangle, HelpCircle, ChevronDown, ChevronUp
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
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <CaseStudiesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-6">
              Trusted by 500+ Global Buyers
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can buy with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-orange text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-orange-dark transition-colors text-center"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-navy text-navy px-6 py-3.5 rounded-lg font-semibold hover:bg-navy hover:text-white transition-colors text-center"
              >
                See How It Works
              </Link>
            </div>
          </div>
          <div className="relative">
            <div
              className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-100"
              data-strk-bg-id="hero-bg-7a3f2c"
              data-strk-bg="[hero-subtitle] [hero-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Global Clients' },
    { icon: Factory, value: '2,000+', label: 'Factories Verified' },
    { icon: Globe, value: '35+', label: 'Countries Served' },
    { icon: Award, value: '10+', label: 'Years Experience' },
  ];

  return (
    <section className="bg-navy py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-6 h-6 text-orange mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-slate-300 mt-1">{stat.label}</div>
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
      desc: 'We identify and shortlist qualified suppliers based on your product specs, MOQ, budget, and certification requirements.',
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
      desc: 'Regular production monitoring to ensure timelines, specs, and quality standards are met throughout manufacturing.',
    },
    {
      id: 'shipping-coordination',
      icon: Ship,
      title: 'Shipping & Logistics',
      desc: 'End-to-end shipping coordination including freight booking, customs documentation, and delivery tracking.',
    },
    {
      id: 'negotiation',
      icon: Users,
      title: 'Price Negotiation',
      desc: 'Leverage our local market knowledge to negotiate better pricing, payment terms, and MOQ reductions.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            End-to-End Sourcing Support
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From finding the right supplier to delivering goods at your door — we handle every step of the China sourcing process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-light transition-colors">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { step: '01', title: 'Submit Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
    { step: '02', title: 'Supplier Matching', desc: 'We research and shortlist 3-5 verified suppliers that match your criteria.' },
    { step: '03', title: 'Samples & Negotiation', desc: 'We arrange samples, negotiate pricing, and finalize terms on your behalf.' },
    { step: '04', title: 'Production & QC', desc: 'We monitor production progress and conduct quality inspections at key stages.' },
    { step: '05', title: 'Shipping & Delivery', desc: 'We coordinate logistics and ensure your goods arrive safely and on time.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Our Sourcing Process
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A clear, structured approach to sourcing from China — no guesswork, no surprises.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((item, idx) => (
            <div key={item.step} className="relative text-center">
              <div className="w-14 h-14 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange font-bold text-lg">{item.step}</span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-px bg-slate-200" />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/how-it-works" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-light transition-colors">
            Learn More About Our Process <ArrowRight className="w-4 h-4" />
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
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-4">
            Products We Source
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Wide Range of Product Categories
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We source across major manufacturing categories in China. If it's made in China, we can help you find it.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white rounded-xl border border-slate-200 p-5 text-center hover:shadow-md transition-shadow">
              <cat.icon className="w-8 h-8 text-navy mx-auto mb-3" />
              <span className="text-sm font-medium text-slate-700">{cat.name}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-light transition-colors">
            See All Product Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProblemsSection = () => {
  const problems = [
    { icon: AlertTriangle, problem: 'Unreliable suppliers', solution: 'We verify every factory on-site before recommending them.' },
    { icon: AlertTriangle, problem: 'Quality inconsistency', solution: 'Multi-stage inspections ensure your specs are met every time.' },
    { icon: AlertTriangle, problem: 'Communication barriers', solution: 'Our bilingual team bridges the language and culture gap.' },
    { icon: AlertTriangle, problem: 'Shipping delays', solution: 'Proactive logistics management keeps your timeline on track.' },
    { icon: AlertTriangle, problem: 'Overpaying for products', solution: 'Local market knowledge helps you get fair, competitive pricing.' },
    { icon: AlertTriangle, problem: 'Scams and fraud', solution: 'Background checks and verified supplier networks protect your investment.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-4">
            Problems We Solve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Common Sourcing Challenges
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sourcing from China comes with real risks. Here's how we address the most common ones.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => (
            <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-red-500" />
                </div>
                <span className="text-sm font-semibold text-slate-900">{item.problem}</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm text-slate-600">{item.solution}</span>
              </div>
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
      title: 'Electronics Accessories for EU Retailer',
      desc: 'Sourced and verified 3 factories for a European electronics brand. Reduced unit cost by 22% while maintaining CE certification compliance.',
      result: '22% cost reduction',
      titleId: 'case-electronics-title',
      descId: 'case-electronics-desc',
      imgId: 'case-electronics-img-4b2e1a',
    },
    {
      id: 'case-furniture',
      title: 'Custom Furniture for US Importer',
      desc: 'Managed production of 2,000 custom furniture units with 3 quality inspections. Zero defects on final delivery.',
      result: '0% defect rate',
      titleId: 'case-furniture-title',
      descId: 'case-furniture-desc',
      imgId: 'case-furniture-img-9c7d3f',
    },
    {
      id: 'case-apparel',
      title: 'Apparel Line for Australian Brand',
      desc: 'Coordinated sampling, production, and shipping for a 10,000-piece apparel order across 2 factories in Guangdong.',
      result: 'On-time delivery',
      titleId: 'case-apparel-title',
      descId: 'case-apparel-desc',
      imgId: 'case-apparel-img-6e8a2b',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Real Results for Real Buyers
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how we've helped businesses source successfully from China.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <h3 id={item.titleId} className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p id={item.descId} className="text-sm text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                <span className="inline-block bg-green-50 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                  {item.result}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-light transition-colors">
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: 'What is the minimum order quantity (MOQ)?',
      a: 'MOQ varies by product and supplier. We work with factories that accommodate both small trial orders (100-500 units) and large-scale production runs.',
    },
    {
      q: 'How do you verify suppliers?',
      a: 'We conduct on-site factory audits checking business licenses, production capacity, equipment, worker conditions, and past export records.',
    },
    {
      q: 'What are your service fees?',
      a: 'Our fees depend on the scope of service. We offer transparent pricing with no hidden costs. Contact us for a custom quote based on your project.',
    },
    {
      q: 'How long does the sourcing process take?',
      a: 'Typically 2-4 weeks for supplier identification and verification. Full production timelines depend on product complexity and order size.',
    },
    {
      q: 'Do you handle shipping and customs?',
      a: 'Yes, we coordinate the entire logistics chain including freight booking, export documentation, and customs clearance support.',
    },
  ];

  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer"
              >
                <span className="text-sm font-semibold text-slate-900 pr-4">{faq.q}</span>
                {openIdx === idx ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-5">
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

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
          Tell us what you're looking for and get a free sourcing plan within 48 hours. No commitment required.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-dark transition-colors"
        >
          Get a Free Sourcing Quote
        </Link>
      </div>
    </section>
  );
};

export default Home;
