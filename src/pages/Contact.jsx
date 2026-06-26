import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import InquiryForm from '../components/shared/InquiryForm'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@ssourcingchina.com',
    href: 'mailto:hello@ssourcingchina.com',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+86 (0) 579 8000 0000',
    href: 'tel:+8605798000000',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Yiwu, Zhejiang, China',
  },
  {
    icon: Clock,
    label: 'Working hours',
    value: 'Mon – Fri · 09:00 – 18:00 (GMT+8)',
  },
]

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        titleId="contact-page-title"
        descId="contact-page-desc"
        title="Talk to a China sourcing manager"
        description="Tell us about your product. We will review your project and reply within one business day with a free, tailored sourcing proposal."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4 space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  Get in touch
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Prefer email or WhatsApp? Use the details below. For a structured response,
                  the inquiry form helps us reply faster.
                </p>
              </div>

              <ul className="space-y-4">
                {contacts.map(({ icon: Icon, label, value, href }) => (
                  <li
                    key={label}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-700 flex-shrink-0">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="mt-0.5 block text-sm font-medium text-slate-900 hover:text-blue-700 break-words"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="mt-0.5 text-sm font-medium text-slate-900">{value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-100 text-emerald-700 flex-shrink-0">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Need an NDA first?
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      Mention it in the message field and we will share an NDA before any
                      product details are discussed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <InquiryForm
                title="Request a free sourcing quote"
                subtitle="Fields marked with * are required. The more detail you share, the more precise our response."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
