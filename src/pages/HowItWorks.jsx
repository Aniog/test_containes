import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight, CheckCircle, FileText, Search, Factory, ClipboardCheck, Ship } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Submit Your Requirements",
    desc: "Start by filling out our inquiry form with details about your product, target quantity, quality expectations, and budget. We review every request and respond within 24 hours.",
    details: [
      "Product specifications and requirements",
      "Target price range and quantity",
      "Quality standards and certifications needed",
      "Timeline and delivery expectations",
    ],
  },
  {
    number: 2,
    icon: Search,
    title: "Supplier Identification & Shortlisting",
    desc: "We leverage our extensive supplier network and database to identify manufacturers that match your requirements. Each supplier undergoes initial screening before being shortlisted.",
    details: [
      "Database search and initial screening",
      "Capability and capacity assessment",
      "Competitive quote collection",
      "Shortlist of 3-5 qualified suppliers",
    ],
  },
  {
    number: 3,
    icon: Factory,
    title: "Factory Audit & Verification",
    desc: "Our team visits shortlisted factories in person to verify credentials, assess production capabilities, review quality systems, and ensure compliance with your requirements.",
    details: [
      "On-site facility inspection",
      "Legal and business license verification",
      "Production line and equipment assessment",
      "Social compliance evaluation",
    ],
  },
  {
    number: 4,
    icon: ClipboardCheck,
    title: "Sample Development & Approval",
    desc: "We coordinate sample requests, manage communication between you and suppliers, evaluate samples against your specifications, and facilitate the approval process.",
    details: [
      "Sample request coordination",
      "Quality evaluation against specs",
      "Feedback and revision management",
      "Final sample approval",
    ],
  },
  {
    number: 5,
    icon: Ship,
    title: "Production & Quality Control",
    desc: "Once production begins, we monitor progress, conduct inspections at critical stages, and provide regular updates. We ensure quality standards are maintained throughout.",
    details: [
      "During-production inspection (DPI)",
      "Pre-shipment inspection (PSI)",
      "Container loading supervision",
      "Regular progress reports with photos",
    ],
  },
  {
    number: 6,
    icon: Ship,
    title: "Shipping & Delivery",
    desc: "We handle all logistics arrangements including freight booking, documentation, customs clearance, and final delivery to your warehouse or business address.",
    details: [
      "Freight booking and coordination",
      "Export documentation and customs clearance",
      "Cargo insurance arrangement",
      "Delivery tracking and updates",
    ],
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-800 to-primary-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">Our Process</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              How It Works
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              A proven 6-step process that simplifies sourcing from China and reduces risk at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-slate-200" />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="relative md:pl-20">
                  {/* Step number */}
                  <div className="hidden md:flex absolute left-0 w-16 h-16 rounded-full bg-primary-600 text-white items-center justify-center text-xl font-bold shadow-md z-10">
                    {step.number}
                  </div>

                  {/* Content */}
                  <Card className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4 md:hidden">
                      <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold shrink-0">
                        {step.number}
                      </div>
                      <h2 className="text-xl font-bold text-primary-800">{step.title}</h2>
                    </div>
                    <div className="hidden md:flex items-center gap-3 mb-4">
                      <step.icon className="w-6 h-6 text-primary-600" />
                      <h2 className="text-xl font-bold text-primary-800">{step.title}</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                          <span className="text-sm text-slate-600">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
            Tell us about your product requirements and we'll guide you through the entire process.
          </p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg transition-colors">
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}