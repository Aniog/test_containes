import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import Button from './components/ui/Button';
import { Check, Phone, Mail, MapPin, Award, Users, Clock, Shield } from 'lucide-react';

// Product data based on brand's core offerings
const products = [
  {
    id: 1,
    name: "Double Folding Machine DF-2000",
    description: "Our flagship double folding machine delivers unmatched precision for high-volume production. Features synchronized dual-beam folding for consistent results across long panels.",
    capacity: "200",
    specs: ["Max 2.0m Width", "3.0mm Steel", "CNC Control", "Auto Backgauge"],
  },
  {
    id: 2,
    name: "Double Folder Pro Series",
    description: "Advanced double folder engineered for versatility. Ideal for architectural panels, HVAC components, and custom fabrication requiring tight tolerances.",
    capacity: "150",
    specs: ["Max 3.2m Width", "2.5mm Steel", "Touchscreen HMI", "Programmable Angles"],
  },
  {
    id: 3,
    name: "Sheet Metal Folder SM-1600",
    description: "Precision sheet metal folder designed for workshops and mid-size operations. Combines robust construction with intuitive controls for reliable daily performance.",
    capacity: "120",
    specs: ["Max 1.6m Width", "2.0mm Steel", "Manual & Power", "Quick-Change Tooling"],
  },
  {
    id: 4,
    name: "Sheet Metal Folding Machine HD",
    description: "Heavy-duty sheet metal folding machine built for demanding industrial applications. Exceptional rigidity ensures accuracy even with thick-gauge materials.",
    capacity: "250",
    specs: ["Max 4.0m Width", "4.0mm Steel", "Hydraulic Drive", "Safety Light Curtains"],
  },
  {
    id: 5,
    name: "Metal Folder Compact",
    description: "Space-efficient metal folder perfect for smaller shops and specialized work. Delivers the same ARTITECT precision in a compact footprint.",
    capacity: "80",
    specs: ["Max 1.25m Width", "1.5mm Steel", "Foot Pedal Control", "Portable Design"],
  },
  {
    id: 6,
    name: "Metal Folder Machine Industrial",
    description: "Full-featured metal folder machine for continuous production environments. Engineered for uptime, repeatability, and minimal maintenance.",
    capacity: "180",
    specs: ["Max 2.5m Width", "3.5mm Steel", "Servo Drive", "Remote Diagnostics"],
  },
  {
    id: 7,
    name: "Metal Folding Machine Elite",
    description: "Premium metal folding machine with advanced automation. Features integrated measuring systems and recipe storage for complex multi-bend sequences.",
    capacity: "160",
    specs: ["Max 3.0m Width", "2.8mm Steel", "Full CNC", "IoT Connectivity"],
  },
];

// Gallery images with descriptive captions
const galleryItems = [
  { id: 1, caption: "Architectural Facade Production" },
  { id: 2, caption: "Heavy Gauge Industrial Folding" },
  { id: 3, caption: "Precision HVAC Component Line" },
  { id: 4, caption: "Custom Panel Fabrication" },
  { id: 5, caption: "High-Volume Roof Panel Output" },
  { id: 6, caption: "Aerospace-Grade Sheet Work" },
];

// Features data
const features = [
  {
    icon: Award,
    title: "German Engineering",
    description: "Every machine is precision-built in our German facility using only the highest-grade components and rigorous quality standards.",
  },
  {
    icon: Shield,
    title: "Lifetime Durability",
    description: "Our frames are constructed from stress-relieved steel with 25+ year service life. Many of our first machines are still in daily operation.",
  },
  {
    icon: Users,
    title: "Operator Focused",
    description: "Intuitive controls, clear interfaces, and ergonomic design mean your team can achieve mastery quickly with minimal training.",
  },
  {
    icon: Clock,
    title: "Rapid Setup",
    description: "Tool changes in under 90 seconds. Programmable backgauges and angle presets reduce setup time by up to 70%.",
  },
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle product inquiry - opens contact form with product pre-selected
  const handleInquire = (product) => {
    setSelectedProduct(product);
    setFormData(prev => ({
      ...prev,
      product: product.name,
    }));
    setIsSubmitted(false);
    setFormErrors({});
    
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.company.trim()) {
      errors.company = 'Company is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Please tell us about your requirements';
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success message shown
    setTimeout(() => {
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: '',
        message: '',
      });
      setSelectedProduct(null);
      setFormErrors({});
    }, 3000);
  };

  const clearProductSelection = () => {
    setSelectedProduct(null);
    setFormData(prev => ({
      ...prev,
      product: '',
    }));
  };

  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="pt-20 pb-16 md:pt-24 md:pb-20 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center pt-12 pb-8">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm tracking-[3px] mb-6">
              EST. 1987 • GERMANY
            </div>
            
            <h1 className="text-white mb-6 leading-[1.05]">
              Precision Sheet Metal<br />Folding Machines
            </h1>
            
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              Engineered for fabricators who demand accuracy, reliability, and lasting performance. 
              Every ARTITECT machine is built to exceed expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#products" variant="primary" className="text-base px-8">
                Explore Our Machines
              </Button>
              <Button href="#contact" variant="outline" className="text-base px-8">
                Request a Quote
              </Button>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-white/60">
              <div>Trusted by 1,200+ fabricators</div>
              <div>37 countries served</div>
              <div>99.4% on-time delivery</div>
            </div>
          </div>
        </div>
        
        {/* Subtle decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Crafted for Those Who Build</h2>
            <p className="section-subtitle">
              For nearly four decades, ARTITECT MACHINERY has been the quiet force behind some of the world's most demanding metal fabrication projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="mb-4">Our Philosophy</h3>
              <p className="text-[15px] leading-relaxed">
                We believe that exceptional machinery should feel invisible in the best way — 
                reliable enough that your team forgets it's there, precise enough that every bend 
                meets specification the first time. Our machines are tools, not obstacles.
              </p>
            </div>
            <div className="card">
              <h3 className="mb-4">The ARTITECT Standard</h3>
              <p className="text-[15px] leading-relaxed">
                Every machine that leaves our facility undergoes 47 individual quality checks. 
                We test not just for function, but for the subtle details — the feel of the controls, 
                the sound of the drive system, the consistency of the finished edge.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm uppercase tracking-[2px] text-[#64748B] mb-2">OUR PROMISE</p>
            <p className="text-lg max-w-2xl mx-auto">
              If your ARTITECT machine ever fails to perform to specification within the first 10 years, 
              we will repair or replace it at no cost. That is our commitment to you.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="section bg-[#F1F5F9]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Our Folding Machines</h2>
            <p className="section-subtitle">
              From compact workshop models to heavy industrial systems, every ARTITECT machine 
              shares the same DNA: uncompromising build quality and intuitive operation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onInquire={handleInquire} 
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-[#64748B] mb-4">
              Need a custom configuration or capacity outside our standard range?
            </p>
            <Button href="#contact" variant="secondary">
              Speak With Our Engineering Team
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Why Fabricators Choose ARTITECT</h2>
            <p className="section-subtitle">
              Beyond the specifications, it's the details that matter. Here's what sets our machines apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="feature-item card">
                  <div className="feature-icon">
                    <Icon size={24} />
                  </div>
                  <div className="feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-[#0F172A] rounded-lg p-8 md:p-10 text-white">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-1">47</div>
                  <div className="text-sm uppercase tracking-widest text-white/60">Quality Checks</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-1">25+</div>
                  <div className="text-sm uppercase tracking-widest text-white/60">Year Service Life</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-1">98.7%</div>
                  <div className="text-sm uppercase tracking-widest text-white/60">First-Pass Yield</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="section bg-[#F1F5F9]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Machines in Action</h2>
            <p className="section-subtitle">
              Real production environments. Real results. See how fabricators around the world 
              rely on ARTITECT equipment every day.
            </p>
          </div>

          <div className="gallery-grid max-w-6xl mx-auto">
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <div 
                  style={{
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(135deg, #1E2937 0%, #0F172A 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.15)',
                    fontSize: '4rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {item.id}
                </div>
                <div className="gallery-overlay">
                  <span>{item.caption}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[#64748B] mt-8">
            All images represent actual customer installations. Your results may vary based on material and setup.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="section-title">Let's Build Something Together</h2>
            <p className="section-subtitle">
              Tell us about your project. Our applications engineers will respond within one business day 
              with recommendations and pricing.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">
                  <Check size={36} />
                </div>
                <h3 className="text-2xl mb-3">Thank You</h3>
                <p className="text-[#64748B]">
                  Your inquiry has been received. A member of our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {selectedProduct && (
                  <div className="mb-6 p-4 bg-[#F1F5F9] rounded-md flex items-start justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-[#64748B] mb-1">INQUIRING ABOUT</div>
                      <div className="font-medium">{selectedProduct.name}</div>
                    </div>
                    <button 
                      type="button" 
                      onClick={clearProductSelection}
                      className="text-sm text-[#64748B] hover:text-[#0F172A]"
                    >
                      Clear
                    </button>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="John Smith"
                    />
                    {formErrors.name && <p className="form-error">{formErrors.name}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="company" className="form-label">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Your Company Ltd."
                    />
                    {formErrors.company && <p className="form-error">{formErrors.company}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="you@company.com"
                    />
                    {formErrors.email && <p className="form-error">{formErrors.email}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="+1 (555) 123-4567"
                    />
                    {formErrors.phone && <p className="form-error">{formErrors.phone}</p>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="product" className="form-label">Product of Interest (Optional)</label>
                  <input
                    type="text"
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g., Double Folding Machine DF-2000"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Tell Us About Your Project</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Material types, typical thicknesses, production volume, or any specific requirements..."
                  />
                  {formErrors.message && <p className="form-error">{formErrors.message}</p>}
                </div>

                <div className="mt-8">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full md:w-auto px-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND INQUIRY'}
                  </Button>
                  <p className="text-xs text-[#64748B] mt-4">
                    We typically respond within 4 business hours. All inquiries are confidential.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-16 pt-12 border-t border-[#E2E8F0] max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center mb-4">
                  <Phone className="text-[#B8860B]" size={22} />
                </div>
                <div className="font-medium mb-1">Call Us</div>
                <a href="tel:+493012345678" className="text-[#64748B] hover:text-[#B8860B]">
                  +49 30 123 456 78
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center mb-4">
                  <Mail className="text-[#B8860B]" size={22} />
                </div>
                <div className="font-medium mb-1">Email</div>
                <a href="mailto:sales@artitect-machinery.com" className="text-[#64748B] hover:text-[#B8860B]">
                  sales@artitect-machinery.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center mb-4">
                  <MapPin className="text-[#B8860B]" size={22} />
                </div>
                <div className="font-medium mb-1">Headquarters</div>
                <div className="text-[#64748B]">
                  Berlin, Germany
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
