import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2, MessageSquare } from 'lucide-react';
import Hero from '../components/sections/Hero';
import InquiryForm from '../components/sections/InquiryForm';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    console.log('Contact form submitted:', formData);
  };

  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team. We're here to help with your China sourcing needs."
        ctaText="Send Message"
        secondaryCta="View Services"
        secondaryLink="/services"
        showTrust={false}
      />
      
      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-primary mb-6">Get In Touch</h2>
              <p className="text-text-secondary mb-8">
                Have questions about our services? Ready to start a project? We'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Office Address</h4>
                    <p className="text-text-secondary text-sm">
                      Room 1208, Building A<br />
                      Shenzhen, Guangdong<br />
                      China 518000
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Phone</h4>
                    <p className="text-text-secondary text-sm">
                      +86 755 1234 5678<br />
                      +86 755 1234 5679
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-text-secondary text-sm">
                      info@ssourcingchina.com<br />
                      sales@ssourcingchina.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Business Hours</h4>
                    <p className="text-text-secondary text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />
                      Saturday: 9:00 AM - 1:00 PM (CST)<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Quick Response Promise */}
              <div className="mt-8 p-6 bg-bg-alt rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare size={24} className="text-accent" />
                  <h4 className="font-semibold text-primary">Quick Response</h4>
                </div>
                <p className="text-text-secondary text-sm">
                  We typically respond to inquiries within 24 hours during business days. For urgent matters, please call us directly.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                  <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Message Sent Successfully!</h3>
                  <p className="text-text-secondary mb-8 max-w-md mx-auto">
                    Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        inquiryType: '',
                        message: ''
                      });
                    }}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-primary mb-6">Send Us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
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
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="John Smith"
                        />
                      </div>
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
                          className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
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
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="john@example.com"
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
                          className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-text-primary mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                      >
                        <option value="">Select inquiry type</option>
                        <option value="general">General Inquiry</option>
                        <option value="quote">Request a Quote</option>
                        <option value="services">Services Information</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="support">Existing Client Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                        placeholder="Tell us about your project or inquiry. The more details you provide, the better we can assist you..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <Loader2 size={20} className="animate-spin mr-2" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send size={20} className="mr-2" />
                          Send Message
                        </span>
                      )}
                    </button>
                    
                    <p className="text-xs text-text-muted text-center">
                      By submitting this form, you agree to our Privacy Policy. We'll never share your information.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Placeholder */}
      <section className="bg-bg-alt">
        <div className="container-custom py-16">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 text-center">
            <MapPin size={48} className="text-primary/30 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">Shenzhen Office</h3>
            <p className="text-text-secondary mb-4">
              Room 1208, Building A, Futian District<br />
              Shenzhen, Guangdong, China 518000
            </p>
            <p className="text-text-muted text-sm">
              Located in the heart of Shenzhen's business district, easily accessible by metro and taxi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
