import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import FeatureCard from './components/FeatureCard';
import { 
  Settings, 
  Award, 
  Shield, 
  Clock, 
  Users, 
  Wrench,
  Layers,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const products = [
    {
      title: "Double Folding Machine",
      description: "Advanced dual-action folding system designed for high-volume production with exceptional precision and repeatability.",
      specs: ["Dual folding heads", "Up to 4mm thickness", "3200mm working length", "CNC control system"],
      icon: Layers
    },
    {
      title: "Double Folder",
      description: "Compact yet powerful double folder ideal for workshops requiring versatile bending capabilities in limited space.",
      specs: ["Space-efficient design", "Manual & semi-auto modes", "Multiple bend angles", "Quick setup time"],
      icon: Settings
    },
    {
      title: "Sheet Metal Folder",
      description: "Professional-grade sheet metal folder engineered for clean, accurate bends across a wide range of materials.",
      specs: ["Mild & stainless steel", "Aluminum compatible", "Adjustable clamping", "Ergonomic operation"],
      icon: Wrench
    },
    {
      title: "Sheet Metal Folding Machine",
      description: "Heavy-duty folding machine built for demanding industrial applications with superior build quality.",
      specs: ["Industrial construction", "High tonnage capacity", "Safety interlocks", "Long service life"],
      icon: Zap
    },
    {
      title: "Metal Folder",
      description: "Versatile metal folder offering reliable performance for general fabrication and custom metalwork projects.",
      specs: ["All-metal construction", "Easy angle adjustment", "Portable options", "Low maintenance"],
      icon: Settings
    },
    {
      title: "Metal Folder Machine",
      description: "Precision metal folder machine featuring advanced controls for consistent, high-quality results every time.",
      specs: ["Digital angle readout", "Programmable stops", "Foot pedal operation", "Tooling flexibility"],
      icon: Layers
    },
    {
      title: "Metal Folding Machine",
      description: "Robust metal folding machine designed to handle thick materials while maintaining tight tolerances.",
      specs: ["Heavy plate capacity", "Hydraulic assist", "Extended warranty", "Custom configurations"],
      icon: Wrench
    }
  ];

  const features = [
    {
      title: "Precision Engineering",
      description: "Every machine is built with micron-level accuracy, ensuring consistent bends and professional results across all production runs.",
      icon: Award
    },
    {
      title: "Built to Last",
      description: "Heavy-duty steel frames and premium components deliver decades of reliable service with minimal maintenance requirements.",
      icon: Shield
    },
    {
      title: "User-Friendly Controls",
      description: "Intuitive interfaces and ergonomic designs mean your team can operate equipment efficiently with minimal training.",
      icon: Users
    },
    {
      title: "Fast Production",
      description: "Optimized workflows and quick-change tooling reduce setup time and increase throughput for higher productivity.",
      icon: Clock
    }
  ];

  const whyUs = [
    "Over 25 years of industry expertise in metal fabrication equipment",
    "Machines installed in 40+ countries worldwide",
    "Comprehensive training and technical support included",
    "Full spare parts availability with rapid delivery",
    "Custom engineering solutions for unique requirements",
    "Competitive pricing without compromising on quality"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white text-[#0A1628]">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="pt-20 bg-[#0A1628] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm tracking-widest mb-6">
              EST. 1998
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] mb-6">
              Precision folding.<br />Engineered for excellence.
            </h1>
            <p className="text-xl text-white/70 max-w-xl mb-10">
              World-class sheet metal folding machines trusted by fabricators who demand accuracy, reliability, and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A46E] text-[#0A1628] font-medium rounded hover:bg-[#d4b37d] transition-colors"
              >
                Explore Products <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium rounded hover:bg-white/5 transition-colors"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap gap-x-10 gap-y-2 text-sm text-white/50">
            <span>Trusted by leading fabricators</span>
            <span>ISO 9001:2015 Certified</span>
            <span>Global Service Network</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-10 items-center">
          <div className="md:col-span-5">
            <div className="text-[#C5A46E] text-sm tracking-[3px] font-medium mb-3">OUR STORY</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tight">
              Craftsmanship meets modern engineering.
            </h2>
          </div>
          <div className="md:col-span-7 text-lg text-gray-600 leading-relaxed">
            <p className="mb-6">
              For over 25 years, Artitect Machinery has been at the forefront of sheet metal fabrication technology. 
              We design and manufacture folding equipment that combines German engineering precision with practical, 
              user-centered design.
            </p>
            <p>
              Every machine we build reflects our commitment to helping fabricators work faster, more accurately, 
              and with greater confidence. From small workshops to large production facilities, our equipment 
              delivers results that professionals can rely on.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-[#F8F7F4] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-[#C5A46E] text-sm tracking-[3px] font-medium mb-3">OUR RANGE</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">
              Folding machines for every need
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From compact workshop solutions to heavy-duty industrial systems, we offer a complete range of precision folding equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard 
                key={index}
                title={product.title}
                description={product.description}
                specs={product.specs}
                icon={product.icon}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">Need a custom solution?</p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="inline-flex items-center gap-2 text-[#0A1628] font-medium hover:text-[#C5A46E] transition-colors"
            >
              Talk to our engineering team <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-12">
          <div className="md:col-span-5">
            <div className="sticky top-24">
              <div className="text-[#C5A46E] text-sm tracking-[3px] font-medium mb-3">WHY ARTITECT</div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tight mb-6">
                Built for professionals who value precision.
              </h2>
              <p className="text-gray-600 text-lg">
                Every detail is considered. Every component is chosen for performance and longevity.
              </p>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0A1628] text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-[#C5A46E] text-sm tracking-[3px] font-medium mb-3">THE ARTITECT DIFFERENCE</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">Why fabricators choose us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto">
            {whyUs.map((reason, index) => (
              <div key={index} className="flex items-start gap-4 py-3">
                <CheckCircle className="w-5 h-5 text-[#C5A46E] flex-shrink-0 mt-0.5" />
                <span className="text-white/90">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 md:py-24">
        <div className="text-center mb-12">
          <div className="text-[#C5A46E] text-sm tracking-[3px] font-medium mb-3">LET'S TALK</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">Ready to find the right machine?</h2>
          <p className="text-gray-600 text-lg">Tell us about your project and we'll help you select the perfect solution.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A1628] transition-colors"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A1628] transition-colors"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A1628] transition-colors"
                placeholder="Your Company"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A1628] transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">Product of Interest</label>
            <select
              id="product"
              name="product"
              value={formData.product}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A1628] transition-colors bg-white"
            >
              <option value="">Select a product...</option>
              {products.map((p, i) => (
                <option key={i} value={p.title}>{p.title}</option>
              ))}
              <option value="Custom Solution">Custom Solution</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A1628] transition-colors resize-y"
              placeholder="Tell us about your application, material types, thickness, production volume, or any specific requirements..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-10 py-4 bg-[#0A1628] text-white font-medium rounded-lg hover:bg-[#1a2a42] transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
            {!isSubmitting && <ArrowRight size={18} />}
          </button>

          {submitStatus === 'success' && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm flex items-start gap-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Thank you! Your inquiry has been received. A member of our team will contact you within 24 hours.</span>
            </div>
          )}
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default App;
