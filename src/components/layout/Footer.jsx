import React from 'react';
import { Rocket, Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Rocket className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold tracking-tight">Nova Creative</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Building next-generation digital experiences for ambitious brands across the globe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6">Explore</h5>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Process</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Insights</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6">Company</h5>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6">Newsletter</h5>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Get the latest creative insights delivered straight to your inbox.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-none rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Nova Creative Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
