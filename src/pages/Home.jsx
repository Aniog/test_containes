import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  ArrowRight,
  CheckCircle2,
  Users,
  Globe,
  Award,
  MessageSquare,
  ChevronRight,
  Mail,
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      icon: Search,
      title: 'Supplier Finding',
      description: 'We identify and vet reliable manufacturers in China that match your product requirements, quality standards, and budget.',
    },
    {
      icon: ShieldCheck,
      title: 'Factory Verification',
      description: 'On-site audits to verify factory credentials, capacity, compliance, and business legitimacy before you commit.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
    },
    {
      icon: Factory,
      title: 'Production Monitoring',
      description: 'Regular factory visits and progress tracking to keep your production on schedule and within budget.',
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics support including freight forwarding, customs clearance, and delivery coordination.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Tell Us What You Need',
      description: 'Share your product requirements, target price, quality standards, and timeline with our team.',
    },
    {
      step: '02',
      title: 'We Find & Verify Suppliers',
      description: 'We source qualified factories, verify their credentials, and present you with the best options.',
    },
    {
      step: '03',
      title: 'Inspect & Monitor Production',
      description: 'We conduct inspections and monitor production to ensure quality and timely delivery.',
    },
    {
      step: '04',
      title: 'Coordinate Shipping',
      description: 'We handle logistics, documentation, and shipping to get your products delivered safely.',
    },
  ];

  const problems = [
    'Unreliable suppliers with inconsistent quality',
    'Language and cultural barriers',
    'Difficulty verifying factory legitimacy',
    'Hidden costs and pricing surprises',
    'Quality issues discovered after shipment',
    'Complex logistics and customs procedures',
  ];

  const trustPoints = [
    { icon: Users, stat: '500+', label: 'Clients Served' },
    { icon: Globe, stat: '30+', label: 'Countries' },
    { icon: Award, stat: '10+', label: 'Years Experience' },
    { icon: CheckCircle2, stat: '98%', label: 'Client Satisfaction' },
  ];

  const faqs = [
    {
      question: 'What products can you help me source?',
      answer: 'We source a wide range of products including electronics, textiles, machinery, home goods, and more. Contact us with your specific requirements.',
    },
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct on-site factory audits, verify business licenses, check references, and assess production capacity and quality control systems.',
    },
    {
      question: 'What are your inspection services?',
      answer: 'We offer pre-production inspections, during-production inspections, and pre-shipment inspections to ensure products meet your specifications.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Timeline varies by product complexity, but typically supplier finding takes 1-2 weeks, production takes 2-8 weeks, and shipping takes 1-4 weeks.',
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="mt-6 text-lg text-slate-600 max-w-xl">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Get a Free Sourcing Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/how-it-works">
                    Learn How It Works
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center">
                  <CheckCircle2 className="mr-1.5 h-4 w-4 text-green-600" />
                  No-obligation quote
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="mr-1.5 h-4 w-4 text-green-600" />
                  Response within 24 hours
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                alt="China sourcing agent factory verification"
                data-strk-img-id="hero-sourcing-img-8f2a9c"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Verified Suppliers</p>
                    <p className="text-xs text-slate-500">100% factory audited</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-3">
                  <item.icon className="h-6 w-6 text-slate-700" />
                </div>
                <div className="text-3xl font-bold text-slate-900">{item.stat}</div>
                <div className="text-sm text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              End-to-End Sourcing Services
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              From finding suppliers to delivering products, we handle every step of your China sourcing journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                  <service.icon className="h-6 w-6 text-slate-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              A simple, transparent process to source products from China with confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-slate-200 mb-4">{step.step}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-slate-300">
                    <ChevronRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link to="/how-it-works">
                Learn More About Our Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Problems We Solve
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Sourcing from China can be challenging. We eliminate the common pain points so you can focus on growing your business.
              </p>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <span className="ml-3 text-slate-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                alt="China sourcing challenges and solutions"
                data-strk-img-id="problems-sourcing-img-9b2c3d"
                data-strk-img="[problems-subtitle] [problems-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              See how we've helped businesses like yours source products from China successfully.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Electronics Importer',
                result: 'Reduced costs by 22% while improving quality',
                category: 'Electronics',
              },
              {
                title: 'Home Goods Retailer',
                result: 'Found 3 reliable suppliers in 2 weeks',
                category: 'Home Goods',
              },
              {
                title: 'Textile Brand',
                result: 'Eliminated 95% of quality issues',
                category: 'Textiles',
              },
            ].map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-sm font-medium text-slate-500 mb-2">{study.category}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{study.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{study.result}</p>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-700"
                >
                  Read case study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link to="/case-studies">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Common questions about our China sourcing services.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Have more questions?</p>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation sourcing quote. Tell us what you need, and we'll find the right suppliers for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800" asChild>
              <a href="mailto:info@ssourcingchina.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Us Directly
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
