import { Mail, Phone, MapPin, Clock, Globe2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import InquiryForm from '../components/InquiryForm'

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote"
        subtitle="Send us your product brief. We will review feasibility and reply within one business day with a clear quote and proposed next steps."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-bold tracking-tight text-brand-navy">
                Reach our team in China
              </h2>
              <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                Project managers in Yiwu and Shenzhen handle inquiries in English.
                For complex briefs, we recommend the inquiry form so we can prepare a precise quote.
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
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-surface text-brand-blue">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">Working hours</p>
                    <p className="text-sm text-brand-muted">Mon–Fri, 9:00–18:00 China Standard Time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-surface text-brand-blue">
                    <Globe2 className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">Languages</p>
                    <p className="text-sm text-brand-muted">English · Mandarin Chinese</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-xl border border-brand-border bg-brand-surface p-5">
                <p className="text-sm font-semibold text-brand-navy">Confidentiality</p>
                <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                  Your product details and supplier information stay confidential.
                  We sign mutual NDAs on request before any technical files are shared.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
