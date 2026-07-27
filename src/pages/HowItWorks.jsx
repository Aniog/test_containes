import { useEffect, useRef } from "react";
import {
  Search,
  FileCheck,
  ClipboardList,
  Camera,
  Truck,
  Headset,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Submit Your Request",
    desc: "Fill out our inquiry form with product details, target price, quantity, and destination. You can also upload images or reference links. We review every request within 24 hours.",
    details: [
      "Product name, specs, and materials",
      "Target unit price and total quantity",
      "Destination country and preferred shipping method",
      "Any certifications or compliance requirements",
    ],
  },
  {
    step: "02",
    icon: FileCheck,
    title: "Supplier Shortlist",
    desc: "Our team searches across manufacturer databases, trade shows, and industry networks to find 3-5 qualified suppliers that match your requirements.",
    details: [
      "Database search across 1688, Alibaba, and industry sources",
      "Initial screening for export experience and certifications",
      "Quote collection and price benchmarking",
      "Side-by-side comparison with pros and cons",
    ],
  },
  {
    step: "03",
    icon: ClipboardList,
    title: "Factory Verification",
    desc: "We visit or audit the top candidates on-site to verify their facilities, licenses, production capacity, and working conditions before you place an order.",
    details: [
      "Business license and registration verification",
      "On-site factory audit with photo/video evidence",
      "Equipment and production line assessment",
      "Social compliance and safety checks",
    ],
  },
  {
    step: "04",
    icon: Camera,
    title: "Quality Inspection",
    desc: "We inspect at multiple stages — during production, before shipment, and at container loading — to ensure your goods meet agreed specifications.",
    details: [
      "Pre-production sample approval",
      "In-process inspections at key milestones",
      "Pre-shipment inspection with AQL sampling",
      "Container loading supervision",
    ],
  },
  {
    step: "05",
    icon: Truck,
    title: "Shipping & Delivery",
    desc: "We coordinate freight forwarding, prepare customs documentation, and track your shipment until it arrives at your destination.",
    details: [
      "Freight quote comparison (air, sea, rail)",
      "Export documentation and customs support",
      "Cargo consolidation for multiple suppliers",
      "Door-to-door tracking and delivery confirmation",
    ],
  },
  {
    step: "06",
    icon: Headset,
    title: "Ongoing Support",
    desc: "Our relationship does not end at delivery. We remain available for reorders, supplier performance reviews, and any follow-up sourcing needs.",
    details: [
      "Reorder facilitation with established suppliers",
      "Supplier performance tracking",
      "Issue resolution and mediation",
      "Market updates for your product category",
    ],
  },
];

export default function HowItWorks() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref}>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
              How It Works
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              A clear, step-by-step process designed to take the risk and
              guesswork out of sourcing from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />
            <div className="space-y-12 md:space-y-16">
              {steps.map((s, i) => (
                <div
                  key={s.step}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    i % 2 === 1 ? "md:text-right" : ""
                  }`}
                >
                  <div
                    className={`${i % 2 === 1 ? "md:order-2" : ""}`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        i % 2 === 1 ? "md:justify-end" : ""
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center text-white font-bold text-lg z-10">
                        {s.step}
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        {s.title}
                      </h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {s.desc}
                    </p>
                    <ul className="space-y-2">
                      {s.details.map((d) => (
                        <li
                          key={d}
                          className={`flex items-start gap-2 text-sm text-slate-700 ${
                            i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-800 mt-1.5 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`rounded-xl border border-slate-200 overflow-hidden ${
                      i % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <img
                      data-strk-img-id={`how-step-${s.step}`}
                      data-strk-img={`[how-step-${s.step}-title]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={s.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <p className="text-4xl font-extrabold text-brand-800 mb-2">3-5</p>
              <p className="text-slate-600">Days for initial shortlist</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <p className="text-4xl font-extrabold text-brand-800 mb-2">24h</p>
              <p className="text-slate-600">Average response time</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <p className="text-4xl font-extrabold text-brand-800 mb-2">0</p>
              <p className="text-slate-600">Upfront fees to get started</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to start?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Submit your product requirements and we will send a free sourcing
            proposal within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-brand-800 hover:bg-slate-100 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
