import {
  Search,
  FileText,
  Handshake,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import CTA from "@/components/shared/CTA";
import InquiryForm from "@/components/shared/InquiryForm";
import { PROCESS_STEPS } from "@/data/site";

const STAGE_ICONS = [
  Search,
  FileText,
  Handshake,
  PackageCheck,
  ShieldCheck,
  Truck,
];

export default function HowItWorks() {
  return (
    <>
      <section className="border-b border-ink-200 bg-ink-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How it works"
            title="A clear, six-step process from inquiry to delivery"
            description="Every project follows the same milestones so you know exactly what is happening, when, and who is responsible."
          />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ol className="relative space-y-12">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = STAGE_ICONS[idx] || Search;
              return (
                <li key={step.n} className="relative">
                  {idx < PROCESS_STEPS.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-7 top-16 h-[calc(100%+1.5rem)] w-px bg-ink-200 lg:left-8"
                    />
                  )}
                  <div className="flex gap-5 sm:gap-7">
                    <div className="flex flex-col items-center">
                      <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-900 text-white shadow-sm lg:h-16 lg:w-16">
                        <Icon className="h-6 w-6 lg:h-7 lg:w-7" />
                      </span>
                      <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-accent-700">
                        Step {step.n}
                      </span>
                    </div>
                    <div className="flex-1 rounded-2xl border border-ink-200 bg-white p-6 sm:p-7">
                      <h3 className="text-lg font-semibold text-brand-900 sm:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Timing"
            title="What a typical project timeline looks like"
            description="Actual durations depend on product complexity, factory capacity, and shipping mode. The ranges below are what most clients experience."
          />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Timing label="Supplier shortlist" value="5–10 days" />
            <Timing label="Sampling" value="1–3 weeks" />
            <Timing label="Bulk production" value="25–60 days" />
            <Timing label="Shipping" value="15–45 days" />
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-20 lg:py-28" id="start">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-5">
            <SectionHeader
              variant="dark"
              eyebrow="Get started"
              title="Step 1: send us your project brief"
              description="The more detail you share, the faster we can put together a useful response. Even a short message is enough to start."
            />
            <ul className="mt-8 space-y-3 text-sm text-ink-200">
              {[
                "Product type and key specs",
                "Target quantity and timeline",
                "Quality standards and required certifications",
                "Destination country and preferred shipping mode",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink-700 bg-white p-6 shadow-xl sm:p-8">
              <InquiryForm sourcePage="how-it-works" />
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Have questions about the process?"
        description="Book a 20-minute call with a sourcing manager to discuss your project and how the process would apply to your specific case."
        primary={{ to: "/contact", label: "Book a Call" }}
        secondary={{ to: "/services", label: "See services" }}
      />
    </>
  );
}

function Timing({ label, value }) {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-6">
      <p className="text-sm font-medium text-ink-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-brand-900">{value}</p>
    </div>
  );
}