import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const containerRef = useRef(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.observe-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
    setFormState({
      name: '',
      email: '',
      phone: '',
      company: '',
      product: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      content: 'sales@artitectmachinery.com',
      link: 'mailto:sales@artitectmachinery.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      content: '+86 21 8888 9999',
      link: 'tel:+862188889999',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      content: 'Industrial Park, Shanghai, China',
      link: null,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      content: 'Mon - Sat: 9:00 AM - 6:00 PM',
      link: null,
    },
  ];

  return (
    <section id="contact" ref={containerRef} className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="observe-animate opacity-0 inline-block px-4 py-1.5 rounded-full bg-[#E94560]/10 text-[#E94560] text-sm font-semibold tracking-wide mb-4">
            Get In Touch
          </span>
          <h2 className="observe-animate opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] tracking-tight mb-6">
            Ready to Elevate Your{' '}
            <span className="text-[#E94560]">Production?</span>
          </h2>
          <p className="observe-animate opacity-0 text-lg text-gray-600 leading-relaxed">
            Contact our team of experts for personalized consultation, competitive quotes, 
            or to schedule a facility tour. We're here to help you find the perfect solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="observe-animate opacity-0 space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-[#1A1A2E] group transition-all duration-300 cursor-pointer"
                  onClick={() => item.link && window.open(item.link, '_blank')}
                >
                  <div className="w-14 h-14 rounded-xl bg-[#E94560]/10 flex items-center justify-center text-[#E94560] group-hover:bg-[#E94560] group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 group-hover:text-gray-400 transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[#1A1A2E] group-hover:text-white font-medium transition-colors">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="observe-animate opacity-0 rounded-2xl overflow-hidden h-64 bg-gradient-to-br from-[#1A1A2E] to-[#16213E] flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="w-12 h-12 text-[#E94560] mx-auto mb-4" />
                <p className="text-white font-medium">Shanghai Industrial Park</p>
                <p className="text-gray-400 text-sm">Click to view on Google Maps</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="observe-animate opacity-0 bg-white rounded-3xl shadow-xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-[#1A1A2E] mb-6">
                Request a Quote
              </h3>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-[#4ADE80]/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#4ADE80]" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#1A1A2E] mb-3">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Thank you for your inquiry. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-3 bg-[#1A1A2E] hover:bg-[#16213E] text-white rounded-lg font-medium transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name ? 'border-red-500' : 'border-gray-200'
                        } focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all`}
                        placeholder="John Smith"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email ? 'border-red-500' : 'border-gray-200'
                        } focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all`}
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
                        placeholder="Acme Industries"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
                      Interested Product
                    </label>
                    <select
                      name="product"
                      value={formState.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select a product category</option>
                      <option value="double-folder">Double Folding Machine</option>
                      <option value="sheet-metal-folder">Sheet Metal Folder</option>
                      <option value="metal-folder-machine">Metal Folder Machine</option>
                      <option value="metal-folding-machine">Metal Folding Machine</option>
                      <option value="custom">Custom Requirements</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message ? 'border-red-500' : 'border-gray-200'
                      } focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all resize-none`}
                      placeholder="Tell us about your requirements, production volume, or any questions you have..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-[#E94560] hover:bg-[#d13a52] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
