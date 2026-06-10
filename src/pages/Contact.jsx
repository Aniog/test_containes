import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  User,
  Building2,
  FileText,
  MessageSquare,
  Globe,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productCategory: '',
    quantity: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      country: '',
      productCategory: '',
      quantity: '',
      budget: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'info@ssourcingchina.com',
      link: 'mailto:info@ssourcingchina.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+86 138 0000 0000',
      link: 'tel:+8613800000000',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: 'Room 1208, Trade Center, Yiwu, Zhejiang, China',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      detail: 'Mon - Fri: 9:00 AM - 6:00 PM (China Time)',
      link: '#',
    },
  ];

  const productCategories = [
    'Electronics',
    'Home & Garden',
    'Apparel & Textiles',
    'Auto Parts',
    'Industrial Equipment',
    'Gifts & Promotional',
    'Toys & Hobbies',
    'Health & Beauty',
    'Sports & Outdoors',
    'Jewelry & Accessories',
    'Packaging Materials',
    'Office Supplies',
    'Other',
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Tell us about your sourcing needs, and our team will get back to you within 24 hours with a customized plan and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#inquiry-form">Fill Out the Form</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:info@ssourcingchina.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us Directly
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-white border-b border-slate-200">
        <div className="container-custom py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group flex items-start p-4 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 mr-4 flex-shrink-0">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.detail}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="section bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Start Your Sourcing Inquiry</h2>
              <p className="section-subtitle mb-8">
                Fill out the form with as much detail as possible. This helps us provide you with the most accurate quote and recommendations.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                  <p className="text-slate-600 mb-6">
                    Your inquiry has been received. Our team will review your requirements and get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>Submit Another Inquiry</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="ABC Trading Co."
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-2">
                        Country *
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="United States"
                      />
                    </div>
                    <div>
                      <label htmlFor="productCategory" className="block text-sm font-medium text-slate-700 mb-2">
                        Product Category *
                      </label>
                      <select
                        id="productCategory"
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a category</option>
                        {productCategories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-2">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., 1000 units"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                        Target Budget (USD)
                      </label>
                      <input
                        type="text"
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., $5,000 - $10,000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please describe your product requirements, quality standards, target price, timeline, and any other relevant details..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Submitting...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Submit Inquiry
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    By submitting this form, you agree to our Privacy Policy. We'll never share your information with third parties.
                  </p>
                </form>
              )}
            </div>

            <div>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 sticky top-24">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">What Happens Next?</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-sm mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Review (24 hours)</h4>
                      <p className="text-sm text-slate-600">Our team reviews your inquiry and confirms we understand your requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-sm mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Consultation</h4>
                      <p className="text-sm text-slate-600">We schedule a call to discuss your project in detail and answer any questions.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-sm mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Proposal</h4>
                      <p className="text-sm text-slate-600">We provide a detailed proposal including supplier options, timeline, and pricing.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-sm mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Get Started</h4>
                      <p className="text-sm text-slate-600">Once approved, we begin the sourcing process immediately.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-4">Why Choose Us?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      No upfront fees or obligations
                    </li>
                    <li className="flex items-start text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Free initial consultation
                    </li>
                    <li className="flex items-start text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Transparent pricing with no hidden costs
                    </li>
                    <li className="flex items-start text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      English-speaking support team
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white">
        <div className="container-custom py-16">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Location</h2>
            <p className="section-subtitle mx-auto">
              Based in Yiwu, China's international trade hub, we have direct access to thousands of manufacturers.
            </p>
          </div>
          <div className="bg-slate-100 rounded-xl overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 font-medium">Yiwu International Trade City</p>
              <p className="text-sm text-slate-500">Zhejiang Province, China</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
