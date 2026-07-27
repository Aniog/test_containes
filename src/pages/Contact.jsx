import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    products: '',
    quantity: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full">
        <section className="section bg-white min-h-[60vh] flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">Thank You!</h1>
              <p className="text-xl text-gray-600 mb-8">
                We've received your inquiry and will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center px-6 py-3 bg-[#1E3A5F] text-white font-medium rounded-lg hover:bg-[#2D4F7C] transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D4F7C] text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Ready to start sourcing from China? Fill out the form below and we'll respond within 24 hours with supplier recommendations and a detailed plan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Address</h3>
                    <p className="text-gray-600 text-sm">
                      Room 1208, Building A<br />
                      Futian District<br />
                      Shenzhen, Guangdong 518000<br />
                      China
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600 text-sm">
                      <a href="tel:+8675512345678" className="hover:text-[#0891B2]">+86 755 1234 5678</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 text-sm">
                      <a href="mailto:info@ssourcingchina.com" className="hover:text-[#0891B2]">info@ssourcingchina.com</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600 text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
                <h3 className="font-semibold mb-3">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-[#1E3A5F] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                    We review your inquiry within 4 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-[#1E3A5F] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                    We identify suitable suppliers (24-48 hours)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-[#1E3A5F] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                    We send you detailed recommendations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-[#1E3A5F] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">4</span>
                    Free consultation call to discuss options
                  </li>
                </ol>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <h2 className="text-2xl font-bold mb-6">Request a Free Sourcing Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891B2] focus:border-transparent outline-none transition"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891B2] focus:border-transparent outline-none transition"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891B2] focus:border-transparent outline-none transition"
                        placeholder="Your Company Ltd."
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
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891B2] focus:border-transparent outline-none transition"
                        placeholder="+1 555 123 4567"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country/Region
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891B2] focus:border-transparent outline-none transition"
                        placeholder="United States"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891B2] focus:border-transparent outline-none transition"
                        placeholder="e.g., 5,000 units"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Products You're Looking For <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="products"
                      required
                      rows="3"
                      value={formData.products}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891B2] focus:border-transparent outline-none transition resize-none"
                      placeholder="Describe the products, materials, specifications, or any other details that would help us understand your requirements..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891B2] focus:border-transparent outline-none transition resize-none"
                      placeholder="Timeline, budget range, existing supplier contacts, or any other relevant information..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#0891B2] text-white font-semibold rounded-lg hover:bg-[#0E7490] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Submit Inquiry
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy. We never share your information with third parties.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Common Questions</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold mb-2">Is there a fee for the initial consultation?</h3>
                <p className="text-gray-600 text-sm">No, the initial consultation is completely free. We'll review your requirements and provide recommendations at no cost.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold mb-2">How quickly can you find suppliers?</h3>
                <p className="text-gray-600 text-sm">For most products, we can identify 3-5 qualified suppliers within 1-2 weeks of receiving your inquiry.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold mb-2">What's your minimum order quantity?</h3>
                <p className="text-gray-600 text-sm">MOQs vary by product and supplier. We typically work with orders starting at 500 pieces per SKU, but we can sometimes arrange group purchasing for lower MOQs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
