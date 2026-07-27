import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ClipboardCheck, Factory, Package, Truck, Beaker, ArrowRight, Shield } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description:
      "We identify and evaluate suppliers that match your product specifications, quality standards, and budget requirements. Our team leverages an extensive database of verified manufacturers across China to find the right partner for your business.",
    highlights: [
      "Custom supplier shortlist based on your criteria",
      "Capability assessment and capacity verification",
      "Price benchmarking and negotiation support",
      "Confidentiality protection for your product designs",
    ],
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Factory,
    title: "Factory Audit",
    description:
      "On-site verification of supplier facilities, production capacity, certifications, and compliance with international standards. We conduct thorough audits to ensure your potential partners meet your requirements.",
    highlights: [
      "Physical site inspection and production line review",
      "Certification and license verification",
      "Quality management system assessment",
      "Social compliance and labor practice evaluation",
    ],
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description:
      "Comprehensive quality control services at every stage of production. Our inspectors ensure that products meet your specifications before they leave the factory.",
    highlights: [
      "Raw material inspection before production",
      "During-production (DUPRO) inspection",
      "Pre-shipment inspection (PSI)",
      "Container loading supervision",
    ],
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Package,
    title: "Production Follow-up",
    description:
      "Regular progress tracking, milestone checks, and proactive communication to keep your orders on schedule. We act as your eyes and ears on the ground.",
    highlights: [
      "Weekly production progress reports",
      "Photo and video documentation",
      "Issue escalation and resolution",
      "Order status dashboard access",
    ],
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    icon: Truck,
    title: "Shipping Coordination",
    description:
      "End-to-end logistics management including freight booking, documentation, customs clearance, and last-mile delivery to your warehouse or distribution center.",
    highlights: [
      "Sea, air, and express freight options",
      "Export documentation and customs clearance",
      "Cargo insurance coordination",
      "Real-time tracking and delivery updates",
    ],
    color: "bg-rose-100 text-rose-700",
  },
  {
    icon: Beaker,
    title: "Sample Management",
    description:
      "Coordination of sample development, revisions, approvals, and bulk production confirmation. We ensure your samples meet expectations before mass production.",
    highlights: [
      "Counter sample development coordination",
      "Sample review and feedback management",
      "Revision tracking until approval",
      "Bulk production confirmation",
    ],
    color: "bg-cyan-100 text-cyan-700",
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="border-b bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Sourcing Services
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive sourcing support from supplier discovery to final
              delivery. We handle every step so you can focus on growing your
              business.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div
                    className={`flex flex-col justify-center ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div
                      className={`inline-flex w-fit rounded-lg p-3 ${service.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {service.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Shield className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`overflow-hidden rounded-xl ${i % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <img
                      data-strk-img-id={`service-img-${service.title.toLowerCase().replace(/\s+/g, "-")}-${i}`}
                      data-strk-img={`[service-desc-${i}] [service-title-${i}] [services-heading]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                    <span id={`service-title-${i}`} className="hidden">
                      {service.title}
                    </span>
                    <span id={`service-desc-${i}`} className="hidden">
                      {service.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <span id="services-heading" className="hidden">
            Our Sourcing Services
          </span>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground">
            Ready to Start Sourcing?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
            Tell us about your project and we&apos;ll provide a customized
            sourcing plan within 24 hours.
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