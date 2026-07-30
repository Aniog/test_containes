import SEO from '@/components/layout/SEO'
import InquiryForm from '@/components/sections/InquiryForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us | Get a Free Sourcing Quote | SSourcing China"
        description="Contact SSourcing China for a free sourcing quote. Tell us about your product and we will match you with verified suppliers in China."
      />
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label text-brand-400">Contact</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Get a free sourcing quote
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Fill out the form below or reach out directly. We typically respond within 1-2 business days.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <InquiryForm />
            </div>

            <div className="space-y-6">
              <div className="card p-6">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-brand-700" />
                </div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:info@ssourcingchina.com" className="text-slate-600 hover:text-brand-700">
                  info@ssourcingchina.com
                </a>
              </div>

              <div className="card p-6">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 text-brand-700" />
                </div>
                <h3 className="font-semibold mb-1">Phone / WhatsApp</h3>
                <a href="tel:+8675588881234" className="text-slate-600 hover:text-brand-700">
                  +86 755 8888 1234
                </a>
              </div>

              <div className="card p-6">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-brand-700" />
                </div>
                <h3 className="font-semibold mb-1">Office</h3>
                <p className="text-slate-600 text-sm">
                  Office 1208, Tower B, Fortune Plaza<br />
                  Shenzhen, Guangdong, China 518000
                </p>
              </div>

              <div className="card p-6">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-brand-700" />
                </div>
                <h3 className="font-semibold mb-1">Business Hours</h3>
                <p className="text-slate-600 text-sm">
                  Monday – Friday<br />
                  9:00 AM – 6:00 PM (GMT+8)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
