import React, { useState, useEffect, useRef } from 'react'
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import { DataClient, User, ImageHelper } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import strkImgConfig from '@/strk-img-config.json'
import { toast } from 'sonner'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const Contact = () => {
  const containerRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product_type: '',
    estimated_order_value: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // 1. CRM: Upsert User
      const userRecord = await User.upsert({
        email: formData.email,
        name: formData.name,
        role: 'guest'
      })

      // 2. Save Inquiry
      const { data: response, error: dbError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            ...formData,
            user_id: userRecord?.id,
            status: 'pending',
            createdAt: new Date().toISOString()
          }
        })

      if (dbError || response?.success === false) {
        throw new Error(response?.errors?.[0] || dbError?.message || 'Submission failed')
      }

      setSubmitted(true)
      toast.success('Inquiry submitted successfully! Our team will contact you within 24 hours.')
    } catch (err) {
      console.error(err)
      setError(err.message)
      toast.error('Failed to submit inquiry. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us & Get a Free Quote</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to streamline your China sourcing? Fill out the form below and our professional sourcing team will get back to you with a customized solution.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8 underline decoration-accent decoration-4 underline-offset-8">Information</h2>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <div className="bg-slate-100 p-3 rounded-lg mr-4"><MapPin className="text-secondary w-6 h-6" /></div>
                  <div>
                    <p className="font-bold text-primary">Head Office</p>
                    <p className="text-slate-600 text-sm mt-1">Nanshan District, Shenzhen,<br />Guangdong Province, China</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-slate-100 p-3 rounded-lg mr-4"><Phone className="text-secondary w-6 h-6" /></div>
                  <div>
                    <p className="font-bold text-primary">Phone & WhatsApp</p>
                    <p className="text-slate-600 text-sm mt-1">+86 123 4567 8901</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-slate-100 p-3 rounded-lg mr-4"><Mail className="text-secondary w-6 h-6" /></div>
                  <div>
                    <p className="font-bold text-primary">Email Support</p>
                    <p className="text-slate-600 text-sm mt-1">info@ssourcingchina.com<br />quotes@ssourcingchina.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-primary text-xl mb-4">Our Response Time</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Our team is located in UTC+8 time zone. We typically respond to all inquiries within 12-24 hours.
              </p>
              <div className="flex items-center text-sm font-bold text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" /> Current Team Status: Online
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center space-y-6 shadow-sm">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-green-600">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-bold text-green-800">Inquiry Received!</h2>
                <p className="text-lg text-green-700 max-w-md mx-auto">
                  Thank you for contacting SSourcing China. One of our senior sourcing managers will review your requirements and contact you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-bold transition-all"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16" />
                
                <h2 className="text-3xl font-bold text-primary mb-8">Send a Sourcing Inquiry</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name *</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Business Email *</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Company Name</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Product(s) to Source</label>
                      <input 
                        type="text" 
                        name="product_type"
                        value={formData.product_type}
                        onChange={handleChange}
                        placeholder="e.g. Wooden Furniture, Sensors"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Estimated Annual Order Value (USD)</label>
                    <select 
                      name="estimated_order_value"
                      value={formData.estimated_order_value}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all bg-white"
                    >
                      <option value="">Select a range</option>
                      <option value="< 0,000">Less than $10,000</option>
                      <option value="$10,000 - 0,000">$10,000 - $50,000</option>
                      <option value="$50,000 - 00,000">$50,000 - $200,000</option>
                      <option value="$200,000+">$200,000+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Detailed Requirements *</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Please describe the products you are looking for, required certifications, and any other details."
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    ></textarea>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-100 rounded-lg flex items-center text-red-700 text-sm">
                      <AlertCircle className="w-4 h-4 mr-2" /> {error}
                    </div>
                  )}

                  <button 
                    disabled={loading}
                    type="submit" 
                    className="w-full bg-primary hover:bg-slate-900 text-white font-bold py-4 rounded-lg flex items-center justify-center transition-all shadow-lg hover:shadow-xl disabled:bg-slate-400"
                  >
                    {loading ? 'Processing...' : (
                      <>
                        Submit Inquiry <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-500 text-center italic">
                    By submitting, you agree to our privacy policy and consent to being contacted by our team.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map/Trust Area */}
      <section className="bg-slate-50 py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
             <h2 className="text-3xl font-bold text-primary">Strategic Location in Shenzhen</h2>
             <p className="text-lg text-slate-600 leading-relaxed">
               Based in Shenzhen, the "Silicon Valley of Hardware," we are at the heart of China's manufacturing and electronics hub. Our location allows us to reach thousands of factories in the Pearl River Delta within hours.
             </p>
             <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center space-x-4">
                <div className="bg-primary/10 p-4 rounded-full"><Factory className="text-primary w-8 h-8" /></div>
                <div>
                  <p className="font-bold text-primary">Proximity to Major Ports</p>
                  <p className="text-sm text-slate-500">Less than 50km from Yantian and Shekou ports.</p>
                </div>
             </div>
           </div>
           <div className="rounded-3xl overflow-hidden shadow-2xl h-96 border-4 border-white relative group">
              <img 
                alt="Shenzhen Office Location" 
                data-strk-img-id="map-img-1"
                data-strk-img="Shenzhen city skyline drone shot industrial hub"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all" />
           </div>
        </div>
      </section>
    </div>
  )
}

const Factory = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M2 20V9l4-2 4 2 4-2 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
    <path d="M17 18h1" />
    <path d="M12 18h1" />
    <path d="M7 18h1" />
  </svg>
)

export default Contact
