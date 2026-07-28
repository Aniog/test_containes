import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Ship,
  Factory,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Globe,
  PackageCheck,
  Truck,
  FileCheck2,
  MessageSquareQuote,
  ChevronRight,
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  });
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
    return undefined;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Our team will contact you within 24 hours.');
    setFormData({ name: '', email: '', company: '', product: '', message: '' });
  };

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
      description: 'End-to-end logistics support including consolidation, customs documentation, and freight forwarding.',
    },
  ];

  const processSteps = [
    { step: '01', title: 'Tell Us What You Need', description: 'Share product specs, target price, quantity, and timeline.' },
    { step: '02', title: 'We Source & Verify', description: 'We find matching suppliers and verify factories on your behalf.' },
    { step: '03', title: 'Inspect & Approve', description: 'We inspect samples and production, then share reports with you.' },
    { step: '04', title: 'Ship & Support', description: 'We coordinate shipping and handle follow-up issues after delivery.' },
  ];

  const problems = [
    'Unreliable suppliers with inconsistent quality',
    'Language and time-zone barriers',
    'Hidden costs and unclear pricing',
    'Difficulty verifying factory credentials',
    'Quality issues discovered too late',
    'Complex shipping and customs paperwork',
  ];

  const trustPoints = [
    { icon: Users, title: 'Experienced Local Team', description: 'Based in China with years of sourcing and QC experience.' },
    { icon: ShieldCheck, title: 'Verified Supplier Network', description: 'Pre-vetted manufacturers across multiple industries.' },
    { icon: FileCheck2, title: 'Transparent Reporting', description: 'Detailed inspection reports with photos and measurements.' },
    { icon: Globe, title: 'Global Buyer Focus', description: 'We understand international standards and compliance needs.' },
  ];

  const faqs = [
    {
      question: 'What industries do you support?',
      answer: 'We support a wide range of industries including electronics, home goods, textiles, machinery, packaging, and more. If you can manufacture it in China, we can likely help source it.',
    },
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct on-site factory audits, review business licenses, check production capacity, and assess quality management systems. We also request references and sample approvals before recommending a supplier.',
    },
    {
      question: 'What is included in a quality inspection?',
      answer: 'Inspections typically cover product specifications, workmanship, packaging, safety compliance, and quantity. We provide a detailed report with photos and pass/fail criteria.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Initial supplier matching usually takes 3-7 business days. Full verification, sampling, and inspection timelines depend on product complexity, but most projects move from inquiry to shipment in 4-8 weeks.',
    },
    {
      question: 'Do you handle shipping and customs?',
      answer: 'Yes. We can coordinate freight by sea, air, or express courier, prepare shipping documents, and support customs clearance. We work with trusted logistics partners to keep costs predictable.',
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10">
          <div
            data-strk-bg-id="hero-bg-8f2a9c"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="h-full w-full bg-slate-100"
          />
          <div className="h-full w-full bg-white/80 backdrop-blur-sm" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <Badge className="mb-4" variant="secondary">China Sourcing Agent for Global Buyers</Badge>
            <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg text-slate-600 sm:text-xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/how-it-works">
                  See How It Works
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> No-obligation quote</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Factory audits included</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> English-speaking support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900">End-to-end sourcing support</h2>
            <p className="mt-3 text-slate-600">From supplier discovery to final delivery, we manage the steps that are difficult to do remotely.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-900">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-4 text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900">A clear sourcing process</h2>
            <p className="mt-3 text-slate-600">A straightforward workflow designed to reduce risk and keep you informed.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <Card key={item.step}>
                <CardHeader>
                  <div className="text-sm font-semibold text-slate-500">{item.step}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild variant="outline">
              <Link to="/how-it-works">
                View full process
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Common sourcing problems we solve</h2>
              <p className="mt-3 text-slate-600">Many buyers face the same challenges when working directly with Chinese suppliers. We help you avoid them.</p>
              <ul className="mt-8 space-y-4">
                {problems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-50 text-red-600">
                      <span className="h-2 w-2 rounded-full bg-red-500" />
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-lg font-semibold text-slate-900">What you get instead</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> Pre-vetted suppliers with verified track records</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> On-site factory audits and quality inspections</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> Clear pricing and transparent cost breakdowns</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> English-speaking project updates and reporting</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> End-to-end shipping and customs coordination</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> Post-shipment issue resolution support</li>
              </ul>
              <div className="mt-6">
                <Button asChild>
                  <Link to="/contact">Start an inquiry</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900">Why buyers work with us</h2>
            <p className="mt-3 text-slate-600">We focus on practical support, not sales promises.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-900">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-4 text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900">Recent sourcing projects</h2>
              <p className="mt-3 text-slate-600">Examples of how we helped buyers reduce risk and move products from factory to destination.</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/case-studies">View all case studies</Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Home goods importer', result: 'Reduced defect rate from 12% to under 2%', industry: 'Home & Kitchen' },
              { title: 'Electronics brand', result: 'Verified 3 suppliers and cut sample time by 40%', industry: 'Electronics' },
              { title: 'Industrial equipment buyer', result: 'Coordinated 4 container shipments in 6 months', industry: 'Industrial' },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <Badge className="w-fit" variant="secondary">{item.industry}</Badge>
                  <CardTitle className="mt-3 text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.result}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900">Frequently asked questions</h2>
            <p className="mt-3 text-slate-600">Answers to common questions about working with a China sourcing agent.</p>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="rounded-lg border border-slate-200 bg-white">
                <button
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-slate-900">{faq.question}</span>
                  <ChevronRight className={`h-5 w-5 text-slate-500 transition-transform ${openFaq === index ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-sm text-slate-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Get a Free Sourcing Quote</h2>
              <p className="mt-3 text-slate-600">Tell us what you need. We will review your request and reply with a practical next step within 24 hours.</p>
              <div className="mt-8 space-y-4 text-sm text-slate-600">
                <p className="flex items-start gap-2"><MessageSquareQuote className="mt-0.5 h-4 w-4" /> No-obligation initial consultation</p>
                <p className="flex items-start gap-2"><FileCheck2 className="mt-0.5 h-4 w-4" /> Clear scope and cost estimate</p>
                <p className="flex items-start gap-2"><PackageCheck className="mt-0.5 h-4 w-4" /> Practical timeline and risk notes</p>
              </div>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-900">Name</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-900">Email</label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-900">Company</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-900">Product or category</label>
                    <Input
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      placeholder="e.g. kitchen appliances, electronics components"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-900">Project details</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share quantity targets, quality requirements, timeline, and any special needs."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full">Send Inquiry</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
