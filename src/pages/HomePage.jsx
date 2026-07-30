import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Star,
  CheckCircle, ArrowRight, Globe, Users, Package, TrendingUp,
  ChevronDown, Award, Clock, MessageSquare
} from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionLabel from '@/components/SectionLabel';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specs, MOQ, and budget requirements.',
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
    desc: 'Pre-shipment and in-line inspections by our local QC team to catch defects before goods leave the factory.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'Regular updates and milestone tracking throughout the production cycle so you always know where your order stands.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and ensure timely delivery to your destination.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'From product design to branded packaging, we help you develop and launch your own product line from China.',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    imgId: 'svc-oem-img-p7q8r9',
  },
];

const problems = [
  { problem: 'Struggling to find reliable suppliers?', solution: 'We maintain a vetted network of manufacturers across 20+ product categories.' },
  { problem: 'Worried about product quality?', solution: 'Our local QC team inspects goods before shipment — no surprises on arrival.' },
  { problem: 'Can\'t visit factories yourself?', solution: 'We conduct on-site audits and send you detailed reports with photos and findings.' },
  { problem: 'Lost in translation or time zones?', solution: 'Our bilingual team bridges communication gaps and works in your time zone.' },
  { problem: 'Unsure about shipping and customs?', solution: 'We coordinate logistics end-to-end and handle all export documentation.' },
  { problem: 'Burned by a bad supplier before?', solution: 'We verify every supplier before engagement — business license, certifications, and capacity.' },
];

const trustPoints = [
  { value: '500+', label: 'Sourcing Projects Completed' },
  { value: '30+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction Rate' },
  { value: '12+', label: 'Years in China Sourcing' },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    category: 'Furniture',
    title: 'UK Retailer Cuts Sourcing Costs by 22%',
    summary: 'A UK-based furniture importer needed to diversify suppliers after quality issues. We identified 3 verified factories, ran audits, and managed QC — reducing defect rates to under 1%.',
    result: '22% cost reduction, <1% defect rate',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s1t2u3',
  },
  {
    id: 'cs-electronics',
    category: 'Electronics',
    title: 'US Brand Launches Private Label Product Line',
    summary: 'An American e-commerce brand wanted to launch a private label electronics line. We sourced OEM manufacturers, managed sampling, and coordinated Amazon FBA shipping.',
    result: 'Launched in 4 months, 3x ROI in year one',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-v4w5x6',
  },
  {
    id: 'cs-apparel',
    category: 'Apparel',
    title: 'Australian Brand Scales Textile Production',
    summary: 'A growing Australian fashion brand needed to scale production while maintaining quality. We managed supplier relationships, in-line inspections, and shipping for 6 consecutive seasons.',
    result: 'Production scaled 3x with consistent quality',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
];

const faqs = [
  {
    q: 'How do you charge for your services?',
    a: 'We offer flexible pricing: a flat project fee for one-time sourcing projects, or a monthly retainer for ongoing sourcing support. We provide a detailed quote after understanding your requirements.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard products, we typically present a shortlist of verified suppliers within 5–10 business days. Complex or custom products may take 2–3 weeks.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with businesses of all sizes, from startups placing their first order to established importers managing multiple product lines.',
  },
  {
    q: 'What happens if there is a quality problem?',
    a: 'Our pre-shipment inspections are designed to catch issues before goods leave China. If a problem is found, we work directly with the factory to resolve it — rework, replacement, or credit negotiation.',
  },
  {
    q: 'Can you help with shipping and customs?',
    a: 'Yes. We coordinate with trusted freight forwarders for sea, air, and express shipping. We also assist with export documentation, though customs clearance in your country is handled by your local broker.',
  },
  {
    q: 'Do you handle private label and OEM products?',
    a: 'Absolutely. We have extensive experience managing OEM and private label projects — from product development and sampling to branded packaging and final delivery.',
  },
];

export default function HomePage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-navy-900 text-white overflow-hidden min-h-screen flex items-center">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-8f2a9c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              <Globe className="w-3.5 h-3.5" />
              China-Based Sourcing Agent
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              China Sourcing Agent<br />
              <span className="text-red-400">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton to="/contact" className="text-base px-8 py-4">
                Get a Free Sourcing Quote
              </CTAButton>
              <CTAButton to="/how-it-works" variant="outline" className="text-base px-8 py-4" showArrow>
                How It Works
              </CTAButton>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {['Verified Suppliers', 'On-site QC Inspections', 'End-to-end Logistics'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label} className="flex flex-col items-center">
                <span className="text-3xl font-bold text-navy-900">{tp.value}</span>
                <span className="text-slate-500 text-sm mt-1">{tp.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Everything You Need to Source from China
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              From finding the right factory to delivering goods to your door, we manage the entire sourcing process on your behalf.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 id={svc.titleId} className="text-navy-900 font-bold text-lg mb-2">{svc.title}</h3>
                  <p id={svc.descId} className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/services" variant="secondary" showArrow>
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              How We Work With You
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              A clear, structured process designed to reduce risk and keep you informed at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Submit Your Requirements', desc: 'Tell us what you need — product specs, quantity, target price, and timeline.' },
              { step: '02', title: 'Supplier Research & Shortlist', desc: 'We identify and vet matching factories, then present you with a curated shortlist.' },
              { step: '03', title: 'Verification & Sampling', desc: 'We audit the factory, arrange samples, and confirm quality before you commit.' },
              { step: '04', title: 'Production & Delivery', desc: 'We monitor production, inspect finished goods, and coordinate shipping to your door.' },
            ].map((step) => (
              <div key={step.step} className="relative">
                <div className="flex flex-col items-start">
                  <span className="text-5xl font-bold text-slate-100 mb-3 leading-none">{step.step}</span>
                  <h3 className="text-navy-900 font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/how-it-works" variant="secondary" showArrow>
              See Full Process
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel className="text-red-400">Problems We Solve</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Common Challenges We Help You Overcome
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Sourcing from China comes with real risks. Here's how we address the most common ones.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((item) => (
              <div key={item.problem} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <p className="text-red-400 font-semibold text-sm mb-3">{item.problem}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Product Categories</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Products We Source
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              We have experience sourcing across a wide range of product categories from China's manufacturing hubs.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: 'Electronics', icon: '⚡', id: 'cat-electronics' },
              { label: 'Furniture', icon: '🪑', id: 'cat-furniture' },
              { label: 'Clothing & Textiles', icon: '👕', id: 'cat-clothing' },
              { label: 'Machinery', icon: '⚙️', id: 'cat-machinery' },
              { label: 'Toys & Baby', icon: '🧸', id: 'cat-toys' },
              { label: 'Health & Beauty', icon: '💊', id: 'cat-health' },
              { label: 'Sports & Outdoor', icon: '🏋️', id: 'cat-sports' },
              { label: 'Packaging', icon: '📦', id: 'cat-packaging' },
              { label: 'Auto Parts', icon: '🔧', id: 'cat-auto' },
              { label: 'Home Decor', icon: '🏠', id: 'cat-homedecor' },
            ].map((cat) => (
              <Link
                key={cat.id}
                to="/products"
                className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:border-red-300 hover:shadow-sm transition-all group"
              >
                <span className="text-2xl mb-2 block">{cat.icon}</span>
                <span id={cat.id} className="text-navy-900 font-medium text-sm group-hover:text-red-600 transition-colors">{cat.label}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/products" variant="secondary" showArrow>
              Browse All Categories
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Case Studies</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Real Results for Real Buyers
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              See how we've helped businesses like yours source smarter from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-slate-200">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-red-600 uppercase tracking-widest">{cs.category}</span>
                  <h3 id={cs.titleId} className="text-navy-900 font-bold text-lg mt-2 mb-3">{cs.title}</h3>
                  <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed mb-4">{cs.summary}</p>
                  <div className="flex items-center gap-2 text-green-700 text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    {cs.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/case-studies" variant="secondary" showArrow>
              View All Case Studies
            </CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-slate-200 rounded-xl group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <span className="text-navy-900 font-semibold text-base">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a tailored sourcing plan.
          </p>
          <CTAButton to="/contact" variant="outline" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
