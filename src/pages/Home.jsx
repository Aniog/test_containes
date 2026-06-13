import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Shield, ClipboardCheck, Truck, ArrowRight, 
  CheckCircle, Star, Users, Building2, Globe, BarChart3,
  Factory, Package, Ship, Warehouse, HeadphonesIcon,
  ChevronRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import InquiryForm from '@/components/InquiryForm';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable manufacturers that match your product specifications, budget, and quality requirements.',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to verify factory credentials, production capacity, certifications, and compliance with international standards.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections, in-process quality control, and product testing to ensure your goods meet specifications.',
  },
  {
    icon: Truck,
    title: 'Production Follow-up',
    description: 'Dedicated project management to monitor production timelines, resolve issues, and keep your order on track.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management including consolidation, freight booking, customs documentation, and door-to-door delivery.',
  },
  {
    icon: Warehouse,
    title: 'Sample Sourcing',
    description: 'Fast sample procurement and evaluation so you can validate product quality before committing to full production.',
  },
];

const process = [
  {
    step: '01',
    title: 'Tell Us Your Requirements',
    description: 'Share your product specifications, target price, quality standards, and delivery timeline.',
  },
  {
    step: '02',
    title: 'Supplier Research & Shortlisting',
    description: 'We research and pre-screen suppliers, presenting you with 3-5 qualified options.',
  },
  {
    step: '03',
    title: 'Factory Audit & Verification',
    description: 'Our team visits and audits shortlisted factories, verifying capabilities and credentials.',
  },
  {
    step: '04',
    title: 'Sample Evaluation',
    description: 'We coordinate sample production and testing to validate product quality.',
  },
  {
    step: '05',
    title: 'Order Management & QC',
    description: 'We manage the order, conduct in-process and pre-shipment inspections, and keep you updated.',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    description: 'We handle logistics, documentation, and shipping to deliver your goods safely and on time.',
  },
];

const products = [
  { icon: Package, name: 'Electronics & Components' },
  { icon: Building2, name: 'Industrial Machinery & Parts' },
  { icon: Package, name: 'Home & Kitchen Products' },
  { icon: Package, name: 'Apparel & Textiles' },
  { icon: Package, name: 'Furniture & Home Decor' },
  { icon: Package, name: 'Auto Parts & Accessories' },
  { icon: Package, name: 'Packaging & Printing' },
  { icon: Package, name: 'Building Materials' },
  { icon: Package, name: 'Medical Supplies & Equipment' },
  { icon: Package, name: 'Sports & Outdoor Goods' },
  { icon: Package, name: 'Personal Care & Beauty' },
  { icon: Package, name: 'Agricultural Products' },
];

const problems = [
  {
    problem: 'Scams and unreliable suppliers',
    solution: 'We verify every factory with on-site audits, business licenses, and third-party database checks.',
  },
  {
    problem: 'Poor product quality',
    solution: 'Rigorous quality inspections at every stage — from raw materials to pre-shipment.',
  },
  {
    problem: 'Communication difficulties',
    solution: 'Our team is fluent in English and Mandarin, bridging the language and cultural gap.',
  },
  {
    problem: 'Missed deadlines',
    solution: 'Active production monitoring with weekly progress reports and proactive issue resolution.',
  },
  {
    problem: 'Hidden costs and fees',
    solution: 'Transparent pricing with no hidden fees. You see all costs upfront in writing.',
  },
];

const trustPoints = [
  { icon: Users, stat: '500+', label: 'Global Buyers Served' },
  { icon: Factory, stat: '2,000+', label: 'Factories Vetted' },
  { icon: ClipboardCheck, stat: '10,000+', label: 'Inspections Completed' },
  { icon: Globe, stat: '30+', label: 'Countries Shipped To' },
];

const testimonials = [
  {
    quote: 'SSourcing China helped us find a reliable manufacturer for our packaging line. Their factory audit saved us from a bad deal with an unverified supplier.',
    author: 'Thomas Mueller',
    role: 'Procurement Manager, Germany',
  },
  {
    quote: 'The quality inspection service is thorough and professional. We\'ve reduced our defect rate from 12% to under 1% since working with them.',
    author: 'Sarah Chen',
    role: 'Operations Director, Singapore',
  },
  {
    quote: 'Their production follow-up saved us from a 3-week delay. They spotted the issue early and coordinated the fix before it impacted our timeline.',
    author: 'James Okonkwo',
    role: 'CEO, Nigeria',
  },
];

const faqs = [
  {
    q: 'What types of products can you source?',
    a: 'We source across a wide range of categories including electronics, machinery, home goods, apparel, furniture, auto parts, packaging, building materials, medical supplies, and more. Contact us with your specific product requirements.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits checking business licenses, production capacity, quality management systems, export experience, and compliance with international standards. We also verify through government databases and trade references.',
  },
  {
    q: 'What are your fees?',
    a: 'Our fees are transparent and project-based. Typically we charge a percentage of the order value or a flat fee depending on scope. We provide a detailed quote upfront with no hidden charges.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Timelines vary by product complexity. A typical sourcing project takes 4-8 weeks from requirements gathering to sample approval. Production lead time depends on the manufacturer.',
  },
  {
    q: 'Do you handle shipping and logistics?',
    a: 'Yes, we coordinate all shipping arrangements including freight booking, consolidation, customs documentation, and door-to-door delivery. We work with major freight forwarders to get competitive rates.',
  },
  {
    q: 'What if there is a quality issue?',
    a: 'Our quality inspections catch issues before shipment. If a problem arises despite our checks, we mediate between you and the supplier to find a resolution. Our inspection reports provide documented evidence.',
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) ImageHelper.loadImages(strkImgConfig, heroRef.current);
  }, []);

  useEffect(() => {
    if (servicesRef.current) ImageHelper.loadImages(strkImgConfig, servicesRef.current);
  }, []);

  useEffect(() => {
    if (processRef.current) ImageHelper.loadImages(strkImgConfig, processRef.current);
  }, []);

  useEffect(() => {
    if (ctaRef.current) ImageHelper.loadImages(strkImgConfig, ctaRef.current);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <p id="hero-subtitle" className="text-brand-400 font-semibold text-sm md:text-base mb-4 tracking-wider uppercase">
              China-Based Sourcing Agent
            </p>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping — 
              all with a single trusted partner on the ground in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg px-8 py-4 text-base transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center border-2 border-slate-400 text-slate-200 hover:bg-slate-800 font-semibold rounded-lg px-8 py-4 text-base transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-600">{item.stat}</div>
                <div className="text-sm text-slate-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Problems We Solve</h2>
          <p className="text-lg text-slate-500 text-center max-w-2xl mx-auto mb-12">
            Sourcing from China comes with risks. We help you avoid the common pitfalls.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((item) => (
              <div key={item.problem} className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-500 text-xs font-bold">!</span>
                  </div>
                  <h3 className="font-semibold text-slate-800">{item.problem}</h3>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Sourcing Services</h2>
          <p className="text-lg text-slate-500 text-center max-w-2xl mx-auto mb-12">
            End-to-end sourcing support from supplier discovery to delivery at your door.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="font-semibold text-lg text-slate-800 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center text-brand-600 hover:text-brand-700 font-semibold text-sm"
            >
              View All Services Details
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section ref={processRef} id="process" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-lg text-slate-500 text-center max-w-2xl mx-auto mb-12">
            A structured, transparent process from your initial inquiry to delivered goods.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step) => (
              <div key={step.step} className="relative bg-white rounded-xl border border-slate-200 p-6">
                <div className="text-3xl font-bold text-brand-200 mb-2">{step.step}</div>
                <h3 className="font-semibold text-lg text-slate-800 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-brand-600 hover:text-brand-700 font-semibold text-sm"
            >
              Learn More About Our Process
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Products We Source</h2>
          <p className="text-lg text-slate-500 text-center max-w-2xl mx-auto mb-12">
            We source across a wide range of industries and product categories.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.name} className="bg-white rounded-xl border border-slate-200 p-4 text-center hover:border-brand-300 transition-colors">
                <product.icon className="w-8 h-8 text-brand-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-slate-700">{product.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center text-brand-600 hover:text-brand-700 font-semibold text-sm"
            >
              View Full Product Categories
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-lg text-slate-500 text-center max-w-2xl mx-auto mb-12">
            Trusted by buyers around the world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div key={item.author} className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm text-slate-800">{item.author}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-500 text-center max-w-2xl mx-auto mb-12">
            Common questions about our sourcing services.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-xl border border-slate-200 p-5">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-medium text-slate-800 pr-4">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-slate-400 shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Inquiry Form */}
      <section ref={ctaRef} id="quote" className="py-16 md:py-24 bg-brand-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-2">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-slate-500 text-center mb-8 max-w-xl mx-auto">
              Tell us what you need, and we will get back to you within 24 hours with a 
              free assessment and proposal.
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}