import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const steps = [
  {
    step: "01",
    title: "Submit Your Inquiry",
    description:
      "Fill out our inquiry form with details about your product requirements, specifications, target budget, and timeline. We'll review your needs and get back to you within 24 hours.",
    details: [
      "Provide product specifications and requirements",
      "Share target pricing and budget range",
      "Indicate desired quantity and timeline",
      "Upload reference images or drawings if available",
    ],
    imgId: "howitworks-1a2b3c",
  },
  {
    step: "02",
    title: "Sourcing Strategy & Proposal",
    description:
      "We analyze your requirements and develop a tailored sourcing strategy. You'll receive a detailed proposal including our approach, timeline, fee structure, and next steps.",
    details: [
      "Market analysis and supplier landscape review",
      "Customized sourcing strategy proposal",
      "Transparent fee structure and timeline",
      "Mutual agreement on scope of work",
    ],
    imgId: "howitworks-4d5e6f",
  },
  {
    step: "03",
    title: "Supplier Search & Evaluation",
    description:
      "Our team identifies and evaluates potential suppliers from our database of vetted manufacturers. We present you with a shortlist of qualified candidates.",
    details: [
      "Database search and industry network outreach",
      "Initial screening and capability assessment",
      "Price quotation collection and comparison",
      "Shortlisted suppliers presented with analysis",
    ],
    imgId: "howitworks-7g8h9i",
  },
  {
    step: "04",
    title: "Factory Audit & Verification",
    description:
      "We conduct on-site audits of shortlisted factories to verify their capabilities, certifications, and production capacity. You receive detailed audit reports.",
    details: [
      "Physical factory visit and inspection",
      "License and certification verification",
      "Production line and equipment assessment",
      "Detailed audit report with photos",
    ],
    imgId: "howitworks-0j1k2l",
  },
  {
    step: "05",
    title: "Samples, Negotiation & Contract",
    description:
      "We coordinate sample development, facilitate price negotiations, and help finalize contracts with your selected supplier.",
    details: [
      "Sample request and development coordination",
      "Price negotiation and term finalization",
      "Contract review and agreement support",
      "Deposit payment coordination",
    ],
    imgId: "howitworks-3m4n5o",
  },
  {
    step: "06",
    title: "Production & Quality Control",
    description:
      "Throughout production, we monitor progress, conduct inspections, and provide regular updates. Issues are identified and resolved proactively.",
    details: [
      "Pre-production meeting with factory",
      "Raw material inspection",
      "During-production (DUPRO) inspection",
      "Pre-shipment inspection (PSI)",
    ],
    imgId: "howitworks-6p7q8r",
  },
  {
    step: "07",
    title: "Shipping & Delivery",
    description:
      "We handle all logistics from factory to your doorstep, including freight booking, documentation, customs clearance, and delivery coordination.",
    details: [
      "Freight booking (sea, air, or express)",
      "Export documentation and customs clearance",
      "Cargo insurance arrangement",
      "Real-time tracking and delivery confirmation",
    ],
    imgId: "howitworks-9s0t1u",
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="border-b bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              How It Works
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A clear, structured process from inquiry to delivery. We guide you
              through every step of sourcing from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className="grid gap-8 lg:grid-cols-2 lg:gap-12"
              >
                <div
                  className={`flex flex-col justify-center ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {step.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`overflow-hidden rounded-xl ${i % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <img
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[hiw-desc-${i}] [hiw-title-${i}] [hiw-heading]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={step.title}
                    className="h-full w-full object-cover"
                  />
                  <span id={`hiw-title-${i}`} className="hidden">
                    {step.title}
                  </span>
                  <span id={`hiw-desc-${i}`} className="hidden">
                    {step.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <span id="hiw-heading" className="hidden">
            How It Works
          </span>
        </div>
      </section>

      <section className="border-t bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground">
            Start Your Sourcing Journey
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
            Ready to find the right supplier for your products? Get started
            today.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-primary shadow-sm transition-colors hover:bg-white/90"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}