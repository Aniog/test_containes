import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { FileText, Search, Building2, FileCheck, Settings, Truck, ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Step 1: Submit Your Requirements",
    subtitle: "Tell us what you need",
    description: "Fill out our inquiry form with details about your product, budget, target price, quality requirements, and delivery timeline. The more specific you are, the faster we can match you with the right suppliers.",
    details: [
      "Product specifications and quantities",
      "Target price range and budget",
      "Quality standards and certifications required",
      "Preferred delivery timeline",
      "Any special requirements or samples needed",
    ],
  },
  {
    icon: Search,
    title: "Step 2: Supplier Research & Matching",
    subtitle: "We find the best options",
    description: "Our team searches our verified supplier database and networks to find manufacturers that match your requirements. We evaluate each candidate's production capacity, export history, and client references before creating a shortlist.",
    details: [
      "Database search and network outreach",
      "Capacity and capability evaluation",
      "Export experience verification",
      "Client reference checks",
      "Shortlisted suppliers presented with profiles",
    ],
  },
  {
    icon: Building2,
    title: "Step 3: Factory Audit & Verification",
    subtitle: "On-site verification",
    description: "We visit shortlisted factories in person to verify their capabilities. Our auditors assess production lines, quality control systems, certifications, and working conditions. You receive a comprehensive audit report.",
    details: [
      "On-site physical inspection",
      "Production line and equipment assessment",
      "Quality management system review",
      "Certification verification (ISO, CE, etc.)",
      "Detailed audit report with photo evidence",
    ],
  },
  {
    icon: FileCheck,
    title: "Step 4: Samples & Quotation",
    subtitle: "Test before you commit",
    description: "We coordinate sample production, negotiate pricing, and finalize terms with your chosen supplier. Our team reviews all contracts and terms to protect your interests before you place an order.",
    details: [
      "Sample request and coordination",
      "Price negotiation and payment terms",
      "Contract review and finalization",
      "Incoterms and shipping terms agreement",
      "Deposit payment supervision",
    ],
  },
  {
    icon: Settings,
    title: "Step 5: Production & Quality Control",
    subtitle: "Monitor every stage",
    description: "During production, our QC team conducts inspections at critical milestones. We monitor production schedules, verify raw materials, and perform quality checks to ensure the final products meet your specifications.",
    details: [
      "Raw material quality verification",
      "During-production inspection (DUPRO)",
      "Production schedule monitoring",
      "Pre-shipment inspection (PSI)",
      "Regular progress reports with photos",
    ],
  },
  {
    icon: Truck,
    title: "Step 6: Shipping & Delivery",
    subtitle: "Door-to-door logistics",
    description: "We handle all logistics, including freight booking, export documentation, customs clearance, and final delivery. You'll receive real-time tracking information and all necessary documentation for your records.",
    details: [
      "Freight booking (sea, air, or rail)",
      "Export documentation and customs clearance",
      "Cargo insurance coordination",
      "Real-time shipment tracking",
      "Door-to-door delivery management",
    ],
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-4">How It Works</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Our Sourcing Process</h1>
            <p className="text-lg text-slate-300 mt-4 max-w-2xl">
              A transparent, proven six-step process that takes you from product requirements to delivered goods.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-section">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />

            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={step.title} className="relative flex flex-col lg:flex-row gap-8">
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-bold text-xl flex-shrink-0 relative z-10">
                    {index + 1}
                  </div>
                  <div className="lg:hidden flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 lg:ml-4">
                    <div className="hidden lg:flex items-center gap-3 mb-4">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">{step.subtitle}</p>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">{step.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{d}</span>
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to Start Your Sourcing Journey?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Tell us about your project and we'll guide you through every step of the process.
          </p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}