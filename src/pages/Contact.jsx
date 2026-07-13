import Seo from "@/components/shared/Seo.jsx"
import PageHero from "@/components/shared/PageHero.jsx"
import Section from "@/components/shared/Section.jsx"
import InquiryForm from "@/components/shared/InquiryForm.jsx"
import FAQ from "@/components/shared/FAQ.jsx"
import { Mail, MapPin, Phone, Clock, Globe2 } from "lucide-react"
import { faqs } from "@/data/faq.js"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@ssourcingchina.com",
    href: "mailto:hello@ssourcingchina.com",
  },
  {
    icon: Phone,
    label: "Phone / WeChat",
    value: "+86 755 0000 0000",
    href: "tel:+8675500000000",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Futian District, Shenzhen, China",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 1 business day",
  },
]

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact SSourcing China | Get a Free Sourcing Quote"
        description="Tell us about your project. A sourcing specialist will reply within one business day with a sourcing plan and a transparent quote."
      />
      <PageHero
        eyebrow="Contact"
        title="Tell us about your project"
        description="The fastest way to get a real answer is to fill in the short brief below. We will come back within one business day with a sourcing plan and a transparent quote."
      />

      <Section>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <InquiryForm sourcePageHint="/contact" />
          </div>
          <aside className="lg:col-span-5 order-1 lg:order-2 space-y-5">
            <div className="card p-6 md:p-7">
              <h2 className="h-card">Get in touch</h2>
              <p className="mt-2 text-sm text-slate-600">
                Prefer email or a call? Use any of the channels below.
              </p>
              <ul className="mt-5 space-y-4">
                {contactInfo.map((c) => (
                  <li key={c.label} className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-md bg-brand-50 text-brand-800 flex items-center justify-center shrink-0">
                      <c.icon className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="text-sm md:text-base font-medium text-slate-900 hover:text-brand-800"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm md:text-base font-medium text-slate-900">
                          {c.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6 md:p-7 bg-brand-50 border-brand-100">
              <h3 className="text-base md:text-lg font-semibold text-slate-900 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-brand-800" />
                Languages
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                We work in English and Mandarin. We will reply in English
                unless you write to us in Chinese.
              </p>
            </div>
            <div className="card p-6 md:p-7">
              <h3 className="text-base md:text-lg font-semibold text-slate-900">
                What happens after you submit?
              </h3>
              <ol className="mt-3 space-y-2.5 text-sm text-slate-700 list-decimal pl-5">
                <li>A sourcing specialist reads your brief (same business day).</li>
                <li>We reply with up to 3 clarifying questions, if needed.</li>
                <li>Within 1 business day, you receive a sourcing plan and quote.</li>
                <li>If you want to proceed, we sign a service agreement and start.</li>
              </ol>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid lg:grid-cols-12 gap-10 items-center" id="office">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-3">Our office</p>
            <h2 className="h-section">Shenzhen, Guangdong</h2>
            <p className="body-base mt-4">
              Our team is based in Shenzhen with partner inspectors in the
              major manufacturing clusters across southern and eastern China.
              Visits are by appointment only.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li><span className="font-semibold">Address:</span> Futian District, Shenzhen, Guangdong, China</li>
              <li><span className="font-semibold">Hours:</span> Mon – Fri, 09:00 – 18:00 (CST, UTC+8)</li>
              <li><span className="font-semibold">Email:</span> <a className="text-brand-800 hover:underline" href="mailto:hello@ssourcingchina.com">hello@ssourcingchina.com</a></li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="aspect-[16/10] rounded-2xl bg-slate-100 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                <MapPin className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="h-section text-center mb-3">Quick answers</h2>
          <p className="body-base text-center mb-10">
            A few things buyers ask before they send the brief.
          </p>
          <FAQ items={faqs.slice(0, 6)} />
        </div>
      </Section>
    </>
  )
}
