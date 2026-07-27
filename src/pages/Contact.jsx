import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    productInterest: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'info@ssourcingchina.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+86 20 1234 5678',
      description: 'Mon-Fri, 9am-6pm CST',
    },
    {
      icon: MapPin,
      title: 'Office',
      detail: 'Guangzhou, China',
      description: 'Main sourcing hub',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      detail: '9:00 AM - 6:00 PM',
      description: 'Monday to Friday',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Ready to start your sourcing project? Get in touch with our team for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Get a Free Sourcing Quote
              </h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours with a personalized quote.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                  <p className="text-slate-600">
                    Your inquiry has been received. Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-2">
                        Country *
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
                        placeholder="United States"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="productInterest" className="block text-sm font-medium text-slate-700 mb-2">
                        Product Category
                      </label>
                      <select
                        id="productInterest"
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
                      >
                        <option value="">Select a category</option>
                        <option value="electronics">Electronics</option>
                        <option value="textiles">Textiles & Apparel</option>
                        <option value="home">Home & Garden</option>
                        <option value="machinery">Machinery</option>
                        <option value="auto">Auto Parts</option>
                        <option value="toys">Toys & Gifts</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
                      placeholder="Please describe your product requirements, quantity, budget, and timeline..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Inquiry
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Contact Information
              </h2>
              <p className="text-slate-600 mb-8">
                Have questions? Reach out to us directly or visit our office in Guangzhou.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-slate-900" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-slate-900 font-medium">{item.detail}</p>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-slate-100 rounded-xl p-8 text-center">
                <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600">
                  Guangzhou, China<br />
                  Main sourcing hub for southern China manufacturers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                question: 'What information do I need to provide for a quote?',
                answer: 'Please provide product specifications, target quantity, budget range, and any quality requirements. The more details you provide, the more accurate our quote will be.',
              },
              {
                question: 'How long does it take to get a response?',
                answer: 'We typically respond to all inquiries within 24 hours during business days.',
              },
              {
                question: 'Is there a fee for the initial consultation?',
                answer: 'No, our initial consultation and quote are completely free with no obligation.',
              },
              {
                question: 'Do you work with small businesses?',
                answer: 'Yes, we work with businesses of all sizes, from startups to large enterprises. We can help with small MOQs and flexible arrangements.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
