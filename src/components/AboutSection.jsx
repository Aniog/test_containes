import { Microscope, Eye, Layers, Zap } from 'lucide-react'

const features = [
  {
    icon: Microscope,
    title: 'Microscopic Wonders',
    description: 'Explore organisms too small for the human eye, yet essential for life on Earth.',
  },
  {
    icon: Eye,
    title: 'Invisible Beauty',
    description: 'Discover the stunning geometric patterns and colors found in nature at the smallest scale.',
  },
  {
    icon: Layers,
    title: 'Complex Systems',
    description: 'Learn how single-celled organisms form intricate ecosystems and colonies.',
  },
  {
    icon: Zap,
    title: 'Vital Forces',
    description: 'Understand the microscopic processes that power all living things.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 lg:py-32 bg-cosmic-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-micro-400/10 border border-micro-400/20 text-micro-400 text-sm font-medium mb-4">
            About MicroCosmos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            The Universe Within
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Every drop of water contains a universe of life. MicroCosmos invites you to explore 
            the hidden realms where bacteria, algae, and protists create worlds as complex as 
            any galaxy.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                data-strk-img-id="about-microscope-lab-9e2f7a"
                data-strk-img="[about-title] [about-subtitle] microscope laboratory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Microscopic organisms under microscope"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 px-6 py-3 bg-micro-500 rounded-xl shadow-lg shadow-micro-500/30">
              <span className="text-white font-semibold text-sm">1000x Magnification</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 id="about-title" className="text-2xl lg:text-3xl font-heading font-bold text-white mb-4">
              Exploring Life at Its Smallest
            </h3>
            <p id="about-subtitle" className="text-gray-400 mb-6 leading-relaxed">
              The microscopic world is home to an astonishing diversity of life forms. 
              From the elegant spiral of bacteria to the intricate shells of diatoms, 
              these organisms have evolved over billions of years into perfectly adapted 
              machines of survival.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Through advanced microscopy techniques like electron microscopy and 
              fluorescence imaging, scientists have unveiled a world of breathtaking 
              beauty that exists just beyond our perception. Each image in this gallery 
              represents a journey into the extraordinary.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-micro-400">10M+</div>
                <div className="text-sm text-gray-400">Species Discovered</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-cosmos-400">3.5B</div>
                <div className="text-sm text-gray-400">Years of Evolution</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-micro-400/10 flex items-center justify-center mb-4 group-hover:bg-micro-400/20 transition-colors">
                <feature.icon className="w-6 h-6 text-micro-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}