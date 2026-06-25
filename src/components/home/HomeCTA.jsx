import { useRef } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { StrkImage, useStrkImages } from "@/components/ui/StrkImage";
import { ArrowRight, Clock4, MessageSquare, ShieldCheck } from "lucide-react";

export function HomeCTA() {
  const containerRef = useRef(null);
  useStrkImages(containerRef, []);

  return (
    <Section
      id="inquiry"
      size="lg"
      tone="paper"
      className="relative overflow-hidden"
    >
      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <span className="eyebrow text-brand-teal">Get started</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-brand-navy leading-[1.15]">
            Get a free sourcing quote for your next China order
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-brand-ink-muted">
            Tell us what you need to source and we will come back within one
            business day with a scope of work, a flat-fee quote and a
            recommended next step. No obligation, no spam.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-brand-red/10 text-brand-red">
                <Clock4 className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-navy">
                  One business day reply
                </p>
                <p className="text-sm text-brand-ink-muted">
                  A sourcing manager reviews your inquiry personally.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-brand-red/10 text-brand-red">
                <MessageSquare className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-navy">
                  No obligation quote
                </p>
                <p className="text-sm text-brand-ink-muted">
                  You decide whether to proceed once you have the scope.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-brand-red/10 text-brand-red">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-navy">
                  Confidential by default
                </p>
                <p className="text-sm text-brand-ink-muted">
                  NDAs available before any technical detail is shared.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-10 hidden lg:block">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-brand-line bg-brand-mist">
              <StrkImage
                imgId="home-cta-support-j1k2l3"
                query="[home-cta-title] [home-cta-body] logistics coordinator on phone tracking shipping containers port"
                ratio="4x5"
                width={900}
                alt="Logistics coordinator tracking shipping containers at a Chinese port"
              />
            </div>
            <p id="home-cta-title" className="sr-only" aria-hidden="true">
              Get a free sourcing quote for your next China order.
            </p>
            <p id="home-cta-body" className="sr-only" aria-hidden="true">
              A logistics coordinator tracks shipping containers at a Chinese port.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <InquiryForm
            eyebrow="Get a Free Sourcing Quote"
            title="Tell us what you need to source"
            description="Share a few details and a sourcing manager in Shenzhen will reply within one business day."
            submitLabel="Get a Free Sourcing Quote"
          />
        </div>
      </div>
    </Section>
  );
}
