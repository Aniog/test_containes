import { ArrowUpRight, TrendingDown, Clock, DollarSign } from "lucide-react";

const cases = [
  {
    client: "Nordic Home Brands",
    location: "Denmark",
    industry: "Home & Garden",
    icon: TrendingDown,
    metric: "Defect rate reduced from 8% to 1.2%",
    summary:
      "A Scandinavian home goods retailer was experiencing high return rates due to inconsistent product quality from their existing supplier.",
    approach: [
      "Conducted a full factory audit revealing QC gaps and outdated equipment",
      "Identified and verified an alternative factory with ISO 9001 certification",
      "Implemented AQL 2.5 pre-shipment inspections with photo reports",
      "Redesigned packaging for better sea freight protection",
    ],
    result:
      "Within 6 months, the defect rate dropped from 8% to 1.2%, returns fell by 70%, and customer satisfaction scores improved significantly.",
  },
  {
    client: "TechGear Europe",
    location: "Germany",
    industry: "Electronics",
    icon: Clock,
    metric: "22 days saved on production lead time",
    summary:
      "A German electronics brand faced repeated delays on a seasonal product launch, threatening their Q4 revenue target.",
    approach: [
      "Placed a dedicated production follow-up team at the factory",
      "Identified material procurement bottlenecks and switched to a faster supplier",
      "Implemented weekly milestone checkpoints with photos",
      "Negotiated overtime scheduling for critical production phases",
    ],
    result:
      "The product launched 22 days ahead of the revised schedule, capturing the full holiday shopping season and exceeding sales projections by 35%.",
  },
  {
    client: "GreenField Agriculture",
    location: "Australia",
    industry: "Machinery & Industrial",
    icon: DollarSign,
    metric: "$47,000 saved via direct sourcing",
    summary:
      "An Australian agricultural equipment importer suspected their supplier was a middleman inflating prices.",
    approach: [
      "Factory audit confirmed the supplier was a trading company, not a manufacturer",
      "Traced the actual factory and conducted an independent verification",
      "Renegotiated pricing directly with the manufacturer",
      "Established a direct relationship eliminating the trading company markup",
    ],
    result:
      "The client saved $47,000 on their first order alone. Ongoing direct sourcing continues to deliver 15–20% cost reductions.",
  },
];

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Case Studies
          </p>
          <h1 className="text-white mb-4">Real Results for Real Buyers</h1>
          <p className="text-blue-100/80 max-w-2xl mx-auto text-lg">
            Detailed breakdowns of how we have helped clients reduce risk, cut
            costs, and improve quality.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
          {cases.map((c, i) => (
            <article key={c.client} className="bg-surface rounded-lg border border-slate-100 overflow-hidden">
              <div className="p-6 md:p-8 lg:p-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-secondary uppercase tracking-wider bg-secondary/10 px-2.5 py-1 rounded-full">
                        {c.industry}
                      </span>
                      <span className="text-xs text-slate-400">{c.location}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {c.client}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-slate-100 rounded-lg px-4 py-3">
                    <c.icon className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">
                      {c.metric}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {c.summary}
                </p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                    Our Approach
                  </h3>
                  <ul className="space-y-2">
                    {c.approach.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5 text-secondary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-5 border border-slate-100">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">
                    Result
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {c.result}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
