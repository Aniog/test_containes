import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ContactSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Subtle background element */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-overlay bg-cover bg-center"
        data-strk-bg-id="contact-bg-01"
        data-strk-bg="industrial blueprint machinery design modern"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Form Left Side */}
          <div className="w-full md:w-3/5 p-8 md:p-12">
            <h2 id="contact-title" className="text-3xl font-bold text-slate-900 mb-2">Ready to Upgrade?</h2>
            <p className="text-slate-600 mb-8 font-medium">Request a quote or technical consultation today.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-shadow"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-shadow"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-shadow"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-semibold text-slate-700 mb-2">Primary Interest</label>
                <select 
                  id="interest"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-shadow bg-white"
                >
                  <option>Double Folding Machines</option>
                  <option>Sheet Metal Folders</option>
                  <option>Custom Solutions</option>
                  <option>Technical Support</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Additional Information</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-shadow resize-none"
                  placeholder="Tell us about your production needs..."
                ></textarea>
              </div>
              
              <button 
                type="button" 
                className="w-full py-4 px-6 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-bold text-lg transition-colors shadow-lg shadow-amber-500/20"
              >
                Send Request
              </button>
            </form>
          </div>
          
          {/* Info Right Side */}
          <div className="w-full md:w-2/5 bg-slate-50 p-8 md:p-12 border-l border-gray-100 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Why Partner With Us?</h3>
            
            <ul className="space-y-6">
              <li>
                <h4 className="font-bold text-slate-800 mb-1">Global Support</h4>
                <p className="text-sm text-slate-600">24/7 technical assistance and rapid parts delivery worldwide.</p>
              </li>
              <li>
                <h4 className="font-bold text-slate-800 mb-1">Custom Engineering</h4>
                <p className="text-sm text-slate-600">Machines tailored to your specific profiles and workflow.</p>
              </li>
              <li>
                <h4 className="font-bold text-slate-800 mb-1">Training Included</h4>
                <p className="text-sm text-slate-600">Comprehensive operator training to maximize your investment quickly.</p>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  )
}
