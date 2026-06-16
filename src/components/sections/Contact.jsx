import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: '',
        message: '',
      });
      
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@artitectmachinery.com',
      link: 'mailto:info@artitectmachinery.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '1234 Industrial Park Drive, Manufacturing City, MC 56789',
      link: null,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 8:00 AM - 6:00 PM',
      link: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-[#1a2744]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="accent-line" style={{ backgroundColor: '#d4a574' }} />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Ready to upgrade your metalworking capabilities? Contact our team for expert consultation and competitive pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-display font-semibold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#d4a574]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-white/70 hover:text-[#d4a574] transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-white/70">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Quote */}
            <div className="mt-12 p-6 bg-white/5 rounded-xl border-l-4 border-[#d4a574]">
              <p className="text-white/80 italic mb-4">
                "Our team is ready to help you find the perfect metal folding solution for your specific requirements."
              </p>
              <p className="text-[#d4a574] font-semibold">— ARTITECT Machinery Team</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-display font-semibold text-[#1a2744] mb-6">
              Request a Quote
            </h3>
            
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                Thank you for your inquiry! Our team will contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#2d3748] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#e8e6e3] focus:border-[#d4a574] focus:ring-2 focus:ring-[#d4a574]/20 outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2d3748] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#e8e6e3] focus:border-[#d4a574] focus:ring-2 focus:ring-[#d4a574]/20 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#2d3748] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#e8e6e3] focus:border-[#d4a574] focus:ring-2 focus:ring-[#d4a574]/20 outline-none transition-all"
                    placeholder="Your Company Ltd."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2d3748] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#e8e6e3] focus:border-[#d4a574] focus:ring-2 focus:ring-[#d4a574]/20 outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2d3748] mb-2">
                  Interested Product
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#e8e6e3] focus:border-[#d4a574] focus:ring-2 focus:ring-[#d4a574]/20 outline-none transition-all bg-white"
                >
                  <option value="">Select a product category</option>
                  <option value="double-folder">Double Folder Machine</option>
                  <option value="sheet-metal-folder">Sheet Metal Folder</option>
                  <option value="heavy-duty">Heavy Duty Metal Folder</option>
                  <option value="cnc">CNC Metal Folding Machine</option>
                  <option value="portable">Portable Sheet Metal Folder</option>
                  <option value="other">Other / Custom Requirements</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2d3748] mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#e8e6e3] focus:border-[#d4a574] focus:ring-2 focus:ring-[#d4a574]/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your requirements, production volume, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Inquiry
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
