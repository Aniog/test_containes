import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Factory, Target, Users, Award, MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

const stats = [
  { icon: Factory, value: '25+', label: 'Years of Experience' },
  { icon: Award, value: '3,000+', label: 'Machines Installed' },
  { icon: Users, value: '50+', label: 'Countries Served' },
  { icon: Target, value: '99.8%', label: 'Customer Satisfaction' },
]

export default function About() {
  const containerRef = useRef(null)
  const location = useLocation()
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    if (location.hash === '#contact') {
      const el = document.getElementById('contact')
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }, [location])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', company: '', message: '' })
  }

  return (
    <div ref={containerRef}>
      {/* About Hero */}
      <section className="bg-brand-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span id="about-label" className="text-brand-accent font-semibold text-sm uppercase tracking-wider">
            Our Story
          </span>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            About ARTITECT MACHINERY
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            For over two decades, we've been engineering precision metal folding solutions that manufacturers trust worldwide.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-brand-accent font-semibold text-sm uppercase tracking-wider">
                Since 1998
              </span>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-brand-primary-dark tracking-tight">
                Engineering Precision, Building Trust
              </h2>
              <div className="mt-6 space-y-4 text-[#5A6278] leading-relaxed">
                <p>
                  ARTITECT MACHINERY was founded in 1998 with a singular mission: to build the world's most reliable metal folding machines. What began as a small engineering workshop in Chicago has grown into a global manufacturer trusted by thousands of fabrication shops and industrial facilities.
                </p>
                <p>
                  Our team combines decades of mechanical engineering expertise with modern manufacturing techniques. Every machine that leaves our facility undergoes rigorous testing and calibration to ensure it meets our exacting standards for precision and durability.
                </p>
                <p>
                  We believe that a folding machine is more than just equipment — it's the backbone of your production line. That's why we stand behind every product with comprehensive warranty coverage, lifetime technical support, and a genuine commitment to your success.
                </p>
              </div>
            </div>

            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-lg">
              <div
                className="w-full h-full"
                data-strk-bg-id="about-factory-bg-m1n2o3"
                data-strk-bg="[about-label]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-brand-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-brand-accent/20 flex items-center justify-center mb-4">
                  <stat.icon className="w-7 h-7 text-brand-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-white">{stat.value}</div>
                <div className="mt-1 text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-[#F5F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-accent font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-primary-dark tracking-tight">
              Contact Our Team
            </h2>
            <p className="mt-4 text-[#5A6278] max-w-xl mx-auto">
              Whether you need a quote, technical specifications, or want to schedule a demo, our team is ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-brand-primary-light flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-primary-dark text-sm">Visit Us</h4>
                  <p className="mt-1 text-[#5A6278] text-sm">
                    123 Industrial Parkway, Suite 400<br />Chicago, IL 60601
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-brand-primary-light flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-primary-dark text-sm">Call Us</h4>
                  <p className="mt-1 text-[#5A6278] text-sm">+1 (312) 555-0198</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-brand-primary-light flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-primary-dark text-sm">Email Us</h4>
                  <p className="mt-1 text-[#5A6278] text-sm">info@artitectmachinery.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-brand-primary-light flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-primary-dark text-sm">Business Hours</h4>
                  <p className="mt-1 text-[#5A6278] text-sm">
                    Mon-Fri: 8:00 AM – 6:00 PM CT<br />
                    Sat: 9:00 AM – 1:00 PM CT
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-primary-dark">Thank You!</h3>
                    <p className="mt-2 text-[#5A6278]">
                      Your message has been received. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2.5 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary-dark transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-brand-primary-dark mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-colors text-sm"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-brand-primary-dark mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-colors text-sm"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-brand-primary-dark mb-1.5">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-colors text-sm"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-brand-primary-dark mb-1.5">
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-colors text-sm"
                          placeholder="Your Company Inc."
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-brand-primary-dark mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-colors text-sm resize-none"
                        placeholder="Tell us about your requirements, including desired machine type, material thickness, and production volume..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-accent text-white font-semibold rounded-lg hover:brightness-110 transition-all duration-200 shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
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