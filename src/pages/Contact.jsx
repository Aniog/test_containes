import useDocumentTitle from "@/hooks/useDocumentTitle"
import PageHeader from "@/components/PageHeader"
import InquiryFormSection from "@/components/sections/InquiryFormSection"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "inquiry@ssourcingchina.com",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+86 21 1234 5678",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Shanghai, China",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 1 business day",
  },
]

export default function Contact() {
  useDocumentTitle("Contact | SSourcing China")

  return (
    <>
      <PageHeader
        badge="Contact"
        title="Get in touch"
        description="Have a sourcing project in mind? Send us a message and we will reply within one business day."
      />

      <section className="section bg-slate-50">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="card p-6">
                <h2 className="text-xl font-semibold text-slate-900">Contact information</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Reach out directly or fill in the inquiry form. We look forward to learning about your project.
                </p>
                <ul className="mt-6 space-y-5">
                  {contactInfo.map((item) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-accent">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-900">
                          {item.value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <InquiryFormSection showHeader={false} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
