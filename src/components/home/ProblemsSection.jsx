import { AlertTriangle, TrendingUp, Clock, DollarSign, Users, Shield } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    problem: "Unreliable suppliers",
    solution:
      "We pre-vet all factories through on-site audits before introducing them to you.",
    color: "text-red-600",
  },
  {
    icon: TrendingUp,
    problem: "Inconsistent product quality",
    solution:
      "Our QC team conducts inspections at every stage to ensure your specifications are met.",
    color: "text-orange-600",
  },
  {
    icon: Clock,
    problem: "Missed production deadlines",
    solution:
      "We track production milestones daily and provide real-time updates.",
    color: "text-amber-600",
  },
  {
    icon: DollarSign,
    problem: "Hidden costs & markups",
    solution:
      "Transparent pricing with no hidden fees. We negotiate the best factory pricing for you.",
    color: "text-emerald-600",
  },
  {
    icon: Users,
    problem: "Language & cultural barriers",
    solution:
      "Our bilingual team handles all communication with suppliers on your behalf.",
    color: "text-blue-600",
  },
  {
    icon: Shield,
    problem: "Fraud & counterfeit risks",
    solution:
      "We verify business licenses, certifications, and factory legitimacy before engagement.",
    color: "text-violet-600",
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Problems We Solve for You
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sourcing from China comes with challenges. Here&apos;s how we
            eliminate the risks.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.problem}
                className="rounded-xl border bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <Icon className={`h-5 w-5 shrink-0 ${item.color}`} />
                  <h3 className="text-base font-semibold">{item.problem}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.solution}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}