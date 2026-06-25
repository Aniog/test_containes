import PageHero from '@/components/PageHero'
import InquiryForm from '@/components/sections/InquiryForm'
import FaqSection from '@/components/sections/FaqSection'
import { Mail, Phone, MessageSquare, MapPin, Clock } from 'lucide-react'

const contactBlocks = [
  {
    icon: Mail,
    title: 'Email',
    primary: 'hello@ssourcing-china.com',
    secondary: 'We reply within one business day.',
    href: 'mailto:hello@ssourcing-china.com',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp / WeChat',
    primary: '+86 138 0000 0000',
    secondary: 'Quick questions and updates.',
    href: 'https://wa.me/8613800000000',
  },
  {
    icon: Phone,
    title: 'Phone',
    primary: '+86 579 0000 0000',
    secondary: 'Mon–Fri, China business hours.',
    href: 'tel:+8657900000000',
  },
  {
    icon: MapPin,
    title: 'Office',
    primary: 'Yiwu, Zhejiang Province, China',
    secondary: 'Visits by appointment.',
  },
  {
    icon: Clock,
    title: 'Hours',
    primary: 'Mon–Sat · 09:00 – 18:00 (UTC+8)',
    secondary: 'Email handled 7 days a week.',
  },
]

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Share a few details about your project. We will reply within one business day with next steps, indicative pricing and a clear sourcing plan — no obligation."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {contactBlocks.map((b) => {
              const Icon = b.icon
              const content = (
                <>
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#1B6FB8]/10 text-[#1B6FB8]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#0B2545]">{b.primary}</p>
                  <p className="mt-1 text-xs text-slate-500">{b.secondary}</p>
                </>
              )

              return b.href ? (
                <a
                  key={b.title}
                  href={b.href}
                  className="rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={b.title}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <InquiryForm />
      <FaqSection />
    </>
  )
}
