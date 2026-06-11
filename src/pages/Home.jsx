import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Globe2,
  Clock,
  FileText,
  Star,
} from "lucide-react";
import CTASection from "@/components/CTASection";

const SERVICES = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and shortlist verified manufacturers that match your specs, target price, and order volume.",
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    desc: "On-site visits, business license checks, capacity assessments, and reference checks before you place orders.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Pre-production, in-line, and pre-shipment inspections following AQL standards with photo and video reports.",
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    desc: "Weekly progress updates, sample approvals, and on-site coordination to keep your timeline on track.",
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    desc: "Consolidation, customs documentation, sea/air freight booking, and door-to-door coordination.",
  },
  {
    icon: Layers,
    title: "Private Label & Packaging",
    desc: "Logo printing, custom packaging design and sourcing, retail-ready and Amazon FBA-ready shipments.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Send your requirements",
    desc: "Share product specs, target price, quantity, and any reference samples or images. Use our quote form or email.",
  },
  {
    step: "02",
    title: "Supplier shortlist & quotes",
    desc: "We identify 3–5 vetted factories, negotiate pricing and MOQ, and present a clear comparison.",
  },
  {
    step: "03",
    title: "Samples & factory check",
    desc: "We arrange samples, conduct factory verification, and confirm the supplier can deliver to your standard.",
  },
  {
    step: "04",
    title: "Production & quality control",
    desc: "We follow production weekly and run inspections at the right stages, with photo/video reports.",
  },
  {
    step: "05",
    title: "Shipping to your door",
    desc: "We consolidate cargo, prepare documents, and coordinate sea or air freight to your destination.",
  },
];

const PRODUCTS = [
  { id: "home-kitchen", title: "Home & Kitchen", desc: "Cookware, small appliances, organization, household goods.", q: "modern kitchen cookware product factory line" },
  { id: "consumer-electronics", title: "Consumer Electronics", desc: "Accessories, chargers, audio, smart devices, IoT components.", q: "consumer electronics assembly line in china" },
  { id: "apparel-textiles", title: "Apparel & Textiles", desc: "T-shirts, uniforms, hats, bags, fabrics, knitwear.", q: "garment factory sewing apparel production" },
  { id: "promotional-gifts", title: "Promotional & Gifts", desc: "Branded merchandise, corporate gifts, custom packaging.", q: "promotional branded gifts merchandise warehouse" },
  { id: "industrial-hardware", title: "Industrial & Hardware", desc: "Tools, fittings, fasteners, OEM components, machinery parts.", q: "industrial hardware tools warehouse china" },
  { id: "beauty-personal", title: "Beauty & Personal Care", desc: "Cosmetics packaging, brushes, accessories, OEM formulations.", q: "beauty cosmetics packaging production line" },
];

const PROBLEMS = [
  {
    title: "Suppliers that overpromise and underdeliver",
    desc: "We verify factories on the ground so you know capacity, certifications, and quality history before placing an order.",
  },
  {
    title: "Quality issues only discovered after shipment",
    desc: "We run pre-production, in-line, and pre-shipment inspections so defects are caught while there is still time to fix them.",
  },
  {
    title: "Hidden costs and unclear quotes",
    desc: "We provide transparent quotes with FOB and landed-cost breakdowns, including QC, packaging, and freight.",
  },
  {
    title: "Communication gaps and time-zone delays",
    desc: "A single English-speaking project lead handles negotiation, follow-up, and reporting across factories.",
  },
  {
    title: "Logistics complexity and customs risks",
    desc: "We coordinate consolidation, documentation, and freight, and flag risks before they become delays.",
  },
  {
    title: "Trademark, IP, and compliance concerns",
    desc: "We screen for known IP issues and help you align packaging, labels, and certifications with target-market rules.",
  },
];

const TRUST_POINTS = [
  { icon: Globe2, label: "Buyers from", value: "30+ countries" },
  { icon: Factory, label: "Factory network", value: "2,000+ vetted suppliers" },
  { icon: ClipboardCheck, label: "Inspections", value: "AQL-based QC reports" },
  { icon: Clock, label: "Quote turnaround", value: "1–2 business days" },
];

const CASES = [
  {
    id: "case-eu-kitchenware",
    industry: "Home & Kitchen",
    region: "EU buyer",
    title: "Kitchenware brand cuts unit cost 18% with verified factory switch",
    summary:
      "We re-sourced a stainless cookware line, ran a full factory audit, and managed three rounds of pre-production samples before tooling.",
    metrics: [
      { k: "Unit cost", v: "−18%" },
      { k: "Defect rate", v: "<1.2%" },
      { k: "Lead time", v: "42 days" },
    ],
    q: "stainless steel cookware factory production",
  },
  {
    id: "case-us-electronics",
    industry: "Consumer Electronics",
    region: "US buyer",
    title: "Amazon FBA seller scales SKUs with weekly QC reporting",
    summary:
      "Production follow-up, in-line inspection, and FBA-ready packaging across 14 SKUs from two factories in Shenzhen.",
    metrics: [
      { k: "SKUs launched", v: "14" },
      { k: "Returns rate", v: "<2.4%" },
      { k: "On-time ship", v: "97%" },
    ],
    q: "electronics warehouse amazon fba shipping",
  },
  {
    id: "case-au-apparel",
    industry: "Apparel",
    region: "AU buyer",
    title: "Uniform supplier consolidated 4 factories into one program",
    summary:
      "We replaced four uneven suppliers with a single vetted manufacturer, then ran fabric tests and AQL pre-shipment inspections.",
    metrics: [
      { k: "Suppliers", v: "4 → 1" },
      { k: "Reorder time", v: "−35%" },
      { k: "Fabric test", v: "Pass" },
    ],
    q: "apparel garment factory inspection china",
  },
];

const FAQS = [
  {
    q: "How do you charge for your sourcing services?",
    a: "Most engagements are a fixed service fee plus a small percentage of order value, agreed upfront. For QC-only or factory-verification-only projects, we charge a flat per-visit fee. There are no hidden commissions from suppliers.",
  },
  {
    q: "Can you work with my existing suppliers?",
    a: "Yes. We frequently take over QC, production follow-up, and shipping coordination for buyers who already have a factory but need on-the-ground support.",
  },
  {
    q: "What is the minimum order value you support?",
    a: "We typically work with orders from USD 5,000 and up. For smaller test orders, we can usually still help if there is a clear path to scale.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. We routinely sign NDAs before sharing product details with factories and we limit information disclosed during sourcing to what is strictly required.",
  },
  {
    q: "How fast can I expect a sourcing quote?",
    a: "For most standard categories, you will receive an initial response within 1–2 business days, including feasibility, target factory profile, and indicative pricing.",
  },
  {
    q: "Can you handle shipping and customs?",
    a: "Yes. We coordinate consolidation, sea and air freight, customs documentation, and door-to-door delivery in partnership with established freight forwarders.",
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* HERO */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-bg-9c4f12"
          data-strk-bg="[hero-headline] [hero-subhead]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-medium text-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                China-based sourcing partner for global B2B buyers
              </p>
              <h1
                id="hero-headline"
                className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                China Sourcing Agent for Global Buyers
              </h1>
              <p
                id="hero-subhead"
                className="mt-5 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
              >
                We help importers, brands, and Amazon sellers find reliable
                suppliers in China, verify factories, run quality inspections,
                follow production, and coordinate shipping — end to end.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-3 transition-colors"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center rounded-lg border border-white/30 text-white hover:bg-white/10 font-medium px-6 py-3"
                >
                  See how it works
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {TRUST_POINTS.map(({ icon: Icon, label, value }) => (
                  <div key={label}>
                    <div className="flex items-center gap-2 text-amber-400">
                      <Icon className="w-5 h-5" />
                      <span className="text-2xl font-bold text-white">{value}</span>
                    </div>
                    <p className="text-sm text-slate-400 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  alt="Quality inspector checking products on a factory line in China"
                  data-strk-img-id="hero-img-7d22af"
                  data-strk-img="[hero-image-caption] [hero-headline]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-5">
                  <p id="hero-image-caption" className="text-sm text-slate-200 font-medium">
                    QC inspection on a household goods production line, Zhejiang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p id="services-eyebrow" className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
              Services
            </p>
            <h2 id="services-title" className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              End-to-end sourcing, verification, QC, and shipping
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Pick a single service or run a full program. Every step is
              documented in English with photos, reports, and clear handovers.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-6 md:p-7 hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-sky-50 text-sky-600">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center text-slate-900 font-semibold hover:text-amber-600"
            >
              View all services <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
              Sourcing Process
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              From requirement to delivery in 5 clear steps
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              A documented workflow. You always know which factories we are
              talking to, which milestone we are on, and what the next decision
              point is.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-5 md:grid-cols-2 gap-6">
            {PROCESS.map(({ step, title, desc }) => (
              <div
                key={step}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-amber-500 font-bold text-sm">STEP {step}</div>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
                Products We Source
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Categories we know inside out
              </h2>
              <p className="mt-4 text-slate-600 text-lg">
                Strong supplier networks across consumer goods, light industrial
                products, and OEM components. If your category is not listed,
                ask — we will tell you honestly whether we are a good fit.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center text-slate-900 font-semibold hover:text-amber-600 self-start md:self-auto"
            >
              All categories <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <article
                key={p.id}
                className="group rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    alt={p.title}
                    data-strk-img-id={`product-${p.id}-img`}
                    data-strk-img={`[product-${p.id}-desc] [product-${p.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`product-${p.id}-title`} className="text-lg font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p id={`product-${p.id}-desc`} className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                  {/* Hidden descriptive query helper for image system */}
                  <span className="hidden" id={`product-${p.id}-query`}>{p.q}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS WE SOLVE */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
              Problems We Solve
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              The risks of sourcing from China — and how we address them
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="rounded-xl border border-slate-200 bg-white p-6 md:p-7">
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-amber-50 text-amber-600 shrink-0">
                    <AlertTriangle className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{p.title}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST POINTS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
                Why Buyers Choose Us
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Practical, transparent, and on the ground in China
              </h2>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                We are a small, focused team based in Yiwu and Shenzhen. We do
                not run a marketplace and we do not earn hidden commissions
                from factories. Our incentive is to find you the right
                supplier and keep production on track.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Independent factory audits with photos, video, and signed checklists.",
                  "AQL-based QC inspections at pre-production, in-line, and pre-shipment stages.",
                  "Single English-speaking project lead per buyer — no telephone games.",
                  "Transparent quotes: factory price, sourcing fee, QC, packaging, freight.",
                  "Documented sample approval, tooling, and production sign-off process.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                alt="Container shipping at a Chinese port"
                data-strk-img-id="trust-shipping-img"
                data-strk-img="[trust-image-caption]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/85 to-transparent p-5">
                <p id="trust-image-caption" className="text-sm text-slate-100 font-medium">
                  Container loading and consolidation from Ningbo and Shenzhen ports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
                Case Studies
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Real outcomes from real buyers
              </h2>
              <p className="mt-4 text-slate-600 text-lg">
                A snapshot of recent engagements. Reference details available
                under NDA on request.
              </p>
            </div>
            <Link to="/case-studies" className="inline-flex items-center text-slate-900 font-semibold hover:text-amber-600 self-start md:self-auto">
              Read more cases <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASES.map((c) => (
              <article
                key={c.id}
                className="rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[3/2] bg-slate-100">
                  <img
                    alt={c.title}
                    data-strk-img-id={`case-${c.id}-img`}
                    data-strk-img={`[case-${c.id}-summary] [case-${c.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium">
                      {c.industry}
                    </span>
                    <span>•</span>
                    <span>{c.region}</span>
                  </div>
                  <h3 id={`case-${c.id}-title`} className="mt-3 text-lg font-semibold text-slate-900">
                    {c.title}
                  </h3>
                  <p id={`case-${c.id}-summary`} className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {c.summary}
                  </p>
                  <div className="mt-5 grid grid-cols-3 gap-3 pt-5 border-t border-slate-100">
                    {c.metrics.map((m) => (
                      <div key={m.k}>
                        <div className="text-base font-bold text-slate-900">{m.v}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{m.k}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {FAQS.map((f, i) => (
              <details
                key={i}
                className="group rounded-xl border border-slate-200 bg-white p-5 open:shadow-sm"
              >
                <summary className="flex justify-between items-start gap-4 cursor-pointer list-none">
                  <h3 className="text-base md:text-lg font-semibold text-slate-900">
                    {f.q}
                  </h3>
                  <span className="mt-1 text-slate-400 group-open:rotate-45 transition-transform text-xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-slate-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
