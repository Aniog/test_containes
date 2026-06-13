import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 id="contact-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Let's Discuss Your Needs</h2>
            <p id="contact-desc" className="text-lg text-gray-600 mb-10">
              Ready to upgrade your fabrication capabilities with a new sheet metal folding machine? Contact our engineering team for a custom quote or technical consultation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Headquarters</h3>
                  <p className="text-gray-600 mt-1">100 Industrial Parkway<br/>Tech District, TX 75001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600 mt-1">+1 (800) 555-FOLD<br/>Mon-Fri 8am to 6pm EST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600 mt-1">sales@artitectmachinery.com<br/>support@artitectmachinery.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-10 rounded-xl border border-gray-100 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" id="first-name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" id="last-name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>
              
              <div>
                <label htmlFor="machine" className="block text-sm font-medium text-gray-700 mb-2">Machine Interest</label>
                <select id="machine" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
                  <option>ProFolder X1 (High Volume)</option>
                  <option>Compact C-200 (Space Saving)</option>
                  <option>TitanFold H.D. (Heavy Duty)</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your production requirements..."></textarea>
              </div>
              
              <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-md transition-colors shadow-md">
                Send Request
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;