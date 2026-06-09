import { useState } from 'react'
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding bg-steel-50">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand-500 text-sm font-semibold tracking-[0.25em] uppercase block mb-4">
            Get in Touch
          </span>
          <h2 className="text-headline md:text-5xl text-charcoal-950 mb-5 text-balance">
            Request a Quote
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-charcoal-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your project requirements and our team will provide a customized solution and pricing within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-charcoal-950 p-8 h-full">
              <h3 className="text-white text-xl font-bold mb-6">
                Contact Information
              </h3>
              <p className="text-charcoal-300 text-sm leading-relaxed mb-8">
                Our sales engineers are ready to help you find the perfect machine for your application.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-charcoal-400 text-xs uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-white text-sm font-medium">+1 (800) 555-0187</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-charcoal-400 text-xs uppercase tracking-wider mb-1">Email</p>
                    <p className="text-white text-sm font-medium">info@artitectmachinery.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-charcoal-400 text-xs uppercase tracking-wider mb-1">Address</p>
                    <p className="text-white text-sm font-medium">1200 Industrial Blvd, Suite 400<br />Houston, TX 77001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-charcoal-400 text-xs uppercase tracking-wider mb-1">Business Hours</p>
                    <p className="text-white text-sm font-medium">Mon - Fri: 8:00 AM - 6:00 PM CST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-16 h-16 bg-green-50 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-charcoal-950 text-2xl font-bold mb-3">Thank You!</h3>
                <p className="text-charcoal-500 text-base max-w-md">
                  Your quote request has been submitted. Our sales team will reach out to you within 24 hours with a detailed proposal.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-charcoal-700 text-sm font-semibold mb-2 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 border border-steel-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors text-charcoal-900 text-sm placeholder:text-steel-300"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-charcoal-700 text-sm font-semibold mb-2 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 border border-steel-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors text-charcoal-900 text-sm placeholder:text-steel-300"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-charcoal-700 text-sm font-semibold mb-2 uppercase tracking-wider">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      className="w-full px-4 py-3 border border-steel-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors text-charcoal-900 text-sm placeholder:text-steel-300"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-charcoal-700 text-sm font-semibold mb-2 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 border border-steel-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors text-charcoal-900 text-sm placeholder:text-steel-300"
                    />
                  </div>
                </div>

                {/* Machine Interest */}
                <div className="mt-6">
                  <label htmlFor="interest" className="block text-charcoal-700 text-sm font-semibold mb-2 uppercase tracking-wider">
                    Machine of Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formState.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-steel-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors text-charcoal-900 text-sm appearance-none bg-white"
                  >
                    <option value="">Select a machine...</option>
                    <option value="df-3200">Double Folding Machine (DF-3200)</option>
                    <option value="df-2400">Double Folder (DF-2400)</option>
                    <option value="sf-4000">Sheet Metal Folder (SF-4000)</option>
                    <option value="mf-5000">Metal Folding Machine (MF-5000)</option>
                    <option value="custom">Custom Solution</option>
                    <option value="other">Not Sure / Need Guidance</option>
                  </select>
                </div>

                {/* Message */}
                <div className="mt-6">
                  <label htmlFor="message" className="block text-charcoal-700 text-sm font-semibold mb-2 uppercase tracking-wider">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements, material types, thickness ranges, and expected production volumes..."
                    className="w-full px-4 py-3 border border-steel-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors text-charcoal-900 text-sm placeholder:text-steel-300 resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="mt-8">
                  <button
                    type="submit"
                    className="btn-primary w-full md:w-auto text-base"
                  >
                    <Send className="w-5 h-5" />
                    Submit Quote Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
