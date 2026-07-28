import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    setFormSubmitted(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/80">
              Ready to start sourcing from China? Get in touch with our team for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[var(--primary)]">Get In Touch</h2>
              <p className="text-[var(--text-secondary)] mb-8">
                Have questions about sourcing from China? Our team is here to help. Fill out the form, and we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--primary)] mb-1">Office Address</h4>
                    <p className="text-[var(--text-secondary)]">
                      Shenzhen, Guangdong, China<br />
                      (Service available globally)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--primary)] mb-1">Email Us</h4>
                    <p className="text-[var(--text-secondary)]">info@ssourcingchina.com</p>
                    <p className="text-[var(--text-secondary)]">support@ssourcingchina.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--primary)] mb-1">Call Us</h4>
                    <p className="text-[var(--text-secondary)]">+86 123 4567 8900</p>
                    <p className="text-[var(--text-secondary)]">Mon-Fri: 9:00 AM - 6:00 PM (China Time)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--primary)] mb-1">Business Hours</h4>
                    <p className="text-[var(--text-secondary)]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-[var(--text-secondary)]">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-[var(--text-secondary)]">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Response Time Info */}
              <div className="mt-8 p-6 bg-[var(--bg-light)] rounded-lg">
                <h4 className="font-semibold text-[var(--primary)] mb-2">Response Time</h4>
                <p className="text-[var(--text-secondary)] text-sm">
                  We typically respond to all inquiries within 24 business hours. For urgent requests, please call us directly.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[var(--success)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[var(--primary)]">Thank You!</h3>
                  <p className="text-[var(--text-secondary)] mb-6">
                    Your inquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="btn btn-secondary"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6 text-[var(--primary)]">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid-2 gap-4">
                      <div>
                        <label className="label">Full Name *</label>
                        <input type="text" className="input-field" placeholder="John Smith" required />
                      </div>
                      <div>
                        <label className="label">Company Name</label>
                        <input type="text" className="input-field" placeholder="Your Company" />
                      </div>
                    </div>
                    
                    <div className="grid-2 gap-4">
                      <div>
                        <label className="label">Email Address *</label>
                        <input type="email" className="input-field" placeholder="john@company.com" required />
                      </div>
                      <div>
                        <label className="label">Phone Number</label>
                        <input type="tel" className="input-field" placeholder="+1 234 567 8900" />
                      </div>
                    </div>

                    <div>
                      <label className="label">Company Website</label>
                      <input type="url" className="input-field" placeholder="https://yourcompany.com" />
                    </div>

                    <div>
                      <label className="label">Service Interested In *</label>
                      <select className="input-field" required>
                        <option value="">Select a service</option>
                        <option value="sourcing">Product Sourcing</option>
                        <option value="verification">Supplier Verification</option>
                        <option value="qc">Quality Inspection</option>
                        <option value="production">Production Follow-up</option>
                        <option value="shipping">Shipping & Logistics</option>
                        <option value="custom">Custom Solution</option>
                      </select>
                    </div>

                    <div>
                      <label className="label">Product Category</label>
                      <select className="input-field">
                        <option value="">Select a category</option>
                        <option value="electronics">Electronics</option>
                        <option value="textiles">Textiles & Apparel</option>
                        <option value="machinery">Machinery & Industrial</option>
                        <option value="furniture">Furniture</option>
                        <option value="packaging">Packaging</option>
                        <option value="toys">Toys & Games</option>
                        <option value="home">Home & Garden</option>
                        <option value="automotive">Automotive</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="label">Estimated Order Quantity</label>
                      <input type="text" className="input-field" placeholder="e.g., 10,000 units" />
                    </div>

                    <div>
                      <label className="label">Your Requirements *</label>
                      <textarea 
                        className="input-field" 
                        rows="5" 
                        placeholder="Please describe your product requirements, including specifications, target price, packaging needs, and any other details that would help us understand your needs..."
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                      Submit Inquiry
                      <Send className="ml-2 w-5 h-5" />
                    </button>

                    <p className="text-xs text-[var(--text-secondary)] text-center">
                      By submitting this form, you agree to our privacy policy. We will never share your information with third parties.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section bg-[var(--bg-light)]">
        <div className="container">
          <div className="card p-0 overflow-hidden">
            <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] h-80 flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-xl font-semibold">Shenzhen, Guangdong, China</p>
                <p className="text-white/70">Serving clients worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Quick Answers</h2>
            <p className="section-subtitle mx-auto">
              Common questions before reaching out
            </p>
          </div>
          
          <div className="grid-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h4 className="font-semibold text-[var(--primary)] mb-2">How quickly can you respond?</h4>
              <p className="text-[var(--text-secondary)]">We respond to all inquiries within 24 business hours. For urgent matters, call us directly.</p>
            </div>
            <div className="card">
              <h4 className="font-semibold text-[var(--primary)] mb-2">Do you work with small orders?</h4>
              <p className="text-[var(--text-secondary)]">Yes, we work with businesses of all sizes, from startups to large enterprises.</p>
            </div>
            <div className="card">
              <h4 className="font-semibold text-[var(--primary)] mb-2">What information do you need?</h4>
              <p className="text-[var(--text-secondary)]">Product specifications, quantity, target price, and any special requirements will help us serve you better.</p>
            </div>
            <div className="card">
              <h4 className="font-semibold text-[var(--primary)] mb-2">Is there a fee for consultation?</h4>
              <p className="text-[var(--text-secondary)]">Initial consultations are always free. Our service fees are discussed based on your specific requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;