import SectionHeading from "@/components/shared/SectionHeading";
import StockImage from "@/components/shared/StockImage";

const cases = [
  {
    id: "case-us-retailer",
    client: "US Home Goods Retailer",
    industry: "Home & Furniture",
    result: "Reduced defect rate from 8% to under 1% within two production runs.",
    summary: "We re-sourced the supplier base, introduced pre-shipment inspections, and standardized packaging requirements.",
    imgId: "case-home-goods-6d4e2a",
  },
  {
    id: "case-eu-distributor",
    client: "European Electronics Distributor",
    industry: "Electronics",
    result: "Cut sourcing costs by 14% while improving component consistency.",
    summary: "A structured RFQ process and factory audits helped identify better-capable manufacturers.",
    imgId: "case-electronics-2b9f1c",
  },
  {
    id: "case-uk-startup",
    client: "UK Fashion Startup",
    industry: "Apparel",
    result: "Launched first collection on time with two verified manufacturers.",
    summary: "We managed sampling, negotiated MOQs, and coordinated the first bulk order from sample approval to delivery.",
    imgId: "case-apparel-7a3e8b",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case Studies"
          title="Results our clients have achieved"
          description="Real sourcing projects where our process helped buyers reduce risk, cut costs, and deliver on time."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <StockImage
                  id={item.imgId}
                  query={`[case-summary-${item.id}] [case-client-${item.id}] [case-industry-${item.id}] [case-section-title]`}
                  ratio="16x9"
                  width="600"
                  alt={item.client}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p id={`case-industry-${item.id}`} className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
                  {item.industry}
                </p>
                <h3 id={`case-client-${item.id}`} className="text-lg font-semibold text-slate-900 mb-2">
                  {item.client}
                </h3>
                <p id={`case-summary-${item.id}`} className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {item.summary}
                </p>
                <p className="text-sm font-medium text-slate-900 border-l-4 border-blue-600 pl-3">
                  {item.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
