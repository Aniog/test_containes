import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    productDetails: '',
    quantity: '',
    serviceInterest: [],
    message: '',
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const productCategories = [
    'Electronics & Gadgets',
    'Furniture & Home Goods',
    'Textiles & Apparel',
    'Machinery & Equipment',
    'Packaging Materials',
    'Consumer Products',
    'Automotive Parts',
    'Industrial Components',
    'Other',
  ];

  const serviceOptions = [
    'Supplier Verification',
    'Factory Audit',
    'Quality Control',
    'Production Follow-up',
    'Shipping & Logistics',
    'Sourcing & Negotiation',
    'Not Sure - Need Consultation',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      serviceInterest: prev.serviceInterest.includes(service)
        ? prev.serviceInterest.filter((s) => s !== service)
        : [...prev.serviceInterest, service],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        productCategory: '',
        productDetails: '',
        quantity: '',
        serviceInterest: [],
        message: '',
      });
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1E3A5F] text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-200">
              Ready to start sourcing from China? Get in touch for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-[#F8FAFC] rounded-lg p-6 border border-[#E5E7EB]">
                <h2 className="text-xl font-bold text-[#1E3A5F] mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#F5A623] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1E3A5F]">Office Address</p>
                      <p className="text-sm text-[#6B7280]">
                        Shenzhen, Guangdong, China
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-[#F5A623] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1E3A5F]">Phone</p>
                      <a href="tel:+8675588888888" className="text-sm text-[#6B7280] hover:text-[#1E3A5F]">
                        +86 755 8888 8888
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-[#F5A623] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1E3A5F]">Email</p>
                      <a href="mailto:info@ssourcing-china.com" className="text-sm text-[#6B7280] hover:text-[#1E3A5F]">
                        info@ssourcing-china.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-[#F5A623] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1E3A5F]">Business Hours</p>
                      <p className="text-sm text-[#6B7280]">
                        Monday - Friday: 9:00 AM - 6:00 PM (GMT+8)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
                  <p className="text-sm text-[#6B7280] mb-2">
                    We typically respond within 24 hours.
                  </p>
                  <p className="text-sm text-[#6B7280]">
                    All inquiries are confidential.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {formStatus === 'success' ? (
                <div className="bg-[#4CAF50]/10 border border-[#4CAF50] rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-[#4CAF50] mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">
                    Thank You!
                  </h2>
                  <p className="text-[#6B7280] mb-4">
                    Your inquiry has been submitted successfully. Our team will review your request and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="btn-secondary"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#1E3A5F] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#1E3A5F]"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[#1E3A5F] mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#1E3A5F]"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#1E3A5F] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#1E3A5F]"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#1E3A5F] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#1E3A5F]"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="productCategory" className="block text-sm font-medium text-[#1E3A5F] mb-2">
                        Product Category
                      </label>
                      <select
                        id="productCategory"
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#1E3A5F] bg-white"
                      >
                        <option value="">Select a category</option>
                        {productCategories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-[#1E3A5F] mb-2">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#1E3A5F]"
                        placeholder="e.g., 10,000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1E3A5F] mb-3">
                      Services Interested In *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {serviceOptions.map((service) => (
                        <label
                          key={service}
                          className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                            formData.serviceInterest.includes(service)
                              ? 'border-[#1E3A5F] bg-[#1E3A5F]/5'
                              : 'border-[#E5E7EB] hover:border-[#1E3A5F]/50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.serviceInterest.includes(service)}
                            onChange={() => handleServiceChange(service)}
                            className="sr-only"
                          />
                          <span className={`text-sm ${
                            formData.serviceInterest.includes(service)
                              ? 'text-[#1E3A5F] font-medium'
                              : 'text-[#6B7280]'
                          }`}>
                            {service}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="productDetails" className="block text-sm font-medium text-[#1E3A5F] mb-2">
                      Product Details *
                    </label>
                    <textarea
                      id="productDetails"
                      name="productDetails"
                      required
                      rows={4}
                      value={formData.productDetails}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#1E3A5F] resize-none"
                      placeholder="Please describe the products you want to source, including specifications, target price, and any other relevant details..."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#1E3A5F] mb-2">
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#1E3A5F] resize-none"
                      placeholder="Any additional information you'd like to share..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Inquiry
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[#6B7280] text-center">
                    By submitting this form, you agree to our privacy policy. We will never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#F8FAFC] py-12">
        <div className="container-custom">
          <div className="bg-[#E5E7EB] rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[#6B7280] mx-auto mb-2" />
              <p className="text-[#6B7280]">Shenzhen, Guangdong, China</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;