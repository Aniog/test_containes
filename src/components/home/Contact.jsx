import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    interest: 'general',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (values) => {
    if (!values.name.trim()) return 'Name is required';
    if (!values.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please provide a valid email address';
    if (!values.message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const validationError = validate(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus('submitting');

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        interest: 'general',
      });
    } catch (err) {
      console.error(err);
      setError(err.message || 'Submission failed. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <span className="inline-block text-[#e85d04] font-semibold text-sm tracking-wider uppercase mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2744] mb-6">
              Let's Discuss Your Project
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Whether you need a standard folding machine or a custom-engineered solution, 
              our team is ready to help. Reach out for a consultation or quote.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#e85d04]/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#e85d04]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2744] mb-1">Visit Our Facility</h4>
                  <p className="text-gray-600">
                    123 Industrial Park Drive<br />
                    Manufacturing District, ST 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#e85d04]/10 rounded-lg">
                  <Phone className="w-6 h-6 text-[#e85d04]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2744] mb-1">Call Us</h4>
                  <a href="tel:+15551234567" className="text-gray-600 hover:text-[#e85d04] transition-colors">
                    +1 (555) 123-4567
                  </a>
                  <p className="text-sm text-gray-500">Mon-Fri, 8am-6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#e85d04]/10 rounded-lg">
                  <Mail className="w-6 h-6 text-[#e85d04]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2744] mb-1">Email Us</h4>
                  <a href="mailto:info@artitectmachinery.com" className="text-gray-600 hover:text-[#e85d04] transition-colors">
                    info@artitectmachinery.com
                  </a>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold text-[#1a2744] mb-6">Send Us a Message</h3>

            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-[#1a2744] mb-2">Message Sent!</h4>
                <p className="text-gray-600">
                  Thank you for contacting us. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3b5998] focus:ring-2 focus:ring-[#3b5998]/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3b5998] focus:ring-2 focus:ring-[#3b5998]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3b5998] focus:ring-2 focus:ring-[#3b5998]/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3b5998] focus:ring-2 focus:ring-[#3b5998]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1.5">
                    I'm Interested In
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3b5998] focus:ring-2 focus:ring-[#3b5998]/20 outline-none transition-all bg-white"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="double-folding-machine">Double Folding Machine</option>
                    <option value="sheet-metal-folder">Sheet Metal Folder</option>
                    <option value="metal-folding-machine">Metal Folding Machine</option>
                    <option value="custom-solution">Custom Solution</option>
                    <option value="parts-service">Parts & Service</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3b5998] focus:ring-2 focus:ring-[#3b5998]/20 outline-none transition-all resize-none"
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-[#e85d04] hover:bg-[#d35400] disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
