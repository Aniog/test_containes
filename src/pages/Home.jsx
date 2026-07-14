import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, ArrowRight, Star, Users, Package, Globe,
  AlertTriangle, TrendingUp, Clock, ChevronRight
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, MOQ, and budget requirements.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits to confirm factory capabilities, certifications, production capacity, and compliance standards.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections following AQL standards to catch defects before goods leave the factory.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'Regular updates and milestone checks during production to keep your order on schedule and on spec.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and track shipments to your destination.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Globe,
    title: 'Trade Compliance',
    desc: 'Guidance on import regulations, labeling requirements, and product certifications for your target market.',
    titleId: 'svc-trade-title',
    descId: 'svc-trade-desc',
    imgId: 'svc-trade-img-p7q8r9',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, quantity, and target price. No commitment required.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our verified network and identify 3–5 qualified manufacturers that match your requirements.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify capabilities, certifications, and production standards.' },
  { num: '04', title: 'Sample & Negotiation', desc: 'We arrange samples, review quality, and negotiate pricing and terms on your behalf.' },
  { num: '05', title: 'Production Oversight', desc: 'We monitor production milestones and conduct in-line inspections to ensure compliance.' },
  { num: '06', title: 'QC & Shipment', desc: 'Pre-shipment inspection, export documentation, and shipping coordination to your destination.' },
];

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Factories that look good online but fail to deliver on quality or deadlines.' },
  { icon: Clock, title: 'Production Delays', desc: 'Orders that run weeks late with no clear communication from the factory.' },
  { icon: Package, title: 'Quality Defects', desc: 'Goods that arrive with defects, wrong specs, or missing components.' },
  { icon: TrendingUp, title: 'Overpaying', desc: 'Paying above-market prices because you lack local knowledge and negotiation leverage.' },
];

const trustPoints = [
  { value: '500+', label: 'Sourcing Projects Completed' },
  { value: '12+', label: 'Years in China Sourcing' },
  { value: '98%', label: 'Client Satisfaction Rate' },
  { value: '30+', label: 'Product Categories Covered' },
];

const caseStudies = [
  {
    id: 'electronics-buyer',
    category: 'Electronics',
    title: 'US Electronics Importer Reduces Defect Rate by 60%',
    desc: 'A California-based electronics distributor was receiving shipments with a 12% defect rate. We implemented in-line QC and pre-shipment inspections, reducing defects to under 5%.',
    result: '60% defect reduction',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-s1t2u3',
  },
  {
    id: 'furniture-buyer',
    category: 'Furniture',
    title: 'UK Furniture Brand Cuts Sourcing Time by 40%',
    desc: 'A London furniture startup needed verified wood furniture suppliers with FSC certification. We identified and audited 4 factories within 3 weeks, saving months of research.',
    result: '40% faster sourcing',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-v4w5x6',
  },
  {
    id: 'apparel-buyer',
    category: 'Apparel',
    title: 'Australian Apparel Brand Achieves Consistent Quality',
    desc: 'An Australian fashion label struggled with inconsistent sizing and fabric quality across orders. Our production follow-up and AQL inspections brought consistency to every batch.',
    result: 'Consistent quality across 8 orders',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work — sourcing only, inspection only, or full-service management. We offer a free initial consultation and quote. Most clients find our fees are offset by better pricing and fewer quality issues.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established importers managing multiple product lines. We adapt our service to your volume and budget.',
  },
  {
    q: 'How do you verify that a factory is reliable?',
    a: 'We conduct on-site factory audits covering production capacity, equipment, workforce, certifications, quality management systems, and past client references. We do not rely on online profiles alone.',
  },
  {
    q: 'Which product categories do you cover?',
    a: 'We source across 30+ categories including electronics, furniture, apparel, toys, hardware, packaging, and more. If you have a specific product in mind, contact us and we will confirm whether we can help.',
  },
  {
    q: 'Can you help if I already have a supplier?',
    a: 'Yes. We can audit your existing supplier, conduct quality inspections, manage production follow-up, or coordinate shipping — even if you found the factory yourself.',
  },
];

const products = [
  'Electronics & Components', 'Furniture & Home Goods', 'Apparel & Textiles',
  'Toys & Baby Products', 'Hardware & Tools', 'Packaging Materials',
  'Sporting Goods', 'Industrial Equipment', 'Cosmetics & Personal Care',
  'Food & Beverage Packaging',
];

const HomeHero = ({ containerRef }) => (
  <section
    ref={containerRef}
    className="relative bg-navy text-white overflow-hidden"
    style={{ minHeight: '580px' }}
  >
    <div
      className="absolute inset-0 opacity-20"
      data-strk-bg-id="hero-bg-main-8f2a9c"
      data-strk-bg="[hero-subtitle] [hero-title]"
      data-strk-bg-ratio="16x9"
      data-strk-bg-width="1600"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-white/90 font-medium">China-Based Sourcing Agent</span>
        </div>
        <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
          China Sourcing Agent<br />
          <span className="text-red-china">for Global Buyers</span>
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          We find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-red-china text-white px-7 py-3.5 rounded-lg font-semibold text-base hover:bg-red-china-dark transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-7 py-3.5 rounded-lg font-semibold text-base hover:bg-white/10 transition-colors"
          >
            How It Works
          </Link>
        </div>
        <div className="flex flex-wrap gap-6 mt-10">
          {trustPoints.map((tp) => (
            <div key={tp.label} className="text-center">
              <div className="text-2xl font-bold text-white">{tp.value}</div>
              <div className="text-xs text-gray-400 mt-0.5">{tp.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-red-china font-semibold text-sm uppercase tracking-wider">What We Do</span>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">End-to-End Sourcing Services</h2>
        <p className="text-text-muted max-w-2xl mx-auto text-base leading-relaxed">
          From finding the right factory to getting goods to your door, we manage every step of the China sourcing process.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc) => {
          const Icon = svc.icon;
          return (
            <div key={svc.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-slate-bg rounded-lg flex items-center justify-center mb-4 group-hover:bg-navy transition-colors">
                <Icon className="w-6 h-6 text-navy group-hover:text-white transition-colors" />
              </div>
              <h3 id={svc.titleId} className="font-semibold text-navy text-lg mb-2">{svc.title}</h3>
              <p id={svc.descId} className="text-text-muted text-sm leading-relaxed">{svc.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-navy font-semibold hover:text-red-china transition-colors"
        >
          View All Services <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

const ProblemsSection = () => (
  <section className="py-20 bg-slate-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-red-china font-semibold text-sm uppercase tracking-wider">Common Challenges</span>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Problems We Solve for Importers</h2>
        <p className="text-text-muted max-w-2xl mx-auto text-base leading-relaxed">
          Sourcing from China without local support exposes buyers to predictable risks. We eliminate them.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.title} className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-red-china" />
              </div>
              <h3 className="font-semibold text-navy mb-2">{p.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{p.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-red-china font-semibold text-sm uppercase tracking-wider">Our Process</span>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">How We Work</h2>
        <p className="text-text-muted max-w-2xl mx-auto text-base leading-relaxed">
          A structured, transparent process from your first inquiry to final delivery.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div key={step.num} className="relative bg-slate-bg rounded-xl p-6 border border-gray-200">
            <div className="text-4xl font-bold text-navy/10 mb-3">{step.num}</div>
            <h3 className="font-semibold text-navy text-lg mb-2">{step.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/how-it-works"
          className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-dark transition-colors"
        >
          See Full Process <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

const ProductsSection = () => (
  <section className="py-20 bg-slate-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <span className="text-red-china font-semibold text-sm uppercase tracking-wider">Product Categories</span>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Products We Source</h2>
        <p className="text-text-muted max-w-2xl mx-auto text-base leading-relaxed">
          We cover 30+ product categories across China's major manufacturing hubs.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {products.map((p) => (
          <span
            key={p}
            className="bg-white border border-gray-200 text-navy text-sm font-medium px-4 py-2 rounded-full hover:bg-navy hover:text-white transition-colors cursor-default"
          >
            {p}
          </span>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-navy font-semibold hover:text-red-china transition-colors"
        >
          View All Product Categories <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

const CaseStudiesSection = ({ containerRef }) => (
  <section className="py-20 bg-white" ref={containerRef}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-red-china font-semibold text-sm uppercase tracking-wider">Results</span>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Client Case Studies</h2>
        <p className="text-text-muted max-w-2xl mx-auto text-base leading-relaxed">
          Real outcomes from buyers who used SSourcing China to manage their supply chain.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((cs) => (
          <div key={cs.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48 bg-slate-bg overflow-hidden">
              <img
                alt={cs.title}
                data-strk-img-id={cs.imgId}
                data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-navy text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {cs.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 id={cs.titleId} className="font-semibold text-navy text-base mb-2 leading-snug">{cs.title}</h3>
              <p id={cs.descId} className="text-text-muted text-sm leading-relaxed mb-4">{cs.desc}</p>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-green-700 text-sm font-semibold">{cs.result}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-navy font-semibold hover:text-red-china transition-colors"
        >
          View All Case Studies <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

const TrustSection = () => (
  <section className="py-16 bg-navy text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {trustPoints.map((tp) => (
          <div key={tp.label}>
            <div className="text-4xl font-bold text-white mb-2">{tp.value}</div>
            <div className="text-gray-400 text-sm">{tp.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FaqSection = () => {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-20 bg-slate-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-red-china font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-navy text-sm md:text-base">{faq.q}</span>
                <ChevronRight
                  className={`w-4 h-4 text-text-muted flex-shrink-0 transition-transform ${open === i ? 'rotate-90' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CtaSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
        Ready to Source from China with Confidence?
      </h2>
      <p className="text-text-muted text-lg mb-8 leading-relaxed">
        Tell us what you need. We'll respond within 24 hours with a tailored sourcing plan and quote.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 bg-red-china text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-red-china-dark transition-colors"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy px-8 py-4 rounded-lg font-semibold text-base hover:bg-navy hover:text-white transition-colors"
        >
          Explore Our Services
        </Link>
      </div>
    </div>
  </section>
);


const Home = () => {
  const heroRef = useRef(null);
  const caseRef = useRef(null);

  useEffect(() => {
    const cleanup1 = ImageHelper.loadImages(strkImgConfig, heroRef.current);
    const cleanup2 = ImageHelper.loadImages(strkImgConfig, caseRef.current);
    return () => {
      if (typeof cleanup1 === 'function') cleanup1();
      if (typeof cleanup2 === 'function') cleanup2();
    };
  }, []);

  return (
    <>
      <HomeHero containerRef={heroRef} />
      <ServicesSection />
      <ProblemsSection />
      <ProcessSection />
      <ProductsSection />
      <CaseStudiesSection containerRef={caseRef} />
      <TrustSection />
      <FaqSection />
      <CtaSection />
    </>
  );
};

export default Home;
