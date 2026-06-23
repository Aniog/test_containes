import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Search, ClipboardCheck, Ship, ArrowRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="hero-bg-sourcing-1"
          data-strk-bg="[hero-heading] [hero-subheading] busy shipping port containers"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subheading" className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              We help you find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China with zero hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/how-it-works" className="inline-flex justify-center items-center px-8 py-4 border border-slate-300 text-lg font-medium rounded-md text-white bg-transparent hover:bg-slate-800 transition">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-slate-50 py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-slate-500 font-medium items-center text-center">
              <div className="flex items-center gap-2"><CheckCircle2 className="text-green-500 w-5 h-5"/> 500+ Verified Suppliers</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-green-500 w-5 h-5"/> 10+ Years Experience</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-green-500 w-5 h-5"/> Transparent Pricing</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-green-500 w-5 h-5"/> 100% Quality Guarantee</div>
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Our Core Sourcing Services</h2>
            <p id="services-desc" className="text-lg text-slate-600">Comprehensive solutions to manage your entire supply chain in China, reducing risks and saving you time.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition flex flex-col">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <Search className="w-7 h-7" />
              </div>
              <h3 id="service-1-title" className="text-xl font-bold text-slate-900 mb-3">Product Sourcing</h3>
              <p className="text-slate-600 mb-6 flex-grow">We find the best manufacturers for your specific product requirements, negotiating prices and terms on your behalf.</p>
              <Link to="/services" className="text-blue-600 font-medium inline-flex items-center mt-auto hover:text-blue-800">Learn more <ArrowRight className="ml-1 w-4 h-4"/></Link>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition flex flex-col">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 id="service-2-title" className="text-xl font-bold text-slate-900 mb-3">Supplier Verification</h3>
              <p className="text-slate-600 mb-6 flex-grow">We conduct background checks and on-site factory audits to ensure you are dealing with real, capable manufacturers.</p>
              <Link to="/services" className="text-blue-600 font-medium inline-flex items-center mt-auto hover:text-blue-800">Learn more <ArrowRight className="ml-1 w-4 h-4"/></Link>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition flex flex-col">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <ClipboardCheck className="w-7 h-7" />
              </div>
              <h3 id="service-3-title" className="text-xl font-bold text-slate-900 mb-3">Quality Control</h3>
              <p className="text-slate-600 mb-6 flex-grow">Our inspectors check your goods before, during, and after production to ensure they meet your quality standards.</p>
              <Link to="/services" className="text-blue-600 font-medium inline-flex items-center mt-auto hover:text-blue-800">Learn more <ArrowRight className="ml-1 w-4 h-4"/></Link>
            </div>

            {/* Service 4 */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition flex flex-col">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <Ship className="w-7 h-7" />
              </div>
              <h3 id="service-4-title" className="text-xl font-bold text-slate-900 mb-3">Shipping & Logistics</h3>
              <p className="text-slate-600 mb-6 flex-grow">We coordinate consolidation, warehousing, and worldwide shipping (Sea/Air/Express) for hassle-free delivery.</p>
              <Link to="/services" className="text-blue-600 font-medium inline-flex items-center mt-auto hover:text-blue-800">Learn more <ArrowRight className="ml-1 w-4 h-4"/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="why-choose-title" className="text-3xl font-bold sm:text-4xl mb-6">Why Partner With SSourcing China?</h2>
              <p id="why-choose-desc" className="text-lg text-slate-300 mb-8">Importing from China shouldn't be a gamble. We eliminate scams, poor quality, and communication barriers.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-600 rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-white"/></div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Local Presence, Global Standards</h4>
                    <p className="text-slate-400">Our team is based in Shenzhen, giving us direct access to factories while maintaining western business standards and communication clarity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-600 rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-white"/></div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Transparent Pricing Models</h4>
                    <p className="text-slate-400">No hidden kickbacks from factories. We offer clear, fixed-fee or percentage-based pricing depending on your project needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-600 rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-white"/></div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">End-to-End Problem Solving</h4>
                    <p className="text-slate-400">We don't just find suppliers; we follow the entire production process, resolve disputes, and ensure your goods arrive safely.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                data-strk-img-id="home-why-choose-img"
                data-strk-img="[why-choose-title] [why-choose-desc] business meeting sourcing"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                alt="Our sourcing team in discussion"
                className="rounded-lg shadow-2xl object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Streamline Your China Sourcing?</h2>
          <p className="text-xl text-blue-100 mb-8">Tell us what you need, and we'll provide a free, no-obligation quote and plan of action.</p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 font-bold text-lg px-10 py-4 rounded-md shadow hover:bg-slate-50 transition">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;