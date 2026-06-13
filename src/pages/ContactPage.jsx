import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Globe, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    services: '',
    message: ''
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.product.trim()) newErrors.product = 'Product information is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Contact Us</h1>
            <p className="text-lg text-slate-300">Ready to start sourcing from China? Get in touch for a free consultation and quote.</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-slate-600 mb-8">We typically respond within 24 hours. For urgent inquiries, please call or message us directly.</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a href="mailto:info@ssourcingchina.com" className="text-blue-600 hover:text-blue-700">info@ssourcingchina.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone / WhatsApp</h3>
                    <p className="text-slate-700">+86 755 8888 9999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">WeChat</h3>
                    <p className="text-slate-700">SSourcingChina</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office Address</h3>
                    <p className="text-slate-700">Room 1201, Building A<br />Nanshan District<br />Shenzhen, Guangdong, China</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-700">Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />Saturday: 9:00 AM - 1:00 PM (CST)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <h3 className="font-semibold text-blue-900 mb-2">Quick Response Guarantee</h3>
                <p className="text-sm text-blue-700">We respond to all inquiries within 24 hours during business days. For urgent matters, please contact us via WhatsApp or WeChat.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="card text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                  <p className="text-slate-600 mb-6">We have received your inquiry and will contact you within 24 hours.</p>
                  <button
                    className="btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', company: '', country: '', product: '', quantity: '', services: '', message: '' });
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Sourcing Inquiry Form</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="label">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="company" className="label">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="input-field"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="country" className="label">Country</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        className="input-field"
                        placeholder="Your country"
                        value={formData.country}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="product" className="label">Product to Source *</label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        className={`input-field ${errors.product ? 'border-red-500' : ''}`}
                        placeholder="e.g., Electronics, Apparel, etc."
                        value={formData.product}
                        onChange={handleChange}
                      />
                      {errors.product && <p className="text-red-500 text-sm mt-1">{errors.product}</p>}
                    </div>

                    <div>
                      <label htmlFor="quantity" className="label">Estimated Quantity</label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        className="input-field"
                        placeholder="e.g., 1000 units"
                        value={formData.quantity}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="services" className="label">Services Needed</label>
                      <select
                        id="services"
                        name="services"
                        className="input-field"
                        value={formData.services}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        <option value="sourcing">Product Sourcing</option>
                        <option value="verification">Supplier Verification</option>
                        <option value="inspection">Quality Inspection</option>
                        <option value="production">Production Monitoring</option>
                        <option value="shipping">Shipping Coordination</option>
                        <option value="full">Full Sourcing Service</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="message" className="label">Additional Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="input-field"
                      placeholder="Tell us more about your requirements, specifications, target price, timeline, or any questions..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mt-6">
                    <button type="submit" className="btn-accent w-full justify-center text-lg">
                      Submit Inquiry
                      <Send className="w-5 h-5 ml-2" />
                    </button>
                  </div>

                  <p className="text-sm text-slate-500 text-center mt-4">
                    We respect your privacy. Your information will not be shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-slate-50">
        <div className="section-container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Our Location</h2>
            <p className="text-slate-600">Based in Shenzhen, China's manufacturing hub</p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-slate-200 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-2" />
              <p className="text-slate-600 font-medium">Shenzhen, Guangdong, China</p>
              <p className="text-sm text-slate-500">Heart of China's manufacturing industry</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
