import PageHero from '@/components/shared/PageHero'
import { Section } from '@/components/ui/Section'
import InquiryForm from '@/components/shared/InquiryForm'
import Faq from '@/components/shared/Faq'
import { SITE } from '@/content'
import { Mail, Phone, MessageCircle, MapPin, Clock } from 'lucide-react'

const CONTACT_METHODS = [
  {
    icon: 'Mail',
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: 'Phone',
    label: 'Phone',
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s/g, '')}`,
  },
  {
    icon: 'MessageCircle',
    label: 'WhatsApp',
    value: SITE.whatsapp,
  },
  {
    icon: 'MapPin',
    label: 'Location',
    value: SITE.address,
  },
]

const iconMap = { Mail, Phone, MessageCircle, MapPin }

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get a free sourcing quote"
        description="Tell us about your product and requirements. We will review your request and reply within one business day with the next steps."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
              Talk to our team
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Whether you are sourcing a new product or looking for better
              quality control on an existing one, we are here to help. Reach us
              through any of the channels below.
            </p>

            <div className="mt-8 space-y-4">
              {CONTACT_METHODS.map((method) => {
                const Icon = iconMap[method.icon]
                const content = (
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {method.label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-foreground">
                        {method.value}
                      </p>
                    </div>
                  </div>
                )
                return method.href ? (
                  <a key={method.label} href={method.href} className="block hover:shadow-sm transition-shadow">
                    {content}
                  </a>
                ) : (
                  <div key={method.label}>{content}</div>
                )
              })}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent/20 bg-accent/5 p-4">
              <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Response time
                </p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  We reply to all inquiries within one business day
                  (China time, UTC+8).
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <InquiryForm />
          </div>
        </div>
      </Section>

      <Faq muted />
    </>
  )
}
