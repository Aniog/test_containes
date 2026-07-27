import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, CheckCircle,
  ArrowRight, Star, Users, Globe, Package, TrendingUp, AlertTriangle,
  HelpCircle, ChevronDown, ChevronUp
} from 'lucide-react';
import { SectionHeading, CTAButton } from '@/components/shared/SectionHeading.jsx';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-primary overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <span className="inline-block bg-white/10 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
            Trusted by 500+ Global Buyers
          </span>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
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
              className="inline-flex items-center justify-center border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-base"
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
    { icon: Package, value: '10,000+', label: 'Orders Managed' },
    { icon: Globe, value: '35+', label: 'Countries Served' },
  ];

  return (
    <section className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-neutral-900">{stat.value}</div>
              <div className="text-sm text-neutral-500 mt-1">{stat.label}</div>
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
      description: 'We identify and shortlist qualified suppliers based on your product specs, MOQ, budget, and quality requirements.',
    },
    {
      icon: ShieldCheck,
      title: 'Factory Verification',
      description: 'On-site factory audits to verify legitimacy, production capacity, certifications, and working conditions.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-production, during-production, and pre-shipment inspections following AQL standards.',
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'Regular factory visits and progress reports to keep your order on schedule and within spec.',
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics support including freight booking, customs documentation, and delivery tracking.',
    },
    {
      icon: TrendingUp,
      title: 'Price Negotiation',
      description: 'Leverage our local expertise and supplier relationships to secure competitive pricing and favorable terms.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Services"
          title="End-to-End China Sourcing Support"
          description="From finding the right supplier to delivering goods at your door, we handle every step of the sourcing process."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">{service.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton to="/services" variant="secondary">
            View All Services
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { number: '01', title: 'Share Your Requirements', description: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
    { number: '02', title: 'Supplier Matching', description: 'We research and shortlist 3-5 verified suppliers that match your criteria.' },
    { number: '03', title: 'Samples & Negotiation', description: 'We arrange samples, negotiate pricing, and finalize terms on your behalf.' },
    { number: '04', title: 'Production & QC', description: 'We monitor production progress and conduct quality inspections at key stages.' },
    { number: '05', title: 'Shipping & Delivery', description: 'We coordinate logistics and ensure your goods arrive safely and on time.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="How It Works"
          title="Our Proven Sourcing Process"
          description="A structured, transparent approach that minimizes risk and maximizes value at every stage."
        />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center px-3">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-sm">{step.number}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-0.5 bg-neutral-200" />
              )}
              <h4 className="text-sm font-semibold text-neutral-900 mb-2">{step.title}</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton to="/how-it-works" variant="secondary">
            Learn More About Our Process
          </CTAButton>
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

  const categories = [
    { id: 'electronics', title: 'Electronics & Components', imgId: 'prod-electronics-4a8b2c' },
    { id: 'textiles', title: 'Textiles & Apparel', imgId: 'prod-textiles-5d9e3f' },
    { id: 'furniture', title: 'Furniture & Home Goods', imgId: 'prod-furniture-6c7a1d' },
    { id: 'machinery', title: 'Machinery & Equipment', imgId: 'prod-machinery-8b2f4e' },
    { id: 'packaging', title: 'Packaging & Printing', imgId: 'prod-packaging-9a3c5f' },
    { id: 'auto', title: 'Auto Parts & Accessories', imgId: 'prod-auto-1d4e6a' },
  ];

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Products We Source"
          title="Wide Range of Product Categories"
          description="We source across dozens of industries. Here are some of the most common categories our clients request."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]">
              <img
                alt={cat.title}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[prod-title-${cat.id}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 id={`prod-title-${cat.id}`} className="text-white font-semibold text-sm md:text-base">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton to="/products" variant="secondary">
            See All Product Categories
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

const ProblemsSection = () => {
  const problems = [
    { icon: AlertTriangle, problem: 'Unreliable suppliers', solution: 'We verify every factory on-site before you place an order.' },
    { icon: AlertTriangle, problem: 'Quality inconsistencies', solution: 'Our QC team inspects at every production stage using AQL standards.' },
    { icon: AlertTriangle, problem: 'Communication barriers', solution: 'We act as your bilingual bridge, ensuring nothing gets lost in translation.' },
    { icon: AlertTriangle, problem: 'Shipping delays & issues', solution: 'We coordinate logistics end-to-end and track every shipment.' },
    { icon: AlertTriangle, problem: 'Overpaying for products', solution: 'We negotiate directly with factories to get you fair market pricing.' },
    { icon: AlertTriangle, problem: 'Scams & fraud risk', solution: 'We conduct background checks and verify business licenses before engagement.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Problems We Solve"
          title="Common Sourcing Challenges We Eliminate"
          description="Buying from China without local support is risky. Here's how we protect your interests."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl border border-neutral-200 p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-4 h-4 text-red-500" />
                </div>
                <span className="text-neutral-900 font-medium text-sm">{item.problem}</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-success" />
                </div>
                <span className="text-neutral-500 text-sm">{item.solution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const trustPoints = [
    'Based in Shenzhen with a team of 20+ sourcing professionals',
    'On-the-ground presence in major manufacturing hubs',
    'Transparent pricing — no hidden fees or commissions from suppliers',
    'Detailed reporting with photos and videos at every stage',
    'Bilingual team (English & Mandarin) for clear communication',
    'Serving clients from 35+ countries since 2015',
  ];

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-white/70 font-semibold text-sm uppercase tracking-wider mb-2">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Built on Trust & Transparency
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We earn your confidence through consistent results, honest communication, and full accountability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-white/90 text-sm">{point}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-white text-primary font-semibold px-7 py-3.5 rounded-lg hover:bg-neutral-100 transition-colors text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const CaseStudiesPreview = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      id: 'case-electronics',
      title: 'Electronics Retailer Saves 30% on Component Costs',
      category: 'Electronics',
      description: 'Helped a US-based electronics retailer find verified PCB manufacturers, reducing unit costs by 30% while maintaining quality standards.',
      imgId: 'case-electronics-2a4b6c',
    },
    {
      id: 'case-furniture',
      title: 'Furniture Brand Launches New Product Line',
      category: 'Furniture',
      description: 'Sourced custom furniture manufacturers for an Australian brand, managing production of 5,000 units with zero defect rate.',
      imgId: 'case-furniture-3d5e7f',
    },
    {
      id: 'case-apparel',
      title: 'Apparel Company Scales Production 5x',
      category: 'Textiles',
      description: 'Supported a European fashion brand in scaling from 1,000 to 5,000 units per month with consistent quality across 3 factories.',
      imgId: 'case-apparel-4f6a8b',
    },
  ];

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Case Studies"
          title="Real Results for Real Businesses"
          description="See how we've helped companies like yours source successfully from China."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}-desc] [${item.id}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-medium text-primary bg-primary-light px-2.5 py-1 rounded-full mb-3">
                  {item.category}
                </span>
                <h3 id={`${item.id}-title`} className="text-base font-semibold text-neutral-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p id={`${item.id}-desc`} className="text-sm text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton to="/case-studies" variant="secondary">
            View All Case Studies
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState(0);

  const faqs = [
    {
      question: 'What is a China sourcing agent?',
      answer: 'A China sourcing agent is a professional intermediary based in China who helps overseas buyers find suppliers, negotiate prices, verify factories, inspect quality, and manage logistics. We act as your local team on the ground.',
    },
    {
      question: 'How much does your service cost?',
      answer: 'Our fees depend on the scope of work. Typically, we charge a service fee of 5-8% of the order value, or a fixed project fee for specific services like factory audits or inspections. We provide a detailed quote before starting.',
    },
    {
      question: 'What is your minimum order requirement?',
      answer: 'We don\'t have a fixed minimum, but most of our clients place orders of $5,000 or more. For smaller orders, we can still help with supplier identification and quality checks on a project basis.',
    },
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct on-site factory visits, check business licenses, verify production capacity, review certifications (ISO, BSCI, etc.), assess quality management systems, and evaluate past export experience.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Typically 2-4 weeks for supplier identification and sampling, depending on product complexity. Full production timelines vary by product but we provide clear schedules upfront.',
    },
    {
      question: 'Do you handle shipping and customs?',
      answer: 'Yes, we coordinate the full logistics chain including freight forwarding, customs documentation, and delivery tracking. We work with trusted logistics partners to ensure timely delivery.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="FAQ"
          title="Frequently Asked Questions"
          description="Get answers to the most common questions about working with a China sourcing agent."
        />
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-neutral-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer"
              >
                <span className="text-sm font-medium text-neutral-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-neutral-500 leading-relaxed">{faq.answer}</p>
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
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Get Started"
          title="Request Your Free Sourcing Quote"
          description="Tell us about your sourcing needs and we'll get back to you within 24 hours with a tailored proposal."
        />
        <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-6 md:p-10">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
              <input
                type="text"
                placeholder="John Smith"
                className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email Address *</label>
              <input
                type="email"
                placeholder="john@company.com"
                className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Company Name</label>
              <input
                type="text"
                placeholder="Your Company Ltd."
                className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Country</label>
              <input
                type="text"
                placeholder="United States"
                className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Product Description *</label>
              <textarea
                rows={4}
                placeholder="Describe the product you want to source, including specifications, target quantity, and budget range..."
                className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full md:w-auto bg-accent text-white font-semibold px-8 py-3 rounded-lg hover:bg-accent-dark transition-colors text-sm border-none cursor-pointer"
              >
                Get a Free Sourcing Quote
              </button>
              <p className="text-xs text-neutral-500 mt-3">
                We typically respond within 24 hours. Your information is kept confidential.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesPreview />
      <FAQSection />
      <InquirySection />
    </>
  );
};

export default Home;
