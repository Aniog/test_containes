import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Globe,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    services: [],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const services = [
    'Supplier Sourcing',
    'Factory Verification',
    'Quality Inspection',
    'Production Monitoring',
    'Shipping Coordination',
    'Sample Management',
  ];

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-white">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="heading-2 mb-4">Thank You!</h2>
          <p className="text-body mb-6">
            We have received your inquiry and will get back to you within 24 hours with a free sourcing quote.
          </p>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg text-slate-300">
              Ready to source from China? Get in touch for a free consultation and quote. We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="heading-3 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a href="mailto:info@ssourcingchina.com" className="text-blue-700 hover:underline text-sm">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone / WhatsApp</h3>
                    <a href="tel:+8612345678901" className="text-blue-700 hover:underline text-sm">
                      +86 123 4567 8901
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office</h3>
                    <p className="text-slate-600 text-sm">
                      Shenzhen, Guangdong, China
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-600 text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM (CST)
                    </p>
                    <p className="text-slate-600 text-sm">
                      Saturday: 9:00 AM - 1:00 PM (CST)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-50 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-2">Why Contact Us?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Free initial consultation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>No obligation quote</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Bilingual support (English/Chinese)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-xl p-6 md:p-8">
                <h2 className="heading-3 mb-6 text-slate-900">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">
                        Product You Want to Source *
                      </label>
                      <input
                        type="text"
                        id="product"
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Services You Need
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {services.map((service) => (
                        <label
                          key={service}
                          className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceChange(service)}
                            className="rounded border-slate-300 text-blue-700 focus:ring-blue-500"
                          />
                          {service}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    <Send className="w-5 h-5 mr-2" />
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
