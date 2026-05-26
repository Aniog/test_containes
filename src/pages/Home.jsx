import { Link } from 'react-router-dom';
import {
  Search, Settings, GitCompare, FlaskConical, Truck, ShieldCheck,
  FileText, Lock, Globe, CheckCircle, ArrowRight, ChevronRight
} from 'lucide-react';

const services = [
  { icon: Search, title: 'Mold Requirement Review', desc: 'We review your drawings, samples, or product photos and assess feasibility before sourcing begins.' },
  { icon: Settings, title: 'Existing Mold Sourcing', desc: 'Looking for a specific mold type? We identify and verify suitable factory resources across China.' },
  { icon: FileText, title: 'Custom Mold Development', desc: 'From concept to tooling, we manage custom mold development with qualified manufacturers.' },
  { icon: GitCompare, title: 'Quotation Comparison', desc: 'We collect and compare multiple factory quotations so you get the best value for your project.' },
  { icon: FlaskConical, title: 'Sampling & Production Follow-up', desc: 'We coordinate sample confirmation and monitor production milestones on your behalf.' },
  { icon: Truck, title: 'Delivery Support', desc: 'We assist with inspection before shipment and coordinate international delivery logistics.' },
];

const trustPoints = [
  { icon: ShieldCheck, title: 'Factory Capability Check', desc: 'We verify factory equipment, capacity, and past work before recommending them.' },
  { icon: Lock, title: 'Drawing Confidentiality', desc: 'Your technical files and designs are handled with strict confidentiality.' },
  { icon: Globe, title: 'Clear English Communication', desc: 'We bridge the language gap so you always know the status of your project.' },
  { icon: CheckCircle, title: 'Sample Confirmation', desc: 'Samples are reviewed and approved before mass production begins.' },
  { icon: Search, title: 'Inspection Before Shipment', desc: 'Quality checks are performed before goods leave the factory.' },
  { icon: Truck, title: 'International Delivery Support', desc: 'We coordinate shipping and documentation for smooth cross-border delivery.' },
];

const moldTypes = [
  'Plastic Injection Molds', 'Die Casting Molds', 'Silicone Molds',
  'Rubber Molds', 'Stamping Molds', 'Compression Molds',
  'Blow Molds', 'Phone Case Molds', 'Automotive Molds',
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{background: 'linear-gradient(135deg, #1B4F8A 0%, #163F6E 100%)'}} className="text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full" style={{background: '#E87722'}}></span>
              Mold Sourcing &amp; Manufacturing Support in China
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Find the Right Mold Factory Faster
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
              Send us your drawing, sample, product photo, or mold requirement. We help review the project, match suitable factory resources, and follow up from quotation to delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#E87722] hover:bg-[#C9651A] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-base"
              >
                Send Your Requirement
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-base"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{background: '#1A2332'}} className="text-white py-6">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '9+', label: 'Mold Types Covered' },
              { value: '100%', label: 'English Communication' },
              { value: 'Multi-Factory', label: 'Quotation Comparison' },
              { value: 'End-to-End', label: 'Project Follow-up' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-[#E87722]">{stat.value}</div>
                <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#1B4F8A]/10 text-[#1B4F8A] text-xs font-semibold px-3 py-1 rounded-full mb-3">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-4">What We Do For You</h2>
            <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">
              We are not a factory or a marketplace. We are your dedicated sourcing and support partner throughout the entire mold project lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-[#E2E8F0] rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-11 h-11 bg-[#1B4F8A]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#1B4F8A]" />
                </div>
                <h3 className="text-[#1A2332] font-semibold text-lg mb-2">{title}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#E87722] hover:bg-[#C9651A] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Start Your Inquiry <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mold Types */}
      <section className="py-16 md:py-24 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#1B4F8A]/10 text-[#1B4F8A] text-xs font-semibold px-3 py-1 rounded-full mb-3">Mold Types</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-4">Molds We Source &amp; Support</h2>
            <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">
              From plastic injection to die casting, silicone, rubber, and more — we cover a wide range of mold types across industries.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {moldTypes.map((type) => (
              <span key={type} className="bg-white border border-[#E2E8F0] text-[#1A2332] text-sm font-medium px-4 py-2 rounded-full shadow-sm">
                {type}
              </span>
            ))}
          </div>
          <div className="text-center">
            <Link to="/mold-types" className="inline-flex items-center gap-2 text-[#1B4F8A] font-semibold hover:underline">
              View All Mold Types <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works (summary) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#1B4F8A]/10 text-[#1B4F8A] text-xs font-semibold px-3 py-1 rounded-full mb-3">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-4">How It Works</h2>
            <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">A simple, transparent process from your first inquiry to final delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Submit Your Requirement', desc: 'Send drawings, photos, samples, or a written description of your mold project.' },
              { step: '02', title: 'We Review & Match', desc: 'We assess your project and identify suitable factory resources from our network.' },
              { step: '03', title: 'Compare Quotations', desc: 'We collect multiple quotes and present a clear comparison for your decision.' },
              { step: '04', title: 'Follow Up to Delivery', desc: 'We monitor tooling, sampling, production, and coordinate international delivery.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="text-5xl font-bold text-[#1B4F8A]/10 mb-3">{step}</div>
                <h3 className="text-[#1A2332] font-semibold text-lg mb-2">{title}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-[#1B4F8A] font-semibold hover:underline">
              See Full Process <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 md:py-24 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#1B4F8A]/10 text-[#1B4F8A] text-xs font-semibold px-3 py-1 rounded-full mb-3">Why Work With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-4">Built for Overseas Buyers</h2>
            <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">
              We understand the challenges of sourcing molds from China. Every step of our process is designed to give you confidence and control.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPoints.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex gap-4">
                <div className="w-10 h-10 bg-[#E87722]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#E87722]" />
                </div>
                <div>
                  <h3 className="text-[#1A2332] font-semibold mb-1">{title}</h3>
                  <p className="text-[#4A5568] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{background: '#1B4F8A'}} className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Find Your Mold Factory?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Send us your requirement today. We'll review it and get back to you with a sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E87722] hover:bg-[#C9651A] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            Send Your Requirement <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
