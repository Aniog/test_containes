import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SectionHeader from "@/components/shared/SectionHeader";
import CtaButton from "@/components/shared/CtaButton";
import { ClipboardList, Search, FileText, Boxes, ClipboardCheck, Ship, Handshake } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Submit Your Requirements",
    description: "Fill out our inquiry form or send us an email with product details, specs, target price, quantity, and destination. The more detail you provide, the better we can match suppliers.",
    details: ["Product drawings or photos", "Target price and quantity", "Quality standards", "Packaging and shipping preferences"],
  },
  {
    icon: Search,
    title: "2. Supplier Research & Shortlist",
    description: "We search our network and verify potential manufacturers against your requirements. Within a few business days, you receive a shortlist with factory profiles and estimated pricing.",
    details: ["Network and database search", "Initial capability screening", "Factory profile summary", "Preliminary quotation"],
  },
  {
    icon: FileText,
    title: "3. Factory Verification",
    description: "Before you place an order, we verify the factory's legal status, production capacity, equipment, certifications, and quality systems. You receive a detailed report.",
    details: ["License and registration checks", "On-site or remote audit", "Production capacity review", "Risk assessment"],
  },
  {
    icon: Boxes,
    title: "4. Sampling & Negotiation",
    description: "We coordinate samples, help you evaluate them, and negotiate pricing, payment terms, lead time, and order conditions with the supplier.",
    details: ["Sample coordination", "Quote comparison", "Terms negotiation", "Purchase order support"],
  },
  {
    icon: ClipboardCheck,
    title: "5. Production & Quality Control",
    description: "Once production starts, we monitor milestones and carry out inspections. Issues are flagged early so they can be corrected at the factory.",
    details: ["Production schedule tracking", "In-process checks", "Pre-shipment inspection", "Defect reporting"],
  },
  {
    icon: Ship,
    title: "6. Shipping & Delivery",
    description: "We help coordinate logistics, prepare documents, and track shipments until your goods reach the destination port or warehouse.",
    details: ["Freight booking support", "Export documentation", "Shipment consolidation", "Delivery tracking"],
  },
  {
    icon: Handshake,
    title: "7. Ongoing Support",
    description: "After delivery, we remain available for reorders, supplier feedback, and continuous improvement on future production runs.",
    details: ["Reorder coordination", "Supplier performance review", "Process improvement", "Long-term partnership"],
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold tracking-wider text-teal-400 uppercase mb-3">How It Works</span>
            <h1 id="hiw-title" className="text-4xl md:text-5xl font-bold mb-6">A Clear Path from Inquiry to Delivery</h1>
            <p id="hiw-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Our process is designed to keep you informed and in control while we handle the details on the ground.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="sticky top-28">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-slate-100 mb-8">
                  <img
                    data-strk-img-id="hiw-main-img"
                    data-strk-img="[hiw-subtitle] [hiw-title]"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Sourcing project timeline and workflow diagram in office"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Ready to start?</h3>
                  <p className="text-slate-600 text-sm mb-4">Tell us what you need and we will get back to you within one business day.</p>
                  <CtaButton to="/contact" className="w-full">Get a Free Sourcing Quote</CtaButton>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="relative pl-8 md:pl-12 border-l-2 border-slate-100 last:border-transparent">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-600 ring-4 ring-white" />
                  <div className="pb-8">
                    <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{step.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
