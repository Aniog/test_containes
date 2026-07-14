import React, { useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import ContactForm from '../components/home/ContactForm.jsx';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 lg:py-40 flex flex-col items-start w-full">
          <div className="md:w-3/5 space-y-6">
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
              Modern Contact Management
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Connect with us <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">seamlessly</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light">
              We're here to help you solve problems and answer your questions. Drop us a line and our expert team will get back to you within 24 hours.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button onClick={() => document.getElementById('contact-section').scrollIntoView({behavior: 'smooth'})} className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Why work with us?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">We provide exceptional service and support that sets us apart from the rest.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Lightning Fast</h3>
              <p className="text-slate-600 leading-relaxed">Our team responds to all inquiries within 24 hours, guaranteeing you're never left waiting for answers.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Expert Advice</h3>
              <p className="text-slate-600 leading-relaxed">Connect directly with domain experts who understand your specific needs and challenges inside out.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Tailored Solutions</h3>
              <p className="text-slate-600 leading-relaxed">We don't do one-size-fits-all. Every solution is customized to match your unique requirements completely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-start">
            
            {/* Contact Info */}
            <div className="space-y-10 lg:pr-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Let's talk about your project</h2>
                <p className="text-slate-600 text-lg leading-relaxed">Fill out the form and our team will get back to you within 24 hours. We're excited to hear from you.</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-1">Email us</h4>
                    <p className="text-slate-600">hello@contactflow.com</p>
                    <p className="text-slate-600">support@contactflow.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-1">Call us</h4>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                    <p className="text-slate-600">Mon-Fri from 8am to 5pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-1">Visit us</h4>
                    <p className="text-slate-600">100 Tech Lane</p>
                    <p className="text-slate-600">San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
              
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-10 w-full relative z-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;