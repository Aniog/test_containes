import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.product.trim()) newErrors.product = 'Please describe the product you need';
    if (!formData.message.trim()) newErrors.message = 'Please provide additional details';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-white">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Thank You!</h2>
          <p className="text-slate-600 mb-6">
            We have received your sourcing request. Our team will review your requirements and get back to you within 24 hours.
          </p>
          <Link
            to="/"
            className="inline-flex items-center text-blue-800 font-medium hover:text-blue-900 transition"
          >
            Back to homepage
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Contact Us</h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Tell us what you need and we will find the right suppliers for your business. No commitment, no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get a Free Sourcing Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        errors.name ? 'border-red-500' : 'border-slate-300'
                      }`}
                      placeholder="John Smith"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        errors.email ? 'border-red-500' : 'border-slate-300'
                      }`}
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">
                      Country
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="United States"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">
                    Product You Need *
                  </label>
                  <input
                    id="product"
                    name="product"
                    type="text"
                    value={formData.product}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.product ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="e.g., Custom PCB boards, organic cotton t-shirts, etc."
                  />
                  {errors.product && <p className="mt-1 text-sm text-red-600">{errors.product}</p>}
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">
                    Estimated Order Quantity
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="text"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="e.g., 1,000 units"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Additional Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none ${
                      errors.message ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="Please describe your requirements in detail: specifications, quality standards, target price, timeline, etc."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition w-full sm:w-auto justify-center"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Submit Sourcing Request
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-800 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900">Email</div>
                      <a href="mailto:info@ssourcingchina.com" className="text-slate-600 hover:text-blue-800 transition">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-800 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900">Phone</div>
                      <span className="text-slate-600">+86 755 8888 9999</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-800 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900">Office</div>
                      <span className="text-slate-600">
                        Room 1201, Building A<br />
                        Nanshan District<br />
                        Shenzhen, Guangdong, China
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-800 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900">Business Hours</div>
                      <span className="text-slate-600">
                        Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />
                        Saturday: 9:00 AM - 1:00 PM (CST)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Why Contact Us?</h3>
                <ul className="space-y-3">
                  {[
                    'Free initial consultation',
                    'Response within 24 hours',
                    'No commitment required',
                    'Transparent pricing',
                    'Experienced sourcing team',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
