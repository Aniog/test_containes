import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle, Shield, Truck, Search, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { submitInquiry } from '../api/inquiry';
import { toast } from 'sonner';

const Home = () => {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitInquiry(formData);
      toast.success('Inquiry submitted successfully! We will contact you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(error.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 opacity-30 z-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-9922a1"
          data-strk-bg="china factory production line global shipping"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        ></div>
        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10 w-full">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl text-slate-200 mb-10 leading-relaxed italic border-l-4 border-accent pl-4">
              "Your boots on the ground in China since 2012."
            </p>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              We help overseas businesses find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-accent text-slate-900 px-8 py-4 rounded-lg font-bold text-lg text-center hover:bg-yellow-500 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                Get a Free Sourcing Quote <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg text-center hover:bg-white/20 transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">Our End-to-End Sourcing Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide comprehensive sourcing solutions to ensure your products are manufactured to your standards and delivered on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Product Sourcing', 
                desc: 'Finding best suppliers with competitive pricing and quality.', 
                icon: Search,
                imgId: 'service-src-1'
              },
              { 
                title: 'Factory Audit', 
                desc: 'On-site verification of supplier legitimacy and production capacity.', 
                icon: Factory,
                imgId: 'service-audit-1'
              },
              { 
                title: 'Quality Inspection', 
                desc: 'Strict QC at various stages of production to ensure zero defects.', 
                icon: CheckCircle,
                imgId: 'service-qc-1'
              }
            ].map((service, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-8 hover:shadow-xl transition-shadow bg-slate-50">
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <img 
                  data-strk-img-id={service.imgId}
                  data-strk-img={`${service.title} china factory inspection`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <div className="text-4xl font-bold text-accent mb-2">10+</div>
                    <div className="text-slate-300">Years Experience</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-accent mb-2">500+</div>
                    <div className="text-slate-300">Verified Suppliers</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-accent mb-2">1.2k+</div>
                    <div className="text-slate-300">Containers Shipped</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-accent mb-2">100%</div>
                    <div className="text-slate-300">QC Inspection Rate</div>
                </div>
            </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-left">Why Overseas Buyers Trust SSourcing China</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Navigating the Chinese market can be challenging. We bridge the gap between global buyers and Chinese manufacturers, mitigating risks and ensuring a smooth supply chain.
            </p>
            <div className="space-y-4">
                <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 shrink-0" />
                    <span>No hidden commissions or kickbacks from factories.</span>
                </div>
                <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 shrink-0" />
                    <span>Comprehensive English reporting within 24 hours of inspection.</span>
                </div>
                <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 shrink-0" />
                    <span>Dedicated account manager for every project.</span>
                </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-primary mb-6">Get Your Free Quote</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name" 
                      className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none" 
                      required 
                    />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Business Email" 
                      className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none" 
                      required 
                    />
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your sourcing needs..." 
                      className="w-full border p-3 rounded-lg h-32 focus:ring-2 focus:ring-primary/20 outline-none" 
                      required
                    ></textarea>
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full bg-accent text-slate-900 font-bold py-4 rounded-lg hover:bg-yellow-500 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}
                    </button>
                </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
