import React from 'react'
import { ArrowRight, ChevronRight, Settings, Maximize, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'
import ContactForm from '@/components/ContactForm'

const Home = () => {
  const categories = [
    { title: 'Double Folders', description: 'Maximum efficiency with dual-side precision folding.' },
    { title: 'Sheet Metal Folders', description: 'Versatile machines for diverse fabrication tasks.' },
    { title: 'Folding Machines', description: 'Advanced automation for high-volume production.' },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-900 border-b border-slate-800">
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="hero-bg-artitect"
          data-strk-bg="[hero-title] [hero-description] industrial metal machinery double folding machine"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-widest rounded-full mb-6">Industrial Excellence</span>
            <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              PRECISION <br/> SHEET METAL <br/> <span className="text-slate-400">FOLDING SOLUTIONS</span>
            </h1>
            <p id="hero-description" className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
              Experience the pinnacle of machinery design with Artitect's advanced double folding machines. Engineered for professional fabricators who demand precision and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="bg-white text-slate-900 px-8 py-4 rounded-md font-bold uppercase tracking-wider text-sm hover:bg-slate-100 transition-all flex items-center justify-center">
                Explore Products <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <a href="#contact" className="border border-white/20 text-white px-8 py-4 rounded-md font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition-all text-center">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Stats */}
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-1">20+</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Model Series</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-1">0.05mm</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Precision Tolerance</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-1">1500+</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Global Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-1">24/7</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Support Expert</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Machinery Series</h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              Our comprehensive range of folding machines is meticulously designed to cover every aspect of sheet metal fabrication.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-slate-900 transition-all duration-500 shadow-sm hover:shadow-xl">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img 
                    data-strk-img-id={`cat-img-${idx}`}
                    data-strk-img={`[cat-title-${idx}] sheet metal machine`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 id={`cat-title-${idx}`} className="text-xl font-bold text-slate-900 mb-4 uppercase">{cat.title}</h3>
                <p className="text-slate-600 mb-6 font-light leading-relaxed">{cat.description}</p>
                <Link to="/products" className="text-slate-900 font-bold uppercase tracking-widest text-xs flex items-center group-hover:translate-x-2 transition-transform">
                  View Specifications <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Highlights */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-slate-900/5 rounded-full z-0" />
                <img 
                  data-strk-img-id="tech-img-highlight"
                  data-strk-img="sheet metal double folding machine details precision technology"
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Technology Details"
                  className="rounded-2xl shadow-2xl relative z-10"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Precision Engineering</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tighter uppercase">Why Choose <br/> ARTITECT?</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg h-fit">
                    <Settings className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 uppercase">Fully Automated Controls</h4>
                    <p className="text-slate-600 font-light">Sophisticated CNC interfaces designed for intuitive operation without sacrificing complex capability.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg h-fit">
                    <Maximize className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 uppercase">Extended Workspace</h4>
                    <p className="text-slate-600 font-light">Customizable table sizes to handle ultra-large sheets with consistent folding pressure across the entire length.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg h-fit">
                    <Cpu className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 uppercase">Integrated Smart Sensors</h4>
                    <p className="text-slate-600 font-light">Real-time material thickness monitoring and automatic adjustment for perfect folds every time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Message */}
      <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/10 skew-x-12 translate-x-24" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tighter">Ready to Scale Your Production?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 font-light text-lg">
            Consult with our engineering experts to find the perfect folding machine configuration for your specific manufacturing needs.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-5xl mx-auto">
            <div className="w-full md:w-3/5">
              <ContactForm />
            </div>
            <div className="text-left text-white space-y-6 w-full md:w-2/5">
              <p className="flex items-center gap-3"><ChevronRight className="h-4 w-4 text-slate-500" /> Professional Consultation</p>
              <p className="flex items-center gap-3"><ChevronRight className="h-4 w-4 text-slate-500" /> Technical Data Sheets</p>
              <p className="flex items-center gap-3"><ChevronRight className="h-4 w-4 text-slate-500" /> Full Pricing Information</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
