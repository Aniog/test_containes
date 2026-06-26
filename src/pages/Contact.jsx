import { Container } from '@/components/ui/Container'
import { InquiryForm } from '@/components/contact/InquiryForm'
import { site } from '@/data/site'
import { Icon } from '@/components/ui/Icon'

export default function Contact() {
  return (
    <div>
      <section className="bg-neutral-900 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block uppercase tracking-wide text-accent font-semibold text-sm mb-4">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Get in Touch</h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Tell us about your sourcing needs. We usually reply within one business day.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <InquiryForm showTitle={false} />
            </div>

            <div className="space-y-8">
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-lg font-bold text-neutral-900 mb-4">Contact Information</h3>
                <ul className="space-y-4 text-neutral-600">
                  <li className="flex items-start gap-3">
                    <Icon name="Mail" className="h-5 w-5 mt-0.5 text-primary" />
                    <a href={`mailto:${site.email}`} className="hover:text-primary">
                      {site.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Phone" className="h-5 w-5 mt-0.5 text-primary" />
                    <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-primary">
                      {site.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="MapPin" className="h-5 w-5 mt-0.5 text-primary" />
                    <span>{site.address}</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-lg font-bold text-neutral-900 mb-4">Office Hours</h3>
                <ul className="space-y-2 text-neutral-600 text-sm">
                  <li className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span>9:00 AM – 6:00 PM CST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>By appointment</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
