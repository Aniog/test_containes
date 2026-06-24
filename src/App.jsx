import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Microscope, Dna, FlaskConical, Atom, Eye, Sparkles } from 'lucide-react'
import './App.css'

const features = [
  {
    id: 'bacteria',
    icon: Microscope,
    title: 'Bacteria & Archaea',
    description: 'Discover the oldest life forms on Earth — single-celled organisms that thrive in every environment, from deep-sea vents to the human gut.',
    imgId: 'feature-bacteria-a3f1c9',
    titleId: 'feature-bacteria-title',
    descId: 'feature-bacteria-desc',
  },
  {
    id: 'viruses',
    icon: Dna,
    title: 'Viruses & Phages',
    description: 'Explore the boundary between living and non-living — molecular machines that hijack cells and drive evolution across all domains of life.',
    imgId: 'feature-viruses-b7e2d4',
    titleId: 'feature-viruses-title',
    descId: 'feature-viruses-desc',
  },
  {
    id: 'protists',
    icon: FlaskConical,
    title: 'Protists & Algae',
    description: 'Witness the dazzling diversity of eukaryotic microbes — from diatoms with glass shells to amoebas that shape-shift to engulf prey.',
    imgId: 'feature-protists-c4d8e1',
    titleId: 'feature-protists-title',
    descId: 'feature-protists-desc',
  },
  {
    id: 'fungi',
    icon: Atom,
    title: 'Microscopic Fungi',
    description: 'Uncover the hidden networks of yeasts and molds — organisms that decompose, ferment, and connect entire ecosystems underground.',
    imgId: 'feature-fungi-d9a5f2',
    titleId: 'feature-fungi-title',
    descId: 'feature-fungi-desc',
  },
]

const stats = [
  { value: '10³⁰', label: 'Bacteria on Earth' },
  { value: '10³¹', label: 'Viruses in the Ocean' },
  { value: '99%', label: 'Unseen by Naked Eye' },
  { value: '3.8B', label: 'Years of Evolution' },
]

const discoveries = [
  {
    id: 'tardigrade',
    title: 'Tardigrades',
    subtitle: 'The Indestructible',
    description: 'These microscopic animals survive extreme temperatures, radiation, and the vacuum of space. They can enter a state of cryptobiosis, essentially pausing life itself.',
    imgId: 'disc-tardigrade-e2f7a1',
    titleId: 'disc-tardigrade-title',
    descId: 'disc-tardigrade-desc',
  },
  {
    id: 'diatom',
    title: 'Diatoms',
    subtitle: 'Glass Architects',
    description: 'Single-celled algae that build intricate silica shells. They produce 20% of Earth\'s oxygen and form the base of aquatic food webs worldwide.',
    imgId: 'disc-diatom-f8b3c2',
    titleId: 'disc-diatom-title',
    descId: 'disc-diatom-desc',
  },
  {
    id: 'extremophile',
    title: 'Extremophiles',
    subtitle: 'Life at the Edge',
    description: 'Organisms thriving in boiling hot springs, acidic lakes, and deep-sea pressure. They redefine what we consider habitable environments.',
    imgId: 'disc-extremophile-g1d4e5',
    titleId: 'disc-extremophile-title',
    descId: 'disc-extremophile-desc',
  },
]

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-cosmos-bg text-cosmos-text">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cosmos-bg/80 backdrop-blur-xl border-b border-cosmos-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-cosmos-primary" />
            <span className="font-heading text-xl font-bold text-cosmos-text">MicroCosmos</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#explore" className="text-cosmos-muted hover:text-cosmos-primary transition-colors duration-300 text-sm font-medium">Explore</a>
            <a href="#discoveries" className="text-cosmos-muted hover:text-cosmos-primary transition-colors duration-300 text-sm font-medium">Discoveries</a>
            <a href="#about" className="text-cosmos-muted hover:text-cosmos-primary transition-colors duration-300 text-sm font-medium">About</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08)_0%,transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmos-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cosmos-primary/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cosmos-border bg-cosmos-surface/50 mb-8">
            <Eye className="w-4 h-4 text-cosmos-primary" />
            <span className="text-sm text-cosmos-muted">Exploring the invisible world</span>
          </div>

          <h1 id="hero-title" className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              MicroCosmos
            </span>
          </h1>

          <p id="hero-subtitle" className="text-lg md:text-xl text-cosmos-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Journey into the hidden universe that exists in every drop of water, every grain of soil, and within your own body. A world of extraordinary beauty and complexity awaits.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#explore"
              className="px-8 py-3 rounded-full bg-cosmos-primary text-cosmos-bg font-semibold text-sm hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              Begin Exploration
            </a>
            <a
              href="#discoveries"
              className="px-8 py-3 rounded-full border border-cosmos-border text-cosmos-text font-semibold text-sm hover:border-cosmos-primary/50 hover:bg-cosmos-surface/50 transition-all duration-300"
            >
              View Discoveries
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-cosmos-muted/50 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-cosmos-primary/70" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-cosmos-border bg-cosmos-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-cosmos-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-cosmos-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section id="explore" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="explore-title" className="font-heading text-3xl md:text-4xl font-bold text-cosmos-text mb-4">
              Explore the Microscopic Kingdoms
            </h2>
            <p id="explore-subtitle" className="text-cosmos-muted max-w-2xl mx-auto text-lg">
              From bacteria to fungi, the microbial world contains more diversity than all visible life combined.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.id}
                  className="group relative border border-cosmos-border rounded-2xl bg-cosmos-surface/50 p-6 md:p-8 hover:border-cosmos-primary/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cosmos-primary/10 flex items-center justify-center group-hover:bg-cosmos-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-cosmos-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 id={feature.titleId} className="font-heading text-xl font-semibold text-cosmos-text mb-2">
                        {feature.title}
                      </h3>
                      <p id={feature.descId} className="text-cosmos-muted leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-xl overflow-hidden">
                    <img
                      alt={feature.title}
                      data-strk-img-id={feature.imgId}
                      data-strk-img={`[${feature.descId}] [${feature.titleId}] [explore-subtitle] [explore-title]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Discoveries Section */}
      <section id="discoveries" className="py-20 md:py-32 bg-cosmos-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="discoveries-title" className="font-heading text-3xl md:text-4xl font-bold text-cosmos-text mb-4">
              Remarkable Discoveries
            </h2>
            <p id="discoveries-subtitle" className="text-cosmos-muted max-w-2xl mx-auto text-lg">
              Meet the extraordinary organisms that challenge our understanding of life itself.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {discoveries.map((item) => (
              <div
                key={item.id}
                className="group border border-cosmos-border rounded-2xl bg-cosmos-bg overflow-hidden hover:border-cosmos-secondary/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    alt={item.title}
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}] [discoveries-subtitle]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-cosmos-secondary uppercase tracking-wider">
                    {item.subtitle}
                  </span>
                  <h3 id={item.titleId} className="font-heading text-xl font-semibold text-cosmos-text mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p id={item.descId} className="text-cosmos-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / CTA Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="border border-cosmos-border rounded-2xl bg-cosmos-surface/50 p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.06)_0%,transparent_60%)]" />
            <div className="relative z-10">
              <Atom className="w-12 h-12 text-cosmos-secondary mx-auto mb-6" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-cosmos-text mb-4">
                The Universe Within
              </h2>
              <p className="text-cosmos-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                Every human body hosts trillions of microorganisms — more microbial cells than human cells. 
                They help us digest food, fight disease, and even influence our mood. 
                Understanding the microcosmos is understanding ourselves.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#explore"
                  className="px-8 py-3 rounded-full bg-cosmos-secondary text-white font-semibold text-sm hover:bg-violet-400 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                >
                  Start Your Journey
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-cosmos-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cosmos-primary" />
              <span className="font-heading text-lg font-bold text-cosmos-text">MicroCosmos</span>
            </div>
            <p className="text-cosmos-dim text-sm">
              © 2026 MicroCosmos. Exploring the invisible world.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
