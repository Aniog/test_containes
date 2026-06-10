import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight } from "lucide-react"

const CASES = [
  {
    id: "kitchenware",
    industry: "Home & Kitchen",
    region: "United States",
    title: "Reliable kitchenware supplier replacement in 6 weeks",
    challenge: "A US Amazon seller had two failed shipments from a previous factory: inconsistent finishing and late deliveries during peak season.",
    approach: "We sourced three audited kitchenware factories, ran samples in parallel, and selected one with stronger QC and packaging controls. We then ran weekly production tracking and pre-shipment inspections.",
    outcome: "Stable supply with a defect rate below 1%, faster lead times, and a small unit cost reduction through better tooling utilization.",
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
    challenge: "A German retailer needed a custom outdoor furniture line built across three factories in Guangdong and Zhejiang, with strict packaging requirements for retail.",
    approach: "We coordinated production schedules across all three factories, ran DUPRO inspections, and managed packaging samples and labeling for retail-ready cartons.",
    outcome: "Forty-two containers shipped on schedule with zero claims, and the customer reordered for the following season.",
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
    challenge: "A UK direct-to-consumer brand needed an audio accessory line with CE and FCC compliance, and a factory that could handle EVT and PVT cycles.",
    approach: "We selected a factory with in-house tooling, supported two engineering iterations, and managed pre-shipment compliance testing before shipping to UK fulfillment.",
    outcome: "First production order shipped five weeks after factory selection, with full compliance and four reorders within twelve months.",
    metrics: [
      { label: "Time to first PO", value: "5 weeks" },
      { label: "Test pass rate", value: "100%" },
      { label: "Reorders", value: "4" },
    ],
  },
  {
    id: "apparel",
    industry: "Apparel",
    region: "Australia",
    title: "Low-MOQ apparel sourcing for an emerging brand",
    challenge: "An Australian apparel startup needed a supplier willing to start at 300 units per style with consistent fabric quality.",
    approach: "We identified two small-batch factories near Hangzhou, ran fabric tests, and managed sample iterations through several rounds.",
    outcome: "Brand launched on time with stable supply, and now produces over 3,000 units per drop from the same factory.",
    metrics: [
      { label: "Initial MOQ", value: "300" },
      { label: "Sample rounds", value: "3" },
      { label: "Reorder volume", value: "10×" },
    ],
  },
  {
    id: "promotional",
    industry: "Promotional Goods",
    region: "Canada",
    title: "Branded gift sets for a corporate client",
    challenge: "A Canadian agency needed branded executive gift sets across multiple SKUs, packed and labeled for direct distribution.",
    approach: "We consolidated five suppliers into one shipment, managed printing and engraving QC, and arranged DDP delivery to Toronto.",
    outcome: "All units delivered on schedule, fully branded and gift-packed, ready for client distribution without rework.",
    metrics: [
      { label: "Suppliers", value: "5" },
      { label: "SKUs", value: "12" },
      { label: "On-time", value: "Yes" },
    ],
  },
  {
    id: "industrial",
    industry: "Industrial Hardware",
    region: "Mexico",
    title: "OEM metal components with strict tolerances",
    challenge: "A Mexican equipment manufacturer needed CNC-machined components with tight tolerances and full traceability.",
    approach: "We audited two CNC workshops, qualified one based on first-article inspection results, and implemented in-process measurement reports.",
    outcome: "Stable supply for a critical assembly line, with full inspection records and zero rejections for two consecutive years.",
    metrics: [
      { label: "Tolerance", value: "±0.02 mm" },
      { label: "Rejections", value: "0" },
      { label: "Years supplied", value: "2" },
    ],
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm uppercase tracking-widest font-semibold text-gold mb-3">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Real projects, measurable outcomes
          </h1>
          <p className="mt-5 text-lg text-slate-200 max-w-3xl">
            Practical examples of how we have helped overseas buyers reduce
            risk, stabilize supply, and ship on time.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
          {CASES.map((c) => (
            <article key={c.id} className="bg-white rounded-xl border border-border-soft overflow-hidden shadow-sm">
              <div className="grid lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 bg-slate-100 aspect-[3/2] lg:aspect-auto">
                  <img
                    alt={c.title}
                    data-strk-img-id={`csp-${c.id}-img-3a72`}
                    data-strk-img={`[csp-${c.id}-summary] [csp-${c.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-3 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-widest text-blue-action font-semibold">
                    {c.industry} · {c.region}
                  </p>
                  <h2 id={`csp-${c.id}-title`} className="text-xl md:text-2xl font-semibold text-navy mt-2">
                    {c.title}
                  </h2>
                  <div id={`csp-${c.id}-summary`} className="mt-4 grid gap-3 text-sm text-slate-700">
                    <p><span className="font-semibold text-navy">Challenge:</span> {c.challenge}</p>
                    <p><span className="font-semibold text-navy">Approach:</span> {c.approach}</p>
                    <p><span className="font-semibold text-navy">Outcome:</span> {c.outcome}</p>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border-soft pt-4">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <p className="text-navy font-semibold text-lg">{m.value}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg-soft border-t border-border-soft">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy">
            Could your project be next?
          </h2>
          <p className="mt-4 text-slate-600">
            Send your sourcing brief. We will be honest about whether we can help and how.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-gold hover:bg-gold-deep text-navy px-7 py-3.5 rounded-md font-semibold"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
