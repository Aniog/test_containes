import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Search,
  FileCheck,
  Box,
  ClipboardList,
  Ship,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import SectionHeading from "@/components/shared/SectionHeading";
import HelmetSEO from "@/components/shared/HelmetSEO";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const steps = [
  {
    icon: MessageSquare,
    title: "1. Share your request",
    description:
      "Tell us what product you need, including specifications, quantity, target price, certifications, and timeline. The more detail, the better we can match you.",
  },
  {
    icon: Search,
    title: "2. Supplier research & shortlist",
    description:
      "We search our network and the market to identify manufacturers that fit your requirements. You receive a shortlist with factory profiles and initial quotations.",
  },
  {
    icon: FileCheck,
    title: "3. Factory verification",
    description:
      "Before you commit, we verify licenses, audit production capability, and check references. You get a clear risk assessment, not just a name and email.",
  },
  {
    icon: Box,
    title: "4. Samples & order confirmation",
    description:
      "We coordinate samples, negotiate terms, and help you evaluate options. Once you approve a supplier, we support contract review and deposit payment safeguards.",
  },
  {
    icon: ClipboardList,
    title: "5. Production & QC",
    description:
      "Our team monitors production milestones, conducts inspections, and reports back with photos and data. Problems are flagged early, not after shipment.",
  },
  {
    icon: Ship,
    title: "6. Shipping & delivery",
    description:
      "We coordinate freight quotes, supervise container loading, and prepare documents so your goods move smoothly from factory to destination.",
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <HelmetSEO
        title="How It Works | China Sourcing Process | SSourcing China"
        description="Learn how SSourcing China helps global buyers source from China in six clear steps, from request to delivery."
      />

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">How It Works</h1>
            <p className="mt-4 text-lg text-slate-300">
              A transparent, step-by-step process designed to reduce risk and keep your orders on track.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" ref={containerRef}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Process"
            title="Six steps from request to delivery"
            description="We keep every stage documented, communicative, and focused on your priorities."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <Card key={step.title} className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-slate-50 p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">What to expect after you inquire</h3>
                <ul className="mt-6 space-y-4 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-700" />
                    <span>We acknowledge your inquiry within a few hours.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-700" />
                    <span>Our team reviews product specs and asks clarifying questions if needed.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-700" />
                    <span>You receive a tailored sourcing plan with timelines and fees.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-700" />
                    <span>Supplier shortlists and quotations follow, usually within 3–7 business days.</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  data-strk-img-id="how-it-works-img-3f8a1b"
                  data-strk-img="[process-heading] [process-subheading]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Sourcing team managing production workflow"
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Start Your Sourcing Request <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
