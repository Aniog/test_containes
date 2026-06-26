import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Ship,
  Factory,
  CheckCircle2,
  Star,
  Globe2,
  ArrowRight,
  ChevronDown,
  MessageSquare,
  FileCheck2,
  Users,
  PackageCheck,
} from 'lucide-react';

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
    description: 'Pre-production, in-line, and pre-shipment inspections to catch defects early and reduce costly returns.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including consolidation, customs documentation, and freight forwarding.',
  },
];

const problems = [
  'Unreliable suppliers with inconsistent quality',
  'Language and time-zone barriers slowing negotiations',
  'Hidden costs from unclear pricing and terms',
  'Risk of fraud or misrepresented factory credentials',
  'Delays from poor production follow-up',
  'Complex shipping and customs paperwork',
];

const trustPoints = [
  { icon: Users, label: '500+ Buyers Served', description: 'From startups to established retailers.' },
  { icon: Factory, label: '2,000+ Factories Verified', description: 'Across electronics, home goods, textiles, and more.' },
  { icon: FileCheck2, label: 'Inspection Reports', description: 'Detailed photos, measurements, and pass/fail notes.' },
  { icon: Globe2, label: 'Multilingual Team', description: 'English, Mandarin, and Cantonese support.' },
];

const faqs = [
  {
    question: 'What industries do you source for?',
    answer:
      'We support electronics, home goods, textiles, furniture, auto parts, and industrial equipment. If you have a product in mind, contact us to confirm coverage.',
  },
  {
    question: 'How do you verify factories?',
    answer:
      'We conduct on-site visits, review business licenses, check production lines, and interview management. We also verify certifications such as ISO, CE, and UL when relevant.',
  },
  {
    question: 'What is included in a quality inspection?',
    answer:
      'Inspections cover product specifications, workmanship, packaging, safety checks, and random sampling. We provide a structured report with photos and recommendations.',
  },
  {
    question: 'Can you handle shipping from multiple factories?',
    answer:
      'Yes. We can consolidate shipments from different suppliers, manage documentation, and coordinate freight to your destination port or warehouse.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer:
      'Initial supplier shortlists are usually ready within 3-5 business days. Full verification and first production run timelines depend on product complexity.',
  },
];

const caseStudies = [
  {
    title: 'Home Goods Importer',
    result: 'Reduced defect rate from 18% to 2.1%',
    detail: 'Implemented pre-shipment inspections and supplier scorecards for a US-based home goods brand.',
  },
  {
    title: 'Electronics Distributor',
    result: 'Cut sourcing time by 35%',
    detail: 'Streamlined factory audits and sample approvals for a European electronics distributor.',
  },
  {
    title: 'Furniture Retailer',
    result: 'Saved $120K in first year',
    detail: 'Negotiated better terms and consolidated shipping for an Australian furniture retailer.',
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80)',
            }}
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
              <Globe2 className="h-3.5 w-3.5" />
              China Sourcing Agent for Global Buyers
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Source smarter from China with a local team you can trust
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-200">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping. Less risk. Better margins.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                No minimum order requirement
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                Transparent pricing
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                English-speaking support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                  <div className="text-sm text-slate-600">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">End-to-end sourcing support</h2>
            <p className="mt-3 text-lg text-slate-600">
              From the first supplier search to final delivery, we manage the steps that most buyers find difficult, risky, or time-consuming.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{service.title}</h3>
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

      {/* Problems We Solve */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Common sourcing problems we solve</h2>
              <p className="mt-3 text-lg text-slate-600">
                Many buyers face the same challenges when working with China. Our role is to reduce friction and protect your investment.
              </p>
              <ul className="mt-8 space-y-4">
                {problems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                      <span className="h-2 w-2 rounded-full bg-red-500" />
                    </span>
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-100">
                <img
                  alt="Factory inspection in China"
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                />
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Our QC team performs on-site inspections at factories across Guangdong, Zhejiang, and Jiangsu provinces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">A clear sourcing process</h2>
            <p className="mt-3 text-lg text-slate-600">
              We follow a repeatable workflow so you always know the current stage, next steps, and expected timeline.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '1', title: 'Brief & Requirements', description: 'Share your product specs, target price, and timeline.' },
              { step: '2', title: 'Supplier Shortlist', description: 'We present vetted factories with background reports.' },
              { step: '3', title: 'Verification & Sampling', description: 'Factory audits, sample reviews, and negotiation support.' },
              { step: '4', title: 'Production & Shipping', description: 'Inspections, logistics coordination, and delivery tracking.' },
            ].map((item) => (
              <div key={item.step} className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-blue-600">{item.step}</div>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link to="/how-it-works" className="inline-flex items-center gap-2">
                See full process <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Recent results</h2>
            <p className="mt-3 text-lg text-slate-600">
              Real examples of how we helped buyers reduce risk, improve quality, and save money.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm font-medium text-blue-600">{item.result}</p>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link to="/case-studies" className="inline-flex items-center gap-2">
                Read more case studies <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Frequently asked questions</h2>
              <p className="mt-3 text-lg text-slate-600">
                Quick answers to common questions about working with a China sourcing agent.
              </p>
              <Button asChild variant="outline" className="mt-6">
                <Link to="/contact">Still have questions? Contact us</Link>
              </Button>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {faqs.map((item) => (
                  <details key={item.question} className="group rounded-xl border border-slate-200 bg-white p-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base font-semibold text-slate-900">
                      {item.question}
                      <ChevronDown className="h-5 w-5 text-slate-400 transition group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">Start with a free sourcing quote</h2>
              <p className="mt-3 text-lg text-slate-300">
                Tell us what you need. We will review your requirements and reply with a clear next step, timeline, and estimated cost.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-slate-300">
                <li className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  No commitment required
                </li>
                <li className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Response within 1 business day
                </li>
                <li className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Confidential handling of your product details
                </li>
              </ul>
            </div>
            <form
              className="rounded-xl border border-white/10 bg-white/5 p-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you. Your inquiry has been received. We will reply within 1 business day.');
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-200">
                    Full name
                  </label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-200">
                    Work email
                  </label>
                  <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                </div>
                <div>
                  <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-200">
                    Company
                  </label>
                  <Input id="company" name="company" placeholder="Company name" />
                </div>
                <div>
                  <label htmlFor="product" className="mb-1 block text-sm font-medium text-slate-200">
                    Product category
                  </label>
                  <Input id="product" name="product" placeholder="e.g. electronics, furniture" />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-200">
                  Project details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Share product specs, target quantity, budget, and timeline."
                />
              </div>
              <Button type="submit" size="lg" className="mt-5 w-full bg-blue-600 hover:bg-blue-700">
                <MessageSquare className="mr-2 h-4 w-4" />
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
