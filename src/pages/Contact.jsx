import React, { useState, useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product: "",
  quantity: "",
  budget: "",
  timeline: "",
  requirements: "",
  source: "",
};

export default function Contact() {
  const containerRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sourcing inquiry submitted:", form);
    setSubmitted(true);
    setForm(initialForm);
  };

  if (submitted) {
    return (
      <div ref={containerRef}>
        <section className="bg-primary py-16 md:py-20">
          <div className="container-section">
            <div className="max-w-3xl">
              <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white">Get a Free Sourcing Quote</h1>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 bg-white">
          <div className="container-section">
            <div className="max-w-xl mx-auto text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Thank You for Your Inquiry</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We've received your sourcing request and will get back to you within 24 hours. Our team will review your requirements and prepare a customized solution for your project.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-secondary"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Get a Free Sourcing Quote</h1>
            <p className="text-lg text-slate-300 mt-4 max-w-2xl">
              Tell us about your sourcing needs and we'll get back to you within 24 hours with a customized proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="Your Company Ltd"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">
                      Product to Source <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="product"
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="e.g. Bluetooth speakers"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="e.g. 1,000 units/month"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1">
                      Target Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="over-500k">Over $500,000</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-1">
                      Desired Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">ASAP (within 1 month)</option>
                      <option value="1-3">1 - 3 months</option>
                      <option value="3-6">3 - 6 months</option>
                      <option value="6-plus">6+ months</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium text-slate-700 mb-1">
                    Detailed Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    value={form.requirements}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-y"
                    placeholder="Please describe your product requirements, specifications, quality standards, certifications needed, and any other relevant details..."
                  />
                </div>

                <div>
                  <label htmlFor="source" className="block text-sm font-medium text-slate-700 mb-1">
                    How did you hear about us?
                  </label>
                  <select
                    id="source"
                    name="source"
                    value={form.source}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="referral">Referral</option>
                    <option value="alibaba">Alibaba</option>
                    <option value="trade-show">Trade Show</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button type="submit" className="btn-primary text-base px-8 py-4 w-full md:w-auto">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Sourcing Inquiry
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="card">
                <h3 className="font-semibold text-slate-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900 text-sm">Office Address</p>
                      <p className="text-slate-500 text-sm">Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900 text-sm">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-primary text-sm hover:underline">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900 text-sm">Phone</p>
                      <a href="tel:+861234567890" className="text-primary text-sm hover:underline">
                        +86 123 4567 890
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold text-slate-900 mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    "We review your inquiry within 24 hours",
                    "Our team prepares a customized proposal",
                    "We schedule a call to discuss details",
                    "We begin supplier matching and verification",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="card bg-primary/5 border-primary/10">
                <h3 className="font-semibold text-slate-900 mb-2">Free Consultation</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  All initial consultations are free and come with no obligation. We'll help you understand your options before you commit to anything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}