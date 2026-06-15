import React from 'react'
import { DataClient, User } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react'
import { toast } from "sonner"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export default function Contact() {
  const [values, setValues] = React.useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = React.useState('idle')

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      // Upsert User
      const userRecord = await User.upsert({
        email: values.email,
        name: values.name,
        role: 'guest',
      });

      if (!userRecord || !userRecord.id) {
        throw new Error('Failed to retrieve user profile.');
      }

      // Insert Form Response
      const { error: responseError } = await client
        .from('ContactFormResponse')
        .insert({
          data: {
            user_id: userRecord.id,
            email: values.email,
            name: values.name,
            subject: values.subject,
            message: values.message,
          }
        })

      if (responseError) throw responseError

      setStatus('success')
      setValues({ name: '', email: '', subject: '', message: '' })
      toast.success("Message sent successfully. Our team will contact you shortly.")

    } catch (err) {
      console.error(err)
      setStatus('error')
      toast.error(err.message || 'Submission failed. Please try again later.')
    }
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Contact Header */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6 tracking-tight">Connect With Our Team</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed uppercase tracking-[0.1em]">
            Whether you have a technical question or need a detailed project quote, our engineers are ready to assist.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8 uppercase tracking-widest">Global Support</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#1a1a1a] p-3 rounded-none">
                      <Phone className="h-6 w-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                      <p className="text-[#1a1a1a] font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#1a1a1a] p-3 rounded-none">
                      <Mail className="h-6 w-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                      <p className="text-[#1a1a1a] font-medium">sales@artitect.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#1a1a1a] p-3 rounded-none">
                      <Clock className="h-6 w-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Business Hours</p>
                      <p className="text-[#1a1a1a] font-medium">Mon - Fri, 8AM - 6PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#1a1a1a] p-3 rounded-none">
                      <Globe className="h-6 w-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Global HQ</p>
                      <p className="text-[#1a1a1a] font-medium">Chicago, Illinois, USA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-gray-100">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-6 italic">Artitect Precision Center</h3>
                <div className="bg-gray-100 h-80 w-full flex items-center justify-center p-8 text-center text-gray-400 border border-gray-200">
                  <div className="max-w-xs">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-[#d4af37] opacity-50" />
                    <p className="text-sm font-medium uppercase tracking-widest">
                      Our facility is located at the heart of the Precision Industrial Corridor.
                    </p>
                    <p className="mt-4 text-xs">
                      1234 Industrial Pkwy, Suite 500, Chicago, IL 60601
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 border border-gray-200 shadow-2xl">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8 tracking-tight">Send a Message</h2>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      name="name"
                      value={values.name}
                      onChange={onChange}
                      className="w-full px-4 py-3 bg-gray-50 border-none focus:ring-1 focus:ring-[#d4af37] text-sm text-[#1a1a1a]" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      name="email"
                      value={values.email}
                      onChange={onChange}
                      className="w-full px-4 py-3 bg-gray-50 border-none focus:ring-1 focus:ring-[#d4af37] text-sm text-[#1a1a1a]" 
                      placeholder="john@company.com" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Subject</label>
                  <select 
                    name="subject"
                    value={values.subject}
                    onChange={onChange}
                    className="w-full px-4 py-3 bg-gray-50 border-none focus:ring-1 focus:ring-[#d4af37] text-sm text-[#1a1a1a]"
                  >
                    <option value="">Select a subject</option>
                    <option value="Quote Request">Quote Request</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Partnership">Partnership</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                  <textarea 
                    required 
                    name="message"
                    value={values.message}
                    onChange={onChange}
                    rows="6" 
                    className="w-full px-4 py-3 bg-gray-50 border-none focus:ring-1 focus:ring-[#d4af37] text-sm text-[#1a1a1a] resize-none" 
                    placeholder="How can we help your production line?"
                  ></textarea>
                </div>
                <button 
                  disabled={status === 'submitting'}
                  type="submit" 
                  className="w-full bg-[#1a1a1a] text-white py-4 font-bold uppercase tracking-widest transition-all hover:bg-[#d4af37] flex items-center justify-center space-x-2"
                >
                  <span>{status === 'submitting' ? 'Sending Message...' : 'Submit Request'}</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
