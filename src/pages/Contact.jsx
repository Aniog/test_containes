import React, { useState } from 'react'
import { Toaster, toast } from 'sonner'
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: 'Double Folding Machine',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { data: response, error } = await client
        .from('ContactInquiry')
        .insert({
          data: {
            ...formData,
            status: 'new'
          }
        })
        .select()
        .single()

      if (error || response?.success === false) {
        throw new Error(error?.message || response?.errors?.[0] || 'Submission failed')
      }

      toast.success('Inquiry sent successfully! We will contact you shortly.')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: 'Double Folding Machine',
        message: ''
      })
    } catch (err) {
      console.error(err)
      toast.error(err.message || 'Failed to send inquiry. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <Toaster position="top-right" />

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Contact Info Panel */}
            <div className="bg-brand-900 text-white p-12">
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <p className="text-brand-500 mb-12 text-lg">
                Have questions about our folding machines? Our experts are ready to provide technical specifications and customized quotes.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-800 p-3 rounded-lg"><Phone className="w-6 h-6 text-brand-500" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <p className="text-brand-500">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-800 p-3 rounded-lg"><Mail className="w-6 h-6 text-brand-500" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Email Us</h4>
                    <p className="text-brand-500">sales@artitectmachinery.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-800 p-3 rounded-lg"><MapPin className="w-6 h-6 text-brand-500" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Visit Us</h4>
                    <p className="text-brand-500 uppercase tracking-tighter text-sm">Industrial Hub, Block 12, Tech City, 10115 EU</p>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <h4 className="font-bold mb-4">Follow Our Progress</h4>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-800 flex items-center justify-center rounded-full cursor-pointer hover:bg-brand-700 transition-all text-brand-500">FB</div>
                  <div className="w-10 h-10 bg-brand-800 flex items-center justify-center rounded-full cursor-pointer hover:bg-brand-700 transition-all text-brand-500">LI</div>
                  <div className="w-10 h-10 bg-brand-800 flex items-center justify-center rounded-full cursor-pointer hover:bg-brand-700 transition-all text-brand-500">TW</div>
                </div>
              </div>
            </div>

            {/* Form Panel */}
            <div className="p-12">
              <h3 className="text-2xl font-bold text-brand-900 mb-8">Submit Specification Request</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                    <input
                      required
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                    <input
                      required
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                    <input
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="Architecture Ltd."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Product of Interest</label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
                  >
                    <option>Double Folding Machine</option>
                    <option>Sheet Metal Folder</option>
                    <option>CNC folder</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-red-100 disabled:opacity-70"
                >
                  {loading ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      Send Inquiry <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
