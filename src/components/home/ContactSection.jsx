import React from 'react'
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Send } from 'lucide-react'

const ContactSection = () => {
  const currentYear = new Date().getFullYear()

  return (
    <section className="bg-slate-900 text-white">
      {/* Contact Form Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Have questions about our teacups or want to learn more about Jingdezhen craftsmanship? 
                We'd love to hear from you.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-slate-300">hello@jingdezhenteacups.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-600 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-slate-300">+86 798 123 4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Workshop</div>
                    <div className="text-slate-300">Jingdezhen, Jiangxi Province, China</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Our Journey</h3>
                <div className="flex gap-4">
                  <button className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-300">
                    <Instagram className="w-6 h-6" />
                  </button>
                  <button className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-300">
                    <Facebook className="w-6 h-6" />
                  </button>
                  <button className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-300">
                    <Twitter className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors">
                    <option>General Inquiry</option>
                    <option>Product Question</option>
                    <option>Custom Order</option>
                    <option>Wholesale</option>
                    <option>Press & Media</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows="5"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your interest in our teacups..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Jingdezhen Teacups</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Preserving the ancient art of porcelain craftsmanship while bringing 
                timeless beauty to modern tea ceremonies around the world.
              </p>
              <div className="text-sm text-slate-400">
                Handcrafted with love in Jingdezhen, China
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Collection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Artisans</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} Jingdezhen Teacups. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection