import PageHero from '@/components/PageHero'
import InquiryForm from '@/components/InquiryForm'
import { Mail, Phone, MapPin, Clock, MessageSquare, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a free, no-obligation sourcing quote"
        description="Tell us what you want to source. We reply within one business day with a realistic scope, fee structure and recommended next steps."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <aside className="lg:col-span-4 space-y-5">
            <ContactCard icon={<Mail className="w-5 h-5" />} title="Email" lines={['hello@ssourcingchina.com']} />
            <ContactCard icon={<Phone className="w-5 h-5" />} title="Phone / WhatsApp" lines={['+86 138 0000 0000', 'Mon–Fri, 9:00–18:00 CST']} />
            <ContactCard icon={<MapPin className="w-5 h-5" />} title="Offices" lines={['Yiwu, Zhejiang, China', 'Shenzhen, Guangdong, China']} />
            <ContactCard icon={<Clock className="w-5 h-5" />} title="Response time" lines={['Within 1 business day', 'NDA available before review']} />
            <ContactCard icon={<MessageSquare className="w-5 h-5" />} title="Discovery call" lines={['30-minute video call', 'Bilingual project manager']} />
            <ContactCard icon={<Linkedin className="w-5 h-5" />} title="LinkedIn" lines={['linkedin.com/company/ssourcing-china']} />
          </aside>

          <div className="lg:col-span-8">
            <InquiryForm compact id="contact-form" />
          </div>
        </div>
      </section>
    </>
  )
}

function ContactCard({ icon, title, lines }) {
  return (
    <div className="bg-white border border-line rounded-2xl p-5 flex gap-4 items-start shadow-sm">
      <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 text-accent inline-flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-brand">{title}</div>
        <div className="mt-1 space-y-0.5 text-sm text-ink-soft">
          {lines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
