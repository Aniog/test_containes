import React from "react";
import {
  PlaneTakeoff,
  Lock,
  AlertTriangle,
  BadgeCheck,
  ShipWheel,
  Languages,
} from "lucide-react";
import { problems } from "@/data/site";

const iconMap = {
  PlaneTakeoff,
  Lock,
  AlertTriangle,
  BadgeCheck,
  ShipWheel,
  Languages,
};

const ProblemsSection = () => {
  return (
    <section className="section bg-surface-50">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Problems we solve</span>
          <h2
            id="problems-section-title"
            className="mt-3 text-[32px] font-bold leading-tight tracking-tight text-ink-900 md:text-[42px]"
          >
            The same six headaches our clients come to us with.
          </h2>
          <p
            id="problems-section-subtitle"
            className="mt-3 text-[15.5px] leading-relaxed text-ink-600"
          >
            We do not promise to make sourcing easy — it is genuinely hard.
            We do promise to put a calm, experienced team between you and
            the factory, so the work gets done and the surprises get
            smaller.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => {
            const Icon = iconMap[p.icon] || BadgeCheck;
            return (
              <article
                key={p.title}
                id={`problem-${i}-card`}
                className="card p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-ink-900/5 text-ink-700">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-[17.5px] font-semibold leading-snug text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">
                  {p.summary}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
