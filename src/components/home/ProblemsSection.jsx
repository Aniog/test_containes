import { AlertTriangle, XCircle, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const problems = [
  "Hard to find reliable suppliers online",
  "Uncertainty about factory legitimacy",
  "Quality issues discovered too late",
  "Production delays and poor communication",
  "Confusing shipping and customs process"
];

const solutions = [
  "On-the-ground supplier research and verification",
  "License checks, audits, and capability assessments",
  "Inline, pre-shipment, and loading inspections",
  "Dedicated follow-up with regular status updates",
  "Freight coordination and documentation support"
];

export function ProblemsSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white">
      <Container>
        <SectionHeading
          label="Problems We Solve"
          title="Reduce the risks of sourcing from China"
          description="Buying from China can be complex. We help you avoid common pitfalls and build a more reliable supply chain."
          className="[&_h2]:text-white [&_p]:text-slate-300"
        />

        <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 text-red-400" />
              <h3 className="text-xl font-bold text-white">Common sourcing risks</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3 text-slate-300">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  {problem}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-900/30 rounded-xl p-8 border border-blue-800/50">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-6 h-6 text-teal-400" />
              <h3 className="text-xl font-bold text-white">How we help</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-start gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
