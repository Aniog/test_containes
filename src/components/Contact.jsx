import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', company: '', product: '', message: '' })
    }, 1200)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Us',
      value: 'sales@artitectmachinery.com',
      href: 'mailto:sales@artitectmachinery.com',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '+1 (800) 555-0199',
      href: 'tel:+18005550199',
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: '4820 Industrial Parkway, Cleveland, OH 44125',
      href: '#',
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent-400 tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-5 tracking-tight">
            Request a Quote or Demo
          </h2>
          <p className="text-brand-400 text-lg leading-relaxed">
            Our sales engineers are ready to help you find the perfect folding
            solution for your workshop. Fill out the form and we will respond
            within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-brand-400 group-hover:text-accent-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              )
            })}

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-brand-400 mb-3">
                Business Hours
              </p>
              <p className="text-white font-medium text-sm">
                Monday – Friday: 8:00 AM – 6:00 PM EST
              </p>
              <p className="text-white font-medium text-sm">
                Saturday: 9:00 AM – 2:00 PM EST
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="bg-brand-700/50 border border-brand-600 rounded-2xl p-10 text-center">
                <CheckCircle className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-brand-400 mb-6">
                  Thank you for reaching out. Our team will contact you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm font-semibold text-accent-400 hover:text-accent-300 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-brand-700/40 border border-brand-600 rounded-2xl p-6 sm:p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-brand-300 mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-brand-800/60 border border-brand-600 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-brand-500 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-brand-300 mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-brand-800/60 border border-brand-600 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-brand-500 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-brand-300 mb-1.5"
                    >
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full bg-brand-800/60 border border-brand-600 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-brand-500 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all"
                      placeholder="Acme Fabrication"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="product"
                      className="block text-sm font-medium text-brand-300 mb-1.5"
                    >
                      Product of Interest
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="w-full bg-brand-800/60 border border-brand-600 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all appearance-none"
                    >
                      <option value="" className="bg-brand-800">Select a product</option>
                      <option value="double-folding-machine" className="bg-brand-800">Double Folding Machine</option>
                      <option value="double-folder" className="bg-brand-800">Double Folder</option>
                      <option value="sheet-metal-folder" className="bg-brand-800">Sheet Metal Folder</option>
                      <option value="sheet-metal-folding-machine" className="bg-brand-800">Sheet Metal Folding Machine</option>
                      <option value="metal-folder" className="bg-brand-800">Metal Folder</option>
                      <option value="metal-folding-machine" className="bg-brand-800">Metal Folding Machine</option>
                      <option value="other" className="bg-brand-800">Other / Custom</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-brand-300 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-brand-800/60 border border-brand-600 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-brand-500 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all resize-none"
                    placeholder="Tell us about your requirements, material thickness, and expected volume..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 disabled:opacity-60 text-white font-semibold px-8 py-3 rounded-lg transition-all text-sm tracking-wide"
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
