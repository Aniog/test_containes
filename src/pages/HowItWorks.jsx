import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import {
  ClipboardList,
  Search,
  ShieldCheck,
  FileSignature,
  PackageCheck,
  Ship,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";

const stages = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Brief & specification",
    duration: "Day 1–3",
    body: "Send us a brief covering product, target market, quantity, quality standards, target price, and timing. We confirm the scope and quote our service fee in writing.",
    details: [
      "Reference photos, drawings, or a spec sheet are ideal but not required",
      "We sign a service agreement before we start",
      "NDA available on request",
    ],
    imageId: "hiw-brief-9c12aa",
    imageQuery:
      "[hiw-brief-title] [hiw-eyebrow] [hiw-title]",
  },
  {
    n: "02",
    icon: Search,
    title: "Supplier shortlist",
    duration: "Day 3–10",
    body: "We search our database of 1,200+ pre-screened factories and reach out to 3–5 that match the product, MOQ, and budget. You get a shortlist with profiles, not a list of 20 leads to chase yourself.",
    details: [
      "Each profile includes photos, capacity, certifications, and key contacts",
      "We confirm current availability and pricing",
      "You decide which 2–3 to take forward",
    ],
    imageId: "hiw-search-44f1d2",
    imageQuery:
      "[hiw-search-title] [hiw-eyebrow] [hiw-title]",
  },
  {
    n: "03",
    icon: ShieldCheck,
    title: "Verification & sampling",
    duration: "Day 10–25",
    body: "We audit the top candidates, request samples, and prepare a transparent cost breakdown. You get a single comparison document so the decision is based on facts, not sales talk.",
    details: [
      "On-site audit for the chosen factory",
      "Sample collection or paid-sample arrangement",
      "Cost breakdown: material, labor, tooling, finish, packaging",
    ],
    imageId: "hiw-verify-7a8e3b",
    imageQuery:
      "[hiw-verify-title] [hiw-eyebrow] [hiw-title]",
  },
  {
    n: "04",
    icon: FileSignature,
    title: "Negotiation & purchase order",
    duration: "Day 25–30",
    body: "We help you negotiate terms, review the PO, and arrange the deposit. The contract is between you and the factory; we coordinate every step in writing.",
    details: [
      "Bilingual PO reviewed line by line",
      "Payment terms typically 30% deposit, 70% before shipment",
      "Trademark and IP protection clauses included where relevant",
    ],
    imageId: "hiw-po-31fa08",
    imageQuery:
      "[hiw-po-title] [hiw-eyebrow] [hiw-title]",
  },
  {
    n: "05",
    icon: PackageCheck,
    title: "Production & quality control",
    duration: "Day 30–55",
    body: "Weekly status updates from the line, with milestone inspections. Defects caught at the factory cost cents; defects caught in your warehouse cost dollars.",
    details: [
      "Pre-production, during-production, and pre-shipment inspections",
      "AQL-based sampling (most commonly ANSI/ASQ Z1.4)",
      "Photo and video evidence in every report",
    ],
    imageId: "hiw-qc-b2019d",
    imageQuery:
      "[hiw-qc-title] [hiw-eyebrow] [hiw-title]",
  },
  {
    n: "06",
    icon: Ship,
    title: "Shipping & delivery",
    duration: "Day 55–70",
    body: "We book the freight, prepare the export paperwork, and track the container until it lands. For DDP, we coordinate with a broker on your side to clear customs and deliver to your door.",
    details: [
      "FCL, LCL, air, or rail from major Chinese ports",
      "Commercial invoice, packing list, certificate of origin",
      "Booking confirmation and ETD/ETA updates in your inbox",
    ],
    imageId: "hiw-ship-9d4e2f",
    imageQuery:
      "[hiw-ship-title] [hiw-eyebrow] [hiw-title]",
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="bg-brand-900 text-white py-20 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            id="hiw-eyebrow"
            className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-500"
          >
            How it works
          </p>
          <h1
            id="hiw-title"
            className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl"
          >
            From your brief to goods in your warehouse, in six stages.
          </h1>
          <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-3xl">
            A realistic timeline runs 8–12 weeks from the first message to a
            container at your door. Below is what happens in each stage, what
            we do, what the factory does, and what we need from you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const reverse = idx % 2 === 1;
            return (
              <div
                key={stage.n}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                <div
                  className={`lg:col-span-5 ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <div className="sticky top-24">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-md bg-brand-800 text-white flex items-center justify-center text-lg font-bold">
                        {stage.n}
                      </div>
                      <div>
                        <div className="text-xs font-semibold tracking-wider uppercase text-accent-600">
                          {stage.duration}
                        </div>
                        <h2
                          id={`hiw-${stage.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title`}
                          className="text-2xl md:text-3xl font-bold tracking-tight text-ink-900"
                        >
                          {stage.title}
                        </h2>
                      </div>
                    </div>

                    <p className="mt-5 text-base md:text-lg text-ink-700 leading-relaxed">
                      {stage.body}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {stage.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-3 text-sm text-ink-700"
                        >
                          <CheckCircle2 className="w-5 h-5 text-success-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{d}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm text-ink-500">
                      <Icon className="w-4 h-4" />
                      Stage owner: your project manager
                    </div>
                  </div>
                </div>

                <div
                  className={`lg:col-span-7 ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  <div className="aspect-[4/3] bg-ink-100 rounded-lg overflow-hidden shadow-card">
                    <img
                      alt={stage.title}
                      data-strk-img-id={stage.imageId}
                      data-strk-img={stage.imageQuery}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="1000"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-white border border-ink-200 rounded-md p-3">
                      <div className="font-semibold text-ink-900">
                        What we do
                      </div>
                      <p className="mt-1 text-ink-700 leading-relaxed">
                        {whatWeDo(stage.n)}
                      </p>
                    </div>
                    <div className="bg-white border border-ink-200 rounded-md p-3">
                      <div className="font-semibold text-ink-900">
                        What you do
                      </div>
                      <p className="mt-1 text-ink-700 leading-relaxed">
                        {whatYouDo(stage.n)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-50 border border-brand-100 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink-900">
              Ready to start with stage one?
            </h2>
            <p className="mt-3 text-base md:text-lg text-ink-700 max-w-2xl mx-auto">
              Send a short brief and we'll come back with a shortlist,
              timeline, and service fee within one business day.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-semibold px-6 py-3 rounded-md transition shadow-sm"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function whatWeDo(n) {
  const map = {
    "01": "Confirm scope, sign service agreement, set up your project folder and communication channels.",
    "02": "Search our vetted database, contact 3–5 factories, collect written profiles, share the shortlist.",
    "03": "Audit the chosen factory, request and ship samples, prepare a transparent cost breakdown.",
    "04": "Review the PO line by line, coordinate the deposit with the factory on your behalf.",
    "05": "Run milestone inspections, deliver written reports with photos, escalate issues in real time.",
    "06": "Book the freight, prepare export documents, track the shipment to your warehouse.",
  };
  return map[n];
}

function whatYouDo(n) {
  const map = {
    "01": "Send a brief with product, quantity, quality, target price, and timing.",
    "02": "Pick 2–3 factories to take forward based on the shortlist.",
    "03": "Review the audit, sample, and cost breakdown; pick the supplier.",
    "04": "Approve the PO and release the deposit through your usual banking channel.",
    "05": "Approve sample photos, react to inspection reports, sign off on shipment.",
    "06": "Receive the goods. We hand off documents to your broker or 3PL.",
  };
  return map[n];
}
