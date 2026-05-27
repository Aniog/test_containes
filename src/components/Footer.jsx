import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 
              id="footer-brand" 
              className="text-3xl font-bold text-emerald-400 mb-4"
            >
              MicroCosmos
            </h3>
            <p 
              id="footer-description" 
              className="text-slate-300 leading-relaxed mb-6 max-w-md"
            >
              Exploring the hidden universe within trees, where microscopic worlds reveal extraordinary 
              beauty and complex ecosystems that sustain our planet's forests.
            </p>
            
            {/* Featured Image */}
            <div className="w-full h-48 rounded-xl overflow-hidden">
              <img
                alt="MicroCosmos footer showcase"
                className="w-full h-full object-cover"
                data-strk-img-id={`footer-showcase-${Math.random().toString(36).substr(2, 6)}`}
                data-strk-img={`[footer-brand] [footer-description] microscopic forest ecosystem showcase`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>

          {/* Explore Section */}
          <div>
            <h4 className="text-xl font-semibold text-emerald-400 mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">Tree Gallery</a></li>
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">Microscopic Details</a></li>
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">Ecosystem Layers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">Symbiotic Networks</a></li>
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">Virtual Microscope</a></li>
            </ul>
          </div>

          {/* Learn Section */}
          <div>
            <h4 className="text-xl font-semibold text-emerald-400 mb-4">Learn</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">About Microbiology</a></li>
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">Forest Ecology</a></li>
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">Research Methods</a></li>
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">Conservation</a></li>
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">Educational Resources</a></li>
            </ul>
          </div>
        </div>

        {/* Image Gallery Strip */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <h4 
            id="gallery-strip-title" 
            className="text-xl font-semibold text-emerald-400 mb-6 text-center"
          >
            Microscopic Wonders Gallery
          </h4>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="group cursor-pointer">
                <img
                  alt={`Microscopic wonder ${i + 1}`}
                  className="w-full h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  data-strk-img-id={`footer-gallery-${i}-${Math.random().toString(36).substr(2, 6)}`}
                  data-strk-img={`[gallery-strip-title] microscopic wonder ${i + 1} cellular structure detail`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2024 MicroCosmos. Exploring the microscopic universe of trees.
          </div>
          
          <div className="flex gap-6">
            <button className="text-slate-400 hover:text-emerald-400 transition-colors">
              Privacy Policy
            </button>
            <button className="text-slate-400 hover:text-emerald-400 transition-colors">
              Terms of Use
            </button>
            <button className="text-slate-400 hover:text-emerald-400 transition-colors">
              Contact
            </button>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-amber-600 rounded-2xl p-8">
            <h4 
              id="cta-title" 
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Start Your Microscopic Journey
            </h4>
            <p 
              id="cta-description" 
              className="text-emerald-100 mb-6 max-w-2xl mx-auto"
            >
              Dive deeper into the fascinating world of tree microbiology and discover the hidden connections that make forests thrive.
            </p>
            <button className="bg-white text-emerald-700 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors">
              Begin Exploration
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}