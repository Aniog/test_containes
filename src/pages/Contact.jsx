import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Globe,
  MessageSquare,
} from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    budget: '',
    timeline: '',
    message: '',
    hearAbout: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary-dark text-white py-16 md:py-24">
        <div className="container">
          <span className="text-primary-light text-xs font-semibold uppercase tracking-wider">Contact</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Get in Touch
          </h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            Tell us about your sourcing needs. We will review your requirements and send a free, no-obligation quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-neutral-nearblack mb-4">
                  Contact Information
                </h2>
                <p className="text-sm text-neutral-mediumgray leading-relaxed mb-6">
                  Our team is based in Shanghai and works with buyers across North America, Europe, Australia, and the Middle East.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-nearblack mb-1">Office Address</h3>
                    <p className="text-sm text-neutral-mediumgray leading-relaxed">
                      Room 1205, Tower B<br />
                      SOHO Donghai Plaza<br />
                      299 Tongren Road, Jing'an District<br />
                      Shanghai 200040, China
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-nearblack mb-1">Phone</h3>
                    <p className="text-sm text-neutral-mediumgray">
                      +86 21 1234 5678
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-nearblack mb-1">Email</h3>
                    <p className="text-sm text-neutral-mediumgray">
                      hello@ssourcingchina.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-nearblack mb-1">Working Hours</h3>
                    <p className="text-sm text-neutral-mediumgray">
                      Monday – Friday: 9:00 AM – 6:00 PM (CST)<br />
                      Saturday: 10:00 AM – 2:00 PM (CST)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-nearblack mb-1">Languages</h3>
                    <p className="text-sm text-neutral-mediumgray">
                      English, Mandarin Chinese
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-nearblack mb-1">Response Time</h3>
                    <p className="text-sm text-neutral-mediumgray">
                      We respond to all inquiries within 24 business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-success/10 border border-success rounded-lg p-10 text-center">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-neutral-nearblack mb-3">
                    Thank You for Your Inquiry
                  </h2>
                  <p className="text-neutral-mediumgray mb-6 max-w-md mx-auto">
                    We have received your message and will review your requirements. A member of our sourcing team will contact you within 24 hours with a free quote and next steps.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        product: '',
                        quantity: '',
                        budget: '',
                        timeline: '',
                        message: '',
                        hearAbout: '',
                      });
                    }}
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <div className="bg-white border border-neutral-lightgray rounded-lg p-8 shadow-sm">
                  <h2 className="text-xl font-semibold text-neutral-nearblack mb-2">
                    Sourcing Inquiry Form
                  </h2>
                  <p className="text-sm text-neutral-mediumgray mb-6">
                    The more detail you provide, the more accurate our quote will be. All fields marked with * are required.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-neutral-darkgray mb-1">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full border border-neutral-lightgray rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-darkgray mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full border border-neutral-lightgray rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-neutral-darkgray mb-1">
                          Email Address <span className="text-accent">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full border border-neutral-lightgray rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-darkgray mb-1">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full border border-neutral-lightgray rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-darkgray mb-1">
                        Product Name / Description <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="product"
                        required
                        value={form.product}
                        onChange={handleChange}
                        className="w-full border border-neutral-lightgray rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="e.g., Stainless steel kitchen faucet with pull-down sprayer"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-neutral-darkgray mb-1">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={form.quantity}
                          onChange={handleChange}
                          className="w-full border border-neutral-lightgray rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="e.g., 5,000 units"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-darkgray mb-1">
                          Target Unit Price (USD)
                        </label>
                        <input
                          type="text"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="w-full border border-neutral-lightgray rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="e.g., $4.50 / unit"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-darkgray mb-1">
                          Desired Timeline
                        </label>
                        <input
                          type="text"
                          name="timeline"
                          value={form.timeline}
                          onChange={handleChange}
                          className="w-full border border-neutral-lightgray rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="e.g., Delivery by November 2026"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-darkgray mb-1">
                        Detailed Requirements
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full border border-neutral-lightgray rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Include materials, dimensions, colors, packaging requirements, certifications needed (CE, FCC, RoHS), target market, and any other details..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-darkgray mb-1">
                        How Did You Hear About Us?
                      </label>
                      <select
                        name="hearAbout"
                        value={form.hearAbout}
                        onChange={handleChange}
                        className="w-full border border-neutral-lightgray rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                      >
                        <option value="">Select an option</option>
                        <option value="google">Google Search</option>
                        <option value="referral">Referral / Word of Mouth</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="trade-show">Trade Show</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent-dark text-white py-3.5 rounded-md text-base font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Submit Inquiry
                    </button>

                    <p className="text-xs text-neutral-mediumgray text-center">
                      By submitting this form, you agree to our privacy policy. We will never share your information with third parties.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
