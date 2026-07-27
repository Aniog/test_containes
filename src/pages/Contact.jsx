import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  MessageSquare,
  Globe
} from 'lucide-react';

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    productDetails: '',
    quantity: '',
    targetPrice: '',
    timeline: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['Shenzhen, Guangdong, China'],
      description: 'Our headquarters in the heart of China\'s manufacturing hub',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+86 755 8123 4567', '+86 138 0013 8000'],
      description: 'Available during business hours (UTC+8)',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@ssourcingchina.com', 'sales@ssourcingchina.com'],
      description: 'We respond within 24 hours',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
      description: 'China Standard Time (UTC+8)',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] via-[#2D5A8A] to-[#1E3A5F] text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Ready to start sourcing from China? Get in touch with our team for a free consultation 
              and sourcing quote. We're here to help you find the right suppliers.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
                <div className="w-12 h-12 bg-[#1E3A5F] rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-[#64748B] text-sm">{detail}</p>
                ))}
                <p className="text-xs text-[#94A3B8] mt-3">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl p-8 border border-[#E2E8F0]">
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">Get a Free Sourcing Quote</h2>
                <p className="text-[#64748B] mb-6">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-[#10B981]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">Thank You!</h3>
                    <p className="text-[#64748B] mb-6">
                      Your inquiry has been submitted successfully. Our team will review your requirements 
                      and get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="btn-secondary"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 outline-none transition-all"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 outline-none transition-all"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 outline-none transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 outline-none transition-all"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#1E293B] mb-2">
                        Product Category *
                      </label>
                      <select
                        name="productCategory"
                        required
                        value={formData.productCategory}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 outline-none transition-all bg-white"
                      >
                        <option value="">Select a category</option>
                        <option value="electronics">Electronics</option>
                        <option value="furniture">Furniture</option>
                        <option value="textiles">Textiles & Apparel</option>
                        <option value="machinery">Machinery</option>
                        <option value="packaging">Packaging</option>
                        <option value="home-garden">Home & Garden</option>
                        <option value="sports-outdoors">Sports & Outdoors</option>
                        <option value="automotive">Automotive Parts</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#1E293B] mb-2">
                        Product Details *
                      </label>
                      <textarea
                        name="productDetails"
                        required
                        rows={4}
                        value={formData.productDetails}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 outline-none transition-all resize-none"
                        placeholder="Describe the products you want to source - specifications, materials, colors, etc."
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-2">
                          Quantity
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 outline-none transition-all"
                          placeholder="e.g., 10,000 units"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-2">
                          Target Price
                        </label>
                        <input
                          type="text"
                          name="targetPrice"
                          value={formData.targetPrice}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 outline-none transition-all"
                          placeholder="e.g., $5/unit"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-2">
                          Timeline
                        </label>
                        <input
                          type="text"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 outline-none transition-all"
                          placeholder="e.g., 3 months"
                        />
                      </div>
                    </div>
                    
                    <button type="submit" className="btn-primary w-full text-lg py-4">
                      <Send className="w-5 h-5 mr-2" />
                      Submit Inquiry
                    </button>
                    
                    <p className="text-xs text-center text-[#94A3B8]">
                      By submitting, you agree to our Privacy Policy. We'll never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Why Choose Us */}
              <div className="bg-white rounded-xl p-6 border border-[#E2E8F0]">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-4">Why Work With Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#64748B]">Response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#64748B]">No obligation quote</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#64748B]">Verified suppliers only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#64748B]">Quality guaranteed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#64748B]">End-to-end support</span>
                  </li>
                </ul>
              </div>
              
              {/* Quick Contact */}
              <div className="bg-[#1E3A5F] rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Prefer to Talk Directly?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Call us during business hours for immediate assistance.
                </p>
                <a 
                  href="tel:+8675581234567" 
                  className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA580C] rounded-lg py-3 font-medium transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +86 755 8123 4567
                </a>
              </div>
              
              {/* Global Presence */}
              <div className="bg-white rounded-xl p-6 border border-[#E2E8F0]">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-[#1E3A5F]" />
                  <h3 className="text-lg font-semibold text-[#1E3A5F]">Global Presence</h3>
                </div>
                <p className="text-sm text-[#64748B] mb-4">
                  We serve clients from over 35 countries worldwide, helping them source quality products from China.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['USA', 'UK', 'Germany', 'Australia', 'Canada', 'UAE', 'France', 'Japan'].map((country) => (
                    <span 
                      key={country} 
                      className="text-xs bg-[#F8FAFC] text-[#64748B] px-2 py-1 rounded"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#F1F5F9] h-64 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-[#1E3A5F] mx-auto mb-3" />
          <p className="text-[#64748B]">Shenzhen, Guangdong, China</p>
          <p className="text-sm text-[#94A3B8]">Serving clients globally from our China headquarters</p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;