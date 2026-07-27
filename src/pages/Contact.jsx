import { PageContainer } from "@/components/shared/PageContainer"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { InquiryForm } from "@/components/shared/InquiryForm"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@ssourcingchina.com",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+86 755 1234 5678",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Shenzhen, Guangdong, China",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 1 business day",
  },
]

export default function Contact() {
  return (
    <PageContainer>
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="text-4xl font-bold sm:text-5xl">
            Get a Free Sourcing Quote
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Tell us what you are sourcing and our team will reply within one
            business day.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-slate-50 p-6 sm:p-10">
                <InquiryForm sourcePage="contact" />
              </div>
            </div>

            <aside className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900">
                Contact Information
              </h2>
              {contactDetails.map((d) => (
                <div key={d.label} className="flex gap-4">
                  <d.icon className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {d.label}
                    </p>
                    <p className="mt-1 text-slate-900">{d.value}</p>
                  </div>
                </div>
              ))}

              <div className="rounded-xl bg-primary-light p-6">
                <h3 className="font-semibold text-slate-900">
                  Prefer to email directly?
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Send your product brief, target quantity, and any supplier
                  requirements to{" "}
                  <a
                    href="mailto:hello@ssourcingchina.com"
                    className="font-medium text-primary hover:underline"
                  >
                    hello@ssourcingchina.com
                  </a>
                  .
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageContainer>
  )
}
