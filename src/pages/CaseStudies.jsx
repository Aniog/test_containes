import { useStrkImages } from "@/hooks/useStrkImages";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import StockImage from "@/components/shared/StockImage";
import QuoteForm from "@/components/shared/QuoteForm";

const cases = [
  {
    id: "us-home-goods",
    client: "US Home Goods Retailer",
    industry: "Home & Furniture",
    location: "United States",
    challenge: "High defect rates and inconsistent packaging from an existing supplier network.",
    approach: "We re-sourced key product lines, conducted factory audits, and introduced pre-shipment inspections with clear acceptance criteria.",
    result: "Reduced defect rate from 8% to under 1% within two production runs.",
    imgId: "case-detail-home-6d4e2a",
  },
  {
    id: "eu-electronics",
    client: "European Electronics Distributor",
    industry: "Electronics",
    location: "Germany",
    challenge: "Rising component costs and quality inconsistency across multiple vendors.",
    approach: "A structured RFQ process, supplier benchmarking, and on-site audits identified better-capable manufacturers.",
    result: "Cut sourcing costs by 14% while improving component consistency.",
    imgId: "case-detail-electronics-2b9f1c",
  },
  {
    id: "uk-fashion",
    client: "UK Fashion Startup",
    industry: "Apparel",
    location: "United Kingdom",
    challenge: "First-time buyer needed help navigating MOQs, sampling, and production timelines.",
    approach: "We managed sampling, negotiated flexible MOQs, and oversaw the first bulk order from approval to delivery.",
    result: "Launched first collection on time with two verified manufacturers.",
    imgId: "case-detail-apparel-7a3e8b",
  },
  {
    id: "au-solar",
    client: "Australian Solar Installer",
    industry: "New Energy",
    location: "Australia",
    challenge: "Needed reliable solar panel and inverter suppliers with proper certifications.",
    approach: "We verified certifications, audited factories, and arranged third-party testing before shipment.",
    result: "Secured two certified suppliers and shipped the first container within 45 days.",
    imgId: "case-detail-solar-9e4b1d",
  },
];

export default function CaseStudies() {
  const containerRef = useStrkImages([]);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Case Studies"
        title="Real results for real buyers"
        description="See how businesses like yours have reduced risk, saved costs, and improved delivery performance."
        queryId="case-studies"
        query="[case-header-desc] [case-header-title]"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Selected client projects"
            description="Each project reflects our focus on verification, quality, and transparent communication."
          />
          <div className="space-y-16">
            {cases.map((item, index) => (
              <article
                key={item.id}
                className="grid lg:grid-cols-2 gap-10 items-center rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-lg transition-shadow"
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <StockImage
                      id={item.imgId}
                      query={`[case-result-${item.id}] [case-client-${item.id}] [case-industry-${item.id}] [case-section-title]`}
                      ratio="4x3"
                      width="800"
                      alt={item.client}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={`p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span id={`case-industry-${item.id}`} className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                      {item.industry}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      {item.location}
                    </span>
                  </div>
                  <h3 id={`case-client-${item.id}`} className="text-2xl font-bold text-slate-900 mb-4">
                    {item.client}
                  </h3>
                  <div className="space-y-4 text-slate-600">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Challenge</h4>
                      <p>{item.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Our approach</h4>
                      <p>{item.approach}</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded-lg">
                    <p id={`case-result-${item.id}`} className="text-green-800 font-semibold">
                      Result: {item.result}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
