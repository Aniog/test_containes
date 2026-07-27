import { useEffect, useRef } from "react";
import { ArrowRight, MessageSquare, FileText, Truck, ClipboardCheck, PackageCheck } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

import PageHero from "@/components/layout/PageHero";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import InquiryForm from "@/components/sections/InquiryForm";
import { PROCESS_STEPS } from "@/data/site";

const DELIVERABLES = [
  { icon: MessageSquare, label: "Bilingual email & WeChat communication" },
  { icon: FileText, label: "Written quotations and supplier profiles" },
  { icon: ClipboardCheck, label: "Photo / video QC reports within 24 hours" },
  { icon: PackageCheck, label: "Consolidated packing list & commercial invoice" },
  { icon: Truck, label: "Freight booking & customs paperwork" },
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="How it works"
        title="A clear, written process from your first email to the final delivery"
        description="Most buyers want to know what happens after they press 'send' on an inquiry. Here is exactly what to expect when you work with SSourcing China."
        breadcrumb={[{ label: "How It Works" }]}
      />

      <Section bg="white">
        <SectionHeader
          eyebrow="The 5 steps"
          title="From inquiry to delivery"
          description="Each step has a clear deliverable. You can join calls, request changes, or hand the whole process to us — whatever fits your team."
        />
        <div className="mt-10 space-y-5">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.n}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 rounded-lg border border-ink-200 bg-white p-6 md:p-7 shadow-card"
            >
              <div className="md:col-span-3 flex md:flex-col gap-4 md:gap-2 items-start">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-600 text-white text-lg font-bold">
                  {step.n}
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    Step {i + 1}
                  </div>
                </div>
              </div>
              <div className="md:col-span-9">
                <h3
                  id={`how-step-${i}-title`}
                  className="text-xl font-bold text-ink-900"
                >
                  {step.title}
                </h3>
                <p
                  id={`how-step-${i}-desc`}
                  className="mt-2 text-ink-600 leading-relaxed"
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="ink">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <h2
              id="how-timeline-title"
              className="text-3xl md:text-4xl font-bold text-white leading-tight balance"
            >
              Typical timelines
            </h2>
            <p id="how-timeline-sub" className="mt-3 text-ink-300">
              Realistic lead times, not the best-case ones.
            </p>
            <ul className="mt-6 space-y-3 text-ink-200">
              <li className="flex items-center justify-between border-b border-ink-700 pb-2">
                <span>First reply to your inquiry</span>
                <span className="font-semibold text-white">1 business day</span>
              </li>
              <li className="flex items-center justify-between border-b border-ink-700 pb-2">
                <span>Supplier shortlist + first quotations</span>
                <span className="font-semibold text-white">3–5 days</span>
              </li>
              <li className="flex items-center justify-between border-b border-ink-700 pb-2">
                <span>Sample collection (most products)</span>
                <span className="font-semibold text-white">7–14 days</span>
              </li>
              <li className="flex items-center justify-between border-b border-ink-700 pb-2">
                <span>Production (after PO)</span>
                <span className="font-semibold text-white">25–45 days</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sea freight to most destinations</span>
                <span className="font-semibold text-white">15–35 days</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-lg overflow-hidden border border-ink-700 shadow-card">
              <img
                alt="Cargo containers at a Chinese port being prepared for export"
                data-strk-img-id="how-timeline-img-2c4a8e"
                data-strk-img="[how-timeline-sub] [how-timeline-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-72 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section bg="white">
        <SectionHeader
          eyebrow="What you'll receive"
          title="Documents and updates you can hand to anyone on your team"
          description="Every step closes with something tangible — so you can share progress with stakeholders, accountants, or your own customers without a phone call."
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DELIVERABLES.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={i}
                className="rounded-lg border border-ink-200 bg-white p-5 flex items-start gap-3"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </div>
                <p
                  id={`how-deliverable-${i}-label`}
                  className="text-[15px] text-ink-800"
                >
                  {d.label}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section bg="brandSoft">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2
              id="how-cta-title"
              className="text-3xl md:text-4xl font-bold text-ink-900 leading-tight balance"
            >
              Start with a short inquiry
            </h2>
            <p id="how-cta-sub" className="mt-3 text-ink-700">
              The more we know up front, the more accurate the first quote.
              Reference images, drawings, and your target price are all useful.
            </p>
            <div className="mt-6">
              <Button as="link" to="/contact" icon={ArrowRight}>
                Send an inquiry
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm compact />
          </div>
        </div>
      </Section>
    </div>
  );
}
