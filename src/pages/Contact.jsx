import { Mail, Phone, MapPin, Clock } from "lucide-react"
import PageHeader from "../components/shared/PageHeader"
import InquiryForm from "../components/shared/InquiryForm"

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Share a short brief and we will reply within one business day with next steps. No commitment, no obligation."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-brand-line bg-brand-soft p-6 md:p-8">
              <h2 className="text-xl font-semibold text-brand-ink md:text-2xl">
                Get in touch
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-body">
                Our sourcing team is based in Shenzhen and works across mainland
                China. We reply to inquiries during Asian and European business hours.
              </p>

              <ul className="mt-8 space-y-5">
                <ContactItem icon={Mail} title="Email">
                  <a href="mailto:hello@ssourcing-china.com" className="text-brand-body hover:text-brand-accent">
                    hello@ssourcing-china.com
                  </a>
                </ContactItem>
                <ContactItem icon={Phone} title="WhatsApp / Phone">
                  <span className="text-brand-body">+86 755 0000 0000</span>
                </ContactItem>
                <ContactItem icon={MapPin} title="Office">
                  <span className="text-brand-body">
                    Room 1208, Shennan Road, Futian District, Shenzhen, China
                  </span>
                </ContactItem>
                <ContactItem icon={Clock} title="Business hours">
                  <span className="text-brand-body">
                    Mon–Fri, 09:00–18:00 (UTC+8)
                  </span>
                </ContactItem>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-brand-line bg-white p-6 md:p-8">
              <h3 className="text-base font-semibold text-brand-ink">
                What happens after you submit
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-brand-body">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-[11px] font-bold text-brand-accent">1</span>
                  <span>We review your inquiry within one business day.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-[11px] font-bold text-brand-accent">2</span>
                  <span>We reply with clarifying questions and a recommended scope.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-[11px] font-bold text-brand-accent">3</span>
                  <span>If we are a good fit, we share a transparent fee proposal.</span>
                </li>
              </ol>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <InquiryForm variant="card" />
          </div>
        </div>
      </section>
    </>
  )
}

function ContactItem({ icon: IconComp, title, children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-white text-brand-accent shadow-sm">
        <IconComp className="h-4 w-4" />
      </span>
      <div>
        <div className="text-sm font-semibold text-brand-ink">{title}</div>
        <div className="mt-0.5 text-sm">{children}</div>
      </div>
    </li>
  )
}
