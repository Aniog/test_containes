import SectionHeader from "@/components/shared/SectionHeader";
import { XCircle, CheckCircle } from "lucide-react";

const problems = [
  { issue: "Suppliers look professional online but fail to deliver.", solution: "We verify factory capabilities before you commit." },
  { issue: "Quality problems discovered only after shipment arrives.", solution: "Inspections at pre-production, in-process, and pre-shipment stages." },
  { issue: "Communication gaps cause delays and misunderstandings.", solution: "Local bilingual team manages day-to-day communication." },
  { issue: "Hidden costs inflate your landed price.", solution: "Transparent quoting and cost breakdowns from the start." },
  { issue: "Unclear production status leaves you guessing.", solution: "Regular follow-up reports with photos and milestone updates." },
];

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why Buyers Choose Us"
          title="Solving Common Sourcing Problems"
          description="Buying from China should not feel like a gamble. We address the risks that overseas buyers face most often."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            {problems.map((item, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-start gap-4 mb-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-200 font-medium">{item.issue}</p>
                </div>
                <div className="flex items-start gap-4 pl-9">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-400 text-sm">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="problems-img"
                data-strk-img="[problems-title] [problems-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality control inspector checking product packaging in Chinese factory"
                className="w-full h-auto object-cover"
              />
            </div>
            <h2 id="problems-title" className="sr-only">Sourcing Problems We Solve</h2>
            <p id="problems-subtitle" className="sr-only">We help overseas buyers avoid unreliable suppliers, quality issues, communication gaps, hidden costs, and production delays.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
