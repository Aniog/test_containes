import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

const cases = [
  {
    id: "case-1",
    client: "European Outdoor Retailer",
    industry: "Sporting Goods",
    location: "Germany",
    challenge:
      "Needed to switch from a failing supplier with inconsistent tent quality and 6-week delays.",
    result:
      "Identified and verified a new factory in Zhejiang. Reduced defect rate from 8% to under 1%. On-time delivery restored.",
    imgId: "case-tents-9s8d7f",
    titleId: "case-tents-title",
    descId: "case-tents-desc",
  },
  {
    id: "case-2",
    client: "US Electronics Distributor",
    industry: "Consumer Electronics",
    location: "United States",
    challenge:
      "Struggling to find a reliable cable manufacturer that could meet UL certification requirements.",
    result:
      "Sourced 3 certified manufacturers, conducted on-site audits, and negotiated 12% cost savings on the first order.",
    imgId: "case-cables-1a2b3c",
    titleId: "case-cables-title",
    descId: "case-cables-desc",
  },
  {
    id: "case-3",
    client: "Australian Homeware Brand",
    industry: "Home & Kitchen",
    location: "Australia",
    challenge:
      "Launching a new kitchenware line and needed end-to-end sourcing, QC, and packaging design.",
    result:
      "Managed full process from supplier selection to shipping. Launched on schedule with zero quality complaints in the first 6 months.",
    imgId: "case-kitchen-4e5f6g",
    titleId: "case-kitchen-title",
    descId: "case-kitchen-desc",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Case Studies
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Real results from real sourcing projects we have managed for buyers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c) => (
            <div
              key={c.id}
              className="group rounded-xl bg-white border border-border-light overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/10] overflow-hidden bg-surface-alt">
                <img
                  alt={c.client}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-5 lg:p-6">
                <div className="flex flex-wrap gap-3 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/5 px-2.5 py-1 rounded-full">
                    <Briefcase className="w-3 h-3" />
                    {c.industry}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-text-secondary bg-surface px-2.5 py-1 rounded-full">
                    <MapPin className="w-3 h-3" />
                    {c.location}
                  </span>
                </div>
                <h3
                  id={c.titleId}
                  className="text-base font-semibold text-text-primary mb-2"
                >
                  {c.client}
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  <span className="font-medium text-red-500">Challenge:</span>{" "}
                  {c.challenge}
                </p>
                <p id={c.descId} className="text-sm text-text-secondary mb-4">
                  <span className="font-medium text-success">Result:</span>{" "}
                  {c.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            View all case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
