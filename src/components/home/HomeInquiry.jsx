import SectionHeading from '@/components/ui/SectionHeading'
import InquiryForm from '@/components/common/InquiryForm'
import { Mail, Phone, Clock, MapPin } from 'lucide-react'
import { company } from '@/data/site'

export default function HomeInquiry() {
  return (
    <section className="bg-brand-slate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Get a Free Sourcing Quote"
              title="Tell us what you want to source"
              description="Share your product, target price, and quantity. A coordinator will review your request and reply with a transparent quotation, usually within 1 business day."
            />

            <div className="mt-8 space-y-4">
              <ContactRow icon={Mail} label="Email" value={company.email} href={`mailto:${company.email}`} />
              <ContactRow icon={Phone} label="Phone / WhatsApp" value={company.phone} />
              <ContactRow icon={MapPin} label="Office" value={company.address} />
              <ContactRow icon={Clock} label="Working hours" value={company.hours} />
            </div>
          </div>

          <div>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand-blue shadow-sm">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-medium text-brand-ink">{value}</p>
      </div>
    </div>
  )
  return href ? (
    <a href={href} className="block hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  )
}
