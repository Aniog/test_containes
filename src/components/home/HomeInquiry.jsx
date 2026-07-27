import { SectionHeading } from "@/components/ui/section-heading"
import { InquiryForm } from "@/components/shared/InquiryForm"

export function HomeInquiry() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get a quote"
              title="Tell us what you want to source"
              description="Share your product, target price, and quantity. We will reply within one business day with a free, no-obligation sourcing plan."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Free initial consultation and quote",
                "A clear plan with next steps",
                "No commitment until you are ready",
                "Confidential handling of your information",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div id="quote-form">
            <InquiryForm sourcePage="Home" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeInquiry
