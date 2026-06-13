import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Eye, Users,
  CheckCircle2, ArrowRight, ChevronRight, Globe, Factory,
  PackageCheck, BarChart3, Clock, AlertTriangle, Shield,
  ThumbsUp, HelpCircle
} from 'lucide-react';
import CTASection from '@/components/shared/CTASection';

const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist qualified suppliers matching your product specifications, quality standards, and budget requirements.' },
  { icon: ShieldCheck, title: 'Factory Verification', desc: 'On-site factory audits to verify business licenses, production capacity, quality systems, and operational legitimacy.' },
  { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-production, during-production, and pre-shipment inspections to ensure your products meet agreed specifications.' },
  { icon: Eye, title: 'Production Follow-up', desc: 'Regular monitoring of production progress, milestone tracking, and proactive issue resolution throughout manufacturing.' },
  { icon: Truck, title: 'Shipping Coordination', desc: 'End-to-end logistics management including freight booking, customs documentation, and delivery tracking.' },
  { icon: Users, title: 'Dedicated Support', desc: 'A dedicated sourcing specialist assigned to your project, providing clear communication and timely updates.' },
];

const processSteps = [
  { step: '01', title: 'Tell Us What You Need', desc: 'Share your product requirements, specifications, and target pricing. We assess feasibility and propose a sourcing plan.' },
  { step: '02', title: 'Supplier Identification & Verification', desc: 'We search our network, shortlist suitable factories, verify credentials, and present you with qualified options.' },
  { step: '03', title: 'Sample & Negotiation', desc: 'We coordinate sample production, negotiate pricing and terms on your behalf, and ensure specifications are met.' },
  { step: '04', title: 'Production & Quality Control', desc: 'We monitor production, conduct inspections at key stages, and address issues before they become problems.' },
  { step: '05', title: 'Shipping & Delivery', desc: 'We arrange shipping, handle documentation, and track your order until it arrives at your destination.' },
];

const productCategories = [
  { name: 'Electronics & Components', imgId: 'cat-electronics-a1b2c3', titleId: 'cat-electronics-title', descId: 'cat-electronics-desc' },
  { name: 'Textiles & Apparel', imgId: 'cat-textiles-d4e5f6', titleId: 'cat-textiles-title', descId: 'cat-textiles-desc' },
  { name: 'Home & Garden', imgId: 'cat-home-g7h8i9', titleId: 'cat-home-title', descId: 'cat-home-desc' },
  { name: 'Machinery & Parts', imgId: 'cat-machinery-j1k2l3', titleId: 'cat-machinery-title', descId: 'cat-machinery-desc' },
  { name: 'Auto Parts', imgId: 'cat-auto-m4n5o6', titleId: 'cat-auto-title', descId: 'cat-auto-desc' },
  { name: 'Consumer Goods', imgId: 'cat-consumer-p7q8r9', titleId: 'cat-consumer-title', descId: 'cat-consumer-desc' },
];

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Factories that overpromise and underdeliver, or disappear after receiving deposits.' },
  { icon: Shield, title: 'Quality Inconsistency', desc: 'Samples look great but mass production falls short of agreed specifications.' },
  { icon: Clock, title: 'Communication Barriers', desc: 'Language gaps, time zone differences, and cultural misunderstandings that delay projects.' },
  { icon: BarChart3, title: 'Hidden Costs', desc: 'Unexpected fees, price changes after orders, and unclear total landed costs.' },
];

const trustPoints = [
  { value: '500+', label: 'Verified Suppliers' },
  { value: '12+', label: 'Years in China Sourcing' },
  { value: '30+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction Rate' },
];

const caseStudies = [
  {
    id: 'cs-electronics',
    title: 'Electronics Sourcing for EU Distributor',
    desc: 'Helped a European electronics distributor find verified PCB suppliers, reducing defect rates from 8% to under 1%.',
    tag: 'Electronics',
  },
  {
    id: 'cs-furniture',
    title: 'Furniture Quality Control Program',
    desc: 'Implemented a full QC program for a US furniture brand, catching 23 critical defects before shipment over 6 months.',
    tag: 'Home & Garden',
  },
  {
    id: 'cs-apparel',
    title: 'Apparel Production Management',
    desc: 'Managed end-to-end production for an Australian fashion retailer across 4 factories, delivering on time for seasonal launch.',
    tag: 'Textiles',
  },
];

const faqs = [
  { q: 'What types of products can you source?', a: 'We source a wide range of products including electronics, textiles, home goods, machinery parts, auto components, and consumer goods. If it\'s made in China, we can likely help you source it.' },
  { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits covering business license verification, production capacity assessment, quality management systems, worker conditions, and past client references. We also check for relevant certifications (ISO, CE, etc.).' },
  { q: 'What are your fees?', a: 'Our fees depend on the scope of work. We offer flexible pricing models including project-based fees and commission structures. Contact us for a free initial consultation and quote.' },
  { q: 'How long does the sourcing process take?', a: 'Typical supplier identification takes 1-2 weeks. Including sample production and verification, the full process from initial request to first shipment usually takes 4-8 weeks depending on product complexity.' },
  { q: 'Do you handle shipping and customs?', a: 'Yes. We coordinate freight booking (sea, air, or rail), prepare shipping documents, manage customs declarations, and track delivery to your destination. We work with reliable freight forwarders to ensure smooth logistics.' },
  { q: 'What if the quality doesn\'t meet my standards?', a: 'We conduct inspections at multiple stages (pre-production, during production, and pre-shipment). If issues are found, we work with the factory to resolve them before shipment. Our goal is to catch problems early, not after delivery.' },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div
          data-strk-bg-id="hero-bg-f1a2b3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Trusted by buyers in 30+ countries
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              We help you find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can source from China with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border border-slate-500 text-slate-200 hover:bg-slate-800 px-8 py-3.5 rounded-lg text-base font-medium transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label}>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{tp.value}</div>
                <div className="text-sm text-slate-500 font-medium">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Sourcing Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              End-to-end sourcing support from supplier discovery to delivery at your door.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-lg p-6 md:p-8 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-sm">
              Learn more about our services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Our Sourcing Process Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A structured, transparent process that keeps you informed at every stage.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, i) => (
              <div key={step.step} className="flex gap-6 mb-8 last:mb-0">
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-blue-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/how-it-works" className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-sm">
              See detailed process <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Products We Source</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From electronics to textiles, we source across major manufacturing categories in China.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <div key={cat.name} className="group relative bg-white rounded-lg overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
                <div className="aspect-[3/2] bg-slate-200 relative overflow-hidden">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="font-semibold text-slate-900 mb-1">{cat.name}</h3>
                  <p id={cat.descId} className="text-sm text-slate-500">Sourced from verified Chinese manufacturers</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-sm">
              View all product categories <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Common Sourcing Problems We Solve</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Sourcing from China doesn't have to be risky. We address the challenges that buyers face most often.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((p) => (
              <div key={p.title} className="flex gap-4 p-6 bg-slate-50 rounded-lg border border-slate-100">
                <div className="shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Buyers Trust SSourcing China</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                We operate with transparency, local expertise, and a commitment to your success. Our team is based in China, working directly with factories so you don't have to navigate the complexities alone.
              </p>
              <ul className="space-y-4">
                {[
                  'Local team with direct factory access across major manufacturing hubs',
                  'Rigorous verification process — we visit factories in person',
                  'Clear, regular communication in your language and time zone',
                  'No hidden fees — transparent pricing from the start',
                  'Proven track record with buyers in 30+ countries',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-slate-800 rounded-xl overflow-hidden">
                <img
                  alt="Factory inspection and quality control in China"
                  data-strk-img-id="why-choose-img-x1y2z3"
                  data-strk-img="[why-choose-subtitle] [why-choose-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden" id="why-choose-title">Why Buyers Trust SSourcing China</div>
              <div className="hidden" id="why-choose-subtitle">Factory inspection and quality control team in China</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Case Studies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real examples of how we've helped buyers source better from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-lg p-6 border border-slate-100 hover:shadow-md transition-shadow">
                <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {cs.tag}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{cs.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{cs.desc}</p>
                <Link to="/case-studies" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-sm">
              View all case studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-slate-100 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
