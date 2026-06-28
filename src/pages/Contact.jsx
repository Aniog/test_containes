import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import InquiryForm from '@/components/contact/InquiryForm'

export default function Contact() {
  return (
    <div>
      {/* Header */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 block">
            Contact
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Tell us about your product and requirements. We will respond within 24 hours with next steps and a tailored proposal.
          </p>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-surface rounded-lg border border-border-light p-6 space-y-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-blue-700 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-slate-700">Email</div>
                        <a href="mailto:inquiry@ssourcingchina.com" className="text-sm text-slate-500 hover:text-blue-700">
                          inquiry@ssourcingchina.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-blue-700 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-slate-700">Phone / WhatsApp</div>
                        <a href="tel:+8675588881234" className="text-sm text-slate-500 hover:text-blue-700">
                          +86 755 8888 1234
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-700 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-slate-700">Office</div>
                        <p className="text-sm text-slate-500">
                          Floor 12, Block B<br />
                          Nanshan Tech Park<br />
                          Shenzhen, Guangdong 518057<br />
                          China
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-700 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-slate-700">Business Hours</div>
                        <p className="text-sm text-slate-500">
                          Mon – Fri: 9:00 – 18:00 CST<br />
                          Sat: 9:00 – 13:00 CST
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-700">Quick Response Promise</span>
                  </div>
                  <p className="text-sm text-slate-500">
                    We respond to all inquiries within 24 business hours. For urgent requests, contact us via WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-border-light p-6 sm:p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-1">Submit Your Inquiry</h2>
                <p className="text-sm text-slate-500 mb-6">
                  The more details you provide, the more accurate our quote will be.
                </p>
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
