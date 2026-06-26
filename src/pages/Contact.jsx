import { useEffect } from "react"
import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react"
import PageHero from "@/components/shared/PageHero"
import PageShell from "@/components/shared/PageShell"
import Faq from "@/components/shared/Faq"
import InquiryForm from "@/components/shared/InquiryForm"
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/primitives"

const FAQS = [
  {
    q: "How quickly will I get a reply?",
    a: "We respond to every inquiry within one business day, China time (UTC+8), Monday through Friday.",
  },
  {
    q: "Will my inquiry be treated as confidential?",
    a: "Yes. We treat all project information as confidential and are happy to sign an NDA before you share full specifications.",
  },
  {
    q: "Can I attach product photos or spec sheets?",
    a: "Please use the message field to describe your project — we'll send you a secure upload link in our reply for any files.",
  },
]

export default function Contact() {
  useEffect(() => {
    document.title =
      "Contact Us | Get a Free Sourcing Quote | SSourcing China"
  }, [])

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your project"
        description="Share a few details about the product you want to source, your timeline and any requirements. We'll come back within one business day with a fixed-fee proposal."
      />

      <Section className="bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
                <h2 className="text-lg font-semibold text-slate-900">
                  Direct contact
                </h2>
                <p className="mt-2 text-sm text-slate-700">
                  Prefer to reach us directly? Use any of the channels below.
                </p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-navy-50 text-navy-900">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <a
                        href="mailto:hello@ssourcingchina.com"
                        className="text-slate-700 hover:text-navy-900"
                      >
                        hello@ssourcingchina.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-navy-50 text-navy-900">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">
                        Phone / WhatsApp
                      </p>
                      <a
                        href="tel:+8612345678901"
                        className="text-slate-700 hover:text-navy-900"
                      >
                        +86 123 4567 8901
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-navy-50 text-navy-900">
                      <MessageSquare className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">WeChat</p>
                      <p className="text-slate-700">
                        Scan QR in our reply email
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-navy-50 text-navy-900">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">Office</p>
                      <p className="text-slate-700">Yiwu, Zhejiang, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-navy-50 text-navy-900">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">Hours</p>
                      <p className="text-slate-700">
                        Mon – Fri, 09:00 – 18:00 (UTC+8)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <InquiryForm sourcePage="/contact" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-100">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Contact FAQ"
            title="Questions about getting in touch"
            className="mb-10"
          />
          <Faq items={FAQS} id="contact-faq" />
        </Container>
      </Section>
    </PageShell>
  )
}