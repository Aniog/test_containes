import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { toast } from 'sonner'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submission:', formData)
    toast.success('Thank you. We will respond within 24 hours.')
    setFormData({ name: '', company: '', email: '', phone: '', product: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-semibold text-[#0F2942] mb-4">Contact Us</h1>
        <p className="text-xl text-[#64748B]">Get in touch to discuss your sourcing requirements.</p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#1E293B] mb-1.5">Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A8A7B]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1E293B] mb-1.5">Company *</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A8A7B]" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#1E293B] mb-1.5">Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A8A7B]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1E293B] mb-1.5">Phone / WhatsApp</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A8A7B]" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1E293B] mb-1.5">Product / Category of Interest *</label>
              <input type="text" name="product" value={formData.product} onChange={handleChange} required placeholder="e.g., Kitchen appliances, electronic components" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A8A7B]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1E293B] mb-1.5">Message / Requirements *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows="6" placeholder="Please describe your sourcing requirements, target quantities, timeline, and any specific questions..." className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A8A7B] resize-y"></textarea>
            </div>
            <button type="submit" className="px-8 py-3 bg-[#3A8A7B] text-white font-medium rounded-lg hover:bg-[#2F6F63] transition-colors">
              Send Message
            </button>
            <p className="text-xs text-[#64748B]">We typically respond within one business day. Your information is kept confidential.</p>
          </form>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div>
            <h3 className="font-semibold text-[#0F2942] mb-4">Office</h3>
            <div className="space-y-3 text-[#64748B]">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#3A8A7B] flex-shrink-0 mt-0.5" />
                <div>
                  <p>Room 1208, Building 3</p>
                  <p>88 Century Avenue, Pudong</p>
                  <p>Shanghai 200120, China</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-[#3A8A7B] flex-shrink-0 mt-0.5" />
                <a href="tel:+862162345678" className="hover:text-[#0F2942]">+86 21 6234 5678</a>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-[#3A8A7B] flex-shrink-0 mt-0.5" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-[#0F2942]">info@ssourcingchina.com</a>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[#3A8A7B] flex-shrink-0 mt-0.5" />
                <div>Mon-Fri, 9:00-18:00 CST</div>
              </div>
            </div>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-lg">
            <h4 className="font-semibold text-[#0F2942] mb-2">For Urgent Inquiries</h4>
            <p className="text-sm text-[#64748B] mb-3">For time-sensitive matters, reach us via WhatsApp or WeChat.</p>
            <p className="text-sm font-medium text-[#3A8A7B]">+86 138 0013 8000</p>
          </div>

          <div>
            <h4 className="font-semibold text-[#0F2942] mb-2">What to Expect</h4>
            <ul className="text-sm text-[#64748B] space-y-1.5">
              <li>• Response within 24 business hours</li>
              <li>• Initial consultation call scheduled</li>
              <li>• Customized sourcing proposal</li>
              <li>• No obligation to proceed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}