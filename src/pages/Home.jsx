import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  ArrowRight, CheckCircle, Search, Factory, ClipboardCheck,
  Truck, ShieldCheck, Star, Users, Globe, Package,
  ChevronDown, AlertTriangle, TrendingUp, Clock
} from 'lucide-react';
import CTABanner from '../components/shared/CTABanner';
import SectionHeader from '../components/shared/SectionHeader';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specifications, MOQ, and budget.',
    id: 'svc-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits to confirm factory capabilities, certifications, production capacity, and working conditions.',
    id: 'svc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and final inspections by our local QC team — with detailed photo reports.',
    id: 'svc-qc',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular updates on production progress, timeline adherence, and early issue detection before it becomes costly.',
    id: 'svc-production',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and ensure your goods ship on time.',
    id: 'svc-shipping',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Labeling',
    desc: 'Guidance on product compliance, CE/FCC/RoHS requirements, and correct labeling for your target market.',
    id: 'svc-compliance',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, quantity, and target price. No commitment required.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our network and verified databases to find 3–5 qualified suppliers for your review.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify capabilities, quality systems, and compliance.' },
  { num: '04', title: 'Sample & Negotiation', desc: 'We coordinate sample production and negotiate pricing, MOQ, and lead times on your behalf.' },
  { num: '05', title: 'Production & QC', desc: 'We monitor production and conduct inspections at key milestones with full photo documentation.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics, prepare export documents, and track your shipment to destination.' },
];

const products = [
  { label: 'Electronics & Components', icon: '⚡' },
  { label: 'Furniture & Home Goods', icon: '🪑' },
  { label: 'Apparel & Textiles', icon: '👕' },
  { label: 'Industrial Equipment', icon: '⚙️' },
  { label: 'Packaging & Labels', icon: '📦' },
  { label: 'Toys & Baby Products', icon: '🧸' },
  { label: 'Health & Beauty', icon: '💊' },
  { label: 'Sports & Outdoor', icon: '🏕️' },
  { label: 'Auto Parts', icon: '🔧' },
  { label: 'Building Materials', icon: '🏗️' },
  { label: 'Food & Agriculture', icon: '🌾' },
  { label: 'Custom OEM/ODM', icon: '🏭' },
];

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Factories that look good online but fail to deliver on quality or timelines.' },
  { icon: Globe, title: 'Language & Culture Barriers', desc: 'Miscommunication leading to wrong specs, delays, and costly mistakes.' },
  { icon: ClipboardCheck, title: 'No Quality Control', desc: 'Receiving defective goods with no recourse because issues weren\'t caught before shipment.' },
  { icon: TrendingUp, title: 'Overpaying for Products', desc: 'Paying above-market prices because you lack local market knowledge and negotiation leverage.' },
];

const trustPoints = [
  { value: '500+', label: 'Sourcing Projects Completed' },
  { value: '12+', label: 'Years in China Sourcing' },
  { value: '30+', label: 'Product Categories Covered' },
  { value: '98%', label: 'Client Satisfaction Rate' },
];

const testimonials = [
  {
    name: 'James Whitfield',
    role: 'CEO, HomeGoods Direct (UK)',
    text: 'SSourcing China found us a furniture supplier that passed all our quality checks. The factory audit report gave us confidence before we placed our first order. Highly professional.',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    role: 'Procurement Manager, TechRetail (Brazil)',
    text: 'We had bad experiences with previous sourcing agents. SSourcing China is different — transparent, responsive, and they actually visit the factories. Our QC rejection rate dropped to near zero.',
    rating: 5,
  },
  {
    name: 'Erik Lindqvist',
    role: 'Founder, NordicBrand (Sweden)',
    text: 'From product development to final shipment, they managed everything. The production follow-up service alone saved us from a major delay. Worth every dollar.',
    rating: 5,
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work — sourcing only, factory audit, QC inspection, or full project management. We offer transparent, project-based pricing. Contact us for a free quote.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established importers managing multiple SKUs. We tailor our service to your needs and budget.',
  },
  {
    q: 'Which regions of China do you cover?',
    a: 'We cover all major manufacturing hubs including Guangdong, Zhejiang, Jiangsu, Fujian, Shandong, and more. Our team is based in Guangzhou with partners across China.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Supplier research typically takes 5–10 business days. Factory audits add 3–5 days. Full project timelines depend on production lead times, which we communicate clearly upfront.',
  },
  {
    q: 'Can you help with product development and custom manufacturing?',
    a: 'Yes. We support OEM and ODM projects — from initial design and prototyping to mass production. We work with factories experienced in custom product development.',
  },
  {
    q: 'What happens if the goods fail quality inspection?',
    a: 'We document all issues with photos and reports, and work with the factory to resolve them before shipment. Our goal is to prevent problems, not just report them.',
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
      <section className="relative bg-navy-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-ss001"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">
              China Sourcing Agent
            </p>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              China Sourcing Agent<br />for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — with full transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-redhov text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-400 text-slate-200 hover:border-white hover:text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                How It Works
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {['Verified Suppliers', 'On-site QC Inspections', 'Full Shipping Support', 'English-speaking Team'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-navy-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((tp) => (
              <div key={tp.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{tp.value}</div>
                <div className="text-navy-100 text-sm">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Services"
            title="End-to-End Sourcing Support"
            subtitle="From finding the right supplier to delivering goods to your door — we manage every step of the China sourcing process."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-navy-200 transition-all group">
                  <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-navy-100 transition-colors">
                    <Icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{svc.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-600 transition-colors"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Problems We Solve"
            title="Common Challenges When Sourcing from China"
            subtitle="Importing from China without local support is risky. Here's what we help you avoid."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="flex gap-4 bg-white rounded-xl border border-slate-200 p-6">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{p.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Process"
            title="How We Work"
            subtitle="A structured, transparent process from your first inquiry to final delivery."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-4xl font-bold text-navy-100 mb-3">{step.num}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-600 transition-colors"
            >
              See the full process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Product Categories"
            title="Products We Source"
            subtitle="We have experience sourcing across a wide range of product categories from verified Chinese manufacturers."
            light
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {products.map((p) => (
              <div key={p.label} className="bg-navy-700 hover:bg-navy-600 rounded-lg p-4 text-center transition-colors cursor-default">
                <div className="text-2xl mb-2">{p.icon}</div>
                <p className="text-slate-200 text-sm font-medium">{p.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border-2 border-navy-400 text-slate-200 hover:border-white hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View all product categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Case Studies"
            title="Real Results for Real Buyers"
            subtitle="See how we've helped businesses like yours source successfully from China."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 'cs-furniture',
                titleId: 'cs-furniture-title',
                descId: 'cs-furniture-desc',
                title: 'Furniture Importer — UK',
                desc: 'Sourced 3 verified furniture factories, conducted audits, and reduced defect rate from 12% to under 1% through structured QC.',
                tag: 'Furniture & Home',
              },
              {
                id: 'cs-electronics',
                titleId: 'cs-electronics-title',
                descId: 'cs-electronics-desc',
                title: 'Electronics Brand — USA',
                desc: 'Managed full OEM production of a consumer electronics product from prototype to 10,000-unit shipment with CE certification support.',
                tag: 'Electronics',
              },
              {
                id: 'cs-apparel',
                titleId: 'cs-apparel-title',
                descId: 'cs-apparel-desc',
                title: 'Apparel Startup — Australia',
                desc: 'Found a compliant garment factory, negotiated 30% lower unit cost vs. previous supplier, and coordinated first sea freight shipment.',
                tag: 'Apparel & Textiles',
              },
            ].map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    data-strk-img-id={`${cs.id}-img-ss`}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-navy-700 text-white text-xs font-semibold px-2 py-1 rounded">
                    {cs.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 id={cs.titleId} className="font-semibold text-slate-900 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed">{cs.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-600 transition-colors"
            >
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Client Feedback"
            title="What Our Clients Say"
            subtitle="We work with buyers across Europe, North America, Australia, and beyond."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from buyers new to China sourcing."
          />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-slate-50 rounded-xl border border-slate-200 p-5 cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-slate-900 list-none">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
