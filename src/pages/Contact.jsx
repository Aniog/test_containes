import { MapPin, Mail, Phone, Clock, MessageSquare } from 'lucide-react'
import InquiryForm from '../components/shared/InquiryForm'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Offices',
    lines: ['Guangzhou, Guangdong, China', 'Yiwu, Zhejiang, China'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@ssourcingchina.com', 'quotes@ssourcingchina.com'],
  },
  {
    icon: Phone,
    title: 'Call or WhatsApp',
    lines: ['+86 20 1234 5678', '+86 139 0000 0000 (WhatsApp)'],
  },
  {
    icon: Clock,
    title: 'Response Time',
    lines: ['Within 24 hours', 'Mon–Fri, 9am–6pm CST'],
  },
]

export default function Contact() {
  return (
    <div>
      {/* Header */}
      <div className="bg-[#1A3C6E] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#D4A017] text-xs font-semibold uppercase tracking-widest mb-3">Get Started</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-[#CBD5E0] text-lg max-w-2xl mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a sourcing plan and cost estimate — at no obligation.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 md:py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-[#1A1A2E] mb-2">Contact Information</h2>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Reach out directly or fill in the form and we'll contact you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex gap-4 bg-white rounded-xl p-4 border border-[#E2E8F0]">
                    <div className="w-10 h-10 bg-[#EBF2FA] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#1A3C6E]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A1A2E] text-sm mb-1">{title}</div>
                      {lines.map((line) => (
                        <div key={line} className="text-[#4A5568] text-sm">{line}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Why contact us */}
              <div className="bg-[#1A3C6E] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="w-5 h-5 text-[#D4A017]" />
                  <h3 className="text-white font-semibold">What Happens Next?</h3>
                </div>
                <ol className="space-y-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'We schedule a free consultation call',
                    'We prepare a tailored sourcing plan',
                    'You decide whether to proceed — no pressure',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#CBD5E0] text-sm">
                      <span className="w-5 h-5 bg-[#C0392B] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-[#E2E8F0] p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A2E] mb-6">Sourcing Inquiry Form</h2>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
