import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, Star, ArrowRight, ChevronRight, Globe,
  Users, Award, Clock, TrendingUp, MessageSquare, Package
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specifications, MOQ, and budget requirements.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering production capacity, certifications, workforce, and compliance standards.',
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and final inspections to ensure your goods meet agreed specifications.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Regular updates and milestone tracking throughout the manufacturing process to prevent delays.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and manage logistics to your destination.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'Support for custom branding, packaging design, and OEM product development with Chinese manufacturers.',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, quantity, target price, and destination.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our verified network and identify 3–5 qualified manufacturers for your review.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories, verify credentials, and provide a detailed audit report.' },
  { num: '04', title: 'Sample & Negotiation', desc: 'We arrange samples, negotiate pricing and terms on your behalf.' },
  { num: '05', title: 'Production Monitoring', desc: 'We track production milestones and report progress at every stage.' },
  { num: '06', title: 'QC & Shipment', desc: 'Final inspection before goods leave the factory, then coordinated shipping to your door.' },
];

const products = [
  { name: 'Electronics & Components', icon: '⚡', titleId: 'prod-elec-title' },
  { name: 'Furniture & Home Goods', icon: '🪑', titleId: 'prod-furn-title' },
  { name: 'Apparel & Textiles', icon: '👕', titleId: 'prod-app-title' },
  { name: 'Industrial Equipment', icon: '⚙️', titleId: 'prod-ind-title' },
  { name: 'Toys & Baby Products', icon: '🧸', titleId: 'prod-toys-title' },
  { name: 'Health & Beauty', icon: '💊', titleId: 'prod-health-title' },
  { name: 'Sports & Outdoor', icon: '🏋️', titleId: 'prod-sports-title' },
  { name: 'Packaging & Labels', icon: '📦', titleId: 'prod-pack-title' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'We pre-screen and audit every factory before you commit a single dollar.' },
  { title: 'Quality Failures', desc: 'Our inspectors catch defects before goods ship, not after they arrive.' },
  { title: 'Communication Barriers', desc: 'Fluent in Chinese and English — we bridge the language and culture gap.' },
  { title: 'Hidden Costs', desc: 'Transparent pricing with no hidden fees. You know exactly what you pay.' },
  { title: 'Delayed Shipments', desc: 'Production monitoring and proactive follow-up keep your timeline on track.' },
  { title: 'Compliance Risks', desc: 'We verify certifications (CE, RoHS, FDA, etc.) before production begins.' },
];

const trustPoints = [
  { value: '500+', label: 'Verified Suppliers', icon: Factory },
  { value: '12+', label: 'Years in China Sourcing', icon: Award },
  { value: '98%', label: 'Client Satisfaction Rate', icon: Star },
  { value: '40+', label: 'Countries Served', icon: Globe },
];

const caseStudies = [
  {
    id: 'cs-1',
    industry: 'Consumer Electronics',
    title: 'Reducing Defect Rate by 73% for a UK Retailer',
    result: '73% fewer defects, on-time delivery, 18% cost saving',
    titleId: 'cs-1-title',
    descId: 'cs-1-desc',
    imgId: 'cs-img-1-a3f9b2',
  },
  {
    id: 'cs-2',
    industry: 'Home Furniture',
    title: 'Scaling Production for a US E-Commerce Brand',
    result: '3× production capacity, new certified supplier, 22% lower unit cost',
    titleId: 'cs-2-title',
    descId: 'cs-2-desc',
    imgId: 'cs-img-2-b7c4d1',
  },
  {
    id: 'cs-3',
    industry: 'Apparel & Textiles',
    title: 'Private Label Launch for an Australian Fashion Brand',
    result: 'Full OEM setup in 8 weeks, CE-certified, delivered on schedule',
    titleId: 'cs-3-title',
    descId: 'cs-3-desc',
    imgId: 'cs-img-3-e2a8f5',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'We offer flexible pricing: a flat project fee for one-time sourcing, or a percentage-based model for ongoing procurement. Contact us for a tailored quote.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established importers managing multiple SKUs.',
  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We conduct on-site audits covering business licenses, production capacity, workforce, equipment, certifications, and past client references.',
  },
  {
    q: 'Can you handle shipping and customs documentation?',
    a: 'Yes. We coordinate with licensed freight forwarders, prepare export documents, and can arrange door-to-door delivery.',
  },
  {
    q: 'What if the goods fail quality inspection?',
    a: 'We work with the factory to resolve issues before shipment. If goods do not meet agreed specs, we negotiate rework or replacement at no extra cost to you.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typically 2–4 weeks from inquiry to confirmed supplier, depending on product complexity. Production timelines vary by order size.',
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative min-h-[620px] md:min-h-[700px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-[#1A3C6E]"
          data-strk-bg-id="hero-bg-main-9f3a2c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3C6E]/90 via-[#1A3C6E]/75 to-[#1A3C6E]/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#C0392B] text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              China Sourcing Agent
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-7 py-4 rounded-lg text-base transition-colors duration-200"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1A3C6E] font-semibold px-7 py-4 rounded-lg text-base transition-colors duration-200"
              >
                How It Works
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-10">
              {[
                { icon: CheckCircle, text: 'Verified Factories' },
                { icon: CheckCircle, text: 'On-site QC Inspections' },
                { icon: CheckCircle, text: 'End-to-End Support' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-blue-100 text-sm">
                  <Icon className="w-4 h-4 text-[#D4A017]" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-[#E2E8F0] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustPoints.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon className="w-6 h-6 text-[#C0392B] mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-[#1A3C6E]">{value}</div>
                <div className="text-sm text-[#475569] mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#EBF2FA] text-[#1A3C6E] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Full-Cycle China Sourcing Services
            </h2>
            <p className="text-[#475569] text-lg max-w-2xl mx-auto">
              From finding the right supplier to delivering goods to your warehouse — we manage every step of the process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, titleId, descId }) => (
              <div key={title} className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
                <div className="w-12 h-12 bg-[#EBF2FA] rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#1A3C6E]" />
                </div>
                <h3 id={titleId} className="text-lg font-semibold text-[#1E293B] mb-2">{title}</h3>
                <p id={descId} className="text-[#475569] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-[#1A3C6E] text-[#1A3C6E] hover:bg-[#1A3C6E] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#EBF2FA] text-[#1A3C6E] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              How We Source for You
            </h2>
            <p className="text-[#475569] text-lg max-w-2xl mx-auto">
              A structured, transparent process designed to minimize risk and maximize results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
                <div className="text-4xl font-bold text-[#EBF2FA] absolute top-4 right-6 select-none">{step.num}</div>
                <div className="w-10 h-10 bg-[#1A3C6E] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">{step.num}</span>
                </div>
                <h3 className="text-base font-semibold text-[#1E293B] mb-2">{step.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-[#1A3C6E] font-semibold hover:underline"
            >
              See the full process <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-[#EBF2FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-white text-[#1A3C6E] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Product Categories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Products We Source from China
            </h2>
            <p className="text-[#475569] text-lg max-w-2xl mx-auto">
              We have established supplier networks across a wide range of product categories.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map(({ name, icon, titleId }) => (
              <div key={name} className="bg-white rounded-xl p-5 text-center border border-[#E2E8F0] hover:shadow-md transition-shadow duration-200 cursor-default">
                <div className="text-3xl mb-3">{icon}</div>
                <p id={titleId} className="text-sm font-semibold text-[#1E293B]">{name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-[#1A3C6E] hover:bg-[#15305A] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Browse All Categories <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#EBF2FA] text-[#1A3C6E] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Why Work With Us
              </span>
              <h2 id="problems-title" className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
                Common Sourcing Problems We Solve
              </h2>
              <p id="problems-subtitle" className="text-[#475569] text-lg mb-8">
                Importing from China comes with real risks. Our team is on the ground to protect your interests at every stage.
              </p>
              <div className="space-y-4">
                {problems.map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#C0392B] rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1E293B] text-sm">{title}</h4>
                      <p className="text-[#475569] text-sm mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden min-h-[400px] bg-[#1A3C6E]">
              <div
                className="absolute inset-0"
                data-strk-bg-id="problems-bg-7d2e1a"
                data-strk-bg="[problems-subtitle] [problems-title]"
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C6E]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#EBF2FA] rounded-full flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-[#1A3C6E]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1E293B] text-sm">Factory Verified</p>
                      <p className="text-[#475569] text-xs">On-site audit completed · ISO 9001 certified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#EBF2FA] text-[#1A3C6E] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Real Results for Real Clients
            </h2>
            <p className="text-[#475569] text-lg max-w-2xl mx-auto">
              See how we've helped businesses across industries source smarter from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="relative h-48 bg-[#1A3C6E]">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#1A3C6E]/80 text-white text-xs font-semibold px-2 py-1 rounded">
                      {cs.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={cs.titleId} className="font-semibold text-[#1E293B] mb-2 leading-snug">{cs.title}</h3>
                  <p id={cs.descId} className="text-[#475569] text-sm mb-4">{cs.result}</p>
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-1 text-[#1A3C6E] text-sm font-semibold hover:underline"
                  >
                    Read case study <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 border-2 border-[#1A3C6E] text-[#1A3C6E] hover:bg-[#1A3C6E] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              View All Case Studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#EBF2FA] text-[#1A3C6E] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-[#1E293B] text-sm md:text-base list-none">
                  {q}
                  <ChevronRight className="w-5 h-5 text-[#475569] group-open:rotate-90 transition-transform duration-200 flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-5 text-[#475569] text-sm leading-relaxed border-t border-[#E2E8F0] pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-[#1A3C6E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a tailored sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors duration-200"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
