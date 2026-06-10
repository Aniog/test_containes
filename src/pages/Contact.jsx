import { Mail, Phone, MapPin, MessageCircle, Clock, Globe } from 'lucide-react'
import PageHero, { CtaBanner } from '@/components/PageHero.jsx'
import InquiryForm from '@/components/InquiryForm.jsx'

const CONTACT = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@ssourcing.cn',
    href: 'mailto:hello@ssourcing.cn',
    note: 'Replies within one business day',
  },
  {
    icon: Phone,
    label: 'WhatsApp / WeChat',
    value: '+86 138 0000 0000',
    href: 'https://wa.me/8613800000000',
    note: 'Mon–Fri, 9:00–18:00 China time (UTC+8)',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Shenzhen, Guangdong, China',
    href: null,
    note: 'Project managers cover Guangdong, Zhejiang, Jiangsu, Fujian, Shanghai',
  },
]

const REGIONS = [
  'United States',
  'Canada',
  'United Kingdom',
  'European Union',
  'Australia & New Zealand',
  'Middle East',
  'Southeast Asia',
  'Latin America',
  'Africa',
]

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your sourcing project"
        description="Most buyers hear back from us within 24 hours with a shortlist of factories, an indicative cost, and an honest assessment of feasibility."
      />

      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <div className="label-eyebrow">Get in touch</div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-brand-ink md:text-3xl">
                Three ways to reach us
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                Use the form on the right to get a structured quote, or contact us directly through the channels below.
              </p>

              <ul className="mt-6 space-y-4">
                {CONTACT.map((c) => {
                  const Icon = c.icon
                  const Wrapper = c.href ? 'a' : 'div'
                  return (
                    <li
                      key={c.label}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-brand-accent-soft text-brand-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          {c.label}
                        </div>
                        <Wrapper
                          {...(c.href ? { href: c.href } : {})}
                          className="mt-0.5 block text-sm font-semibold text-brand-ink hover:text-brand-accent"
                        >
                          {c.value}
                        </Wrapper>
                        <div className="mt-0.5 text-xs text-slate-500">{c.note}</div>
                      </div>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-3">
                  <Clock className="h-4 w-4 text-brand-accent" />
                  <span className="text-slate-700">24h quote turnaround</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-3">
                  <MessageCircle className="h-4 w-4 text-brand-accent" />
                  <span className="text-slate-700">English support</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-3 col-span-2">
                  <Globe className="h-4 w-4 text-brand-accent" />
                  <span className="text-slate-700">Serving buyers in {REGIONS.length} regions</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
