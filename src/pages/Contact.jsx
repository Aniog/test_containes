import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Mail, Phone, MapPin, MessageSquare, 
  Clock, CheckCircle, Send
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productCategory: '',
    quantity: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormSubmitted(true);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'info@ssourcing-china.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+86 123 4567 8900',
      description: 'Available during business hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'Shenzhen, China',
      description: 'Near Hong Kong border'
    },
    {
      icon: MessageSquare,
      title: 'WeChat',
      details: 'SSourcingChina',
      description: 'Quick responses via WeChat'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM (China Time)' },
    { day: 'Saturday', time: '9:00 AM - 2:00 PM (China Time)' },
    { day: 'Sunday', time: 'Closed' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Ready to find your perfect supplier? Contact us for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-section bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-card shadow-card p-6 text-center hover:shadow-card-hover transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-text-primary mb-1">{info.title}</h3>
                <p className="text-accent font-medium mb-1">{info.details}</p>
                <p className="text-text-muted text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">Send Us a Message</h2>
              {formSubmitted ? (
                <div className="bg-success/10 border border-success rounded-card p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Thank You!</h3>
                  <p className="text-text-secondary mb-6">
                    Your inquiry has been submitted successfully. Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-accent font-medium hover:text-accent-hover transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-input focus:outline-none focus:ring-1 ${
                          errors.name 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                            : 'border-border focus:border-primary focus:ring-primary'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-input focus:outline-none focus:ring-1 ${
                          errors.email 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                            : 'border-border focus:border-primary focus:ring-primary'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-input focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-input focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div>
                      <label htmlFor="productCategory" className="block text-sm font-medium text-text-primary mb-2">
                        Product Category
                      </label>
                      <select
                        id="productCategory"
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-input focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      >
                        <option value="">Select a category</option>
                        <option value="electronics">Electronics & Gadgets</option>
                        <option value="home">Home & Garden</option>
                        <option value="apparel">Apparel & Textiles</option>
                        <option value="industrial">Industrial Equipment</option>
                        <option value="packaging">Packaging & Printing</option>
                        <option value="beauty">Beauty & Personal Care</option>
                        <option value="toys">Toys & Gifts</option>
                        <option value="automotive">Automotive Parts</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-text-primary mb-2">
                        Estimated Order Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-input focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                        placeholder="e.g., 1000 units"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-input focus:outline-none focus:ring-1 resize-none ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                          : 'border-border focus:border-primary focus:ring-primary'
                      }`}
                      placeholder="Tell us about your product requirements, specifications, target price, timeline, etc."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-button transition-all duration-300 hover:shadow-button flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">Additional Information</h2>
              
              <div className="bg-surface-alt rounded-card p-8 mb-8">
                <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Business Hours
                </h3>
                <ul className="space-y-3">
                  {businessHours.map((hours, index) => (
                    <li key={index} className="flex justify-between text-text-secondary">
                      <span>{hours.day}</span>
                      <span>{hours.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-surface-alt rounded-card p-8">
                <h3 className="text-lg font-semibold text-text-primary mb-4">What Happens Next?</h3>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h4 className="font-medium text-text-primary">We Review Your Request</h4>
                      <p className="text-text-secondary text-sm">Our team reviews your requirements within 24 hours</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h4 className="font-medium text-text-primary">We Contact You</h4>
                      <p className="text-text-secondary text-sm">We reach out to discuss your needs in detail</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h4 className="font-medium text-text-primary">We Provide a Quote</h4>
                      <p className="text-text-secondary text-sm">You receive a detailed quote and proposal</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <h4 className="font-medium text-text-primary">We Start Sourcing</h4>
                      <p className="text-text-secondary text-sm">Once approved, we begin the sourcing process</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="mt-8 p-6 bg-primary rounded-card text-white">
                <h3 className="text-lg font-semibold mb-2">Prefer to talk now?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Call us during business hours for immediate assistance.
                </p>
                <a href="tel:+8612345678900" className="text-accent font-semibold hover:text-accent-light transition-colors">
                  +86 123 4567 8900
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-section bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-card shadow-card p-8 text-center">
            <MapPin className="w-16 h-16 text-primary/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text-primary mb-2">Our Location</h3>
            <p className="text-text-secondary">Shenzhen, China (Near Hong Kong border)</p>
            <p className="text-text-muted text-sm mt-2">
              We can arrange factory visits and meetings upon request
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;