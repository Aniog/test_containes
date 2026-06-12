import { Mail, Phone, MapPin } from 'lucide-react'
import InquiryForm from '../InquiryForm'

export default function InquirySection() {
  return (
    <section id="inquiry" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.18em] font-semibold text-brand-blue">
              Get in touch
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-brand-navy">
              Send us your sourcing brief
            </h2>
            <p className="mt-4 text-base text-brand-muted leading-relaxed">
              Tell us what you need and we will reply within one business day with
              a free sourcing quote, an initial supplier shortlist, and a proposed timeline.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-surface text-brand-blue">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">Email</p>
                  <a href="mailto:hello@ssourcing-china.com" className="text-sm text-brand-muted hover:text-brand-blue">
                    hello@ssourcing-china.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-surface text-brand-blue">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">Phone / WhatsApp / WeChat</p>
                  <p className="text-sm text-brand-muted">+86 138 0000 0000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-surface text-brand-blue">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">Offices</p>
                  <p className="text-sm text-brand-muted">Yiwu, Zhejiang · Shenzhen, Guangdong</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-brand-border bg-brand-surface p-5">
              <p className="text-sm font-semibold text-brand-navy">What happens next?</p>
              <ol className="mt-3 space-y-2 text-sm text-brand-muted list-decimal list-inside">
                <li>You submit your inquiry below.</li>
                <li>We review feasibility within 1 business day.</li>
                <li>We reply with a sourcing quote and next steps.</li>
              </ol>
            </div>
          </div>

          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}
