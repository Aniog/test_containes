import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe2, TrendingDown, Clock, ShieldCheck } from "lucide-react";
import PageHeader from "../components/PageHeader";
import CtaBanner from "../components/CtaBanner";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

const CASES = [
  {
    id: "smart-home",
    industry: "Consumer Electronics",
    region: "United States",
    title: "Smart-home brand cuts unit cost 22% with verified factory switch",
    challenge:
      "A US smart-home startup was buying smart plugs from a trading company at a 35% mark-up. Defect rate was acceptable, but margins were tight and lead times unpredictable.",
    solution:
      "We identified the original manufacturer in Shenzhen, verified the factory on-site, and negotiated a direct supply agreement with milestone-based payments and a 12-month price lock.",
    results: [
      { icon: TrendingDown, label: "22% lower unit cost" },
      { icon: Clock, label: "4-week shorter lead time" },
      { icon: ShieldCheck, label: "Zero defects in first PO of 5,000 units" },
    ],
  },
  {
    id: "kitchenware",
    industry: "Home & Kitchen",
    region: "Germany",
    title: "European retailer launches private-label kitchenware in 14 weeks",
    challenge:
      "A mid-size German retailer wanted to launch a 12-SKU private-label kitchenware line, with custom packaging and EU compliance, before the holiday season.",
    solution:
      "We sourced two complementary factories in Yongkang, ran two QC inspection rounds, coordinated branded packaging, and consolidated FOB Ningbo for a single sea shipment.",
    results: [
      { icon: ShieldCheck, label: "12 SKUs delivered on schedule" },
      { icon: TrendingDown, label: "Custom packaging at +6% over white-label" },
      { icon: Globe2, label: "Full FOB Ningbo, single consolidated shipment" },
    ],
  },
  {
    id: "apparel",
    industry: "Apparel",
    region: "United Kingdom",
    title: "DTC apparel brand fixes 8% defect rate after factory verification",
    challenge:
      "A growing UK direct-to-consumer brand was hitting an 8% defect rate on knitwear, leading to high returns and customer complaints during their second growth year.",
    solution:
      "Our on-site factory verification revealed the supplier was outsourcing 40% of the production. We sourced an alternative vertically-integrated factory and put AQL 2.5 inspections on every PO.",
    results: [
      { icon: TrendingDown, label: "Defect rate from 8% to under 1%" },
      { icon: Clock, label: "Stable repeat orders for 18 months" },
      { icon: ShieldCheck, label: "Vertically integrated, no hidden subcontracting" },
    ],
  },
  {
    id: "outdoor",
    industry: "Sports & Outdoor",
    region: "Australia",
    title: "Outdoor brand launches camping line with two-supplier setup",
    challenge:
      "An Australian outdoor brand needed to launch a camping line with both fabric and metal components, balancing quality, lead time, and a tight cash position.",
    solution:
      "We split production between a fabric specialist in Ningbo and a metal hardware factory in Yongkang, coordinated final assembly, and arranged sea freight to Sydney.",
    results: [
      { icon: ShieldCheck, label: "8 SKUs across 2 factories, single delivery" },
      { icon: Clock, label: "On-time launch ahead of summer season" },
      { icon: TrendingDown, label: "Hardware cost 14% below initial trading-co quote" },
    ],
  },
  {
    id: "furniture",
    industry: "Furniture",
    region: "Canada",
    title: "Boutique furniture brand recovers from a stalled supplier",
    challenge:
      "A Canadian furniture brand had paid a 30% deposit but the supplier went silent for three weeks. Our client reached out for help recovering the project before peak season.",
    solution:
      "We visited the factory in Foshan, confirmed production was 60% complete, mediated a revised payment plan, and put one of our QC inspectors on-site for the rest of the run.",
    results: [
      { icon: Clock, label: "Production completed within 3 weeks" },
      { icon: ShieldCheck, label: "Deposit recovered into delivered goods" },
      { icon: Globe2, label: "Container shipped to Vancouver as planned" },
    ],
  },
  {
    id: "packaging",
    industry: "Packaging",
    region: "United States",
    title: "DTC beauty brand redesigns unboxing experience for repeat orders",
    challenge:
      "A US beauty brand wanted to refresh its unboxing experience without raising packaging cost more than 5% per unit, and needed sustainable materials.",
    solution:
      "We sourced an FSC-certified packaging supplier in Shanghai, ran three sample rounds, and aligned production timelines with the brand's product manufacturer to ship together.",
    results: [
      { icon: TrendingDown, label: "Packaging cost increase held to 4.7%" },
      { icon: ShieldCheck, label: "FSC-certified materials" },
      { icon: Clock, label: "Joint shipment with main product, single arrival" },
    ],
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Case studies"
        title="Real sourcing projects, honest outcomes"
        description="A selection of recent engagements. Names of clients are kept confidential, but the situations, decisions, and numbers are real. We are happy to put you in touch with referenceable buyers in your industry on request."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHeader>

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-2">
            {CASES.map((c) => (
              <article
                key={c.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                  <img
                    alt={c.title}
                    data-strk-img-id={`case-page-${c.id}-img-c47bf2`}
                    data-strk-img={`[case-page-${c.id}-title] [case-page-${c.id}-industry]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      id={`case-page-${c.id}-industry`}
                      className="rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white"
                    >
                      {c.industry}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                      <Globe2 className="h-3.5 w-3.5" /> {c.region}
                    </span>
                  </div>
                  <h2
                    id={`case-page-${c.id}-title`}
                    className="mt-3 text-xl font-semibold text-slate-900"
                  >
                    {c.title}
                  </h2>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-red-600">
                        Challenge
                      </div>
                      <p className="mt-1.5 text-sm text-slate-700">{c.challenge}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
                        What we did
                      </div>
                      <p className="mt-1.5 text-sm text-slate-700">{c.solution}</p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3 border-t border-slate-200 pt-5">
                    {c.results.map((r) => {
                      const Icon = r.icon;
                      return (
                        <div key={r.label} className="flex items-start gap-2">
                          <Icon className="mt-0.5 h-4 w-4 flex-none text-slate-900" />
                          <span className="text-xs font-medium text-slate-700 leading-snug">
                            {r.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want a similar outcome for your product?"
        description="Send us your brief. We will tell you honestly whether we are the right fit, and what a realistic timeline and budget look like."
      />
    </div>
  );
};

export default CaseStudies;
