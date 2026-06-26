import InquiryForm from "@/components/shared/InquiryForm";
import SectionHeader from "@/components/shared/SectionHeader";
import { COMPANY } from "@/data/site";
import { CheckCircle2 } from "lucide-react";

export default function InquirySection() {
  return (
    <section className="bg-brand-900 py-20 lg:py-28" id="inquiry">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <SectionHeader
            variant="dark"
            eyebrow="Request a quote"
            title="Tell us what you need to source"
            description="Share a few details about your product, quantity, and timeline. We'll reply within one business day."
          />
          <div className="mt-8 hidden text-ink-200 lg:block">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">
              What happens next
            </p>
            <ul className="mt-4 space-y-3 text-sm text-ink-200">
              {[
                "We confirm scope and clarify any spec gaps",
                "We prepare a supplier shortlist (typically 3–5 factories)",
                "We share indicative pricing, MOQ, and lead time",
                "If you want to proceed, we sign an NDA and start sampling",
              ].map((step) => (
                <li key={step} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 hidden border-t border-ink-700 pt-6 lg:block">
            <p className="text-xs uppercase tracking-wider text-ink-400">
              Prefer email?
            </p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-1 block text-base font-semibold text-white hover:text-accent-300"
            >
              {COMPANY.email}
            </a>
            <p className="mt-3 text-xs text-ink-400">{COMPANY.hours}</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-ink-700 bg-white p-6 shadow-xl sm:p-8">
            <InquiryForm sourcePage="home-inquiry" />
          </div>
        </div>
      </div>
    </section>
  );
}