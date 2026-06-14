import {
  Cog,
  ShieldCheck,
  Monitor,
  Globe2,
  Lock,
  Leaf,
} from "lucide-react";
import { capabilities } from "@/lib/content";

const iconMap = {
  Cog,
  ShieldCheck,
  Monitor,
  Globe2,
  Lock,
  Leaf,
};

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative bg-steel-deep grain text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <p id="capabilities-eyebrow" className="eyebrow text-bronze-light mb-4">
              Capabilities
            </p>
            <h2
              id="capabilities-title"
              className="font-display text-4xl md:text-5xl text-white leading-tight"
            >
              Built for fabricators
              <span className="block italic text-bronze-light">who measure in microns.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p
              id="capabilities-subtitle"
              className="text-white/70 text-base md:text-lg leading-relaxed"
            >
              Every ARTITECT machine is engineered around six non-negotiable
              capabilities. They are what our customers rely on — and what our
              competitors keep trying to copy.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {capabilities.map((c, idx) => {
            const Icon = iconMap[c.icon] ?? Cog;
            return (
              <article
                key={c.id}
                className="bg-steel-deep p-8 md:p-10 group hover:bg-steel-mid transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="grid place-items-center w-12 h-12 border border-bronze/40 text-bronze-light group-hover:border-bronze-light group-hover:text-bronze-light transition-colors">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <span className="text-[11px] uppercase tracking-eyebrow text-white/40 tabular-nums">
                    {String(idx + 1).padStart(2, "0")} / {String(capabilities.length).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-white mb-3">
                  {c.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-[15px]">
                  {c.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
