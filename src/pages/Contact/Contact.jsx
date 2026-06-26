import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    details: '',
    timeline: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Ready to start sourcing from China? Get in touch with us today.
              We'll respond to your inquiry within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you're just starting to explore sourcing from China or ready to place an order,
                we're here to help. Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">info@ssourcingchina.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call or WhatsApp</h3>
                    <p className="text-gray-600">+86 123 4567 8900</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9:00-18:00 (China Time)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visit Our Office</h3>
                    <p className="text-gray-600">
                      Room 123, Building 4<br />
                      Shenzhen, Guangdong<br />
                      China, 518000
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 - 18:00<br />
                      (China Standard Time, GMT+8)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media / WeChat */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Connect on WeChat</h3>
                <p className="text-gray-600 mb-4">
                  Scan the QR code below or search for our WeChat ID: SSourcingChina
                </p>
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <p className="text-gray-500 text-sm">WeChat QR Code</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  {!isSubmitted ? (
                    <>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Send Us a Message
                      </h2>
                      <p className="text-gray-600 mb-8">
                        Fill out the form below and we'll get back to you within 24 hours with a free sourcing consultation.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="John Smith"
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
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                              Company Name
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="ABC Company"
                            />
                          </div>

                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                              Phone / WhatsApp
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="+1 234 567 8900"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                              Product You Want to Source *
                            </label>
                            <input
                              type="text"
                              id="product"
                              name="product"
                              required
                              value={formData.product}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="e.g., Wireless earphones, Yoga mats"
                            />
                          </div>

                          <div>
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                              Estimated Order Quantity
                            </label>
                            <input
                              type="text"
                              id="quantity"
                              name="quantity"
                              value={formData.quantity}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="e.g., 1,000 - 5,000 units"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                            Target Timeline
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">Select a timeline</option>
                            <option value="urgent">Urgent (within 2 weeks)</option>
                            <option value="1-month">Within 1 month</option>
                            <option value="1-3-months">1-3 months</option>
                            <option value="3-6-months">3-6 months</option>
                            <option value="6-months+">6 months or more</option>
                            <option value="not-sure">Not sure yet</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
                            Project Details
                          </label>
                          <textarea
                            id="details"
                            name="details"
                            rows={5}
                            value={formData.details}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Tell us about your sourcing needs: specific requirements, quality standards, target price, etc."
                          ></textarea>
                        </div>

                        <div>
                          <Button type="submit" size="lg" className="w-full text-lg">
                            Send My Inquiry
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </div>

                        <p className="text-center text-sm text-gray-600">
                          By submitting this form, you agree to our privacy policy.
                          We'll never share your information with third parties.
                        </p>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Thank You for Your Inquiry!
                      </h3>
                      <p className="text-gray-600 mb-8">
                        We've received your message and will get back to you within 24 hours.
                        In the meantime, feel free to check out our resources:
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/how-it-works">
                          <Button variant="outline">
                            Learn How It Works
                          </Button>
                        </Link>
                        <Link to="/case-studies">
                          <Button variant="outline">
                            View Case Studies
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Questions Before Contacting Us
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Is the initial consultation really free?',
                answer: 'Yes, our initial consultation is completely free with no obligations. We\'ll discuss your needs, provide initial advice, and give you a sense of how we can help. You only pay if you decide to move forward with our services.'
              },
              {
                question: 'How quickly will you respond to my inquiry?',
                answer: 'We aim to respond to all inquiries within 24 hours during business days. For urgent matters, you can also reach us via WhatsApp or WeChat for faster response.'
              },
              {
                question: 'What information should I prepare before contacting you?',
                answer: 'It helps if you have your product specifications, estimated order quantity, target price range, quality requirements, and timeline. But don\'t worry if you don\'t have all the details - we can help you figure them out.'
              },
              {
                question: 'Do I need to have a company to use your services?',
                answer: 'No, we work with both companies and individuals. Whether you\'re a registered business or a solo entrepreneur, we can help you source from China.'
              }
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-lg p-6">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
