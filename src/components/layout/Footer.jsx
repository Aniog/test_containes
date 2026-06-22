import React from 'react'
import { Microscope, Github, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Microscope className="w-8 h-8 text-emerald-400" />
              <span className="text-xl font-bold text-white font-['Playfair_Display']">MicroCosmos</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Bringing the hidden beauty of the microscopic world to everyone. Join us on our journey of discovery.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#wonders" className="hover:text-emerald-400 transition-colors">Wonders</a></li>
              <li><a href="#gallery" className="hover:text-emerald-400 transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: <Instagram className="w-5 h-5"/>, link: "#" },
                { icon: <Twitter className="w-5 h-5"/>, link: "#" },
                { icon: <Github className="w-5 h-5"/>, link: "#" }
              ].map((social, idx) => (
                <a key={idx} href={social.link} className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 MicroCosmos. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
