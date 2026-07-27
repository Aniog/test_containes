import React from "react"
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react"
import PageHero from "@/components/layout/PageHero"
import SectionHeader from "@/components/ui/SectionHeader"
import Card from "@/components/ui/Card"
import InquiryForm from "@/components/sections/InquiryForm"
import { trustStats } from "@/data/site"

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@ssourcing.cn",
    href: "mailto:hello@ssourcing.cn",
    note: "Replies within one business day",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp / WeChat",
    value: "+86 138 0000 0188",
    href: "https://wa.me/8613800000188",
    note: "Best for urgent or quick questions",
  },
  {
    icon: Phone,
    label: "Shanghai office",
    value: "+86 21 5555 0188",
    href: "tel:+862155550188",
    note: "Mon–Fri, 9:00–18:00 China Standard Time",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Shanghai, China",
    note: "Inspectors across Guangdong, Zhejiang, Jiangsu, Fujian, Shandong",
  },
]

const Contact = () => {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need sourced"
        description="Most buyers start with a short brief. We will come back within one business day with a sourcing plan, an indicative cost, and the factories we would shortlist."
      />

      <section className="bg-warm-100">
        <div className="container-content py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Get in touch"
                title="Speak with a sourcing manager in your time zone"
                description="A real person will read your inquiry. No bots, no junior account managers reading from a script."
              />
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contactItems.map((item) => {
                  const Icon = item.icon
                  const Inner = (
                    <div className="flex flex-col gap-2 p-5 bg-white border border-warm-300 rounded-[6px] h-full hover:border-navy/40 transition-colors">
                      <div className="inline-flex items-center justify-center w-9 h-9 rounded-[4px] bg-teal-light text-teal">
                        <Icon size={18} strokeWidth={1.75} />
                      </div>
                      <div className="text-[12px] font-semibold uppercase tracking-eyebrow text-ink-muted">
                        {item.label}
                      </div>
                      <div className="text-[15px] font-semibold text-ink leading-snug break-words">
                        {item.value}
                      </div>
                      {item.note && (
                        <div className="text-[13px] text-ink-secondary leading-relaxed">
                          {item.note}
                        </div>
                      )}
                    </div>
                  )
                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {Inner}
                    </a>
                  ) : (
                    <div key={item.label}>{Inner}</div>
                  )
                })}
              </div>
              <div className="mt-8 bg-warm-200 border border-warm-300 rounded-[6px] p-5">
                <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-eyebrow text-teal">
                  <Clock size={14} />
                  Hours
                </div>
                <div className="mt-2 text-[14px] text-ink-secondary leading-relaxed">
                  We answer emails Monday to Friday, 9:00–18:00 China Standard
                  Time. We schedule calls around your working hours — US East
                  Coast, US West Coast, EU, UK, AU, and MENA.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7" id="inquiry">
              <InquiryForm sourcePage="Contact" variant="light" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warm-200 border-y border-warm-300">
        <div className="container-content py-14 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 text-center md:text-left">
            {trustStats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-semibold text-navy tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1 text-[13px] text-ink-secondary leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
