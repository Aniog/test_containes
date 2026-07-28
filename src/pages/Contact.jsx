import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Mail, 
  Phone, 
  Clock,
  Send,
  CheckCircle,
  Star
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productType: '',
    quantity: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['Guangzhou, China'],
      description: 'Our team is based in Guangzhou, the heart of China\'s manufacturing hub.',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@ssourcing-china.com', 'support@ssourcing-china.com'],
      description: 'We respond within 24 hours on business days.',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+86 123 4567 8900', '+86 123 4567 8901'],
      description: 'Available Monday to Friday, 9 AM - 6 PM CST.',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 - 18:00', 'Saturday: 9:00 - 14:00'],
      description: 'We\'re here to help during these hours.',
    },
  ];

  const whyChooseUs = [
    'Response within 24 hours',
    'Free initial consultation',
    'No obligation quote',
    'Confidentiality guaranteed',
    'Experienced team',
    'Proven track record',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Ready to start sourcing from China? Get in touch for a free consultation and quote. We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-text-dark mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-text-dark text-sm mb-1">{detail}</p>
                ))}
                <p className="text-text-muted text-xs mt-3">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-bold text-text-dark mb-6">
                Get Your Free Sourcing Quote
              </h2>
              <p className="text-text-muted mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
              </p>

              {submitted ? (
                <div className="bg-success/10 border border-success/20 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-2">Thank You!</h3>
                  <p className="text-text-muted mb-4">
                    Your inquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-semibold hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                        placeholder="Your Company Ltd"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Product Type *
                      </label>
                      <select
                        name="productType"
                        required
                        value={formData.productType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                      >
                        <option value="">Select product type</option>
                        <option value="electronics">Electronics</option>
                        <option value="home">Home & Garden</option>
                        <option value="apparel">Apparel & Textiles</option>
                        <option value="industrial">Industrial Equipment</option>
                        <option value="packaging">Packaging</option>
                        <option value="beauty">Health & Beauty</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                        placeholder="e.g., 10,000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none"
                      placeholder="Tell us about your sourcing requirements, target price, and any specific needs. The more details you provide, the better we can help you."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Submit Inquiry
                  </button>

                  <p className="text-center text-text-muted text-sm">
                    By submitting, you agree to our Privacy Policy. We'll never share your information.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Why Choose Us */}
              <div className="bg-background rounded-2xl p-8">
                <h3 className="text-xl font-bold text-text-dark mb-6">
                  Why Work With Us
                </h3>
                <ul className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-text-dark text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div className="bg-primary/5 rounded-2xl p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent" />
                  ))}
                </div>
                <p className="text-text-dark italic mb-6">
                  "SSourcing China transformed our supply chain. Their professionalism and attention to detail saved us time and money. Highly recommended!"
                </p>
                <div>
                  <p className="font-semibold text-text-dark">Mark Johnson</p>
                  <p className="text-text-muted text-sm">CEO, TechImport Inc.</p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-accent rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Need Quick Assistance?</h3>
                <p className="text-white/80 text-sm mb-6">
                  For urgent inquiries, feel free to call us directly.
                </p>
                <a
                  href="tel:+8612345678900"
                  className="inline-flex items-center gap-2 bg-white text-accent px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +86 123 4567 8900
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">
              Visit Our Office
            </h2>
            <p className="text-text-muted">
              We're based in Guangzhou, China - the manufacturing hub of the world.
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden h-[400px] flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 text-primary/30 mx-auto mb-4" />
              <p className="text-text-muted">Guangzhou, China</p>
              <p className="text-text-muted text-sm mt-2">
                Map integration available upon request
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;