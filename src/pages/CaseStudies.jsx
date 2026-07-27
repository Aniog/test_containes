import { Building2, PackageCheck, TrendingUp, ShieldCheck, Clock, DollarSign } from "lucide-react";

const cases = [
  {
    client: "European Home Goods Retailer",
    location: "Germany",
    industry: "Home & Furniture",
    icon: PackageCheck,
    challenge:
      "A Germany-based online retailer was experiencing a 12% defect rate on furniture orders from China, leading to high return costs and negative reviews.",
    solution:
      "We conducted a full factory audit, identified root causes in the finishing and packaging stages, and switched the client to a verified manufacturer with better QC processes. We implemented inline inspections at three production milestones.",
    result:
      "Defect rate dropped from 12% to under 2% within two production cycles. Returns fell by 80%, and customer satisfaction scores improved significantly.",
    metrics: [
      { label: "Defect rate reduction", value: "83%" },
      { label: "Return cost savings", value: "€28,000/yr" },
    ],
  },
  {
    client: "US Electronics Startup",
    location: "United States",
    industry: "Electronics",
    icon: TrendingUp,
    challenge:
      "A California startup needed to manufacture a custom IoT device but was quoted high prices by trading companies with long lead times.",
    solution:
      "We sourced directly from a PCB assembly factory and a plastic injection molding partner, bypassing trading companies. We negotiated better payment terms and managed the sample iteration process.",
    result:
      "Saved $45,000 on the first order (18% BOM cost reduction). Delivery time improved from 90 days to 55 days.",
    metrics: [
      { label: "Cost savings", value: "$45,000" },
      { label: "Lead time improvement", value: "39%" },
    ],
  },
  {
    client: "Australian Packaging Brand",
    location: "Australia",
    industry: "Packaging",
    icon: Building2,
    challenge:
      "An Australian brand struggled with inconsistent delivery times from multiple packaging suppliers, causing stockouts during peak seasons.",
    solution:
      "We consolidated suppliers to two verified factories, established a production follow-up schedule with weekly milestone checks, and coordinated freight consolidation.",
    result:
      "Six consecutive on-time deliveries. The brand eliminated stockouts during their Q4 peak and reduced logistics overhead by 15%.",
    metrics: [
      { label: "On-time delivery", value: "6/6 orders" },
      { label: "Logistics savings", value: "15%" },
    ],
  },
  {
    client: "UK Beauty Brand",
    location: "United Kingdom",
    industry: "Beauty & Personal Care",
    icon: ShieldCheck,
    challenge:
      "A UK skincare brand needed EU-compliant packaging and was unsure which Chinese factories could meet REACH and cosmetic regulation standards.",
    solution:
      "We identified factories with existing EU export experience, verified their testing certificates, and arranged third-party lab testing for materials before mass production.",
    result:
      "100% compliance on first shipment. The brand launched on time and passed all EU customs checks without delays.",
    metrics: [
      { label: "Compliance rate", value: "100%" },
      { label: "Customs clearance", value: "0 delays" },
    ],
  },
  {
    client: "Canadian Automotive Distributor",
    location: "Canada",
    industry: "Automotive Parts",
    icon: Clock,
    challenge:
      "A Canadian distributor needed to switch suppliers quickly after their previous factory shut down unexpectedly, risking a stockout.",
    solution:
      "We mobilized our team for an urgent supplier search, completed factory verification in 4 days, and arranged air freight for the first batch while sea freight was set up for reorders.",
    result:
      "New supplier onboarded in 10 days. The distributor avoided stockout and maintained relationships with their retail clients.",
    metrics: [
      { label: "Supplier onboarding", value: "10 days" },
      { label: "Stockout avoided", value: "Yes" },
    ],
  },
  {
    client: "Dutch Toy Importer",
    location: "Netherlands",
    industry: "Toys & Gifts",
    icon: DollarSign,
    challenge:
      "A Dutch importer was overpaying for toys through a middleman and wanted direct factory relationships with better margins.",
    solution:
      "We identified three ICTI-certified toy factories, conducted audits, and managed the transition from the old supplier. We also handled CE testing and labeling compliance.",
    result:
      "Unit cost reduced by 22%. The client now works directly with two factories and has reordered four times with consistent quality.",
    metrics: [
      { label: "Unit cost reduction", value: "22%" },
      { label: "Successful reorders", value: "4+" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Case Studies
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Real sourcing projects we have completed for buyers around the
              world. Results you can verify.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {cases.map((c, i) => (
            <div
              key={c.client}
              className="rounded-xl border border-slate-200 bg-white overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <c.icon className="w-6 h-6 text-brand-800" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-800 mb-1">
                        {c.industry} · {c.location}
                      </p>
                      <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                        {c.client}
                      </h2>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {c.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-lg bg-green-50 border border-green-100 px-4 py-2 text-center"
                      >
                        <p className="text-lg font-bold text-green-700">
                          {m.value}
                        </p>
                        <p className="text-xs text-green-600">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">
                      Challenge
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {c.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">
                      Solution
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {c.solution}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">
                      Result
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {c.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
