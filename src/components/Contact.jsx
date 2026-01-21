import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@ai-site.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "San Francisco, CA",
      description: "Come say hello at our office"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-400 mr-4"></div>
            <span className="text-purple-400 font-medium uppercase tracking-wider">Contact</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-400 ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI? Get in touch with our team of experts 
            and discover how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-gray-300 mb-2 font-medium">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all resize-none"
                  placeholder="Tell us about your project and how we can help..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center group"
              >
                Send Message
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We're here to help you harness the power of AI for your business. 
                Whether you have questions about our services or want to discuss a 
                custom solution, our team is ready to assist you.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">{info.title}</h4>
                      <p className="text-purple-300 font-medium mb-1">{info.content}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center mb-3">
                <Clock className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-medium">Response Time</span>
              </div>
              <p className="text-white font-semibold mb-2">We typically respond within 2-4 hours</p>
              <p className="text-gray-300 text-sm">
                Our team is committed to providing quick and helpful responses to all inquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact