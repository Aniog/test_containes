import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { FileText, Search, ShieldCheck, ClipboardCheck, Factory, Ship, ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: FileText,
    step: "01",
    title: "Send your requirements",
    desc: "Share your product spec, target unit price, expected order quantity, target shipment date, and any reference samples or photos.",
    bullets: [
      "Use our quote form, email, or WhatsApp.",
      "If you only have a rough idea, that is fine — we will help structure the brief.",
      "Confidential. We sign NDAs on request before sharing details with factories.",
    ],
  },
  {
    icon: Search,
    step: "02",
    title: "Supplier shortlist & quotes",
    desc: "We screen our vetted factory network plus targeted external sourcing, then negotiate price, MOQ, lead time, and payment terms.",
    bullets: [
      "Typical shortlist: 3–5 manufacturers with capacity for your volume.",
      "Side-by-side comparison: factory price, MOQ, lead time, payment terms.",
      "Clear notes on each supplier’s strengths and risks.",
    ],
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Samples & factory verification",
    desc: "Once a supplier looks promising, we order samples and run a factory verification visit before any large commitment.",
    bullets: [
      "Sample sourcing, English-labelled, consolidated to one shipment if needed.",
      "On-site verification: business license, production lines, workforce, equipment.",
      "Photo/video report and a go/no-go recommendation.",
    ],
  },
  {
    icon: Factory,
    step: "04",
    title: "Production follow-up",
    desc: "After PO and deposit, we follow production weekly, manage sample sign-off, and flag risks early so deadlines stay realistic.",
    bullets: [
      "Weekly progress reports with factory floor photos.",
      "Pre-production sample (PPS) and golden sample sign-off.",
      "Escalation when issues appear — not after the fact.",
    ],
  },
  {
    icon: ClipboardCheck,
    step: "05",
    title: "Quality inspection",
    desc: "AQL-based inspections at the stages that matter, with full English reports you can share with your team or customers.",
    bullets: [
      "Pre-production, in-line (DUPRO), and pre-shipment inspections.",
      "Defect classification: critical / major / minor with photos.",
      "Container loading supervision on request.",
    ],
  },
  {
    icon: Ship,
    step: "06",
    title: "Shipping & delivery",
    desc: "We coordinate freight, customs, and delivery, including FBA and 3PL prep where needed.",
    bullets: [
      "Consolidation across factories into one shipment.",
      "Sea FCL/LCL and air freight booking.",
      "Customs documentation, HS codes, and door-to-door coordination.",
    ],
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="How It Works"
        title="A documented, transparent sourcing workflow"
        description="No black boxes. You always know which factories we are talking to, which milestone we are on, and what the next decision point is."
        bgId="how-page-bg"
        bgQuery="[how-page-bg-title] [how-page-bg-desc]"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="relative border-l-2 border-slate-200 space-y-12">
            {STEPS.map(({ icon: Icon, step, title, desc, bullets }) => (
              <li key={step} className="pl-8 md:pl-12 relative">
                <span className="absolute -left-[15px] md:-left-[17px] flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-amber-500 text-slate-900 text-xs font-bold ring-4 ring-white">
                  {step}
                </span>
                <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-sky-50 text-sky-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-slate-900">{title}</h2>
                  </div>
                  <p className="mt-4 text-slate-600 leading-relaxed">{desc}</p>
                  <ul className="mt-4 space-y-2">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="w-4 h-4 mt-1 text-amber-500 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
              Indicative Timeline
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              What a typical project looks like
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Numbers vary by category and complexity. This is a realistic
              baseline for a standard consumer goods order.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              { range: "Days 1–5", title: "Brief & quote", desc: "Requirements, supplier shortlist, indicative pricing." },
              { range: "Weeks 1–3", title: "Samples & verification", desc: "Sample rounds, factory audit, supplier choice." },
              { range: "Weeks 3–9", title: "Production", desc: "Deposit, raw materials, production, weekly reports." },
              { range: "Weeks 9–12", title: "QC & shipping", desc: "Pre-shipment QC, balance payment, freight, delivery." },
            ].map((p) => (
              <div key={p.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-600">{p.range}</div>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
