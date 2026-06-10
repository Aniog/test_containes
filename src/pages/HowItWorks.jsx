import { useEffect, useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import CtaBanner from "../components/CtaBanner";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

const STEPS = [
  {
    step: "01",
    title: "Brief & scoping call",
    duration: "Day 1",
    desc: "A 30-minute call to understand your product, target price, MOQ, certifications, and timeline. We confirm scope and quote within 24 hours.",
    deliverables: ["Scoping notes", "Written proposal", "Fee agreement"],
  },
  {
    step: "02",
    title: "Supplier shortlist",
    duration: "Days 3-10",
    desc: "We screen 20-50 suppliers from our verified network and Chinese B2B platforms, then present 3-5 vetted candidates with quotes and capability profiles.",
    deliverables: ["Supplier comparison sheet", "Capability profiles", "Quotes in clean English"],
  },
  {
    step: "03",
    title: "Samples & negotiation",
    duration: "Days 10-25",
    desc: "We coordinate samples, photograph them, and document any spec deviations. In parallel we negotiate price, MOQ, and payment terms in Mandarin.",
    deliverables: ["Sample report with photos", "Negotiated quote", "Pro-forma invoice"],
  },
  {
    step: "04",
    title: "Order placement & deposit",
    duration: "Day 25",
    desc: "After your approval we place the order. We recommend milestone-based payments (e.g. 30% deposit / 40% mid-production / 30% before shipment).",
    deliverables: ["Final PO", "Payment schedule", "NNN agreement signed"],
  },
  {
    step: "05",
    title: "Production follow-up",
    duration: "Weeks 4-10",
    desc: "Weekly written reports with photos. Raw material checks before mass production. Mid-production milestone tracking against the agreed timeline.",
    deliverables: ["Weekly status reports", "Raw material check", "Mid-production check"],
  },
  {
    step: "06",
    title: "QC inspection",
    duration: "Before shipment",
    desc: "AQL-based inspection at the factory before goods leave. Detailed PDF report with defect rates, photos, and a clear pass / fail recommendation.",
    deliverables: ["Pre-shipment inspection report", "Photos and videos", "Pass / fail recommendation"],
  },
  {
    step: "07",
    title: "Shipping & customs",
    duration: "Variable",
    desc: "We compare freight forwarders, book the shipment, prepare customs documents, and consolidate cargo where it makes sense.",
    deliverables: ["Freight comparison", "Booking confirmation", "Customs documents"],
  },
  {
    step: "08",
    title: "Delivery & post-shipment",
    duration: "Final",
    desc: "Door-to-warehouse delivery with tracking. After delivery we run a short post-mortem and document what to repeat or change for the next order.",
    deliverables: ["Delivery confirmation", "Post-shipment review", "Reorder plan"],
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
        eyebrow="How it works"
        title="A clear, eight-step sourcing workflow"
        description="Every engagement follows the same transparent process, with written milestones at each stage. You always know what is happening, what is next, and where your money is sitting."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHeader>

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="space-y-6">
            {STEPS.map((s, i) => (
              <div
                key={s.step}
                className="grid gap-6 rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm md:grid-cols-12"
              >
                <div className="md:col-span-3">
                  <div className="text-sm font-semibold text-red-600">Step {s.step}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-slate-500">
                    {s.duration}
                  </div>
                </div>
                <div className="md:col-span-6">
                  <h2 className="text-xl font-semibold text-slate-900">{s.title}</h2>
                  <p className="mt-2 text-slate-600">{s.desc}</p>
                </div>
                <div className="md:col-span-3">
                  <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Deliverables
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-slate-50">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-6">
              <div className="eyebrow">Communication</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                One sourcing manager, one inbox
              </h2>
              <p className="mt-4 text-slate-600">
                You get a single English-speaking sourcing manager as your point of contact —
                not a rotating call centre. They handle factory communication, send weekly
                updates, and escalate to QC and logistics specialists internally on your behalf.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                {[
                  "Reply within one business day, China hours",
                  "Weekly written progress reports during production",
                  "Slack, WhatsApp, WeChat, or email — your preferred channel",
                  "Direct video tour of the factory floor on request",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm md:text-base">
                    <Check className="mt-0.5 h-5 w-5 flex-none text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                <div className="aspect-[4/3] bg-slate-100">
                  <img
                    alt="Sourcing manager reviewing production checklist on laptop"
                    data-strk-img-id="hiw-comms-photo-be72f0"
                    data-strk-img="[hiw-comms-caption]"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="1100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="border-t border-slate-200 bg-white p-5">
                  <p id="hiw-comms-caption" className="text-sm text-slate-600">
                    Sourcing manager preparing a weekly progress report
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};

export default HowItWorks;
