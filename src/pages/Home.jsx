import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Search, 
  ShieldCheck, 
  Truck, 
  Factory, 
  FileText, 
  ArrowRight, 
  Star,
  Users,
  Award
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: "Product Sourcing",
      desc: "Finding the best manufacturers for your specific product requirements, negotiating prices and MOQs.",
      icon: Search,
      id: "srv-sourcing"
    },
    {
      title: "Factory Audit",
      desc: "Comprehensive on-site verification of factory capabilities, legal status, and social compliance.",
      icon: Factory,
      id: "srv-audit"
    },
    {
      title: "Quality Inspection",
      desc: "Pre-shipment and during-production inspections to ensure products meet your quality standards.",
      icon: ShieldCheck,
      id: "srv-qc"
    },
    {
      title: "Logistics Coordination",
      desc: "Managing sea, air, and rail freight, customs clearance, and delivery to your warehouse.",
      icon: Truck,
      id: "srv-logistics"
    }
  ];

  const steps = [
    { number: "01", title: "Inquiry & Analysis", desc: "Send us your product specs. We analyze the market and feasibility." },
    { number: "02", title: "Supplier Selection", desc: "We shortlist 3-5 verified suppliers and obtain detailed quotes." },
    { number: "03", title: "Sampling & Testing", desc: "We coordinate sample production and testing to verify quality." },
    { number: "04", title: "Production & QC", desc: "Once ordered, we monitor production and conduct strict inspections." },
    { number: "05", title: "Shipping & Delivery", desc: "We manage logistics and documentation for a smooth delivery." }
  ];

  const productCategories = [
    { name: "Electronics", imgQuery: "china electronics factory production line", id: "cat-electronics" },
    { name: "Furniture", imgQuery: "modern furniture manufacturing china", id: "cat-furniture" },
    { name: "Textiles", imgQuery: "textile mill apparel production", id: "cat-textiles" },
    { name: "Automotive", imgQuery: "car parts manufacturing china", id: "cat-automotive" },
    { name: "Kitchenware", imgQuery: "kitchen appliances manufacturing", id: "cat-kitchen" },
    { name: "Packaging", imgQuery: "professional packaging manufacturing", id: "cat-packaging" }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 z-0 brightness-[0.4]"
          data-strk-bg-id="hero-bg-china-port"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Professional China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl mb-10 text-slate-200 leading-relaxed font-light">
              We help you find reliable suppliers, verify factories, inspect quality, and manage logistics. Your professional team on the ground in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-[#ff6b00] hover:bg-[#e65a00] text-white rounded-md text-lg font-bold transition-all text-center"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-md text-lg font-bold backdrop-blur-sm transition-all text-center"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-slate-50 py-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-8 opacity-60">
          <div className="flex items-center gap-2 font-bold text-slate-500"><Award /> 10+ Years Experience</div>
          <div className="flex items-center gap-2 font-bold text-slate-500"><ShieldCheck /> SGS/ISO Certified</div>
          <div className="flex items-center gap-2 font-bold text-slate-500"><Users /> 500+ Clients Globally</div>
          <div className="flex items-center gap-2 font-bold text-slate-500"><Globe /> 50+ Countries Served</div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3d66] mb-4">Our Core Sourcing Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide end-to-end supply chain management solutions to ensure your business success in China.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="p-8 border border-slate-100 rounded-xl hover:shadow-xl transition-all group bg-slate-50/50">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#1a3d66] transition-colors">
                  <service.icon className="w-8 h-8 text-[#1a3d66] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a3d66] mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link to="/services" className="text-[#ff6b00] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#1a3d66] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">How It Works</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Our streamlined 5-step process ensures a transparent and risk-free sourcing experience.
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Line Desktop */}
            <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 bg-slate-500/30 -z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
              {steps.map((step) => (
                <div key={step.number} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#ff6b00] rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg border-4 border-[#1a3d66]">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image / Trust Point Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3d66] mb-8 leading-tight">
                Why Global Buyers Choose SSourcing China
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle className="text-[#ff6b00] w-6 h-6" /></div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1a3d66]">Transparent Communication</h4>
                    <p className="text-slate-600">Fluent English speakers who understand Western standards and expectations.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle className="text-[#ff6b00] w-6 h-6" /></div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1a3d66]">Strict Quality Control</h4>
                    <p className="text-slate-600">On-site inspections with detailed reports and video verification before any payment.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle className="text-[#ff6b00] w-6 h-6" /></div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1a3d66]">Local Presence & Networks</h4>
                    <p className="text-slate-600">Direct access to industrial hubs in Shenzhen, Ningbo, and Yiwu.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle className="text-[#ff6b00] w-6 h-6" /></div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1a3d66]">Cost Efficiency</h4>
                    <p className="text-slate-600">We negotiate as locals to get you the best prices and favorable MOQs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  data-strk-img-id="qc-inspector-work"
                  data-strk-img="quality control inspector checking electronics in china factory"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  alt="Quality Control Inspection"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#ff6b00] p-8 rounded-xl shadow-xl hidden md:block">
                <p className="text-white text-3xl font-extrabold mb-1">98%</p>
                <p className="text-white/80 text-sm">Customer Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3d66] mb-4">Products We Source</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our expertise spans across diverse industries, helping you find the right niche products.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <div key={cat.id} className="group relative h-64 rounded-xl overflow-hidden shadow-md">
                <div 
                  className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
                  data-strk-bg-id={`cat-bg-${cat.id}`}
                  data-strk-bg={cat.imgQuery}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="600"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h3 className="text-white text-2xl font-bold">{cat.name}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/products" className="inline-flex items-center gap-2 font-bold text-[#1a3d66] hover:text-[#ff6b00] transition-colors">
              See all product categories <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 overflow-hidden relative">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          data-strk-bg-id="cta-bg-cargo"
          data-strk-bg="cargo ship leaving port sunrise"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Reduce your risks and lower your costs with our professional sourcing team. Get your free personalized quote within 24 hours.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-5 bg-[#ff6b00] hover:bg-[#e65a00] text-white rounded-md text-xl font-bold transition-all transform hover:scale-105 shadow-xl"
          >
            Get Your Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
