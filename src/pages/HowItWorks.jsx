import PageLayout from "../components/layout/PageLayout.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import CtaSection from "../components/layout/CtaSection.jsx";
import {
  ClipboardList,
  Search,
  Building,
  FileSearch,
  Package,
  ClipboardCheck,
  Ship,
  PackageCheck,
  MessageSquare,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Submit Your Request",
    description:
      "Fill out our inquiry form with product details, target price, quantity, and any special requirements. The more detail you provide, the better we can match you.",
    timeframe: "Day 1",
    tips: [
      "Include product photos or technical drawings if available",
      "Specify your target price and order volume",
      "Mention required certifications or standards",
    ],
  },
  {
    icon: Search,
    title: "Supplier Research & Shortlist",
    description:
      "We search our network and external databases to find factories that match your product category, capacity, and quality standards. We prepare a shortlist with initial quotations.",
    timeframe: "Days 2-5",
    tips: [
      "We check business registration and export licenses",
      "Initial capability assessment via phone and email",
      "We collect and compare 3-5 supplier quotations",
    ],
  },
  {
    icon: Building,
    title: "Factory Verification Audit",
    description:
      "Our team visits the shortlisted factories on-site. We verify production lines, equipment, quality systems, and working conditions. You receive a detailed audit report.",
    timeframe: "Days 6-10",
    tips: [
      "Photo and video documentation of the facility",
      "License and certification verification",
      "Interview with factory management and QC staff",
    ],
  },
  {
    icon: FileSearch,
    title: "Sample Development & Review",
    description:
      "We coordinate sample production from the selected supplier. Samples are shipped to you for evaluation. We gather your feedback and negotiate any necessary changes.",
    timeframe: "Days 11-20",
    tips: [
      "We track sample production to avoid delays",
      "Provide detailed feedback so we can iterate quickly",
      "We negotiate sample and mold costs on your behalf",
    ],
  },
  {
    icon: Package,
    title: "Order Placement & Deposit",
    description:
      "Once samples are approved, we help finalize the purchase order, payment terms, and production schedule. We verify the proforma invoice and track deposit payment.",
    timeframe: "Days 21-25",
    tips: [
      "We review contracts and payment terms for fairness",
      "Clear production timeline with milestone dates",
      "Deposit typically 30% of order value",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Production Monitoring & QC",
    description:
      "Throughout production, we conduct inspections and provide progress reports. Pre-shipment inspection ensures the final batch meets your standards before it leaves the factory.",
    timeframe: "Days 26-45",
    tips: [
      "Weekly photo and video updates from the factory floor",
      "In-process inspections at 20% and 80% completion",
      "Pre-shipment AQL inspection with pass/fail report",
    ],
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    description:
      "We coordinate with freight forwarders, prepare export documents, and arrange booking. We track the shipment and provide updates until it reaches your destination port.",
    timeframe: "Days 46-55",
    tips: [
      "We compare sea, air, and express options for cost and speed",
      "Export packing and labeling verification",
      "Full customs documentation prepared in advance",
    ],
  },
  {
    icon: PackageCheck,
    title: "Delivery & Feedback",
    description:
      "After delivery, we follow up to confirm everything arrived in good condition. Your feedback helps us refine the process for your next order.",
    timeframe: "Day 55+",
    tips: [
      "Document any shipping damage immediately",
      "Share product quality feedback for continuous improvement",
      "We keep supplier records updated for future orders",
    ],
  },
];

export default function HowItWorks() {
  return (
    <PageLayout title="How It Works">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 lg:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                How It Works
              </h1>
              <p className="text-text-secondary text-base sm:text-lg">
                A clear, step-by-step process that removes guesswork and reduces
                risk when sourcing from China.
              </p>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border-light -translate-x-1/2" />

              <div className="space-y-10 lg:space-y-16">
                {steps.map((step, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <div
                      key={step.title}
                      className={`relative flex flex-col lg:flex-row gap-6 lg:gap-12 items-start ${
                        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      <div className="w-full lg:w-1/2">
                        <div
                          className={`p-6 lg:p-8 rounded-xl bg-white border border-border-light ${
                            isLeft ? "lg:ml-auto lg:mr-8" : "lg:mr-auto lg:ml-8"
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                              <step.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-base font-semibold text-text-primary">
                                {step.title}
                              </h3>
                              <span className="text-xs font-medium text-primary">
                                {step.timeframe}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-text-secondary leading-relaxed mb-4">
                            {step.description}
                          </p>
                          <ul className="space-y-1.5">
                            {step.tips.map((tip) => (
                              <li
                                key={tip}
                                className="flex items-start gap-2 text-sm text-text-secondary"
                              >
                                <span className="text-success mt-0.5">
                                  &bull;
                                </span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-surface items-center justify-center z-10">
                        <span className="text-white text-xs font-bold">
                          {i + 1}
                        </span>
                      </div>

                      <div className="w-full lg:w-1/2" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Communication Throughout
            </h2>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              You are never left in the dark. Your dedicated account manager
              provides regular updates via email, shared documents, and video
              calls. We use project management tools to track timelines, share
              inspection photos, and flag issues in real time.
            </p>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </PageLayout>
  );
}
