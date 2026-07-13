import { useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, Clock, Linkedin } from 'lucide-react'
import QuoteForm from '@/components/shared/QuoteForm'
import PageHeader from '@/components/shared/PageHeader'
import SectionLabel from '@/components/shared/SectionLabel'

export default function Contact() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <div ref={containerRef}>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team for a free sourcing quote or to discuss your project."
        backgroundId="contact-header-bg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start">
            <div className="lg:col-span-2">
              <SectionLabel>Get in Touch</SectionLabel>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Start a Conversation
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Whether you are ready to place an order or still researching suppliers, our team is happy to answer questions and recommend the next steps.
              </p>

              <div className="mt-8 space-y-6">
                <a href="mailto:info@ssourcingchina.com" className="flex items-start gap-4 group no-underline hover:no-underline">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Email</p>
                    <p className="text-slate-600">info@ssourcingchina.com</p>
                  </div>
                </a>

                <a href="tel:+8613812345678" className="flex items-start gap-4 group no-underline hover:no-underline">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Phone / WhatsApp</p>
                    <p className="text-slate-600">+86 138 1234 5678</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Office</p>
                    <p className="text-slate-600">Room 1208, Tairan Building, Futian District, Shenzhen, China</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Working Hours</p>
                    <p className="text-slate-600">Monday – Friday, 9:00 AM – 6:00 PM (CST)</p>
                  </div>
                </div>

                <a href="#" className="flex items-start gap-4 group no-underline hover:no-underline">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">LinkedIn</p>
                    <p className="text-slate-600">SSourcing China</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
