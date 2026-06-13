import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', company: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0B0F19]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#C9A45C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Get in Touch
          </span>
          <h2 className="text-[#F5F5F5] text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Request a Quote
          </h2>
          <p className="text-[#9BA3AF] text-lg max-w-2xl mx-auto">
            Tell us about your production needs and our team will recommend the
            right machine for your workshop.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#C9A45C]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#C9A45C]" />
              </div>
              <div>
                <h4 className="text-[#F5F5F5] font-semibold mb-1">Email</h4>
                <p className="text-[#9BA3AF] text-sm">sales@artitectmachinery.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#C9A45C]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#C9A45C]" />
              </div>
              <div>
                <h4 className="text-[#F5F5F5] font-semibold mb-1">Phone</h4>
                <p className="text-[#9BA3AF] text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#C9A45C]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#C9A45C]" />
              </div>
              <div>
                <h4 className="text-[#F5F5F5] font-semibold mb-1">Location</h4>
                <p className="text-[#9BA3AF] text-sm">
                  4820 Industrial Parkway<br />
                  Cleveland, OH 44125, USA
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-[#141B2D] rounded-xl border border-[#1E293B] p-8 md:p-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[#F5F5F5] text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-[#0B0F19] border border-[#1E293B] rounded-lg px-4 py-3 text-[#F5F5F5] text-sm placeholder:text-[#64748B] focus:outline-none focus:border-[#C9A45C] transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[#F5F5F5] text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-[#0B0F19] border border-[#1E293B] rounded-lg px-4 py-3 text-[#F5F5F5] text-sm placeholder:text-[#64748B] focus:outline-none focus:border-[#C9A45C] transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="contact-company"
                  className="block text-[#F5F5F5] text-sm font-medium mb-2"
                >
                  Company
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full bg-[#0B0F19] border border-[#1E293B] rounded-lg px-4 py-3 text-[#F5F5F5] text-sm placeholder:text-[#64748B] focus:outline-none focus:border-[#C9A45C] transition-colors"
                  placeholder="Your company name"
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="contact-message"
                  className="block text-[#F5F5F5] text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-[#0B0F19] border border-[#1E293B] rounded-lg px-4 py-3 text-[#F5F5F5] text-sm placeholder:text-[#64748B] focus:outline-none focus:border-[#C9A45C] transition-colors resize-none"
                  placeholder="Tell us about your sheet metal folding requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#C9A45C] hover:bg-[#D4B76A] text-[#0B0F19] py-4 rounded-lg text-sm font-semibold uppercase tracking-widest transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Inquiry
              </button>
              {submitted && (
                <p className="text-[#C9A45C] text-sm text-center mt-4">
                  Thank you! We will be in touch shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
