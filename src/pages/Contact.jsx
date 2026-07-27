import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle,
  MessageCircle, Globe, ArrowRight, Building
} from 'lucide-react';

function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0A1628] via-[#0F4C81] to-[#0A3659] text-white py-20 md:py-28">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <MessageCircle className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            Have a sourcing project in mind? Reach out and we will get back to you within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <section className="section-padding bg-background">
        <div className="container-custom max-w-2xl text-center">
          <div className="card">
            <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground mb-6">
              We have received your message. Our team will review your requirements and contact you within 24 hours.
            </p>
            <Link to="/" className="btn-primary">
              Back to Home
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you have a specific product in mind or just want to learn more about our services, we are here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:sourcing@ssourcingchina.com" className="text-primary hover:underline">
                    sourcing@ssourcingchina.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone / WhatsApp</h3>
                  <p className="text-foreground">+86 755 8888 8888</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                  <p className="text-muted-foreground">
                    Room 1201, Building A, International Trade Center<br />
                    Futian District, Shenzhen, Guangdong, China
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />
                    Saturday: 9:00 AM - 1:00 PM (CST)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Languages</h3>
                  <p className="text-muted-foreground">English, Chinese (Mandarin, Cantonese)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="card">
              <h3 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone / WhatsApp</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-foreground mb-1.5">Product Description *</label>
                  <input
                    type="text"
                    id="product"
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
                    placeholder="e.g., Custom packaging boxes, 5000 units"
                  />
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-foreground mb-1.5">Estimated Quantity</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
                    placeholder="e.g., 1000-5000 units"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white resize-none"
                    placeholder="Tell us more about your sourcing needs..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full text-lg py-3.5">
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  We will never share your information with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactMap() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container-custom">
        <div className="card p-0 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="p-8 lg:p-12">
              <h3 className="text-xl font-bold text-foreground mb-4">Visit Our Office</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We welcome factory visits and in-person meetings. Schedule a visit to discuss your sourcing needs face-to-face.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">SSourcing China</p>
                    <p className="text-sm text-muted-foreground">Room 1201, Building A</p>
                    <p className="text-sm text-muted-foreground">International Trade Center</p>
                    <p className="text-sm text-muted-foreground">Futian District, Shenzhen</p>
                    <p className="text-sm text-muted-foreground">Guangdong, China 518000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 bg-primary/5 min-h-[300px] flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground">Shenzhen, China</p>
                <p className="text-sm text-muted-foreground mt-1">Major manufacturing hub with access to suppliers across Guangdong province</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </>
  );
}
