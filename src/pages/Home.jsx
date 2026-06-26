import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  ShieldCheck, Search, Eye, Truck, CheckCircle, ArrowRight,
  Globe, Users, Award, Clock, Star, Factory, Package, ClipboardCheck
} from 'lucide-react';
import CTASection from '@/components/shared/CTASection';

/* ───────────── Hero ───────────── */
function Hero() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary"
        data-strk-bg-id="hero-main-bg-8f2a9c"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <Globe className="w-4 h-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">Trusted by 500+ Global Buyers</span>
          </div>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
            We help you find reliable Chinese suppliers, verify factories, inspect quality,
            manage production, and coordinate shipping — so you can import with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-accent-hover transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, label: '500+', desc: 'Global Clients' },
            { icon: Factory, label: '2,000+', desc: 'Verified Suppliers' },
            { icon: Package, label: '10,000+', desc: 'Orders Managed' },
            { icon: Globe, label: '50+', desc: 'Countries Served' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.label}</div>
              <div className="text-blue-200 text-sm">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Services Overview ───────────── */
const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist reliable suppliers based on your product requirements, budget, and quality standards.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify legitimacy, production capacity, certifications, and compliance with your standards.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    desc: 'Pre-shipment inspections, in-line QC checks, and AQL sampling to catch defects before goods leave China.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    desc: 'Regular progress updates, timeline tracking, and issue resolution throughout the manufacturing process.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'Freight booking, customs documentation, consolidation, and door-to-door logistics management.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: Award,
    title: 'Sample Management',
    desc: 'Request, collect, evaluate, and ship product samples from multiple suppliers for comparison.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
  },
];

function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-3 mb-4">
            End-to-End Sourcing Solutions
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From finding the right supplier to delivering goods to your warehouse,
            we manage every step of the sourcing process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-xl border border-border p-7 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center mb-5`}>
                <s.icon className={`w-6 h-6 ${s.color}`} />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{s.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────── How It Works ───────────── */
const steps = [
  { num: '01', title: 'Submit Your Requirements', desc: 'Tell us what products you need, target price, quantity, and specifications.' },
  { num: '02', title: 'Supplier Shortlisting', desc: 'We identify and present 3-5 qualified suppliers with detailed profiles.' },
  { num: '03', title: 'Sample & Negotiation', desc: 'We collect samples, negotiate pricing, and finalize terms on your behalf.' },
  { num: '04', title: 'Production & QC', desc: 'We monitor production progress and conduct quality inspections at key stages.' },
  { num: '05', title: 'Shipping & Delivery', desc: 'We arrange logistics, handle documentation, and coordinate delivery to your door.' },
];

function HowItWorksPreview() {
  return (
    <section className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-3 mb-4">
            How Our Sourcing Process Works
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A streamlined 5-step process that makes sourcing from China simple and transparent.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center">
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                {step.num}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-[2px] bg-border" />
              )}
              <h3 className="text-base font-bold text-text-primary mb-2">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
          >
            Learn More About Our Process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Products We Source ───────────── */
const productCategories = [
  { title: 'Electronics & Accessories', desc: 'Consumer electronics, LED products, phone accessories, smart devices.' },
  { title: 'Home & Garden', desc: 'Furniture, kitchenware, home decor, garden tools, and outdoor products.' },
  { title: 'Apparel & Textiles', desc: 'Clothing, bags, shoes, fabrics, and custom fashion accessories.' },
  { title: 'Industrial & Machinery', desc: 'CNC parts, molds, tools, packaging machines, and industrial components.' },
  { title: 'Health & Beauty', desc: 'Cosmetics, personal care products, fitness equipment, health supplements.' },
  { title: 'Promotional Products', desc: 'Custom branded merchandise, corporate gifts, trade show giveaways.' },
];

function ProductsPreview() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Product Categories</span>
          <h2 id="products-section-title" className="text-3xl md:text-4xl font-bold text-text-primary mt-3 mb-4">
            Products We Source
          </h2>
          <p id="products-section-subtitle" className="text-text-secondary text-lg max-w-2xl mx-auto">
            We source a wide range of products across major categories, always matched to your specifications and quality requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {productCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="group relative rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[16/10] bg-surface-alt overflow-hidden">
                <img
                  data-strk-img-id={`product-cat-img-${i}`}
                  data-strk-img={`[${`product-cat-desc-${i}`}] [${`product-cat-title-${i}`}] [products-section-subtitle] [products-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 id={`product-cat-title-${i}`} className="text-lg font-bold text-text-primary mb-2">{cat.title}</h3>
                <p id={`product-cat-desc-${i}`} className="text-text-secondary text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
          >
            View All Product Categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Problems We Solve ───────────── */
const problems = [
  {
    problem: 'Unreliable Suppliers',
    solution: 'We verify every supplier with on-site audits, checking business licenses, factory capacity, and past performance records.',
  },
  {
    problem: 'Quality Issues',
    solution: 'Our QC team conducts inspections at multiple production stages using international AQL standards to prevent defective shipments.',
  },
  {
    problem: 'Communication Barriers',
    solution: 'Our bilingual team eliminates language barriers, ensuring your specifications are clearly understood by Chinese factories.',
  },
  {
    problem: 'Hidden Costs & Delays',
    solution: 'We provide transparent pricing breakdowns and maintain close production monitoring to keep your orders on schedule.',
  },
];

function ProblemsSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Why Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-3 mb-4">
            Problems We Solve for Importers
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Sourcing from China comes with challenges. We address the most common pain points
            that international buyers face.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {problems.map((item) => (
            <div key={item.problem} className="bg-white rounded-xl p-7 border border-border">
              <h3 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                {item.problem}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed pl-4 border-l-2 border-accent">
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Trust Points ───────────── */
const trustPoints = [
  { icon: ShieldCheck, title: 'Verified Suppliers Only', desc: 'Every supplier passes our multi-step verification process before we recommend them.' },
  { icon: Clock, title: '24-Hour Response', desc: 'We respond to all sourcing inquiries within 24 business hours with actionable next steps.' },
  { icon: Users, title: 'Local Team in China', desc: 'Our team is based in Shenzhen and Guangzhou, close to major manufacturing hubs.' },
  { icon: Star, title: 'No Hidden Fees', desc: 'Transparent pricing with clear breakdowns. No surprises at any stage of the process.' },
];

function TrustPoints() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Trust & Reliability</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-3 mb-4">
            Why Global Buyers Choose SSourcing China
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustPoints.map((tp) => (
            <div key={tp.title} className="text-center p-6 rounded-xl bg-surface-alt border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <tp.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-base font-bold text-text-primary mb-2">{tp.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{tp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Case Studies Preview ───────────── */
const caseStudies = [
  {
    title: 'How We Saved 30% on Kitchen Appliance Sourcing for a US Retailer',
    category: 'Home & Garden',
    result: '30% cost reduction',
    desc: 'A mid-size US retailer needed to source blenders and food processors from China. We identified 5 qualified suppliers, negotiated pricing, and conducted quality inspections that caught critical defects before shipment.',
  },
  {
    title: 'Electronics Import Success: From Prototype to 10,000 Units for a UK Brand',
    category: 'Electronics',
    result: 'On-time delivery',
    desc: 'A UK electronics brand needed a reliable manufacturer for Bluetooth speakers. We managed the entire process from prototype refinement to mass production and shipping coordination.',
  },
  {
    title: 'Streamlining Industrial Parts Procurement for a German Manufacturer',
    category: 'Industrial',
    result: '40% fewer defects',
    desc: 'A German industrial manufacturer was facing quality issues with Chinese CNC parts. We implemented stricter QC protocols and supplier audits that reduced defects by 40%.',
  },
];

function CaseStudiesPreview() {
  return (
    <section className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Case Studies</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-3 mb-4">
            Real Results for Real Clients
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            See how we have helped businesses around the world source products from China more effectively.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <div key={cs.title} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-2 bg-accent" />
              <div className="p-7">
                <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {cs.category}
                </span>
                <h3 className="text-lg font-bold text-text-primary mb-3 leading-snug">{cs.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{cs.desc}</p>
                <div className="flex items-center gap-2 text-success text-sm font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  {cs.result}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────── FAQ Preview ───────────── */
const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'We offer flexible pricing based on project scope. Many initial consultations and supplier recommendations are free. We charge a transparent service fee once you approve a supplier and place an order.',
  },
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'MOQ varies by product and supplier. We work with suppliers across a range of MOQ levels and can often negotiate lower minimums for first-time orders or samples.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Initial supplier shortlisting typically takes 3-5 business days. Full sourcing from inquiry to delivery usually ranges from 4-12 weeks depending on product complexity and order size.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate sea freight, air freight, and express shipping. We also assist with customs documentation, import/export compliance, and door-to-door delivery.',
  },
];

function FAQPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-3 mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group border border-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer text-text-primary font-semibold text-base hover:bg-surface-alt transition-colors">
                {faq.q}
                <span className="text-text-muted group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <div className="px-6 pb-5 text-text-secondary text-sm leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Home Page ───────────── */
export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesOverview />
      <HowItWorksPreview />
      <ProductsPreview />
      <ProblemsSection />
      <TrustPoints />
      <CaseStudiesPreview />
      <FAQPreview />
      <CTASection dark />
    </div>
  );
}
