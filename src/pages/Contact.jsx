import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'info@ssourcingchina.com',
    href: 'mailto:info@ssourcingchina.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+86 21 1234 5678',
    href: 'tel:+8621123456',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: 'Shanghai, China',
    href: null,
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon-Fri: 9:00-18:00 CST',
    href: null,
  },
];

const services = [
  'Supplier Verification',
  'Factory Audits',
  'Quality Inspection',
  'Production Monitoring',
  'Shipping Coordination',
  'Documentation Services',
  'Complete Sourcing Package',
  'Other',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: '',
    quantity: '',
    services: [],
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.product.trim()) newErrors.product = 'Product description is required';
    if (formData.services.length === 0) newErrors.services = 'Please select at least one service';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStatus('success');
    console.log('Form submitted:', formData);
  };

  if (status === 'success') {
    return (
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-slate-300 mb-8">
                Get in touch with our team. We're here to help with your China sourcing needs.
              </p>
            </div>
          </div>
        </section>

        {/* Success Message */}
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-teal-50 rounded-2xl p-12">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h2>
              <p className="text-lg text-slate-600 mb-8">
                Your inquiry has been submitted successfully. Our team will review your requirements 
                and get back to you within 24 hours.
              </p>
              <div className="bg-white rounded-xl p-6 text-left">
                <h3 className="font-semibold text-slate-900 mb-2">What happens next?</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    Our sourcing team reviews your requirements
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    We identify suitable suppliers from our network
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    You'll receive a customized proposal within 24 hours
                  </li>
                </ul>
              </div>
              <Button 
                variant="outline" 
                className="mt-8"
                onClick={() => {
                  setStatus('idle');
                  setFormData({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    country: '',
                    product: '',
                    quantity: '',
                    services: [],
                    message: '',
                  });
                }}
              >
                Submit Another Inquiry
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Ready to streamline your China sourcing? Get a free consultation and 
              customized proposal for your project.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-slate-600 mb-8">
                Have questions? Our team is available to help you with your China 
                sourcing inquiries.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{info.title}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-slate-600 hover:text-blue-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Response Time
                </h3>
                <p className="text-slate-600 text-sm">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Request a Free Quote
                </h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours with 
                  a customized sourcing proposal.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Company */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name ? 'border-red-500' : 'border-slate-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="John Smith"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email ? 'border-red-500' : 'border-slate-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+1 555 123 4567"
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="United States"
                    />
                  </div>

                  {/* Product Description */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Product Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      rows={3}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.product ? 'border-red-500' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Please describe the products you're looking to source. Include specifications, materials, or any other relevant details."
                    />
                    {errors.product && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.product}
                      </p>
                    )}
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 5,000 units"
                    />
                  </div>

                  {/* Services Needed */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Services Needed <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            formData.services.includes(service)
                              ? 'bg-blue-800 text-white'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                    {errors.services && (
                      <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.services}
                      </p>
                    )}
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Any additional details about your project, timeline, budget, or specific requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="animate-pulse">Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Inquiry
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-slate-500 text-center">
                    By submitting this form, you agree to be contacted by our team regarding 
                    your inquiry. We respect your privacy and will not share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How long does it take to get supplier options?',
                a: 'We typically present supplier options within 3-5 business days after receiving your detailed requirements.',
              },
              {
                q: 'What information do you need to start?',
                a: 'The more details you provide about your product, quantity, quality requirements, and timeline, the better we can assist you.',
              },
              {
                q: 'Is the initial consultation really free?',
                a: 'Yes, our initial consultation and quote are completely free. You only pay for our services if you decide to proceed.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
