import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function About() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', form)
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div>
      {/* Page header */}
      <section className="bg-brand-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            About ARTITECT MACHINERY
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Decades of engineering excellence in sheet metal folding technology.
          </p>
        </div>
      </section>

      {/* About content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-primary tracking-tight mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  Founded with a singular vision — to build the most reliable and precise 
                  sheet metal folding machines in the industry — ARTITECT MACHINERY has 
                  grown from a small engineering workshop into a trusted name in industrial 
                  fabrication equipment.
                </p>
                <p>
                  Our team of mechanical engineers, CNC specialists, and industrial designers 
                  work together to create machines that combine heavy-duty durability with 
                  cutting-edge precision. Every ARTITECT machine undergoes rigorous testing 
                  before it leaves our facility.
                </p>
                <p>
                  Today, our double folding machines, sheet metal folders, and metal folding 
                  machines are used by manufacturers and workshops across North America, 
                  Europe, and Asia — trusted for their reliability, accuracy, and longevity.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-primary tracking-tight mb-6">
                Our Values
              </h2>
              <div className="space-y-5">
                {[
                  { title: 'Precision', desc: 'Every fold matters. We engineer to tolerances measured in microns.' },
                  { title: 'Durability', desc: 'Our machines are built with premium materials for decades of service.' },
                  { title: 'Innovation', desc: 'We continuously refine our designs with the latest manufacturing technology.' },
                  { title: 'Support', desc: 'From selection to installation, our team is with you every step of the way.' },
                ].map((v, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1.5 bg-brand-accent rounded-full shrink-0 mt-1.5 self-stretch" />
                    <div>
                      <h3 className="font-semibold text-brand-primary">{v.title}</h3>
                      <p className="text-sm text-slate-500 mt-0.5">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight">
              Get in Touch
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Ready to discuss your requirements? Fill out the form below and our team 
              will get back to you within one business day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Contact info */}
            <div className="space-y-6">
              {[
                { icon: Phone, title: 'Phone', content: '+1 (555) 123-4567' },
                { icon: Mail, title: 'Email', content: 'info@artitectmachinery.com' },
                { icon: MapPin, title: 'Address', content: '123 Industrial Way, Suite 100, Chicago, IL 60601' },
                { icon: Clock, title: 'Hours', content: 'Mon – Fri: 8:00 AM – 6:00 PM' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <item.icon className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-brand-primary">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div className="md:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-lg border border-slate-200 p-8 text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-2">Thank You!</h3>
                  <p className="text-slate-500">We've received your inquiry and will get back to you shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm font-medium text-brand-accent hover:text-brand-accent-hover transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-slate-200 p-6 md:p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent resize-none"
                      placeholder="Tell us about your requirements, including material types, thickness, and production volume..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-accent hover:bg-brand-accent-hover text-brand-dark font-semibold px-6 py-3 rounded-md transition-colors text-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
