import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle,
  Send, MessageCircle, Globe
} from 'lucide-react';

const faqItems = [
  {
    question: "How quickly will I receive a response?",
    answer: "We typically respond to all inquiries within 24 hours during business days. For urgent requests, we prioritize responses within 12 hours."
  },
  {
    question: "What information should I include in my inquiry?",
    answer: "Please provide details about: the product you want to source, estimated quantity, target price range, any specific requirements or certifications needed, and your timeline. The more details you provide, the faster we can assist you."
  },
  {
    question: "Is there a minimum order quantity requirement?",
    answer: "Minimum order quantities vary by product and supplier. We work with businesses of all sizes and can help find suppliers that match your order volume, whether it's 100 units or 100,000 units."
  },
  {
    question: "What regions do you serve?",
    answer: "We serve clients worldwide, with particular strength in North America, Europe, Australia, and Southeast Asia. Our team is experienced in international trade and can navigate local regulations."
  },
  {
    question: "How do you ensure quality?",
    answer: "We offer comprehensive quality control services including factory verification, pre-production inspections, during-production inspections, and pre-shipment inspections. All inspections include detailed photo and video reports."
  },
  {
    question: "What are your payment terms?",
    answer: "Payment terms vary by service package. We typically work with T/T (Telegraphic Transfer) and can facilitate secure payments through escrow services. We'll discuss payment options during our consultation."
  }
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get('product') || '';
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: initialProduct,
    quantity: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
  const [openFaq, setOpenFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: '',
        quantity: '',
        message: ''
      });
    }, 1500);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Ready to start sourcing from China? Get in touch for a free consultation 
              and quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about sourcing from China? Our team is here to help. 
                Reach out through any of the channels below or fill out the form.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      123 Business District<br />
                      Shanghai, China 200000
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+862112345678" className="hover:text-primary">
                        +86 21 1234 5678
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@ssourcingchina.com" className="hover:text-primary">
                        info@ssourcingchina.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM (China Time)<br />
                      Saturday: 9:00 AM - 1:00 PM (China Time)
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-4">Why Work With Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">15+ years of China sourcing experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">500+ verified suppliers in our network</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">2000+ successful inspections completed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">98% client satisfaction rate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your inquiry has been submitted successfully. Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="btn-primary"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                  <p className="text-gray-600 mb-6">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Product Interest
                        </label>
                        <select
                          name="product"
                          value={formData.product}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select a category</option>
                          <option value="electronics">Electronics & Gadgets</option>
                          <option value="textiles">Textiles & Apparel</option>
                          <option value="furniture">Furniture & Home Goods</option>
                          <option value="machinery">Machinery & Parts</option>
                          <option value="packaging">Packaging & Printing</option>
                          <option value="toys">Toys & Gifts</option>
                          <option value="sports">Sports & Outdoor</option>
                          <option value="beauty">Beauty & Personal Care</option>
                          <option value="industrial">Industrial Supplies</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Estimated Quantity
                        </label>
                        <select
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select quantity</option>
                          <option value="small">Under 1,000 units</option>
                          <option value="medium">1,000 - 10,000 units</option>
                          <option value="large">10,000 - 50,000 units</option>
                          <option value="xlarge">Over 50,000 units</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Tell us about your sourcing needs, product requirements, timeline, or any questions you have..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <span className="animate-spin">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Get Free Quote
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-sm text-gray-500">
                      By submitting, you agree to our Privacy Policy. We'll never share your information.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-12">
        <div className="container">
          <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
            <div className="text-center">
              <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Shanghai, China</p>
              <p className="text-sm text-gray-400">Map integration available</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Quick answers to common questions
          </p>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-lg">{item.question}</span>
                  {openFaq === index ? (
                    <ArrowRight className="w-5 h-5 text-gray-500 rotate-90 flex-shrink-0" />
                  ) : (
                    <ArrowRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help. 
            Reach out and we'll get back to you as soon as possible.
          </p>
          <a
            href="mailto:info@ssourcingchina.com"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Email Us <Mail className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}