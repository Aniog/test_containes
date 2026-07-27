import React from "react";
import { Section, SectionHeader } from "../ui/Primitives.jsx";
import InquiryForm from "../ui/InquiryForm.jsx";

export default function InquirySection() {
  return (
    <Section className="surface-steel" id="inquiry">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <SectionHeader
            kicker="Get a quote"
            title="Tell us what you need to source"
            subtitle="We respond within 1 business day with realistic next steps, clarifying questions, and a written quote for any paid work."
          />
          <div className="space-y-4 mt-6 text-sm text-ink/80">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2" />
              <div>
                <div className="font-semibold text-navy">No-cost initial assessment</div>
                <div>Tell us about your product. We'll tell you if we can help and what the realistic options are.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2" />
              <div>
                <div className="font-semibold text-navy">Clear scope, written quote</div>
                <div>If we move forward, you'll see a written scope and fee structure before any paid work begins.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2" />
              <div>
                <div className="font-semibold text-navy">Your data stays yours</div>
                <div>We never sell, resell, or share inquiry data with third parties. See our privacy approach below.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <InquiryForm />
        </div>
      </div>
    </Section>
  );
}
