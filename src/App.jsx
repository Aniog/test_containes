import React, { useEffect, useRef } from 'react'
import { Microscope, Camera, Info, Image as ImageIcon, Sparkles } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'

const MicroCosmos = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const galleryItems = [
    { id: 'cell', title: 'Cellular Structures', desc: 'The building blocks of life at a microscopic scale.' },
    { id: 'crystal', title: 'Crystalline Formations', desc: 'Symmetrical beauty of mineral crystals and chemical compounds.' },
    { id: 'insect', title: 'Macro Insects', desc: 'Revealing the intricate details of nature\'s tiny wonders.' },
    { id: 'plankton', title: 'Ocean Plankton', desc: 'Microscopic organisms that sustain the planet\'s aquatic ecosystems.' },
    { id: 'pollen', title: 'Plant Pollen', desc: 'Geometrical complexity of pollen grains from various plant species.' },
    { id: 'snow', title: 'Snowflakes', desc: 'Unique hexagonal ice structures captured in frozen moments.' },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans" ref={containerRef}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Microscope className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold tracking-tight">MicroCosmos</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium hover:text-cyan-400 transition-colors">Home</a>
                <a href="#gallery" className="px-3 py-2 rounded-md text-sm font-medium hover:text-cyan-400 transition-colors">Gallery</a>
                <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:text-cyan-400 transition-colors">About</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-microcosmos"
          data-strk-bg="[hero-title] [hero-subtitle] macro microscope"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-slate-900/60 z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Unveiling the Invisible
          </h1>
          <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
            Discovery of the breathtaking beauty and complexity within the microscopic world that surrounds us every day.
          </p>
          <a href="#gallery" className="inline-flex items-center px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-lg transition-all transform hover:scale-105">
            Explore the MicroWorld
          </a>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img 
                data-strk-img-id="intro-micro-image"
                data-strk-img="[intro-title] [intro-desc] microscope laboratory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                className="rounded-2xl shadow-2xl"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Microscopic discovery"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-2 mb-4 text-cyan-400">
                <Sparkles className="w-6 h-6" />
                <span className="font-semibold uppercase tracking-widest text-sm">Our Vision</span>
              </div>
              <h2 id="intro-title" className="text-4xl font-bold mb-6 text-slate-50">A New Perspective on Reality</h2>
              <p id="intro-desc" className="text-lg text-slate-400 leading-relaxed">
                MicroCosmos is dedicated to bridging the gap between our perception and the reality of the small. 
                Everything from the air we breathe to the materials we touch contains a hidden world of magnificent 
                architecture and vibrant life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 id="gallery-title" className="text-4xl font-bold mb-4">Capturing Tiny Wonders</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-500 transition-all">
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    data-strk-img-id={`gallery-img-${item.id}`}
                    data-strk-img={`microscope [gallery-title-${item.id}] [gallery-desc-${item.id}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.title}
                  />
                </div>
                <div className="p-6">
                  <h3 id={`gallery-title-${item.id}`} className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{item.title}</h3>
                  <p id={`gallery-desc-${item.id}`} className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 id="feature-title" className="text-4xl font-bold mb-8">The Art of Micro-Photography</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center border border-cyan-800/50">
                    <Camera className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Precision Optics</h4>
                    <p className="text-slate-400">Utilizing high-end microscopic lenses to capture sharp, detailed images of subjects invisible to the naked eye.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center border border-cyan-800/50">
                    <Sparkles className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Illumination Techniques</h4>
                    <p className="text-slate-400">Mastery of darkfield and cross-polarized light to highlight structures and produce vivid, artistic results.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center border border-cyan-800/50">
                    <ImageIcon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Focus Stacking</h4>
                    <p className="text-slate-400">Combining hundreds of images at different focal planes to achieve an incredible depth of field at high magnification.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700">
                  <img 
                    data-strk-img-id="feature-micro-setup"
                    data-strk-img="professional microscope setup lab camera"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Microscope setup"
                  />
               </div>
               <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl z-0" />
               <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-slate-900 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Microscope className="w-8 h-8 text-cyan-500" />
            <span className="text-2xl font-bold text-slate-200 tracking-tight">MicroCosmos</span>
          </div>
          <p className="max-w-2xl mx-auto mb-10 leading-relaxed text-sm">
            Exploring the infinite complexity of the microscopic universe. Join us in our journey of discovery 
            as we document the building blocks of life and nature.
          </p>
          <div className="flex justify-center gap-6 mb-10">
            <a href="#" className="hover:text-cyan-400 transition-colors"><Info className="w-6 h-6" /></a>
          </div>
          <div className="text-xs font-medium uppercase tracking-widest text-slate-600">
            © {new Date().getFullYear()} MicroCosmos Project. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MicroCosmos
