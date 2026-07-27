import { Search, ClipboardCheck, Factory, Ship, Handshake, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Handshake,
    title: "1. Inquiry & Briefing",
    description:
      "Tell us about your product requirements, target budget, quality standards, and delivery timeline.",
  },
  {
    icon: Search,
    title: "2. Supplier Search",
    description:
      "We identify qualified suppliers that match your criteria using our database of vetted manufacturers.",
  },
  {
    icon: Factory,
    title: "3. Factory Evaluation",
    description:
      "On-site audit of shortlisted suppliers to verify capabilities, certifications, and production capacity.",
  },
  {
    icon: FileCheck,
    title: "4. Samples & Negotiation",
    description:
      "Coordinate sample development, facilitate price negotiations, and confirm terms with the selected supplier.",
  },
  {
    icon: ClipboardCheck,
    title: "5. Production & QC",
    description:
      "Monitor production milestones, conduct in-process and final inspections to ensure quality standards.",
  },
  {
    icon: Ship,
    title: "6. Shipping & Delivery",
    description:
      "Handle logistics, documentation, customs clearance, and arrange delivery to your destination.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How Our Sourcing Process Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A structured, transparent process designed to minimize risk and
            maximize efficiency for every order.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative rounded-xl border bg-white p-6 shadow-sm"
              >
                <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}