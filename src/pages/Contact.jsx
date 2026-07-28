import { useDocumentTitle } from "@/hooks/useDocumentTitle"
import { InquiryForm } from "@/components/shared/InquiryForm"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  useDocumentTitle("Contact Us | SSourcing China")

  return (
    <div>
      <section className="bg-slate-900 py-20 text-white">
        <div className="container-main">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            Contact
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight lg:text-5xl">
            Let us help you source from China
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            Send us your product requirements and we will respond with a clear
            sourcing plan and next steps.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900">
                  Request a free sourcing quote
                </h2>
                <p className="mt-2 text-slate-600">
                  Fill in the form below and we will get back to you within one
                  business day.
                </p>
                <div className="mt-6">
                  <InquiryForm />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  Contact details
                </h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>
                      Unit 1208, Fortune Plaza
                      <br />
                      Shenzhen, China 518000
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <Mail className="h-5 w-5 shrink-0 text-primary" />
                    <a href="mailto:hello@ssourcingchina.com" className="hover:text-primary">
                      hello@ssourcingchina.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <Phone className="h-5 w-5 shrink-0 text-primary" />
                    <a href="tel:+8675588881234" className="hover:text-primary">
                      +86 755 8888 1234
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>
                      Mon – Fri: 9:00 AM – 6:30 PM
                      <br />
                      China Standard Time (GMT+8)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  What happens next?
                </h3>
                <ol className="mt-4 list-decimal pl-4 space-y-2 text-sm text-slate-600">
                  <li>We review your requirements.</li>
                  <li>We send clarifying questions if needed.</li>
                  <li>We provide a tailored sourcing proposal.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
