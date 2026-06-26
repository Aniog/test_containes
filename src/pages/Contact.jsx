import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHeader from '@/components/common/PageHeader'
import InquiryForm from '@/components/common/InquiryForm'
import FaqAccordion from '@/components/common/FaqAccordion'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import { COMPANY, FAQS } from '@/data/siteContent'

export default function Contact() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  const contactItems = [
    {
      icon: 'Mail',
      label: 'Email',
      value: COMPANY.email,
      href: `mailto:${COMPANY.email}`,
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: COMPANY.phone,
      href: `tel:${COMPANY.phone.replace(/\s/g, '')}`,
    },
    {
      icon: 'MessageCircle',
      label: 'WhatsApp',
      value: COMPANY.whatsapp,
      href: '#',
    },
  ]

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us about your product and what you need. We will reply within one business day with a clear plan and an honest assessment."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <InquiryForm sourcePage="contact" />
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-surface p-6">
                <h2 className="text-lg font-bold text-ink">Other ways to reach us</h2>
                <ul className="mt-5 space-y-5">
                  {contactItems.map((c) => (
                    <li key={c.label} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                        <Icon name={c.icon} className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                          {c.label}
                        </p>
                        <a href={c.href} className="text-sm font-medium text-ink hover:text-accent">
                          {c.value}
                        </a>
                      </div>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                      <Icon name="MapPin" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                        Office
                      </p>
                      <p className="text-sm font-medium text-ink">{COMPANY.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                      <Icon name="Clock" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                        Hours
                      </p>
                      <p className="text-sm font-medium text-ink">{COMPANY.hours}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    alt="Shipping containers at a Chinese port for export"
                    data-strk-img-id="contact-port-img-4e7b22"
                    data-strk-img="[contact-port-desc] [contact-port-title]"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="bg-white p-4">
                  <p id="contact-port-title" className="text-sm font-semibold text-ink">
                    Export shipping coordination
                  </p>
                  <p id="contact-port-desc" className="mt-1 text-xs text-ink-muted">
                    We consolidate and ship from major Chinese ports to your destination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Quick answers before you reach out"
          />
          <div className="mt-12">
            <FaqAccordion items={FAQS.slice(0, 6)} />
          </div>
        </div>
      </section>
    </div>
  )
}
