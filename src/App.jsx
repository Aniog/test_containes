import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Award, Shield, Clock, Users, ChevronRight } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from './config.jsx';
import './App.css';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

// Product data - all variations of folding machines
const products = [
  {
    id: 1,
    name: "Double Folding Machine",
    description: "Our flagship precision double folding machine delivers unmatched accuracy for high-volume production environments. Engineered for continuous operation.",
    specs: ["Up to 4mm steel", "3200mm working length", "±0.5° angle precision", "CNC control system"],
    category: "Premium"
  },
  {
    id: 2,
    name: "Double Folder",
    description: "Versatile double folder designed for workshops requiring flexibility. Combines power and precision in a compact footprint.",
    specs: ["Up to 3mm steel", "2500mm working length", "Manual & semi-auto modes", "Quick tool change"],
    category: "Standard"
  },
  {
    id: 3,
    name: "Sheet Metal Folder",
    description: "Professional-grade sheet metal folder built for fabricators who demand reliability. Excellent for architectural and industrial applications.",
    specs: ["Up to 2.5mm aluminum", "3000mm working length", "Heavy-duty frame", "Adjustable back gauge"],
    category: "Standard"
  },
  {
    id: 4,
    name: "Sheet Metal Folding Machine",
    description: "Advanced sheet metal folding machine with intelligent controls. Perfect for complex geometries and tight tolerances.",
    specs: ["Up to 3mm steel", "4000mm working length", "Touchscreen interface", "Programmable sequences"],
    category: "Premium"
  },
  {
    id: 5,
    name: "Metal Folder",
    description: "Robust metal folder engineered for demanding daily use. Delivers consistent results across a wide range of materials and thicknesses.",
    specs: ["Up to 2mm steel", "2000mm working length", "Simple operation", "Low maintenance"],
    category: "Compact"
  },
  {
    id: 6,
    name: "Metal Folder Machine",
    description: "Compact yet powerful metal folder machine ideal for smaller workshops and specialized fabrication tasks.",
    specs: ["Up to 1.5mm steel", "1500mm working length", "Portable design", "Easy setup"],
    category: "Compact"
  },
  {
    id: 7,
    name: "Metal Folding Machine",
    description: "Heavy-duty metal folding machine built for industrial environments. Exceptional build quality ensures decades of reliable service.",
    specs: ["Up to 6mm steel", "5000mm working length", "Hydraulic drive", "Safety systems"],
    category: "Industrial"
  }
];

const features = [
  {
    icon: Award,
    title: "Precision Engineering",
    description: "Every machine is calibrated to deliver industry-leading accuracy with tolerances as tight as ±0.5 degrees."
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Constructed from premium-grade materials with rigorous quality testing. Our machines routinely exceed 20 years of service."
  },
  {
    icon: Clock,
    title: "Fast & Efficient",
    description: "Optimized workflows and intelligent controls reduce setup time and increase throughput without sacrificing quality."
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Our technical team provides comprehensive training, responsive service, and genuine spare parts for the life of your machine."
  }
];

const galleryItems = [
  { id: 1, label: "Precision Double Folder in Production" },
  { id: 2, label: "Heavy-Duty Industrial Installation" },
  { id: 3, label: "Architectural Panel Fabrication" },
  { id: 4, label: "Custom Metalwork Workshop" },
  { id: 5, label: "High-Volume Manufacturing Line" },
  { id: 6, label: "Specialized Aerospace Components" }
];

const productOptions = [
  "Double Folding Machine",
  "Sheet Metal Folder",
  "Heavy Duty Metal Folder",
  "Compact Metal Folding Machine",
  "Automated Double Folder",
  "General Inquiry"
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productInterest: 'General Inquiry',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
  const [formError, setFormError] = useState('');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormStatus('submitting');

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill in all required fields.');
      setFormStatus('error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address.');
      setFormStatus('error');
      return;
    }

    try {
      const { data: response, error } = await client
        .from('ContactInquiry')
        .insert({
          data: {
            name: formData.name.trim(),
            email: formData.email.trim(),
            company: formData.company.trim(),
            phone: formData.phone.trim(),
            productInterest: formData.productInterest,
            message: formData.message.trim()
          }
        });

      if (error || response?.success === false) {
        throw new Error(response?.errors?.join(', ') || error?.message || 'Failed to submit inquiry');
      }

      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        productInterest: 'General Inquiry',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);

    } catch (err) {
      console.error('Form submission error:', err);
      setFormError(err.message || 'Something went wrong. Please try again or contact us directly.');
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="nav-inner">
            <div className="nav-logo">ARTITECT MACHINERY</div>
            
            {/* Desktop Navigation */}
            <div className="nav-links">
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('products')} className="nav-link">Products</button>
              <button onClick={() => scrollToSection('features')} className="nav-link">Why Us</button>
              <button onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="btn btn-primary nav-cta"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 bg-white">
              <div className="flex flex-col gap-3">
                <button onClick={() => scrollToSection('about')} className="nav-link text-left py-1">About</button>
                <button onClick={() => scrollToSection('products')} className="nav-link text-left py-1">Products</button>
                <button onClick={() => scrollToSection('features')} className="nav-link text-left py-1">Why Us</button>
                <button onClick={() => scrollToSection('gallery')} className="nav-link text-left py-1">Gallery</button>
                <button onClick={() => scrollToSection('contact')} className="nav-link text-left py-1">Contact</button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="btn btn-primary w-full mt-2"
                >
                  Get Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Est. 1987 • Precision Since Day One</div>
            <h1>Engineered for<br />Precision. Built for Life.</h1>
            <p>
              For nearly four decades, ARTITECT MACHINERY has crafted the world's most reliable 
              metal folding equipment. Every machine embodies our commitment to excellence.
            </p>
            <div className="hero-actions">
              <button 
                onClick={() => scrollToSection('products')} 
                className="btn btn-accent btn-lg"
              >
                Explore Our Machines
                <ChevronRight size={18} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="btn btn-secondary btn-lg"
                style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-bronze text-sm font-semibold tracking-[3px] mb-3">OUR HERITAGE</div>
            <h2 className="mb-6">Craftsmanship Meets Innovation</h2>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              Founded in 1987, ARTITECT MACHINERY began with a simple mission: build folding machines 
              that professionals can trust for a lifetime. Today, our equipment powers fabrication shops, 
              aerospace manufacturers, and architectural firms across five continents.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-semibold text-[#0a1628] mb-1">37</div>
                <div className="text-sm text-[#6b7280] tracking-wide">YEARS OF EXCELLENCE</div>
              </div>
              <div>
                <div className="text-4xl font-semibold text-[#0a1628] mb-1">4,200+</div>
                <div className="text-sm text-[#6b7280] tracking-wide">MACHINES INSTALLED</div>
              </div>
              <div>
                <div className="text-4xl font-semibold text-[#0a1628] mb-1">62</div>
                <div className="text-sm text-[#6b7280] tracking-wide">COUNTRIES SERVED</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section">
        <div className="container">
          <div className="text-center mb-12">
            <div className="text-bronze text-sm font-semibold tracking-[3px] mb-3">OUR RANGE</div>
            <h2 className="mb-4">Precision Folding Machines</h2>
            <p className="max-w-2xl mx-auto text-[#475569]">
              From compact workshop solutions to heavy industrial systems, every ARTITECT machine 
              is designed with the same uncompromising standards of quality and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img 
                    src={`https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop&sig=${product.id}`}
                    alt={product.name}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop';
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="spec-tag bg-white/90 text-[#0a1628] font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-desc">{product.description}</p>
                  <div className="product-specs">
                    {product.specs.map((spec, index) => (
                      <span key={index} className="spec-tag">{spec}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn btn-primary"
            >
              Discuss Your Requirements
            </button>
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section id="features" className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="text-bronze text-sm font-semibold tracking-[3px] mb-3">THE ARTITECT DIFFERENCE</div>
            <h2 className="mb-4">Why Leading Fabricators Choose Us</h2>
            <p className="max-w-2xl mx-auto text-[#475569]">
              It's not just about bending metal. It's about delivering consistent results, 
              day after day, year after year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="feature">
                  <div className="feature-icon">
                    <Icon size={26} />
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section">
        <div className="container">
          <div className="text-center mb-12">
            <div className="text-bronze text-sm font-semibold tracking-[3px] mb-3">IN THE FIELD</div>
            <h2 className="mb-4">Machines at Work</h2>
            <p className="max-w-2xl mx-auto text-[#475569]">
              Real installations. Real results. See how fabricators around the world rely on ARTITECT equipment.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <img 
                  src={`https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=500&fit=crop&sig=${item.id + 10}`}
                  alt={item.label}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=500&fit=crop';
                  }}
                />
                <div className="gallery-overlay">
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="text-bronze text-sm font-semibold tracking-[3px] mb-3">LET'S TALK</div>
            <h2 className="mb-4">Start Your Project</h2>
            <p className="max-w-xl mx-auto text-[#475569]">
              Tell us about your requirements. Our team will respond within one business day 
              with tailored recommendations and pricing.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h3>Ready to elevate your fabrication capabilities?</h3>
              <p>
                Whether you're expanding production, replacing aging equipment, or exploring 
                new capabilities, we're here to help you find the right solution.
              </p>

              <div className="contact-details mt-8">
                <div className="contact-detail">
                  <Phone size={18} />
                  <span>+1 (800) 555-ARTI</span>
                </div>
                <div className="contact-detail">
                  <Mail size={18} />
                  <span>sales@artitectmachinery.com</span>
                </div>
                <div className="contact-detail">
                  <MapPin size={18} />
                  <span>1840 Industrial Parkway, Cleveland, OH 44135</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="text-sm text-[#6b7280] leading-relaxed">
                  <strong className="text-[#0a1628]">Global Service Network</strong><br />
                  Factory-trained technicians available in 28 countries. 
                  Genuine parts shipped within 24 hours for most models.
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="productInterest">Product of Interest</label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleInputChange}
                  >
                    {productOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell us about your project *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your application, material types, production volume, or any specific requirements..."
                    required
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="success-message mb-4">
                    <Award size={18} />
                    <span>Thank you. Your inquiry has been received. We'll contact you shortly.</span>
                  </div>
                )}

                {formStatus === 'error' && formError && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded text-sm">
                    {formError}
                  </div>
                )}

                <div className="form-actions">
                  <button 
                    type="submit" 
                    className="btn btn-accent w-full"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? 'Sending Inquiry...' : 'Send Inquiry'}
                  </button>
                  <p className="text-center text-xs text-[#6b7280] mt-3">
                    We typically respond within 24 hours on business days.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="footer-logo">ARTITECT MACHINERY</div>
              <div className="mt-1 text-xs">Precision Metal Folding Equipment Since 1987</div>
            </div>
            
            <div className="footer-links">
              <button onClick={() => scrollToSection('about')}>About</button>
              <button onClick={() => scrollToSection('products')}>Products</button>
              <button onClick={() => scrollToSection('features')}>Why Us</button>
              <button onClick={() => scrollToSection('contact')}>Contact</button>
            </div>

            <div className="text-xs text-right">
              © {new Date().getFullYear()} ARTITECT MACHINERY<br />
              All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
