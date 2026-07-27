import { XCircle, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import StockImage from "@/components/shared/StockImage";

const problems = [
  { issue: "Unverified suppliers and fake factory profiles", solution: "On-site verification, license checks, and audit reports." },
  { issue: "Poor communication and slow response times", solution: "Bilingual project managers based in China." },
  { issue: "Inconsistent product quality", solution: "Structured QC inspections at every production stage." },
  { issue: "Missed deadlines and unclear timelines", solution: "Weekly production updates and milestone tracking." },
  { issue: "Complex shipping and customs paperwork", solution: "End-to-end logistics coordination and documentation support." },
];

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Problems We Solve"
          title="Buying from China should not feel risky"
          description="We address the most common challenges overseas buyers face when sourcing from Chinese suppliers."
          align="left"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            {problems.map((item, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                <div className="flex items-start gap-3 mb-2">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="font-medium text-slate-200">{item.issue}</p>
                </div>
                <div className="flex items-start gap-3 pl-8">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-400 text-sm">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-700">
            <StockImage
              id="problems-solved-img-8c5d2e"
              query="[problems-section-desc] [problems-section-title]"
              ratio="4x3"
              width="800"
              alt="Solving sourcing challenges"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
