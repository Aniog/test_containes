import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare,
  Users, Building2, Package, ArrowRight, Calendar, User, Star
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productType: '',
    quantity: '',
    timeline: '',
    message: '',
    howDidYouHear: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const offices = [
    {
      city: 'Shenzhen (Headquarters)',
      address: 'Room 1208, Building A, Futian District, Shenzhen, Guangdong 518000, China',
      phone: '+86 755 8123 4567',
      email: 'shenzhen@ssourcingchina.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM (CST)',
    },
    {
      city: 'Guangzhou',
      address: 'Room 501, Tianhe District, Guangzhou, Guangdong 510000, China',
      phone: '+86 20 8888 9999',
      email: 'guangzhou@ssourcingchina.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM (CST)',
    },
    {
      city: 'Shanghai',
      address: 'Room 2001, Pudong District, Shanghai 200000, China',
      phone: '+86 21 6666 7777',
      email: 'shanghai@ssourcingchina.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM (CST)',
    },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@ssourcingchina.com',
      description: 'For general inquiries and support',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+86 755 8123 4567',
      description: 'Mon-Fri, 9 AM - 6 PM CST',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: '+86 138 1234 5678',
      description: 'Quick responses on WhatsApp',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-xl text-gray-600">
              Ready to source products from China? Fill out the form below and our team 
              will respond within 24 hours with a personalized plan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
                    <p className="text-gray-600 mb-6">
                      Your inquiry has been received. Our team will review your requirements 
                      and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          company: '',
                          email: '',
                          phone: '',
                          productType: '',
                          quantity: '',
                          timeline: '',
                          message: '',
                          howDidYouHear: '',
                        });
                      }}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Sourcing Inquiry Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Info */}
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="John Smith"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name *
                          </label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Your Company Ltd"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="+1 234 567 890"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div>
                        <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-2">
                          Product Type *
                        </label>
                        <div className="relative">
                          <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="productType"
                            name="productType"
                            value={formData.productType}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., Electronic components, Packaging materials, Furniture"
                          />
                        </div>
                      </div>

                      {/* Quantity & Timeline */}
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                            Estimated Quantity
                          </label>
                          <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., 10,000 units"
                          />
                        </div>
                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                            Project Timeline
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="">Select timeline</option>
                            <option value="asap">As soon as possible</option>
                            <option value="1month">Within 1 month</option>
                            <option value="3months">Within 3 months</option>
                            <option value="6months">Within 6 months</option>
                            <option value="exploring">Just exploring options</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Details
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                          placeholder="Tell us more about your requirements, target prices, quality standards, certifications needed, or any questions..."
                        ></textarea>
                      </div>

                      {/* How did you hear */}
                      <div>
                        <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-2">
                          How did you hear about us?
                        </label>
                        <select
                          id="howDidYouHear"
                          name="howDidYouHear"
                          value={formData.howDidYouHear}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select an option</option>
                          <option value="google">Google Search</option>
                          <option value="linkedin">LinkedIn</option>
                          <option value="referral">Referral</option>
                          <option value="trade-show">Trade Show</option>
                          <option value="blog">Blog/Articles</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Inquiry
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you agree to our Privacy Policy. We'll respond within 24 hours.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <method.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{method.title}</p>
                        <p className="text-sm text-gray-600">{method.value}</p>
                        <p className="text-xs text-gray-500">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-blue-600 rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Why Work With Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-blue-100">No upfront fees - pay only on successful delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-blue-100">24-hour response on all inquiries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-blue-100">Free initial consultation and supplier matching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-blue-100">Dedicated account manager for your project</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-blue-100">Transparent pricing with no hidden costs</span>
                  </li>
                </ul>
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "SSourcing China transformed our supply chain. Their professional approach and attention to detail made sourcing from China stress-free."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    🇺🇸
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">David Martinez</p>
                    <p className="text-xs text-gray-500">CEO, ImportPro Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              Our Offices
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Us in China
            </h2>
            <p className="text-lg text-gray-600">
              Our team is based in major manufacturing hubs across China for better supplier access.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{office.city}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    {office.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {office.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {office.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {office.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'How quickly will I receive a response?',
                answer: 'We respond to all inquiries within 24 hours during business days. For urgent requests, you can reach us directly via WhatsApp for immediate assistance.',
              },
              {
                question: 'Is there a minimum order requirement?',
                answer: 'No strict minimums, but order economics vary by product category. We can help you determine viable order quantities based on your budget and product type.',
              },
              {
                question: 'What information should I include in my inquiry?',
                answer: 'The more details you provide, the better we can assist. Include product specifications, target prices, estimated quantities, required certifications, and your timeline.',
              },
              {
                question: 'Do you offer site visits to your offices?',
                answer: 'Yes, we welcome client visits to our offices in Shenzhen, Guangzhou, and Shanghai. Please schedule in advance so we can arrange a meeting with our team.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
