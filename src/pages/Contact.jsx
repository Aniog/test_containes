import {
  MapPin, Mail, Phone, Clock, MessageCircle,
  Globe, ArrowRight
} from 'lucide-react'
import InquiryForm from '../components/InquiryForm'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Address',
    details: ['Room 1205, Tower B', 'Technology Park, Nanshan District', 'Shenzhen, Guangdong 518000', 'China'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@ssourcingchina.com', 'quotes@ssourcingchina.com'],
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+86 755-8888-9999', 'WeChat: ssourcingchina'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 9:00 AM - 6:00 PM (CST)', 'Saturday: 9:00 AM - 1:00 PM (CST)', 'Sunday: Closed'],
  },
]

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F172A] to-[#1B4D8E] py-20 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm text-blue-200 font-medium mb-4">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-lg text-gray-300 max-w-[600px] mx-auto">
            Tell us about your product requirements and our team will respond within 24 hours with a tailored sourcing plan.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#F8FAFC] rounded-2xl p-8 md:p-10 border border-gray-100">
                <h2 className="text-2xl font-extrabold text-[#0F172A] mb-2">Tell Us What You Need</h2>
                <p className="text-sm text-gray-500 mb-8">Fill out the form below and we will get back to you within 24 hours.</p>
                <InquiryForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {contactInfo.map(item => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#1B4D8E]/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#1B4D8E]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0F172A] mb-1.5">{item.title}</h3>
                      <div className="space-y-0.5">
                        {item.details.map((d, i) => (
                          <p key={i} className="text-sm text-gray-500">{d}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden border border-gray-200 bg-gray-100 h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Shenzhen, Guangdong, China</p>
                </div>
              </div>

              {/* Quick response badge */}
              <div className="mt-6 p-4 bg-[#F59E0B]/10 rounded-xl border border-[#F59E0B]/20">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-[#F59E0B] shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-[#0F172A]">Fast Response Guarantee</p>
                    <p className="text-xs text-gray-500">We respond to all inquiries within 24 business hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ quick section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-2xl font-extrabold text-[#0F172A] mb-3">Before You Reach Out</h2>
          <p className="text-gray-500 text-sm mb-8">Here are some things that help us give you a faster, more accurate quote:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Product Details', desc: 'Photos, drawings, or detailed descriptions of what you need' },
              { title: 'Quantity', desc: 'Your estimated order quantity or range' },
              { title: 'Timeline', desc: 'When you need the products delivered' },
            ].map(item => (
              <div key={item.title} className="p-5 bg-white rounded-xl border border-gray-100 text-left">
                <h4 className="text-sm font-bold text-[#0F172A] mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
