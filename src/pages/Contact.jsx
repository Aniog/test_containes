import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+86 138 1234 5678',
    sub: 'Monday to Friday, 9:00 AM - 6:00 PM (CST)',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@ssourcingchina.com',
    sub: 'We respond within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Shenzhen, Guangdong, China',
    sub: 'Room 1208, Block A, International Trade Center',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: '9:00 AM - 6:00 PM (CST)',
    sub: 'GMT+8, Monday to Friday',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productDescription: '',
    quantity: '',
    targetPrice: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Get a Free Sourcing Quote
          </h1>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Fill out the form below and one of our sourcing specialists will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-semibold text-gray-900 mt-0.5">{item.value}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-5 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-2">Why Contact Us?</h3>
                <ul className="space-y-2">
                  {[
                    'Free initial consultation',
                    'Response within 24 hours',
                    'No obligation — decide after seeing our plan',
                    'Strictly confidential',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 rounded-lg border border-green-100 p-10 text-center">
                  <CheckCircle className="w-14 h-14 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You for Your Inquiry!</h3>
                  <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                    We have received your sourcing request. One of our project managers will review
                    your requirements and get back to you within 24 hours with a preliminary assessment
                    and next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Tell Us About Your Project</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="contact-product" className="block text-sm font-medium text-gray-700 mb-1">
                      Product Description *
                    </label>
                    <textarea
                      id="contact-product"
                      name="productDescription"
                      required
                      rows={3}
                      value={form.productDescription}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                      placeholder="Describe the product you want to source (materials, dimensions, features, etc.)"
                    />
                  </div>

                  <div className="mt-4 grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-quantity" className="block text-sm font-medium text-gray-700 mb-1">
                        Estimated Order Quantity
                      </label>
                      <input
                        id="contact-quantity"
                        name="quantity"
                        type="text"
                        value={form.quantity}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                        placeholder="e.g., 1,000 units"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-price" className="block text-sm font-medium text-gray-700 mb-1">
                        Target Unit Price (USD)
                      </label>
                      <input
                        id="contact-price"
                        name="targetPrice"
                        type="text"
                        value={form.targetPrice}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                        placeholder="e.g., $5-10/unit"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                      placeholder="Any other details, timeline, or special requirements"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-base font-semibold bg-brand-red text-white hover:bg-brand-red-light transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </button>

                  <p className="mt-3 text-xs text-gray-500">
                    By submitting, you agree to our Privacy Policy. We never share your information with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
