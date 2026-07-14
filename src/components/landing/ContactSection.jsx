import React from "react"
import ContactForm from "./ContactForm"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@example.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: MapPin, label: "Office", value: "123 Main St, San Francisco, CA" },
  { icon: Clock, label: "Hours", value: "Mon–Fri, 9am–6pm PST" },
]

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in touch</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Have a project in mind? We'd love to hear from you. Fill out the form and we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
                      <p className="text-gray-800 font-medium mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-600 rounded-2xl p-6 text-white">
              <h4 className="font-semibold text-lg mb-2">Quick response guaranteed</h4>
              <p className="text-indigo-200 text-sm leading-relaxed">
                We typically respond to all inquiries within a few hours during business days. Your message matters to us.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
