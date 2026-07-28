import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';

const initialForm = {
  name: '',
  email: '',
  company: '',
  phone: '',
  productCategory: '',
  productDescription: '',
  quantity: '',
  targetPrice: '',
  timeline: '',
  message: '',
};

export default function Contact() {
  const containerRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      console.log('Inquiry submitted:', form);
    }, 1500);
  };

  if (submitted) {
    return (
      <div ref={containerRef} className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-b2b-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-b2b-success" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-b2b-text mb-4">Thank You for Your Inquiry</h1>
          <p className="text-lg text-b2b-text-medium mb-8">
            We've received your sourcing request. Our team will review your requirements 
            and get back to you within 24 hours with a preliminary assessment.
          </p>
          <p className="text-sm text-b2b-text-light mb-8">
            If you have urgent needs, please call us at +86 755 1234 5678.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm(initialForm); }}
            className="inline-flex items-center text-navy font-semibold hover:text-navy-light transition-colors"
          >
            Submit Another Inquiry <ArrowRight className="ml-1 w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              <span id="contact-hero-label">Contact Us</span>
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              <span id="contact-hero-heading">Get a Free Sourcing Quote</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              <span id="contact-hero-subtitle">
                Tell us about your product requirements. We'll assess your needs and provide a tailored sourcing solution — free of charge, no obligation.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-b2b-text mb-2">Sourcing Inquiry Form</h2>
              <p className="text-b2b-text-medium mb-8">
                Fill in the details below and our team will respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-b2b-text mb-1.5">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-b2b-border rounded-md text-sm focus:ring-2 focus:ring-navy/20 focus:border-navy outline-none transition"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-b2b-text mb-1.5">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-b2b-border rounded-md text-sm focus:ring-2 focus:ring-navy/20 focus:border-navy outline-none transition"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-b2b-text mb-1.5">
                      Company Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-b2b-border rounded-md text-sm focus:ring-2 focus:ring-navy/20 focus:border-navy outline-none transition"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-b2b-text mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-b2b-border rounded-md text-sm focus:ring-2 focus:ring-navy/20 focus:border-navy outline-none transition"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="productCategory" className="block text-sm font-medium text-b2b-text mb-1.5">
                    Product Category <span className="text-accent">*</span>
                  </label>
                  <select
                    id="productCategory"
                    name="productCategory"
                    required
                    value={form.productCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-b2b-border rounded-md text-sm focus:ring-2 focus:ring-navy/20 focus:border-navy outline-none transition bg-white"
                  >
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics & Components</option>
                    <option value="machinery">Machinery & Industrial Equipment</option>
                    <option value="textiles">Textiles & Apparel</option>
                    <option value="home-kitchen">Home & Kitchen Products</option>
                    <option value="packaging">Packaging & Printing</option>
                    <option value="automotive">Automotive Parts & Accessories</option>
                    <option value="hardware">Hardware & Tools</option>
                    <option value="renewable-energy">Renewable Energy Products</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="productDescription" className="block text-sm font-medium text-b2b-text mb-1.5">
                    Product Description <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="productDescription"
                    name="productDescription"
                    required
                    rows={3}
                    value={form.productDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-b2b-border rounded-md text-sm focus:ring-2 focus:ring-navy/20 focus:border-navy outline-none transition resize-y"
                    placeholder="Describe the product you want to source. Include specifications, materials, dimensions, or reference images links if available."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-b2b-text mb-1.5">
                      Estimated Order Quantity
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={form.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-b2b-border rounded-md text-sm focus:ring-2 focus:ring-navy/20 focus:border-navy outline-none transition"
                      placeholder="e.g. 1,000 units"
                    />
                  </div>
                  <div>
                    <label htmlFor="targetPrice" className="block text-sm font-medium text-b2b-text mb-1.5">
                      Target Price (USD)
                    </label>
                    <input
                      id="targetPrice"
                      name="targetPrice"
                      type="text"
                      value={form.targetPrice}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-b2b-border rounded-md text-sm focus:ring-2 focus:ring-navy/20 focus:border-navy outline-none transition"
                      placeholder="e.g. $5-10 per unit"
                    />
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-b2b-text mb-1.5">
                      Expected Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-b2b-border rounded-md text-sm focus:ring-2 focus:ring-navy/20 focus:border-navy outline-none transition bg-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">Urgent (within 1 month)</option>
                      <option value="1-2">1-2 months</option>
                      <option value="2-3">2-3 months</option>
                      <option value="3-6">3-6 months</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-b2b-text mb-1.5">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-b2b-border rounded-md text-sm focus:ring-2 focus:ring-navy/20 focus:border-navy outline-none transition resize-y"
                    placeholder="Any other requirements, certifications needed, target market, or questions you may have."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-md transition-colors duration-200 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>Processing...</>
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-b2b-light rounded-lg p-8 border border-b2b-border sticky top-24">
                <h3 className="text-lg font-semibold text-b2b-text mb-6">Contact Information</h3>

                <div className="space-y-5">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-b2b-text">Office Address</div>
                      <p className="text-sm text-b2b-text-medium">
                        Futian District, Shenzhen<br />
                        Guangdong, China 518000
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-b2b-text">Phone / WhatsApp</div>
                      <p className="text-sm text-b2b-text-medium">+86 755 1234 5678</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-b2b-text">Email</div>
                      <p className="text-sm text-b2b-text-medium">info@ssourcingchina.com</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-b2b-text">Business Hours</div>
                      <p className="text-sm text-b2b-text-medium">
                        Monday - Friday<br />
                        9:00 AM - 6:00 PM (CST)<br />
                        GMT+8
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-6 border-b2b-border" />

                <h4 className="text-sm font-semibold text-b2b-text mb-3">What Happens Next?</h4>
                <ol className="space-y-3 text-sm text-b2b-text-medium">
                  <li className="flex gap-2">
                    <span className="font-bold text-accent">1.</span>
                    We review your requirements within 24 hours
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-accent">2.</span>
                    Initial consultation call to discuss details
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-accent">3.</span>
                    We provide a sourcing plan and quote
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-accent">4.</span>
                    You approve and we begin sourcing
                  </li>
                </ol>

                <div className="mt-6">
                  <img
                    alt="China sourcing office"
                    data-strk-img-id="contact-sidebar-img-9x1y2z"
                    data-strk-img="[contact-hero-subtitle] [contact-hero-heading]"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}