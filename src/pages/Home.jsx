import { Link } from "react-router-dom"
import {
  ArrowRight,
  ShieldCheck,
  ClipboardCheck,
  ShipWheel,
  Search,
  Factory,
  PackageCheck,
  CheckCircle2,
  ChevronDown,
} from "lucide-react"
import Button from "@/components/ui/Button"
import { Section, SectionHeader } from "@/components/ui/Section"
import Card from "@/components/ui/Card"
import CtaBanner from "@/components/sections/CtaBanner"
import InquiryForm from "@/components/sections/InquiryForm"
import { useStrkImages } from "@/lib/useStrkImages"
import {
  services,
  processSteps,
  productCategories,
  problems,
  trustPoints,
  caseStudies,
  faqs,
} from "@/data/content"

function Hero() {
  const ref = useStrkImages([])
  return (
    <section ref={ref} className="relative overflow-hidden bg-white">
      <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="eyebrow mb-4">China-Based Sourcing Agent</p>
          <h1 className="heading-1">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="lead mt-6 max-w-xl">
            SSourcing China helps overseas buyers find reliable suppliers,
            verify factories, inspect quality, follow production, and coordinate
            shipping — with a single, accountable point of contact on the
            ground.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact" variant="accent" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button to="/how-it-works" variant="outline" size="lg">
              See How It Works
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {trustPoints.map((t) => (
              <div key={t.id}>
                <p className="text-2xl font-extrabold text-primary lg:text-3xl">
                  {t.stat}
                </p>
                <p className="mt-1 text-sm text-muted">{t.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            className="aspect-[4/3] w-full rounded-2xl border border-line shadow-sm"
            data-strk-bg-id="hero-factory-bg-1a2b3c"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="900"
          />
          <div className="absolute -bottom-6 -left-6 hidden w-64 rounded-xl border border-line bg-white p-5 shadow-md lg:block">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                <ShieldCheck className="h-5 w-5 text-green-600" />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">Verified suppliers</p>
                <p className="text-xs text-muted">Audited before you order</p>
              </div>
            </div>
          </div>
          <span id="hero-title" className="hidden">
            China Sourcing Agent for Global Buyers
          </span>
          <span id="hero-subtitle" className="hidden">
            Modern Chinese factory production line with workers and quality control
          </span>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "Factory Verification" },
    { icon: ClipboardCheck, label: "Quality Control" },
    { icon: Factory, label: "Production Follow-Up" },
    { icon: ShipWheel, label: "Shipping Coordination" },
  ]
  return (
    <div className="border-y border-line bg-surface">
      <div className="container-page grid grid-cols-2 gap-4 py-6 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-3">
            <it.icon className="h-6 w-6 shrink-0 text-primary" />
            <span className="text-sm font-semibold text-ink">{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Services() {
  const ref = useStrkImages([])
  return (
    <Section ref={ref}>
      <SectionHeader
        eyebrow="What We Do"
        title="Sourcing services that cover the full order lifecycle"
        description="From the first supplier search to the final pre-shipment inspection, we manage each stage so you can buy from China with confidence."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.id} className="flex flex-col">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <s.icon className="h-6 w-6 text-primary" />
            </span>
            <h3 className="heading-3 mt-5">{s.title}</h3>
            <p className="mt-2 text-body">{s.desc}</p>
            <ul className="mt-4 space-y-2">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-body">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button to="/services" variant="outline">
          View all services
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  )
}

function Process() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="How It Works"
        title="A clear, six-step sourcing process"
        description="Each step has a defined deliverable, so you always know what happens next and what you're paying for."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step) => (
          <div
            key={step.id}
            className="relative rounded-xl border border-line bg-surface p-6"
          >
            <span className="text-3xl font-extrabold text-primary/30">
              {step.no}
            </span>
            <h3 className="heading-3 mt-2">{step.title}</h3>
            <p className="mt-2 text-body">{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button to="/how-it-works" variant="outline">
          See the full process
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  )
}

function Products() {
  const ref = useStrkImages([])
  return (
    <Section ref={ref}>
      <SectionHeader
        eyebrow="Products We Source"
        title="Categories we know well"
        description="We focus on product categories where we have established supplier networks and proven quality benchmarks."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productCategories.map((p) => (
          <Card key={p.id} className="overflow-hidden p-0">
            <img
              alt={p.title}
              data-strk-img-id={p.imgId}
              data-strk-img={`[products-${p.id}-desc] [products-${p.id}-title] [products-section-title]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-6">
              <h3 className="heading-3" id={`products-${p.id}-title`}>
                {p.title}
              </h3>
              <p className="mt-2 text-body" id={`products-${p.id}-desc`}>
                {p.desc}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <span id="products-section-title" className="hidden">
        Product categories sourced from China
      </span>
      <div className="mt-10 text-center">
        <Button to="/products" variant="outline">
          Browse all products
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  )
}

function Problems() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Problems We Solve"
        title="Common sourcing risks, handled"
        description="Buying from China remotely creates predictable risks. Here's how we address the ones that cost buyers the most."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {problems.map((p) => (
          <div
            key={p.id}
            className="flex gap-4 rounded-xl border border-line bg-surface p-6"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
              <p.icon className="h-6 w-6 text-accent" />
            </span>
            <div>
              <h3 className="heading-3">{p.title}</h3>
              <p className="mt-2 text-body">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function CaseStudiesPreview() {
  const ref = useStrkImages([])
  return (
    <Section ref={ref}>
      <SectionHeader
        eyebrow="Case Studies"
        title="Results from real sourcing projects"
        description="A sample of projects where structured sourcing and QC made a measurable difference."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {caseStudies.map((cs) => (
          <Card key={cs.id} className="flex flex-col overflow-hidden p-0">
            <img
              alt={cs.title}
              data-strk-img-id={cs.imgId}
              data-strk-img={`[cs-${cs.id}-summary] [cs-${cs.id}-title]`}
              data-strk-img-ratio="3x2"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="aspect-[3/2] w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <span>{cs.industry}</span>
                <span className="text-muted">•</span>
                <span className="text-muted">{cs.location}</span>
              </div>
              <h3 className="heading-3 mt-2" id={`cs-${cs.id}-title`}>
                {cs.title}
              </h3>
              <p className="mt-2 text-sm text-body" id={`cs-${cs.id}-summary`}>
                {cs.summary}
              </p>
              <p className="mt-4 rounded-lg bg-green-50 px-3 py-2 text-sm font-semibold text-green-700">
                Result: {cs.result}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button to="/case-studies" variant="outline">
          Read all case studies
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  )
}

function Faq() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Straight answers to the questions buyers ask before working with a sourcing agent."
      />
      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        {faqs.map((f) => (
          <details
            key={f.id}
            className="group rounded-xl border border-line bg-surface p-5"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="text-base font-semibold text-ink">{f.q}</span>
              <ChevronDown className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-body">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}

function InquirySection() {
  return (
    <Section id="inquiry">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-3">Get a Free Sourcing Quote</p>
          <h2 className="heading-2">Start your sourcing project</h2>
          <p className="lead mt-4">
            Share what you need to source. We'll review your request and respond
            within one business day with a clear plan and quote.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "No commitment to start the conversation",
              "Clear, written quote before any work begins",
              "One accountable contact across all suppliers",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-body">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button to="/contact" variant="primary">
              Go to full contact page
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <InquiryForm />
      </div>
    </Section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Products />
      <Problems />
      <CaseStudiesPreview />
      <Faq />
      <CtaBanner />
      <InquirySection />
    </>
  )
}
