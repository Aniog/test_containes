import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Mail, Phone, MapPin, Clock3, MessageCircle, Globe2 } from 'lucide-react'
import InquiryForm from '@/components/InquiryForm'
import FAQSection from '@/components/FAQSection'
import { CONTACT_INFO, FAQS } from '@/data/content'

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp / WeChat',
    value: CONTACT_INFO.whatsapp,
    href: null,
  },
  {
    icon: Clock3,
    label: 'Office hours',
    value: CONTACT_INFO.hours,
    href: null,
  },
]

function PageHero() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Contact Us</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
          Get a free sourcing quote
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
          Tell us what you want to source, in as much detail as you have. A sourcing
          specialist — not a salesperson — will reply within one business day with
          honest feedback and next steps.
        </p>
      </div>
    </section>
  )
}

export default function Contact() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero />
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-1">
              {CONTACT_CARDS.map((card) => (
                <div key={card.label} className="flex items-start gap-4 rounded-xl border border-line bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-light">
                    <card.icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{card.label}</p>
                    {card.href ? (
                      <a href={card.href} className="mt-1 block text-sm font-medium text-ink hover:text-brand">
                        {card.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium text-ink">{card.value}</p>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4 rounded-xl border border-line bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-light">
                  <MapPin className="h-5 w-5 text-brand" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Office</p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-ink">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="rounded-xl border border-line bg-ink p-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Globe2 className="h-4 w-4 text-accent" aria-hidden="true" />
                  Serving buyers in 32 countries
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  US, Canada, UK, Germany, France, Netherlands, Australia, Japan, UAE and
                  more. All communication in English.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
      <FAQSection
        faqs={FAQS}
        title="Before you ask"
        lead="Quick answers about fees, timelines, payments and how we work. For anything else, use the form above."
      />
    </div>
  )
}
