import { useEffect } from 'react'
import { Mail, MapPin, Phone, Clock, MessageCircle } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import InquiryForm from '@/components/shared/InquiryForm'

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@ssourcing.cn',
    href: 'mailto:hello@ssourcing.cn',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+86 579 0000 0000',
    href: 'tel:+865790000000',
  },
  {
    icon: MapPin,
    label: 'Office locations',
    value: 'Yiwu, Zhejiang &middot; Shenzhen, Guangdong',
  },
  {
    icon: Clock,
    label: 'Response time',
    value: 'Within 1 business day (Mon–Fri, China time)',
  },
]

export default function Contact() {
  useEffect(() => {
    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need to source"
        description="A sourcing manager will review your inquiry and reply within one business day with the next step — usually a shortlist of factories or a few clarifying questions."
        image={{
          imgId: 'contact-hero-bg-3f1b7e',
          query: '[contact-hero-title]',
        }}
      />

      <section className="py-20 md:py-24 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Get In Touch"
                title="Reach out directly or use the form"
                description="Email is the fastest way to reach us. For active projects, your dedicated sourcing manager is reachable on WhatsApp."
              />

              <ul className="mt-10 space-y-6">
                {contactDetails.map((d) => {
                  const Icon = d.icon
                  const content = (
                    <>
                      <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-brand-mist text-brand-ink shrink-0">
                        <Icon className="w-5 h-5" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                          {d.label}
                        </p>
                        <p className="mt-1 text-base md:text-lg text-brand-ink font-medium">
                          {d.value}
                        </p>
                      </div>
                    </>
                  )
                  return (
                    <li key={d.label}>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="flex items-start gap-4 group"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">{content}</div>
                      )}
                    </li>
                  )
                })}
              </ul>

              <div className="mt-10 p-6 bg-brand-mist rounded-xl border border-brand-line">
                <div className="flex items-start gap-3">
                  <MessageCircle
                    className="w-5 h-5 text-brand-accent shrink-0 mt-0.5"
                    strokeWidth={1.75}
                  />
                  <div>
                    <p className="text-sm font-semibold text-brand-ink">
                      Prefer WhatsApp?
                    </p>
                    <p className="mt-1 text-sm text-brand-muted leading-relaxed">
                      Send a short message with the product you need and your
                      target quantity. We will reply during China business
                      hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="inquiry-form" className="lg:col-span-7">
              <SectionHeader
                eyebrow="Sourcing Inquiry"
                title="Project details"
                description="The more we know about your product, quantity, and timeline, the faster we can come back with a useful shortlist."
              />
              <div className="mt-8">
                <InquiryForm source="contact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-mist">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                title: 'No commitment to start',
                body: 'Submitting an inquiry does not obligate you to place an order. You decide whether to move forward.',
              },
              {
                title: 'Confidential by default',
                body: 'Your product details and supplier information stay between us. NDAs are available on request.',
              },
              {
                title: 'Honest about fit',
                body: 'If we are not the right partner for your project, we will say so and recommend someone who is.',
              },
            ].map((c) => (
              <div
                key={c.title}
                className="bg-white border border-brand-line rounded-xl p-6 md:p-7"
              >
                <h3 className="text-lg font-semibold text-brand-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-brand-muted leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}