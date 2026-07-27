import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

const CTAForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productType: '',
    quantity: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.productType.trim()) newErrors.productType = 'Product type is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="section-spacing bg-gradient-to-br from-primary-800 to-primary-900">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-xl text-primary-100 mb-6">
              We've received your inquiry and will get back to you within 24 hours.
            </p>
            <p className="text-primary-200">
              Check your email for a confirmation. Our team is ready to help you source products from China.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-spacing bg-gradient-to-br from-primary-800 to-primary-900" id="quote">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Sourcing from China?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Get a free, no-obligation quote for your sourcing needs. Our team will respond within 24 hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-accent-400" />
                <span className="text-primary-100">Free supplier identification</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-accent-400" />
                <span className="text-primary-100">Competitive pricing analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-accent-400" />
                <span className="text-primary-100">No obligation quote</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-accent-400" />
                <span className="text-primary-100">Response within 24 hours</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-primary-700">
              <p className="text-primary-200 text-sm mb-4">
                Prefer to speak directly? Contact us:
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-colors"
                >
                  Schedule a Call
                </Link>
                <a
                  href="mailto:info@ssourcingchina.com"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-colors"
                >
                  info@ssourcingchina.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Get a Free Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="input-label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input-field ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''}`}
                    placeholder="John Smith"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="input-label">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Your Company Inc."
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="input-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-field ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''}`}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="input-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="productType" className="input-label">
                    Product Type *
                  </label>
                  <input
                    type="text"
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    className={`input-field ${errors.productType ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''}`}
                    placeholder="e.g., Electronics, Furniture"
                  />
                  {errors.productType && (
                    <p className="text-red-500 text-sm mt-1">{errors.productType}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="quantity" className="input-label">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g., 5,000 units"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="input-label">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="input-field resize-none"
                  placeholder="Tell us more about your requirements, timeline, or any specific questions..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-accent text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Get Free Quote
                    <Send className="w-5 h-5" />
                  </span>
                )}
              </button>

              <p className="text-center text-neutral-500 text-sm">
                We respect your privacy. Your information will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAForm;
