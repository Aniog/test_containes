import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Contact = () => {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    productDetails: '',
    quantity: '',
    targetPrice: '',
    timeline: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const productCategories = [
    'Electronics',
    'Textiles & Apparel',
    'Machinery & Parts',
    'Furniture',
    'Packaging',
    'Home & Garden',
    'Jewelry & Watches',
    'Automotive',
    'Food & Beverage',
    'Other',
  ];

  const timelines = [
    'As soon as possible',
    '1-2 months',
    '2-3 months',
    '3-6 months',
    'Not urgent',
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.productCategory) newErrors.productCategory = 'Please select a category';
    if (!formData.productDetails.trim()) newErrors.productDetails = 'Product details are required';
    if (!formData.quantity) newErrors.quantity = 'Quantity is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        productCategory: '',
        productDetails: '',
        quantity: '',
        targetPrice: '',
        timeline: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E67E22] rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Get a free sourcing quote. Tell us what you need, and we'll help you find the right suppliers in China.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
                Get a Free Sourcing Quote
              </h2>
              
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#27AE60]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#27AE60]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">
                    Thank You!
                  </h3>
                  <p className="text-[#64748B] mb-6">
                    Your inquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-outline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1E3A5F] mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#1E3A5F] ${
                          errors.name ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1E3A5F] mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1E3A5F]"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1E3A5F] mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#1E3A5F] ${
                          errors.email ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1E3A5F] mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1E3A5F]"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div>
                    <label className="block text-sm font-medium text-[#1E3A5F] mb-2">
                      Product Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#1E3A5F] ${
                        errors.productCategory ? 'border-red-500' : 'border-gray-200'
                      }`}
                    >
                      <option value="">Select a category</option>
                      {productCategories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    {errors.productCategory && (
                      <p className="text-red-500 text-sm mt-1">{errors.productCategory}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1E3A5F] mb-2">
                      Product Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="productDetails"
                      value={formData.productDetails}
                      onChange={handleChange}
                      rows={3}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#1E3A5F] ${
                        errors.productDetails ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="Describe your product requirements, specifications, materials, etc."
                    />
                    {errors.productDetails && (
                      <p className="text-red-500 text-sm mt-1">{errors.productDetails}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1E3A5F] mb-2">
                        Quantity <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#1E3A5F] ${
                          errors.quantity ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="e.g., 10,000 units"
                      />
                      {errors.quantity && (
                        <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1E3A5F] mb-2">
                        Target Price
                      </label>
                      <input
                        type="text"
                        name="targetPrice"
                        value={formData.targetPrice}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1E3A5F]"
                        placeholder="e.g., $5-7 per unit"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1E3A5F] mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1E3A5F]"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1E3A5F] mb-2">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1E3A5F]"
                      placeholder="Any other requirements or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full btn-primary py-4 flex items-center justify-center disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#E67E22]/10 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-[#E67E22]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1E3A5F] mb-1">Office Address</h4>
                      <p className="text-[#64748B]">
                        Shenzhen, Guangdong, China<br />
                        Serving clients worldwide
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#E67E22]/10 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-[#E67E22]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1E3A5F] mb-1">Email</h4>
                      <a href="mailto:info@ssourcingchina.com" className="text-[#64748B] hover:text-[#E67E22]">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#E67E22]/10 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-[#E67E22]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1E3A5F] mb-1">Phone</h4>
                      <a href="tel:+8675581234567" className="text-[#64748B] hover:text-[#E67E22]">
                        +86 755 8123 4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#E67E22]/10 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-[#E67E22]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1E3A5F] mb-1">Business Hours</h4>
                      <p className="text-[#64748B]">
                        Monday - Friday: 9:00 AM - 6:00 PM (GMT+8)<br />
                        Saturday: By appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Why Work With Us?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#E67E22] mr-3" />
                    <span>12+ years of China sourcing expertise</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#E67E22] mr-3" />
                    <span>500+ verified supplier relationships</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#E67E22] mr-3" />
                    <span>Professional QC inspection team</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#E67E22] mr-3" />
                    <span>End-to-end logistics support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#E67E22] mr-3" />
                    <span>Response within 24 hours</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;