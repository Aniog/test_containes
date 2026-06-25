import {
  AlertTriangle,
  TimerReset,
  Languages,
  Boxes,
  FileWarning,
  Plane,
} from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    problem: "Hidden traders pretending to be factories",
    solution: "We verify the legal entity, factory address, production lines and export records before quoting.",
  },
  {
    icon: TimerReset,
    problem: "Delays you only learn about at the last minute",
    solution: "Weekly production updates with photos, plus an early-warning system on raw materials and lead time risks.",
  },
  {
    icon: Languages,
    problem: "Language and time-zone gaps with suppliers",
    solution: "Our English-speaking team in China handles daily communication on your behalf.",
  },
  {
    icon: Boxes,
    problem: "Inconsistent quality between batches",
    solution: "AQL-based inspections during production and before shipment, with clear pass/fail criteria.",
  },
  {
    icon: FileWarning,
    problem: "Missing certificates, labels or HS codes",
    solution: "We confirm required test reports, labeling and HS classification before goods leave the factory.",
  },
  {
    icon: Plane,
    problem: "Confusing freight quotes and FBA prep",
    solution: "Transparent freight options with sea, air or express, plus Amazon FBA labeling and consolidation.",
  },
];

const ProblemsWeSolve = () => {
  return (
    <section className="bg-[#EEF2F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F4E79] mb-3">
            Problems We Solve
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] tracking-tight">
            Common problems overseas buyers hit when sourcing from China
          </h2>
          <p className="mt-4 text-[#475569] text-base md:text-lg">
            These are the issues we hear most often from new clients. Each is
            handled by a documented step in our process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map(({ icon: Icon, problem, solution }) => (
            <div
              key={problem}
              className="rounded-xl bg-white border border-[#D9E2EC] p-6 flex gap-4"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#B45309]/10 text-[#B45309] shrink-0">
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-[#0B2545]">{problem}</h3>
                <p className="mt-1.5 text-sm text-[#475569] leading-relaxed">
                  <span className="font-semibold text-[#0F766E]">How we solve it: </span>
                  {solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsWeSolve;
