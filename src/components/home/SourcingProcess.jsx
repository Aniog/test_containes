import { Link } from "react-router-dom";
import { Search, FileCheck2, PackageOpen, ScanSearch, PlaneTakeoff, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader.jsx";

const STEPS = [
  {
    n: "01",
    icon: Search,
    title: "Define Your Sourcing Needs",
    desc: "Tell us the product, quantity, target price, quality standards, and timeline. We clarify scope before we search.",
  },
  {
    n: "02",
    icon: FileCheck2,
    title: "Supplier Shortlist & Quotes",
    desc: "We identify 3–5 verified factories, collect detailed quotations, and benchmark them against your requirements.",
  },
  {
    n: "03",
    icon: PackageOpen,
    title: "Samples & Negotiation",
    desc: "We arrange custom samples, refine specifications, and negotiate pricing, payment terms, and lead time on your behalf.",
  },
  {
    n: "04",
    icon: ScanSearch,
    title: "Production & Quality Inspection",
    desc: "We follow production in person, run AQL-based inspections, and share photo / video reports at every milestone.",
  },
  {
    n: "05",
    icon: PlaneTakeoff,
    title: "Shipping & Delivery",
    desc: "We consolidate, pack, prepare export documents, and ship FOB, CIF, or DDP — by sea, air, or rail to your destination.",
  },
];

export default function SourcingProcess() {
  return (
    <section id="process" className="section bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="A Clear, Five-Step Sourcing Process"
          subtitle="Every order follows the same structured process — so you always know what is happening, when, and what comes next."
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s, idx) => (
            <li key={s.n} className="relative">
              <div className="card p-6 h-full">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-semibold text-[#C8553D]">{s.n}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#0E2A47]/5 text-[#0E2A47]">
                    <s.icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-5 text-[16px] font-semibold text-[#0F172A] leading-snug">{s.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-[#475569]">{s.desc}</p>
              </div>
              {idx < STEPS.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#C7BFB1]" />
              )}
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <Link to="/how-it-works" className="btn-secondary">
            Read the full process <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}