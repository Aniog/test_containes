import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  Star, CheckCircle, ArrowRight, Globe, Users, Award, TrendingUp,
  ChevronDown, MessageSquare, Package, Zap
} from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specs, MOQ, and budget.',
    href: '/services',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to confirm production capacity, certifications, and working conditions before you commit.',
    href: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections by our local QC team to catch defects before goods leave China.',
    href: '/services',
  },
  {
    icon: Zap,
    title: 'Production Follow-up',
    desc: 'Regular updates and on-site monitoring to keep your order on schedule and within spec.',
    href: '/services',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and track your shipment to destination.',
    href: '/services',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'Support for custom packaging, branding, and OEM product development with Chinese manufacturers.',
    href: '/services',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, quantity, and target price.' },
  { num: '02', title: 'Supplier Matching', desc: 'We identify and vet 3–5 qualified suppliers from our verified network.' },
  { num: '03', title: 'Quotation & Samples', desc: 'We negotiate pricing, request samples, and share a clear comparison report.' },
  { num: '04', title: 'Order & Production', desc: 'Once you confirm, we place the order and monitor production progress.' },
  { num: '05', title: 'QC Inspection', desc: 'Our inspectors visit the factory before shipment to verify quality.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics and keep you updated until goods arrive.' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'Struggling to find factories that deliver consistent quality? We pre-screen every supplier before recommending them.' },
  { title: 'Quality Failures', desc: 'Received goods that didn\'t match the sample? Our QC inspections catch issues before shipment.' },
  { title: 'Communication Barriers', desc: 'Language and time-zone gaps causing delays? We act as your local representative in China.' },
  { title: 'Shipping Complexity', desc: 'Confused by customs, Incoterms, and freight options? We handle the logistics coordination for you.' },
  { title: 'Scam Risk', desc: 'Worried about paying and receiving nothing? We verify factories on-site and only work with trusted partners.' },
  { title: 'No Local Presence', desc: 'Can\'t visit China to oversee production? Our team is on the ground so you don\'t have to be.' },
];

const trustPoints = [
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: Users, value: '500+', label: 'Buyers Assisted' },
  { icon: Award, value: '8+', label: 'Years in China Sourcing' },
  { icon: TrendingUp, value: '95%', label: 'Client Retention Rate' },
];

const caseStudies = [
  {
    id: 'furniture-uk',
    industry: 'Furniture',
    country: 'United Kingdom',
    title: 'UK Retailer Cuts Sourcing Costs by 28%',
    desc: 'A UK home goods retailer needed a reliable furniture supplier in Foshan. We audited 6 factories, negotiated pricing, and managed QC across 3 production runs.',
    result: '28% cost reduction, zero defect shipments',
    titleId: 'cs-furniture-uk-title',
    descId: 'cs-furniture-uk-desc',
    imgId: 'cs-furniture-uk-img-a1b2c3',
  },
  {
    id: 'electronics-us',
    industry: 'Electronics',
    country: 'United States',
    title: 'US Brand Launches Private Label Electronics',
    desc: 'An American startup needed OEM electronics with custom packaging. We sourced a certified Shenzhen manufacturer, managed sampling, and coordinated air freight.',
    result: 'Product launched on time, passed FCC certification',
    titleId: 'cs-electronics-us-title',
    descId: 'cs-electronics-us-desc',
    imgId: 'cs-electronics-us-img-d4e5f6',
  },
  {
    id: 'apparel-fr',
    industry: 'Apparel',
    country: 'France',
    title: 'French Brand Sources Sustainable Apparel',
    desc: 'A French fashion brand required OEKO-TEX certified fabric and ethical production. We identified compliant factories in Guangzhou and conducted social audits.',
    result: 'Full compliance achieved, 4 successful seasons',
    titleId: 'cs-apparel-fr-title',
    descId: 'cs-apparel-fr-desc',
    imgId: 'cs-apparel-fr-img-g7h8i9',
  },
];

const faqs = [
  { q: 'How much does your sourcing service cost?', a: 'We offer a free initial consultation and sourcing quote. Our fees are transparent and typically structured as a service fee per order or a percentage of the order value, depending on scope.' },
  { q: 'How long does it take to find a supplier?', a: 'For standard products, we typically present a shortlist of verified suppliers within 5–10 business days. Complex or custom products may take longer.' },
  { q: 'Do you work with small businesses and startups?', a: 'Yes. We work with buyers of all sizes, from individual entrepreneurs to established importers. We adapt our service to your order volume and budget.' },
  { q: 'Can you handle shipping to any country?', a: 'We coordinate with freight forwarders for sea, air, and express shipping to most countries worldwide. We handle export documentation from the China side.' },
  { q: 'What if the goods fail quality inspection?', a: 'If our QC inspection identifies issues, we work with the factory to resolve them before shipment. We do not release goods until they meet the agreed specifications.' },
  { q: 'Do you visit factories in person?', a: 'Yes. Our team is based in China and conducts on-site factory audits and inspections. We do not rely solely on supplier-provided documents.' },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          data-strk-bg-id="hero-bg-main-x9y8z7"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-800/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">China-Based Sourcing Agent</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-blue-400">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              We help importers worldwide find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border border-slate-500 hover:border-slate-300 text-slate-200 hover:text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                How It Works
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-10">
              {[
                { icon: CheckCircle, text: 'On-site factory audits' },
                { icon: CheckCircle, text: 'Pre-shipment QC inspection' },
                { icon: CheckCircle, text: 'End-to-end coordination' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-slate-300 text-sm">
                  <Icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-blue-700 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon className="w-6 h-6 text-blue-200" />
                <span className="text-3xl font-bold">{value}</span>
                <span className="text-blue-200 text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="End-to-End China Sourcing Services"
            subtitle="From finding the right supplier to delivering goods to your door, we manage every step of the sourcing process."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                to={href}
                className="group bg-white border border-slate-100 rounded-xl p-6 hover:shadow-lg hover:border-blue-100 transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-slate-900 font-semibold text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{desc}</p>
                <span className="text-blue-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Source for You"
            subtitle="A structured, transparent process from your first inquiry to final delivery."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                <div className="text-4xl font-bold text-blue-100 mb-3">{num}</div>
                <h3 className="text-slate-900 font-semibold text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Buyers Work With Us"
            title="Common Sourcing Problems We Solve"
            subtitle="Importing from China comes with real challenges. Here's how we help you avoid the most common pitfalls."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map(({ title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-full flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-1">{title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Client Results"
            title="Case Studies"
            subtitle="Real sourcing projects we've managed for international buyers."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">{cs.industry}</span>
                    <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full">{cs.country}</span>
                  </div>
                  <h3 id={cs.titleId} className="text-slate-900 font-bold text-lg mb-2 leading-snug">{cs.title}</h3>
                  <p id={cs.descId} className="text-slate-500 text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-green-700 text-sm font-medium bg-green-50 rounded-lg px-3 py-2">
                    <TrendingUp className="w-4 h-4 flex-shrink-0" />
                    <span>{cs.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from buyers new to China sourcing."
          />
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-semibold text-slate-900 hover:text-blue-700 transition-colors">
                  <span>{q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Source from China?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Tell us what you need and we'll send you a free sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-10 py-4 rounded-lg text-base transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
