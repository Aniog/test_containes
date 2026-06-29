import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';

const productOptions = [
  'Double Folding Machine',
  'Metal Folder Machine',
  'Sheet Metal Folder',
  'Metal Folding Machine',
  'Double Folder',
  'Other / Multiple Products',
];

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
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

    setFormStatus('submitting');
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setFormStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      product: '',
      message: '',
    });

    // Reset after showing success
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@artitectmachinery.com',
      href: 'mailto:info@artitectmachinery.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '1234 Industrial Drive, Suite 500',
      href: null,
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon-Fri: 8AM-6PM (EST)',
      href: null,
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-bg-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-primary mt-4 mb-6">
            Request a Quote Today
          </h2>
          <p className="text-text-secondary text-lg">
            Ready to upgrade your fabrication capabilities? Contact our team for 
            personalized recommendations and competitive pricing on our machinery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-primary rounded-3xl p-8 h-full">
              <h3 className="text-white text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  const Content = () => (
                    <>
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="text-white/60 text-sm font-medium uppercase tracking-wide mb-1">
                          {item.label}
                        </div>
                        <div className="text-white font-medium">
                          {item.value}
                        </div>
                      </div>
                    </>
                  );

                  return item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-4 group"
                    >
                      <Content />
                    </a>
                  ) : (
                    <div key={index} className="flex items-center gap-4">
                      <Content />
                    </div>
                  );
                })}
              </div>

              {/* Decorative element */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm mb-4">
                  Follow us on social media
                </p>
                <div className="flex gap-4">
                  {['LinkedIn', 'YouTube', 'Twitter'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                    >
                      <span className="text-white text-xs font-bold">
                        {social[0]}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-primary text-2xl font-bold mb-8">Send us a message</h3>

              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                  <h4 className="text-primary text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-text-secondary">
                    Thank you for your inquiry. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-primary font-medium text-sm mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.name ? 'border-red-500' : 'border-border'
                        } focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-bg-light`}
                        placeholder="John Smith"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-primary font-medium text-sm mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email ? 'border-red-500' : 'border-border'
                        } focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-bg-light`}
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-primary font-medium text-sm mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-bg-light"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-primary font-medium text-sm mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-bg-light"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>

                  {/* Product Selection */}
                  <div>
                    <label className="block text-primary font-medium text-sm mb-2">
                      Product Interest
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-bg-light appearance-none cursor-pointer"
                    >
                      <option value="">Select a product category...</option>
                      {productOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-primary font-medium text-sm mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.message ? 'border-red-500' : 'border-border'
                      } focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-bg-light resize-none`}
                      placeholder="Tell us about your requirements, production volume, or any questions you have..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-accent hover:bg-accent-dark disabled:bg-accent/70 text-white py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-accent/30 flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
