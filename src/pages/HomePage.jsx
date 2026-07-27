import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Shield, ClipboardCheck, Factory, Ship,
  ArrowRight, CheckCircle, AlertTriangle, TrendingUp, TrendingDown,
  Users, Award, Clock, Star, ChevronDown, ChevronUp
} from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist reliable manufacturers that match your product requirements, budget, and quality standards.',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to verify business licenses, production capacity, quality management systems, and social compliance.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular progress updates and on-site monitoring to keep your orders on schedule and resolve issues early.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs documentation, and delivery tracking.',
  },
];

const processSteps = [
  { step: 1, title: 'Submit Your Request', description: 'Tell us what you need — product details, quantity, target price, and timeline.' },
  { step: 2, title: 'Supplier Matching', description: 'We search our verified network and shortlist the best-fit manufacturers for your project.' },
  { step: 3, title: 'Quotation & Sampling', description: 'Receive competitive quotes and request samples before committing to production.' },
  { step: 4, title: 'Production & QC', description: 'We monitor production and conduct quality inspections at key milestones.' },
  { step: 5, title: 'Shipping & Delivery', description: 'We coordinate logistics and handle documentation to get your goods delivered safely.' },
];

const productCategories = [
  'Electronics & Components',
  'Home & Garden Products',
  'Apparel & Textiles',
  'Industrial Equipment',
  'Packaging & Printing',
  'Automotive Parts',
  'Sports & Outdoor',
  'Beauty & Personal Care',
];

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'We verify every factory before you engage, reducing the risk of fraud and poor quality.',
  },
  {
    icon: Clock,
    title: 'Communication Barriers',
    description: 'Our bilingual team bridges the language gap and ensures clear, timely communication.',
  },
  {
    icon: TrendingDown,
    title: 'Hidden Costs',
    description: 'Transparent pricing with no surprise fees. You know exactly what you are paying for.',
  },
  {
    icon: Users,
    title: 'Quality Inconsistency',
    description: 'Multi-stage inspections catch defects before shipment, protecting your brand reputation.',
  },
];

const trustPoints = [
  { icon: Award, value: '10+', label: 'Years of Experience' },
  { icon: Users, value: '500+', label: 'Global Clients Served' },
  { icon: Factory, value: '2,000+', label: 'Verified Suppliers' },
  { icon: Star, value: '98%', label: 'Client Satisfaction Rate' },
];

const caseStudies = [
  {
    title: 'Electronics Manufacturer for US Retailer',
    industry: 'Electronics',
    challenge: 'A US retailer needed a reliable manufacturer for consumer electronics with strict quality standards.',
    solution: 'We identified 3 qualified factories, conducted on-site audits, and managed the entire production process.',
    result: 'Delivered 50,000 units on time with a defect rate below 0.5%.',
  },
  {
    title: 'Textile Sourcing for European Fashion Brand',
    industry: 'Apparel',
    challenge: 'A European brand sought sustainable fabric suppliers with fair labor practices.',
    solution: 'We audited 8 factories, verified certifications, and negotiated favorable terms.',
    result: 'Established a long-term partnership with a certified supplier, reducing costs by 18%.',
  },
  {
    title: 'Industrial Parts for Australian Distributor',
    industry: 'Industrial',
    challenge: 'An Australian company needed custom-machined parts with tight tolerances.',
    solution: 'We sourced specialized CNC manufacturers, managed prototyping, and oversaw quality control.',
    result: 'Achieved 99.2% pass rate on first-article inspections and consistent batch quality.',
  },
];

const faqs = [
  {
    question: 'How do you find and verify suppliers?',
    answer: 'We use a multi-step verification process that includes business license checks, on-site factory audits, production capacity assessment, and reference checks with existing clients. Every supplier in our network has been physically visited and evaluated.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our fees are transparent and based on the scope of services you need. We offer project-based pricing for sourcing, per-inspection fees for quality control, and retainer options for ongoing support. There are no hidden charges.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier shortlisting typically takes 5-10 business days. Sampling adds 2-4 weeks depending on the product. Full production timelines vary by order size and complexity. We provide realistic timelines upfront.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we coordinate the entire logistics process including freight forwarding, customs documentation, and delivery to your warehouse. We work with trusted logistics partners to ensure smooth delivery.',
  },
  {
    question: 'What if there is a quality issue?',
    answer: 'Our inspection process is designed to catch issues before shipment. If a problem is found, we work with the factory to resolve it before goods leave China. We also help negotiate remedies if issues arise after delivery.',
  },
  {
    question: 'Can you source any product from China?',
    answer: 'We source a wide range of products including electronics, textiles, industrial equipment, packaging, and more. If you have a specific product in mind, contact us and we will let you know if it falls within our expertise.',
  },
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-slate-900 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-slate-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-slate-600">{answer}</div>
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
        <div className="container-main section-padding">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-600/50 px-4 py-1.5 text-sm font-medium">
                Trusted by 500+ Global Buyers
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="mt-6 text-lg text-blue-100 max-w-xl">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality,
                follow production, and coordinate shipping — all from one trusted partner.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-accent">
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/how-it-works" className="btn-secondary text-white border-white/30 hover:bg-white/10">
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div
                data-strk-bg-id="hero-bg-1a2b3c"
                data-strk-bg="[hero-title] [hero-subtitle]"
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="1200"
                className="rounded-2xl bg-blue-600/30 aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container-main py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <point.icon className="mx-auto h-8 w-8 text-blue-700" />
                <div className="mt-3 text-3xl font-bold text-slate-900">{point.value}</div>
                <div className="mt-1 text-sm text-slate-600">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="text-center">
            <span className="badge">Our Services</span>
            <h2 className="section-title mt-4">End-to-End Sourcing Solutions</h2>
            <p className="section-subtitle mx-auto">
              From finding the right supplier to delivering goods to your door, we handle every step of the sourcing process.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                  <service.icon className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-primary">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center">
            <span className="badge">How It Works</span>
            <h2 className="section-title mt-4">Simple, Transparent Process</h2>
            <p className="section-subtitle mx-auto">
              Our proven 5-step process makes sourcing from China straightforward and stress-free.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-5">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/how-it-works" className="btn-primary">
              Learn More About Our Process
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="text-center">
            <span className="badge">Products We Source</span>
            <h2 className="section-title mt-4">Wide Range of Product Categories</h2>
            <p className="section-subtitle mx-auto">
              We source products across multiple industries. If you do not see your category, contact us — we likely can help.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category) => (
              <div key={category} className="card flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-blue-700 flex-shrink-0" />
                <span className="font-medium text-slate-900">{category}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/products" className="btn-primary">
              See All Product Categories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center">
            <span className="badge">Why Choose Us</span>
            <h2 className="section-title mt-4">Problems We Solve for You</h2>
            <p className="section-subtitle mx-auto">
              Sourcing from China can be challenging. We remove the common pain points so you can focus on growing your business.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem) => (
              <div key={problem.title} className="card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50">
                  <problem.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{problem.title}</h3>
                <p className="mt-2 text-slate-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="text-center">
            <span className="badge">Case Studies</span>
            <h2 className="section-title mt-4">Real Results for Real Clients</h2>
            <p className="section-subtitle mx-auto">
              See how we have helped businesses around the world source quality products from China.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {caseStudies.map((study) => (
              <div key={study.title} className="card">
                <span className="badge">{study.industry}</span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{study.title}</h3>
                <div className="mt-4 space-y-3">
                  <div>
                    <span className="text-sm font-medium text-slate-700">Challenge:</span>
                    <p className="mt-1 text-sm text-slate-600">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-700">Solution:</span>
                    <p className="mt-1 text-sm text-slate-600">{study.solution}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-700">Result:</span>
                    <p className="mt-1 text-sm font-medium text-blue-700">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/case-studies" className="btn-primary">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-3xl">
          <div className="text-center">
            <span className="badge">FAQ</span>
            <h2 className="section-title mt-4">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Answers to common questions about our sourcing services.
            </p>
          </div>
          <div className="mt-10">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Source from China with Confidence?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Tell us what you need and we will get back to you within 24 hours with a free, no-obligation quote.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-accent">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
