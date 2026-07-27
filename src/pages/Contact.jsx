import { Mail, Phone, MapPin, Clock, Linkedin, MessageCircle } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import InquiryForm from '@/components/InquiryForm'

export default function Contact() {
  return (
    <>
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="section-container text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to source from China? Send us your inquiry and we will respond within one business day.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <InquiryForm />
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Contact information</h3>
                <div className="space-y-4 text-sm">
                  <a href="mailto:info@ssourcingchina.com" className="flex items-start gap-3 text-slate-600 hover:text-brand transition-colors">
                    <Mail className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                    <span>info@ssourcingchina.com</span>
                  </a>
                  <a href="tel:+8613812345678" className="flex items-start gap-3 text-slate-600 hover:text-brand transition-colors">
                    <Phone className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                    <span>+86 138 1234 5678</span>
                  </a>
                  <div className="flex items-start gap-3 text-slate-600">
                    <MapPin className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                    <span>Room 1208, Fortune Plaza, No. 7002 Shennan Avenue, Shenzhen, China 518000</span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-600">
                    <Clock className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                    <span>Mon–Fri, 9:00 AM – 6:00 PM (GMT+8)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Follow us</h3>
                <div className="flex items-center gap-4">
                  <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-brand hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" aria-label="WeChat" className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-brand hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="bg-brand-light/60 rounded-xl border border-brand/10 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Response time</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We reply to all sourcing inquiries within 24 business hours. For urgent requests, reach us on WhatsApp or WeChat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
