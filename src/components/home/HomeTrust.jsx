import { useRef } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StrkImage, useStrkImages } from "@/components/ui/StrkImage";
import { ShieldCheck, Scale, Eye, Lock, Languages, Wallet } from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Independent — we never take supplier commissions",
    body:
      "Our only revenue is your service fee. We never accept commissions, kickbacks or gifts from factories. Our recommendation is the one you can put in front of your board.",
  },
  {
    icon: Scale,
    title: "Transparent flat-fee pricing",
    body:
      "Quotations list exactly what is included — visit days, deliverables, report turnaround — so you can compare offers like-for-like.",
  },
  {
    icon: Eye,
    title: "Photo and video evidence in every report",
    body:
      "Every audit, inspection and production report is backed by timestamped photos and, where relevant, short video clips. You see what we saw.",
  },
  {
    icon: Lock,
    title: "NDAs and buyer-side confidentiality",
    body:
      "We sign NDAs in both directions. Supplier identities, pricing and product specifications are never shared with competing buyers or unrelated factories.",
  },
  {
    icon: Languages,
    title: "Bilingual project managers on every project",
    body:
      "You communicate with a native-English project manager who works directly with a Mandarin-speaking sourcing specialist in China. Nothing lost in translation.",
  },
  {
    icon: Wallet,
    title: "Payments held in escrow-style milestones",
    body:
      "For supplier sourcing projects we structure payments against clear milestones (samples, DPI passed, PSI passed, B/L copy) so your money follows the result.",
  },
];

export function HomeTrust() {
  const containerRef = useRef(null);
  useStrkImages(containerRef, []);

  return (
    <Section id="trust-points" size="default" tone="navy">
      <div ref={containerRef} className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="Why buyers trust us"
          title="Six principles that govern every project"
          description="These are the rules our team operates by. They are the reason buyers come back — and the reason suppliers know where they stand."
          invert
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {trustPoints.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="flex flex-col h-full rounded-xl border border-white/15 bg-white/[0.04] p-6 md:p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-red/15 text-brand-red">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.16em] text-white/60">
                    Principle {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  id={`home-trust-${idx}-title`}
                  className="mt-5 text-lg font-semibold text-white"
                >
                  {t.title}
                </h3>
                <p
                  id={`home-trust-${idx}-body`}
                  className="mt-2 text-sm leading-relaxed text-white/75"
                >
                  {t.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
