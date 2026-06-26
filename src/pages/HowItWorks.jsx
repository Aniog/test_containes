import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, FileText, MessageSquare, Truck } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import { PROCESS_STEPS, FAQS } from "@/lib/site-data";
import PageHero from "@/components/site/PageHero";
import SectionHeader from "@/components/site/SectionHeader";
import FaqList from "@/components/site/FaqList";

export default function HowItWorks() {
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="How It Works"
        title="A clear, predictable sourcing process"
        description="From your first inquiry to delivered goods, we follow a structured process so you always know what we are doing on the ground in China."
        titleId="how-page-title"
        descId="how-page-desc"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The 7-Step Process"
            title="From inquiry to delivery"
            description="Each project is run by a single sourcing manager who is your point of contact at every stage."
            align="center"
          />
          <div className="mt-12 space-y-5">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.n}
                className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8 rounded-xl border border-slate-200 bg-white p-6 md:p-8"
              >
                <div className="flex items-center gap-4 md:w-72 flex-shrink-0">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-navy-700 text-white font-bold text-lg">
                    {step.n}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-navy-900">
                    {step.title}
                  </h3>
                </div>
                <div className="flex-1 md:border-l md:border-slate-200 md:pl-8">
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What you get"
            title="Deliverables at each stage"
            description="We work with documents and reports, not vague verbal updates."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                icon: FileText,
                title: "Documents you can act on",
                items: [
                  "Supplier comparison sheet (3–5 vetted options)",
                  "Bilingual PI and contract",
                  "Pre-shipment QC inspection reports",
                  "Export documents (CI, PL, BL/AWB)",
                ],
              },
              {
                icon: MessageSquare,
                title: "Communication you can rely on",
                items: [
                  "Single sourcing manager per project",
                  "Email, WhatsApp or WeChat",
                  "Weekly production updates",
                  "Same-day response on working days",
                ],
              },
              {
                icon: Truck,
                title: "Goods delivered on time",
                items: [
                  "Loading supervision",
                  "FOB / CIF / DDP options",
                  "Sea, air and rail",
                  "Amazon FBA-ready shipments",
                ],
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">{b.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {b.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Process FAQ"
            title="Questions about how we work"
            align="center"
          />
          <div className="mt-10">
            <FaqList items={FAQS} />
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3.5 transition"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
