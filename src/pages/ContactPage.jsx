import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Linkedin,
  Facebook,
  MessageSquare
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          product: '',
          quantity: '',
          budget: '',
          timeline: '',
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100">
              Get in touch with our sourcing experts. We're here to help you source with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions about our sourcing services? Need a quote? Fill out the form or contact us directly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+86 138 0000 0000</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9:00-18:00 (GMT+8)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@ssourcingchina.com</p>
                    <p className="text-sm text-gray-500">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">Room 1208, Building A</p>
                    <p className="text-gray-600">Shenzhen, Guangdong, China</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00-18:00</p>
                    <p className="text-gray-600">Saturday: 9:00-12:00</p>
                    <p className="text-sm text-gray-500">GMT+8 (China Time)</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get a Free Sourcing Quote
                </h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-700">
                      Your inquiry has been submitted successfully. Our team will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="ABC Company"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="+1 234 567 8900"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="product" className="block text-sm font-semibold mb-2">
                          Product You Want to Source *
                        </label>
                        <input
                          type="text"
                          id="product"
                          name="product"
                          required
                          value={formData.product}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="e.g., Wireless Earbuds, Ceramic Vases, Electronic Components"
                        />
                      </div>

                      <div>
                        <label htmlFor="quantity" className="block text-sm font-semibold mb-2">
                          Estimated Order Quantity
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="e.g., 1000 units per month"
                        />
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-semibold mb-2">
                          Target Price (per unit)
                        </label>
                        <input
                          type="text"
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="e.g., $5.00 - $8.00"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="timeline" className="block text-sm font-semibold mb-2">
                          Timeline / Deadline
                        </label>
                        <input
                          type="text"
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="e.g., Need samples in 3 weeks, bulk order by December"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold mb-2">
                          Additional Details
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Tell us about your quality requirements, certifications needed, packaging preferences, or any other details..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary text-lg px-12 py-4 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Submit Inquiry
                          </>
                        )}
                      </button>
                      <p className="text-gray-500 text-sm mt-4">
                        By submitting, you agree to our privacy policy. We respect your data and will never share it with third parties.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to questions you may have
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'How soon will I get a response?',
                answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.'
              },
              {
                question: 'Is the initial consultation free?',
                answer: 'Yes, our initial consultation and sourcing assessment are completely free. We\'ll provide you with a customized plan and pricing quote with no obligation.'
              },
              {
                question: 'Do you work with small businesses?',
                answer: 'Absolutely! We work with businesses of all sizes, from startups to Fortune 500 companies. We can often negotiate lower MOQs with our supplier network.'
              },
              {
                question: 'What information should I provide?',
                answer: 'The more details you provide about your product, quality requirements, target price, and timeline, the better we can assist you. But don\'t worry if you don\'t have all the details - we\'ll guide you through the process.'
              }
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-lg p-6 group">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-gray-100 py-12">
        <div className="container-max">
          <div className="bg-gray-300 rounded-2xl h-64 md:h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
              <p className="text-gray-500">Shenzhen, Guangdong, China</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
