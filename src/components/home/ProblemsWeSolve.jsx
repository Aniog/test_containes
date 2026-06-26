import { CheckCircle2 } from "lucide-react";

export function ProblemsWeSolve() {
  const problems = [
    {
      problem: "Communication Barriers",
      solution: "Our bilingual team ensures your requirements are understood perfectly with zero loss in translation."
    },
    {
      problem: "Scams & Fake Factories",
      solution: "We perform strict background checks and on-site visits to ensure you strictly deal with real, capable manufacturers."
    },
    {
      problem: "Poor Quality Products",
      solution: "We implement rigorous AQL quality control inspections before you pay the final balance."
    },
    {
      problem: "Delayed Shipments",
      solution: "Our active production follow-up forces factories to stick to timelines, mitigating costly delays."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="problems-title" className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Common Sourcing Problems We Solve</h2>
            <p id="problems-desc" className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
              Importing from China can be risky and stressful. We mitigate these risks by functioning as your eyes and ears on the ground.
            </p>
            <div className="space-y-6">
              {problems.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-white mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">{item.problem}</h3>
                    <p className="text-primary-foreground/80">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              alt="Team discussing manufacturing plan"
              className="rounded-xl shadow-2xl object-cover"
              data-strk-img-id="problems-img-f9a1"
              data-strk-img="business team discussion factory office [problems-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
