import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// Temporarily disabled SDK import to debug blank page issue
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  DollarSign,
  Users,
  Award,
  Globe,
  TrendingUp,
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Product Sourcing',
    description: 'We find reliable manufacturers matching your exact specifications, quality standards, and budget requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Supplier Verification',
    description: 'On-site factory audits to verify business licenses, production capacity, and quality management systems.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections, during-production checks, and container loading supervision to ensure quality.',
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular progress updates and on-site monitoring to keep your production on schedule and on track.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including customs clearance, freight forwarding, and delivery tracking.',
  },
];

const products = [
  { name: 'Electronics & Components', icon: 'electronics' },
  { name: 'Textiles & Apparel', icon: 'textiles' },
  { name: 'Machinery & Equipment', icon: 'machinery' },
  { name: 'Home & Garden Products', icon: 'home' },
  { name: 'Automotive Parts', icon: 'automotive' },
  { name: 'Packaging Materials', icon: 'packaging' },
  { name: 'Building Materials', icon: 'building' },
  { name: 'Consumer Goods', icon: 'consumer' },
];

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'We verify every factory before you commit, reducing the risk of fraud and substandard products.',
  },
  {
    icon: Clock,
    title: 'Communication Barriers',
    description: 'Our bilingual team handles all negotiations and technical discussions on your behalf.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Transparent pricing with no surprise fees. You know exactly what you are paying for.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Concerns',
    description: 'Multi-stage inspections ensure products meet your specifications before they ship.',
  },
];

const trustPoints = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Globe, value: '40+', label: 'Countries' },
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: TrendingUp, value: '2,000+', label: 'Orders Completed' },
];

const caseStudies = [
  {
    title: 'Electronics Manufacturer Saves 23% on Component Costs',
    category: 'Electronics',
    summary: 'A US-based electronics company needed reliable PCB manufacturers. We identified three verified suppliers, negotiated pricing, and managed quality control throughout production.',
    result: '23% cost reduction, 15% faster delivery',
  },
  {
    title: 'Fashion Brand Launches Sustainable Clothing Line',
    category: 'Textiles',
    summary: 'A European fashion brand wanted to source organic cotton garments. We audited factories for sustainability certifications and managed the entire production process.',
    result: 'GOTS-certified production, zero defects',
  },
  {
    title: 'Automotive Supplier Secures ISO-Certified Partner',
    category: 'Automotive',
    summary: 'A German automotive parts distributor needed an ISO 9001-certified manufacturer in China. We conducted thorough audits and facilitated a long-term partnership.',
    result: 'ISO 9001 verified, 3-year partnership',
  },
];

const faqs = [
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits that include verifying business licenses, checking production facilities, reviewing quality management systems, and assessing financial stability. We also check references from existing clients.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our fees are transparent and based on the scope of work. We charge a sourcing fee percentage of the order value, with additional fees for specific services like factory audits or quality inspections. There are no hidden costs.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier identification typically takes 1-2 weeks. Factory verification adds another 1-2 weeks. Full production cycles depend on the product complexity, but we provide detailed timelines upfront.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we coordinate the entire logistics process including freight forwarding, customs documentation, and delivery tracking. We work with trusted shipping partners to ensure smooth delivery.',
  },
  {
    question: 'What if there are quality issues?',
    answer: 'Our multi-stage inspection process catches issues before products ship. If problems arise, we work directly with the supplier to resolve them, arrange rework, or find alternative solutions at no additional cost to you.',
  },
];

export default function HomePage() {
  const containerRef = useRef(null);

  // Temporarily disabled SDK image loading to debug blank page issue
  // useEffect(() => {
  //   return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  // }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China. Transparent pricing, professional service.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition border border-white/20"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <point.icon className="w-8 h-8 text-blue-800 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-slate-900">{point.value}</div>
                <div className="text-sm text-slate-500 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Services</h2>
            <p className="mt-4 text-lg text-slate-600">
              End-to-end sourcing support from supplier identification to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-800 font-medium hover:text-blue-900 transition"
            >
              View all services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How It Works</h2>
            <p className="mt-4 text-lg text-slate-600">
              A straightforward process designed to minimize risk and maximize efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Submit Your Request', desc: 'Tell us what you need, including specifications, quantity, and timeline.' },
              { step: '02', title: 'Supplier Matching', desc: 'We identify and verify suppliers that match your requirements.' },
              { step: '03', title: 'Production & QC', desc: 'We monitor production and conduct quality inspections at key stages.' },
              { step: '04', title: 'Shipping & Delivery', desc: 'We coordinate logistics and track your order to final delivery.' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-blue-100 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-blue-800 font-medium hover:text-blue-900 transition"
            >
              Learn more about our process
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Products We Source</h2>
            <p className="mt-4 text-lg text-slate-600">
              We source across multiple industries with deep expertise in each category.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 p-6 text-center hover:shadow-md transition-shadow"
              >
                <div
                  className="w-full aspect-square rounded-lg mb-4 overflow-hidden"
                  data-strk-bg-id={`product-bg-${index}-d4e5f6`}
                  data-strk-bg={`[product-name-${index}]`}
                  data-strk-bg-ratio="1x1"
                  data-strk-bg-width="400"
                />
                <h3 id={`product-name-${index}`} className="font-medium text-slate-900">{product.name}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center text-blue-800 font-medium hover:text-blue-900 transition"
            >
              See all product categories
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Problems We Solve</h2>
            <p className="mt-4 text-lg text-slate-600">
              Common challenges when sourcing from China, and how we address them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex gap-4 bg-slate-50 rounded-xl border border-slate-200 p-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{problem.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Case Studies</h2>
            <p className="mt-4 text-lg text-slate-600">
              Real results from real clients. See how we have helped businesses source from China successfully.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-full aspect-video"
                  data-strk-bg-id={`case-study-bg-${index}-g7h8i9`}
                  data-strk-bg={`[case-study-title-${index}] [case-study-category-${index}]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                />
                <div className="p-6">
                  <span className="inline-block bg-blue-50 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {study.category}
                  </span>
                  <h3 id={`case-study-title-${index}`} className="text-lg font-semibold text-slate-900 mb-2">
                    {study.title}
                  </h3>
                  <p id={`case-study-category-${index}`} className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {study.summary}
                  </p>
                  <div className="flex items-center gap-2 text-green-700 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    {study.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-blue-800 font-medium hover:text-blue-900 transition"
            >
              View all case studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-slate-600">
              Answers to common questions about our sourcing services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Source from China?</h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Tell us what you need and we will find the right suppliers for your business. No commitment, no hidden fees.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-slate-900 pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-slate-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
