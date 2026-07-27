import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Request failed';
};

export default function ContactPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productCategory: '',
    quantity: '',
    targetPrice: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const { data: response, error: submitError } = await client
      .from('SourcingInquiry')
      .insert({
        data: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          productCategory: formData.productCategory,
          quantity: formData.quantity,
          targetPrice: formData.targetPrice,
          message: formData.message,
          status: 'new',
          createdAt: new Date().toISOString(),
        },
      })
      .select()
      .single();

    if (submitError || response?.success === false) {
      setError(getErrorMessage(response, submitError));
      setSubmitting(false);
      return;
    }

    setSubmitted(true);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="section-padding bg-white">
        <div className="container-main max-w-2xl mx-auto text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mx-auto">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-slate-900">Thank You!</h2>
          <p className="mt-4 text-lg text-slate-600">
            Your sourcing request has been submitted. We will review your requirements and get back
            to you within 24 hours with a free, no-obligation quote.
          </p>
          <button
            className="btn-primary mt-8"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                productCategory: '',
                quantity: '',
                targetPrice: '',
                message: '',
              });
            }}
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
        <div className="container-main section-padding">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-blue-600/50 px-4 py-1.5 text-sm font-medium">
              Contact Us
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              Get a Free Sourcing Quote
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              Tell us about your sourcing needs and we will get back to you within 24 hours
              with a free, no-obligation quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900">Sourcing Request Form</h2>
              <p className="mt-2 text-slate-600">
                Fill out the form below with as much detail as possible. The more information you
                provide, the more accurate our quote will be.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="productCategory" className="block text-sm font-medium text-slate-700">
                      Product Category *
                    </label>
                    <select
                      id="productCategory"
                      name="productCategory"
                      required
                      value={formData.productCategory}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      <option value="electronics">Electronics & Components</option>
                      <option value="home-garden">Home & Garden Products</option>
                      <option value="apparel">Apparel & Textiles</option>
                      <option value="industrial">Industrial Equipment</option>
                      <option value="packaging">Packaging & Printing</option>
                      <option value="automotive">Automotive Parts</option>
                      <option value="sports">Sports & Outdoor</option>
                      <option value="beauty">Beauty & Personal Care</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-slate-700">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 5,000 units"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="targetPrice" className="block text-sm font-medium text-slate-700">
                    Target Price (per unit)
                  </label>
                  <input
                    type="text"
                    id="targetPrice"
                    name="targetPrice"
                    value={formData.targetPrice}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., $5.00 - $8.00"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                    Product Details & Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your product, specifications, quality requirements, certifications needed, timeline, and any other relevant details..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto" disabled={submitting}>
                  <Send className="mr-2 h-5 w-5" />
                  {submitting ? 'Submitting...' : 'Submit Sourcing Request'}
                </button>

                {error && (
                  <p className="text-red-600 text-sm mt-2">{error}</p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Contact Information</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-blue-700 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900">Email</div>
                      <div className="text-slate-600">info@ssourcingchina.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-700 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900">Phone</div>
                      <div className="text-slate-600">+86 755 8888 8888</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-700 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900">Office</div>
                      <div className="text-slate-600">
                        Shenzhen, Guangdong, China
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-700 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900">Business Hours</div>
                      <div className="text-slate-600">
                        Mon - Fri: 9:00 AM - 6:00 PM (CST)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-blue-50 p-6">
                <h3 className="font-semibold text-blue-900">Why Submit a Request?</h3>
                <ul className="mt-3 space-y-2 text-sm text-blue-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Free, no-obligation quote</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Expert sourcing advice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Transparent pricing</span>
                  </li>
                </ul>
              </div>

              {/* Map placeholder */}
              <div
                data-strk-bg-id="contact-map-bg"
                data-strk-bg="[contact-map-title]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="600"
                className="rounded-xl bg-slate-100 aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
