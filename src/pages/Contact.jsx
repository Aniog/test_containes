import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Mail, Phone, MapPin, Clock, Globe2, MessageSquare } from "lucide-react"
import Section from "@/components/ui/Section"
import InquiryForm from "@/components/home/InquiryForm"

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    lines: [
      { label: "hello@ssourcing.cn", href: "mailto:hello@ssourcing.cn" },
      { label: "We reply within 24 hours, Mon-Fri", muted: true },
    ],
  },
  {
    icon: Phone,
    title: "Phone & WeChat",
    lines: [
      { label: "+86 571 8888 0000", href: "tel:+8657188880000" },
      { label: "WeChat ID: ssourcing-cn", muted: true },
    ],
  },
  {
    icon: MapPin,
    title: "Office",
    lines: [
      { label: "8F, Tower B, International Trade Center" },
      { label: "Yuhang District, Hangzhou, China" },
    ],
  },
  {
    icon: Clock,
    title: "Working hours",
    lines: [
      { label: "Monday - Friday, 09:00 - 18:00 (China time, GMT+8)" },
      { label: "Urgent requests handled within 12 hours", muted: true },
    ],
  },
  {
    icon: Globe2,
    title: "Languages",
    lines: [
      { label: "English · 中文 · Español" },
      { label: "Translation partners for other languages", muted: true },
    ],
  },
  {
    icon: MessageSquare,
    title: "Response policy",
    lines: [
      { label: "Every inquiry is reviewed by a sourcing manager" },
      { label: "No automated replies, no mass outreach", muted: true },
    ],
  },
]

export default function Contact() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <Section background="light" className="pt-12 md:pt-20" id="top">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
              Contact
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-navy-600 tracking-tight">
              Tell us what you want to source
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl">
              We reply to every inquiry within 24 hours, Monday to Friday, with
              a sourcing plan and a written quote for the services you need.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div
              ref={ref}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-card"
            >
              <img
                alt="SSourcing China office team in Hangzhou, working on a buyer project"
                data-strk-img-id="contact-office-team-1f8b3a"
                data-strk-img="[contact-tagline] [contact-headline] office team china meeting"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
              <p className="sr-only" id="contact-tagline">
                We reply to every inquiry within 24 hours, Monday to Friday
              </p>
              <p className="sr-only" id="contact-headline">
                Tell us what you want to source
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="white" className="pt-0">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((c) => {
            const Icon = c.icon
            return (
              <div
                key={c.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <div className="grid h-10 w-10 place-items-center rounded-md bg-navy-50 text-navy-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-base font-semibold text-navy-600">
                  {c.title}
                </h2>
                <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                  {c.lines.map((l, i) => (
                    <li
                      key={i}
                      className={l.muted ? "text-slate-500 text-xs" : ""}
                    >
                      {l.href ? (
                        <a
                          href={l.href}
                          className="hover:text-navy-600 underline-offset-2 hover:underline"
                        >
                          {l.label}
                        </a>
                      ) : (
                        l.label
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </Section>

      <InquiryForm />
    </>
  )
}
