import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, Globe, MessageSquare,
  ArrowRight, CheckCircle, Send, Building, Users
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    product: '',
    quantity: '',
    requirements: '',
    timeline: ''
  });
  
  const [status, setStatus] = React.useState('idle');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };
  
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+86 138 0013 8000', '+86 20 8888 8888'],
      description: 'Available Monday-Friday, 9am-6pm CST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@ssourcingchina.com', 'sales@ssourcingchina.com'],
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['Tianhe District, Guangzhou', 'Guangdong Province, China'],
      description: 'Visit us by appointment'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 - 18:00', 'Saturday: 10:00 - 14:00'],
      description: 'China Standard Time (UTC+8)'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-800 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-brand-200 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to start sourcing from China? Get in touch with our team for a free consultation 
              and personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Let's Discuss Your Project
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether you have a specific product in mind or need guidance on sourcing from China, 
                our team is here to help. Reach out to us using any of the methods below.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-brand-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{info.title}</h4>
                      {info.details.map((detail, dIndex) => (
                        <p key={dIndex} className="text-slate-700">{detail}</p>
                      ))}
                      <p className="text-sm text-slate-500 mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-4">Quick Response Promise</h4>
                <div className="space-y-3">
                  {[
                    'Inquiry acknowledgment within 2 hours',
                    'Detailed quote within 24 hours',
                    'Dedicated account manager assigned',
                    'Free initial consultation'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Sent Successfully!</h3>
                    <p className="text-slate-600 mb-8 max-w-md mx-auto">
                      Thank you for contacting us. Our team will review your inquiry and get back to you 
                      within 24 hours with a detailed response.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-brand-500 font-semibold hover:text-brand-600 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Request a Free Quote</h3>
                      <p className="text-slate-600 text-sm">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Subject *</label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="quote">Request a Quote</option>
                        <option value="general">General Inquiry</option>
                        <option value="supplier">Supplier Verification</option>
                        <option value="quality">Quality Inspection</option>
                        <option value="shipping">Shipping & Logistics</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Product to Source</label>
                        <input
                          type="text"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                          placeholder="e.g., Bluetooth speakers"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Estimated Quantity</label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                          placeholder="e.g., 1,000 units"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                      >
                        <option value="">When do you need the products?</option>
                        <option value="1month">Within 1 month</option>
                        <option value="2-3months">2-3 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6+months">6+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Product Requirements *</label>
                      <textarea
                        name="requirements"
                        required
                        value={formData.requirements}
                        onChange={handleChange}
                        rows="5"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                        placeholder="Please describe your product specifications, materials, target price, certifications needed, and any other requirements..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-accent-500 hover:bg-accent-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Inquiry
                        </>
                      )}
                    </button>
                    
                    <p className="text-xs text-slate-500 text-center">
                      By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Common Questions
            </h2>
            <p className="text-slate-600">
              Quick answers to frequently asked questions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: 'How quickly will I receive a response?',
                answer: 'We respond to all inquiries within 24 hours. For urgent matters, please call us directly.'
              },
              {
                question: 'Is the initial consultation free?',
                answer: 'Yes, we offer a free initial consultation to discuss your sourcing needs and provide preliminary guidance.'
              },
              {
                question: 'What information should I prepare?',
                answer: 'Product specifications, target price, quantity, timeline, and any certifications or compliance requirements.'
              },
              {
                question: 'Do you work with small businesses?',
                answer: 'Yes, we work with businesses of all sizes, from startups to large corporations.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-2">{faq.question}</h4>
                <p className="text-slate-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Our Location
            </h2>
            <p className="text-slate-600">
              Visit us at our office in Guangzhou, China
            </p>
          </div>
          
          <div className="bg-slate-100 rounded-2xl h-96 flex items-center justify-center border border-slate-200">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 font-medium">Tianhe District, Guangzhou</p>
              <p className="text-slate-500 text-sm">Guangdong Province, China</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
