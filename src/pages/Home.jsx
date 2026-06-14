import { Link } from 'react-router-dom';
import { CheckCircle2, Factory, ShieldCheck, Ship, ClipboardList, Search, ArrowRight, Star, Users, Globe2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    title: 'Supplier Sourcing',
    description: 'We identify and vet qualified manufacturers in China based on your product requirements, budget, and quality standards.',
    icon: Search,
  },
  {
    title: 'Factory Verification',
    description: 'On-site factory audits to verify business licenses, production capacity, quality systems, and social compliance.',
    icon: Factory,
  },
  {
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
    icon: ShieldCheck,
  },
  {
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs documentation, and door-to-door delivery.',
    icon: Ship,
  },
];

const processSteps = [
  { step: '01', title: 'Submit Your Request', description: 'Share product details, target price, quantity, and quality requirements with our team.' },
  { step: '02', title: 'Supplier Matching', description: 'We source and shortlist reliable factories that match your needs and conduct initial checks.' },
  { step: '03', title: 'Verification & Inspection', description: 'We verify suppliers, review samples, and arrange inspections before production begins.' },
  { step: '04', title: 'Production Follow-Up', description: 'We monitor production schedules, quality checks, and keep you updated with progress reports.' },
  { step: '05', title: 'Shipping & Delivery', description: 'We coordinate logistics, handle export documentation, and track shipment until delivery.' },
];

const problems = [
  'Unreliable suppliers with inconsistent quality',
  'Language and cultural barriers in negotiations',
  'Hidden costs and unclear pricing structures',
  'Difficulty verifying factory legitimacy',
  'Quality issues discovered only after shipment',
  'Complex export and customs procedures',
];

const trustPoints = [
  { stat: '500+', label: 'Verified Factories' },
  { stat: '1,200+', label: 'Successful Shipments' },
  { stat: '98%', label: 'Client Retention' },
  { stat: '15+', label: 'Years Experience' },
];

const faqs = [
  {
    question: 'What industries do you support?',
    answer: 'We support a wide range of industries including electronics, home and garden, textiles and apparel, industrial parts, machinery, and consumer goods. If you have a specific product category, contact us to discuss your needs.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits, review business licenses, assess production capacity, evaluate quality management systems, and check references. We also verify financial stability and compliance with relevant standards.',
  },
  {
    question: 'What is included in a quality inspection?',
    answer: 'Our inspections cover product specifications, workmanship, packaging, labeling, and safety requirements. We provide detailed inspection reports with photos and recommendations before shipment.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Timeline varies by product complexity. Typically, supplier identification takes 3-5 business days, sample review 1-2 weeks, and production 2-6 weeks. We provide clear timelines during the initial consultation.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes. We coordinate freight forwarding, prepare export documentation, manage customs clearance, and arrange final delivery. We can ship by air, sea, or express courier based on your needs.',
  },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                <Star className="h-3.5 w-3.5 text-amber-500" />
                Trusted by 500+ global buyers
              </div>
              <h1 id="hero-title" className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="hero-subtitle" className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  See How It Works
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-8">
                {trustPoints.slice(0, 3).map(({ stat, label }) => (
                  <div key={label}>
                    <div className="text-2xl font-bold text-slate-900">{stat}</div>
                    <div className="text-xs text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                alt="China factory and quality inspection"
                className="rounded-2xl shadow-2xl"
                data-strk-img-id="home-hero-img-8f2a9c"
                data-strk-img="[hero-subtitle] [hero-title] [section-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Factory Verified</div>
                    <div className="text-xs text-slate-500">On-site audit completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 id="services-title" className="text-3xl font-bold text-slate-900 sm:text-4xl">
              End-to-End Sourcing Services
            </h2>
            <p id="services-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              From supplier discovery to final delivery, we manage the entire sourcing process so you can focus on growing your business.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-900">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 id="process-title" className="text-3xl font-bold text-slate-900 sm:text-4xl">
              How the Sourcing Process Works
            </h2>
            <p id="process-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              A clear, step-by-step process designed to reduce risk and deliver reliable results for your business.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map(({ step, title, description }) => (
              <div key={step} className="relative rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-slate-200">{step}</div>
                <h3 className="mt-3 text-base font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 id="problems-title" className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Common Problems We Solve
              </h2>
              <p id="problems-subtitle" className="mt-4 text-lg text-slate-600">
                Many buyers face recurring challenges when sourcing from China. We address the most common pain points.
              </p>
              <ul className="mt-8 space-y-4">
                {problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span className="text-sm leading-relaxed text-slate-700">{problem}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700"
              >
                Discuss your sourcing needs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div>
              <img
                alt="Sourcing challenges and solutions"
                className="rounded-2xl shadow-xl"
                data-strk-img-id="problems-img-8f2a9c"
                data-strk-img="[problems-subtitle] [problems-title] [section-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map(({ stat, label }) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-bold text-white">{stat}</div>
                <div className="mt-2 text-sm text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 id="faq-title" className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p id="faq-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Answers to common questions about our sourcing services.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group rounded-xl border border-slate-200 bg-white">
                <summary className="flex cursor-pointer items-center justify-between p-6 text-left">
                  <span className="text-base font-semibold text-slate-900">{question}</span>
                  <ArrowRight className="h-5 w-5 flex-shrink-0 text-slate-400 transition group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-6 text-sm leading-relaxed text-slate-600">{answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 px-8 py-16 text-center shadow-xl sm:px-16">
            <h2 id="cta-title" className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Start Sourcing from China?
            </h2>
            <p id="cta-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Tell us what you need. We will find the right suppliers, verify them, and manage quality and shipping for you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="mailto:info@ssourcingchina.com"
                className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
