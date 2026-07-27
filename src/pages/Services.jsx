import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  FileText,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import SectionHeading from "@/components/shared/SectionHeading";
import HelmetSEO from "@/components/shared/HelmetSEO";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    summary: "Find manufacturers that match your specs, budget, and volume.",
    details: [
      "Market mapping across key manufacturing regions",
      "Shortlisting 3–5 qualified suppliers per request",
      "Initial RFQ management and price negotiation",
      "Supplier capability and export-experience review",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    summary: "Reduce risk with documented, on-the-ground verification.",
    details: [
      "Business license and registration checks",
      "On-site or virtual factory audit",
      "Production-line and equipment review",
      "Reference checks with existing buyers",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    summary: "Catch issues before goods leave the factory.",
    details: [
      "Pre-shipment inspections (PSI)",
      "During-production inspections (DUPRO)",
      "Container loading supervision",
      "Detailed photo reports and defect classification",
    ],
  },
  {
    icon: Factory,
    title: "Production Follow-Up",
    summary: "Stay on schedule with proactive order management.",
    details: [
      "Milestone tracking from deposit to delivery",
      "Weekly status updates with photos",
      "Issue resolution with the factory",
      "Packaging and labeling confirmation",
    ],
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    summary: "We manage logistics so your cargo arrives smoothly.",
    details: [
      "Freight-forwarder quote comparison",
      "Documentation preparation",
      "Customs and compliance support",
      "Door-to-door or port-to-port delivery",
    ],
  },
  {
    icon: FileText,
    title: "Compliance & Documentation",
    summary: "Make sure your products meet market requirements.",
    details: [
      "Certification requirement review",
      "Testing laboratory coordination",
      "Label, manual, and packaging compliance",
      "Export license and customs paperwork",
    ],
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <HelmetSEO
        title="Sourcing Services | Supplier Verification, QC & Shipping | SSourcing China"
        description="Explore SSourcing China's end-to-end services: supplier sourcing, factory verification, quality inspection, production follow-up, and shipping coordination."
      />

      <section className="bg-slate-900 py-20 text-white" ref={containerRef}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
            <p className="mt-4 text-lg text-slate-300">
              Practical sourcing support for businesses buying from China — from supplier search to delivered goods.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Everything you need to source from China"
            description="Choose the services you need. We can support a single task or manage the full sourcing journey."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{service.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-700" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Get a Free Sourcing Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
