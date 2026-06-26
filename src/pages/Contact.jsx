import * as React from "react"
import PageHeader from "@/components/shared/PageHeader"
import SectionTitle from "@/components/shared/SectionTitle"
import InquiryForm from "@/components/shared/InquiryForm"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@ssourcingchina.com", href: "mailto:info@ssourcingchina.com" },
  { icon: Phone, label: "Phone", value: "+86 138 1234 5678", href: "tel:+8613812345678" },
  { icon: MapPin, label: "Offices", value: "Shenzhen & Yiwu, China" },
  { icon: Clock, label: "Response time", value: "Within 24 hours" },
]

export default function Contact() {
  return (
    <div>
      <PageHeader
        title="Get a free sourcing quote"
        description="Tell us what you need. We will review your project and reply with a clear next step within one business day."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionTitle align="left" title="Send us your inquiry" description="Fill out the form below with as much detail as possible." />
              <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <InquiryForm />
              </div>
            </div>
            <div>
              <SectionTitle align="left" title="Contact details" />
              <div className="mt-8 space-y-4">
                {contactInfo.map((item, idx) => (
                  <Card key={idx} className="border-slate-200">
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="mt-1 text-base font-medium text-slate-900 hover:text-brand-600">
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-base font-medium text-slate-900">{item.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
