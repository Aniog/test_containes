import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search,
  Shield,
  ClipboardCheck,
  Truck,
  TrendingUp,
  AlertTriangle,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Building2,
  Globe2,
  Award,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';

// Services data
const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate reliable manufacturers across China based on your product specifications, quality requirements, and budget.',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to verify business licenses, production capacity, quality management systems, and social compliance.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your standards before they leave the factory.',
  },
  {
    icon: TrendingUp,
    title: 'Production Monitoring',
    description: 'Regular progress updates and factory visits to keep your production on schedule and address issues before they become problems.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs documentation, and delivery tracking to your destination.',
  },
];

// Process steps
const processSteps = [
  { step: 1, title: 'Submit Your Requirements', description: 'Tell us what you need — product details, quantities, quality standards, and target timeline.' },
  { step: 2, title: 'Supplier Matching', description: 'We search our verified network and shortlist the most suitable manufacturers for your products.' },
  { step: 3, title: 'Quotation & Sampling', description: 'Receive competitive quotes and request samples to evaluate quality before committing to production.' },
  { step: 4, title: 'Production & QC', description: 'We monitor production, conduct inspections, and keep you informed at every stage.' },
  { step: 5, title: 'Shipping & Delivery', description: 'We handle logistics, customs documentation, and coordinate delivery to your warehouse.' },
];

// Products categories
const productCategories = [
  'Electronics & Components',
  'Textiles & Apparel',
  'Home & Garden Products',
  'Machinery & Industrial Parts',
  'Packaging & Printing',
  'Toys & Gifts',
  'Automotive Parts',
  'Beauty & Personal Care',
  'Sports & Outdoor Equipment',
  'Building Materials',
  'Food & Beverage',
  'Medical Supplies',
];

// Problems we solve
const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'We verify every factory before you commit, reducing the risk of fraud and poor quality.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Transparent pricing with no surprise fees. You know exactly what you are paying for.',
  },
  {
    icon: Clock,
    title: 'Communication Barriers',
    description: 'Our bilingual team bridges the language gap and keeps you updated in real time.',
  },
  {
    icon: Shield,
    title: 'Quality Issues',
    description: 'Multi-stage inspections catch defects before products ship, saving you costly returns.',
  },
];

// Trust points
const trustPoints = [
  { icon: Building2, value: '500+', label: 'Verified Factories' },
  { icon: Globe2, value: '40+', label: 'Countries Served' },
  { icon: Users, value: '1,200+', label: 'Satisfied Clients' },
  { icon: Award, value: '12+', label: 'Years Experience' },
];

// Case studies preview
const caseStudies = [
  {
    title: 'US Retailer Saves 23% on Electronics Sourcing',
    category: 'Electronics',
    excerpt: 'A mid-size US retailer needed a reliable manufacturer for consumer electronics. We identified a verified factory in Shenzhen, negotiated pricing, and managed quality control throughout production.',
    result: '23% cost reduction, zero defect rate on first shipment',
  },
  {
    title: 'European Brand Launches Textile Line from China',
    category: 'Textiles',
    excerpt: 'A European fashion startup wanted to produce a clothing line in China but lacked local contacts. We sourced three qualified factories, arranged samples, and oversaw the first production run.',
    result: 'Successful launch, on-time delivery, full compliance',
  },
  {
    title: 'Australian Company Avoids $50K in Defective Goods',
    category: 'Quality Control',
    excerpt: 'During a pre-shipment inspection, our team discovered a critical quality issue that would have resulted in a full container of defective products. The factory corrected the issue before shipping.',
    result: '$50K in potential losses prevented',
  },
];

// FAQ data
const faqs = [
  {
    question: 'How do you find and verify suppliers?',
    answer: 'We use a combination of online research, industry databases, trade show contacts, and on-site factory audits. Every supplier we recommend has been verified for business license, production capacity, and quality management systems.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our fees depend on the scope of services required. We offer transparent pricing with no hidden costs. Contact us for a free quote tailored to your specific sourcing needs.',
  },
  {
    question: 'Can you handle small order quantities?',
    answer: 'Yes, we work with buyers of all sizes. While some factories have minimum order requirements, we can help negotiate lower MOQs or find factories that accommodate smaller orders.',
  },
  {
    question: 'How do you ensure product quality?',
    answer: 'We conduct multi-stage inspections: pre-production checks, during-production monitoring, and pre-shipment inspections. We also arrange third-party lab testing when required.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we coordinate the entire logistics process including freight forwarding, customs documentation, and delivery to your destination port or warehouse.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier identification typically takes 1-2 weeks. Sampling adds another 2-4 weeks. Full production timelines depend on product complexity and order quantity.',
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-900 pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-blue-700 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="pb-5 text-slate-600 leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

export default function HomePage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="container-custom relative z-10 py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-700/50 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Globe2 className="w-4 h-4" />
              <span>Trusted by buyers in 40+ countries</span>
            </div>
            <h1 id="hero-title" className="heading-1 text-white mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping — all through one trusted partner based in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-accent text-lg">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary border-white text-white hover:bg-white/10 text-lg">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points Bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustPoints.map((point, i) => (
              <div key={i} className="text-center">
                <point.icon className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-slate-900">{point.value}</div>
                <div className="text-sm text-slate-500">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="heading-2 text-slate-900 mb-4">Our Sourcing Services</h2>
            <p className="text-lg text-slate-600">End-to-end support for importing from China, from supplier discovery to final delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <div key={i} className="card">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="heading-3 text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-secondary">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="heading-2 text-slate-900 mb-4">How Our Sourcing Process Works</h2>
            <p className="text-lg text-slate-600">A clear, step-by-step process designed to make importing from China simple and reliable.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4">
            {processSteps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-14 h-14 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-full w-full h-0.5 bg-slate-200 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="btn-secondary">
              Learn More About Our Process
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="heading-2 text-slate-900 mb-4">Products We Source</h2>
            <p className="text-lg text-slate-600">We source a wide range of products from verified Chinese manufacturers across multiple industries.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {productCategories.map((category, i) => (
              <div key={i} className="card flex items-center gap-3 py-4 px-5">
                <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">{category}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="btn-secondary">
              View All Product Categories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="heading-2 text-slate-900 mb-4">Problems We Solve for International Buyers</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Sourcing from China can be challenging. We remove the common risks and frustrations so you can focus on growing your business.
              </p>
              <div className="space-y-6">
                {problems.map((problem, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <problem.icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{problem.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200"
                data-strk-bg-id="problems-bg-d4e5f6"
                data-strk-bg="[problems-title] [problems-subtitle]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="heading-2 text-slate-900 mb-4">Client Success Stories</h2>
            <p className="text-lg text-slate-600">Real results from real buyers who trusted us with their China sourcing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies.map((study, i) => (
              <div key={i} className="card flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">{study.category}</span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <h3 className="heading-3 text-slate-900 mb-3">{study.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{study.excerpt}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 text-sm font-medium">Result: {study.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="btn-secondary">
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-600">Answers to the most common questions about our sourcing services.</p>
            </div>
            <div>
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">Ready to Source from China?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us what you need and we will find the right suppliers, verify quality, and handle the logistics. Get started with a free consultation.
          </p>
          <Link to="/contact" className="btn-accent text-lg">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
