import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Package,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Languages,
  Eye,
  Handshake,
  Quote,
} from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";
import SectionHeader from "../components/site/SectionHeader";
import CtaBanner from "../components/site/CtaBanner";
import InquiryForm from "../components/site/InquiryForm";

const services = [
  {
    icon: Search,
    title: "Supplier sourcing",
    desc: "We identify factories that match your specs, quantity and target price, not just trading companies.",
    id: "svc-supplier-sourcing",
  },
  {
    icon: ShieldCheck,
    title: "Supplier verification",
    desc: "Business license checks, on-site factory audits, capacity reviews and reference calls.",
    id: "svc-supplier-verification",
  },
  {
    icon: Handshake,
    title: "Negotiation & samples",
    desc: "Price, MOQ and terms negotiation in Mandarin, plus sample coordination and review.",
    id: "svc-negotiation",
  },
  {
    icon: Factory,
    title: "Production follow-up",
    desc: "Weekly production updates, milestone tracking, and risk flagging before they become delays.",
    id: "svc-production",
  },
  {
    icon: ClipboardCheck,
    title: "Quality inspection (QC)",
    desc: "Pre-production, during-production and pre-shipment inspections with photo and video reports.",
    id: "svc-qc",
  },
  {
    icon: Ship,
    title: "Shipping & logistics",
    desc: "Consolidation, customs documents, sea or air freight, door-to-door delivery worldwide.",
    id: "svc-shipping",
  },
];

const processSteps = [
  {
    n: "01",
    title: "Brief & sourcing plan",
    desc: "You share specs, target price and quantity. We send back a sourcing plan and timeline.",
  },
  {
    n: "02",
    title: "Supplier shortlist",
    desc: "We screen factories, verify them, request quotations and shortlist the best 2–3 options.",
  },
  {
    n: "03",
    title: "Samples & approval",
    desc: "We coordinate samples, photo/video reviews and refinements until you approve.",
  },
  {
    n: "04",
    title: "Production & QC",
    desc: "We follow production weekly and run QC inspections at the agreed milestones.",
  },
  {
    n: "05",
    title: "Shipping & delivery",
    desc: "We consolidate, book freight, handle export documents and deliver to your door.",
  },
];

const productCategories = [
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    desc: "Accessories, smart home, audio, wearables. CE/FCC/RoHS support.",
    imgId: "home-cat-electronics-3f1a8c",
  },
  {
    id: "home-kitchen",
    title: "Home & Kitchen",
    desc: "Cookware, small appliances, organization, decor.",
    imgId: "home-cat-kitchen-7d2b91",
  },
  {
    id: "apparel-textile",
    title: "Apparel & Textile",
    desc: "Knitwear, sportswear, bags, custom labels and packaging.",
    imgId: "home-cat-apparel-5c9e44",
  },
  {
    id: "promotional-gifts",
    title: "Promotional Gifts",
    desc: "Branded merchandise, corporate gifting, custom packaging.",
    imgId: "home-cat-gifts-2a7f63",
  },
  {
    id: "industrial-hardware",
    title: "Industrial Hardware",
    desc: "Tools, fittings, fasteners, plastic and metal components.",
    imgId: "home-cat-hardware-8e1d27",
  },
  {
    id: "outdoor-sports",
    title: "Outdoor & Sports",
    desc: "Camping, fitness, cycling and lifestyle accessories.",
    imgId: "home-cat-outdoor-9b3c14",
  },
];

const problems = [
  {
    icon: AlertTriangle,
    title: "Trading companies posing as factories",
    desc: "We verify legal entities, factory addresses and production lines on the ground.",
  },
  {
    icon: Languages,
    title: "Language and time-zone friction",
    desc: "Daily communication in Mandarin and English, summarized clearly for your team.",
  },
  {
    icon: TrendingUp,
    title: "Hidden costs and unclear pricing",
    desc: "We benchmark prices, break down EXW, FOB and CIF, and flag unusual charges.",
  },
  {
    icon: Eye,
    title: "No visibility on production",
    desc: "Weekly photo updates from the factory floor, plus inspection reports at each milestone.",
  },
];

const trustPoints = [
  { value: "12+", label: "Years in China sourcing" },
  { value: "350+", label: "Buyers served worldwide" },
  { value: "30+", label: "Industries covered" },
  { value: "98%", label: "On-time shipment rate" },
];

const cases = [
  {
    id: "smart-home-startup",
    title: "Smart home startup, Germany",
    desc: "Sourced ODM smart plugs, ran CE/FCC compliance and consolidated weekly air shipments.",
    metric: "Lead time cut from 70 to 42 days",
    imgId: "home-case-smart-1c8d52",
  },
  {
    id: "kitchenware-brand",
    title: "Kitchenware brand, USA",
    desc: "Verified 2 factories, switched supplier after a failed audit, recovered launch timeline.",
    metric: "Defect rate dropped from 4.1% to 0.6%",
    imgId: "home-case-kitchen-6f3a18",
  },
  {
    id: "outdoor-importer",
    title: "Outdoor importer, Australia",
    desc: "Consolidated 14 SKUs from 5 suppliers into 2 sea containers, full QC at port.",
    metric: "Shipping cost down 22%",
    imgId: "home-case-outdoor-4b2e9a",
  },
];

const faqs = [
  {
    q: "How do you charge for sourcing?",
    a: "Most projects use a flat service fee or a percentage of the order value, agreed before we start. Quality inspections and shipping are quoted separately and transparently.",
  },
  {
    q: "Do you only work with factories you already know?",
    a: "No. We treat each project independently and source the best-fit factory for your specs and target price, including running fresh audits when needed.",
  },
  {
    q: "Can you handle small orders or startups?",
    a: "Yes. We work with growing brands and first-time importers, and we'll tell you honestly when an order is below a factory's MOQ.",
  },
  {
    q: "What inspections do you offer?",
    a: "Initial production check (IPC), during production check (DUPRO), pre-shipment inspection (PSI), and container loading checks. You receive photo and video reports.",
  },
  {
    q: "Where in China are you based?",
    a: "Our team is based in Yiwu and Shenzhen, with partner inspectors covering Guangdong, Zhejiang, Jiangsu, Fujian and Shandong.",
  },
  {
    q: "Can you ship door-to-door?",
    a: "Yes. We coordinate sea, air and rail freight, customs documents and last-mile delivery to most countries.",
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
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="home-hero-bg-9e7d11"
          data-strk-bg="[home-hero-title] modern container shipping port china dawn"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-800/85 to-brand-700/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-400 mb-4">
                China sourcing agent · Based in Yiwu & Shenzhen
              </p>
              <h1
                id="home-hero-title"
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
              >
                China Sourcing Agent for Global Buyers
              </h1>
              <p
                id="home-hero-subtitle"
                className="mt-6 text-lg md:text-xl text-brand-100/90 max-w-2xl leading-relaxed"
              >
                We help overseas buyers find reliable suppliers, verify
                factories, inspect quality, follow production and coordinate
                shipping — so you can buy from China with clarity and control.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3.5 transition"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 hover:border-white/50 text-white font-semibold px-6 py-3.5 transition"
                >
                  See how it works
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-brand-100/80">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-400" />
                  On-the-ground factory audits
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-400" />
                  English-speaking project managers
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-400" />
                  Transparent fees
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  alt="Quality inspector checking products in a Chinese factory"
                  className="block w-full h-auto"
                  data-strk-img-id="home-hero-img-7c3a91"
                  data-strk-img="[home-hero-subtitle] [home-hero-title] quality inspector checklist chinese factory floor"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STAT BAR */}
      <section className="bg-surface-50 border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((t) => (
              <div key={t.label} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-brand-800 tracking-tight">
                  {t.value}
                </div>
                <div className="mt-1 text-sm text-ink-700">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What we do"
            title="End-to-end sourcing, run by people on the ground"
            description="From the first supplier search to the last container leaving port — one team, one project manager, one point of contact."
            titleId="home-services-title"
            descId="home-services-desc"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  className="rounded-xl border border-line bg-white p-6 hover:shadow-card transition"
                >
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-brand-50 text-brand-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-brand-800">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-ink-700 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-800 font-semibold"
            >
              See all services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SOURCING PROCESS */}
      <section className="bg-surface-50 py-16 md:py-24 border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Sourcing process"
            title="A clear five-step process, from brief to delivery"
            description="No black box. You always know what is happening, what is next and what it will cost."
            titleId="home-process-title"
            descId="home-process-desc"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {processSteps.map((step) => (
              <div
                key={step.n}
                className="relative rounded-xl bg-white border border-line p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-accent-500">
                  Step {step.n}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-brand-800">
                  {step.title}
                </h3>
                <p className="mt-2 text-ink-700 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS WE SOURCE */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader
              eyebrow="Products we source"
              title="Categories where our team has deep factory networks"
              description="If your product isn't listed, talk to us — chances are we've sourced something similar."
              titleId="home-products-title"
              descId="home-products-desc"
            />
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-800 font-semibold whitespace-nowrap"
            >
              View all categories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {productCategories.map((p) => (
              <article
                key={p.id}
                className="group rounded-xl overflow-hidden border border-line bg-white hover:shadow-card transition"
              >
                <div className="aspect-[3/2] overflow-hidden bg-surface-100">
                  <img
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[home-product-${p.id}-desc] [home-product-${p.id}-title] [home-products-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-5">
                  <h3
                    id={`home-product-${p.id}-title`}
                    className="text-lg font-semibold text-brand-800"
                  >
                    {p.title}
                  </h3>
                  <p
                    id={`home-product-${p.id}-desc`}
                    className="mt-1.5 text-sm text-ink-700 leading-relaxed"
                  >
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS WE SOLVE */}
      <section className="bg-brand-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-400 mb-3">
              Problems we solve
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Common pitfalls when buying from China — and how we prevent them
            </h2>
            <p className="mt-4 text-brand-100/90 text-base md:text-lg leading-relaxed">
              Most issues happen before production starts. We catch them early
              with verification, clear specs and disciplined follow-up.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {problems.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-accent-500/15 text-accent-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-brand-100/85 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST POINTS */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why buyers choose us"
            title="Practical, transparent and accountable"
            description="We're a small senior team — not a marketplace. You work with the same project manager from inquiry to delivery."
            titleId="home-trust-title"
            descId="home-trust-desc"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: ShieldCheck,
                title: "Independent of suppliers",
                desc: "We do not take kickbacks from factories. Our income is what you pay us.",
              },
              {
                icon: Eye,
                title: "Eyes on the factory floor",
                desc: "Weekly photo updates and on-site visits, not just emails forwarded from suppliers.",
              },
              {
                icon: Package,
                title: "One contract, one team",
                desc: "Sourcing, QC and shipping coordinated under one project manager and one quote.",
              },
            ].map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.title}
                  className="rounded-xl border border-line bg-white p-6"
                >
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-brand-50 text-brand-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-brand-800">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-ink-700 text-sm leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-surface-50 py-16 md:py-24 border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader
              eyebrow="Case studies"
              title="Recent projects, real outcomes"
              description="Anonymized where required, but real timelines, real numbers and real lessons."
              titleId="home-cases-title"
              descId="home-cases-desc"
            />
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-800 font-semibold whitespace-nowrap"
            >
              All case studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {cases.map((c) => (
              <article
                key={c.id}
                className="rounded-xl overflow-hidden border border-line bg-white hover:shadow-card transition"
              >
                <div className="aspect-[3/2] overflow-hidden bg-surface-100">
                  <img
                    alt={c.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[home-case-${c.id}-desc] [home-case-${c.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <h3
                    id={`home-case-${c.id}-title`}
                    className="text-lg font-semibold text-brand-800"
                  >
                    {c.title}
                  </h3>
                  <p
                    id={`home-case-${c.id}-desc`}
                    className="mt-2 text-sm text-ink-700 leading-relaxed"
                  >
                    {c.desc}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-600">
                    <TrendingUp className="w-4 h-4" />
                    {c.metric}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-10 h-10 text-accent-500 mx-auto" />
          <p className="mt-6 text-xl md:text-2xl text-brand-800 leading-relaxed font-medium">
            "They acted like an extension of our team. We finally had clear
            answers from the factory floor — not a sales pitch from a trading
            company."
          </p>
          <p className="mt-6 text-sm text-ink-700">
            <span className="font-semibold text-brand-800">
              Procurement Lead
            </span>
            , consumer electronics brand, Berlin
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-50 py-16 md:py-24 border-y border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions from buyers"
            align="center"
          />
          <div className="mt-12 divide-y divide-line rounded-xl border border-line bg-white">
            {faqs.map((f, i) => (
              <details key={i} className="group p-6 open:bg-white">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <span className="text-base md:text-lg font-semibold text-brand-800">
                    {f.q}
                  </span>
                  <span className="mt-1 text-brand-500 group-open:rotate-45 transition-transform">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 5v14m-7-7h14"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-ink-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-500 mb-3">
              Start a project
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-800">
              Tell us what you want to source
            </h2>
            <p className="mt-4 text-ink-700 leading-relaxed">
              Share your specs and we'll come back with a sourcing plan,
              shortlist of factories and indicative pricing — usually within one
              business day.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "No obligation — quote first, decide later",
                "NDA available on request",
                "English communication, Mandarin negotiation",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-ink-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <InquiryForm compact />
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
