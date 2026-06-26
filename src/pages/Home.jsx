import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Ship,
  Factory,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  Globe2,
  MessageSquare,
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import InquiryForm from '../components/shared/InquiryForm';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable manufacturers in China that match your product requirements, budget, and quality standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site audits to confirm factory legitimacy, capacity, certifications, and business registration before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to catch defects early and reduce returns.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We manage logistics from factory to your door, including consolidation, customs documentation, and freight forwarding.',
  },
];

const problems = [
  'Unreliable suppliers that miss deadlines or cut corners',
  'Hidden costs and unclear pricing structures',
  'Communication barriers and time zone challenges',
  'Quality issues that lead to returns and lost customers',
  'Complex logistics and customs paperwork',
];

const trustPoints = [
  { icon: Users, label: '500+ Buyers Served', description: 'From startups to established retailers' },
  { icon: Factory, label: '2,000+ Verified Factories', description: 'Across multiple industries' },
  { icon: Globe2, label: '40+ Countries', description: 'Buyers from North America, Europe, and Asia' },
  { icon: Star, label: '4.9/5 Client Rating', description: 'Based on post-project surveys' },
];

const faqs = [
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier shortlists are typically ready within 3-5 business days. Full verification and first sample orders usually take 2-4 weeks depending on product complexity.',
  },
  {
    question: 'Do you work with small order quantities?',
    answer: 'Yes. We support both small-batch and large-volume orders. For very small quantities, we can often coordinate consolidated shipments to reduce costs.',
  },
  {
    question: 'How do you verify factories?',
    answer: 'We conduct on-site visits, review business licenses, check production capacity, and assess quality management systems. We also request references from existing clients.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our pricing is project-based and transparent. We charge a sourcing service fee plus a success fee tied to order value. You will receive a detailed quote before any work begins.',
  },
  {
    question: 'Can you handle custom product development?',
    answer: 'Yes. We can connect you with factories that offer OEM/ODM services and manage the product development process from prototype to mass production.',
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
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-lg leading-relaxed text-slate-300">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow transition-colors hover:bg-slate-100"
                >
                  Get a Free Sourcing Quote
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-slate-400 hover:bg-slate-800"
                >
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-800">
                <img
                  alt="China factory and quality inspection"
                  data-strk-img-id="home-hero-img-8f2a9c"
                  data-strk-img="[hero-subtitle] [hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              End-to-end sourcing support
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From finding the right factory to getting your products on a ship, we handle the steps that are difficult to manage remotely.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Common sourcing problems we solve
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Many buyers face the same challenges when sourcing from China. We remove the guesswork and risk.
              </p>
              <ul className="mt-8 space-y-4">
                {problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="text-slate-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                <img
                  alt="Factory inspection and quality control"
                  data-strk-img-id="problems-img-8f2a9c"
                  data-strk-img="[problems-subtitle] [problems-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A clear, low-risk process
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              We follow a structured workflow so you always know what is happening with your order.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Share your requirements',
                description: 'Tell us what you need, including product specs, target price, and order volume.',
              },
              {
                step: '02',
                title: 'We source and verify',
                description: 'We find matching suppliers, visit factories, and run quality checks before you place orders.',
              },
              {
                step: '03',
                title: 'Ship with confidence',
                description: 'We monitor production, inspect finished goods, and coordinate shipping to your country.',
              },
            ].map((item) => (
              <div key={item.step} className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="text-4xl font-bold text-slate-200">{item.step}</span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700"
            >
              See full process <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Recent sourcing results
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Real examples of how we helped buyers reduce costs, improve quality, and simplify their supply chain.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Home goods importer',
                result: 'Reduced unit cost by 18% while improving defect rate from 4.2% to 0.8%',
                category: 'Home & Living',
              },
              {
                title: 'Electronics retailer',
                result: 'Consolidated 3 suppliers into 1 verified partner and cut lead time by 22 days',
                category: 'Electronics',
              },
              {
                title: 'Fashion brand',
                result: 'Passed third-party audit on first attempt after previous supplier failed twice',
                category: 'Apparel',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {item.category}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.result}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700"
            >
              View all case studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Quick answers to common questions about working with a China sourcing agent.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700"
                >
                  Still have questions? Contact us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white">
                  <summary className="flex cursor-pointer items-center justify-between p-5 text-left text-sm font-semibold text-slate-900">
                    {faq.question}
                    <MessageSquare className="h-4 w-4 text-slate-400 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="border-t border-slate-100 px-5 py-4 text-sm text-slate-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Ready to simplify your China sourcing?
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Tell us what you need. We will review your request and reply within one business day with a clear next step.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  No commitment required
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Response within 24 hours
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Clear pricing before any work begins
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <InquiryForm source="homepage" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
