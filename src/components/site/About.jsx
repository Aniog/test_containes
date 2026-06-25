import { Atom, Droplets, Leaf, Bug } from 'lucide-react'

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const stats = [
  { icon: Atom, label: 'Known species', value: '~1.7M', sub: 'cataloged microbes' },
  { icon: Droplets, label: 'In a drop of pond water', value: '50K+', sub: 'living organisms' },
  { icon: Leaf, label: 'On a single leaf', value: '1B', sub: 'bacterial cells' },
  { icon: Bug, label: 'In your gut', value: '38T', sub: 'microbial cells' },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-teal-300">About the project</span>
          <h2 id="about-title" className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-50">
            A photographic journey through the invisible world
          </h2>
          <p id="about-subtitle" className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed">
            MicroCosmos is a visual exploration of the organisms that live just beyond our senses.
            Through optical, fluorescence and scanning electron microscopy, we capture the alien
            geometry, vivid pigments and surprising behaviors of the smallest residents of our planet.
          </p>
          <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed">
            From the geometric lattice of a diatom to the iridescent flutter of a ciliate, every image
            is a reminder: the universe is not only above us, it is within us, around us, and under
            every step we take.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-5"
                >
                  <Icon className="h-5 w-5 text-teal-300" />
                  <div className="mt-3 text-2xl font-bold text-slate-50">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 mt-1">{stat.label}</div>
                  <div className="text-sm text-slate-300 mt-1">{stat.sub}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Decorative image collage */}
        <div className="grid grid-cols-6 grid-rows-6 gap-3 aspect-square">
          <div className="col-span-4 row-span-4 relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            <img
              alt="Microscope view of cells"
              src={PLACEHOLDER}
              className="absolute inset-0 h-full w-full object-cover"
              data-strk-img-id="about-main-cells-9f1a2b"
              data-strk-img="[about-subtitle] [about-title] fluorescence microscopy cells"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-5 relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            <img
              alt="Diatom microorganism"
              src={PLACEHOLDER}
              className="absolute inset-0 h-full w-full object-cover"
              data-strk-img-id="about-thumb-diatom-3c4d5e"
              data-strk-img="diatom radial symmetry microscope"
              data-strk-img-ratio="1x1"
              data-strk-img-width="400"
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-5 row-start-3 relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            <img
              alt="Bacterial colony"
              src={PLACEHOLDER}
              className="absolute inset-0 h-full w-full object-cover"
              data-strk-img-id="about-thumb-bacteria-6f7g8h"
              data-strk-img="colorful bacteria colony agar"
              data-strk-img-ratio="1x1"
              data-strk-img-width="400"
            />
          </div>
          <div className="col-span-3 row-span-2 row-start-5 relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            <img
              alt="Algae chains"
              src={PLACEHOLDER}
              className="absolute inset-0 h-full w-full object-cover"
              data-strk-img-id="about-thumb-algae-9i0j1k"
              data-strk-img="green algae spirogyra microscope"
              data-strk-img-ratio="3x2"
              data-strk-img-width="500"
            />
          </div>
          <div className="col-span-3 row-span-2 col-start-4 row-start-5 relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            <img
              alt="Pollen grain SEM"
              src={PLACEHOLDER}
              className="absolute inset-0 h-full w-full object-cover"
              data-strk-img-id="about-thumb-pollen-2l3m4n"
              data-strk-img="pollen grain scanning electron microscope"
              data-strk-img-ratio="3x2"
              data-strk-img-width="500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
