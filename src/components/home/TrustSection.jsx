import { ShieldCheck, BadgeCheck, FileCheck2, Banknote, Lock, MessageSquare } from "lucide-react";

const POINTS = [
  {
    icon: ShieldCheck,
    title: "On-the-ground presence",
    desc: "Our team is based in China. We walk the factory floor, not just the showroom.",
  },
  {
    icon: BadgeCheck,
    title: "Verified suppliers only",
    desc: "Every factory on a shortlist has been visited, audited, and reference-checked.",
  },
  {
    icon: FileCheck2,
    title: "Documented QC",
    desc: "AQL-based inspections with photo, video, and written reports you can share with your team.",
  },
  {
    icon: Banknote,
    title: "Transparent pricing",
    desc: "Service fees quoted upfront. No hidden commissions, no surprise add-ons.",
  },
  {
    icon: Lock,
    title: "NDA and IP protection",
    desc: "We sign NDAs and route sensitive designs only to vetted production lines.",
  },
  {
    icon: MessageSquare,
    title: "Single point of contact",
    desc: "One English-speaking account manager across sourcing, QC, and shipping.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-brand-surface border-y border-brand-line">
      <div className="container-x py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Why buyers trust us</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            Practical guarantees, not slogans
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-brand-muted">
            Sourcing from China only works when there is someone you can call when
            something goes wrong. We make sure that someone is us.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((p) => (
            <div key={p.title} className="card">
              <div className="icon-box">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-brand-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
