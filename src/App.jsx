import React, { useEffect, useRef } from 'react'
import { Microscope, Sparkles, Droplets, Leaf, Fingerprint } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Microscope className="w-6 h-6 text-cyan-400" />
            <span className="font-bold text-xl tracking-tight">MicroCosmos</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#gallery" className="hover:text-cyan-400 transition-colors">Wonders</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
              Explore More
            </Button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0 opacity-40"
            data-strk-bg-id="hero-micro-bg"
            data-strk-bg="microscopic universe cell structures abstract nebula colors"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 z-1" />
          
          <div className="container relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 id="hero-title" className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-tight">
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">MICRO</span> COSMOS
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Journey into the hidden universe that exists beneath the lens of a microscope. Where complexity meets infinite beauty in the smallest of spaces.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white px-10 h-14 text-lg">
                Discover the Unseen
              </Button>
              <Button size="lg" variant="ghost" className="text-slate-300 hover:text-white h-14">
                View Project Details
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section id="features" className="py-24 bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Sparkles, title: "Cellular Art", desc: "Witness the biological masterpieces hidden within every living organism." },
                { icon: Droplets, title: "Crystal Worlds", desc: "Explore the geometric perfection of chemical compounds at a molecular level." },
                { icon: Leaf, title: "Botanical Detail", desc: "See the vascular structures and intricate patterns of the plant kingdom." },
                { icon: Fingerprint, title: "Invisible Nano", desc: "Discover the technology and textures at the edge of human imagination." }
              ].map((feature, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 bg-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="gallery-title" className="text-4xl md:text-5xl font-bold mb-4">Microscopic Masterpieces</h2>
              <p id="gallery-subtitle" className="text-slate-400 max-w-2xl mx-auto">Explore a curated collection of some of the most stunning sights from the MicroCosmos.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { id: "cell-div", title: "Cell Division", desc: "The miracle of mitosis captured in high-contrast fluorescence.", ratio: "4x3" },
                { id: "snow-flake", title: "Snowflake Symmetry", desc: "Individual water molecules arranged in perfect hexagonal crystals.", ratio: "1x1" },
                { id: "butterfly-wing", title: "Butterfly Scale", desc: "Iridescent chitin plates that create the vibrant colors of nature.", ratio: "4x3" },
                { id: "pollen-grain", title: "Pollen Grains", desc: "Diverse geometric shapes of plant reproductive structures.", ratio: "3x4" },
                { id: "sand-micro", title: "Grains of Sand", desc: "Miniature geological wonders from a tropical shoreline.", ratio: "4x3" },
                { id: "nerve-synapse", title: "Neural Network", desc: "The complex electrical web of human consciousness at the synapse level.", ratio: "16x9" }
              ].map((item, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700">
                  <div className="aspect-[4/3] relative">
                    <img 
                      alt={item.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      data-strk-img-id={`gallery-img-${item.id}`}
                      data-strk-img={`[gallery-item-desc-${item.id}] [gallery-item-title-${item.id}] microscopic`}
                      data-strk-img-ratio={item.ratio}
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 id={`gallery-item-title-${item.id}`} className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p id={`gallery-item-desc-${item.id}`} className="text-slate-300 text-sm line-clamp-2">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Big Visual Section */}
        <section className="relative py-48 overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            data-strk-bg-id="mid-visual-bg"
            data-strk-bg="abstract microscopic biological textures deep space bioluminescence"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
          <div className="absolute inset-0 bg-slate-950/60 z-1" />
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h2 id="mid-title" className="text-4xl md:text-7xl font-black mb-8 tracking-tighter italic">"A UNIVERSE IN EVERY ATOM"</h2>
            <p id="mid-subtitle" className="text-xl md:text-2xl text-cyan-300 font-medium">Revealing the invisible connections of life.</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-slate-950">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden border-2 border-slate-800">
                    <img 
                      alt="Microscope photography"
                      className="object-cover w-full h-full"
                      data-strk-img-id="about-micro-img"
                      data-strk-img="scientist using modern advanced microscope dark room blue light professional laboratory"
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500 rounded-3xl -z-10 blur-2xl opacity-30" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
                  <Sparkles className="w-3 h-3" />
                  Our Mission
                </div>
                <h2 id="about-title" className="text-4xl font-bold mb-6 leading-tight">Documenting the Frontiers of the Small</h2>
                <p id="about-desc" className="text-slate-400 text-lg leading-relaxed mb-8">
                  MicroCosmos is a visual exploration initiative dedicated to bringing the beauty of electron microscopy and high-magnification photography to the public. 
                  We believe that understanding the intricate details of our physical world fosters a deeper appreciation for the complexity of existence.
                </p>
                <div className="space-y-4">
                  {[
                    "Unparalleled detail through SEM technology",
                    "Educational resources for biological science",
                    "Artistic interpretation of microscopic data"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-900 bg-slate-950">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Microscope className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-lg tracking-tight">MicroCosmos</span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 MicroCosmos Exploration Project. Photography from the Microscopic Universe.</p>
        </div>
      </footer>
    </div>
  )
}
