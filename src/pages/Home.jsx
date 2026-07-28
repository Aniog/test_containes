import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Ship,
  ArrowRight,
  CheckCircle2,
  Factory,
  Globe,
  Users,
  PackageCheck,
  MessageSquareQuote,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    title: 'Supplier Sourcing',
    description: 'We identify and vet manufacturers that match your product specs, volume needs, and budget.',
    icon: Search,
  },
  {
    title: 'Factory Verification',
    description: 'On-site audits, business-license checks, and capability reviews to reduce supplier risk.',
    icon: ShieldCheck,
  },
  {
    title: 'Quality Inspection',
    description: 'Pre-production, in-line, and pre-shipment inspections with clear reporting and pass/fail criteria.',
    icon: ClipboardCheck,
  },
  {
    title: 'Shipping Coordination',
    description: 'Freight forwarding, customs support, and consolidated logistics from factory to your door.',
    icon: Ship,
  },
];

const process = [
  { step: '1', title: 'Share Your Requirements', description: 'Tell us product specs, target price, order volume, and timeline.' },
  { step: '2', title: 'We Source & Verify', description: 'We shortlist suppliers, check credentials, and confirm production capacity.' },
  { step: '3', title: 'Inspect & Approve', description: 'We inspect samples and production runs so you can approve with confidence.' },
  { step: '4', title: 'Ship & Support', description: 'We coordinate logistics, handle export paperwork, and track delivery.' },
];

const products = [
  'Electronics & Components',
  'Home & Kitchen',
  'Furniture & Lighting',
  'Textiles & Apparel',
  'Hardware & Tools',
  'Packaging & Labels',
];

const problems = [
  'Unreliable suppliers with inconsistent quality',
  'Language and time-zone barriers',
  'Hidden costs and unclear pricing',
  'Factory audits that are hard to arrange',
  'Shipping delays and customs issues',
];

const trustPoints = [
  { title: 'On-Ground China Team', description: 'Local staff in Guangzhou with direct factory access.' },
  { title: 'Transparent Reporting', description: 'Inspection photos, videos, and structured reports after every visit.' },
  { title: 'No Minimum Order Games', description: 'Clear MOQ guidance and realistic supplier matching.' },
  { title: 'End-to-End Support', description: 'From sourcing to shipping, one point of contact.' },
];

const caseStudies = [
  {
    title: 'Home goods importer',
    result: 'Reduced defect rate from 18% to under 3% in 2 orders.',
    category: 'Quality Improvement',
  },
  {
    title: 'Electronics brand',
    result: 'Shortened supplier onboarding from 6 weeks to 10 days.',
    category: 'Sourcing Speed',
  },
  {
    title: 'Furniture retailer',
    result: 'Consolidated 3 suppliers into 1 reliable partner.',
    category: 'Supplier Consolidation',
  },
];

const faqs = [
  {
    question: 'What does a sourcing agent actually do?',
    answer:
      'A sourcing agent helps overseas buyers find suitable suppliers in China, verify their reliability, inspect product quality, monitor production, and arrange shipping. We act as your local representative so you can source with less risk and less travel.',
  },
  {
    question: 'How do you verify suppliers?',
    answer:
      'We use a mix of business-registration checks, factory visits, capability assessments, and reference checks. For higher-risk categories, we also recommend third-party audits.',
  },
  {
    question: 'What is included in a quality inspection?',
    answer:
      'Inspections can cover pre-production checks, in-line monitoring, and pre-shipment verification. We check against your specifications, packaging, labeling, and safety requirements.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer:
      'Yes. We coordinate freight, prepare shipping documents, and work with customs brokers to help clear goods for export. We can arrange sea, air, rail, or express options depending on urgency.',
  },
  {
    question: 'How are fees structured?',
    answer:
      'Fees depend on project complexity, product category, and required services. We provide a clear quote after reviewing your requirements. Many clients start with a sourcing and inspection package.',
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

  const handleInquiry = (e) => {
    e.preventDefault();
    toast.success('Inquiry received. We will reply within 1 business day.');
    e.target.reset();
  };

  return (
    <div ref={containerRef} className="flex-1">
      <section className="relative overflow-hidden">
        <div
          data-strk-bg-id="home-hero-bg-8f2a9c"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">China Sourcing Agent for Global Buyers</Badge>
            <h1
              id="home-hero-title"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Source from China with less risk and more confidence
            </h1>
            <p
              id="home-hero-subtitle"
              className="mt-4 text-base text-slate-200 sm:text-lg"
            >
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Factory verification
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Quality inspection
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Shipping support
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="border-slate-200 bg-white">
              <div className="p-6">
                <service.icon className="h-8 w-8 text-slate-900" />
                <h3 className="mt-4 text-base font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:underline"
                >
                  Learn more <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">How the sourcing process works</h2>
            <p className="mt-2 text-sm text-slate-600">
              A straightforward workflow designed to reduce risk and keep you informed at every stage.
            </p>
            <div className="mt-8 space-y-6">
              {process.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild className="mt-8 bg-slate-900 text-white hover:bg-slate-800">
              <Link to="/how-it-works">View full process</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card className="border-slate-200 bg-white">
              <div className="p-6">
                <h3 className="text-sm font-semibold text-slate-900">Products we source</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {products.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <PackageCheck className="h-4 w-4 text-slate-900" /> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/products" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:underline">
                  View categories <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>

            <Card className="border-slate-200 bg-white">
              <div className="p-6">
                <h3 className="text-sm font-semibold text-slate-900">Problems we solve</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {problems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 text-slate-900" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Why buyers work with us</h2>
        <p className="mt-2 text-sm text-slate-600">
          Practical advantages backed by on-ground presence in China.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((item) => (
            <Card key={item.title} className="border-slate-200 bg-white">
              <div className="p-6">
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Case studies</h2>
          <p className="mt-2 text-sm text-slate-600">
            Real examples of how we helped buyers improve sourcing outcomes.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {caseStudies.map((item) => (
              <Card key={item.title} className="border-slate-200 bg-white">
                <div className="p-6">
                  <Badge variant="outline" className="border-slate-200 text-slate-700">{item.category}</Badge>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.result}</p>
                  <Link to="/case-studies" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:underline">
                    Read case study <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Frequently asked questions</h2>
            <p className="mt-2 text-sm text-slate-600">
              Straight answers to common sourcing questions.
            </p>
            <Accordion type="single" collapsible className="mt-6">
              {faqs.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-sm font-medium text-slate-900">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <Card className="border-slate-200 bg-white">
            <div className="p-6">
              <h3 className="text-base font-semibold text-slate-900">Request a free sourcing quote</h3>
              <p className="mt-1 text-sm text-slate-600">
                Tell us what you need. We will reply within 1 business day.
              </p>
              <form className="mt-6 space-y-4" onSubmit={handleInquiry}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-medium text-slate-700">Name</label>
                    <Input name="name" required placeholder="Your name" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-700">Email</label>
                    <Input name="email" type="email" required placeholder="you@company.com" className="mt-1" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-700">Product category</label>
                  <Input name="category" placeholder="Electronics, furniture, textiles..." className="mt-1" />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-700">Project details</label>
                  <Textarea name="details" rows={4} placeholder="Specs, target price, order volume, timeline..." className="mt-1" />
                </div>
                <Button type="submit" className="w-full bg-slate-900 text-white hover:bg-slate-800">
                  Send Inquiry
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </section>

      <Toaster />
    </div>
  );
};

export default Home;
