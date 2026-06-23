import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle,
  Send, MessageSquare, Headphones, Zap
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: '',
    quantity: '',
    service: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('idle');

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        country: '',
        product: '',
        quantity: '',
        service: '',
        message: '',
      });
    }, 1500);
  };

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Response',
      description: 'We respond to all inquiries within 24 hours during business days.',
    },
    {
      icon: MessageSquare,
      title: 'Free Consultation',
      description: 'Initial consultation is always free with no obligation.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'You\'ll have a dedicated sourcing manager throughout the process.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] via-[#2D5A8A] to-[#1E3A5F] py-20 lg:py-28">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-gray-200">
              Ready to start sourcing from China? Get in touch with our team 
              for a free consultation and quote.
            </p>
          </div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900">
                Get In Touch
              </h2>
              <p className="mt-4 text-gray-600">
                Have questions about sourcing from China? We're here to help. 
                Reach out through any of the channels below.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">Office Address</div>
                    <div className="mt-1 text-gray-600">
                      Shenzhen, Guangdong Province<br />
                      China 518000
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">Email</div>
                    <a href="mailto:info@ssourcingchina.com" className="mt-1 text-gray-600 hover:text-[#1E3A5F]">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">Phone</div>
                    <a href="tel:+8675588888888" className="mt-1 text-gray-600 hover:text-[#1E3A5F]">
                      +86 755 8888 8888
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">Business Hours</div>
                    <div className="mt-1 text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      (China Standard Time)
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Why Work With Us</h3>
                <div className="space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="ml-3">
                        <div className="font-medium text-gray-900 text-sm">{benefit.title}</div>
                        <div className="text-xs text-gray-600">{benefit.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Request a Quote
                </h2>
                <p className="mt-2 text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {formStatus === 'success' ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-gray-900">Thank You!</h3>
                    <p className="mt-2 text-gray-600 max-w-md mx-auto">
                      Your inquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="mt-8 px-6 py-3 bg-[#1E3A5F] text-white font-medium rounded-lg hover:bg-[#2D5A8A] transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                          placeholder="Your Company Ltd"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                          placeholder="john@company.com"
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
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Country *
                        </label>
                        <select
                          id="country"
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                        >
                          <option value="">Select your country</option>
                          <option value="US">United States</option>
                          <option value="UK">United Kingdom</option>
                          <option value="DE">Germany</option>
                          <option value="FR">France</option>
                          <option value="AU">Australia</option>
                          <option value="CA">Canada</option>
                          <option value="JP">Japan</option>
                          <option value="OTHER">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interested In *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                        >
                          <option value="">Select a service</option>
                          <option value="sourcing">Sourcing & Supplier Finding</option>
                          <option value="verification">Supplier Verification</option>
                          <option value="qc">Quality Control Inspection</option>
                          <option value="production">Production Follow-up</option>
                          <option value="shipping">Shipping & Logistics</option>
                          <option value="full">Full Service Sourcing</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                          Product Category *
                        </label>
                        <select
                          id="product"
                          name="product"
                          required
                          value={formData.product}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                        >
                          <option value="">Select a category</option>
                          <option value="electronics">Electronics & Gadgets</option>
                          <option value="textiles">Textiles & Apparel</option>
                          <option value="furniture">Furniture & Home Goods</option>
                          <option value="machinery">Machinery & Parts</option>
                          <option value="packaging">Packaging & Printing</option>
                          <option value="health">Health & Beauty</option>
                          <option value="toys">Toys & Gifts</option>
                          <option value="sports">Sports & Outdoor</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                          placeholder="e.g., 5000 units"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Requirements *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors resize-none"
                        placeholder="Describe your product requirements, specifications, target price, packaging needs, certifications required, and any other relevant details. The more information you provide, the better we can assist you."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Inquiry
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-16">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[#1E3A5F] mx-auto" />
              <p className="mt-2 text-gray-600">Shenzhen, Guangdong Province, China</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;