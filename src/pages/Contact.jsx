import { useEffect, useRef } from "react"
import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { COMPANY } from "@/data/content"
import InquiryForm from "@/components/shared/InquiryForm"
import Faq from "@/components/sections/Faq"
import CtaBanner from "@/components/shared/CtaBanner"
import { Section } from "@/components/shared/Section"

export default function Contact() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <section ref={ref} className="bg-gradient-to-b from-white to-page">
        <div className="container-x py-16 md:py-20">
          <p className="eyebrow">Contact</p>
          <h1
            id="contact-h1"
            className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-ink-900 md:text-5xl"
          >
            Talk to a project manager in China
          </h1>
          <p
            id="contact-sub"
            className="mt-4 max-w-2xl text-base text-ink-700 md:text-lg"
          >
            Use the form to send your inquiry, or reach us by email, phone or
            WhatsApp. We usually reply within one business day.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <aside className="space-y-6">
              <div className="card p-6">
                <h2 className="text-lg font-semibold text-ink-900">
                  Direct contact
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-ink-700">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 flex-none text-navy" />
                    <div>
                      <p className="font-semibold text-ink-900">Email</p>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-ink-700 hover:text-accent"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 flex-none text-navy" />
                    <div>
                      <p className="font-semibold text-ink-900">Phone / WhatsApp</p>
                      <p className="text-ink-700">{COMPANY.phone}</p>
                      <p className="text-ink-700">WhatsApp: {COMPANY.whatsapp}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 flex-none text-navy" />
                    <div>
                      <p className="font-semibold text-ink-900">Office</p>
                      <p className="text-ink-700">{COMPANY.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 flex-none text-navy" />
                    <div>
                      <p className="font-semibold text-ink-900">Working hours</p>
                      <p className="text-ink-700">
                        Monday – Friday, 9:00 – 18:00 China Standard Time (UTC+8)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div
                className="aspect-[4/3] overflow-hidden rounded-2xl border border-border-soft bg-slate-100"
                data-strk-bg-id="contact-image-bg-3b9f7c"
                data-strk-bg="[contact-sub] [contact-h1]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="500"
              >
                <img
                  alt="A project manager working at a desk with samples and a laptop"
                  className="h-full w-full object-cover"
                  data-strk-img-id="contact-image-3b9f7c-img"
                  data-strk-img="[contact-sub] [contact-h1]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-3">
                  <MessageSquare className="mt-0.5 h-4 w-4 flex-none text-accent" />
                  <div>
                    <h3 className="text-base font-semibold text-ink-900">
                      What happens after you submit
                    </h3>
                    <ol className="mt-3 space-y-2 text-sm text-ink-700">
                      <li>
                        <span className="font-semibold text-ink-900">1.</span> You
                        receive an automatic confirmation email.
                      </li>
                      <li>
                        <span className="font-semibold text-ink-900">2.</span> A
                        project manager reviews your inquiry (within 1 business
                        day).
                      </li>
                      <li>
                        <span className="font-semibold text-ink-900">3.</span> We
                        send you a short reply with the next step, or a short
                        call invite.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </aside>

            <InquiryForm />
          </div>
        </div>
      </Section>

      <Faq />
      <CtaBanner
        eyebrow="Prefer a call?"
        title="Book a 20-minute intro call"
        subtitle="A short call is the fastest way to know if we are the right partner for your project. No slides, no sales pitch."
        primaryLabel="Email us instead"
        primaryTo={`mailto:${COMPANY.email}`}
        secondaryLabel="See How It Works"
        secondaryTo="/how-it-works"
      />
    </>
  )
}
