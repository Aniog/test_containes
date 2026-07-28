import { InquiryForm } from "@/components/shared/InquiryForm"

export function InquirySection() {
  return (
    <section id="inquiry" className="py-20 lg:py-28 bg-slate-50">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <span
              id="inquiry-subtitle"
              className="text-sm font-semibold uppercase tracking-wide text-primary"
            >
              Get Started
            </span>
            <h2 id="inquiry-title" className="mt-2 section-title">
              Request a free sourcing quote
            </h2>
            <p className="section-subtitle">
              Tell us what you are looking for. We will review your requirements
              and respond within one business day.
            </p>

            <div className="mt-8 hidden lg:block">
              <div className="relative h-80 overflow-hidden rounded-xl">
                <img
                  alt="Sourcing team in China factory"
                  className="h-full w-full object-cover"
                  data-strk-img-id="inquiry-section-img-3d4e5f"
                  data-strk-img="[inquiry-title] [inquiry-subtitle]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}
