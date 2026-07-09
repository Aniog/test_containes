import './App.css'
import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Microscope, Menu, X, ChevronDown, ArrowRight, Play, Zap, Eye, Dna, Bug, FlaskConical, Globe2 } from 'lucide-react'

// Microorganism data
const microorganisms = [
  {
    id: 'bacteria',
    title: 'Bacteria',
    description: 'Single-celled organisms that thrive in diverse environments, from soil to the human gut.',
    category: 'Prokaryote',
    categoryColor: 'bg-microcosmos-green',
    imgId: 'micro-bacteria-001',
    titleId: 'micro-bacteria-title',
    descId: 'micro-bacteria-desc',
    size: '0.2-10 μm',
    habitat: 'Everywhere',
  },
  {
    id: 'virus',
    title: 'Viruses',
    description: 'Microscopic infectious agents that can only replicate inside the living cells of other organisms.',
    category: 'Acellular',
    categoryColor: 'bg-microcosmos-red',
    imgId: 'micro-virus-002',
    titleId: 'micro-virus-title',
    descId: 'micro-virus-desc',
    size: '20-300 nm',
    habitat: 'Host-dependent',
  },
  {
    id: 'amoeba',
    title: 'Amoeba',
    description: 'Shape-shifting protozoans that move and feed using temporary extensions called pseudopods.',
    category: 'Protozoa',
    categoryColor: 'bg-microcosmos-cyan',
    imgId: 'micro-amoeba-003',
    titleId: 'micro-amoeba-title',
    descId: 'micro-amoeba-desc',
    size: '10-100 μm',
    habitat: 'Freshwater',
  },
  {
    id: 'fungi',
    title: 'Fungi Spores',
    description: 'Microscopic reproductive cells that spread through air and water to colonize new environments.',
    category: 'Fungi',
    categoryColor: 'bg-microcosmos-orange',
    imgId: 'micro-fungi-004',
    titleId: 'micro-fungi-title',
    descId: 'micro-fungi-desc',
    size: '1-100 μm',
    habitat: 'Soil & Organic matter',
  },
  {
    id: 'diatom',
    title: 'Diatoms',
    description: 'Unicellular algae with intricate silica cell walls, forming the base of aquatic food chains.',
    category: 'Algae',
    categoryColor: 'bg-microcosmos-teal',
    imgId: 'micro-diatom-005',
    titleId: 'micro-diatom-title',
    descId: 'micro-diatom-desc',
    size: '2-200 μm',
    habitat: 'Aquatic',
  },
  {
    id: 'tardigrade',
    title: 'Tardigrades',
    description: 'Microscopic water bears known for their extreme survival abilities in harsh conditions.',
    category: 'Micro-animal',
    categoryColor: 'bg-microcosmos-purple',
    imgId: 'micro-tardigrade-006',
    titleId: 'micro-tardigrade-title',
    descId: 'micro-tardigrade-desc',
    size: '0.1-1.5 mm',
    habitat: 'Moss & Lichen',
  },
  {
    id: 'paramecium',
    title: 'Paramecium',
    description: 'Slipper-shaped ciliates covered in hair-like structures for movement and feeding.',
    category: 'Protozoa',
    categoryColor: 'bg-microcosmos-cyan',
    imgId: 'micro-paramecium-007',
    titleId: 'micro-paramecium-title',
    descId: 'micro-paramecium-desc',
    size: '50-350 μm',
    habitat: 'Freshwater',
  },
  {
    id: 'euglena',
    title: 'Euglena',
    description: 'Flagellated organisms that can photosynthesize like plants and move like animals.',
    category: 'Protist',
    categoryColor: 'bg-microcosmos-green',
    imgId: 'micro-euglena-008',
    titleId: 'micro-euglena-title',
    descId: 'micro-euglena-desc',
    size: '15-500 μm',
    habitat: 'Freshwater',
  },
]

// Statistics data
const stats = [
  { value: '10³⁰', label: 'Bacteria on Earth', icon: Bug },
  { value: '100x', label: 'More microbes than stars', icon: Globe2 },
  { value: '99%', label: 'Are harmless or beneficial', icon: Zap },
  { value: '3.5B', label: 'Years of evolution', icon: Dna },
]

function App() {
  const containerRef = useRef(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-microcosmos-navy">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-microcosmos-navy/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button onClick={() => scrollToSection('hero')} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-microcosmos-teal to-microcosmos-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                <Microscope className="w-5 h-5 text-microcosmos-navy" />
              </div>
              <span className="font-space font-bold text-xl text-white">MicroCosmos</span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {['Discover', 'Gallery', 'Science', 'Explore'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white/70 hover:text-microcosmos-teal transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-microcosmos-navy/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {['Discover', 'Gallery', 'Science', 'Explore'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-white/70 hover:text-microcosmos-teal transition-colors font-medium py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-microcosmos-navy via-microcosmos-navy/90 to-microcosmos-dark" />
        
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-40"
          data-strk-bg-id="hero-microscopy-bg"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,170,0.15)_0%,_transparent_60%)]" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-microcosmos-teal/30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-microcosmos-teal/10 border border-microcosmos-teal/30 rounded-full px-4 py-2 mb-8">
            <Microscope className="w-4 h-4 text-microcosmos-teal" />
            <span className="text-microcosmos-teal font-medium text-sm">Explore the Invisible Universe</span>
          </div>
          
          <h1 id="hero-title" className="font-space font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Welcome to the{' '}
            <span className="gradient-text">MicroCosmos</span>
          </h1>
          
          <p id="hero-subtitle" className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            Journey into a world invisible to the naked eye, where trillions of microscopic organisms shape our planet in extraordinary ways.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('gallery')}
              className="group bg-microcosmos-teal hover:bg-microcosmos-teal/90 text-microcosmos-navy font-semibold px-8 py-4 rounded-full flex items-center gap-2 transition-all glow-teal-hover"
            >
              Explore Gallery
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('discover')}
              className="group border-2 border-white/30 hover:border-microcosmos-teal text-white px-8 py-4 rounded-full flex items-center gap-2 transition-all"
            >
              <Play className="w-5 h-5" />
              Watch Introduction
            </button>
          </div>
          
          <button
            onClick={() => scrollToSection('discover')}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-microcosmos-teal/60" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 md:py-20 bg-microcosmos-dark/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 glassmorphism rounded-2xl">
                <stat.icon className="w-8 h-8 text-microcosmos-teal mx-auto mb-4" />
                <div className="font-space font-bold text-3xl md:text-4xl text-white mb-2">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section id="discover" className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(124,58,237,0.1)_0%,_transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-microcosmos-purple/10 border border-microcosmos-purple/30 rounded-full px-4 py-2 mb-6">
                <Eye className="w-4 h-4 text-microcosmos-purple" />
                <span className="text-microcosmos-purple font-medium text-sm">The Hidden World</span>
              </div>
              
              <h2 className="font-space font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                A Universe Beneath{' '}
                <span className="text-microcosmos-teal">Our Feet</span>
              </h2>
              
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Every drop of water, every grain of soil, every breath you take contains millions of microscopic organisms. These tiny life forms are the foundation of all ecosystems on Earth, playing crucial roles in nutrient cycling, decomposition, and even our own health.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: 'Invisible Architects', desc: 'Microbes shape our environment through biogeochemical cycles' },
                  { title: 'Ancient Origins', desc: 'Life on Earth began with single-celled organisms 3.5 billion years ago' },
                  { title: 'Future Frontiers', desc: 'Microbiology is revolutionizing medicine, energy, and environmental science' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-microcosmos-teal mt-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  data-strk-img-id="discover-microscopy-main"
                  data-strk-img="[discover-subtitle] [discover-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Microscopic view of organisms"
                  className="w-full h-auto"
                />
              </div>
              <div id="discover-title" className="sr-only">Microscopic life forms</div>
              <div id="discover-subtitle" className="sr-only">Colorful microscopic organisms under the microscope</div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-microcosmos-dark/90 backdrop-blur-md border border-white/10 rounded-xl p-4 max-w-[200px]">
                <div className="text-microcosmos-teal font-space font-bold text-2xl">1mm</div>
                <div className="text-white/60 text-sm">Average tardigrade size</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative py-20 md:py-28 bg-microcosmos-dark/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,212,170,0.08)_0%,_transparent_60%)]" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-microcosmos-teal/10 border border-microcosmos-teal/30 rounded-full px-4 py-2 mb-6">
              <FlaskConical className="w-4 h-4 text-microcosmos-teal" />
              <span className="text-microcosmos-teal font-medium text-sm">Microorganism Gallery</span>
            </div>
            
            <h2 id="gallery-title" className="font-space font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Meet the{' '}
              <span className="gradient-text">Microscopic Life</span>
            </h2>
            
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Explore a diverse collection of microorganisms, each with unique adaptations and roles in our ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {microorganisms.map((organism) => (
              <div
                key={organism.id}
                className="group glassmorphism rounded-2xl overflow-hidden hover:border-microcosmos-teal/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    data-strk-img-id={organism.imgId}
                    data-strk-img={`[${organism.descId}] [${organism.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={organism.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`${organism.categoryColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                      {organism.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 id={organism.titleId} className="font-space font-semibold text-lg text-white mb-2">
                    {organism.title}
                  </h3>
                  <p id={organism.descId} className="text-white/60 text-sm mb-4 line-clamp-2">
                    {organism.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-white/40">
                    <span>Size: {organism.size}</span>
                    <span>{organism.habitat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section id="science" className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_0%,_transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-microcosmos-blue/10 border border-microcosmos-blue/30 rounded-full px-4 py-2 mb-6">
              <Dna className="w-4 h-4 text-microcosmos-blue" />
              <span className="text-microcosmos-blue font-medium text-sm">The Science</span>
            </div>
            
            <h2 className="font-space font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Why{' '}
              <span className="text-microcosmos-blue">Microbiology</span>{' '}
              Matters
            </h2>
            
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Understanding the microscopic world is key to solving some of humanity's greatest challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Human Health',
                desc: 'Our bodies host trillions of microbes that influence immunity, digestion, and even mood. The human microbiome is revolutionizing medicine.',
                icon: '🏥',
                imageQuery: 'microbiome human health cells',
                imgId: 'science-health-img',
              },
              {
                title: 'Environmental Balance',
                desc: 'Microbes are nature\'s recyclers, breaking down organic matter and cycling nutrients essential for all life on Earth.',
                icon: '🌍',
                imageQuery: 'environmental microbes soil ecosystem',
                imgId: 'science-environment-img',
              },
              {
                title: 'Food Production',
                desc: 'From yogurt to bread, fermentation by microorganisms has been central to human nutrition for thousands of years.',
                icon: '🧀',
                imageQuery: 'fermentation food microbiology',
                imgId: 'science-food-img',
              },
              {
                title: 'Energy Solutions',
                desc: 'Microbial fuel cells and biofuels offer sustainable energy alternatives powered by tiny organisms.',
                icon: '⚡',
                imageQuery: 'microbial energy biofuel cells',
                imgId: 'science-energy-img',
              },
              {
                title: 'Climate Change',
                desc: 'Ocean microbes produce half the world\'s oxygen and absorb massive amounts of CO₂.',
                icon: '🌡️',
                imageQuery: 'ocean phytoplankton microscopic',
                imgId: 'science-climate-img',
              },
              {
                title: 'Biotechnology',
                desc: 'Genetically engineered microbes produce medicines, plastics alternatives, and industrial enzymes.',
                icon: '🧬',
                imageQuery: 'biotechnology DNA microscopic',
                imgId: 'science-biotech-img',
              },
            ].map((item, i) => (
              <div key={i} className="group glassmorphism rounded-2xl overflow-hidden hover:border-microcosmos-blue/30 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    data-strk-img-id={item.imgId}
                    data-strk-img="[science-title]"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-microcosmos-navy/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-4xl">{item.icon}</div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-space font-semibold text-xl text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div id="science-title" className="sr-only">Microbiology science research</div>
        </div>
      </section>

      {/* Explore Section - Full Width Images */}
      <section id="explore" className="relative py-20 md:py-28 bg-microcosmos-dark/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-microcosmos-cyan/10 border border-microcosmos-cyan/30 rounded-full px-4 py-2 mb-6">
              <Globe2 className="w-4 h-4 text-microcosmos-cyan" />
              <span className="text-microcosmos-cyan font-medium text-sm">Visual Exploration</span>
            </div>
            
            <h2 className="font-space font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              The{' '}
              <span className="text-microcosmos-cyan">Beauty</span>{' '}
              of the Microscopic
            </h2>
            
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Stunning imagery reveals the hidden elegance and complexity of life at the smallest scales.
            </p>
          </div>
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { id: 'explore-01', ratio: '1x1', label: 'Fluorescent bacteria' },
              { id: 'explore-02', ratio: '1x1', label: 'Diatom patterns' },
              { id: 'explore-03', ratio: '1x1', label: 'Cell division' },
              { id: 'explore-04', ratio: '1x1', label: 'Virus particles' },
              { id: 'explore-05', ratio: '1x1', label: 'Algae bloom' },
              { id: 'explore-06', ratio: '1x1', label: 'Fungal hyphae' },
              { id: 'explore-07', ratio: '1x1', label: 'Protist movement' },
              { id: 'explore-08', ratio: '1x1', label: 'Bacterial colony' },
              { id: 'explore-09', ratio: '1x1', label: 'Spore formation' },
              { id: 'explore-10', ratio: '1x1', label: 'Microscopic crystals' },
              { id: 'explore-11', ratio: '1x1', label: 'Nematode worms' },
              { id: 'explore-12', ratio: '1x1', label: 'Radiolarian skeleton' },
            ].map((img, i) => (
              <div key={i} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                <img
                  data-strk-img-id={img.id}
                  data-strk-img="[explore-title] microscopic"
                  data-strk-img-ratio={img.ratio}
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-microcosmos-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div id="explore-title" className="sr-only">Microscopic organisms</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-microcosmos-teal/10 via-microcosmos-navy to-microcosmos-purple/10" />
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="relative rounded-2xl overflow-hidden mb-12">
            <img
              data-strk-img-id="cta-microscopy-panorama"
              data-strk-img="[cta-subtitle] [cta-title]"
              data-strk-img-ratio="21x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Panoramic microscopic view"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-microcosmos-navy via-microcosmos-navy/60 to-transparent" />
            <div id="cta-title" className="sr-only">Microscopy visualization</div>
            <div id="cta-subtitle" className="sr-only">Stunning microscopic world panorama</div>
          </div>
          
          <h2 className="font-space font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Ready to{' '}
            <span className="gradient-text">Dive Deeper</span>?
          </h2>
          
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            The microscopic world is waiting to be explored. Start your journey into the fascinating realm of microorganisms today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group bg-microcosmos-teal hover:bg-microcosmos-teal/90 text-microcosmos-navy font-semibold px-8 py-4 rounded-full flex items-center gap-2 transition-all glow-teal">
              Start Exploring
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-microcosmos-dark border-t border-white/10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-microcosmos-teal to-microcosmos-blue flex items-center justify-center">
                  <Microscope className="w-5 h-5 text-microcosmos-navy" />
                </div>
                <span className="font-space font-bold text-xl text-white">MicroCosmos</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Exploring the invisible universe of microorganisms through stunning visuals and scientific discovery.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['Discover', 'Gallery', 'Science', 'Explore'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-white/60 hover:text-microcosmos-teal transition-colors text-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <div className="space-y-2">
                {['Research Papers', 'Educational Materials', 'Microscopy Guides', 'Community Forum'].map((item) => (
                  <span key={item} className="block text-white/60 text-sm cursor-pointer hover:text-microcosmos-teal transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy; 2026 MicroCosmos. All rights reserved.
            </p>
            <p className="text-white/40 text-sm">
              Made with 🔬 for science enthusiasts
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
