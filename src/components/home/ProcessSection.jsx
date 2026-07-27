import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, ListChecks, Handshake, ScanLine, Package, Ship } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: MessageSquare,
    title: "Submit your inquiry",
    desc: "Tell us the product, specs, target price, quantity, and timeline. We confirm scope within one business day.",
  },
  {
    n: "02",
    icon: ListChecks,
    title: "Supplier shortlist",
    desc: "We compare 3–5 verified factories on price, capacity, lead time, and export experience.",
  },
  {
    n: "03",
    icon: Handshake,
    title: "Samples & negotiation",
    desc: "We order samples, consolidate shipments, and negotiate terms, MOQ, and payment milestones.",
  },
  {
    n: "04",
    icon: ScanLine,
    title: "Production & QC",
    desc: "Inline checks during production, plus a pre-shipment inspection with a photo / video report.",
  },
  {
    n: "05",
    icon: Package,
    title: "Packing & documentation",
    desc: "Carton marking, palletization, and export documents (invoice, packing list, certificate of origin).",
  },
  {
    n: "06",
    icon: Ship,
    title: "Shipping & delivery",
    desc: "FOB, CIF, or DDP. We coordinate with your forwarder or arrange one for you.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-brand-surface border-y border-brand-line">
      <div className="container-x py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            A clear process, from RFQ to delivered container
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-brand-muted">
            Six repeatable steps. You see the same data we see. We escalate early when
            timelines slip, instead of letting problems surface at the port.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="relative rounded-lg border border-brand-line bg-white p-6"
            >
              <span className="absolute -top-3 left-6 inline-flex h-6 items-center rounded-full bg-brand-ink px-2.5 text-[11px] font-bold uppercase tracking-wider text-white">
                Step {s.n}
              </span>
              <div className="mt-3 icon-box">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/how-it-works" className="btn-secondary">
            Read the full process <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
