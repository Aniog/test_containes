import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import PageHero from "@/components/sections/PageHero"
import InquiryForm from "@/components/sections/InquiryForm"
import { site } from "@/data/content"

export default function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us about your product and requirements. We will review them and come back with a short plan and next steps, usually within one business day."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900">Talk to our team</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Prefer to reach us directly? Use the contact details below, or
                send your requirements through the form and we will get back to
                you quickly.
              </p>

              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0f2a4a]/5 text-[#0f2a4a]">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Email</div>
                    <a href={`mailto:${site.email}`} className="text-sm text-slate-600 hover:text-[#0f2a4a]">
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0f2a4a]/5 text-[#0f2a4a]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Phone</div>
                    <span className="text-sm text-slate-600">{site.phone}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0f2a4a]/5 text-[#0f2a4a]">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">WhatsApp</div>
                    <span className="text-sm text-slate-600">{site.whatsapp}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0f2a4a]/5 text-[#0f2a4a]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Office</div>
                    <span className="text-sm text-slate-600">{site.address}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0f2a4a]/5 text-[#0f2a4a]">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Working hours</div>
                    <span className="text-sm text-slate-600">{site.hours}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <InquiryForm source="contact" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
