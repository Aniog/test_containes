import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { submitContactForm } from '../api/contact'
import { toast } from 'sonner'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Contact = () => {
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productName: location.state?.productName || '',
    message: ''
  })
  const [status, setStatus] = useState('idle')
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await submitContactForm(formData)
      setStatus('success')
      toast.success('Inquiry submitted successfully! Our engineers will contact you shortly.')
      setFormData({ name: '', email: '', phone: '', productName: '', message: '' })
    } catch (error) {
      console.error('Submission error:', error)
      setStatus('error')
      toast.error('Failed to submit inquiry. Please try again or call us directly.')
    }
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          {/* Contact Info Sidebar */}
           <div className="lg:w-1/3 bg-slate-900 p-12 text-white relative flex flex-col justify-between">
            <div 
              className="absolute inset-0 opacity-20"
              data-strk-bg-id="contact-sidebar-bg"
              data-strk-bg="dark industrial pattern"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="600"
            />
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-8">Get in Touch</h1>
              <p className="text-slate-400 mb-12 font-light leading-relaxed">
                Have specific technical requirements? Our engineering team is ready to discuss custom machinery solutions.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Call Us</p>
                    <p className="text-lg font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Email Us</p>
                    <p className="text-lg font-medium">sales@artitect.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Global HQ</p>
                    <p className="text-lg font-medium">123 Industrial Way, Suite 500<br/>Engineering District</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-16 pt-8 border-t border-white/10 text-slate-500 text-sm">
              Operational Hours: Mon - Fri, 8:00 AM - 6:00 PM EST
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 p-12 md:p-16">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Received</h2>
                <p className="text-slate-600 max-w-sm mx-auto mb-8">
                  Your inquiry message has been successfully routed to our machinery sales specialists.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-slate-900" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-slate-900" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-slate-900" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Interested Machine</label>
                    <input 
                      type="text" 
                      name="productName"
                      value={formData.productName}
                      onChange={handleChange}
                      placeholder="e.g. XL Double Folder"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-slate-900" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Technical Inquiry Details</label>
                  <textarea 
                    rows="5" 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your production requirements or application needs..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-slate-900 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-[0.98] disabled:opacity-70 group"
                >
                  {status === 'submitting' ? 'Transmitting...' : 'Send Inquiry Now'}
                  <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
