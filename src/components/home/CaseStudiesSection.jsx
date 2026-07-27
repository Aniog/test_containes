import { Link } from "react-router-dom";
import { ArrowRight, Building2 } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { useEffect, useRef } from "react";
import strkImgConfig from "@/strk-img-config.json";

const cases = [
  {
    client: "European Electronics Retailer",
    industry: "Consumer Electronics",
    result: "Reduced sourcing costs by 22% and cut lead time from 45 to 28 days.",
    desc: "Sourced custom cable assemblies and chargers from 3 verified factories in Shenzhen.",
    imgId: "case-electronics-a1b2c3",
  },
  {
    client: "US Outdoor Gear Brand",
    industry: "Sporting Goods",
    result: "Achieved zero quality complaints after implementing our QC process.",
    desc: "Found a new tent and backpack manufacturer and established full QC checkpoints.",
    imgId: "case-outdoor-b2c3d4",
  },
  {
    client: "Australian Home Goods Chain",
    industry: "Home & Kitchen",
    result: "Expanded product line by 40 SKUs within 6 months.",
    desc: "Identified and onboarded 5 reliable suppliers across 3 product categories.",
    imgId: "case-home-c3d4e5",
  },
];

export default function CaseStudiesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Results</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Case Studies
          </h2>
          <p className="text-slate-600 text-lg">
            Real outcomes for businesses that partnered with us to source from China.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, idx) => {
            const titleId = `case-title-${idx}`;
            const descId = `case-desc-${idx}`;
            return (
              <div
                key={idx}
                className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-all"
              >
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                  <img
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={c.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{c.industry}</span>
                  </div>
                  <h3 id={titleId} className="text-base font-semibold text-slate-900 mb-2">{c.client}</h3>
                  <p id={descId} className="text-slate-600 text-sm mb-3">{c.desc}</p>
                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                    <p className="text-sm font-medium text-amber-800">{c.result}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
          >
            Read All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
