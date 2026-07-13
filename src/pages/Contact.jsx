import { Mail, Phone, MessageCircle, MapPin, Clock } from 'lucide-react'
import PageHeader from '@/components/layout/PageHeader'
import InquiryForm from '@/components/sections/InquiryForm'
import FAQ from '@/components/sections/FAQ'
import { Section, SectionHeader } from '@/components/ui/Section'
import { CONTACT_INFO } from '@/data/content'

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
    label: 'WhatsApp',
    value: CONTACT_INFO.whatsapp,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: CONTACT_INFO.address,
  },
  {
    icon: Clock,
    label: 'Working hours',
    value: CONTACT_INFO.hours,
  },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us what you want to source. A project manager will reply within one business day with next steps and a transparent quote."
      />

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Contact details"
              title="Talk to a sourcing specialist"
              description="Prefer to reach us directly? Use any of the channels below. We respond within one business day."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {CONTACT_CARDS.map((c) => {
                const Icon = c.icon
                const content = (
                  <div className="card flex items-start gap-3 p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {c.label}
                      </p>
                      <p className="mt-1 font-medium text-slate-900">
                        {c.value}
                      </p>
                    </div>
                  </div>
                )
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className="block transition hover:-translate-y-0.5"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={c.label}>{content}</div>
                )
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">What happens next</h3>
              <ol className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-700 text-xs font-bold text-white">
                    1
                  </span>
                  We review your requirements and confirm we can help.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-700 text-xs font-bold text-white">
                    2
                  </span>
                  You receive a free quote and a proposed sourcing plan.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-700 text-xs font-bold text-white">
                    3
                  </span>
                  We start sourcing, verifying, or inspecting once you approve.
                </li>
              </ol>
            </div>
          </div>

          <InquiryForm />
        </div>
      </Section>

      <FAQ />
    </>
  )
}
