import { Link } from "react-router-dom";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    client: "European Hardware Distributor",
    title: "Sourcing Custom Metal Components",
    result: "Reduced defect rate from 12% to under 2% within two production runs.",
    description: "We helped the client switch to a verified manufacturer, implemented incoming material checks, and introduced pre-shipment inspections.",
  },
  {
    client: "Australian Retail Brand",
    title: "Packaging & Private Label Products",
    result: "Delivered 15,000 units on schedule for a seasonal product launch.",
    description: "Our team coordinated sampling, packaging design, production follow-up, and sea freight consolidation.",
  },
  {
    client: "US E-Commerce Seller",
    title: "Electronics Accessories Sourcing",
    result: "Cut sourcing costs by 18% while improving product consistency.",
    description: "We identified alternative suppliers, negotiated terms, and set up a quality standard for repeat orders.",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Case Studies"
          title="Results from Real Projects"
          description="See how we have helped businesses source more reliably from China."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, index) => {
            const titleId = `case-title-${index}`;
            const descId = `case-desc-${index}`;
            const clientId = `case-client-${index}`;
            const imgId = `case-img-${index}`;

            return (
              <article
                key={study.title}
                className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-all flex flex-col"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-200">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}] [${clientId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p id={clientId} className="text-xs font-semibold text-teal-600 uppercase tracking-wide mb-2">{study.client}</p>
                  <h3 id={titleId} className="text-lg font-semibold text-slate-900 mb-2">{study.title}</h3>
                  <p id={descId} className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{study.description}</p>
                  <div className="bg-white rounded-lg p-3 border border-slate-100">
                    <p className="text-sm font-medium text-slate-900">Result: <span className="text-teal-700">{study.result}</span></p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 hover:border-teal-600 hover:text-teal-700 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Read More Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
