import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { CheckCircle, ShieldCheck, Factory, Truck, Search, Quote, ArrowRight, Star, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import InquiryForm from '@/components/InquiryForm';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-40 bg-slate-900 text-white">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="[hero-title] [hero-subtitle] China factory production shipping cargo"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Find reliable suppliers, verify factories, inspect quality, and manage logistics with our expert team on the ground in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-white font-bold px-10 py-8 rounded-lg text-xl shadow-xl transition-all hover:translate-y-[-2px]">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 font-bold px-10 py-8 rounded-lg text-xl backdrop-blur-sm transition-all">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-6 text-slate-300">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden">
                    <img data-strk-img-id={`avatar-${i}`} data-strk-img="business professional headshot" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p>Trusted by 200+ global importers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="py-10 bg-white border-b border-slate-100 shadow-sm relative z-20 -mt-8 mx-4 lg:mx-auto max-w-6xl rounded-2xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatItem label="Years Experience" value="10+" />
            <StatItem label="Verified Suppliers" value="1,500+" />
            <StatItem label="Quality Inspections" value="5,000+" />
            <StatItem label="Countries Served" value="45+" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Proven Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">End-to-End Sourcing Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">We navigate the complexities of Chinese manufacturing so you can scale your business with confidence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ServiceCard
              icon={<Search className="w-12 h-12" />}
              title="Supplier Sourcing"
              description="Direct factory connections. We skip the middleman and find the actual manufacturers that meet your specific standards."
              imgId="sc-1"
            />
            <ServiceCard
              icon={<ShieldCheck className="w-12 h-12" />}
              title="Factory Audit"
              description="On-the-ground verification. We visit factories to check their legal status, certifications, machinery, and working conditions."
              imgId="sc-2"
            />
            <ServiceCard
              icon={<Factory className="w-12 h-12" />}
              title="Production Management"
              description="We follow your production weekly, ensuring your deadlines are met and communicating any issues in real-time."
              imgId="sc-3"
            />
            <ServiceCard
              icon={<CheckCircle className="w-12 h-12" />}
              title="Quality Control"
              description="Rigorous pre-shipment inspections following AQL 2.5 standards to ensure your goods are exactly as requested."
              imgId="sc-4"
            />
            <ServiceCard
              icon={<Truck className="w-12 h-12" />}
              title="Shipping & Logistics"
              description="Consolidation, freight forwarding, and customs clearance. We handle the paperwork and get your goods to your door."
              imgId="sc-5"
            />
            <ServiceCard
              icon={<Globe className="w-12 h-12" />}
              title="Custom Product Dev"
              description="OEM/ODM support. We help you develop unique designs, create prototypes, and start mass production from scratch."
              imgId="sc-6"
            />
          </div>
          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" asChild className="border-secondary text-secondary hover:bg-secondary hover:text-white font-bold py-6 px-10 rounded-xl transition-all">
              <Link to="/services">Compare All Services <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sourcing Process Section */}
      <section id="process" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">How It Works</span>
              <h2 className="text-4xl font-bold mb-8 text-slate-900">A Transparent, 6-Step Sourcing Journey</h2>
              <div className="space-y-8">
                <ProcessStep number="01" title="Inquiry & Requirement Analysis" desc="You tell us what you need. We analyze specs, target price, and compliance requirements." />
                <ProcessStep number="02" title="Supplier Identification & Quoting" desc="We shortlist 3-5 verified factories and provide you with a comprehensive quote comparison." />
                <ProcessStep number="03" title="Sampling & Prototype Approval" desc="We coordinate sample production and ship them to you for physical approval before bulk order." />
                <ProcessStep number="04" title="Production & Quality Monitoring" desc="Order is placed. We monitor the timeline and visit the factory to check production progress." />
                <ProcessStep number="05" title="Final Inspection & Payment" desc="Our QC team performs a final audit. Once approved, you release the final payment to the supplier." />
                <ProcessStep number="06" title="Shipping & Customs Management" desc="We arrange the container, handle export customs, and coordinate with your local freight forwarder." />
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
                <img
                  data-strk-img-id="process-hero"
                  data-strk-img="Sourcing agent working with factory manager in China"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Our Sourcing Process"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary rounded-full filter blur-[100px] opacity-20 -z-10" />
              <div className="absolute top-1/2 -right-10 w-80 h-80 bg-blue-500 rounded-full filter blur-[120px] opacity-10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 underline decoration-secondary decoration-4 underline-offset-8">What We Source</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <ProductCategory title="Electronics" icon={<Zap className="w-6 h-6" />} imgId="cat-1" />
            <ProductCategory title="Machinery" icon={<Factory className="w-6 h-6" />} imgId="cat-2" />
            <ProductCategory title="Home Decor" icon={<Globe className="w-6 h-6" />} imgId="cat-3" />
            <ProductCategory title="Apparel" icon={<Globe className="w-6 h-6" />} imgId="cat-4" />
            <ProductCategory title="Toys" icon={<Globe className="w-6 h-6" />} imgId="cat-5" />
            <ProductCategory title="Personal Care" icon={<Globe className="w-6 h-6" />} imgId="cat-6" />
          </div>
          <p className="mt-12 text-slate-500">And many more. If it's made in China, we can find it for you.</p>
        </div>
      </section>

      {/* Testimonials / Case Studies Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">Real Results for Global Clients</h2>
              <p className="text-lg text-slate-600">See how we've helped importers save time and millions of dollars in sourcing costs.</p>
            </div>
            <Link to="/case-studies" className="text-secondary font-bold flex items-center gap-2 mt-6 md:mt-0 hover:translate-x-2 transition-transform">
              View All Case Studies <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <CaseStudyItem
              title="Scaling E-commerce Brand from Zero to $5M"
              desc="How we sourced 15+ complex SKU electronics for a US startup, ensuring 100% quality compliance."
              category="Electronics"
              imgId="cs-1"
            />
            <CaseStudyItem
              title="Heavy Machinery Parts Sourcing for European Enterprise"
              desc="Reducing manufacturing costs by 35% while improving material durability through new factory selection."
              category="Industrial"
              imgId="cs-2"
            />
          </div>
        </div>
      </section>

      {/* Contact / Inquiry Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-[-15deg] transform translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Ready to optimize your China supply chain?</h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">Fill out the form to tell us about your project. One of our sourcing managers will review your requirements and provide a preliminary feasibility study within 24 hours.</p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Trusted Communication</h4>
                    <p className="text-slate-400">English-speaking agents with technical expertise.</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Risk Management</h4>
                    <p className="text-slate-400">Comprehensive supplier screening and legal audits.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 text-slate-900 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 text-center text-slate-800 underline decoration-secondary underline-offset-8">Request a Free Sourcing Quote</h3>
              <InquiryForm buttonText="Get My Free Sourcing Quote" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const StatItem = ({ label, value }) => (
  <div className="text-center md:text-left border-r last:border-0 border-slate-100 pr-4">
    <div className="text-3xl font-extrabold text-secondary mb-1">{value}</div>
    <div className="text-sm font-semibold text-slate-500 uppercase tracking-tighter">{label}</div>
  </div>
);

const ServiceCard = ({ icon, title, description, imgId }) => (
  <div className="p-8 border border-slate-200 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
    <div className="mb-6 text-secondary bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">{icon}</div>
    <h3 className="text-2xl font-bold mb-4 text-slate-900">{title}</h3>
    <p className="text-slate-600 mb-8 leading-relaxed">{description}</p>
    <div className="relative h-44 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
      <img
        data-strk-img-id={imgId}
        data-strk-img={`${title} China manufacturing quality control`}
        data-strk-img-ratio="16x9"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={title}
        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
      />
    </div>
  </div>
);

const ProcessStep = ({ number, title, desc }) => (
  <div className="flex gap-6 group">
    <div className="text-4xl font-black text-slate-100 tracking-tighter group-hover:text-secondary/20 transition-colors">{number}</div>
    <div>
      <h4 className="text-xl font-bold mb-2 text-slate-800">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ProductCategory = ({ title, icon, imgId }) => (
  <div className="group cursor-pointer">
    <div className="relative h-32 rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition">
      <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/10 transition z-10 flex items-center justify-center text-white">
        {React.cloneElement(icon, { className: "w-8 h-8 opacity-0 group-hover:opacity-100 transition duration-300" })}
      </div>
      <img
        data-strk-img-id={imgId}
        data-strk-img={`${title} products made in China`}
        data-strk-img-ratio="1x1"
        data-strk-img-width="300"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={title}
        className="object-cover w-full h-full"
      />
    </div>
    <span className="font-bold text-slate-700 group-hover:text-secondary transition">{title}</span>
  </div>
);

const CaseStudyItem = ({ title, desc, category, imgId }) => (
  <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-secondary transition shadow-sm group">
    <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-inner">
      <img
        data-strk-img-id={imgId}
        data-strk-img={`${title} ${category} sourcing success`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="400"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />
    </div>
    <div className="w-full md:w-2/3">
      <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">{category}</span>
      <h3 className="text-2xl font-bold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600 leading-relaxed italic">"{desc}"</p>
    </div>
  </div>
);

export default Home;
