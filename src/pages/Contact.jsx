import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const productOptions = [
  'Electronics & Accessories',
  'Home & Garden',
  'Apparel & Fashion',
  'Industrial & Machinery',
  'Health & Beauty',
  'Toys & Baby Products',
  'Promotional Products',
  'Automotive Parts',
  'Other',
];

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Sample Management',
  'Shipping Coordination',
  'Full-Service Package',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    productCategory: '',
    productDescription: '',
    quantity: '',
    targetPrice: '',
    services: [],
    timeline: '',
    additionalNotes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleServiceToggle = (service) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Please enter a valid email';
    if (!form.company.trim()) newErrors.company = 'Company name is required';
    if (!form.productDescription.trim()) newErrors.productDescription = 'Please describe your product requirements';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div>
        <section className="bg-primary py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">Contact Us</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Get a free sourcing consultation and quote from our team.
            </p>
          </div>
        </section>
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-success" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Thank You for Your Inquiry
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              We have received your sourcing requirements. Our team will review your submission
              and respond within 24 business hours with initial supplier recommendations and next steps.
            </p>
            <p className="text-text-muted text-sm">
              Reference number: SSI-{Date.now().toString().slice(-8)}
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-5">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Tell us what you need to source from China. Our team will respond within 24 business
            hours with supplier recommendations and a customized plan.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-text-primary mb-6">Get in Touch</h2>
              <div className="flex flex-col gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary mb-0.5">Email</h3>
                    <p className="text-text-secondary text-sm">info@ssourcingchina.com</p>
                    <p className="text-text-muted text-xs mt-0.5">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary mb-0.5">Phone</h3>
                    <p className="text-text-secondary text-sm">+86 755 8888 9999</p>
                    <p className="text-text-muted text-xs mt-0.5">Mon-Fri, 9:00 AM - 6:00 PM CST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary mb-0.5">Office</h3>
                    <p className="text-text-secondary text-sm">Futian District, Shenzhen</p>
                    <p className="text-text-secondary text-sm">Guangdong, China 518000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary mb-0.5">Working Hours</h3>
                    <p className="text-text-secondary text-sm">Monday - Friday</p>
                    <p className="text-text-secondary text-sm">9:00 AM - 6:00 PM (CST, UTC+8)</p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-alt rounded-xl p-6 border border-border">
                <h3 className="text-base font-bold text-text-primary mb-2">What to Expect</h3>
                <ul className="flex flex-col gap-2.5 text-text-secondary text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    Response within 24 business hours
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    Free initial consultation and quote
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    No obligation, no hidden fees
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    Confidential handling of your requirements
                  </li>
                </ul>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border p-6 md:p-8 lg:p-10">
                <h2 className="text-xl font-bold text-text-primary mb-1">Sourcing Inquiry Form</h2>
                <p className="text-text-secondary text-sm mb-8">Fields marked with * are required.</p>

                {/* Contact Info */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4 pb-2 border-b border-border">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${errors.name ? 'border-red-400' : 'border-border'} text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                        placeholder="John Smith"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${errors.email ? 'border-red-400' : 'border-border'} text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${errors.company ? 'border-red-400' : 'border-border'} text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                        placeholder="Your Company Ltd."
                      />
                      {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Country / Region
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="e.g., United States, United Kingdom, Australia"
                      />
                    </div>
                  </div>
                </div>

                {/* Product Requirements */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4 pb-2 border-b border-border">
                    Product Requirements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Product Category
                      </label>
                      <select
                        name="productCategory"
                        value={form.productCategory}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                      >
                        <option value="">Select a category</option>
                        {productOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="e.g., 1,000 units, 10,000 pcs"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Product Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="productDescription"
                      value={form.productDescription}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-2.5 rounded-lg border ${errors.productDescription ? 'border-red-400' : 'border-border'} text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none`}
                      placeholder="Describe the products you need to source. Include specifications, materials, dimensions, colors, and any certifications required."
                    />
                    {errors.productDescription && <p className="text-red-500 text-xs mt-1">{errors.productDescription}</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Target Price (per unit)
                      </label>
                      <input
                        type="text"
                        name="targetPrice"
                        value={form.targetPrice}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="e.g., $5-10 USD per unit"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Preferred Timeline
                      </label>
                      <select
                        name="timeline"
                        value={form.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="flexible">Flexible / Exploring</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Services Needed */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4 pb-2 border-b border-border">
                    Services Needed
                  </h3>
                  <p className="text-text-secondary text-sm mb-3">Select all services you are interested in:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {serviceOptions.map((service) => (
                      <label
                        key={service}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg border cursor-pointer transition-colors ${
                          form.services.includes(service)
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-border text-text-secondary hover:border-primary/30'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={form.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                          form.services.includes(service) ? 'bg-primary border-primary' : 'border-border'
                        }`}>
                          {form.services.includes(service) && (
                            <CheckCircle className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span className="text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-text-primary mb-1.5">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={form.additionalNotes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg border border-border text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Any other details about your project, specific requirements, or questions."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-accent text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-accent-hover transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Submit Sourcing Inquiry
                </button>

                <p className="text-text-muted text-xs text-center mt-4">
                  Your information is handled confidentially and will not be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
