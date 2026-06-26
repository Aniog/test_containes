import {
  AlertTriangle,
  Languages,
  Plane,
  ScanLine,
  Receipt,
  ShieldAlert,
} from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    problem: "Unreliable suppliers and trading companies",
    solution:
      "We verify business licenses, visit factories in person, and only work with manufacturers that match your product, volume and quality requirements.",
  },
  {
    icon: ScanLine,
    problem: "Quality issues discovered after delivery",
    solution:
      "Independent AQL inspections during and before shipment, with photo and video reports. You approve shipment only after results meet your spec.",
  },
  {
    icon: Languages,
    problem: "Language and communication gaps",
    solution:
      "Our team handles technical communication directly with Chinese suppliers in Mandarin, then reports back to you in clear English.",
  },
  {
    icon: Receipt,
    problem: "Hidden margins and unclear pricing",
    solution:
      "Transparent service fees — we don't take kickbacks from suppliers. You see real factory quotations and pay the supplier directly when preferred.",
  },
  {
    icon: Plane,
    problem: "Can't travel to China for every order",
    solution:
      "We act as your eyes and hands on the ground: factory visits, sample collection, production checks and shipment supervision, without you flying in.",
  },
  {
    icon: ShieldAlert,
    problem: "Shipping delays and customs surprises",
    solution:
      "Booking, documentation and customs handled by our logistics partners, with weekly milestone updates and clear Incoterms from the start.",
  },
];

export default function Problems() {
  return (
    <section className="bg-brand-navy py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            Problems we solve
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Sourcing from China shouldn't feel risky
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Most issues with China sourcing come down to the same handful of
            problems. Here is how we address each one in practice.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.problem}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-accent/15 text-brand-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {p.problem}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {p.solution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
