import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import {
  ShieldCheck,
  FileCheck2,
  Languages,
  Lock,
  Users,
  Headphones,
} from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/Section";
import strkImgConfig from "@/strk-img-config.json";

const POINTS = [
  {
    icon: ShieldCheck,
    title: "On-site factory audits",
    detail:
      "Every shortlisted supplier is visited by our local team. License, equipment, workforce, and export history are checked in person.",
  },
  {
    icon: FileCheck2,
    title: "Written reports at every milestone",
    detail:
      "You receive sample reports, in-line updates, and a photo-rich pre-shipment inspection report before balance payment.",
  },
  {
    icon: Languages,
    title: "Multilingual team",
    detail:
      "Native English, Mandarin, and Spanish speakers handle your case. We translate technical detail and cultural nuance both ways.",
  },
  {
    icon: Users,
    title: "Dedicated sourcing specialist",
    detail:
      "One person owns your project end-to-end. You do not chase agents between departments or get inconsistent answers.",
  },
  {
    icon: Lock,
    title: "NDA & supplier confidentiality",
    detail:
      "We sign NDAs before sharing drawings or product details with factories. Your designs and customer data stay protected.",
  },
  {
    icon: Headphones,
    title: "Replies within one business day",
    detail:
      "A clear SLA on communication. Time-zone friendly coverage between Asia, Europe, and the Americas.",
  },
];

export default function Trust() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <Section ref={ref} tone="surface" id="trust">
      <div className="grid items-end gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="Why buyers trust us"
            title="Process, transparency, and people you can actually reach"
            lead="We are not a marketplace or a call center. We are a small, senior team in Shenzhen and Yiwu who handle your orders ourselves."
          />
        </div>
        <div className="hidden overflow-hidden rounded-lg border border-line bg-surface shadow-card lg:col-span-5 lg:block">
          <img
            alt="Sourcing specialist reviewing supplier documents in a Chinese office"
            className="aspect-[4/3] w-full object-cover"
            data-strk-img-id="trust-image-9e3c1d"
            data-strk-img="[trust-section-subtitle] [trust-section-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
          />
        </div>
      </div>
      <h3 id="trust-section-title" className="sr-only">
        Why buyers trust SSourcing China
      </h3>
      <p id="trust-section-subtitle" className="sr-only">
        On-site factory audits, written reports, multilingual team, dedicated specialists, NDA protection, and one-business-day replies.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {POINTS.map((p) => (
          <div
            key={p.title}
            className="rounded-lg border border-line bg-surface p-6 shadow-card"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white">
              <p.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-primary">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {p.detail}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
