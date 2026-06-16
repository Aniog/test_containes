import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to upgrade your production line? Reach out to our sales team or technical support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white shadow-xl border border-slate-100 overflow-hidden">
          {/* Contact Form */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 border border-slate-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 border border-slate-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-slate-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-2">Area of Interest</label>
                <select id="interest" className="w-full px-4 py-3 border border-slate-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white">
                  <option>Double Folding Machine</option>
                  <option>Sheet Metal Folder</option>
                  <option>Technical Support</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea id="message" rows="5" className="w-full px-4 py-3 border border-slate-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="How can we help you today?"></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 uppercase tracking-widest hover:bg-blue-700 transition-colors">
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-slate-900 text-white p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mt-1 bg-white/10 p-3">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-bold mb-1">Headquarters</h3>
                    <p className="text-slate-400 leading-relaxed">
                      123 Industrial Way<br />
                      Tech City, TC 10101
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-white/10 p-3">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-bold mb-1">Phone</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Sales: +1 (555) 123-4567<br />
                      Support: +1 (555) 987-6543
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-white/10 p-3">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <p className="text-slate-400 leading-relaxed">
                      info@artitectmachinery.com<br />
                      sales@artitectmachinery.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800">
              <h3 className="font-bold text-lg mb-4">Business Hours</h3>
              <p className="text-slate-400">
                Monday - Friday: 8:00 AM - 6:00 PM (EST)<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
