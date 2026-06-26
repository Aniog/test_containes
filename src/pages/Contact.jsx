import { useEffect } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { InquiryForm } from '@/components/InquiryForm'
import { contactInfo } from '@/data/siteData'

const pageTitle = 'Contact | SSourcing China'

export default function Contact() {
  useEffect(() => {
    document.title = pageTitle
  }, [])

  return (
    <>
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wide text-primary">
              Contact
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Have a sourcing project in mind? Send us a message or reach out directly.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <Mail className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-4 font-semibold text-slate-900">Email</h3>
              <p className="mt-2 text-sm text-slate-600">{contactInfo.email}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <Phone className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-4 font-semibold text-slate-900">Phone</h3>
              <p className="mt-2 text-sm text-slate-600">{contactInfo.phone}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <MapPin className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-4 font-semibold text-slate-900">Office</h3>
              <p className="mt-2 text-sm text-slate-600">{contactInfo.address}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <Clock className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-4 font-semibold text-slate-900">Hours</h3>
              <p className="mt-2 text-sm text-slate-600">{contactInfo.hours}</p>
            </div>
          </div>
        </div>
      </div>

      <InquiryForm />
    </>
  )
}
