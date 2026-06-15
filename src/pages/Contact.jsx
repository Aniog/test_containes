import React from 'react'
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react'
import { toast } from 'sonner'

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    machine: 'Double Folder df-4000',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      toast.success('Your message has been sent. An engineer will contact you shortly.')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', company: '', machine: 'Double Folder df-4000', message: '' })
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const officeLocations = [
    { city: 'New York', address: '680 Fifth Avenue, 15th Floor, NY 10019', phone: '+1 212 555 0192', email: 'sales.us@artitect.com' },
    { city: 'Berlin', address: 'Kurfürstendamm 21, 10719 Berlin, Germany', phone: '+49 30 555 0812', email: 'sales.eu@artitect.com' },
    { city: 'Singapore', address: '1 Marina Boulevard, Level 20, Singapore 018989', phone: '+65 6555 0431', email: 'sales.asia@artitect.com' }
  ]

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#d4af37]/10 skew-x-12 translate-x-20" />
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-[#d4af37] font-bold tracking-widest text-sm uppercase block mb-4">Get in touch</span>
          <h1 className="text-4xl md:text-6xl font-serif font-black mb-6">Expert Consultation. <br />Global Support.</h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            Whether you need a custom quote, technical specifications, or specialized training, 
            our engineering team is ready to assist your operations worldwide.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-12 mb-24 relative z-20">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
          {/* Contact Info */}
          <div className="w-full md:w-1/3 bg-[#f8f9fa] p-12">
            <h2 className="text-2xl font-serif font-black mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Central Line</p>
                  <p className="text-slate-900 font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <Mail className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Email Support</p>
                  <p className="text-slate-900 font-medium">contact@artitect.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <Globe className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Global HQ</p>
                  <p className="text-slate-900 font-medium leading-tight">680 Fifth Avenue, 15th Floor, <br />New York, NY 10019</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-slate-200">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Connect with us</h3>
              <div className="flex gap-4">
                {/* Social icons could go here */}
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs hover:bg-[#d4af37] transition-colors cursor-pointer">FB</div>
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs hover:bg-[#d4af37] transition-colors cursor-pointer">IN</div>
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs hover:bg-[#d4af37] transition-colors cursor-pointer">LI</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3 p-12">
            <h2 className="text-2xl font-serif font-black mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-md text-sm focus:bg-white focus:ring-1 focus:ring-[#d4af37] outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-md text-sm focus:bg-white focus:ring-1 focus:ring-[#d4af37] outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Company</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-md text-sm focus:bg-white focus:ring-1 focus:ring-[#d4af37] outline-none transition-all"
                    placeholder="Acme Fabrication"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Interest</label>
                  <select 
                    name="machine"
                    value={formData.machine}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-md text-sm focus:bg-white focus:ring-1 focus:ring-[#d4af37] outline-none transition-all appearance-none"
                  >
                    <option>Double Folder df-4000</option>
                    <option>Sheet Metal Folder Classic</option>
                    <option>Metal Folding Machine Compact</option>
                    <option>Hydraulic Folder Ultra</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Your Message</label>
                <textarea 
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-md text-sm focus:bg-white focus:ring-1 focus:ring-[#d4af37] outline-none transition-all resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-slate-900 text-white px-8 py-4 rounded-md font-bold text-sm w-full md:w-auto hover:bg-[#d4af37] hover:text-slate-900 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending Request...' : 'Send Message'} <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Global Offices */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-black text-center mb-16">Global Presence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {officeLocations.map((office) => (
              <div key={office.city} className="space-y-4">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-black uppercase tracking-widest text-[#d4af37]">{office.city}</h3>
                <p className="text-slate-500 text-sm max-w-[200px] mx-auto">{office.address}</p>
                <div className="pt-4 space-y-1">
                  <p className="text-slate-900 font-bold text-sm">{office.phone}</p>
                  <p className="text-[#d4af37] text-xs font-bold">{office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
