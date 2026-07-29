import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Search, 
  ShieldCheck, 
  Truck, 
  BarChart3, 
  Zap, 
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Star
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ContactForm from '@/components/home/ContactForm';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const stats = [
    { label: 'Reliable Suppliers', value: '1,000+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Years Experience', value: '12+' },
    { label: 'Orders Shipped', value: '5,000+' },
  ];

  const services = [
    {
      title: 'Product Sourcing',
      desc: 'Find the best manufacturers for your specific product needs with competitive pricing.',
      icon: Search,
      id: 'svc-sourcing'
    },
    {
      title: 'Supplier Audit',
      desc: 'Verification of factory legitimacy, production capacity, and social compliance.',
      icon: ShieldCheck,
      id: 'svc-audit'
    },
    {
      title: 'Quality Inspection',
      desc: 'Pre-shipment, during production, and raw material inspections to ensure quality.',
      icon: CheckCircle,
      id: 'svc-qc'
    },
    {
      title: 'Logistics & Shipping',
      desc: 'Consolidation, freight forwarding, and customs clearance support to your doorstep.',
      icon: Truck,
      id: 'svc-shipping'
    }
  ];

  const productCategories = [
    { title: 'Consumer Electronics', id: 'cat-electronics', imgId: 'prod-electronics-82a1' },
    { title: 'Home & Kitchen', id: 'cat-home', imgId: 'prod-home-39b2' },
    { title: 'Fashion & Accessories', id: 'cat-fashion', imgId: 'prod-fashion-71c3' },
    { title: 'Industrial Tools', id: 'cat-industrial', imgId: 'prod-industrial-44d4' },
    { title: 'Pet Supplies', id: 'cat-pet', imgId: 'prod-pet-55e5' },
    { title: 'Sports & Outdoors', id: 'cat-sports', imgId: 'prod-sports-66f6' }
  ];

  return (
    <div ref={containerRef} className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-slate-900"
          data-strk-bg-id="hero-bg-99f2a"
          data-strk-bg="[hero-title] [hero-subtitle] China factory production line warehouse"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
        </div>
        
        <div className="max-width-container px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl mb-8 text-slate-100 opacity-90 leading-relaxed">
              We help you source reliable suppliers, verify factories, inspect quality, and manage logistics from China with 100% transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-secondary text-white text-center px-8 py-4 rounded-lg text-lg font-bold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-bold transition-all text-center">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-8 border-b border-slate-100 shadow-sm">
        <div className="max-width-container px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-extrabold text-primary mb-1">{stat.value}</div>
                <div className="text-slate-500 font-medium text-sm lg:text-base uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Brief */}
      <section className="section-padding bg-slate-50">
        <div className="max-width-container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="section-title">End-to-End Sourcing Services</h2>
            <p className="section-subtitle">We manage your entire supply chain in China, allowing you to focus on growing your brand.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((svc) => (
              <div key={svc.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svc.icon className="text-primary group-hover:text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{svc.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{svc.desc}</p>
                <Link to="/services" className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ChevronRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section-padding bg-white">
        <div className="max-width-container px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <h2 id="products-title" className="section-title text-left mb-4">Products We Source</h2>
              <p className="text-slate-600 text-lg">We have extensive experience across a wide range of industries and product categories.</p>
            </div>
            <Link to="/products" className="mt-6 md:mt-0 font-bold text-primary flex items-center gap-2">
              View All Products <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <div key={cat.id} className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
                <div 
                  className="absolute inset-0 bg-slate-200"
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.id}] [products-title] China manufacturing product`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-primary/80 transition-colors"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 id={cat.id} className="text-white text-xl font-bold">{cat.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points / Why Choose Us */}
      <section className="section-padding bg-primary text-white overflow-hidden">
        <div className="max-width-container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="why-title" className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">Why Smart Sourcing China?</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Efficiency Driven</h4>
                    <p className="text-slate-300">We reduce sourcing time by 50% through our established network of 10,000+ verified suppliers.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Risk Mitigation</h4>
                    <p className="text-slate-300">Rigorous factory audits and quality inspections at every stage to prevent costly mistakes.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Cost Optimization</h4>
                    <p className="text-slate-300">We negotiate on your behalf to get factory-direct prices without hidden commissions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                data-strk-img-id="why-img-44a1"
                data-strk-img="[why-title] China supplier verification audit"
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                alt="Factory Audit"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900/90 to-transparent">
                <div className="flex items-center gap-2 mb-2 text-secondary">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="italic text-lg text-white font-medium mb-4">"SSourcing China saved us from a potential $50k loss by identifying critical defects before shipment. True partners."</p>
                <p className="text-sm font-bold">— Director of Operations, E-commerce Brand, USA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="contact-form" className="section-padding bg-slate-50">
        <div className="max-width-container px-4">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <h2 id="contact-title" className="section-title text-left mb-6">Start Your Sourcing Journey</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Tell us about your product needs and our experts will get back to you with a free sourcing quote within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-700 font-medium">
                  <MessageSquare className="text-primary" size={24} />
                  <span>Free Product Consultation</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700 font-medium">
                  <ShieldCheck className="text-primary" size={24} />
                  <span>Confidentiality Guaranteed</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700 font-medium">
                  <Zap className="text-primary" size={24} />
                  <span>Factory-Direct Quotes</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
