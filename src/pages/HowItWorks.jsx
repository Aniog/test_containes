import { useEffect, useRef } from "react";
import {
  FileText,
  Search,
  ShieldCheck,
  ClipboardCheck,
  Eye,
  Ship,
} from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHeader from "../components/shared/PageHeader";
import CTASection from "../components/shared/CTASection";

const steps = [
  {
    no: "01",
    icon: FileText,
    title: "Share your requirements",
    desc: "You send us product specs, target unit price, target quantity, packaging needs and any reference samples or photos. The more detail you share, the more accurate our supplier shortlist will be.",
    deliverables: ["Requirement summary", "Clarifying questions within 1 business day"],
    timing: "Day 0",
    imgId: "how-step-01-7c4e1f",
  },
  {
    no: "02",
    icon: Search,
    title: "Supplier shortlist",
    desc: "We identify candidate manufacturers from our network and from targeted searches, request quotes, and consolidate them into a comparable side-by-side overview.",
    deliverables: ["3-5 verified supplier options", "Price, MOQ and lead time comparison"],
    timing: "Day 3-5",
    imgId: "how-step-02-2b3a9d",
  },
  {
    no: "03",
    icon: ShieldCheck,
    title: "Factory verification & samples",
    desc: "Before any deposit, we audit the selected factory on-site and order samples. You only proceed once you have approved a physical sample and the audit findings.",
    deliverables: ["Factory audit report", "Approved pre-production sample"],
    timing: "Day 7-15",
    imgId: "how-step-03-8e21fc",
  },
  {
    no: "04",
    icon: ClipboardCheck,
    title: "Production follow-up",
    desc: "Once the deposit is sent, we visit or call the factory regularly to confirm material readiness, production schedule and any quality risk. You receive structured weekly updates.",
    deliverables: ["Weekly production status report", "Photo and video updates"],
    timing: "During production",
    imgId: "how-step-04-5db7a2",
  },
  {
    no: "05",
    icon: Eye,
    title: "Quality inspection",
    desc: "Before final payment we run an on-site inspection using AQL sampling. You receive a detailed report and decide whether to release the balance, request rework or hold the shipment.",
    deliverables: ["AQL inspection report", "Defect photos and measurements"],
    timing: "Before balance payment",
    imgId: "how-step-05-1a93de",
  },
  {
    no: "06",
    icon: Ship,
    title: "Shipping & delivery",
    desc: "We coordinate booking, consolidation, export documents and freight. For Amazon sellers, we handle FNSKU labeling and direct shipment to FBA.",
    deliverables: ["Export documents", "Shipment tracking to destination"],
    timing: "Production + shipping lead time",
    imgId: "how-step-06-4f80ab",
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="How It Works"
        title="A six-step process from inquiry to delivered goods"
        description="We follow the same workflow on every order so you know exactly what happens, who is responsible, and what you will receive at each stage."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => {
              const reverse = idx % 2 === 1;
              const Icon = step.icon;
              return (
                <div
                  key={step.no}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    reverse ? "lg:[&>:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-[#0B2545] text-white">
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="text-3xl font-bold text-[#1F4E79]/30">{step.no}</span>
                    </div>
                    <h2
                      id={`how-step-${step.no}-title`}
                      className="text-2xl md:text-3xl font-bold text-[#0B2545] tracking-tight"
                    >
                      {step.title}
                    </h2>
                    <p
                      id={`how-step-${step.no}-desc`}
                      className="mt-3 text-[#475569] text-base md:text-lg leading-relaxed"
                    >
                      {step.desc}
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-md border border-[#D9E2EC] bg-[#EEF2F7] p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#1F4E79]">
                          You receive
                        </p>
                        <ul className="mt-2 text-sm text-[#0B2545] space-y-1">
                          {step.deliverables.map((d) => (
                            <li key={d}>• {d}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-md border border-[#D9E2EC] bg-[#EEF2F7] p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#1F4E79]">
                          Typical timing
                        </p>
                        <p className="mt-2 text-sm text-[#0B2545]">{step.timing}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-[#D9E2EC] aspect-[4/3] bg-[#EEF2F7]">
                    <img
                      alt={step.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[how-step-${step.no}-desc] [how-step-${step.no}-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Start your sourcing project this week"
        description="Send us your product brief and we will reply with the first set of clarifying questions and an indicative timeline within one business day."
      />
    </div>
  );
};

export default HowItWorks;
