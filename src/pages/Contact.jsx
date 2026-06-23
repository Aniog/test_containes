import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    productDetails: '',
    quantity: '',
    serviceType: '',
    message: ''
  });
  const [status, setStatus] = React.useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = React.useState({});

  const productCategories = [
    "Electronics & Components",
    "Machinery & Equipment",
    "Textiles & Apparel",
    "Packaging Materials",
    "Consumer Goods",
    "Automotive Parts",
    "Industrial Supplies",
    "Health & Medical",
    "Other"
  ];

  const serviceTypes = [
    "Supplier Identification",
    "Factory Verification",
    "Quality Inspection",
    "Production Monitoring",
    "Shipping & Logistics",
    "Full-Service Sourcing",
    "Not Sure - Need Consultation"
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.productCategory) newErrors.productCategory = 'Please select a product category';
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, this would send data to a backend
    console.log('Form submitted:', formData);
    
    setStatus('success');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      productCategory: '',
      productDetails: '',
      quantity: '',
      serviceType: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Ready to start sourcing from China? Get in touch for a free consultation and quote. We'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-xl p-6 lg:p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900">Email</h3>
                      <a href="mailto:info@ssourcingchina.com" className="text-slate-600 hover:text-blue-600">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900">Phone</h3>
                      <a href="tel:+862112345678" className="text-slate-600 hover:text-blue-600">
                        +86 21 1234 5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900">Location</h3>
                      <p className="text-slate-600">Shanghai, China</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900">Business Hours</h3>
                      <p className="text-slate-600">Mon - Fri: 9:00 AM - 6:00 PM CST</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="font-medium text-slate-900 mb-3">Why Work With Us?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>500+ successful projects</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>98% client satisfaction</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Response within 24 hours</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-xl p-6 lg:p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">
                  Request a Free Sourcing Quote
                </h2>

                {status === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Thank You!</h3>
                    <p className="text-green-700 mb-4">
                      Your inquiry has been submitted successfully. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-green-700 font-medium hover:text-green-900"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.name ? 'border-red-500' : 'border-slate-200'
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.email ? 'border-red-500' : 'border-slate-200'
                          }`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    {/* Product & Service Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="productCategory" className="block text-sm font-medium text-slate-700 mb-2">
                          Product Category *
                        </label>
                        <select
                          id="productCategory"
                          name="productCategory"
                          value={formData.productCategory}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.productCategory ? 'border-red-500' : 'border-slate-200'
                          }`}
                        >
                          <option value="">Select a category</option>
                          {productCategories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                        {errors.productCategory && (
                          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.productCategory}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-2">
                          Service Type *
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.serviceType ? 'border-red-500' : 'border-slate-200'
                          }`}
                        >
                          <option value="">Select a service</option>
                          {serviceTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        {errors.serviceType && (
                          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.serviceType}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="productDetails" className="block text-sm font-medium text-slate-700 mb-2">
                          Product Details
                        </label>
                        <input
                          type="text"
                          id="productDetails"
                          name="productDetails"
                          value={formData.productDetails}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Specific products or specifications"
                        />
                      </div>

                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-2">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g., 5000 units"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.message ? 'border-red-500' : 'border-slate-200'
                        }`}
                        placeholder="Tell us about your sourcing requirements, timeline, and any specific questions..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">How quickly will I get a response?</h3>
              <p className="text-slate-600">We typically respond to all inquiries within 24 business hours. For urgent requests, please call us directly.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">What information do you need to provide a quote?</h3>
              <p className="text-slate-600">To provide an accurate quote, we need to know the product category, estimated quantity, your target price range, and the services you require (sourcing, inspection, shipping, etc.).</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Do you work with small orders?</h3>
              <p className="text-slate-600">Yes, we work with businesses of all sizes. While some factories have minimum order requirements, we can help you find suppliers suitable for your order volume.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">What industries do you specialize in?</h3>
              <p className="text-slate-600">We have experience across many industries including electronics, machinery, textiles, packaging, consumer goods, automotive parts, and more. Contact us to discuss your specific needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;