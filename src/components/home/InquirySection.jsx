import { SectionLabel } from "@/components/ui/SectionLabel"
import { InquiryForm } from "@/components/shared/InquiryForm"

export function InquirySection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionLabel>Get Started</SectionLabel>
          <h2 id="inquiry-title" className="text-3xl font-bold sm:text-4xl">
            Request a Free Sourcing Quote
          </h2>
          <p className="mt-4 text-slate-600">
            Tell us what you need and we will reply with a tailored sourcing plan
            and next steps.
          </p>
        </div>
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm sm:p-10">
          <InquiryForm sourcePage="home" />
        </div>
      </div>
    </section>
  )
}
