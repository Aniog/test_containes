import {
  ClipboardList,
  Search,
  BadgeCheck,
  Package,
  ClipboardCheck,
  Ship,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    title: "1. Share your brief",
    desc: "Send us your product list, target price, quantities and delivery deadline. We sign an NDA on request.",
  },
  {
    icon: Search,
    title: "2. Supplier shortlist",
    desc: "Within 48 hours we send 3–5 verified Chinese factories with quotes, MOQs, lead times and sample plans.",
  },
  {
    icon: BadgeCheck,
    title: "3. Verify & sample",
    desc: "We run background and on-site factory checks, then ship samples to you for approval.",
  },
  {
    icon: Package,
    title: "4. Production follow-up",
    desc: "We track production milestones, share weekly photos and flag risks before they become delays.",
  },
  {
    icon: ClipboardCheck,
    title: "5. Quality inspection",
    desc: "Pre-shipment inspection against your AQL standard with a full photo and video report.",
  },
  {
    icon: Ship,
    title: "6. Ship to your door",
    desc: "We book FCL, LCL, air or rail freight, handle customs paperwork and track the container end-to-end.",
  },
];

export function ProcessSteps() {
  return (
    <section id="process" className="section bg-muted">
      <div className="container-x">
        <SectionHeader
          eyebrow="How it works"
          title="A clear, six-step sourcing process"
          titleId="home-process-title"
          description="Each step is owned by a named agent. You always know who is responsible and what happens next."
          descriptionId="home-process-desc"
          align="center"
          className="mx-auto"
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="relative flex h-full flex-col gap-3 rounded-xl border border-border bg-white p-6 shadow-card"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </li>
            );
          })}
        </ol>

        <div className="mt-12 flex justify-center">
          <Link to="/how-it-works" className="btn-primary">
            See the full process
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProcessSteps;
