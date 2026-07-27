import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Factory, ShieldCheck, Ship, Search, ClipboardCheck, PackageCheck, ArrowRight, Phone, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable manufacturers in China based on your product requirements, certifications, and capacity needs.',
    icon: Search,
  },
  {
    title: 'Factory Verification',
    description: 'On-site audits to confirm factory legitimacy, production capability, quality systems, and compliance with your standards.',
    icon: Factory,
  },
  {
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to catch defects before they reach your customers.',
    icon: ShieldCheck,
  },
  {
    title: 'Shipping Coordination',
    description: 'Consolidation, documentation, freight forwarding, and customs support to get your goods delivered on time.',
    icon: Ship,
  },
];

const process = [
  { step: '1', title: 'Tell us what you need', description: 'Share product specs, target price, quantity, and timeline.' },
  { step: '2', title: 'We source suppliers', description: 'We find matching factories and share profiles with capabilities and references.' },
  { step: '3', title: 'Verify and inspect', description: 'We audit factories and run inspections so you can approve with confidence.' },
  { step: '4', title: 'Coordinate shipping', description: 'We manage production follow-up, logistics, and delivery to your door.' },
];

const trustPoints = [
  { title: 'On-the-ground team', description: 'Based in China with Mandarin-speaking staff and local logistics networks.' },
  { title: 'Transparent reporting', description: 'Inspection reports, factory audits, and shipment updates shared in real time.' },
  { title: 'No hidden fees', description: 'Clear service packages and upfront pricing so you can budget accurately.' },
  { title: 'Buyer protection focus', description: 'We verify suppliers and inspect goods to reduce your sourcing risk.' },
];

const faqs = [
  { question: 'What types of products can you source?', answer: 'We source a wide range of consumer goods, industrial components, electronics, home products, and more. Tell us your product category and we will confirm feasibility.' },
  { question: 'How do you verify suppliers?', answer: 'We conduct factory audits, check business licenses, review production lines, and assess quality systems. We also request references and samples when needed.' },
  { question: 'Where are you based?', answer: 'Our team is based in China, with coverage in major manufacturing regions including Guangdong, Zhejiang, and Jiangsu.' },
  { question: 'How long does the sourcing process take?', answer: 'Timelines vary by product and supplier availability. Typical sourcing and verification takes 1-3 weeks, while production and shipping depend on order size and destination.' },
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
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="home-hero-bg-8f2a9c"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl">
            <h1 id="home-hero-title" className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="home-hero-subtitle" className="mt-4 text-base text-slate-700 md:text-lg">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China with a local partner you can trust.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Verified suppliers</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> QC inspections</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Shipping support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <h2 id="home-services-title" className="text-2xl font-semibold text-slate-900 md:text-3xl">Services</h2>
          <p id="home-services-subtitle" className="mt-2 text-slate-600">End-to-end support from supplier search to delivery.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <item.icon className="h-6 w-6 text-slate-900" />
                <h3 className="mt-3 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link to="/services" className="flex items-center gap-2">
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <h2 id="home-process-title" className="text-2xl font-semibold text-slate-900 md:text-3xl">How It Works</h2>
          <p id="home-process-subtitle" className="mt-2 text-slate-600">A clear, repeatable process to reduce sourcing risk.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">{item.step}</div>
                <h3 className="mt-3 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link to="/how-it-works" className="flex items-center gap-2">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <h2 id="home-trust-title" className="text-2xl font-semibold text-slate-900 md:text-3xl">Why Buyers Work With Us</h2>
          <p id="home-trust-subtitle" className="mt-2 text-slate-600">Practical support built around buyer protection.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <h2 id="home-faq-title" className="text-2xl font-semibold text-slate-900 md:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Contact us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="rounded-xl border border-slate-200 bg-slate-900 p-8 text-center md:text-left">
            <h2 id="home-cta-title" className="text-2xl font-semibold text-white md:text-3xl">Ready to source from China with less risk?</h2>
            <p id="home-cta-subtitle" className="mt-2 text-slate-300">Tell us your product and we will prepare a practical sourcing plan.</p>
            <div className="mt-6 flex flex-wrap gap-3 md:justify-start justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Email us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
