import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    cakeType: 'birthday'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      cakeType: 'birthday'
    })
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-pink-600" />,
      title: "Visit Our Shop",
      details: ["123 Sweet Street", "Bakery District, BD 12345"],
      action: "Get Directions"
    },
    {
      icon: <Phone className="w-6 h-6 text-pink-600" />,
      title: "Call Us",
      details: ["(555) 123-CAKE", "(555) 123-2253"],
      action: "Call Now"
    },
    {
      icon: <Mail className="w-6 h-6 text-pink-600" />,
      title: "Email Us",
      details: ["orders@sweetdreamscakes.com", "info@sweetdreamscakes.com"],
      action: "Send Email"
    },
    {
      icon: <Clock className="w-6 h-6 text-pink-600" />,
      title: "Opening Hours",
      details: ["Mon-Sat: 8:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      action: "View Calendar"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to order your dream cake? We'd love to hear from you! 
            Contact us to discuss your special occasion.
          </p>
          <div className="w-24 h-1 bg-pink-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className="bg-white rounded-full p-3 shadow-md mr-4">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 mb-1">
                          {detail}
                        </p>
                      ))}
                      <button className="text-pink-600 hover:text-pink-700 font-semibold mt-2 text-sm">
                        {info.action} →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-pink-600 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Interactive Map</p>
                <p className="text-sm text-gray-500">Find us easily in the heart of the city</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="cakeType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Cake Type
                  </label>
                  <select
                    id="cakeType"
                    name="cakeType"
                    value={formData.cakeType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="birthday">Birthday Cake</option>
                    <option value="wedding">Wedding Cake</option>
                    <option value="anniversary">Anniversary Cake</option>
                    <option value="custom">Custom Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your dream cake... What's the occasion? Any specific design ideas? Dietary requirements?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white py-4 px-6 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>

            {/* Quick Contact Options */}
            <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl">
              <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-pink-600" />
                Need Immediate Help?
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-white hover:bg-gray-50 text-pink-600 py-3 px-4 rounded-lg font-semibold border-2 border-pink-600 transition-colors duration-200">
                  Call Now: (555) 123-CAKE
                </button>
                <button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200">
                  WhatsApp Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact