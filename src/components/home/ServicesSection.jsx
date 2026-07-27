import { Link } from "react-router-dom";
import { Search, ClipboardCheck, Factory, Package, Truck, Beaker } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description:
      "We identify and evaluate suppliers that match your product specifications, quality standards, and budget requirements.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Factory,
    title: "Factory Audit",
    description:
      "On-site verification of supplier facilities, production capacity, certifications, and compliance with international standards.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description:
      "Pre-shipment, during-production, and pre-shipment inspections to ensure products meet your specifications.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Package,
    title: "Production Follow-up",
    description:
      "Regular progress tracking, milestone checks, and proactive communication to keep your orders on schedule.",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    icon: Truck,
    title: "Shipping Coordination",
    description:
      "End-to-end logistics management including freight booking, documentation, customs clearance, and last-mile delivery.",
    color: "bg-rose-100 text-rose-700",
  },
  {
    icon: Beaker,
    title: "Sample Management",
    description:
      "Coordination of sample development, revisions, approvals, and bulk production confirmation.",
    color: "bg-cyan-100 text-cyan-700",
  },
];

export default function ServicesSection() {
  return (
    <section className="border-t bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Full-Spectrum Sourcing Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            End-to-end support from supplier discovery to final delivery,
            tailored to your specific product requirements.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className={`inline-flex rounded-lg p-3 ${service.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
          >
            View All Services Details
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}