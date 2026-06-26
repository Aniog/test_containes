import { useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#f8f9fa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#c69c3f]">
              Get in Touch
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl">
              Request a Quote or Demo
            </h2>
            <p className="mt-4 text-lg text-[#6b7280]">
              Tell us about your project and our team will recommend the right
              folding machine for your production needs.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
                  <Phone className="h-5 w-5 text-[#c69c3f]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#6b7280]">Phone</div>
                  <div className="font-semibold text-[#1a1a1a]">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
                  <Mail className="h-5 w-5 text-[#c69c3f]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#6b7280]">Email</div>
                  <div className="font-semibold text-[#1a1a1a]">
                    sales@artitectmachinery.com
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
                  <MapPin className="h-5 w-5 text-[#c69c3f]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#6b7280]">Headquarters</div>
                  <div className="font-semibold text-[#1a1a1a]">
                    1200 Industrial Parkway, Detroit, MI 48207
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="h-12 w-12 text-[#c69c3f]" />
                <h3 className="mt-4 text-xl font-bold text-[#1a1a1a]">
                  Message Sent
                </h3>
                <p className="mt-2 text-[#6b7280]">
                  Thank you. Our team will get back to you within one business
                  day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block text-sm font-medium text-[#1a1a1a]"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={values.name}
                      onChange={handleChange}
                      className="w-full rounded-md border border-[#e5e7eb] bg-white px-4 py-2.5 text-[#1a1a1a] placeholder:text-[#9ca3af] focus:border-[#c69c3f] focus:outline-none focus:ring-1 focus:ring-[#c69c3f]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-medium text-[#1a1a1a]"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={values.email}
                      onChange={handleChange}
                      className="w-full rounded-md border border-[#e5e7eb] bg-white px-4 py-2.5 text-[#1a1a1a] placeholder:text-[#9ca3af] focus:border-[#c69c3f] focus:outline-none focus:ring-1 focus:ring-[#c69c3f]"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="mb-1 block text-sm font-medium text-[#1a1a1a]"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={values.company}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e5e7eb] bg-white px-4 py-2.5 text-[#1a1a1a] placeholder:text-[#9ca3af] focus:border-[#c69c3f] focus:outline-none focus:ring-1 focus:ring-[#c69c3f]"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-[#1a1a1a]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={values.message}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e5e7eb] bg-white px-4 py-2.5 text-[#1a1a1a] placeholder:text-[#9ca3af] focus:border-[#c69c3f] focus:outline-none focus:ring-1 focus:ring-[#c69c3f]"
                    placeholder="Tell us about the materials, thickness, and production volume you need."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#c69c3f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b08a35] sm:w-auto"
                >
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
