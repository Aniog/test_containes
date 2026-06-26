import PageLayout from "../components/layout/PageLayout.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import CtaSection from "../components/layout/CtaSection.jsx";
import { MapPin, Briefcase, Calendar, BarChart3 } from "lucide-react";

const cases = [
  {
    id: "case-1",
    client: "European Outdoor Retailer",
    industry: "Sporting Goods",
    location: "Germany",
    year: "2024",
    challenge:
      "A mid-sized outdoor retailer in Germany was struggling with a supplier in Zhejiang that delivered tents with inconsistent seam sealing and fabric quality. Delays stretched to 6 weeks, and the defect rate reached 8%, resulting in customer returns and damaged brand reputation.",
    approach: [
      "Conducted root-cause analysis with the existing factory",
      "Audited 4 alternative tent manufacturers in Zhejiang and Jiangsu",
      "Evaluated seam-taping equipment, waterproof testing labs, and raw material traceability",
      "Negotiated stricter QC checkpoints and penalty clauses",
    ],
    result:
      "Switched to a new verified factory with modern seam-taping lines. Defect rate dropped to under 1%. Delivery reliability improved to 98% on-time. The client expanded the product line with the same supplier.",
    metrics: [
      { label: "Defect Rate", before: "8%", after: "<1%" },
      { label: "On-Time Delivery", before: "62%", after: "98%" },
      { label: "Cost Savings", before: "—", after: "6%" },
    ],
    imgId: "case-tents-9s8d7f",
    titleId: "case-tents-title",
    descId: "case-tents-desc",
  },
  {
    id: "case-2",
    client: "US Electronics Distributor",
    industry: "Consumer Electronics",
    location: "United States",
    year: "2024",
    challenge:
      "A distributor of consumer electronics in the US needed a new cable manufacturer capable of UL certification for a new product line. Previous attempts with online suppliers resulted in inconsistent certification documentation and quality failures.",
    approach: [
      "Researched 12 cable manufacturers with active UL file numbers",
      "Conducted on-site audits of the top 3 candidates in Shenzhen and Dongguan",
      "Verified UL certification files directly with the certification body",
      "Negotiated volume pricing and locked in 12-month pricing agreements",
    ],
    result:
      "Selected a certified manufacturer with in-house testing. First production run passed UL inspection without rework. Achieved 12% cost savings compared to the previous supplier quote.",
    metrics: [
      { label: "Certification Pass", before: "Failed", after: "First Pass" },
      { label: "Cost Savings", before: "—", after: "12%" },
      { label: "Lead Time", before: "45 days", after: "32 days" },
    ],
    imgId: "case-cables-1a2b3c",
    titleId: "case-cables-title",
    descId: "case-cables-desc",
  },
  {
    id: "case-3",
    client: "Australian Homeware Brand",
    industry: "Home & Kitchen",
    location: "Australia",
    year: "2023",
    challenge:
      "An Australian homeware brand was launching a new line of stainless steel kitchenware. They needed end-to-end support: supplier sourcing, sample development, custom packaging design, quality inspections, and shipping to Melbourne.",
    approach: [
      "Sourced 5 stainless steel kitchenware factories in Guangdong and Zhejiang",
      "Managed 3 rounds of sample iterations based on client feedback",
      "Designed retail-ready packaging with a local design partner",
      "Conducted pre-shipment inspection and container loading supervision",
    ],
    result:
      "Product launched on schedule with zero quality complaints in the first 6 months. Packaging passed drop tests and retail shelf requirements. The client placed a follow-up order 3 months after launch.",
    metrics: [
      { label: "Launch Delay", before: "—", after: "0 days" },
      { label: "Quality Complaints", before: "—", after: "0 (6 months)" },
      { label: "Repeat Order", before: "—", after: "3 months" },
    ],
    imgId: "case-kitchen-4e5f6g",
    titleId: "case-kitchen-title",
    descId: "case-kitchen-desc",
  },
  {
    id: "case-4",
    client: "UK Packaging Startup",
    industry: "Packaging & Printing",
    location: "United Kingdom",
    year: "2023",
    challenge:
      "A UK startup needed custom rigid boxes for a premium skincare line. Requirements included embossing, foil stamping, and eco-friendly materials. Previous samples from Alibaba suppliers were off-spec and poorly constructed.",
    approach: [
      "Identified 4 specialized rigid box manufacturers in Dongguan",
      "Reviewed material certifications for FSC and recyclable content",
      "Managed prototype development with 4 design iterations",
      "Supervised mass production and conducted AQL inspection",
    ],
    result:
      "Delivered boxes that matched the design specification exactly. FSC certification verified. The client re-ordered twice within 8 months and expanded to 2 additional SKUs.",
    metrics: [
      { label: "Sample Accuracy", before: "Poor", after: "Exact Match" },
      { label: "Reorders", before: "—", after: "2 in 8 months" },
      { label: "New SKUs", before: "—", after: "2 added" },
    ],
    imgId: "case-packaging-7h8i9j",
    titleId: "case-packaging-title",
    descId: "case-packaging-desc",
  },
];

export default function CaseStudies() {
  return (
    <PageLayout title="Case Studies">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 lg:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                Case Studies
              </h1>
              <p className="text-text-secondary text-base sm:text-lg">
                Real sourcing projects we have managed from start to finish.
                Results you can verify.
              </p>
            </div>

            <div className="space-y-10 lg:space-y-14">
              {cases.map((c) => (
                <article
                  key={c.id}
                  className="p-6 lg:p-10 rounded-2xl bg-white border border-border-light"
                >
                  <div className="flex flex-wrap gap-3 mb-5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">
                      <Briefcase className="w-3 h-3" />
                      {c.industry}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary bg-surface px-3 py-1 rounded-full">
                      <MapPin className="w-3 h-3" />
                      {c.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary bg-surface px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3" />
                      {c.year}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-5">
                      <div>
                        <h2
                          id={c.titleId}
                          className="text-xl sm:text-2xl font-bold text-text-primary mb-3"
                        >
                          {c.client}
                        </h2>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {c.challenge}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-text-primary mb-2">
                          Our Approach
                        </h3>
                        <ul className="space-y-1.5">
                          {c.approach.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-text-secondary"
                            >
                              <span className="text-primary mt-0.5">
                                &bull;
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-text-primary mb-2">
                          Result
                        </h3>
                        <p
                          id={c.descId}
                          className="text-sm text-text-secondary leading-relaxed"
                        >
                          {c.result}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-surface-alt">
                        <img
                          alt={c.client}
                          className="w-full h-full object-cover"
                          data-strk-img-id={c.imgId}
                          data-strk-img={`[${c.descId}] [${c.titleId}]`}
                          data-strk-img-ratio="4x3"
                          data-strk-img-width="500"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        />
                      </div>

                      <div className="p-4 rounded-xl bg-surface border border-border-light">
                        <div className="flex items-center gap-2 mb-3">
                          <BarChart3 className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold text-text-primary">
                            Key Metrics
                          </span>
                        </div>
                        <div className="space-y-3">
                          {c.metrics.map((m) => (
                            <div
                              key={m.label}
                              className="flex items-center justify-between text-sm"
                            >
                              <span className="text-text-secondary">
                                {m.label}
                              </span>
                              <div className="flex items-center gap-3">
                                {m.before !== "—" && (
                                  <span className="text-text-muted line-through">
                                    {m.before}
                                  </span>
                                )}
                                <span className="font-semibold text-success">
                                  {m.after}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </PageLayout>
  );
}
