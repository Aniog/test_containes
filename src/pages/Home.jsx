import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  PackageCheck,
  Handshake,
  FileBox,
  ArrowRight,
  Check,
  AlertTriangle,
  ChevronRight,
  ChevronDown,
  Star,
  Globe2,
  TrendingUp,
  Clock,
} from "lucide-react";
import InquiryForm from "../components/InquiryForm";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

// ---------- Data ----------

const SERVICES = [
  {
    icon: Search,
    title: "Supplier sourcing",
    desc: "We screen Chinese factories and trading companies, shortlist 3-5 vetted candidates and compare quotes side by side.",
  },
  {
    icon: ShieldCheck,
    title: "Factory verification",
    desc: "On-site visits to confirm capacity, certifications, and that the supplier is the real manufacturer — not a middleman.",
  },
  {
    icon: PackageCheck,
    title: "Sample handling",
    desc: "We collect, photograph, and ship samples to you, and document any spec deviations before mass production.",
  },
  {
    icon: Handshake,
    title: "Price negotiation",
    desc: "We negotiate unit price, MOQ, and payment terms in Mandarin, using market data to keep margins fair.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality inspection",
    desc: "AQL-based inspection during and after production. Detailed reports with photos and defect classification.",
  },
  {
    icon: Factory,
    title: "Production follow-up",
    desc: "Weekly progress reports, raw-material checks, and real-time updates so your launch dates stay on track.",
  },
  {
    icon: Ship,
    title: "Shipping & logistics",
    desc: "Door-to-door air, sea, or rail freight. Customs documents, consolidation, and delivery to your warehouse.",
  },
  {
    icon: FileBox,
    title: "Private label / OEM",
    desc: "Branded packaging, custom tooling, and OEM development with NDA and IP protection from day one.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Brief & scope",
    desc: "Share product specs, target price, MOQ, and timeline. We confirm scope and quote within one business day.",
  },
  {
    step: "02",
    title: "Supplier shortlist",
    desc: "We screen 20-50 candidates and present 3-5 vetted suppliers with quotes, lead times, and capability profiles.",
  },
  {
    step: "03",
    title: "Samples & negotiation",
    desc: "We coordinate samples, run side-by-side comparisons, and negotiate price, MOQ, and payment terms.",
  },
  {
    step: "04",
    title: "Production follow-up",
    desc: "We monitor raw materials, mid-production milestones, and labelling — with weekly written reports.",
  },
  {
    step: "05",
    title: "QC inspection",
    desc: "AQL inspection before shipment. Photo and video evidence, plus a clear pass / fail recommendation.",
  },
  {
    step: "06",
    title: "Shipping & delivery",
    desc: "Booking, customs, and door-to-door delivery. We stay engaged until the goods arrive at your warehouse.",
  },
];

const PRODUCTS = [
  {
    id: "electronics",
    title: "Consumer Electronics",
    desc: "Bluetooth audio, smart home, wearables, accessories.",
  },
  {
    id: "home-kitchen",
    title: "Home & Kitchen",
    desc: "Kitchenware, small appliances, storage, decor.",
  },
  {
    id: "apparel",
    title: "Apparel & Textiles",
    desc: "Knitwear, cut-and-sew, uniforms, home textiles.",
  },
  {
    id: "furniture",
    title: "Furniture",
    desc: "Office, residential, and contract furniture.",
  },
  {
    id: "beauty",
    title: "Beauty & Personal Care",
    desc: "Tools, accessories, packaging, private label.",
  },
  {
    id: "sports",
    title: "Sports & Outdoor",
    desc: "Fitness, camping, cycling, water sports.",
  },
  {
    id: "industrial",
    title: "Industrial & Hardware",
    desc: "Hand tools, fasteners, components, fittings.",
  },
  {
    id: "packaging",
    title: "Packaging",
    desc: "Custom boxes, bags, inserts, sustainable options.",
  },
];

const PROBLEMS = [
  {
    problem: "Suppliers go silent after the deposit",
    solution:
      "We hold deposits against milestones and have someone physically on-site whenever production stalls.",
  },
  {
    problem: "Hidden trading companies posing as factories",
    solution:
      "Every supplier is visited and verified. You see business licenses, capacity, and the real production line.",
  },
  {
    problem: "Defective shipments and reworks",
    solution:
      "AQL inspections during and pre-shipment, with clear go / no-go reports before you release the balance.",
  },
  {
    problem: "Slow, confusing communication across time zones",
    solution:
      "One English-speaking sourcing manager who replies within a business day, with weekly written updates.",
  },
  {
    problem: "Pricing without market context",
    solution:
      "We benchmark quotes against current factory-gate pricing so you know what is fair, not just cheap.",
  },
  {
    problem: "Logistics surprises and customs delays",
    solution:
      "We coordinate freight, documents, and customs end-to-end, and flag risks before they become delays.",
  },
];

const TRUST = [
  { number: "12+", label: "Years sourcing in China" },
  { number: "600+", label: "Buyers served worldwide" },
  { number: "30+", label: "Product categories covered" },
  { number: "98%", label: "On-time shipment rate" },
];

const CASES = [
  {
    id: "smart-home",
    industry: "Consumer Electronics",
    title: "Smart-home brand cuts unit cost 22% with verified factory switch",
    result: "22% lower unit cost · 4-week shorter lead time · Zero defects in first PO",
    region: "United States",
  },
  {
    id: "kitchenware",
    industry: "Home & Kitchen",
    title: "European retailer launches private-label kitchenware in 14 weeks",
    result: "12 SKUs · Custom packaging · 2 QC rounds · Full FOB Ningbo",
    region: "Germany",
  },
  {
    id: "apparel",
    industry: "Apparel",
    title: "DTC apparel brand fixes 8% defect rate after factory verification",
    result: "Defect rate from 8% to under 1% · Stable repeat orders for 18 months",
    region: "United Kingdom",
  },
];

const FAQS = [
  {
    q: "How does SSourcing China charge for sourcing services?",
    a: "We charge a transparent service fee — either a flat monthly retainer or a percentage of order value, agreed upfront. Inspection and shipping are quoted separately, with no hidden mark-up on supplier pricing.",
  },
  {
    q: "Do you only work on large orders?",
    a: "No. We help small brands and growing buyers as well. Typical engagements start from a few thousand USD per order. We can advise honestly when an order is too small to justify our fee.",
  },
  {
    q: "How do you verify that a factory is real?",
    a: "We physically visit the site, check the business license and tax records, walk the production lines, photograph machinery, and confirm worker count and certifications. You receive a written verification report.",
  },
  {
    q: "Do you sign NDAs and protect intellectual property?",
    a: "Yes. We sign NDAs with you and require suppliers to sign NNN (non-disclosure, non-use, non-circumvention) agreements before sharing product details, designs, or tooling.",
  },
  {
    q: "Can I keep working directly with my existing supplier?",
    a: "Absolutely. Many clients hire us only for QC inspections, factory audits, or shipping coordination on top of their current supplier relationship.",
  },
  {
    q: "How quickly can you start?",
    a: "After a 30-minute scoping call we typically share a written proposal within 24 hours. Active sourcing usually begins within 3-5 business days of agreement.",
  },
];

// ---------- Components ----------

const Hero = () => (
  <section className="relative overflow-hidden bg-slate-900 text-white">
    <div
      className="absolute inset-0 opacity-30"
      data-strk-bg-id="home-hero-bg-9b3f1e"
      data-strk-bg="[home-hero-title] [home-hero-eyebrow]"
      data-strk-bg-ratio="16x9"
      data-strk-bg-width="1800"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40" />

    <div className="container-x relative section-y">
      <div className="max-w-3xl">
        <div id="home-hero-eyebrow" className="eyebrow text-red-400">
          China sourcing agent
        </div>
        <h1
          id="home-hero-title"
          className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-white"
        >
          China Sourcing Agent for Global Buyers
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
          We help overseas buyers find vetted suppliers, verify factories, inspect quality,
          follow production, and coordinate shipping — clearly, on schedule, and without
          the usual surprises.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 text-base font-semibold text-white hover:bg-red-700 transition shadow-sm"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition"
          >
            See how it works
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-2xl">
          {TRUST.map((t) => (
            <div key={t.label}>
              <div className="text-2xl md:text-3xl font-semibold text-white">{t.number}</div>
              <div className="text-xs uppercase tracking-widest text-slate-400 mt-1">
                {t.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const TrustBar = () => (
  <section className="border-y border-slate-200 bg-slate-50">
    <div className="container-x py-6">
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-slate-600">
        <span className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-emerald-600" /> On-site verified factories
        </span>
        <span className="flex items-center gap-2">
          <ClipboardCheck className="h-4 w-4 text-emerald-600" /> AQL-based QC inspections
        </span>
        <span className="flex items-center gap-2">
          <Globe2 className="h-4 w-4 text-emerald-600" /> Buyers in 30+ countries
        </span>
        <span className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-emerald-600" /> 1 business day reply
        </span>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="section-y bg-white">
    <div className="container-x">
      <div className="max-w-2xl">
        <div className="eyebrow">What we do</div>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          Sourcing services that cover the full cycle
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          From supplier discovery to delivered shipment — we handle the work on the ground in
          China so your team can focus on selling.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-900 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-10">
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-red-600"
        >
          View all services
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section id="process" className="section-y bg-slate-50">
    <div className="container-x">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="eyebrow">Sourcing process</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Six clear steps, zero surprises
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Every engagement follows the same transparent workflow, with written milestones
            and reports at each stage.
          </p>
          <Link
            to="/how-it-works"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-red-600"
          >
            See full process
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="lg:col-span-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {PROCESS.map((p) => (
              <div
                key={p.step}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-semibold text-red-600">{p.step}</span>
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProductsSection = () => (
  <section id="products" className="section-y bg-white">
    <div className="container-x">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <div className="eyebrow">Products we source</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Categories we know inside out
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Twelve years of supplier networks across China's largest manufacturing clusters,
            from Shenzhen electronics to Yiwu small commodities.
          </p>
        </div>
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-red-600"
        >
          View all categories
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((p) => (
          <article
            key={p.id}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <img
                alt={p.title}
                data-strk-img-id={`product-cat-${p.id}-7a3b9d`}
                data-strk-img={`[product-cat-${p.id}-desc] [product-cat-${p.id}-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover transition group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3
                id={`product-cat-${p.id}-title`}
                className="text-base font-semibold text-slate-900"
              >
                {p.title}
              </h3>
              <p
                id={`product-cat-${p.id}-desc`}
                className="mt-1 text-sm text-slate-600"
              >
                {p.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const ProblemsSection = () => (
  <section className="section-y bg-slate-900 text-white">
    <div className="container-x">
      <div className="max-w-2xl">
        <div className="eyebrow text-red-400">Problems we solve</div>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white">
          The risks importers actually face — and how we handle them
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Sourcing in China rewards preparation. These are the issues we see most often, and
          the practical safeguards we put in place for every client.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((item) => (
          <div
            key={item.problem}
            className="rounded-xl border border-slate-800 bg-slate-800/60 p-6"
          >
            <div className="flex items-center gap-2 text-red-400">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-widest">
                Problem
              </span>
            </div>
            <h3 className="mt-2 text-base font-semibold text-white">{item.problem}</h3>

            <div className="mt-5 flex items-center gap-2 text-emerald-400">
              <Check className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-widest">
                How we solve it
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.solution}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TrustSection = () => (
  <section className="section-y bg-white">
    <div className="container-x">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="eyebrow">Why buyers choose us</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Practical, accountable, on the ground in China
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We are a small team of bilingual sourcing managers, QC inspectors, and logistics
            coordinators. No call centres, no outsourcing — your account is handled by people
            who can be at the factory the same day.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            {[
              "English-speaking sourcing manager assigned to each client",
              "On-site factory verification before any deposit is paid",
              "Written reports at every milestone, with photos and timestamps",
              "Transparent service fee — no hidden mark-ups on supplier pricing",
              "NDA / NNN agreements protect your designs and IP",
              "Twelve years working with brands, retailers, and Amazon sellers",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 flex-none text-emerald-600" />
                <span className="text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
            <div className="aspect-[4/3] bg-slate-100">
              <img
                alt="QC inspector reviewing a production line in a Chinese factory"
                data-strk-img-id="trust-qc-photo-2c8e44"
                data-strk-img="[trust-qc-caption]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1100"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="border-t border-slate-200 bg-white p-5">
              <p
                id="trust-qc-caption"
                className="text-sm text-slate-600"
              >
                On-site QC inspection during production, Shenzhen factory, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CaseStudiesSection = () => (
  <section className="section-y bg-slate-50">
    <div className="container-x">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <div className="eyebrow">Case studies</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            How we help buyers ship better products
          </h2>
        </div>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-red-600"
        >
          All case studies
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {CASES.map((c) => (
          <article
            key={c.id}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition flex flex-col"
          >
            <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
              <img
                alt={c.title}
                data-strk-img-id={`case-${c.id}-thumb-1f4a8c`}
                data-strk-img={`[case-${c.id}-title] [case-${c.id}-industry]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div
                id={`case-${c.id}-industry`}
                className="text-xs font-semibold uppercase tracking-widest text-red-600"
              >
                {c.industry}
              </div>
              <h3
                id={`case-${c.id}-title`}
                className="mt-2 text-lg font-semibold text-slate-900"
              >
                {c.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 flex-1">{c.result}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Globe2 className="h-3.5 w-3.5" /> {c.region}
                </span>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-red-600"
                >
                  Read <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Testimonial = () => (
  <section className="section-y bg-white">
    <div className="container-x">
      <div className="rounded-2xl bg-slate-900 px-8 py-12 md:px-14 md:py-16 text-white">
        <div className="flex items-center gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <blockquote className="mt-5 text-xl md:text-2xl leading-snug font-medium text-white max-w-4xl">
          "We tried two other agents before SSourcing. The difference is simple — they
          actually go to the factory, send written reports, and tell us when something is
          wrong. Three product lines later, we have not had a single major QC issue."
        </blockquote>
        <div className="mt-6 text-sm text-slate-300">
          <span className="font-semibold text-white">Marc Lefevre</span> · Head of Supply,
          Northwind Home Goods · France
        </div>
      </div>
    </div>
  </section>
);

const FAQItem = ({ q, a, defaultOpen = false }) => {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className="border-b border-slate-200 py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <span className="text-base md:text-lg font-semibold text-slate-900">{q}</span>
        <ChevronDown
          className={`mt-1 h-5 w-5 flex-none text-slate-500 transition ${
            open ? "rotate-180 text-slate-900" : ""
          }`}
        />
      </button>
      {open && (
        <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-600">{a}</p>
      )}
    </div>
  );
};

const FAQSection = () => (
  <section className="section-y bg-slate-50">
    <div className="container-x">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="eyebrow">FAQ</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-slate-600">
            Don't see your question? Send it through the inquiry form below — we usually reply
            within one business day.
          </p>
        </div>
        <div className="lg:col-span-8">
          {FAQS.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const InquirySection = () => (
  <section id="inquiry" className="section-y bg-white">
    <div className="container-x">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <div className="eyebrow">Get in touch</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Get a free sourcing quote
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tell us what you need to source. A sourcing manager will reply within one business
            day with a clear scope, fee, and proposed timeline.
          </p>

          <ul className="mt-7 space-y-3 text-slate-700">
            {[
              "Free initial 30-minute scoping call",
              "Written proposal within 24 hours",
              "No obligation, no auto-billing",
              "NDA available on request",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm md:text-base">
                <Check className="mt-0.5 h-5 w-5 flex-none text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center gap-2 text-slate-700">
              <TrendingUp className="h-4 w-4 text-slate-500" />
              <span className="text-sm font-semibold">What you'll receive</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              A short PDF with our recommended approach, indicative supplier types, expected
              MOQ ranges, and a fee proposal. No spam, no boilerplate.
            </p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <InquiryForm />
        </div>
      </div>
    </div>
  </section>
);

// ---------- Page ----------

const Home = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <Testimonial />
      <FAQSection />
      <InquirySection />
    </div>
  );
};

export default Home;
