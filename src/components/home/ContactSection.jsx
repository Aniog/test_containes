import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function ContactSection() {
  const [status, setStatus] = useState('idle')
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setValues({ name: '', email: '', company: '', product: '', message: '' })
    }, 1200)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Request a Quote
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Tell us about your project and our team will recommend the right
            folding machine for your workshop.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-slate-900 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-amber-500 mt-1" />
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-amber-500 mt-1" />
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="font-medium">sales@artitectmachinery.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-amber-500 mt-1" />
                  <div>
                    <p className="text-sm text-slate-400">Address</p>
                    <p className="font-medium">
                      1200 Industrial Blvd, Suite 300
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h4 className="text-lg font-bold text-slate-900 mb-3">
                Need help choosing?
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our engineers can guide you through capacity, tooling, and
                automation options to find the best fit.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Message Sent
                </h3>
                <p className="text-slate-600 max-w-md">
                  Thank you for reaching out. Our team will review your request
                  and respond within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-amber-600 font-semibold hover:text-amber-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={values.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={values.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={values.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="product" className="block text-sm font-semibold text-slate-700 mb-2">
                      Product of interest
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={values.product}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
                    >
                      <option value="">Select a product</option>
                      <option value="double-folding-machine">Double Folding Machine</option>
                      <option value="double-folder">Double Folder</option>
                      <option value="sheet-metal-folder">Sheet Metal Folder</option>
                      <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                      <option value="metal-folder">Metal Folder</option>
                      <option value="metal-folder-machine">Metal Folder Machine</option>
                      <option value="metal-folding-machine">Metal Folding Machine</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={values.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-amber-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-600 transition disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
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
