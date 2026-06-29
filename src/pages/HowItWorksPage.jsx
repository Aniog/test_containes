import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight, CheckCircle, FileText, Search, ShieldCheck, Truck, Package, ClipboardList } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "Step 1",
    title: "Submit Your Requirements",
    desc: "Fill out our brief form or send us an email with details about your product, target price, quantity, quality standards, and any certifications required.",
    detail: "The more detail you provide, the faster and more accurate our supplier matching will be. We'll review your requirements and respond within 24 hours.",
  },
  {
    icon: Search,
    number: "Step 2",
    title: "Supplier Matching & Shortlisting",
    desc: "We search our database of verified Chinese manufacturers and identify 3-5 suppliers that best match your requirements.",
    detail: "Our team evaluates each potential supplier based on product capability, production capacity, quality certifications, export experience, and pricing.",
  },
  {
    icon: ShieldCheck,
    number: "Step 3",
    title: "Factory Verification & Audit",
    desc: "We conduct thorough verification of shortlisted suppliers, including business license checks and on-site factory audits where needed.",
    detail: "You receive detailed audit reports with photos, production line assessments, and our recommendations for the best supplier to work with.",
  },
  {
    icon: Package,
    number: "Step 4",
    title: "Sample & Negotiation",
    desc: "We facilitate sample ordering and coordinate price negotiation between you and the selected supplier.",
    detail: "Our team ensures samples match your specifications, negotiates favorable terms, and helps establish clear contracts and payment terms.",
  },
  {
    icon: ClipboardList,
    number: "Step 5",
    title: "Production & Quality Control",
    desc: "Once production begins, we monitor progress, inspect raw materials, and conduct quality checks throughout the manufacturing process.",
    detail: "Regular updates keep you informed. We perform during-production and pre-shipment inspections to catch any issues before shipment.",
  },
  {
    icon: Truck,
    number: "Step 6",
    title: "Shipping & Delivery",
    desc: "We coordinate logistics from factory to your destination, handling all documentation, customs clearance, and freight arrangements.",
    detail: "Choose from sea, air, rail, or express shipping. We track every shipment and provide real-time updates until your goods arrive safely.",
  },
];

export default function HowItWorksPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-gray-900 to-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            How It Works
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            A transparent, step-by-step process designed to make sourcing from China simple and risk-free.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
                  <div className="md:col-span-2">
                    <div
                      className="rounded-xl overflow-hidden"
                    >
                      <img
                        alt={step.title}
                        className="w-full rounded-xl shadow-sm"
                        data-strk-img-id={`howitworks-${i}-img`}
                        data-strk-img={`[howitworks-title-${i}] [howitworks-desc-${i}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                      <h3 id={`howitworks-title-${i}`} className="sr-only">{step.title}</h3>
                      <p id={`howitworks-desc-${i}`} className="sr-only">{step.desc}</p>
                    </div>
                  </div>
                  <div className="md:col-span-3 flex flex-col justify-center">
                    <span className="text-sm font-semibold text-primary mb-1">{step.number}</span>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">{step.desc}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.detail}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/30 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're here to guide you through every step of the process.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg px-8 py-3.5 text-base transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}