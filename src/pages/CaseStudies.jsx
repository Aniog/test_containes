import { Link } from "react-router-dom";
import { TrendingDown, Box, Zap, Globe, Clock, ShieldCheck, ArrowRight } from "lucide-react";

const cases = [
  {
    client: "European Electronics Retailer",
    industry: "Consumer Electronics",
    location: "Germany / Netherlands",
    challenge:
      "The client was sourcing consumer electronics from multiple suppliers in China but faced inconsistent quality, frequent delays, and communication breakdowns. Defect rates were running at 8%, and returns were damaging their brand reputation.",
    solution: [
      "Conducted comprehensive factory audits of their existing and potential suppliers",
      "Implemented a 3-stage quality inspection protocol (DUPRO, PSI, loading supervision)",
      "Established weekly production reporting and milestone tracking",
      "Negotiated consolidated shipping to reduce freight costs",
    ],
    results: [
      { icon: TrendingDown, label: "Defect rate reduced from 8% to under 1%" },
      { icon: Box, label: "22% reduction in total sourcing costs" },
      { icon: Zap, label: "On-time delivery improved from 60% to 94%" },
    ],
  },
  {
    client: "US Home Goods Brand",
    industry: "Home & Garden",
    location: "United States",
    challenge:
      "A growing D2C brand needed to expand their product line with 12 new SKIs but lacked the on-the-ground presence in China to identify and vet suitable manufacturers. Previous attempts had resulted in subpar samples and misaligned expectations.",
    solution: [
      "Researched and shortlisted 15 specialized home goods factories",
      "Organized sample rounds with detailed evaluation matrices",
      "Managed OEM development including custom molds and packaging",
      "Coordinated first production runs with embedded QC staff",
    ],
    results: [
      { icon: Box, label: "12 new SKUs launched in 6 months" },
      { icon: ShieldCheck, label: "100% first-batch acceptance rate" },
      { icon: Globe, label: "3 reliable long-term suppliers established" },
    ],
  },
  {
    client: "Australian Industrial Distributor",
    industry: "Machinery & Tools",
    location: "Australia",
    challenge:
      "The client relied on a single supplier for industrial pumps and valves. When that factory faced production stoppages, their entire supply chain was at risk. They needed diversification without sacrificing quality or lead times.",
    solution: [
      "Identified and verified 4 alternative pump and valve manufacturers",
      "Benchmarked quality, pricing, and capacity across all suppliers",
      "Set up dual-source strategy with staged volume transfer",
      "Implemented standardized QC checklists across all sources",
    ],
    results: [
      { icon: ShieldCheck, label: "Supply chain risk significantly reduced" },
      { icon: Clock, label: "Consistent 45-day lead times achieved" },
      { icon: TrendingDown, label: "8% average cost savings through competition" },
    ],
  },
  {
    client: "UK Fashion Startup",
    industry: "Textiles & Apparel",
    location: "United Kingdom",
    challenge:
      "A sustainable fashion startup needed small-batch production with strict ethical and environmental compliance. Most large factories were unwilling to accept low MOQs, and verifying sustainability claims was difficult.",
    solution: [
      "Sourced small-batch apparel workshops with relevant certifications",
      "Verified BSCI and OEKO-TEX compliance through third-party audits",
      "Negotiated flexible MOQs and scalable production agreements",
      "Managed fabric sourcing from certified sustainable mills",
    ],
    results: [
      { icon: ShieldCheck, label: "Full ethical compliance verified" },
      { icon: Box, label: "Production scaled from 500 to 5,000 units" },
      { icon: Zap, label: "Brand successfully launched on schedule" },
    ],
  },
  {
    client: "Canadian Packaging Company",
    industry: "Packaging Materials",
    location: "Canada",
    challenge:
      "The client needed custom packaging for a new food product line, including child-resistant closures and food-grade material certifications. Previous packaging suppliers had inconsistent print quality.",
    solution: [
      "Identified specialized food packaging manufacturers with FDA/CFIA experience",
      "Managed mold development and pre-production sampling",
      "Implemented print quality control with color-matching protocols",
      "Coordinated material testing and certification documentation",
    ],
    results: [
      { icon: ShieldCheck, label: "All certifications obtained on first attempt" },
      { icon: TrendingDown, label: "Print defect rate dropped to 0.3%" },
      { icon: Clock, label: "Product launched 2 weeks ahead of schedule" },
    ],
  },
  {
    client: "Nordic Consumer Goods Distributor",
    industry: "Consumer Goods",
    location: "Sweden / Norway",
    challenge:
      "The client wanted to source a range of consumer goods (toys, kitchen tools, and pet products) under a unified private label but struggled to manage multiple suppliers and maintain consistent quality.",
    solution: [
      "Consolidated sourcing across 3 complementary product categories",
      "Developed unified private label packaging guidelines",
      "Implemented cross-supplier quality standards and reporting",
      "Coordinated consolidated shipments to reduce logistics costs",
    ],
    results: [
      { icon: Box, label: "Unified product line across 3 categories" },
      { icon: TrendingDown, label: "15% logistics cost savings" },
      { icon: Globe, label: "Private label brand established in Nordics" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <div>
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Real-world examples of how we have helped businesses overcome sourcing challenges and achieve measurable results.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
          {cases.map((c, i) => (
            <article key={i} className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full">
                    {c.industry}
                  </span>
                  <span className="text-xs text-slate-500">{c.location}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">{c.client}</h2>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-2">Challenge</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.challenge}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-2">Our Solution</h3>
                  <ul className="space-y-2">
                    {c.solution.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg border border-slate-200 p-5">
                  <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-3">Results</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {c.results.map((r) => (
                      <div key={r.label} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-navy-100 rounded-lg flex items-center justify-center shrink-0">
                          <r.icon className="w-4 h-4 text-navy-700" />
                        </div>
                        <span className="text-sm text-slate-700 font-medium leading-snug">{r.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
            Want results like these?
          </h2>
          <p className="text-slate-600 mb-8">
            Every successful sourcing project starts with a conversation. Tell us about your goals and we will show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
