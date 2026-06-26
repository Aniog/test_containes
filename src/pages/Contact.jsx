import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import { PageHeader } from "@/components/sections/PageHeader"
import { Container } from "@/components/ui/primitives"
import InquiryForm from "@/components/InquiryForm"
import { company } from "@/data/site"

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us about the product you want to source. We will review your requirements and reply within one business day with next steps."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900">Talk to our team</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                Whether you are sourcing a new product or fixing a problem with an existing supplier,
                our team in Shenzhen can help. Reach out using the form or the contact details below.
              </p>

              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Email</p>
                    <p className="text-sm text-slate-600">{company.email}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Phone</p>
                    <p className="text-sm text-slate-600">{company.phone}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">WhatsApp</p>
                    <p className="text-sm text-slate-600">{company.whatsapp}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Office</p>
                    <p className="text-sm text-slate-600">{company.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Working hours</p>
                    <p className="text-sm text-slate-600">{company.hours}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <InquiryForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
