import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Globe } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Address',
    details: ['Room 1205, Tower B,', 'World Trade Center,', 'Guangzhou 510000, China'],
  },
  {
    icon: Phone,
    title: 'Phone & WhatsApp',
    details: ['+86 20 8888 6666', '+86 138 0000 8888 (WhatsApp)'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@ssourcingchina.com', 'sourcing@ssourcingchina.com'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Monday - Friday: 9:00 AM - 6:00 PM (CST)', 'Saturday: 9:00 AM - 1:00 PM (CST)'],
  },
]

export default function Contact() {
  const containerRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Get In Touch</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to start sourcing from China? Get in touch with our team for a free consultation and sourcing quote.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Let's Discuss Your Sourcing Needs</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you have a specific product in mind or need guidance on sourcing from China, our team is ready to help. We respond to all inquiries within 24 hours.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10 shrink-0">
                        <Icon className="h-5 w-5 text-brand-orange" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-brand-navy mb-1">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-sm text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden bg-gray-100 aspect-[4/3]">
                <img
                  data-strk-img-id="contact-map-guangzhou"
                  data-strk-img="Guangzhou city map office location"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="SSourcing China office location in Guangzhou"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-green-50 rounded-xl p-12 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-brand-navy mb-4">Thank You!</h2>
                  <p className="text-gray-600 max-w-md mx-auto">
                    We have received your message. Our team will review your inquiry and get back to you within 24 hours with a detailed response.
                  </p>
                </div>
              ) : (
                <div className="bg-brand-slate rounded-xl p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="h-6 w-6 text-brand-orange" />
                    <h2 className="text-xl font-bold text-brand-navy">Send Us a Message</h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                        <Input placeholder="John Smith" required className="h-11 bg-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
                        <Input placeholder="Your Company Ltd." className="h-11 bg-white" />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                        <Input type="email" placeholder="john@company.com" required className="h-11 bg-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone / WhatsApp</label>
                        <Input placeholder="+1 234 567 8900" className="h-11 bg-white" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Country / Region</label>
                      <Input placeholder="e.g., United States, United Kingdom, Australia" className="h-11 bg-white" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Category</label>
                      <Input placeholder="e.g., Electronics, Home Goods, Apparel, Machinery" className="h-11 bg-white" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                      <Textarea
                        placeholder="Please describe the products you need, including specifications, quantity, target price, and any special requirements. The more detail you provide, the better we can assist you."
                        rows={5}
                        required
                        className="bg-white"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold h-12 text-base">
                      <Send className="h-4 w-4 mr-2" />
                      Send Inquiry
                    </Button>
                    
                    <p className="text-xs text-center text-gray-500">
                      By submitting this form, you agree to our privacy policy. We will never share your information with third parties.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 bg-brand-navy">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="h-10 w-10 text-brand-orange mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Serving Clients Worldwide</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We work with businesses across North America, Europe, Australia, the Middle East, and beyond. No matter where you are located, we can help you source products from China efficiently and reliably.
          </p>
        </div>
      </section>
    </div>
  )
}
