import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  ArrowRight,
  CheckCircle2,
  Globe,
  Users,
  Clock,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion";
import SectionHeading from "@/components/shared/SectionHeading";
import InquiryForm from "@/components/shared/InquiryForm";
import HelmetSEO from "@/components/shared/HelmetSEO";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description: "We identify and shortlist manufacturers that match your product specs, capacity needs, and target pricing.",
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    description: "On-site audits, license checks, and production-capability assessments to reduce supplier risk.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description: "Pre-shipment, during-production, and container-loading inspections with detailed reports and photos.",
  },
  {
    icon: Factory,
    title: "Production Follow-Up",
    description: "Weekly updates, milestone tracking, and problem-solving so your order stays on schedule.",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    description: "We consolidate quotes, prepare documentation, and coordinate logistics from factory to your door.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Tell us what you need",
    description: "Share product specs, target price, quantity, and any compliance or certification requirements.",
  },
  {
    step: "02",
    title: "We find & verify suppliers",
    description: "Our team sources candidates, checks credentials, and negotiates terms on your behalf.",
  },
  {
    step: "03",
    title: "Sampling & quoting",
    description: "Receive verified quotations, samples, and factory profiles so you can make an informed decision.",
  },
  {
    step: "04",
    title: "Order & quality control",
    description: "We monitor production, conduct inspections, and coordinate shipping until delivery is complete.",
  },
];

const products = [
  { title: "Electronics & Components", description: "PCBs, cables, chargers, consumer electronics, IoT devices." },
  { title: "Machinery & Industrial Parts", description: "Metal parts, tooling, hardware, automation components." },
  { title: "Home & Garden", description: "Furniture, kitchenware, lighting, garden tools, decor." },
  { title: "Textiles & Apparel", description: "Fabrics, garments, bags, footwear, accessories." },
  { title: "Packaging & Printing", description: "Retail boxes, labels, bags, promotional materials." },
  { title: "Consumer Goods", description: "Toys, sports items, personal care, pet products." },
];

const problems = [
  "Cannot find a reliable manufacturer",
  "Suppliers stop responding after payment",
  "Quality does not match samples",
  "Production delays and missed deadlines",
  "Hidden costs and shipping confusion",
  "Language and time-zone barriers",
];

const trustPoints = [
  { icon: Globe, value: "12+", label: "Years in China sourcing" },
  { icon: Users, value: "800+", label: "Verified supplier network" },
  { icon: Factory, value: "45+", label: "Industries covered" },
  { icon: Clock, value: "24h", label: "Initial quote response" },
];

const caseStudies = [
  {
    category: "Electronics",
    title: "Reducing defect rates for a US audio brand",
    description:
      "We switched the client from a trading company to a direct manufacturer, implemented inline QC, and cut defect rates from 8% to under 1%.",
  },
  {
    category: "Home Goods",
    title: "Cutting costs for a European furniture importer",
    description:
      "By sourcing from a specialized region and consolidating shipments, we reduced landed costs by 18% while improving delivery reliability.",
  },
  {
    category: "Industrial",
    title: "On-time launch for an Australian machinery startup",
    description:
      "Our team managed tooling approval, pilot runs, and pre-shipment inspections to hit a tight product-launch deadline.",
    },
];

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with SMEs, e-commerce sellers, distributors, and growing brands in North America, Europe, Australia, and beyond. Whether you need a one-time order or ongoing sourcing support, we can tailor our service.",
  },
  {
    question: "How long does it take to receive a supplier shortlist?",
    answer:
      "Most clients receive an initial shortlist with verified quotations within 3–7 business days, depending on product complexity and category.",
  },
  {
    question: "Do you charge upfront fees?",
    answer:
      "We begin most inquiries with a free sourcing quote. Project-based fees or commissions are discussed transparently once we understand your scope.",
  },
  {
    question: "Can you handle shipping and customs documentation?",
    answer:
      "Yes. We coordinate freight forwarding, customs paperwork, and delivery to your warehouse or fulfillment center.",
  },
  {
    question: "How do you verify factories?",
    answer:
      "Verification includes business-license checks, factory-site visits or virtual audits, production-line review, and reference checks with existing buyers when possible.",
  },
];

export default function Home() {
  const pageRef = useRef(null);

  useEffect(() => {
    if (!pageRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      <HelmetSEO
        title="China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China"
        description="SSourcing China helps overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping. Get a free quote."
      />

      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          data-strk-bg-id="home-hero-bg-7a3b2c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="primary" className="mb-6">
              China Sourcing Agent for Global Buyers
            </Badge>
            <h1 id="hero-title" className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Source from China with Confidence
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg text-slate-300 sm:text-xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and
              coordinate shipping — end to end.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Get a Free Sourcing Quote
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="End-to-end sourcing support in China"
            description="From the first supplier search to final delivery, we act as your eyes and ears on the ground."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <Card key={idx} className="group transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services">
              <Button variant="outline">
                View all services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sourcing Process"
            title="A clear, four-step process"
            description="No guesswork. We keep you informed at every stage so you can make decisions quickly."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-bold text-blue-100">{item.step}</div>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Products We Source"
                title="Broad category coverage"
                description="Our team has experience across consumer, industrial, and packaging categories. If it is made in China, we can help you source it responsibly."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {products.map((product) => (
                  <div key={product.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-blue-700" />
                      <h4 className="font-semibold text-slate-900">{product.title}</h4>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/products">
                  <Button variant="outline">
                    Browse product categories <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                data-strk-img-id="home-products-img-9c4d1e"
                data-strk-img="[products-heading] [products-subheading]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Manufactured products in China"
                className="rounded-xl object-cover shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-5 shadow-lg lg:block">
                <p className="text-sm font-medium text-slate-900">Trusted by buyers in</p>
                <p className="text-2xl font-bold text-blue-700">35+ countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Problems We Solve"
                title="Tired of unreliable suppliers?"
                description="We solve the most common sourcing headaches so you can focus on growing your business."
                className="[&_h2]:text-white [&_p]:text-slate-300"
              />
              <div className="mt-8 space-y-4">
                {problems.map((problem) => (
                  <div key={problem} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <span className="text-slate-200">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-slate-800 p-8">
              <h3 className="text-xl font-semibold text-white">Why clients choose us</h3>
              <div className="mt-6 grid grid-cols-2 gap-6">
                {trustPoints.map((point) => (
                  <div key={point.label}>
                    <point.icon className="h-6 w-6 text-blue-400" />
                    <p className="mt-2 text-3xl font-bold text-white">{point.value}</p>
                    <p className="text-sm text-slate-400">{point.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case Studies"
            title="Real results for real buyers"
            description="See how we have helped businesses source better, faster, and more reliably from China."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Card key={study.title} className="flex flex-col">
                <CardHeader>
                  <Badge variant="primary" className="w-fit">
                    {study.category}
                  </Badge>
                  <CardTitle className="mt-3">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-slate-600">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/case-studies">
              <Button variant="outline">
                Read more case studies <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Quick answers to common questions about working with SSourcing China."
          />
          <div className="mt-10">
            <Accordion defaultValue="faq-0">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger value={`faq-${idx}`}>{faq.question}</AccordionTrigger>
                  <AccordionContent value={`faq-${idx}`}>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Get Started"
                title="Request a free sourcing quote"
                description="Tell us what you are looking for. We will review your needs and get back to you within one business day."
              />
              <div className="mt-8 space-y-4 text-slate-600">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-700" />
                  No obligation, free initial review
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-700" />
                  Response within 24 business hours
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-700" />
                  Transparent fees and next steps
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
