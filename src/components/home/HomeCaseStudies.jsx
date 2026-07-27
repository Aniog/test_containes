import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    client: "Nordic Home Brands",
    industry: "Home & Garden",
    result: "Reduced defect rate from 8% to 1.2% within 6 months",
    desc: "We helped a Scandinavian retailer switch from an unreliable supplier to a verified factory, implement AQL-based inspections, and redesign packaging for sea freight optimization.",
  },
  {
    client: "TechGear Europe",
    industry: "Electronics",
    result: "Cut lead time by 22 days through production monitoring",
    desc: "By placing a dedicated follow-up team at the factory, we identified bottlenecks early and adjusted the production schedule — saving weeks on a seasonal product launch.",
  },
  {
    client: "GreenField Agriculture",
    industry: "Machinery & Industrial",
    result: "$47K saved via factory audit and renegotiation",
    desc: "Our audit revealed the original supplier was a trading company with a 35% markup. We sourced directly from the manufacturer and renegotiated terms.",
  },
];

export default function HomeCaseStudies() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Case Studies
          </p>
          <h2 className="text-primary mb-4">Real Results for Real Buyers</h2>
          <p className="text-slate-600">
            See how we have helped businesses like yours reduce risk, cut costs,
            and improve quality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {cases.map((c) => (
            <div
              key={c.client}
              className="bg-surface rounded-lg p-6 md:p-8 border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider bg-secondary/10 px-2.5 py-1 rounded-full">
                  {c.industry}
                </span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {c.client}
              </h3>
              <p className="text-sm font-medium text-primary mb-3">{c.result}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Read all case studies <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
