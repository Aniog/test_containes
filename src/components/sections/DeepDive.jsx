import React from 'react'
import { Microscope, ArrowRight } from 'lucide-react'

export default function DeepDive() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-border/50">
            <img
              alt="Atomic Structure"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
              data-strk-img-id="deepdive-main-img"
              data-strk-img="[deepdive-desc] [deepdive-title] atomic structure particle"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
          </div>
          
          {/* Decorative floating element */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-card border border-border rounded-full p-6 flex flex-col justify-center shadow-xl z-10 hidden md:flex animate-[spin_10s_linear_infinite]">
             <div className="w-full h-full rounded-full border-4 border-dashed border-primary/40 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
               <Microscope className="w-12 h-12 text-primary" />
             </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Zoom Level: 1,000,000x
          </div>
          
          <h2 id="deepdive-title" className="text-4xl md:text-5xl font-bold leading-tight">
            Journey to the Atomic Scale
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p id="deepdive-desc">
              When we zoom past cells and viruses, we encounter the fundamental particles of matter. Here, the rules of reality change, and we enter the realm of quantum wonders.
            </p>
            <p>
              Electron microscopes and scanning tunneling microscopes allow us to actually see individual atoms, visualizing the very building blocks of the universe assembling into molecules and complex structures.
            </p>
          </div>

          <div className="pt-4">
            <button className="flex items-center gap-3 text-primary hover:text-primary/80 font-semibold text-lg transition-colors group">
              Read the full research paper
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
