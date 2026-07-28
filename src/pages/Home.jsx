import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ShieldCheck, Factory, Ship, ClipboardCheck, ArrowRight, Star, Users, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable manufacturers in China based on your product requirements, budget, and quality standards.',
    icon: Factory,
  },
  {
    title: 'Factory Verification',
    description: 'On-site audits to confirm factory legitimacy, capacity, certifications, and production capabilities before you commit.',
    icon: ShieldCheck,
  },
  {
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to catch defects early and reduce returns.',
    icon: ClipboardCheck,
  },
  {
    title: 'Shipping Coordination',
    description: 'We manage logistics, documentation, and freight forwarding so your goods arrive on time and within budget.',
    icon: Ship,
  },
];

const process = [
  { step: '1', title: 'Tell us what you need', description: 'Share product specs, target price, and order volume.' },
  { step: '2', title: 'We source suppliers', description: 'We shortlist verified factories and share profiles.' },
  { step: '3', title: 'Verify and inspect', description: 'We audit factories and inspect samples or production.' },
  { step: '4', title: 'Coordinate shipping', description: 'We handle logistics, docs, and delivery tracking.' },
];

const problems = [
  'Unreliable suppliers with inconsistent quality',
  'Hidden costs and unclear pricing',
  'Communication barriers and delays',
  'Difficulty verifying factory legitimacy',
  'Quality issues discovered after shipment',
  'Complex export documentation and customs',
];

const trustPoints = [
  { stat: '500+', label: 'Factories Verified' },
  { stat: '1,200+', label: 'Shipments Coordinated' },
  { stat: '30+', label: 'Countries Served' },
  { stat: '98%', label: 'Client Retention' },
];

const faqs = [
  {
    question: 'What products can you source?',
    answer: 'We source a wide range of consumer goods, electronics, home products, industrial components, and more. If you have a product in mind, tell us and we will assess feasibility.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits, review business licenses, check production capacity, and assess quality management systems before recommending a supplier.',
  },
  {
    question: 'What inspection services do you offer?',
    answer: 'We offer pre-production inspections, during-production inspections, pre-shipment inspections, and container loading supervision based on your needs.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier shortlisting usually takes 3-7 business days. Factory verification and sample review can take 1-3 weeks depending on product complexity.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes. We coordinate freight forwarding, prepare shipping documents, and can support customs clearance for major trade routes.',
  },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (typeof ImageHelper === 'undefined' || typeof ImageHelper.loadImages !== 'function') {
        return;
      }
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            data-strk-img-id="hero-bg-8f2a9c"
            data-strk-img="[hero-subtitle] [hero-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-4 text-lg md:text-xl text-slate-200">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China with a trusted local partner.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">Get a Free Sourcing Quote</Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">See How It Works</Button>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> No upfront fees</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Transparent pricing</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> English-speaking team</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Services</h2>
            <p className="mt-3 text-slate-600">End-to-end support from supplier discovery to delivery, designed to reduce risk and save time.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <service.icon className="h-8 w-8 text-slate-900" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:underline">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How It Works</h2>
            <p className="mt-3 text-slate-600">A clear, repeatable process so you always know what happens next.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((item) => (
              <div key={item.step} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold">{item.step}</div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/how-it-works">
              <Button>View Full Process</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Problems We Solve</h2>
              <p className="mt-3 text-slate-600">Common sourcing challenges and how we help you avoid them.</p>
              <ul className="mt-6 space-y-3">
                {problems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-50 text-red-600">
                      <span className="text-xs">✕</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-lg font-semibold text-slate-900">What you get instead</h3>
              <ul className="mt-4 space-y-3">
                {[
                  'Pre-vetted suppliers with proven track records',
                  'Clear cost breakdowns and transparent pricing',
                  'Dedicated English-speaking project manager',
                  'Documented factory audits and inspection reports',
                  'Quality checks before goods leave the factory',
                  'Simplified shipping and customs support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Trusted by Buyers Worldwide</h2>
          <p className="mt-3 text-slate-300">Numbers that reflect consistent delivery and long-term partnerships.</p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-center">
                <div className="text-3xl font-bold text-white">{item.stat}</div>
                <div className="mt-2 text-sm text-slate-300">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Experienced Local Team', text: 'Based in China with deep supplier networks and on-ground presence.' },
              { icon: ShieldCheck, title: 'Risk-First Approach', text: 'We prioritize verification and inspection to protect your investment.' },
              { icon: Globe, title: 'Global Trade Knowledge', text: 'Familiar with international standards, Incoterms, and major shipping routes.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-950 p-6">
                <item.icon className="h-8 w-8 text-white" />
                <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Case Studies</h2>
            <p className="mt-3 text-slate-600">Real examples of how we helped buyers reduce risk and improve margins.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Home goods importer', result: 'Reduced defect rate from 12% to under 2%', category: 'Quality Inspection' },
              { title: 'Electronics brand', result: 'Shortened supplier onboarding from 8 weeks to 3 weeks', category: 'Supplier Sourcing' },
              { title: 'Industrial parts buyer', result: 'Saved 18% on landed cost through optimized shipping', category: 'Shipping Coordination' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-medium text-slate-500">{item.category}</div>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.result}</p>
                <Link to="/case-studies" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:underline">
                  Read case study <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/case-studies">
              <Button variant="outline">View All Case Studies</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-3 text-slate-600">Quick answers to common questions about working with us.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-base font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Ready to source with confidence?</h2>
              <p className="mt-3 text-slate-600">Tell us what you are looking for and we will prepare a tailored sourcing plan.</p>
            </div>
            <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); alert('Thanks for your inquiry. This is a demo form.'); }}>
              <input required placeholder="Your name" className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
              <input required type="email" placeholder="Work email" className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
              <input placeholder="Company" className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
              <input placeholder="Product category" className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
              <textarea placeholder="Tell us about your sourcing needs" className="md:col-span-2 rounded-md border border-slate-200 px-3 py-2 text-sm" rows="4" />
              <div className="md:col-span-2">
                <Button type="submit" size="lg">Get a Free Sourcing Quote</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
