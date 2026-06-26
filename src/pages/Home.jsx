import { Link } from 'react-router-dom';
import { ShieldCheck, Search, ClipboardCheck, Ship, ArrowRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/80 z-10" />
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Shipping containers at global port"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              We help overseas B2B buyers find reliable suppliers, verify factories, inspect quality, and coordinate international shipping seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded-md text-blue-900 bg-white hover:bg-gray-50 transition-colors shadow-lg"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex justify-center items-center px-8 py-4 border border-white text-base font-semibold rounded-md text-white hover:bg-white/10 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-x-0 lg:divide-x divide-gray-200">
            <div className="px-4">
              <p className="text-3xl font-bold text-blue-600">500+</p>
              <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Verified Suppliers</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-bold text-blue-600">10+</p>
              <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Years Experience</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-bold text-blue-600">50M+</p>
              <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Sourced Value ($)</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-bold text-blue-600">100%</p>
              <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Quality Guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Problems We Solve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sourcing from China Doesn't Have to Be Hard</h2>
            <p className="text-lg text-gray-600">We eliminate the common risks and frustrations of international B2B procurement.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Avoid Scams & Bad Factories</h3>
              <p className="text-gray-600">Worried about unverified Alibaba suppliers? We physically audit factories and check their business licenses to ensure they are real manufacturers.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <ClipboardCheck className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stop Quality Issues</h3>
              <p className="text-gray-600">Don't wait until goods arrive to find defects. We perform pre-shipment inspections based on AQL standards to guarantee quality.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Overcome Language Barriers</h3>
              <p className="text-gray-600">Miscommunication leads to costly mistakes. Our native team ensures your technical specifications are perfectly understood.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our End-to-End Sourcing Services</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl">From initial product search to final delivery, we manage the entire supply chain serving as your local office in China.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="mb-4">
                <Search className="h-10 w-10 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Product Sourcing</h3>
              <p className="text-gray-600 text-sm mb-4">We find the best price-to-quality ratio from our network of verified direct manufacturers, not trading middlemen.</p>
            </div>
            
            <div className="group">
              <div className="mb-4">
                <ShieldCheck className="h-10 w-10 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Factory Verification</h3>
              <p className="text-gray-600 text-sm mb-4">Comprehensive background checks, credit reports, and on-site factory audits before you place any orders.</p>
            </div>

            <div className="group">
              <div className="mb-4">
                <ClipboardCheck className="h-10 w-10 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Control</h3>
              <p className="text-gray-600 text-sm mb-4">Detailed pre-shipment inspections (PSI) with comprehensive photo and video reports to ensure specifications are met.</p>
            </div>

            <div className="group">
              <div className="mb-4">
                <Ship className="h-10 w-10 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Shipping Logistics</h3>
              <p className="text-gray-600 text-sm mb-4">Competitive freight rates for Sea, Air, and Express. We handle customs clearance and consolidation.</p>
            </div>
          </div>
          
          <div className="mt-12">
            <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
              View all services <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your China Sourcing?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Tell us about your product requirements, and our team will get back to you with a free quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-blue-900 bg-white hover:bg-gray-100 transition-colors"
          >
            Start Your Sourcing Request
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;