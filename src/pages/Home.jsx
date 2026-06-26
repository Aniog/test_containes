import React, { useState, useRef, useEffect } from 'react'
import { ArrowRight, Check, Phone, Mail, MapPin, Wrench, Settings, Layers } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const products = [
    {
      id: 1,
      name: 'Double Folding Machine',
      description: 'High-precision double folding machine designed for complex sheet metal operations with superior accuracy and repeatability.',
      features: ['Dual folding capability', 'Precision control', 'Heavy-duty construction', 'CNC compatibility'],
      icon: Layers
    },
    {
      id: 2,
      name: 'Double Folder',
      description: 'Versatile double folder for efficient processing of various sheet metal thicknesses with exceptional bending quality.',
      features: ['Dual folding stations', 'Quick setup', 'Material versatility', 'Energy efficient'],
      icon: Settings
    },
    {
      id: 3,
      name: 'Sheet Metal Folder',
      description: 'Professional-grade sheet metal folder engineered for precision bending and folding operations in industrial environments.',
      features: ['Industrial grade', 'Precision bending', 'Durable design', 'Easy operation'],
      icon: Wrench
    },
    {
      id: 4,
      name: 'Sheet Metal Folding Machine',
      description: 'Advanced folding machine specifically designed for sheet metal applications requiring high accuracy and productivity.',
      features: ['High accuracy', 'Automated controls', 'Safety systems', 'Low maintenance'],
      icon: Settings
    },
    {
      id: 5,
      name: 'Metal Folder',
      description: 'Robust metal folder built to handle demanding fabrication tasks with consistent performance and reliability.',
      features: ['Heavy-duty build', 'Consistent performance', 'Operator friendly', 'Cost effective'],
      icon: Layers
    },
    {
      id: 6,
      name: 'Metal Folding Machine',
      description: 'State-of-the-art metal folding machine combining innovative technology with precision engineering for superior results.',
      features: ['Innovative technology', 'Superior results', 'Programmable logic', 'Quality assurance'],
      icon: Wrench
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          data-strk-bg-id="hero-bg-pattern"
          data-strk-bg="machinery metal fabrication industrial equipment"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Precision Engineered
              <span className="block text-blue-400 mt-2" id="hero-subtitle">Folding Machines</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ARTITECT MACHINERY delivers industry-leading sheet metal folding solutions 
              with unmatched precision, durability, and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Explore Our Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product Line
            </h2>
            <p id="products-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of precision folding machines designed 
              to meet the most demanding sheet metal fabrication requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const IconComponent = product.icon
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  {/* Product Image Placeholder */}
                  <div 
                    className="h-48 bg-gradient-to-br from-blue-600 to-gray-800 flex items-center justify-center"
                    data-strk-bg-id={`product-${product.id}-image`}
                    data-strk-bg={`${product.name} sheet metal machinery`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="600"
                  >
                    <IconComponent className="w-16 h-16 text-white opacity-50" />
                  </div>
                  
                  <div className="p-8">
                    <h3 id={`product-title-${product.id}`} className="text-xl font-bold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    
                    <p id={`product-desc-${product.id}`} className="text-gray-600 mb-6">
                      {product.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="px-8 pb-8">
                    <a
                      href="#contact"
                      className="block w-full text-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                    >
                      Request Information
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose ARTITECT MACHINERY?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With decades of combined experience in precision engineering, ARTITECT MACHINERY 
                has established itself as a trusted name in sheet metal fabrication equipment.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our folding machines are designed with the operator in mind, combining advanced 
                technology with intuitive controls to deliver exceptional results every time.
              </p>
              
              <div className="space-y-4">
                {[
                  'Industry-leading precision and accuracy',
                  'Robust construction for long-term reliability',
                  'Comprehensive warranty and support',
                  'Custom solutions available'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-gray-900 p-8">
                <div className="flex flex-col justify-center h-full text-white">
                  <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Quality First</h4>
                        <p className="text-sm text-gray-200">Every machine undergoes rigorous testing</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Innovation</h4>
                        <p className="text-sm text-gray-200">Continuously improving our technology</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Customer Support</h4>
                        <p className="text-sm text-gray-200">Dedicated support team at your service</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to elevate your sheet metal fabrication capabilities? Contact us today 
              for a consultation or to request a quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:info@artitectmachinery.com" className="text-gray-600 hover:text-blue-600">
                        info@artitectmachinery.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        123 Industrial Park Drive<br />
                        Manufacturing District, ST 12345
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
