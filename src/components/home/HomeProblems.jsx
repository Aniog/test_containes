import { useRef } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StrkImage, useStrkImages } from "@/components/ui/StrkImage";
import {
  AlertTriangle,
  BadgeAlert,
  FileQuestion,
  Languages,
  Receipt,
  Clock4,
} from "lucide-react";

const problems = [
  {
    icon: BadgeAlert,
    title: "Unverified factories and trading middlemen",
    body:
      "Many 'factories' on Alibaba are trading companies. We trace the real manufacturer, run an on-site audit and confirm capability in writing.",
  },
  {
    icon: AlertTriangle,
    title: "Inconsistent product quality across batches",
    body:
      "Sample perfect, production different. We hold your spec in a shared QC checklist, run a mid-line DPI and a pre-shipment PSI before anything leaves.",
  },
  {
    icon: Languages,
    title: "Language, time-zone and cultural friction",
    body:
      "Bilingual project managers in China, English reporting cadence, and weekly calls aligned to your business hours. No more chasing WeChat messages.",
  },
  {
    icon: Clock4,
    title: "Production delays nobody tells you about",
    body:
      "We escalate delays early — within 48 hours of a slip — with a recovery plan, not at the moment the ship is due to leave.",
  },
  {
    icon: Receipt,
    title: "Hidden costs, surprise fees, opaque quotes",
    body:
      "Every quotation we deliver breaks down unit price, tooling, packaging, inspection and freight separately. What you see is what you pay.",
  },
  {
    icon: FileQuestion,
    title: "Export paperwork and customs confusion",
    body:
      "Commercial invoices, packing lists, certificates of origin, HS codes and product compliance — handled end-to-end with your broker.",
  },
];

export function HomeProblems() {
  const containerRef = useRef(null);
  useStrkImages(containerRef, []);

  return (
    <Section id="problems-we-solve" size="default" tone="mist">
      <div ref={containerRef} className="flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-brand-line bg-brand-mist">
              <StrkImage
                imgId="home-problems-hero-g7h8i9"
                query="[home-problems-eyebrow] [home-problems-title] procurement manager reviewing rejected product defects shipping container"
                ratio="4x5"
                width={900}
                alt="Procurement manager reviewing rejected product defects in a factory"
              />
            </div>
            <p
              id="home-problems-eyebrow"
              className="sr-only"
              aria-hidden="true"
            >
              Problems we solve
            </p>
            <p
              id="home-problems-title"
              className="sr-only"
              aria-hidden="true"
            >
              Common problems we solve for overseas buyers sourcing from China.
            </p>
          </div>
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Problems we solve"
              title="The headaches you avoid by working with us"
              description="Six of the most common issues overseas buyers face when sourcing from China — and what we do about each one."
            />
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((p) => {
                const Icon = p.icon;
                return (
                  <li
                    key={p.title}
                    className="flex flex-col rounded-xl border border-brand-line bg-white p-5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-red/10 text-brand-red">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-brand-navy">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-ink-muted">
                      {p.body}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
