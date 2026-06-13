import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import { Plus, Cog, Settings, Package, ChevronRight, Menu, X, ArrowRight, CheckCircle2, Play, Users, Cpu, Shield, Globe } from 'lucide-react'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans" ref={containerRef}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-indigo-950">ARTITECT<br/><span className="text-sm font-medium text-slate-500">MACHINERY</span></span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-slate-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#products" className="text-slate-500 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Products</a>
                <a href="#features" className="text-slate-500 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
                <a href="#about" className="text-slate-500 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About Us</a>
                <a href="#contact" className="bg-indigo-600 text-white hover:bg-indigo-700 px-5 py-2.5 rounded-md text-sm font-semibold transition-colors shadow-sm">Contact Sales</a>
              </div>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white border-b border-slate-200`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-base font-medium text-indigo-600 bg-indigo-50 rounded-md">Home</a>
            <a href="#products" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-md">Products</a>
            <a href="#features" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-md">Features</a>
            <a href="#about" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-md">About Us</a>
            <a href="#contact" className="block w-full text-center mt-4 bg-indigo-600 text-white px-5 py-3 rounded-md font-semibold">Contact Sales</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div 
            className="w-full h-full bg-slate-900 bg-cover bg-center"
            data-strk-bg-id="hero-bg-2f4b7a"
            data-strk-bg="[hero-subtitle] [hero-title] heavy duty sheet metal engineering"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          >
            {/* Dark overlay for better text readability on top of background image */}
            <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-semibold tracking-wider mb-6 border border-indigo-500/30 backdrop-blur-sm">PRECISION ENGINEERING</span>
          <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-md">
            Next Generation <span className="text-indigo-400">Sheet Metal</span> Folding
          </h1>
          <p id="hero-subtitle" className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 mb-10 drop-shadow">
            Elegant, precise, and user-friendly machinery for modern structural fabricators. Elevate your production with Artitect's double folding systems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#products" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-md text-indigo-900 bg-white hover:bg-slate-50 transition-colors shadow-lg shadow-white/10">
              View Machinery
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 border border-white/30 text-base font-bold rounded-md text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors">
              <Play className="mr-2 -ml-1 w-5 h-5" />
              Watch Demo
            </a>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="products-title" className="text-base text-indigo-600 font-semibold tracking-wide uppercase">OUR FLEET</h2>
            <p id="products-subtitle" className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Double Folding Machines
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
              Engineered for versatility. Designed for operators. Built to last.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Product 1 */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                <img
                  alt="ProFold 3200 Double Folder"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id="prod-1-img-8a3b2c"
                  data-strk-img="[prod-1-desc] [prod-1-title] [products-subtitle]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">BEST SELLER</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Package className="w-5 h-5 text-indigo-500" />
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Heavy Duty</span>
                </div>
                <h3 id="prod-1-title" className="text-2xl font-bold text-slate-900 mb-4">ProFold 3200-EVO</h3>
                <p id="prod-1-desc" className="text-slate-600 mb-6 line-clamp-3">
                  Our flagship double folder. Offers fully automated part handling and precise up/down bending without turning the sheet. Intelligent software ensures zero scratching on sensitive materials.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Up to 3.2m length</span>
                  </div>
                  <a href="#contact" className="text-indigo-600 font-semibold flex items-center hover:text-indigo-700 group-hover:underline">
                    View Specs <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                <img
                  alt="CompactFold 2000 Metal Folder"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id="prod-2-img-1e5f8a"
                  data-strk-img="[prod-2-desc] [prod-2-title] [products-subtitle] sheet metal machine"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Cog className="w-5 h-5 text-indigo-500" />
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Compact Range</span>
                </div>
                <h3 id="prod-2-title" className="text-2xl font-bold text-slate-900 mb-4">FlexFold Compact X</h3>
                <p id="prod-2-desc" className="text-slate-600 mb-6 line-clamp-3">
                  The perfect entry into automated double folding. Designed for tight spaces but packed with premium features. Ideal for complex profiles and small to medium batches.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Intuitive Touch UI</span>
                  </div>
                  <a href="#contact" className="text-indigo-600 font-semibold flex items-center hover:text-indigo-700 group-hover:underline">
                    View Specs <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 id="features-title" className="text-base text-indigo-600 font-semibold tracking-wide uppercase mb-2">INTELLIGENT DESIGN</h2>
              <p id="features-subtitle" className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-6">
                Why choose Artitect folding machines?
              </p>
              <p className="text-lg text-slate-600 mb-8">
                We believe industrial machinery shouldn't feel industrial to use. Our interfaces are designed like modern consumer electronics, sitting atop robust, ultra-precise mechanical foundations.
              </p>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                      <Cpu className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-bold text-slate-900">ArtitectUI™ Control System</h4>
                    <p className="mt-2 text-base text-slate-600">Drag-and-draw part programming. 3D simulation before bending. It's so intuitive, new operators can run production on day one.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                      <Shield className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-bold text-slate-900">Scratch-Free Kinematics</h4>
                    <p className="mt-2 text-base text-slate-600">Our unique folding beam geometry ensures zero relative movement on the material surface—perfect for prepainted or stainless sheets.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                      <Globe className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-bold text-slate-900">Remote Diagnostics</h4>
                    <p className="mt-2 text-base text-slate-600">Built-in connectivity allows our engineering team to troubleshoot, update, and optimize your machine remotely from anywhere in the world.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-indigo-50 transform rotate-3 rounded-3xl z-0"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white">
                <img
                  alt="Machine interface showing 3D part"
                  className="w-full object-cover"
                  data-strk-img-id="feature-img-9d8e7f"
                  data-strk-img="[features-title] [features-subtitle] machinery UI touch screen factory"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Stats/About */}
      <div id="about" className="bg-indigo-900 py-16 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4f46e5 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 text-left mb-8 md:mb-0">
              <h2 id="about-title" className="text-3xl font-extrabold text-white sm:text-4xl">
                Redefining the standard.
              </h2>
              <p id="about-subtitle" className="mt-4 text-xl text-indigo-200">
                Artitect Machinery was founded with a singular vision: combine heavy-duty industrial reliability with modern design elegance.
              </p>
            </div>
            
            <div className="md:w-1/2 flex justify-center md:justify-end space-x-12">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-white">15+</div>
                <div className="mt-1 text-sm font-medium text-indigo-300 uppercase tracking-widest">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-white">400+</div>
                <div className="mt-1 text-sm font-medium text-indigo-300 uppercase tracking-widest">Machines Active</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-white">24/7</div>
                <div className="mt-1 text-sm font-medium text-indigo-300 uppercase tracking-widest">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA / Contact */}
      <div id="contact" className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-title" className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">
            Ready to upgrade your fabrication floor?
          </h2>
          <p id="cta-subtitle" className="text-xl text-slate-600 mb-10">
            Contact our engineering sales team for a custom configuration and quote.
          </p>
          
          <form className="max-w-md mx-auto space-y-4 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Company / Name</label>
              <input type="text" id="name" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-3 border bg-slate-50" placeholder="Acme Fabrication" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" id="email" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-3 border bg-slate-50" placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-1">Area of Interest</label>
              <select id="interest" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-3 border bg-slate-50 text-slate-700">
                <option>ProFold 3200-EVO</option>
                <option>FlexFold Compact X</option>
                <option>Custom Automation Line</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <button type="button" className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors mt-6">
              Request Information
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
            <span className="font-bold text-lg tracking-tight text-white">ARTITECT MACHINERY</span>
          </div>
          
          <div className="flex space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>© 2026 Artitect Machinery. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
