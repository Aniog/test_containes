import { useEffect, useRef } from "react";
import { XCircle, CheckCircle2 } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SectionHeader from "@/components/shared/SectionHeader.jsx";

const PROBLEMS = [
  {
    problem: "I can't tell if a supplier is real or just a trading company.",
    solution: "We visit factories in person, check business licenses, export records, and production lines — then send you a clear verification report.",
  },
  {
    problem: "My last order had quality issues I only noticed after shipping.",
    solution: "Our inspectors check goods during and after production using AQL sampling, with photos, videos, and measurable defect rates.",
  },
  {
    problem: "Suppliers stop responding once the deposit is paid.",
    solution: "We stay in the loop with weekly updates, milestone photos, and direct escalation paths when production slips behind schedule.",
  },
  {
    problem: "Shipping, customs, and documents feel overwhelming.",
    solution: "We consolidate, pack, label, and prepare export paperwork — then book FOB, CIF, or DDP shipping that fits your timeline.",
  },
];

export default function ProblemsWeSolve() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section bg-[#F6F1EA] border-y border-[#E5E1D8]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Problems We Solve"
              title="Sourcing from China shouldn't feel risky"
              subtitle="We built SSourcing China to remove the most common pain points international buyers face — by being physically present on the ground, in your time zone, with one accountable contact."
            />
            <div className="mt-8 overflow-hidden rounded-xl border border-[#E5E1D8] shadow-sm">
              <img
                alt="Sourcing manager meeting with a Chinese factory representative in a production facility"
                data-strk-img-id="problems-factory-meeting-2f7b91"
                data-strk-img="[problems-section-subtitle] [problems-section-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-[280px] object-cover"
              />
            </div>
            <p id="problems-section-title" className="sr-only">Sourcing from China shouldn't feel risky</p>
            <p id="problems-section-subtitle" className="sr-only">We solve the most common pain points for international buyers sourcing from China factories.</p>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-5">
              {PROBLEMS.map((p) => (
                <article key={p.problem} className="card p-6 md:p-7">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B44A33]/10 text-[#B44A33]">
                      <XCircle className="h-4 w-4" />
                    </span>
                    <p className="text-[15.5px] font-semibold text-[#0F172A] leading-snug">{p.problem}</p>
                  </div>
                  <div className="mt-4 flex items-start gap-3 pl-10">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0E2A47]/10 text-[#0E2A47]">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <p className="text-[14.5px] text-[#475569] leading-relaxed">{p.solution}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}