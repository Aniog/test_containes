import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, FileCheck2, PackageOpen, ScanSearch, PlaneTakeoff, ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHero from "@/components/shared/PageHero.jsx";
import InquiryCTA from "@/components/home/InquiryCTA.jsx";

const STEPS = [
  {
    n: "01",
    icon: Search,
    title: "Discovery Call & Specification",
    duration: "Day 1–3",
    desc: "We start with a discovery call to understand your product, target market, quantity, target price, quality requirements, packaging, certifications, and timeline.",
    details: [
      "You fill in the inquiry form or book a video call with our sourcing team",
      "We translate your requirements into a clear internal sourcing brief",
      "We confirm scope, deliverables, and engagement model before searching",
    ],
  },
  {
    n: "02",
    icon: FileCheck2,
    title: "Supplier Research & Shortlist",
    duration: "Week 1–2",
    desc: "We search our network and the broader Chinese market to identify 3–5 factories that match your requirements — not the ones with the best ads.",
    details: [
      "Pre-screening of business licenses, export history, and ownership",
      "Cross-checking capacity, workforce, and machinery",
      "You receive a shortlist with company profile, key strengths, and risk notes",
    ],
  },
  {
    n: "03",
    icon: PackageOpen,
    title: "Quotation, Samples & Negotiation",
    duration: "Week 2–4",
    desc: "We collect detailed quotations, arrange custom samples, and negotiate pricing, payment terms, and lead time on your behalf.",
    details: [
      "Side-by-side comparison of unit price, MOQ, lead time, and payment terms",
      "Custom samples sent to you for approval (or evaluated in our office)",
      "Iteration on materials, color, packaging, and finishing",
    ],
  },
  {
    n: "04",
    icon: ScanSearch,
    title: "Production & Quality Inspections",
    duration: "Week 4–10",
    desc: "Once you confirm the order, we follow production in person and run AQL-aligned inspections at the right milestones.",
    details: [
      "Pre-production inspection (PPI): raw materials and components",
      "During-production inspection (DUPRO): 20–30% complete",
      "Pre-shipment inspection (PSI): AQL sampling before container loading",
      "Photo / video reports with measurable defect data after each inspection",
    ],
  },
  {
    n: "05",
    icon: PlaneTakeoff,
    title: "Shipping, Documents & Delivery",
    duration: "Week 10+",
    desc: "We prepare export documentation, consolidate goods if needed, and book FOB, CIF, or DDP shipping to your destination.",
    details: [
      "Commercial invoice, packing list, certificate of origin, and certifications",
      "Booking with trusted carriers by sea, air, or rail",
      "Tracking and follow-up until the goods arrive at your destination",
    ],
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="page-fade">
      <PageHero
        eyebrow="How It Works"
        title="A structured process from inquiry to delivery"
        subtitle="Every sourcing project follows the same five-step process — so timelines, responsibilities, and deliverables are always clear."
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "How It Works" },
        ]}
        ctaPrimary={{ to: "/contact", label: "Start Your Project" }}
        ctaSecondary={{ to: "/services", label: "View Services" }}
      />

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="relative">
            <div
              aria-hidden="true"
              className="hidden lg:block absolute left-[2.25rem] top-8 bottom-8 w-px bg-gradient-to-b from-[#E5E1D8] via-[#E5E1D8] to-transparent"
            />
            <ol className="space-y-10 lg:space-y-16">
              {STEPS.map((s) => (
                <li key={s.n} className="relative grid gap-6 lg:grid-cols-12 lg:items-start">
                  <div className="lg:col-span-1 flex lg:justify-center">
                    <div className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white border-2 border-[#0E2A47] shadow-sm">
                      <s.icon className="h-6 w-6 text-[#0E2A47]" />
                      <span className="absolute -top-2 -right-2 bg-[#C8553D] text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">
                        {s.n}
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-7 card p-7 md:p-8">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="font-display text-[22px] font-semibold text-[#0F172A]">{s.title}</h3>
                      <span className="text-[12.5px] font-medium tracking-[0.1em] uppercase text-[#C8553D]">
                        {s.duration}
                      </span>
                    </div>
                    <p className="mt-3 text-[15.5px] text-[#475569] leading-relaxed">{s.desc}</p>
                    <ul className="mt-5 space-y-2.5">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-[14.5px] text-[#0F172A]">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#C8553D] shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-4 hidden lg:block">
                    <div className="overflow-hidden rounded-xl border border-[#E5E1D8]">
                      <img
                        alt={`${s.title} step illustration`}
                        data-strk-img-id={`howit-step-${s.n}-a3f7d2`}
                        data-strk-img={`[howit-step-${s.n}-title]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-44 object-cover"
                      />
                    </div>
                    <p id={`howit-step-${s.n}-title`} className="sr-only">{s.title}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <InquiryCTA />
    </div>
  );
}