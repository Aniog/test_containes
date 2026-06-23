import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Microscope, Play, ArrowRight, Dna, Activity } from 'lucide-react'
import './App.css'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef} className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-teal-500/30 selection:text-teal-200">
      {/* Navigation */}
      <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center bg-zinc-950/50 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <Microscope className="w-6 h-6 text-lime-500" />
          <span className="font-bold text-xl tracking-tight text-white">MicroCosmos</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#discover" className="text-zinc-400 hover:text-white transition-colors">Discover</a>
          <a href="#cellular" className="text-zinc-400 hover:text-white transition-colors">Cellular</a>
          <a href="#organisms" className="text-zinc-400 hover:text-white transition-colors">Organisms</a>
        </div>
        <button className="bg-teal-700 hover:bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 border border-teal-500/30 shadow-lg shadow-teal-900/20">
          Explore <ArrowRight className="w-4 h-4" />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-zinc-950 after:via-zinc-950/40 after:to-zinc-950/80"
          data-strk-bg-id="hero-bg-micro"
          data-strk-bg="[hero-title] [hero-subtitle] macro photography, colorful biology"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex items-center h-full">
          <div className="max-w-3xl pt-20">
            <p id="hero-kicker" className="text-lime-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 inline-block drop-shadow-md bg-zinc-950/20 px-3 py-1 rounded-sm backdrop-blur-sm">
              The Unseen World
            </p>
            <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6 text-shadow-lg">
              Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-lime-500 drop-shadow-sm">Invisible</span> Universe Inside Us
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl font-light text-shadow-md leading-relaxed bg-zinc-950/30 p-2 rounded backdrop-blur-sm">
              Journey into the microscopic realms that shape our existence. Discover the vibrant, bustling biomes that exist right beneath our fingertips.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-white text-zinc-950 hover:bg-zinc-200 px-8 py-3.5 rounded-full font-bold transition-all shadow-xl shadow-white/10 flex items-center gap-2">
                Start Exploring
              </button>
              <button className="bg-zinc-900/60 hover:bg-zinc-800/80 backdrop-blur-md border border-white/10 text-white px-8 py-3.5 rounded-full font-bold transition-all flex items-center gap-3">
                <Play className="w-4 h-4 fill-white text-white" /> Watch Documentaries
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles - Masonry/Grid Feel */}
      <section id="discover" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <p className="text-teal-500 font-bold tracking-widest uppercase text-sm mb-2 flex items-center gap-2">
              <Activity className="w-4 h-4" /> Discoveries
            </p>
            <h2 id="discoveries-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight">Recent Visualizations</h2>
          </div>
          <p id="discoveries-subtitle" className="text-zinc-400 max-w-md mt-4 md:mt-0 font-light hidden md:block">
             Breakthrough imaging technologies allow us to witness cellular processes with unprecedented clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Large */}
          <article className="group relative rounded-2xl overflow-hidden md:col-span-2 lg:col-span-2 aspect-video bg-zinc-900 border border-white/5 shadow-2xl">
            <img 
              data-strk-img-id="feat-1"
              data-strk-img="[feat-1-title] [feat-1-desc] microscopy, glowing cells"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Neural Pathways"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="text-xs font-bold uppercase tracking-wider text-lime-400 mb-3 block">Neural Biology</span>
              <h3 id="feat-1-title" className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">Mapping the Synaptic Network</h3>
              <p id="feat-1-desc" className="text-zinc-300 font-light max-w-xl text-shadow-md">Fluorescent tagging reveals the complex webs of communication between neurons in real-time.</p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="group relative rounded-2xl overflow-hidden aspect-square md:aspect-auto bg-zinc-900 border border-white/5 shadow-2xl">
            <img 
              data-strk-img-id="feat-2"
              data-strk-img="[feat-2-title] [feat-2-desc] bacteria, scanning electron microscope"
              data-strk-img-ratio="1x1"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Bacterial Clusters"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-2 block">Microbiology</span>
              <h3 id="feat-2-title" className="text-xl font-bold text-white mb-1">Extremophile Colonies</h3>
              <p id="feat-2-desc" className="text-zinc-300 font-light text-sm line-clamp-2">Life thriving in conditions previously thought impossible.</p>
            </div>
          </article>

           {/* Card 3 */}
           <article className="group relative rounded-2xl overflow-hidden aspect-square bg-zinc-900 border border-white/5 shadow-2xl">
            <img 
              data-strk-img-id="feat-3"
              data-strk-img="[feat-3-title] [feat-3-desc] plant cell wall, chloroplasts"
              data-strk-img-ratio="1x1"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Plant Cells"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="text-xs font-bold uppercase tracking-wider text-lime-400 mb-2 block">Botany</span>
              <h3 id="feat-3-title" className="text-xl font-bold text-white mb-1">Chloroplast Engines</h3>
              <p id="feat-3-desc" className="text-zinc-300 font-light text-sm line-clamp-2">The microscopic factories powering life on Earth.</p>
            </div>
          </article>

          {/* Card 4 - Horizontal spanning */}
          <article className="group relative rounded-2xl overflow-hidden md:col-span-2 aspect-[2/1] md:aspect-auto md:h-64 bg-zinc-900 border border-white/5 shadow-2xl">
            <img 
              data-strk-img-id="feat-4"
              data-strk-img="[feat-4-title] [feat-4-desc] blood cells, macro"
              data-strk-img-ratio="2x1"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Erythrocytes"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden pointer-events-none" />
            <div className="absolute inset-y-0 left-0 p-6 md:p-8 flex flex-col justify-end md:justify-center max-w-lg w-full">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 md:text-teal-400 mb-2 block md:mb-3">Hematology</span>
              <h3 id="feat-4-title" className="text-xl md:text-2xl font-bold text-white mb-2">The Oxygen Process</h3>
              <p id="feat-4-desc" className="text-zinc-300 font-light text-sm md:text-base text-shadow-sm">Millions of red blood cells rushing through a capillary network.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Focus Section */}
      <section id="cellular" className="py-24 relative overflow-hidden bg-zinc-900/50 border-y border-white/5">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-teal-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-lime-600/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1 flex gap-4 pr-0 lg:pr-10">
            <div className="flex flex-col gap-4 mt-8 flex-1">
               <div className="rounded-2xl overflow-hidden relative aspect-[3/4] shadow-2xl border border-white/10 group">
                  <img 
                    data-strk-img-id="focus-1"
                    data-strk-img="[focus-title] dna structure, microscopic, glowing"
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="DNA Structure"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-teal-900/20 mix-blend-overlay"></div>
               </div>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <div className="rounded-2xl overflow-hidden relative aspect-square shadow-2xl border border-white/10 group">
                  <img 
                    data-strk-img-id="focus-2"
                    data-strk-img="[focus-title] virus replication, dark macro"
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Viral replication"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
              </div>
              <div className="rounded-2xl overflow-hidden relative aspect-square shadow-2xl border border-white/10 group">
                  <img 
                    data-strk-img-id="focus-3"
                    data-strk-img="[focus-title] paramecium, microscopy"
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Microorganism"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 id="focus-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Life at the <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-teal-500">Molecular Level</span>
            </h2>
            <p id="focus-desc" className="text-zinc-400 text-lg leading-relaxed font-light">
              Gaze upon the intricate machinery of life. From the elegant double helix of DNA to the sprawling cities of bacterial colonies, the microcosm is a place of ceaseless activity and breathtaking beauty.
            </p>
            
            <ul className="space-y-4 pt-4">
              {[
                { title: 'Genetic Architecture', desc: 'Visualizing the building blocks of heredity.' },
                { title: 'Cellular Ecology', desc: 'How single-celled organisms interact in dense communities.' },
                { title: 'Pathogen Mechanics', desc: 'Understanding the vectors of microscopic invasion.' }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-800/50 transition-colors border border-transparent hover:border-zinc-700/50 cursor-default">
                  <div className="bg-teal-900/30 p-3 rounded-lg text-teal-400 border border-teal-500/20">
                    <Dna className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-zinc-400 font-light">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section id="organisms" className="py-24 px-6 max-w-[1600px] mx-auto">
         <div className="text-center mb-16">
            <h2 id="gallery-title" className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">The Micro Gallery</h2>
            <p id="gallery-subtitle" className="text-zinc-400 max-w-2xl mx-auto font-light">A curated collection of the most stunning microscopic imagery captured this year.</p>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[150px] md:auto-rows-[250px]">
            {/* Gallery Item 1 */}
            <div className="relative group rounded-xl overflow-hidden col-span-2 row-span-2">
              <img 
                data-strk-img-id="gal-1"
                data-strk-img="[gallery-title] vibrant microscopic fungi"
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Gallery Micro 1"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white font-bold tracking-wider uppercase text-sm border border-white/20 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm">View Details</span>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="relative group rounded-xl overflow-hidden">
               <img 
                data-strk-img-id="gal-2"
                data-strk-img="[gallery-title] pollen grains microscope"
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Gallery Micro 2"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Gallery Item 3 */}
            <div className="relative group rounded-xl overflow-hidden col-span-1 row-span-2">
               <img 
                data-strk-img-id="gal-3"
                data-strk-img="[gallery-title] microscopic crystal structure"
                data-strk-img-ratio="1x2"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Gallery Micro 3"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Gallery Item 4 */}
            <div className="relative group rounded-xl overflow-hidden col-span-1">
               <img 
                data-strk-img-id="gal-4"
                data-strk-img="[gallery-title] amoeba under microscope"
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Gallery Micro 4"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

             {/* Gallery Item 5 */}
             <div className="relative group rounded-xl overflow-hidden col-span-2">
               <img 
                data-strk-img-id="gal-5"
                data-strk-img="[gallery-title] deep ocean microscopic life"
                data-strk-img-ratio="2x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Gallery Micro 5"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-zinc-950 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-2">
            <Microscope className="w-5 h-5 text-lime-500" />
            <span className="font-bold text-lg text-white tracking-tight">MicroCosmos</span>
          </div>
          <div className="flex text-sm text-zinc-500 gap-6">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Exhibitions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
          <p className="text-zinc-500 text-sm">© 2026 MicroCosmos Visuals. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

export default App

