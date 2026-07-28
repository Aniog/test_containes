import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle, 
  MessageSquare, User, Building, FileText, ArrowRight
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    message: '',
    howDidYouHear: '',
  });
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
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Please tell us about your requirements';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['Room 1508, Building A', '科技大厦 Shenzhen, China', 'Postal Code: 518000'],
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+86 755 1234 5678', '+86 755 8765 4321'],
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@ssourcingchina.com', 'sales@ssourcingchina.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 - 18:00', 'Saturday: 9:00 - 12:00', 'Sunday: Closed'],
    },
  ];

  const whyContactUs = [
    'Free supplier matching service',
    'No commitment required',
    'Response within 24 hours',
    'Customized sourcing solutions',
    'Competitive pricing',
    'Professional support',
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-8">
            We've received your inquiry and will get back to you within 24 hours. 
            Our sourcing team is reviewing your requirements and will prepare a customized solution.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                productCategory: '',
                message: '',
                howDidYouHear: '',
              });
            }}
            className="btn-primary"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Ready to simplify your China sourcing? Fill out the form below and our team 
              will respond within 24 hours with customized solutions for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Send className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Sourcing Inquiry</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="input-label">
                        <User className="w-4 h-4 inline mr-1" />
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="input-label">
                        <Building className="w-4 h-4 inline mr-1" />
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                        className={`input-field ${errors.company ? 'border-red-500' : ''}`}
                      />
                      {errors.company && (
                        <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="input-label">
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="input-label">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="input-field"
                      />
                    </div>
                  </div>

                  {/* Product Category */}
                  <div>
                    <label className="input-label">
                      <FileText className="w-4 h-4 inline mr-1" />
                      Product Category
                    </label>
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select a category</option>
                      <option value="electronics">Electronics & Components</option>
                      <option value="machinery">Machinery & Equipment</option>
                      <option value="textiles">Textiles & Apparel</option>
                      <option value="home">Home & Garden</option>
                      <option value="packaging">Packaging Materials</option>
                      <option value="industrial">Industrial Parts</option>
                      <option value="consumer">Consumer Goods</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="input-label">
                      <MessageSquare className="w-4 h-4 inline mr-1" />
                      Your Requirements *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Please describe your product requirements in detail:
• What products are you looking for?
• Estimated order quantity
• Target price range
• Required certifications/standards
• Timeline requirements
• Any existing supplier information"
                      className={`input-field ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* How did you hear about us */}
                  <div>
                    <label className="input-label">How did you hear about us?</label>
                    <select
                      name="howDidYouHear"
                      value={formData.howDidYouHear}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Please select</option>
                      <option value="google">Google Search</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="referral">Referral</option>
                      <option value="trade-show">Trade Show</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full btn-primary py-4 text-lg">
                    Submit Inquiry
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our Privacy Policy. We will never 
                    share your information with third parties. Response time: 24 hours.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Why Contact Us */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Why Contact Us?
                </h3>
                <div className="space-y-4">
                  {whyContactUs.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{info.title}</h4>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-blue-100 mb-6">
                  For urgent inquiries, you can reach us directly on WhatsApp for quick assistance.
                </p>
                <a
                  href="https://wa.me/8675512345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="section-header">
              <h2>Common Questions</h2>
              <p>Quick answers before you reach out</p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">How quickly will I get a response?</h3>
                <p className="text-gray-600">We typically respond to all inquiries within 24 hours during business days. For urgent requests, WhatsApp contact is available.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What information should I include in my inquiry?</h3>
                <p className="text-gray-600">The more details you provide, the better we can help. Include product specifications, estimated quantity, target price, timeline, and any other relevant requirements.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Is there a minimum order requirement?</h3>
                <p className="text-gray-600">Minimum order quantities vary by product and supplier. We can help you find solutions for both small and large orders.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Do you charge for the initial consultation?</h3>
                <p className="text-gray-600">No, the initial consultation is completely free. We provide quotes and recommendations at no cost or obligation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
