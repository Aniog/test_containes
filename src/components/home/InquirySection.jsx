import React from "react";
import { ShieldCheck, Clock, Lock, MessageCircle } from "lucide-react";
import InquiryForm from "@/components/forms/InquiryForm";

const InquirySection = () => {
  return (
    <section
      className="section bg-gradient-to-b from-surface-50 to-white"
      id="inquiry"
    >
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Get started</span>
            <h2
              id="inquiry-section-title"
              className="mt-3 text-[32px] font-bold leading-tight tracking-tight text-ink-900 md:text-[40px]"
            >
              Send a brief. We will reply within one business day.
            </h2>
            <p
              id="inquiry-section-subtitle"
              className="mt-4 text-[15.5px] leading-relaxed text-ink-600"
            >
              A short description is enough. A spec sheet, a reference
              product or a sketch is even better. We sign NDAs on request.
            </p>
            <ul className="mt-8 space-y-4 text-[15px] text-ink-700">
              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-50 text-accent-600">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">Reply in one business day</p>
                  <p className="text-ink-600">
                    A real project manager reads every brief.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-50 text-accent-600">
                  <Lock className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">NDA-friendly</p>
                  <p className="text-ink-600">
                    We sign NDAs before reviewing your product designs.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-50 text-accent-600">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">No upfront commitment</p>
                  <p className="text-ink-600">
                    We send you a free shortlist and a plan. You decide if
                    you want to continue.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-50 text-accent-600">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">English, Spanish, German, Chinese</p>
                  <p className="text-ink-600">
                    Project managers who can explain the trade-offs in
                    your language.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm idPrefix="home" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
