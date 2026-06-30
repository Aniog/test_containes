import { useState, useEffect, useRef } from "react";
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    quantity: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return "Please enter a valid email";
    if (!formData.product.trim()) return "Product description is required";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        product: "",
        quantity: "",
        budget: "",
        timeline: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 8000);
    }, 1500);
  };

  return (
    <div ref={containerRef}>
      <section className="bg-navy-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-navy-200">
              Tell us about your sourcing needs. We will respond within 24 hours with a preliminary assessment and next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h2 className="text-lg font-bold text-navy-900 mb-4">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-navy-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-navy-900 text-sm">Office Address</div>
                      <p className="text-gray-500 text-sm">Room 1208, Tianhe Business Center<br />Guangzhou, Guangdong 510000<br />China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-navy-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-navy-900 text-sm">Email</div>
                      <a href="mailto:info@ssourcingchina.com" className="text-navy-600 hover:text-navy-800 text-sm transition-colors">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-navy-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-navy-900 text-sm">Phone</div>
                      <p className="text-gray-500 text-sm">+86 20 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-navy-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-navy-900 text-sm">Business Hours</div>
                      <p className="text-gray-500 text-sm">Mon - Fri: 9:00 AM - 6:00 PM (CST)<br />Sat: 9:00 AM - 1:00 PM (CST)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900 rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Free Initial Consultation</h3>
                <p className="text-navy-200 text-sm mb-4">
                  Not sure where to start? Schedule a free 30-minute consultation with our sourcing team to discuss your project.
                </p>
                <div className="flex items-center gap-2 text-sm text-navy-300">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-300 mt-1">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  <span>Confidentiality guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-300 mt-1">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-navy-900 mb-6">Submit Your Sourcing Inquiry</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-1.5">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1.5">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-navy-900 mb-1.5">Company Name</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-1.5">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-navy-900 mb-1.5">Product to Source *</label>
                    <input
                      id="product"
                      name="product"
                      type="text"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                      placeholder="Describe the product you want to source"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-navy-900 mb-1.5">Estimated Quantity</label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="text"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                        placeholder="e.g. 5000 pcs"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-navy-900 mb-1.5">Target Budget</label>
                      <input
                        id="budget"
                        name="budget"
                        type="text"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                        placeholder="e.g. USD 10,000"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-navy-900 mb-1.5">Target Timeline</label>
                      <input
                        id="timeline"
                        name="timeline"
                        type="text"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                        placeholder="e.g. 3 months"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1.5">Additional Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent resize-none"
                      placeholder="Quality requirements, certifications needed, special instructions..."
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {error}
                    </div>
                  )}

                  {status === "success" ? (
                    <div className="flex items-center gap-2 p-4 bg-teal-50 text-teal-700 rounded-lg">
                      <CheckCircle className="w-5 h-5 shrink-0" />
                      <div>
                        <div className="font-medium">Thank you for your inquiry!</div>
                        <div className="text-sm mt-0.5">We have received your submission and will respond within 24 hours.</div>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-semibold rounded-lg px-6 py-3.5 text-base transition-colors"
                    >
                      {status === "submitting" ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Sourcing Inquiry
                        </>
                      )}
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}