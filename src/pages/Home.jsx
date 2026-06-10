import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, CheckCircle2,
  ArrowRight, Star, Users, Package, Globe, AlertTriangle, Clock,
  DollarSign, ChevronDown, ChevronUp
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
      <ProductsOverview />
      <ProblemsWeSolve />
      <CaseStudiesPreview />
      <FAQSection />
      <CTASection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-neutral-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          data-strk-bg-id="hero-bg-9f3a2c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="w-full h-full"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Trusted by 500+ Global Buyers
          </p>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
            We help you find reliable Chinese suppliers, verify factories, inspect product quality, 
            follow production, and coordinate shipping — so you can buy with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
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
    { icon: Users, value: '500+', label: 'Global Clients' },
    { icon: Factory, value: '2,000+', label: 'Factories Verified' },
    { icon: Package, value: '10,000+', label: 'Orders Fulfilled' },
    { icon: Globe, value: '35+', label: 'Countries Served' },
  ];

  return (
    <section className="bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <stat.icon className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                <p className="text-sm text-neutral-500">{stat.label}</p>
              </div>
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
      icon: Search,
      title: 'Supplier Sourcing',
      desc: 'We identify and shortlist qualified manufacturers matching your product specs, MOQ, and budget.',
    },
    {
      icon: ShieldCheck,
      title: 'Factory Verification',
      desc: 'On-site audits to verify business licenses, production capacity, certifications, and working conditions.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      desc: 'Pre-production, during-production, and pre-shipment inspections with detailed photo reports.',
    },
    {
      icon: Clock,
      title: 'Production Follow-up',
      desc: 'We monitor your order timeline, communicate with factories, and keep you updated at every stage.',
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      desc: 'End-to-end logistics support including freight booking, customs documentation, and delivery tracking.',
    },
    {
      icon: DollarSign,
      title: 'Price Negotiation',
      desc: 'Leverage our local expertise to negotiate better pricing, payment terms, and trade conditions.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Full-Service China Sourcing Support
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            From finding the right supplier to delivering goods at your door — we handle every step of the sourcing process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{service.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors">
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
    { num: '02', title: 'We Source & Verify', desc: 'We find matching suppliers, verify their credentials, and get samples for you.' },
    { num: '03', title: 'Confirm & Produce', desc: 'You approve the supplier and sample. We place the order and monitor production.' },
    { num: '04', title: 'Inspect & Ship', desc: 'We inspect finished goods, arrange shipping, and track delivery to your warehouse.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Simple 4-Step Sourcing Process
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            We make sourcing from China straightforward and risk-free.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="text-5xl font-bold text-primary/10 mb-3">{step.num}</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{step.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2">
                  <ArrowRight className="w-5 h-5 text-neutral-300" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/how-it-works" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors">
            Learn More About Our Process <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductsOverview = () => {
  const categories = [
    { id: 'electronics', title: 'Electronics & Components', titleId: 'prod-electronics-title' },
    { id: 'textiles', title: 'Textiles & Apparel', titleId: 'prod-textiles-title' },
    { id: 'furniture', title: 'Furniture & Home Goods', titleId: 'prod-furniture-title' },
    { id: 'machinery', title: 'Machinery & Equipment', titleId: 'prod-machinery-title' },
    { id: 'packaging', title: 'Packaging & Printing', titleId: 'prod-packaging-title' },
    { id: 'auto', title: 'Auto Parts & Accessories', titleId: 'prod-auto-title' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Product Categories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Products We Source
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            We source across all major product categories from China's manufacturing hubs.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="relative rounded-xl overflow-hidden group cursor-pointer h-40 md:h-52">
              <img
                data-strk-img-id={`prod-cat-${cat.id}-a7b3`}
                data-strk-img={`[${cat.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 id={cat.titleId} className="text-white font-semibold text-sm md:text-base">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors">
            See All Product Categories <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProblemsWeSolve = () => {
  const problems = [
    { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'We vet every factory so you avoid scams, poor quality, and broken promises.' },
    { icon: Globe, title: 'Language & Culture Barriers', desc: 'Our bilingual team bridges communication gaps and prevents misunderstandings.' },
    { icon: ClipboardCheck, title: 'Quality Inconsistency', desc: 'Rigorous inspections at every stage ensure your products meet specifications.' },
    { icon: Clock, title: 'Delayed Shipments', desc: 'We track production timelines and push factories to meet your deadlines.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Problems We Solve
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Sourcing from China comes with real risks. We eliminate them for you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {problems.map((item, i) => (
            <div key={i} className="flex gap-4 bg-white rounded-xl border border-neutral-200 p-6">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
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
      id: 'case-1',
      title: 'LED Lighting for European Retailer',
      result: '40% cost reduction with verified supplier',
      category: 'Electronics',
      titleId: 'case-1-title',
      descId: 'case-1-desc',
      imgId: 'case-study-1-img-d4e2',
    },
    {
      id: 'case-2',
      title: 'Custom Furniture for US Importer',
      result: 'On-time delivery for 3 container orders',
      category: 'Furniture',
      titleId: 'case-2-title',
      descId: 'case-2-desc',
      imgId: 'case-study-2-img-f7a1',
    },
    {
      id: 'case-3',
      title: 'Textile Sourcing for Australian Brand',
      result: 'Zero defects across 50,000 units',
      category: 'Textiles',
      titleId: 'case-3-title',
      descId: 'case-3-desc',
      imgId: 'case-study-3-img-b9c5',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Real Results for Real Buyers
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            See how we've helped businesses source successfully from China.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded mb-3">
                  {item.category}
                </span>
                <h3 id={item.titleId} className="text-lg font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p id={item.descId} className="text-neutral-600 text-sm flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                  {item.result}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/case-studies" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors">
            View All Case Studies <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: 'What is a China sourcing agent?', a: 'A sourcing agent acts as your local representative in China. We find suppliers, negotiate prices, verify factories, inspect quality, and coordinate shipping on your behalf.' },
    { q: 'How much does your service cost?', a: 'Our fees depend on the scope of work. Typically we charge a service fee of 5-8% of the order value, or a fixed project fee. We provide a detailed quote after understanding your requirements.' },
    { q: 'What is the minimum order quantity?', a: 'MOQs vary by product and supplier. We work with factories that accept orders from as low as 100 units for some products. We'll find suppliers that match your volume needs.' },
    { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits checking business licenses, production capacity, quality systems, worker conditions, and past export experience. You receive a detailed verification report.' },
    { q: 'How long does the sourcing process take?', a: 'From initial inquiry to first shipment typically takes 4-8 weeks, depending on product complexity and order size. We provide a timeline estimate with every quote.' },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer"
              >
                <span className="font-medium text-neutral-900 pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
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
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
          Tell us what you're looking for. We'll provide a free sourcing plan with supplier recommendations, 
          pricing estimates, and timeline — no obligation.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default Home;
