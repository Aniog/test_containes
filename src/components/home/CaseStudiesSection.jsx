import { Link } from "react-router-dom";
import { ArrowRight, Building2, PackageCheck, TrendingUp } from "lucide-react";

const cases = [
  {
    client: "European Home Goods Retailer",
    industry: "Home & Furniture",
    result: "Reduced defect rate from 12% to under 2%",
    icon: PackageCheck,
    desc: "We helped a Germany-based retailer switch to a verified furniture factory, implement inline QC, and cut returns by 80%.",
  },
  {
    client: "US Electronics Startup",
    industry: "Electronics",
    result: "Saved $45,000 on first order",
    icon: TrendingUp,
    desc: "By negotiating directly with the component factory and avoiding trading companies, we cut their BOM cost by 18%.",
  },
  {
    client: "Australian Packaging Brand",
    industry: "Packaging",
    result: "On-time delivery for 6 consecutive orders",
    icon: Building2,
    desc: "Weekly production follow-up and milestone checks helped this brand achieve consistent lead times for the first time.",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-slate-600">
              Real results for real businesses sourcing from China.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-brand-800 font-semibold hover:underline shrink-0"
          >
            Read all case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.client}
              className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <c.icon className="w-6 h-6 text-brand-800" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-800 mb-1">
                {c.industry}
              </p>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {c.client}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                {c.desc}
              </p>
              <div className="rounded-lg bg-green-50 border border-green-100 px-4 py-2.5">
                <p className="text-sm font-semibold text-green-700">
                  {c.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
