import React, { useState } from 'react';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    productType: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        productType: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-gray-50 py-20 text-center border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Tell us about your sourcing needs. Our team will review your requirements and provide a free consultation within 24 hours.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Information */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-bold text-gray-900">Our Office</h3>
                    <p className="mt-2 text-gray-600">
                      Tianhe District<br />
                      Guangzhou, Guangdong<br />
                      China 510000
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-bold text-gray-900">Email Us</h3>
                    <p className="mt-2 text-gray-600">
                      info@ssourcingchina.com<br />
                      quotes@ssourcingchina.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-bold text-gray-900">WeChat / WhatsApp</h3>
                    <p className="mt-2 text-gray-600">
                      Available upon request after initial email contact to prevent spam.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Business Hours</h3>
                <p className="text-blue-800">Monday - Friday</p>
                <p className="text-blue-800">9:00 AM - 6:00 PM (Beijing Time)</p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 sm:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Request a Sourcing Quote</h2>
                
                {status === 'success' ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                    <p>Thank you for reaching out. A sourcing specialist will contact you within 24 hours.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-6 px-6 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-2">Product Category</label>
                        <input
                          type="text"
                          id="productType"
                          name="productType"
                          value={formData.productType}
                          onChange={handleChange}
                          placeholder="e.g. Electronics, Apparel, Toys"
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                      <p className="text-xs text-gray-500 mb-3">Please include product name, specifications, estimated order quantity, and target price if known.</p>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className={`w-full py-4 px-6 border border-transparent rounded-md shadow-sm text-lg font-bold text-white ${status === 'submitting' ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}`}
                    >
                      {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;