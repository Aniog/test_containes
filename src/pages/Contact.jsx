import { MapPin, Clock, Mail, Users } from "lucide-react"
import { CONTACT_INFO } from "@/data/content"
import PageHeader from "@/components/common/PageHeader"
import InquiryForm from "@/components/common/InquiryForm"

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us about your product and order requirements. We will review your request and respond within one business day."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold text-ink">Request a quote</h2>
              <p className="mt-2 text-slate-600">
                The more detail you share, the more precise our initial
                sourcing proposal will be.
              </p>
              <div className="mt-8">
                <InquiryForm />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-ink">
                  Contact details
                </h3>
                <ul className="mt-5 space-y-4">
                  {CONTACT_INFO.map((item) => {
                    const Icon = item.icon
                    return (
                      <li key={item.id} className="flex items-start gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium text-ink">
                            {item.value}
                          </p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-surface p-6">
                <h3 className="text-base font-semibold text-ink">
                  What happens next
                </h3>
                <ol className="mt-4 space-y-3 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                      1
                    </span>
                    We review your requirements and confirm feasibility.
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                      2
                    </span>
                    We prepare an itemized quote with scope and timeline.
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                      3
                    </span>
                    On your approval, sourcing and verification begin.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
