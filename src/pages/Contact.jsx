import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle,
  MessageSquare, Globe, ArrowRight
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+86 138 0000 0000', '+86 755 8888 0000'],
    action: 'tel:+8613800000000',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@ssourcingchina.com', 'sales@ssourcingchina.com'],
    action: 'mailto:info@ssourcingchina.com',
  },
  {
    icon: MapPin,
    title: 'Office',
    details: ['Nanshan District, Shenzhen', 'Guangdong Province, China'],
    action: null,
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed'],
    action: null,
  },
];

const reasons = [
  {
    icon: MessageSquare,
    title: 'Free Consultation',
    description: 'Get expert advice on your sourcing needs at no cost.',
  },
  {
    icon: Globe,
    title: 'Global Service',
    description: 'We serve clients in 50+ countries worldwide.',
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'We respond to all inquiries within 24 hours.',
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setStatus('submitting');
    
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        product: '',
        quantity: '',
        message: '',
      });
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to start sourcing from China? Get in touch for a free consultation and personalized quote.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-bg-light rounded-xl p-6 text-center border border-border-light hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">{info.title}</h3>
                {info.details.map((detail, index) => (
                  <p key={index} className="text-text-secondary text-sm">
                    {info.action && index === 0 ? (
                      <a href={info.action} className="hover:text-accent transition-colors">
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Reasons */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Reasons */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-text-primary mb-6">Why Contact Us?</h2>
              <p className="text-text-secondary mb-8">
                We're here to help you navigate the complexities of sourcing from China. Here's what you can expect:
              </p>
              
              <div className="space-y-6">
                {reasons.map((reason) => (
                  <div key={reason.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">{reason.title}</h3>
                      <p className="text-text-secondary text-sm">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-primary/5 rounded-xl p-6 border border-primary/10">
                <h4 className="font-semibold text-text-primary mb-2">Need Immediate Assistance?</h4>
                <p className="text-text-secondary text-sm mb-4">
                  For urgent inquiries, call us directly during business hours.
                </p>
                <a
                  href="tel:+8613800000000"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +86 138 0000 0000
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border-light">
                <h2 className="text-2xl font-bold text-text-primary mb-6">Send Us a Message</h2>
                
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-4">Message Sent Successfully!</h3>
                    <p className="text-text-secondary mb-6">
                      Thank you for contacting us. We'll review your message and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-primary font-semibold hover:text-accent transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all ${
                            errors.name ? 'border-red-500' : 'border-border-light'
                          }`}
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
                        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all ${
                            errors.email ? 'border-red-500' : 'border-border-light'
                          }`}
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all ${
                          errors.subject ? 'border-red-500' : 'border-border-light'
                        }`}
                      >
                        <option value="">Select a subject</option>
                        <option value="sourcing">Product Sourcing</option>
                        <option value="quote">Request a Quote</option>
                        <option value="supplier">Supplier Verification</option>
                        <option value="quality">Quality Control</option>
                        <option value="shipping">Shipping & Logistics</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="product" className="block text-sm font-medium text-text-primary mb-2">
                          Product of Interest
                        </label>
                        <input
                          type="text"
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                          placeholder="e.g., LED light bulbs"
                        />
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-text-primary mb-2">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                          placeholder="e.g., 10,000 units"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none ${
                          errors.message ? 'border-red-500' : 'border-border-light'
                        }`}
                        placeholder="Tell us about your requirements, target price, timeline, etc."
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
                      className="w-full bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-text-light text-sm text-center">
                      We typically respond within 24 hours on business days.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-96 bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-text-light mx-auto mb-4" />
          <p className="text-text-secondary">Shenzhen, Guangdong Province, China</p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
