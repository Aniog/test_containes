import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, PackageCheck, TrendingDown, ShieldCheck, Layers, DollarSign, ClipboardCheck } from "lucide-react";
import PageHero from "@/components/shared/PageHero.jsx";
import CtaBanner from "@/components/shared/CtaBanner.jsx";

const CASES = [
  {
    tag: "Home textiles",
    country: "United States",
    buyer: "Mid-market home goods importer",
    title: "Switching from a trading company to a real bedding mill",
    summary:
      "The buyer had been buying through a Yiwu trading company. After two seasons of inconsistent quality, we identified a verified bedding mill in Jiangsu with 18 years of export experience and direct weaving capacity.",
    work: [
      "Factory verification at the mill in Jiangsu",
      "Sample round with 3 color and 2 weave variants",
      "Renegotiated from 30/70 to 20/80 payment terms",
      "Inline QC at cutting and stitching, PSI before each container",
    ],
    metrics: [
      { icon: TrendingDown, label: "Unit cost", value: "−18%" },
      { icon: ShieldCheck, label: "Defect rate", value: "6.0% → 1.4%" },
      { icon: PackageCheck, label: "First-pass approval", value: "4 containers" },
    ],
  },
  {
    tag: "Consumer electronics",
    country: "Germany",
    buyer: "Audio accessories brand",
    title: "CE-compliance audit and pre-shipment QC for a Bluetooth audio line",
    summary:
      "A new line of Bluetooth speakers was launching into the EU. We ran an on-site compliance audit, identified a missing CE label and an unapproved battery cell supplier, and arranged a third-party lab test before the goods left Shenzhen.",
    work: [
      "Compliance audit at the Shenzhen assembly partner",
      "Battery cell traceability review",
      "CE marking and EU declaration of conformity",
      "Pre-shipment inspection on 3 SKUs and 1,200 units",
    ],
    metrics: [
      { icon: ShieldCheck, label: "Customs holds", value: "0" },
      { icon: ClipboardCheck, label: "Lab tests passed", value: "3 / 3" },
      { icon: TrendingDown, label: "Time to market", value: "2 weeks saved" },
    ],
  },
  {
    tag: "Outdoor goods",
    country: "Australia",
    buyer: "D2C camping brand",
    title: "Small-batch production for a new camping brand",
    summary:
      "A direct-to-consumer brand needed to test three products in the Australian market before committing to a full season. We coordinated three sample rounds, two factory changes, and a 12-pallet pilot order.",
    work: [
      "3 sample rounds across 2 factories",
      "Material and component sourcing for tent poles and fabric",
      "Custom retail packaging design coordination",
      "Air freight for the pilot, then sea freight for the season",
    ],
    metrics: [
      { icon: Layers, label: "Sample rounds", value: "3" },
      { icon: PackageCheck, label: "Pilot order", value: "12 pallets" },
      { icon: DollarSign, label: "Initial order value", value: "AUD 86,000" },
    ],
  },
  {
    tag: "Beauty & personal care",
    country: "United Kingdom",
    buyer: "Skincare start-up",
    title: "Formula review and packaging sourcing for a skincare line",
    summary:
      "A UK start-up needed a 4-SKU skincare line made under their own brand. We reviewed the formula, sourced GMP-registered manufacturing, and consolidated packaging from three different suppliers into one production plan.",
    work: [
      "Formula review with the founder and chemist",
      "GMP-registered manufacturer in Shanghai",
      "Bottles, droppers, and cartons sourced from 3 separate suppliers",
      "Stability testing and EU cosmetic regulation paperwork",
    ],
    metrics: [
      { icon: ShieldCheck, label: "Compliance", value: "EU ready" },
      { icon: PackageCheck, label: "First production", value: "On time" },
      { icon: DollarSign, label: "Packaging cost", value: "−12% vs quote" },
    ],
  },
];

export default function CaseStudies() {
  useEffect(() => {
    document.title =
      "Case Studies | China Sourcing Projects by SSourcing China";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Recent China sourcing projects across home textiles, electronics, outdoor goods, and beauty. Real buyers, real factories, real outcomes.",
      );
    } else {
      const tag = document.createElement("meta");
      tag.name = "description";
      tag.content =
        "Recent China sourcing projects across home textiles, electronics, outdoor goods, and beauty.";
      document.head.appendChild(tag);
    }
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Recent projects, written in plain language"
        description="A look at four recent projects — what the buyer needed, what we did, and the outcome. No names or sensitive data, just the work."
        primaryCta={{ to: "/contact", label: "Get a Free Sourcing Quote" }}
      />

      <section className="bg-white">
        <div className="container-x py-20">
          <div className="space-y-12">
            {CASES.map((c, idx) => (
              <article
                key={c.title}
                className="rounded-xl border border-brand-line bg-white p-6 md:p-10"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-brand-surface px-2.5 py-0.5 text-xs font-semibold text-brand-primary">
                        {c.tag}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-brand-muted">
                        <MapPin className="h-3.5 w-3.5" /> {c.country}
                      </span>
                    </div>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                      {c.title}
                    </h2>
                    <p className="mt-1 text-sm text-brand-muted">For: {c.buyer}</p>
                  </div>
                  <div className="text-xs text-brand-muted">
                    <span className="font-semibold uppercase tracking-wider text-brand-muted">Case</span>{" "}
                    <span className="text-brand-ink font-semibold">#{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                </div>

                <p className="mt-6 text-base leading-relaxed text-brand-muted">{c.summary}</p>

                <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-ink">
                      What we did
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-brand-text">
                      {c.work.map((w) => (
                        <li key={w} className="flex items-start gap-2">
                          <ClipboardCheck className="h-4 w-4 text-brand-primary mt-0.5" />
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-ink">
                      Outcome
                    </h3>
                    <div className="mt-3 grid grid-cols-3 gap-3">
                      {c.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-md border border-brand-line bg-brand-surface p-3"
                        >
                          <m.icon className="h-4 w-4 text-brand-primary" />
                          <p className="mt-2 text-base font-bold text-brand-ink">{m.value}</p>
                          <p className="text-[11px] uppercase tracking-wider text-brand-muted">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface border-y border-brand-line">
        <div className="container-x py-16">
          <div className="rounded-xl border border-brand-line bg-white p-8 md:p-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                Have a project that should be the next case study?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-brand-muted">
                Send us the details. If it is a good fit, we will quote a sourcing plan
                within one business day.
              </p>
            </div>
            <Link to="/contact" className="btn-primary">
              Start your project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="One conversation away from a real factory in China"
        description="Send us a quick description of your product. We will reply within one business day with a sourcing plan and an itemized quote."
        primaryLabel="Get a Free Sourcing Quote"
        primaryTo="/contact"
      />
    </>
  );
}
