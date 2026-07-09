import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const facts = [
  {
    id: 'fact-1',
    title: 'Bacterial Communication',
    content: 'Bacteria can "talk" to each other through a process called quorum sensing. They release chemical signals that allow them to coordinate behavior, such as forming biofilms or launching synchronized attacks on hosts.',
    category: 'Communication',
    titleId: 'fact-1-title',
    descId: 'fact-1-desc',
  },
  {
    id: 'fact-2',
    title: 'The Human Microbiome',
    content: 'Your body contains roughly as many microbial cells as human cells. These tiny residents help digest food, produce vitamins, and protect against harmful pathogens. We are walking ecosystems!',
    category: 'Human Biology',
    titleId: 'fact-2-title',
    descId: 'fact-2-desc',
  },
  {
    id: 'fact-3',
    title: 'Diatoms: Living Glass',
    content: 'Diatoms are single-celled algae that build intricate glass houses called frustules. These silica structures are so beautiful that Victorian scientists collected them and arranged them into patterns as art.',
    category: 'Art & Science',
    titleId: 'fact-3-title',
    descId: 'fact-3-desc',
  },
  {
    id: 'fact-4',
    title: 'Tardigrade Survival',
    content: 'Tardigrades, or water bears, can survive the vacuum of space, extreme radiation, temperatures from -272°C to 150°C, and pressures six times greater than the deepest ocean. They are Earth\'s ultimate survivors.',
    category: 'Extremophiles',
    titleId: 'fact-4-title',
    descId: 'fact-4-desc',
  },
  {
    id: 'fact-5',
    title: 'Bioluminescence',
    content: 'Many marine microorganisms produce their own light through bioluminescence. Dinoflagellates create the magical blue glow seen in ocean waves at night, turning beaches into starfields.',
    category: 'Light & Color',
    titleId: 'fact-5-title',
    descId: 'fact-5-desc',
  },
]

export default function FactsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextFact = () => {
    setActiveIndex((prev) => (prev + 1) % facts.length)
  }

  const prevFact = () => {
    setActiveIndex((prev) => (prev - 1 + facts.length) % facts.length)
  }

  const activeFact = facts[activeIndex]

  return (
    <section id="facts" className="relative py-20 lg:py-32 bg-nebula-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          data-strk-img-id="facts-bg-micro-pattern-8f2a9c"
          data-strk-img="microscopic pattern abstract cells bacteria"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1920"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a2e] via-[#16213e]/95 to-[#0a192f]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-nebula-400/10 border border-nebula-400/20 text-nebula-400 text-sm font-medium mb-4">
            Fascinating Facts
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Mind-Blowing Microbiology
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover the astonishing secrets of the microscopic world that will change 
            how you see life on Earth.
          </p>
        </div>

        {/* Facts Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Fact Card */}
            <div className="p-8 lg:p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-nebula-400/50" />
              </div>

              {/* Category */}
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full bg-nebula-400/10 text-nebula-400 text-sm font-medium">
                  {activeFact.category}
                </span>
              </div>

              {/* Title */}
              <h3 id={activeFact.titleId} className="text-2xl lg:text-3xl font-heading font-bold text-white mb-4">
                {activeFact.title}
              </h3>

              {/* Content */}
              <p id={activeFact.descId} className="text-lg text-gray-300 leading-relaxed">
                {activeFact.content}
              </p>

              {/* Image */}
              <div className="mt-8 rounded-xl overflow-hidden">
                <img
                  data-strk-img-id={`fact-${activeFact.id}-img`}
                  data-strk-img={`[${activeFact.descId}] [${activeFact.titleId}] microscopic electron microscope`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={activeFact.title}
                  className="w-full h-48 lg:h-64 object-cover"
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevFact}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                aria-label="Previous fact"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {facts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === activeIndex
                        ? 'bg-nebula-400 w-8'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to fact ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextFact}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                aria-label="Next fact"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Facts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {facts.slice(0, 3).map((fact, index) => (
            <div
              key={fact.id}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-nebula-400/10 flex items-center justify-center">
                  <span className="text-nebula-400 font-bold">{index + 1}</span>
                </div>
                <span className="text-sm text-nebula-400">{fact.category}</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{fact.title}</h4>
              <p className="text-sm text-gray-400 line-clamp-2">{fact.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}