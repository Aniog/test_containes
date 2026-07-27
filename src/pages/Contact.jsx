import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"
import PageHeader from "@/components/layout/PageHeader"
import InquiryForm from "@/components/sections/InquiryForm"
import { SITE } from "@/data/site"

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: "Phone / WhatsApp", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Office", value: SITE.address },
  { icon: Clock, label: "Working hours", value: SITE.hours },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us about your product and target. We'll come back with a clear plan, a shortlist of verified suppliers, and a transparent quote — usually within one business day."
        cta={false}
      />

      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-brand-700">
                <MessageSquare className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Talk to us</span>
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-slate-900">
                We're here to help you source from China
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Whether you're sourcing your first product or scaling an existing
                line, our team can help. Reach out using the form or the details
                below.
              </p>

              <ul className="mt-8 space-y-5">
                {CONTACT_ITEMS.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.label} className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white text-brand-700 ring-1 ring-slate-200 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-0.5 block text-sm font-medium text-slate-900 hover:text-brand-700"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-sm font-medium text-slate-900">{item.value}</p>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-900">What happens next?</p>
                <ol className="mt-3 space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><span className="font-semibold text-brand-700">1.</span> We review your request within 1 business day.</li>
                  <li className="flex gap-2"><span className="font-semibold text-brand-700">2.</span> We confirm scope and send a transparent quote.</li>
                  <li className="flex gap-2"><span className="font-semibold text-brand-700">3.</span> We start sourcing verified suppliers for you.</li>
                </ol>
              </div>
            </div>

            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
