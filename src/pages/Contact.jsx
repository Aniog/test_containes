import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@artitectmachinery.com',
    href: 'mailto:info@artitectmachinery.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '450 Industrial Parkway, Suite 200, Chicago, IL 60607',
    href: null,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Fri: 8:00 AM – 6:00 PM CST',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#14161a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-[#c8a45c] font-medium mb-3">
            Get in Touch
          </p>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#e8e4dc] mb-4">
            Contact Us
          </h1>
          <p className="text-[#7a7d85] max-w-2xl text-lg">
            Ready to discuss your sheet metal folding needs? Our team is here to help 
            you find the perfect solution.
          </p>
        </div>
        <div className="h-[2px] bg-[#c8a45c]/30" />
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#14161a] mb-8">
                How to Reach Us
              </h2>
              <div className="flex flex-col gap-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#14161a] flex items-center justify-center rounded-sm shrink-0">
                      <info.icon className="w-5 h-5 text-[#c8a45c]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#c8a45c] font-medium mb-1">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-[#14161a] hover:text-[#c8a45c] transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#14161a] font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Response Promise */}
              <div className="mt-12 p-6 bg-[#14161a] rounded-sm">
                <p className="text-[#e8e4dc] text-sm leading-relaxed">
                  <span className="text-[#c8a45c] font-semibold">Quick Response Promise:</span>
                  {' '}We respond to all inquiries within one business day. For urgent requests, 
                  please call us directly.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-[#e0dcd5] rounded-sm p-8">
                <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#14161a] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-[#7a7d85] text-sm mb-8">
                  Fill out the form below and we&apos;ll get back to you shortly.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-[#f7f5f0] rounded-sm flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-[#c8a45c]" />
                    </div>
                    <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#14161a] mb-2">
                      Thank You for Your Inquiry
                    </h3>
                    <p className="text-[#7a7d85] max-w-md mx-auto">
                      We&apos;ve received your message and will get back to you within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#14161a] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm border border-[#e0dcd5] rounded-sm bg-[#f7f5f0] text-[#14161a] placeholder:text-[#7a7d85] focus:outline-none focus:border-[#c8a45c] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#14161a] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm border border-[#e0dcd5] rounded-sm bg-[#f7f5f0] text-[#14161a] placeholder:text-[#7a7d85] focus:outline-none focus:border-[#c8a45c] transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#14161a] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm border border-[#e0dcd5] rounded-sm bg-[#f7f5f0] text-[#14161a] placeholder:text-[#7a7d85] focus:outline-none focus:border-[#c8a45c] transition-colors"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[#14161a] mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm border border-[#e0dcd5] rounded-sm bg-[#f7f5f0] text-[#14161a] placeholder:text-[#7a7d85] focus:outline-none focus:border-[#c8a45c] transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-[#14161a] mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm border border-[#e0dcd5] rounded-sm bg-[#f7f5f0] text-[#14161a] placeholder:text-[#7a7d85] focus:outline-none focus:border-[#c8a45c] transition-colors resize-y"
                        placeholder="Tell us about your requirements, materials, and production volume..."
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-sm bg-[#c8a45c] text-[#14161a] hover:bg-[#d4b87a] transition-colors duration-200"
                      >
                        Send Message
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
