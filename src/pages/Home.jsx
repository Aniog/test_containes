import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  ShieldCheck,
  Search,
  ClipboardCheck,
  Eye,
  Boxes,
  Ship,
  CheckCircle2,
  Star,
  Globe2,
  Award,
  FileText,
  Quote,
  ChevronDown,
} from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import InquiryForm from "@/components/sections/InquiryForm.jsx"
import CTASection from "@/components/sections/CTASection.jsx"
import ProcessTimeline from "@/components/sections/ProcessTimeline.jsx"

const SERVICES = [
  {
    id: "supplier-sourcing",
    title: "Supplier sourcing & shortlist",
    icon: Search,
    summary:
      "We map the right factories for your product, region and quantity, and pre-check them on-site before you commit.",
    bullets: [
      "Industry-specific supplier shortlist (3-5 candidates)",
      "License, export history and capacity verification",
      "Sample coordination and price negotiation",
    ],
  },
  {
    id: "factory-audit",
    title: "Factory audit & verification",
    icon: ClipboardCheck,
    summary:
      "On-site or remote audits against a clear checklist, so you know exactly who you are dealing with before you place an order.",
    bullets: [
      "AQL-based on-site audit or live video walk-through",
      "License, equipment, workforce and ESG checks",
      "Written report with photos and risk grading",
    ],
  },
  {
    id: "quality-control",
    title: "Quality control & inspections",
    icon: Eye,
    summary:
      "Inline, pre-shipment and during-production inspections carried out by trained QC engineers, with photo and video evidence.",
    bullets: [
      "DPI · DUPRO · PSI inspections to AQL standards",
      "Lab testing coordination (CE, FDA, REACH, etc.)",
      "24-hour inspection report with corrective actions",
    ],
  },
  {
    id: "production-follow-up",
    title: "Production follow-up",
    icon: Boxes,
    summary:
      "Weekly updates, milestone photos and escalation when timelines slip, so production stays on track without you chasing factories.",
    bullets: [
      "Weekly production status reports",
      "Milestone photos and short video clips",
      "Escalation and rework coordination",
    ],
  },
  {
    id: "shipping",
    title: "Shipping & logistics coordination",
    icon: Ship,
    summary:
      "We coordinate freight forwarders, customs paperwork and Incoterms so your goods arrive where and when you expect them.",
    bullets: [
      "Sea, air and rail freight options",
      "Customs documents, HS codes, certificates of origin",
      "Door-to-door, FOB, CIF or DDP supported",
    ],
  },
  {
    id: "full-package",
    title: "Full-package sourcing",
    icon: Award,
    summary:
      "End-to-end project ownership: from the first sketch or spec, to sample approval, production, QC and shipping.",
    bullets: [
      "Dedicated project manager per order",
      "Single point of contact across all stages",
      "Suitable for new product launches and Amazon/Shopify brands",
    ],
  },
]

const PRODUCT_CATEGORIES = [
  { title: "Consumer electronics & accessories", count: "200+ factories" },
  { title: "Apparel, textiles & fashion", count: "300+ factories" },
  { title: "Home, kitchen & household", count: "250+ factories" },
  { title: "Beauty & personal care", count: "150+ factories" },
  { title: "Industrial parts & hardware", count: "180+ factories" },
  { title: "Packaging & printing", count: "120+ factories" },
  { title: "Furniture, lighting & decor", count: "160+ factories" },
  { title: "Sports, outdoor & fitness", count: "90+ factories" },
]

const PROCESS_STEPS = [
  {
    title: "Brief",
    description:
      "Send us a quick brief: product, quantity, target price, and any must-haves (certifications, materials, branding).",
    deliverable: "Clear sourcing brief",
  },
  {
    title: "Shortlist",
    description:
      "We research 3-5 pre-screened factories for your product, region and order size, and request formal quotes.",
    deliverable: "Supplier comparison sheet",
  },
  {
    title: "Verify & sample",
    description:
      "We audit the top candidates, walk the production line, and arrange samples shipped to your door for approval.",
    deliverable: "Audit report + sealed samples",
  },
  {
    title: "Produce & ship",
    description:
      "We follow production, run inspections, and coordinate freight and customs until goods arrive at your warehouse.",
    deliverable: "QC report + shipping documents",
  },
]

const PROBLEMS = [
  {
    title: "You keep finding the same factory on Alibaba.",
    detail:
      "We go past the marketplaces and check the long tail of vetted manufacturers in the actual industrial clusters.",
  },
  {
    title: "You cannot tell if a factory is a real factory or a trading company.",
    detail:
      "Our on-site audits confirm licenses, equipment, workforce, and export history before any money changes hands.",
  },
  {
    title: "You are afraid of quality surprises after paying the deposit.",
    detail:
      "Independent DPI, DUPRO and PSI inspections against your spec and AQL standard, with photo and video evidence.",
  },
  {
    title: "You do not know if you are paying a fair price.",
    detail:
      "We benchmark your quotes against current market data and negotiate on your behalf using real factory cost breakdowns.",
  },
  {
    title: "You have no time to chase a factory in Mandarin.",
    detail:
      "Your dedicated sourcing manager in Shenzhen handles production, scheduling and escalations, in English.",
  },
  {
    title: "Shipping, customs and Incoterms are a black box.",
    detail:
      "We coordinate with vetted forwarders, prepare export documents, and explain FOB vs CIF vs DDP in plain language.",
  },
]

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: "Independent audits",
    detail:
      "Every shortlist factory is verified on-site or via live video, with a written report and risk grade.",
  },
  {
    icon: FileText,
    title: "Transparent pricing",
    detail:
      "Itemized quotes with material, labor, packaging and margin split, so you can see exactly what you are paying for.",
  },
  {
    icon: Globe2,
    title: "Built for overseas buyers",
    detail:
      "Native English support, English QC reports, and Incoterms explained without jargon.",
  },
  {
    icon: CheckCircle2,
    title: "You stay in control",
    detail:
      "Approve samples, sign off on inspections, and release payments on your schedule, with us as your eyes on the ground.",
  },
]

const CASE_STUDIES = [
  {
    industry: "Consumer electronics",
    region: "USA",
    title: "Cut supplier lead time by 32% for a wireless audio brand",
    summary:
      "Replaced a single trading company with two pre-vetted factories, introduced a weekly production report, and moved QC from after-shipment to inline.",
    results: [
      "Lead time: 52 → 35 days",
      "Defect rate: 4.2% → 0.8%",
      "First-year savings: $180k",
    ],
    image: {
      id: "home-case-electronics-9a2b7c",
      query: "[home-case-1-title] [home-case-1-industry] China sourcing agent electronics factory",
      ratio: "4x3",
      width: 600,
    },
    imageTextId: "home-case-1-title",
    industryId: "home-case-1-industry",
  },
  {
    industry: "Beauty & personal care",
    region: "EU",
    title: "Helped a skincare startup pass EU compliance on the first attempt",
    summary:
      "Audited three GMP factories, coordinated CPNP and REACH documentation, and ran DPI + PSI on the first production batch.",
    results: [
      "3 GMP factories shortlisted",
      "100% CPSR pass rate",
      "Goods to Amsterdam in 28 days",
    ],
    image: {
      id: "home-case-beauty-7f3a1d",
      query: "[home-case-2-title] [home-case-2-industry] China beauty skincare factory clean room",
      ratio: "4x3",
      width: 600,
    },
    imageTextId: "home-case-2-title",
    industryId: "home-case-2-industry",
  },
  {
    industry: "Home & kitchen",
    region: "Australia",
    title: "Scaled a kitchenware brand from 1 SKU to 14 SKUs in 9 months",
    summary:
      "Set up a full-package program with one anchor factory, dedicated project manager, and a shared production calendar across SKUs.",
    results: [
      "14 SKUs launched",
      "1 dedicated anchor factory",
      "On-time delivery: 96%",
    ],
    image: {
      id: "home-case-homegoods-4c1e8b",
      query: "[home-case-3-title] [home-case-3-industry] China kitchenware factory production line",
      ratio: "4x3",
      width: 600,
    },
    imageTextId: "home-case-3-title",
    industryId: "home-case-3-industry",
  },
]

const TESTIMONIALS = [
  {
    quote:
      "SSourcing cut our defect rate by 80% in the first quarter. The weekly photo reports and clear corrective actions made it feel like we had a Shenzhen office.",
    name: "Operations Lead",
    company: "Wireless audio brand, USA",
  },
  {
    quote:
      "We were two days from paying a 30% deposit to a trading company. Their factory audit showed it had no production line. That single report saved us $90,000.",
    name: "Founder",
    company: "Skincare startup, Germany",
  },
  {
    quote:
      "The team explained FOB vs DDP in plain English, lined up a reliable forwarder, and got our first container to Sydney 4 days ahead of schedule.",
    name: "Procurement Manager",
    company: "Home & kitchen brand, Australia",
  },
]

const STATS = [
  { value: "12+", label: "Years sourcing in China" },
  { value: "1,400+", label: "Suppliers in our network" },
  { value: "300+", label: "Factory audits per year" },
  { value: "40+", label: "Buyer countries served" },
]

const FAQS = [
  {
    q: "Are you a factory or a sourcing agent?",
    a: "We are an independent sourcing agent based in Shenzhen. We do not manufacture anything ourselves, which means we negotiate with factories on your behalf without a conflict of interest.",
  },
  {
    q: "How do you get paid?",
    a: "Most clients pay a small service fee for each step (sourcing, audit, QC, shipping). Factory payments go directly from you to the factory — we never hold your money.",
  },
  {
    q: "What is the typical order size you handle?",
    a: "We work with trial orders from a few hundred units up to full container loads. If your order is too small for a factory's MOQ, we can group production or suggest a smaller workshop.",
  },
  {
    q: "Can you help if I have no factory or even a final design?",
    a: "Yes. Our full-package service includes product research, material selection, sampling and packaging. We will lay out the cost and timeline before you commit.",
  },
  {
    q: "How long does a typical first project take?",
    a: "From first brief to sealed samples in your hands is usually 3-4 weeks. Mass production depends on complexity, but most orders ship within 30-60 days after sample approval.",
  },
  {
    q: "Do you sign NDAs and protect my designs?",
    a: "Always. We sign mutual NDAs before sharing product briefs with any factory, and we only introduce you to suppliers that have agreed to your confidentiality terms.",
  },
  {
    q: "What if a quality issue shows up after delivery?",
    a: "Our QC reports and corrective action plans give you leverage. We mediate with the factory on rework, replacement or credit, and we adjust our inspection plan for the next order.",
  },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <Hero />
      <TrustStrip />
      <Services />
      <Process />
      <Products />
      <Problems />
      <Stats />
      <CaseStudies />
      <Testimonials />
      <Faq />
      <InquiryBlock />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        data-strk-bg-id="home-hero-bg-7c1f3a"
        data-strk-bg="[home-hero-title] [home-hero-subtitle] China sourcing agent factory floor shipping"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-800/80"
        aria-hidden="true"
      />
      <div className="container-wide py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="eyebrow-on-dark">Shenzhen-based · English-speaking</span>
            <h1
              id="home-hero-title"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="home-hero-subtitle"
              className="mt-5 max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed"
            >
              We help overseas importers, brands and Amazon / Shopify sellers find
              reliable Chinese suppliers, verify factories, inspect quality, follow
              production and coordinate shipping — all in plain English, with one
              dedicated sourcing manager per project.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-primary">
                Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary-on-dark">
                See How It Works
              </Link>
            </div>
            <ul className="mt-8 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              {[
                "Independent factory audits",
                "AQL-based QC inspections",
                "Weekly production reports",
                "No-conflict sourcing advice",
              ].map((b) => (
                <li key={b} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span className="inline-flex h-2 w-2 rounded-full bg-success-500"></span>
                Average reply time: under 1 business day
              </div>
              <h2 className="mt-4 text-lg font-semibold text-white">
                What you get from a free sourcing quote:
              </h2>
              <ol className="mt-4 space-y-3 text-sm text-slate-200">
                {[
                  "Feasibility check on your product and quantity",
                  "Shortlist of 3-5 pre-screened factories",
                  "Indicative price range and MOQ guidance",
                  "Suggested next steps (samples, audit, timeline)",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500 text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <Link
                to="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 hover:bg-slate-100"
              >
                Start your brief <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="container-wide py-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Trusted by importers, brands and procurement teams in 40+ countries
        </p>
        <div className="mt-5 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
          {["United States", "United Kingdom", "Germany", "Australia", "Canada", "UAE"].map(
            (c) => (
              <div
                key={c}
                className="flex items-center justify-center text-sm font-semibold text-slate-500"
              >
                {c}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Our services</p>
          <h2 className="h2 mt-3">End-to-end sourcing, from first brief to your warehouse</h2>
          <p className="lead mt-4">
            Pick the steps you need, or hand us the whole project. Every service is run by
            a dedicated sourcing manager in Shenzhen and reported to you in English.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="card flex flex-col"
            >
              <span className="icon-bubble-accent">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={`/services#${s.id}`}
                className="btn-ghost mt-5 self-start"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section bg-slate-50">
      <div className="container-wide">
        <div className="grid items-end gap-8 md:grid-cols-2">
          <div>
            <p className="eyebrow">Sourcing process</p>
            <h2 className="h2 mt-3">A four-step process that keeps you in control</h2>
          </div>
          <p className="text-base text-slate-600 leading-relaxed">
            No black boxes, no surprises. Each step has a clear deliverable, a named
            owner, and a checkpoint where you decide whether to move forward.
          </p>
        </div>
        <div className="mt-10">
          <ProcessTimeline steps={PROCESS_STEPS} />
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link to="/how-it-works" className="btn-secondary">
            See the full process
          </Link>
          <Link to="/contact" className="btn-primary">
            Start your brief
          </Link>
        </div>
      </div>
    </section>
  )
}

function Products() {
  return (
    <section className="section bg-white">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Products we source</p>
          <h2 className="h2 mt-3">We cover the categories overseas buyers ask for most</h2>
          <p className="lead mt-4">
            Our supplier network is concentrated in the major industrial clusters of
            Guangdong, Zhejiang, Jiangsu, Fujian and Shandong — but we work with vetted
            factories across China.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_CATEGORIES.map((p) => (
            <div
              key={p.title}
              className="card-tinted flex flex-col"
            >
              <Boxes className="h-6 w-6 text-navy-700" />
              <h3 className="mt-3 text-base font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-1 text-xs text-slate-500">{p.count}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/products" className="btn-secondary">
            See the full category list
          </Link>
        </div>
      </div>
    </section>
  )
}

function Problems() {
  return (
    <section className="section bg-navy-900 text-white">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow-on-dark">Problems we solve</p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
            The six headaches that make overseas buyers give up on China
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
            We built SSourcing around the issues we hear about every week from first-time
            and experienced importers alike. Each one is solved with a documented process,
            not a promise.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-base font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="section bg-white">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Why buyers stay with us</p>
          <h2 className="h2 mt-3">Numbers that come from real projects, not marketing</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="card text-center">
              <p className="text-3xl font-semibold text-navy-900 md:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map((t) => (
            <div key={t.title} className="card-tinted flex flex-col">
              <span className="icon-bubble-navy">
                <t.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{t.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{t.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudies() {
  return (
    <section className="section bg-slate-50">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Case studies</p>
            <h2 className="h2 mt-3">Real outcomes from real projects</h2>
            <p className="lead mt-4">
              Three short stories that show how independent sourcing, audits and QC
              change the economics of importing from China.
            </p>
          </div>
          <Link to="/case-studies" className="btn-secondary self-start md:self-auto">
            See all case studies
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((c) => (
            <article
              key={c.title}
              className="card flex flex-col overflow-hidden p-0"
            >
              <img
                alt={c.title}
                data-strk-img-id={c.image.id}
                data-strk-img={`[${c.imageTextId}] [${c.industryId}] China sourcing agent case study`}
                data-strk-img-ratio={c.image.ratio}
                data-strk-img-width={c.image.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-48 w-full object-cover"
              />
              <div className="flex flex-col p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="pill-accent">{c.industry}</span>
                  <span className="pill-neutral">{c.region}</span>
                </div>
                <h3
                  id={c.imageTextId}
                  className="mt-3 text-lg font-semibold text-slate-900"
                >
                  {c.title}
                </h3>
                <p id={c.industryId} className="sr-only">{c.industry}</p>
                <p className="mt-2 text-sm text-slate-600">{c.summary}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                  {c.results.map((r) => (
                    <li key={r} className="inline-flex items-center gap-2">
                      <Star className="h-4 w-4 text-accent-500" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">What buyers say</p>
          <h2 className="h2 mt-3">Trusted by procurement teams, founders and brand owners</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="card-tinted flex h-full flex-col"
            >
              <Quote className="h-7 w-7 text-navy-300" />
              <blockquote className="mt-4 flex-1 text-base text-slate-700 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-4 border-t border-slate-200 pt-4 text-sm">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-slate-500">{t.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="section bg-slate-50">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="h2 mt-3">Common questions from new buyers</h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              If you have a question that is not covered here, send a brief and a
              sourcing manager will answer it directly.
            </p>
            <Link to="/contact" className="btn-primary mt-6">
              Ask a sourcing manager
            </Link>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {FAQS.map((f) => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqItem({ q, a }) {
  return (
    <details className="group p-6">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
        <span className="text-base font-semibold text-slate-900 md:text-lg">{q}</span>
        <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
      </summary>
      <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">{a}</p>
    </details>
  )
}

function InquiryBlock() {
  return (
    <section id="inquiry" className="section bg-white">
      <div className="container-wide">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Free sourcing quote</p>
            <h2 className="h2 mt-3">Tell us what you want to source</h2>
            <p className="lead mt-4">
              A senior sourcing manager in Shenzhen reads every brief personally and
              replies within one business day with a shortlist, indicative pricing,
              and a clear next step.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {[
                "No obligation, no paywall, no spam",
                "All replies are in English, with named contacts",
                "Your brief stays private unless you say otherwise",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-success-600" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">
                Prefer to talk first?
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Email{" "}
                <a className="text-navy-700 underline" href="mailto:hello@ssourcingchina.com">
                  hello@ssourcingchina.com
                </a>{" "}
                or call <span className="text-navy-700">+86 755 8888 9999</span>, Mon-Fri,
                09:00-18:00 China time.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <InquiryForm sourcePage="home" compact />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <CTASection />
      </div>
    </section>
  )
}
