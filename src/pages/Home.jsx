import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import SectionHeading from "@/components/SectionHeading"
import InquiryForm from "@/components/InquiryForm"
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Boxes,
  Globe2,
  FileText,
  Users,
  TrendingDown,
  ShieldAlert,
  Languages,
  PackageCheck,
  Truck,
  CheckCircle2,
  ArrowRight,
  Quote,
} from "lucide-react"

const SERVICES = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and shortlist factories that match your product specs, target price, and certification needs.",
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    desc: "On-site visits to verify business licenses, production capacity, equipment, and quality systems.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Pre-production, during-production (DUPRO), and pre-shipment inspections with photo and video reports.",
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    desc: "We track production schedules, push lead times, and flag risks before they become delays.",
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    desc: "Coordinated bookings by sea, air, or rail, customs paperwork, and door-to-door delivery options.",
  },
  {
    icon: Boxes,
    title: "Consolidation & Packaging",
    desc: "Multi-supplier consolidation, custom packaging, labeling, and Amazon FBA prep.",
  },
]

const PROCESS = [
  {
    step: "01",
    title: "Send your requirements",
    desc: "Tell us product specs, target price, quantity, certifications, and timeline. A specialist replies within one business day.",
  },
  {
    step: "02",
    title: "Receive supplier shortlist",
    desc: "We screen our verified network and the broader market, then send you a shortlist with quotations and factory profiles.",
  },
  {
    step: "03",
    title: "Sample & verify factory",
    desc: "We arrange samples, run an on-site factory audit, and confirm the supplier meets your standards before any deposit.",
  },
  {
    step: "04",
    title: "Place order & follow production",
    desc: "We place the order on your behalf, track production weekly, and resolve any issues directly with the factory.",
  },
  {
    step: "05",
    title: "Inspect quality",
    desc: "Independent QC inspection at the factory before shipment, with a written report including photos, measurements, and defects.",
  },
  {
    step: "06",
    title: "Ship to your door",
    desc: "We book the freight, handle export documents, and coordinate with your forwarder or deliver door-to-door.",
  },
]

const PRODUCTS = [
  {
    id: "electronics",
    title: "Consumer Electronics",
    desc: "Accessories, audio, smart home devices, small appliances. CE, FCC, RoHS available.",
  },
  {
    id: "home-kitchen",
    title: "Home & Kitchen",
    desc: "Cookware, storage, small kitchen tools, household goods. FDA / LFGB on request.",
  },
  {
    id: "apparel",
    title: "Apparel & Textiles",
    desc: "Knit and woven garments, accessories, home textiles, custom fabric sourcing.",
  },
  {
    id: "furniture",
    title: "Furniture",
    desc: "Indoor and outdoor furniture, custom dimensions, finishes, and packaging.",
  },
  {
    id: "industrial",
    title: "Industrial & Hardware",
    desc: "Metal parts, fasteners, tools, industrial components from audited workshops.",
  },
  {
    id: "promotional",
    title: "Promotional & Custom",
    desc: "Branded merchandise, packaging, gift sets with custom logo and printing.",
  },
]

const PROBLEMS = [
  {
    icon: ShieldAlert,
    title: "Trading companies posing as factories",
    desc: "We verify business scope and visit production sites, so you only deal with actual manufacturers when you need them.",
  },
  {
    icon: TrendingDown,
    title: "Quality drift after the first order",
    desc: "Independent inspections at every shipment keep specs, materials, and finishing consistent over time.",
  },
  {
    icon: Languages,
    title: "Communication and time-zone gaps",
    desc: "A bilingual specialist handles negotiation, technical drawings, and weekly updates in your time zone.",
  },
  {
    icon: PackageCheck,
    title: "Hidden costs and unclear pricing",
    desc: "Transparent fee structure. You receive factory quotations directly, plus a clear sourcing service fee.",
  },
  {
    icon: Truck,
    title: "Shipping delays and damaged cargo",
    desc: "Pre-shipment QC, proper export packaging, and trusted forwarders reduce delays and claims.",
  },
  {
    icon: FileText,
    title: "Missing certifications and documents",
    desc: "We collect test reports, COC, MSDS, and customs paperwork before goods leave the factory.",
  },
]

const TRUST = [
  { icon: Globe2, label: "10+ years sourcing in China" },
  { icon: Users, label: "300+ overseas buyers served" },
  { icon: Factory, label: "Verified factory network across 20+ provinces" },
  { icon: ShieldCheck, label: "Independent QC, no factory kickbacks" },
]

const CASES = [
  {
    id: "kitchenware",
    industry: "Home & Kitchen",
    region: "United States",
    title: "Reliable kitchenware supplier replacement in 6 weeks",
    summary:
      "After two failed shipments from a previous factory, we identified three audited kitchenware manufacturers, ran samples, and stabilized production for a US Amazon brand.",
    metrics: [
      { label: "Defect rate", value: "0.6%" },
      { label: "Lead time", value: "−18 days" },
      { label: "Unit cost", value: "−9%" },
    ],
  },
  {
    id: "outdoor-furniture",
    industry: "Outdoor Furniture",
    region: "Germany",
    title: "Custom outdoor furniture line, full QC across three factories",
    summary:
      "Coordinated production across three factories in Guangdong and Zhejiang for a German retailer, with on-site DUPRO and pre-shipment inspections.",
    metrics: [
      { label: "Containers shipped", value: "42" },
      { label: "On-time rate", value: "98%" },
      { label: "Claims", value: "0" },
    ],
  },
  {
    id: "electronics",
    industry: "Consumer Electronics",
    region: "United Kingdom",
    title: "CE/FCC compliant audio accessories for a UK D2C brand",
    summary:
      "Sourced and verified an electronics factory with in-house tooling, ran two rounds of EVT/PVT samples, and shipped certified product to UK fulfillment.",
    metrics: [
      { label: "Time to first PO", value: "5 weeks" },
      { label: "Test pass rate", value: "100%" },
      { label: "Reorders", value: "4" },
    ],
  },
]

const FAQS = [
  {
    q: "How does SSourcing China charge for sourcing?",
    a: "For most projects we charge a service fee based on order value, typically 5–8%. For inspection or factory audit only, we charge a fixed fee per visit. You always see factory quotations directly, with no hidden margin.",
  },
  {
    q: "Do you take commissions from factories?",
    a: "No. We work for the buyer. We do not accept rebates or kickbacks from suppliers. This is essential for honest sourcing and quality control.",
  },
  {
    q: "Can you help small buyers and startups?",
    a: "Yes. We work with both established importers and early-stage brands. We can help with low MOQ suppliers, sample development, and first-order risk control.",
  },
  {
    q: "What if a quality issue appears during inspection?",
    a: "We share a written QC report with photos and measurements. You decide whether to accept, rework, or reject the lot. We follow up with the factory until the issue is closed.",
  },
  {
    q: "Which countries do you ship to?",
    a: "We ship worldwide by sea, air, and rail through trusted forwarders, including the US, Canada, Europe, the UK, Australia, the Middle East, and Latin America.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. We routinely sign NDAs and IP protection agreements before sharing designs or technical drawings with potential factories.",
  },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* HERO */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-bg-ssc-9f3b21"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
        <div className="absolute inset-0 bg-navy/40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest font-semibold text-gold mb-4">
              SSourcing China · B2B Sourcing Agent
            </p>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed">
              We help overseas buyers find reliable Chinese suppliers, verify
              factories, inspect quality, follow production, and coordinate
              shipping — with transparent fees and no factory kickbacks.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-deep text-navy px-7 py-3.5 rounded-md text-sm font-semibold transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3.5 rounded-md text-sm font-semibold transition-colors"
              >
                See how it works
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {TRUST.map((t) => (
                <div key={t.label} className="flex items-start gap-2 text-slate-200">
                  <t.icon className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-sm">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="End-to-end sourcing, or only the steps you need"
            description="Pick a single service, or let us run the entire process from supplier search to delivered cargo."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, idx) => (
              <article
                key={s.title}
                className="bg-white rounded-xl border border-border-soft p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-bg-soft text-blue-action mb-4">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 id={`service-${idx}-title`} className="text-lg font-semibold text-navy mb-2">
                  {s.title}
                </h3>
                <p id={`service-${idx}-desc`} className="text-slate-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-blue-action font-medium hover:underline">
              See all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-24 bg-white border-y border-border-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sourcing Process"
            title="A clear 6-step path from inquiry to delivered cargo"
            description="No surprises, no guesswork. You always know what is happening at the factory."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((p) => (
              <div key={p.step} className="relative bg-bg-soft rounded-xl p-6 border border-border-soft">
                <span className="absolute -top-3 left-6 inline-flex items-center justify-center w-9 h-9 rounded-md bg-navy text-white text-sm font-semibold">
                  {p.step}
                </span>
                <h3 className="text-lg font-semibold text-navy mt-3 mb-2">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Products We Source"
            title="Categories where we have proven supplier networks"
            description="From small accessories to full container loads, we help you source the right product from the right factory."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article
                key={p.id}
                className="bg-white rounded-xl border border-border-soft overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[3/2] bg-slate-100 overflow-hidden">
                  <img
                    alt={p.title}
                    data-strk-img-id={`product-${p.id}-img-7c2a`}
                    data-strk-img={`[product-${p.id}-desc] [product-${p.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`product-${p.id}-title`} className="text-lg font-semibold text-navy mb-2">
                    {p.title}
                  </h3>
                  <p id={`product-${p.id}-desc`} className="text-slate-600 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="py-16 md:py-24 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Problems We Solve"
            title="What goes wrong when buyers source alone"
            description="These are the recurring issues we fix every week for overseas buyers."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="bg-white rounded-xl border border-border-soft p-6">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-bg-soft text-navy mb-4">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / WHY US */}
      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Why SSourcing China"
              title="Honest sourcing, with checks at every stage"
              description="We work for the buyer, not the factory. That alignment is what makes the difference between a profitable order and a costly mistake."
              light
            />
            <ul className="mt-8 space-y-3">
              {[
                "Independent inspectors at every shipment",
                "Transparent fee structure, no factory rebates",
                "Bilingual project managers in your time zone",
                "Full document trail: contracts, test reports, BL, CO",
                "NDAs and IP protection before disclosing designs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <Quote className="w-8 h-8 text-gold mb-4" />
              <p className="text-slate-100 text-lg leading-relaxed">
                "We had a complicated kitchenware launch with three suppliers
                and tight deadlines. SSourcing China handled inspections,
                shipping, and weekly updates. We finally have a process we
                trust."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold text-navy flex items-center justify-center font-semibold">
                  M
                </div>
                <div>
                  <p className="text-white font-medium">Procurement Manager</p>
                  <p className="text-slate-300 text-sm">Mid-size retailer · United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case Studies"
            title="Real projects, measurable outcomes"
            description="A few recent examples of how we have helped overseas buyers reduce risk and stabilize supply."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASES.map((c) => (
              <article key={c.id} className="bg-white rounded-xl border border-border-soft overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-[3/2] bg-slate-100 overflow-hidden">
                  <img
                    alt={c.title}
                    data-strk-img-id={`case-${c.id}-img-4d9e`}
                    data-strk-img={`[case-${c.id}-summary] [case-${c.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs uppercase tracking-widest text-blue-action font-semibold">
                    {c.industry} · {c.region}
                  </p>
                  <h3 id={`case-${c.id}-title`} className="text-lg font-semibold text-navy mt-2 mb-2">
                    {c.title}
                  </h3>
                  <p id={`case-${c.id}-summary`} className="text-slate-600 text-sm leading-relaxed flex-1">
                    {c.summary}
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border-soft pt-4">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <p className="text-navy font-semibold">{m.value}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-blue-action font-medium hover:underline">
              Explore all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white border-y border-border-soft">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions from overseas buyers"
            align="center"
          />
          <div className="mt-12 divide-y divide-border-soft border-y border-border-soft">
            {FAQS.map((f, idx) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-base md:text-lg font-medium text-navy pr-6">
                    {f.q}
                  </h3>
                  <span className="ml-4 inline-flex items-center justify-center w-7 h-7 rounded-full border border-border-soft text-blue-action group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-slate-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className="py-16 md:py-24 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeading
              eyebrow="Start Your Inquiry"
              title="Get a free sourcing quote within one business day"
              description="Share your product, target price, and timeline. We will reply with initial supplier options and a clear plan to move forward."
            />
            <ul className="mt-6 space-y-3">
              {[
                "Reply within one business day",
                "Free initial supplier shortlist",
                "Clear, transparent fee structure",
                "Confidential — your designs stay yours",
              ].map((i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-action shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  )
}
