import { Mail, Phone, MapPin, Clock, MessageCircle, ShieldCheck } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import { Section, SectionContainer } from "@/components/ui/Section"
import InquiryForm from "@/components/shared/InquiryForm"
import Faq from "@/components/shared/Faq"
import { SITE } from "@/data/site"

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email", value: SITE.email },
  { icon: Phone, label: "Phone", value: SITE.phone },
  { icon: MessageCircle, label: "WhatsApp", value: SITE.whatsapp },
  { icon: MapPin, label: "Location", value: SITE.address },
  { icon: Clock, label: "Working hours", value: SITE.hours },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us what you want to source. We'll review your requirements and reply within 1–2 business days with a clear plan and quote."
      />

      <Section className="bg-white">
        <SectionContainer>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Talk to a sourcing specialist
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Whether you're sourcing your first product or scaling an existing
                line, we'll help you find the right factory and keep your order on
                track.
              </p>

              <ul className="mt-8 space-y-5">
                {CONTACT_ITEMS.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {item.label}
                      </div>
                      <div className="mt-0.5 text-sm font-medium text-slate-900">
                        {item.value}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-2 text-slate-900">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-semibold">
                    Your information stays private
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  We only use your details to prepare your quote. We can sign an
                  NDA before you share product specifics.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <InquiryForm />
            </div>
          </div>
        </SectionContainer>
      </Section>

      <Faq />
    </>
  )
}
