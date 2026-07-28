import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { FileText, Search, Boxes, ScanLine, PackageCheck, Ship } from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import strkImgConfig from "@/strk-img-config.json";

const STEPS = [
  {
    n: "01",
    icon: FileText,
    title: "Brief & Specs",
    detail:
      "You share product specs, target price, quantity, and timeline. We align on the sourcing plan.",
  },
  {
    n: "02",
    icon: Search,
    title: "Supplier Shortlist",
    detail:
      "We identify 3–5 vetted factories matching your product, capacity, certifications, and budget.",
  },
  {
    n: "03",
    icon: ScanLine,
    title: "Samples & Quotation",
    detail:
      "Samples are produced, photographed, and shipped to you. We lock pricing, MOQ, and lead time.",
  },
  {
    n: "04",
    icon: Boxes,
    title: "Production & QC",
    detail:
      "We monitor production, perform in-line and pre-shipment inspections, and share photo reports.",
  },
  {
    n: "05",
    icon: PackageCheck,
    title: "Packing & Documents",
    detail:
      "Carton marking, packaging, and export documents are prepared and approved before dispatch.",
  },
  {
    n: "06",
    icon: Ship,
    title: "Shipping & Delivery",
    detail:
      "We book cargo (FOB / CIF / DDP), share tracking, and follow up through to final delivery.",
  },
];

export default function Process() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <Section ref={ref} tone="soft" id="process">
      <div className="grid items-end gap-8 md:flex md:justify-between">
        <SectionHeader
          eyebrow="Sourcing process"
          title="A clear six-step path from brief to delivered goods"
          lead="You see the same milestones we do. Each step has a written deliverable, so the team, the supplier, and you are always on the same page."
        />
        <Button to="/how-it-works" variant="primary" size="md" className="hidden md:inline-flex">
          See full process
        </Button>
      </div>

      <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((s) => (
          <li
            key={s.n}
            className="group relative overflow-hidden rounded-lg border border-line bg-surface p-6 shadow-card"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sm font-bold text-white">
                {s.n}
              </span>
              <s.icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-primary">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {s.detail}
            </p>
            <span
              className="pointer-events-none absolute -right-2 -top-6 text-7xl font-bold text-primary-100/70 transition-colors group-hover:text-accent-100"
              aria-hidden="true"
            >
              {s.n}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-10 md:hidden">
        <Button to="/how-it-works" variant="primary" size="md">
          See full process
        </Button>
      </div>
    </Section>
  );
}
