import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2, Quote } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/sections/PageHero.jsx"
import CTASection from "@/components/sections/CTASection.jsx"

const STUDIES = [
  {
    industry: "Consumer electronics",
    region: "USA",
    title: "Cut supplier lead time by 32% for a wireless audio brand",
    summary:
      "Replaced a single trading company with two pre-vetted factories, introduced a weekly production report, and moved QC from after-shipment to inline.",
    context:
      "An LA-based wireless audio brand was relying on a single Shenzhen trading company for two years. They were seeing long lead times, inconsistent quality, and limited visibility into actual production.",
    actions: [
      "Mapped 6 candidate factories in Shenzhen and Dongguan with export history in audio",
      "Audited 2 finalists on-site, including a BQB and battery compliance check",
      "Moved the QC plan from end-of-line PSI to DUPRO at 30% and 70% completion",
      "Set up a shared production calendar with weekly photo and video updates",
    ],
    results: [
      ["Lead time", "52 days → 35 days"],
      ["Defect rate", "4.2% → 0.8%"],
      ["First-year savings", "USD 180,000"],
      ["On-time delivery", "82% → 97%"],
    ],
    image: {
      id: "case-electronics-9a2b7c",
      query: "[case-electronics-title] [case-electronics-industry] China electronics factory audio",
      ratio: "16x9",
      width: 1200,
    },
    imageTextId: "case-electronics-title",
    industryId: "case-electronics-industry",
  },
  {
    industry: "Beauty & personal care",
    region: "EU",
    title:
      "Helped a skincare startup pass EU compliance on the first attempt",
    summary:
      "Audited three GMP factories, coordinated CPNP and REACH documentation, and ran DPI + PSI on the first production batch.",
    context:
      "A Berlin-based skincare startup was launching its first serum line. They needed EU-compliant manufacturing, a fast launch timeline, and a partner who could speak both English and Mandarin.",
    actions: [
      "Audited 3 GMP-certified factories in Guangzhou with ISO 22716 evidence",
      "Coordinated CPSR, CPNP notification, and REACH documentation",
      "Ran a DPI on the first 200-unit pilot batch",
      "Coordinated air freight from Guangzhou to Amsterdam with all export docs",
    ],
    results: [
      ["3 GMP factories", "Shortlisted and audited"],
      ["100% CPSR pass", "On the first submission"],
      ["28 days door-to-door", "Guangzhou → Amsterdam"],
      ["0 chargebacks", "Across the first 6 months"],
    ],
    image: {
      id: "case-beauty-7f3a1d",
      query: "[case-beauty-title] [case-beauty-industry] China beauty skincare factory GMP",
      ratio: "16x9",
      width: 1200,
    },
    imageTextId: "case-beauty-title",
    industryId: "case-beauty-industry",
  },
  {
    industry: "Home & kitchen",
    region: "Australia",
    title: "Scaled a kitchenware brand from 1 SKU to 14 SKUs in 9 months",
    summary:
      "Set up a full-package program with one anchor factory, dedicated project manager, and a shared production calendar across SKUs.",
    context:
      "A Sydney-based kitchenware brand had one hero product and a strong DTC channel. They wanted to expand into a full range without building an internal China team.",
    actions: [
      "Selected one anchor factory in Yongkang with capacity for 14 SKUs",
      "Built a shared production calendar across SKUs to optimize MOQs",
      "Set up private label packaging, barcodes, and Amazon FBA prep",
      "Coordinated monthly sea freight from Ningbo to Sydney with a fixed forwarder",
    ],
    results: [
      ["14 SKUs", "Launched in 9 months"],
      ["1 anchor factory", "Consolidated supply base"],
      ["On-time delivery", "96% across 12 months"],
      ["Gross margin", "+8 pts vs. previous sourcing"],
    ],
    image: {
      id: "case-homegoods-4c1e8b",
      query: "[case-homegoods-title] [case-homegoods-industry] China kitchenware cookware factory",
      ratio: "16x9",
      width: 1200,
    },
    imageTextId: "case-homegoods-title",
    industryId: "case-homegoods-industry",
  },
  {
    industry: "Industrial parts",
    region: "Canada",
    title: "Reduced PPAP rejections from 23% to under 3% for a CNC parts buyer",
    summary:
      "Reviewed drawings, audited three machine shops, and introduced first-article inspections on every new part before mass production.",
    context:
      "A Toronto-based industrial buyer was losing time and money on first-article rejections. Drawings were being sent to factories without proper DFM review, and tolerances were not being checked until parts landed in Canada.",
    actions: [
      "Reviewed 14 active drawings and gave DFM feedback to the buyer and factory",
      "Audited 3 machine shops with CNC, CMM, and material traceability",
      "Set up a first-article inspection on every new part with full PPAP documentation",
      "Negotiated master service agreement with the chosen shop for ongoing volume",
    ],
    results: [
      ["PPAP rejection rate", "23% → 2.8%"],
      ["Engineering hours saved", "~12 hours per part"],
      ["Average cost reduction", "9% on the same tolerances"],
      ["On-time delivery", "84% → 98%"],
    ],
    image: {
      id: "case-cnc-2f8e3a",
      query: "[case-cnc-title] [case-cnc-industry] China CNC machining parts factory",
      ratio: "16x9",
      width: 1200,
    },
    imageTextId: "case-cnc-title",
    industryId: "case-cnc-industry",
  },
]

const QUOTES = [
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

export default function CaseStudies() {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Case studies"
        title="How we work, told through real projects"
        subtitle="Each case study is a sanitized version of a real engagement: the problem the buyer came in with, what we did, and the measurable outcome. No fabricated numbers."
        bullets={["Sanitized for confidentiality", "Measurable outcomes", "Across multiple industries"]}
      />

      <section className="section bg-white">
        <div className="container-wide space-y-16">
          {STUDIES.map((study, i) => (
            <article
              key={study.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="grid gap-0 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <img
                    alt={study.title}
                    data-strk-img-id={study.image.id}
                    data-strk-img={`[${study.imageTextId}] [${study.industryId}] China sourcing agent case study`}
                    data-strk-img-ratio={study.image.ratio}
                    data-strk-img-width={study.image.width}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-64 w-full object-cover lg:h-full"
                  />
                </div>
                <div className="p-6 md:p-8 lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="pill-accent">{study.industry}</span>
                    <span className="pill-neutral">{study.region}</span>
                    <span className="pill-neutral">Case {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h2
                    id={study.imageTextId}
                    className="mt-3 text-xl md:text-2xl font-semibold text-slate-900"
                  >
                    {study.title}
                  </h2>
                  <p id={study.industryId} className="sr-only">{study.industry}</p>
                  <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
                    {study.summary}
                  </p>
                  <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-700">
                      Context
                    </p>
                    <p className="mt-2 text-sm text-slate-700">{study.context}</p>
                  </div>
                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-700">
                        What we did
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-700">
                        {study.actions.map((a) => (
                          <li key={a} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-700">
                        Results
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-700">
                        {study.results.map(([label, value]) => (
                          <li
                            key={label}
                            className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2"
                          >
                            <span className="text-slate-600">{label}</span>
                            <span className="font-semibold text-slate-900">{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">What buyers say</p>
            <h2 className="h2 mt-3">A few words from the people we work with</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {QUOTES.map((q, i) => (
              <figure key={i} className="card flex h-full flex-col">
                <Quote className="h-7 w-7 text-navy-300" />
                <blockquote className="mt-4 flex-1 text-base text-slate-700 leading-relaxed">
                  "{q.quote}"
                </blockquote>
                <figcaption className="mt-4 border-t border-slate-200 pt-4 text-sm">
                  <p className="font-semibold text-slate-900">{q.name}</p>
                  <p className="text-slate-500">{q.company}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Want a reference for your industry?</p>
            <h2 className="h2 mt-3">Ask for a buyer reference in your category</h2>
            <p className="lead mt-4">
              For qualified buyers, we can introduce you (with their permission) to a
              past or current client in your product category and your target market.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="btn-primary">
                Request a reference <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
