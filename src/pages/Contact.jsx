import { useEffect, useRef } from "react"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import { PageHero } from "@/components/shared/PageHero"
import { Section, SectionHeader } from "@/components/ui/Section"
import { InquiryForm } from "@/components/shared/InquiryForm"
import { FAQ } from "@/components/shared/FAQ"
import { homeFaqs } from "@/data/content"
import strkImgConfig from "@/strk-img-config.json"

export function Contact() {
  const bgRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, bgRef.current)
  }, [])

  return (
    <>
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <div
          ref={bgRef}
          data-strk-bg-id="contact-bg-d4e5f6"
          data-strk-bg="[contact-title] [contact-subtitle] [contact-eyebrow] office building business China"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
          className="absolute inset-0 bg-cover bg-center opacity-25"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/85" aria-hidden="true" />
        <div className="relative container-x py-16 md:py-20">
          <div className="max-w-3xl">
            <p id="contact-eyebrow" className="eyebrow text-accent-300 mb-3">
              Contact us
            </p>
            <h1
              id="contact-title"
              className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight"
            >
              Get a free sourcing quote
            </h1>
            <p
              id="contact-subtitle"
              className="mt-4 text-lg text-navy-100 leading-relaxed"
            >
              Send us your product, target quantity and timeline. We will reply
              with a sourcing plan and a fee within 1–3 business days.
            </p>
          </div>
        </div>
      </section>

      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <InquiryForm
              title="Send us your sourcing brief"
              subtitle="Required fields marked with an asterisk. We respect your privacy and do not share your details with third parties."
            />
          </div>
          <aside className="lg:col-span-5 space-y-6">
            <div className="card p-6 md:p-7">
              <h3 className="text-lg font-semibold text-slate-900">
                Head office
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-accent-500 shrink-0" />
                  <span>
                    Rm 1208, Tower B, Coastal City
                    <br />
                    Nanshan District, Shenzhen 518054, China
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent-500 shrink-0" />
                  <a
                    href="mailto:sourcing@ssourcingchina.com"
                    className="hover:text-navy-900"
                  >
                    sourcing@ssourcingchina.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent-500 shrink-0" />
                  <a href="tel:+8675588888888" className="hover:text-navy-900">
                    +86 755 8888 8888
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 mt-0.5 text-accent-500 shrink-0" />
                  <span>
                    WhatsApp / WeChat ID available on request after first email
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-0.5 text-accent-500 shrink-0" />
                  <span>Mon–Sat · 09:00–19:00 (GMT+8)</span>
                </li>
              </ul>
            </div>

            <div className="card p-6 md:p-7">
              <h3 className="text-lg font-semibold text-slate-900">
                Local teams
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                In addition to Shenzhen, we have coordinators in Yiwu and
                Ningbo who handle on-site factory visits and inspections.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  <span>Shenzhen — electronics, hardware, packaging</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  <span>Yiwu — home, kitchen, gifts, beauty, packaging</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  <span>Ningbo — apparel, outdoor, pet products</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section bg="slate">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Before you write"
              title="Quick answers"
              subtitle="If your question is below, it may save us both a round of emails."
              align="left"
              className="!max-w-none"
            />
          </div>
          <div className="lg:col-span-7">
            <FAQ items={homeFaqs} />
          </div>
        </div>
      </Section>
    </>
  )
}

export default Contact
