import { Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "./ContactForm"

export default function ContactSection({ formRef }) {
  return (
    <section id="contact" className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Get in touch</h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Have a question or want to learn more? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Contact information</h3>
              <p className="text-slate-600 leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours. We're here to help.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Email</p>
                  <p className="text-sm text-slate-600">hello@spark.io</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Phone</p>
                  <p className="text-sm text-slate-600">+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Office</p>
                  <p className="text-sm text-slate-600">123 Innovation Drive<br />San Francisco, CA 94105</p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-indigo-600 rounded-2xl text-white">
              <p className="font-semibold mb-1">Response time</p>
              <p className="text-indigo-200 text-sm">We typically respond within a few hours during business days.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <ContactForm formRef={formRef} />
          </div>
        </div>
      </div>
    </section>
  )
}
