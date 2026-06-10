import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Contact = () => {
  const contactRef = React.useRef(null);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: '',
  });
  const [status, setStatus] = React.useState('idle');
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (contactRef.current) {
      return ImageHelper.loadImages(strkImgConfig, contactRef.current);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        product: '',
        message: '',
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['sales@artitectmachinery.com', 'support@artitectmachinery.com'],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: ['123 Industrial Blvd', 'Manufacturing District, ST 12345'],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
    },
  ];

  const products = [
    'Double Folder Pro Series',
    'Sheet Master 5000',
    'Metal Fold Elite',
    'Compact Folder 200',
    'Custom Solution',
  ];

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-900 text-sm font-medium mb-4">
            <Mail className="w-4 h-4 mr-2" />
            Contact Us
          </div>
          <h2 id="contact-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p id="contact-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to elevate your sheet metal folding capabilities? Our team is here
            to help you find the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Request a Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                  Interested Product
                </label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a product</option>
                  {products.map((product, idx) => (
                    <option key={idx} value={product}>
                      {product}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}

              {status === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                  Thank you! Your message has been sent. We'll get back to you within 24 hours.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex gap-4">
                <div className="w-14 h-14 bg-blue-900 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {info.title}
                  </h4>
                  {info.details.map((detail, didx) => (
                    <p key={didx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div
              className="rounded-2xl overflow-hidden shadow-lg"
              data-strk-bg-id="contact-map-001"
              data-strk-bg="manufacturing facility location map"
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="800"
              style={{ minHeight: '250px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
