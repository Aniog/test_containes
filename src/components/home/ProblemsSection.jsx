import { AlertTriangle, CheckCircle2 } from "lucide-react";

const PAIRS = [
  {
    problem: "You cannot tell a real factory from a trading company.",
    solution:
      "We visit the production line in person, verify the business license, and confirm export experience.",
  },
  {
    problem: "Samples look fine, mass production does not.",
    solution:
      "Inline checks during production and a pre-shipment AQL inspection with photo and video evidence.",
  },
  {
    problem: "Suppliers disappear once payment is made.",
    solution:
      "Staged payment milestones tied to production milestones. We hold the relationship on the ground.",
  },
  {
    problem: "Shipping quotes are confusing and unreliable.",
    solution:
      "FOB, CIF, or DDP — we coordinate the booking, documents, and customs paperwork in one place.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="bg-brand-ink text-white">
      <div className="container-x py-20">
        <div className="max-w-2xl">
          <p className="eyebrow text-brand-accent">Problems we solve</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The exact risks that stop overseas buyers from sourcing in China
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/75">
            Sourcing from overseas is full of traps. Our job is to remove the ones that
            cost you money, time, and reputation with your customers.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {PAIRS.map((p) => (
            <div
              key={p.problem}
              className="rounded-lg border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-red-500/15 text-red-300">
                  <AlertTriangle className="h-4 w-4" />
                </span>
                <p className="text-sm font-semibold text-white">{p.problem}</p>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-green-500/15 text-green-300">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-white/80">{p.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
