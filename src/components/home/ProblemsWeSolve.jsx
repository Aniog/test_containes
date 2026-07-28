import {
  AlertTriangle,
  Languages,
  BadgeAlert,
  Hourglass,
  Receipt,
  Eye,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const problems = [
  {
    icon: BadgeAlert,
    title: "Unverified factories",
    text: "Alibaba listings and trade-show leads aren't enough. We visit the site, check the license, and confirm production capacity before you wire a deposit.",
  },
  {
    icon: AlertTriangle,
    title: "Surprise quality issues",
    text: "Defects found in your warehouse cost 5–10× more than defects caught at the factory. We inspect at the right milestones so surprises don't show up on arrival.",
  },
  {
    icon: Languages,
    title: "Language and time-zone friction",
    text: "We work in your time zone in the morning and the factory's time zone in the afternoon. Bilingual contracts, daily standups, and one accountable point of contact.",
  },
  {
    icon: Hourglass,
    title: "Missed lead times",
    text: "Production slips for many reasons. We track milestones in writing and escalate on the ground when the schedule is at risk, not after the ship date has passed.",
  },
  {
    icon: Receipt,
    title: "Hidden costs in the quote",
    text: "We push for transparent breakdowns — material, labor, tooling, packaging, surface finish — so you can compare factories on the same basis.",
  },
  {
    icon: Eye,
    title: "No visibility once you leave",
    text: "Once the PO is signed, most buyers stop hearing from the factory. We send weekly photo and video updates from the production line until the goods are loaded.",
  },
];

export default function ProblemsWeSolve() {
  return (
    <section className="py-16 md:py-24 bg-brand-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-500">
            Problems we solve
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
            The reasons overseas buyers lose money on China sourcing
          </h2>
          <p className="mt-4 text-lg text-white/80 leading-relaxed">
            These are the issues we hear about most often from first-time
            buyers and from teams scaling up. Every one of them is preventable
            with the right person on the ground.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-accent-500/40 transition"
            >
              <div className="w-11 h-11 rounded-md bg-accent-600/20 text-accent-500 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
