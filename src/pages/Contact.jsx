import PageHeader from '@/components/PageHeader.jsx'
import InquiryForm from '@/components/sections/InquiryForm.jsx'
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to a sourcing project manager"
        description="Send a quick inquiry below or reach us directly by email or WhatsApp. We reply within one business day."
      />

      <section className="border-b border-slate-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ContactCard
              icon={Mail}
              label="Email"
              value="hello@ssourcingchina.com"
              href="mailto:hello@ssourcingchina.com"
            />
            <ContactCard
              icon={MessageCircle}
              label="WhatsApp"
              value="+86 159 0000 0000"
              href="https://wa.me/8615900000000"
            />
            <ContactCard
              icon={Phone}
              label="Phone"
              value="+86 (0) 579 0000 0000"
              href="tel:+8605790000000"
            />
            <ContactCard
              icon={MapPin}
              label="Office"
              value="Yiwu, Zhejiang, China"
            />
          </div>

          <div className="mt-10 flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 md:p-6">
            <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
            <p>
              <span className="font-semibold text-slate-900">Hours:</span>{' '}
              Monday – Friday, 9:00 to 18:00 China Standard Time (UTC+8). We reply
              to emails and WhatsApp messages within one business day.
            </p>
          </div>
        </div>
      </section>

      <InquiryForm />
    </>
  )
}

function ContactCard({ icon: Icon, label, value, href }) {
  const inner = (
    <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-700">
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-5 text-xs font-medium uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-base font-semibold text-slate-900">{value}</p>
    </div>
  )
  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {inner}
      </a>
    )
  }
  return inner
}
