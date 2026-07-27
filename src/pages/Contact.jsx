import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"
import { SITE } from "@/data/content"
import { PageHeader } from "@/components/shared/PageHeader"
import { SectionHeading } from "@/components/ui/section-heading"
import { InquiryForm } from "@/components/shared/InquiryForm"

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: SITE.phone,
  },
  {
    icon: MapPin,
    label: "Location",
    value: SITE.address,
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within one business day",
  },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        bgId="contact-header-bg-6p7q8r"
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us what you want to source. A coordinator will reply within one business day with a clear plan and next steps."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <SectionHeading
                align="left"
                eyebrow="Talk to us"
                title="How to reach us"
                description="Prefer to email or call first? Use the details below, or fill out the form and we will get back to you."
              />
              <div className="mt-8 space-y-5">
                {CONTACT_METHODS.map((method) => {
                  const Icon = method.icon
                  const content = method.href ? (
                    <a
                      href={method.href}
                      className="text-brand-700 hover:text-brand-800"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span className="text-slate-700">{method.value}</span>
                  )
                  return (
                    <div
                      key={method.label}
                      className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-900 text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          {method.label}
                        </p>
                        <p className="mt-1 text-sm font-medium">{content}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 rounded-xl border border-brand-100 bg-brand-50 p-5">
                <div className="flex items-start gap-3">
                  <MessageSquare className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" />
                  <div>
                    <h3 className="text-sm font-semibold text-brand-900">
                      What happens next
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      We review your request, confirm scope, and send a free
                      quote with a suggested plan. No payment is required to get
                      started.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <InquiryForm sourcePage="Contact" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
