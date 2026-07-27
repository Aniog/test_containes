import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Factory, ShieldCheck, Ship, ClipboardCheck, Search, PackageCheck, Globe2, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable manufacturers and suppliers across China based on your product requirements.',
    icon: Search,
  },
  {
    title: 'Factory Verification',
    description: 'On-site audits to confirm factory legitimacy, capacity, certifications, and business registration.',
    icon: Factory,
  },
  {
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your standards.',
    icon: ShieldCheck,
  },
  {
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including consolidation, customs documentation, and freight forwarding.',
    icon: Ship,
  },
];

const processSteps = [
  { step: '01', title: 'Share Requirements', description: 'Tell us your product specs, target price, and timeline.' },
  { step: '02', title: 'Supplier Matching', description: 'We source and shortlist qualified factories for your review.' },
  { step: '03', title: 'Verification & Inspection', description: 'We verify suppliers and inspect samples or production runs.' },
  { step: '04', title: 'Order Management', description: 'We monitor production, manage QC, and coordinate shipping.' },
  { step: '05', title: 'Delivery & Support', description: 'You receive the goods with documentation and after-sales support.' },
];

const products = [
  'Electronics & Components',
  'Home & Kitchen',
  'Textiles & Apparel',
  'Hardware & Tools',
  'Garden & Outdoor',
  'Toys & Gifts',
  'Auto Parts',
  'Health & Beauty',
];

const problems = [
  'Unreliable suppliers and communication gaps',
  'Hidden costs and unclear pricing',
  'Quality issues and inconsistent standards',
  'Delayed shipments and logistics mistakes',
  'Difficulty verifying factory credentials',
  'Language and cultural barriers',
];

const trustPoints = [
  { title: 'On-Ground Presence', description: 'Local teams in major manufacturing hubs across China.' },
  { title: 'Verified Network', description: 'Pre-vetted suppliers with proven track records.' },
  { title: 'Transparent Pricing', description: 'Clear cost breakdowns with no hidden fees.' },
  { title: 'End-to-End Support', description: 'From sourcing to delivery, we manage the full process.' },
];

const faqs = [
  {
    question: 'What industries do you support?',
    answer: 'We support a wide range of industries including electronics, home goods, textiles, hardware, toys, auto parts, and more. If you can manufacture it in China, we can likely help source it.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits, review business licenses, check production capacity, and assess quality management systems. We also request references and perform sample evaluations.',
  },
  {
    question: 'What is included in quality inspection?',
    answer: 'Inspections can include pre-production checks, during-production monitoring, pre-shipment inspections, and container loading supervision. We follow internationally recognized standards such as AQL.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Timelines vary by product complexity. Initial supplier shortlisting typically takes 3-7 business days. Sample evaluation and factory verification may add 1-2 weeks. Production and shipping timelines depend on your order size and product type.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes. We coordinate freight forwarding, prepare shipping documentation, manage customs clearance, and can arrange door-to-door delivery. We support sea, air, rail, and express courier options.',
  },
];

const Home = () => {
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="China sourcing and logistics"
            data-strk-img-id="home-hero-bg-8f2a9c"
            data-strk-img="[hero-subtitle] [hero-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 id="hero-title" className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-4 text-base md:text-lg text-slate-200">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Verified suppliers</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Transparent pricing</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> End-to-end support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Sourcing Services</h2>
            <p className="mt-3 text-slate-600">Practical support for every stage of your China procurement journey.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <service.icon className="h-8 w-8 text-slate-900" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link to="/services" className="inline-flex items-center gap-2">
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How It Works</h2>
            <p className="mt-3 text-slate-600">A clear, repeatable process designed to reduce risk and speed up sourcing.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            {processSteps.map((item) => (
              <div key={item.step} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold text-slate-500">{item.step}</p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link to="/how-it-works" className="inline-flex items-center gap-2">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Products We Source</h2>
            <p className="mt-3 text-slate-600">We support many product categories, with flexibility for custom requirements.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <PackageCheck className="h-5 w-5 text-slate-700" />
                <span className="text-sm font-medium text-slate-800">{product}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link to="/products" className="inline-flex items-center gap-2">
                Browse categories <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Problems We Solve</h2>
              <p className="mt-3 text-slate-600">Common sourcing challenges and how we help you avoid them.</p>
              <ul className="mt-8 space-y-4">
                {problems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ClipboardCheck className="mt-0.5 h-5 w-5 text-slate-700" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                alt="Factory quality inspection"
                data-strk-img-id="home-problems-img-8f2a9c"
                data-strk-img="[problems-title] [problems-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full rounded-xl object-cover"
              />
              <h3 id="problems-title" className="sr-only">Problems We Solve</h3>
              <p id="problems-subtitle" className="sr-only">Common sourcing challenges and how we help you avoid them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why Buyers Trust Us</h2>
            <p className="mt-3 text-slate-600">We focus on practical support, realistic expectations, and measurable outcomes.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Case Studies</h2>
            <p className="mt-3 text-slate-600">Real examples of how we helped buyers reduce risk and improve sourcing outcomes.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Electronics Importer — EU</p>
                <p className="mt-2 text-sm text-slate-600">Reduced supplier lead time by 18% and improved first-pass quality rate through pre-shipment inspection.</p>
                <Link to="/case-studies" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:underline">
                  Read case study <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link to="/case-studies" className="inline-flex items-center gap-2">
                View all case studies <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-3 text-slate-600">Answers to common questions about working with a China sourcing agent.</p>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base font-semibold text-slate-900">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Get a Free Sourcing Quote</h2>
              <p className="mt-3 text-slate-600">Tell us what you need. We’ll review your requirements and respond with a practical next step.</p>
              <div className="mt-8 space-y-4 text-sm text-slate-700">
                <p>We typically respond within 1 business day.</p>
                <p>For faster discussion, include product details, target quantity, and preferred shipping terms.</p>
              </div>
            </div>
            <form
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you. This demo form does not send data.');
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Full name</label>
                  <input required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Company</label>
                  <input required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Country</label>
                  <input required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-slate-700">Product or sourcing need</label>
                <textarea required rows="4" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-slate-700">Estimated quantity</label>
                <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
              </div>
              <div className="mt-6">
                <Button type="submit" className="w-full">Submit Inquiry</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
