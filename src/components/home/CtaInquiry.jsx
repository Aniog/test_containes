import Section from "@/components/ui/Section";
import InquiryForm from "@/components/shared/InquiryForm";

export default function CtaInquiry() {
  return (
    <Section tone="primaryDark" className="relative overflow-hidden">
      <div className="grid items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Start a project
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Tell us what you need sourced.
            <br />
            We will reply within one business day.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Share a few details about your product, target specs, and timeline.
            A senior sourcing specialist will follow up with a clear plan and
            indicative pricing — no obligation, no spam.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-white/80">
            {[
              "Free and confidential",
              "Reply from a senior specialist, not a chatbot",
              "Clear next steps even if you decide not to proceed",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <InquiryForm variant="dark" />
        </div>
      </div>
    </Section>
  );
}
