import { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const productOptions = [
  'Electronics & Gadgets',
  'Home & Garden',
  'Apparel & Textiles',
  'Machinery & Parts',
  'Beauty & Personal Care',
  'Promotional Items',
  'Automotive Parts',
  'Packaging & Printing',
  'Toys & Children\'s Products',
  'Tools & Hardware',
  'Sports & Outdoor',
  'Food & Beverage Equipment',
  'Other',
];

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Audit',
  'Quality Inspection',
  'Production Monitoring',
  'Shipping & Logistics',
  'Sample Management',
  'Full Service Package',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    productCategory: '',
    productName: '',
    quantity: '',
    targetPrice: '',
    servicesNeeded: [],
    timeline: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      servicesNeeded: prev.servicesNeeded.includes(service)
        ? prev.servicesNeeded.filter((s) => s !== service)
        : [...prev.servicesNeeded, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <section className="bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 py-16 lg:py-20">
          <div className="container-max text-center">
            <div className="max-w-lg mx-auto">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
                Thank You for Your Inquiry
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                We have received your sourcing request. Our team will review your requirements and respond within 48 hours with initial supplier recommendations and next steps.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', country: '', phone: '', productCategory: '', productName: '', quantity: '', targetPrice: '', servicesNeeded: [], timeline: '', details: '' }); }}
                className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 py-16 lg:py-20">
        <div className="container-max text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Tell us about your sourcing needs. We will research suppliers, verify factories, and provide a detailed quote within 48 hours — completely free.
          </p>
        </div>
      </section>

      {/* Form + Contact info */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Contact info sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <h2 className="text-xl font-bold text-navy-500 mb-6">Get in Touch</h2>
                <div className="space-y-5 mb-8">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-navy-500" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                      <p className="text-sm font-medium text-navy-500">info@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-navy-500" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Phone</p>
                      <p className="text-sm font-medium text-navy-500">+86 138 0013 8000</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-navy-500" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Address</p>
                      <p className="text-sm font-medium text-navy-500">Room 1205, Trade Center<br />Guangzhou, China 510000</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-navy-500" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Working Hours</p>
                      <p className="text-sm font-medium text-navy-500">Mon - Fri, 9:00 AM - 6:00 PM (CST)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-navy-500 rounded-xl p-6 text-white">
                  <h3 className="text-base font-bold mb-2">48-Hour Response</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    We respond to all sourcing inquiries within 48 hours with initial supplier recommendations and a clear action plan.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 lg:p-8">
                <h2 className="text-xl font-bold text-navy-500 mb-6">Sourcing Inquiry Form</h2>

                {/* Contact details */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Country *</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-colors"
                      placeholder="e.g. United States"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-colors"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <hr className="border-gray-100 my-6" />

                {/* Product details */}
                <h3 className="text-base font-bold text-navy-500 mb-4">Product Details</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Category *</label>
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-colors bg-white"
                    >
                      <option value="">Select a category</option>
                      {productOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Name / Description *</label>
                    <input
                      type="text"
                      name="productName"
                      value={formData.productName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-colors"
                      placeholder="e.g. Wireless Bluetooth Earbuds"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Estimated Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-colors"
                      placeholder="e.g. 5,000 units"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Target Price (USD)</label>
                    <input
                      type="text"
                      name="targetPrice"
                      value={formData.targetPrice}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-colors"
                      placeholder="e.g. $5-8 per unit"
                    />
                  </div>
                </div>

                <hr className="border-gray-100 my-6" />

                {/* Services needed */}
                <h3 className="text-base font-bold text-navy-500 mb-4">Services Needed</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {serviceOptions.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`px-3.5 py-2 text-sm font-medium rounded-lg border transition-colors ${
                        formData.servicesNeeded.includes(service)
                          ? 'bg-navy-500 text-white border-navy-500'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-navy-300 hover:text-navy-500'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-colors bg-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">Urgent (within 2 weeks)</option>
                      <option value="1month">Within 1 month</option>
                      <option value="2-3months">2-3 months</option>
                      <option value="flexible">Flexible</option>
                      <option value="planning">Just planning</option>
                    </select>
                  </div>
                </div>

                {/* Additional details */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Details</label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-colors resize-none"
                    placeholder="Share any additional details about your sourcing needs, specific requirements, certifications needed, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent-500 hover:bg-accent-600 text-white text-base font-semibold rounded-lg transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  Submit Sourcing Inquiry
                </button>

                <p className="text-xs text-gray-400 mt-4">
                  We typically respond within 48 hours. Your information is kept confidential and will only be used to process your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
