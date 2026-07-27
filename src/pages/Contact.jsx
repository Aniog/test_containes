import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import { company } from '@/data/content'
import PageHeader from '@/components/sections/PageHeader'
import InquiryForm from '@/components/sections/InquiryForm'

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote"
        subtitle="Tell us what you want to source from China. A sourcing specialist will review your request and respond within one business day."
      />

      <section className="bg-surface">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-ink">
                Request a free quote
              </h2>
              <p className="mt-2 text-sm text-slate-body">
                The more detail you provide, the more accurate our response will
                be. Fields marked with <span className="text-action">*</span>{' '}
                are required.
              </p>
              <div className="mt-8">
                <InquiryForm />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border-base bg-white p-7">
                <h3 className="text-lg font-semibold text-ink">
                  Contact details
                </h3>
                <p className="mt-2 text-sm text-slate-body">
                  Prefer to reach us directly? Use the details below.
                </p>

                <ul className="mt-6 space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">Email</p>
                      <p className="text-sm text-slate-body">{company.email}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">Phone</p>
                      <p className="text-sm text-slate-body">{company.phone}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">WhatsApp</p>
                      <p className="text-sm text-slate-body">
                        {company.whatsapp}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">Office</p>
                      <p className="text-sm text-slate-body">
                        {company.address}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">
                        Working hours
                      </p>
                      <p className="text-sm text-slate-body">{company.hours}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-xl border border-border-base bg-primary p-7 text-white">
                <h3 className="text-lg font-semibold">What happens next?</h3>
                <ol className="mt-4 space-y-3 text-sm text-slate-200">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-action text-xs font-bold text-white">
                      1
                    </span>
                    <span>We review your request within one business day.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-action text-xs font-bold text-white">
                      2
                    </span>
                    <span>
                      We schedule a short call or email to clarify requirements.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-action text-xs font-bold text-white">
                      3
                    </span>
                    <span>
                      You receive a free, no-obligation quote with next steps.
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
