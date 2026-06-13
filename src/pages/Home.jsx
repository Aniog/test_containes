import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, ArrowRight, ChevronDown, ChevronUp,
  Factory, Box, Palette, Cpu, Sofa, Shirt, ChevronRight, Star, Users,
  Globe, Clock, Award, TrendingUp, Minus, Plus, CheckCircle2, XCircle,
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ContactForm from '@/components/ContactForm';

/* ─── Hero ─── */
function HeroSection() {
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <section ref={containerRef} className="relative bg-slate-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-ssourcing"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            We find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-600 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-white/25 text-white font-medium hover:bg-white/10 transition-colors"
            >
              See How It Works
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Suppliers</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>24-Hour Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>40+ Countries Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We tap into our extensive network of factories across China to find suppliers that match your quality standards, price targets, and production capacity.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site audits to verify factory licenses, production capabilities, equipment, certifications, and financial stability before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    desc: 'Pre-shipment inspections, during-production checks, and container loading supervision to ensure every batch meets your specifications.',
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'We monitor your orders daily, push for on-time delivery, catch issues early, and keep you updated with photos and progress reports.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We handle documentation, customs clearance support, and coordinate with freight forwarders to get your goods delivered on schedule.',
  },
];

function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">End-to-End Sourcing Services</h2>
          <p className="text-slate-500 text-lg">From finding suppliers to delivering goods to your door, we handle every step of the sourcing process.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s) => (
            <div key={s.title} className="group p-6 lg:p-8 rounded-xl border border-slate-100 bg-white hover:shadow-lg hover:border-blue-100 transition-all">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                <s.icon className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center gap-2 text-blue-700 font-medium hover:text-blue-800 transition-colors">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Process ─── */
const steps = [
  { num: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and quality standards.' },
  { num: '02', title: 'We Find & Verify Suppliers', desc: 'Our team sources 3-5 qualified factories, verifies their credentials, and sends you detailed reports.' },
  { num: '03', title: 'Sampling & Negotiation', desc: 'We coordinate samples, negotiate pricing and terms, and help you choose the best supplier.' },
  { num: '04', title: 'Order & Production Monitoring', desc: 'We place the PO, track production, perform QC inspections, and resolve any issues on the ground.' },
  { num: '05', title: 'Shipping & Delivery', desc: 'We arrange logistics, supervise loading, and ensure your goods arrive safely and on time.' },
];

function ProcessSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How Our Sourcing Process Works</h2>
          <p className="text-slate-500 text-lg">A simple, transparent process that keeps you in control while we do the heavy lifting in China.</p>
        </div>
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />
          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => (
              <div key={step.num} className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${i > 0 ? 'lg:mt-12' : ''}`}>
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-start gap-4 lg:gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm z-10">
                      {step.num}
                    </div>
                    <div className="pb-8 lg:pb-0">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
                <div className={`hidden lg:block ${i % 2 === 1 ? 'lg:order-1' : ''}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Products ─── */
const products = [
  { icon: Cpu, name: 'Electronics & Tech', examples: 'Gadgets, accessories, IoT devices, cables' },
  { icon: Shirt, name: 'Apparel & Textiles', examples: 'Clothing, bags, fabrics, footwear' },
  { icon: Factory, name: 'Machinery & Parts', examples: 'Industrial equipment, auto parts, tools' },
  { icon: Box, name: 'Packaging Materials', examples: 'Boxes, bags, bottles, labels' },
  { icon: Sofa, name: 'Home & Garden', examples: 'Furniture, decor, kitchenware, lighting' },
  { icon: Palette, name: 'Custom OEM Products', examples: 'Branded goods, private label manufacturing' },
];

function ProductsSection() {
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <section ref={containerRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Products We Source</h2>
          <p className="text-slate-500 text-lg">From electronics to textiles, we source a wide range of products across major Chinese manufacturing hubs.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white hover:shadow-lg transition-all">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  data-strk-img-id={`product-${p.name.toLowerCase().replace(/[^a-z]/g, '')}-img`}
                  data-strk-img={`[product-${p.name.toLowerCase().replace(/[^a-z]/g, '')}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <p.icon className="w-5 h-5 text-blue-700" />
                  <h3 id={`product-${p.name.toLowerCase().replace(/[^a-z]/g, '')}-title`} className="font-semibold text-slate-900">{p.name}</h3>
                </div>
                <p className="text-sm text-slate-500">{p.examples}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/products" className="inline-flex items-center gap-2 text-blue-700 font-medium hover:text-blue-800 transition-colors">
            Browse All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Problems We Solve ─── */
const problems = [
  { problem: 'Cannot find reliable suppliers', solution: 'Pre-verified factory network with on-site audits', icon: CheckCircle2 },
  { problem: 'Quality issues after shipment', solution: 'Multi-stage inspections before any goods leave the factory', icon: CheckCircle2 },
  { problem: 'Language and communication barriers', solution: 'Bilingual project managers handle every conversation', icon: CheckCircle2 },
  { problem: 'Production delays and missed deadlines', solution: 'Daily follow-ups and early warning system for delays', icon: CheckCircle2 },
  { problem: 'Hidden costs and overcharging', solution: 'Transparent pricing with no hidden fees or markups', icon: CheckCircle2 },
  { problem: 'Complex logistics and customs paperwork', solution: 'End-to-end shipping coordination and documentation support', icon: CheckCircle2 },
];

function ProblemsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Problems We Solve</h2>
          <p className="text-slate-500 text-lg">Common sourcing headaches and how SSourcing China eliminates them.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {problems.map((item) => (
            <div key={item.problem} className="bg-white rounded-xl p-6 border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-0.5">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-900 font-medium mb-1">{item.problem}</p>
                  <div className="flex items-start gap-2">
                    <item.icon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-500">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Points ─── */
const stats = [
  { value: '500+', label: 'Factories Verified' },
  { value: '120+', label: 'Clients Worldwide' },
  { value: '$50M+', label: 'Goods Sourced' },
  { value: '98%', label: 'On-Time Delivery' },
];

const trustPoints = [
  { icon: ShieldCheck, title: 'On-Site Verification', desc: 'We physically visit factories before recommending them to you.' },
  { icon: Users, title: 'Dedicated Account Manager', desc: 'A single bilingual point of contact for your entire project.' },
  { icon: Award, title: 'Transparent Pricing', desc: 'No hidden markups. You see exactly what suppliers charge.' },
  { icon: Clock, title: 'Real-Time Updates', desc: 'Photo reports and status updates at every stage of production.' },
];

function TrustSection() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 border-b border-slate-700 pb-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-1">{s.value}</div>
              <div className="text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Buyers Trust SSourcing China</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We do not just connect you to suppliers — we stand behind every recommendation with verified data, on-site presence, and a commitment to protecting your investment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustPoints.map((tp) => (
              <div key={tp.title}>
                <tp.icon className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="font-semibold text-white mb-1.5">{tp.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{tp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Case Studies ─── */
const cases = [
  {
    client: 'Nordic Home Co.',
    industry: 'Furniture & Home Decor',
    location: 'Sweden',
    result: 'Reduced sourcing costs by 32% and cut lead time from 90 to 55 days.',
    tags: ['Furniture', 'Cost Reduction', 'Europe'],
  },
  {
    client: 'TechGear Inc.',
    industry: 'Consumer Electronics',
    location: 'USA',
    result: 'Sourced 50,000 units of custom Bluetooth speakers with zero defect rate.',
    tags: ['Electronics', 'OEM', 'Quality Control'],
  },
  {
    client: 'GlobalPack Ltd.',
    industry: 'Packaging Materials',
    location: 'UK',
    result: 'Found 3 qualified suppliers within 2 weeks and saved 28% on packaging costs.',
    tags: ['Packaging', 'Supplier Match', 'UK'],
  },
];

function CaseStudiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Case Studies</h2>
            <p className="text-slate-500 text-lg">Real results from real clients who chose SSourcing China as their sourcing partner.</p>
          </div>
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-blue-700 font-medium hover:text-blue-800 transition-colors shrink-0">
            View All Cases <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.client} className="rounded-xl border border-slate-100 bg-white p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 font-bold text-sm">
                  {c.client.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{c.client}</p>
                  <p className="text-xs text-slate-500">{c.industry} &middot; {c.location}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{c.result}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our sourcing fee is typically 3-10% of the order value, depending on product complexity and order size. We also offer flat-fee sourcing packages for smaller orders. You will receive a clear, transparent quote before any work begins — no hidden charges.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard products, we usually present 3-5 verified suppliers within 5-7 business days. For highly specialized or custom products, it may take 10-14 days to find and vet the right factory.',
  },
  {
    q: 'Do you handle quality inspections?',
    a: 'Yes. We perform inspections at multiple stages: pre-production (raw materials), during production (in-process checks), and pre-shipment (final inspection). You receive detailed inspection reports with photos and measurements.',
  },
  {
    q: 'What if I do not like the samples?',
    a: 'We source from multiple suppliers simultaneously, so if one sample does not meet your standards, we move to the next option at no additional cost. We also provide feedback to suppliers to improve samples before shipping them to you.',
  },
  {
    q: 'Can you help with shipping and customs?',
    a: 'Absolutely. We coordinate with freight forwarders, prepare shipping documents, supervise container loading, and provide support for customs clearance. We can handle FOB, CIF, DDP, or any Incoterms you prefer.',
  },
  {
    q: 'Do I need a business license to work with you?',
    a: 'No. We work with businesses of all sizes, from solo entrepreneurs to multinational corporations. Whether you are placing a trial order of 100 units or a container load, we can help.',
  },
];

function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-lg">Everything you need to know about working with a China sourcing agent.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-100 overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-medium text-slate-900 pr-4">{faq.q}</span>
                {openIdx === i ? (
                  <Minus className="w-5 h-5 text-slate-400 shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              {openIdx === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA / Inquiry ─── */
function InquirySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Get a Free Sourcing Quote</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Tell us about your product and we will send you a detailed sourcing plan including supplier options, pricing estimates, and timelines — completely free, no commitment required.
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Free Initial Assessment</p>
                  <p className="text-sm text-slate-500">We analyze your requirements at no cost.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Response Within 24 Hours</p>
                  <p className="text-sm text-slate-500">Our team reviews every inquiry personally.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">No Obligation</p>
                  <p className="text-sm text-slate-500">You decide whether to move forward. No pressure.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquirySection />
    </div>
  );
}
