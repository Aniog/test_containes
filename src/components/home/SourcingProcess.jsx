import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import {
  ClipboardList,
  Search,
  FileSignature,
  ShieldCheck,
  PackageCheck,
  Ship,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import strkImgConfig from "@/strk-img-config.json";

const steps = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Brief & specification",
    text: "You send a short brief: product, target market, quantity, quality requirements, and timing. We confirm scope and quote our service fee.",
    imgId: "step-brief-3a91ce",
    imgQuery: "[step-brief-title] [home-process-eyebrow] [home-process-title]",
    alt: "Buyer writing product specification with laptop",
  },
  {
    n: "02",
    icon: Search,
    title: "Supplier shortlist",
    text: "We search our database of 1,200+ pre-screened factories and reach out to 3–5 that match your product, MOQ, and budget.",
    imgId: "step-search-7d22f0",
    imgQuery: "[step-search-title] [home-process-eyebrow] [home-process-title]",
    alt: "Sourcing manager comparing supplier profiles",
  },
  {
    n: "03",
    icon: ShieldCheck,
    title: "Verification & sampling",
    text: "We audit the top candidates, request samples, and run pricing breakdowns so you can compare on more than just unit cost.",
    imgId: "step-verify-5b8e1c",
    imgQuery: "[step-verify-title] [home-process-eyebrow] [home-process-title]",
    alt: "Sample products and factory audit documents",
  },
  {
    n: "04",
    icon: FileSignature,
    title: "Negotiation & PO",
    text: "We help you negotiate terms, sign a clear purchase order, and arrange the deposit with the chosen factory.",
    imgId: "step-po-1f24ab",
    imgQuery: "[step-po-title] [home-process-eyebrow] [home-process-title]",
    alt: "Signed purchase order on factory desk",
  },
  {
    n: "05",
    icon: PackageCheck,
    title: "Production & QC",
    text: "Weekly updates plus AQL-based inspections at the right milestones. Defects caught early, not on arrival.",
    imgId: "step-qc-c901d2",
    imgQuery: "[step-qc-title] [home-process-eyebrow] [home-process-title]",
    alt: "Quality inspector checking finished goods with checklist",
  },
  {
    n: "06",
    icon: Ship,
    title: "Shipping & delivery",
    text: "We book the freight, prepare export documents, and arrange delivery to your warehouse or to a 3PL of your choice.",
    imgId: "step-ship-29ae7f",
    imgQuery: "[step-ship-title] [home-process-eyebrow] [home-process-title]",
    alt: "Shipping container being loaded at port",
  },
];

export default function SourcingProcess() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sourcing process"
          title={<span id="home-process-title">A practical 6-step workflow</span>}
          description="No black boxes. You'll know what we're doing, what the factory is doing, and what's coming next — at every step."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ n, icon: Icon, title, text, imgId, imgQuery, alt }) => (
            <div
              key={n}
              className="relative bg-canvas border border-ink-200 rounded-lg p-6 hover:border-brand-100 hover:bg-white transition"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-md bg-brand-800 text-white flex items-center justify-center text-sm font-bold">
                  {n}
                </div>
                <Icon className="w-5 h-5 text-ink-500" />
              </div>
              <div className="mt-4 aspect-[16/9] bg-ink-100 rounded-md overflow-hidden">
                <img
                  alt={alt}
                  data-strk-img-id={imgId}
                  data-strk-img={imgQuery}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                id={`step-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title`}
                className="mt-4 text-lg font-semibold text-ink-900"
              >
                {title}
              </h3>
              <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-md transition shadow-sm"
          >
            See the full process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
