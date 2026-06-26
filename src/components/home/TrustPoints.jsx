import {
  BadgeCheck,
  Users,
  ClipboardList,
  Lock,
  Globe2,
  Headphones,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { TRUST_POINTS } from "@/data/site";

const ICONS = {
  BadgeCheck,
  Users,
  ClipboardList,
  Lock,
  Globe2,
  Headphones,
};

export default function TrustPoints() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why buyers stay with us"
          title="Practical safeguards, not exaggerated claims"
          description="We focus on clear communication, written standards, and verifiable processes — the things that actually reduce risk when sourcing from China."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_POINTS.map((point) => {
            const Icon = ICONS[point.icon] || BadgeCheck;
            return (
              <div
                key={point.title}
                className="flex gap-4 rounded-2xl border border-ink-200 bg-white p-6"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-900 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-brand-900">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                    {point.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}