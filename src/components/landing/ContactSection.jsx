import ContactForm from "./ContactForm"
import { Mail, Phone, MapPin } from "lucide-react"

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Let's start a conversation
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">
            Have a question or ready to get started? Fill out the form and we'll be in touch shortly.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Info panel */}
          <div className="md:col-span-2 flex flex-col gap-8">
            <div className="bg-slate-50 rounded-xl border border-border p-6 flex flex-col gap-6">
              <h3 className="font-semibold text-slate-900 text-lg">Get in touch</h3>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Email</p>
                  <p className="text-sm text-slate-600">hello@launchpad.io</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Phone</p>
                  <p className="text-sm text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Office</p>
                  <p className="text-sm text-slate-600">123 Market St, San Francisco, CA 94105</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl border border-primary/20 p-6">
              <p className="text-sm font-semibold text-primary mb-1">Response time</p>
              <p className="text-sm text-slate-700">We typically respond within <strong>24 hours</strong> on business days.</p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 bg-white rounded-xl border border-border shadow-sm p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
