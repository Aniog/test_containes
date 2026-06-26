import { Mail, Phone, MapPin } from "lucide-react"
import InquiryForm from "../shared/InquiryForm"

export default function InquirySection() {
  return (
    <section id="inquiry" className="bg-brand-soft py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
              Inquiry Form
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
              Tell us about your sourcing project
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-body md:text-lg">
              Share a short brief and a member of our team will reply within one
              business day with next steps. There is no fee for the initial
              consultation.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-brand-body">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-white text-brand-accent shadow-sm">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-brand-ink">Email</div>
                  <a href="mailto:hello@ssourcing-china.com" className="hover:text-brand-accent">
                    hello@ssourcing-china.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-white text-brand-accent shadow-sm">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-brand-ink">WhatsApp / Phone</div>
                  <span>+86 755 0000 0000</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-white text-brand-accent shadow-sm">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-brand-ink">Office</div>
                  <span>Room 1208, Shennan Road, Futian District, Shenzhen, China</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <InquiryForm variant="card" />
          </div>
        </div>
      </div>
    </section>
  )
}
