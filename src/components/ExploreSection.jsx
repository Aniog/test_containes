import { ArrowRight, BookOpen, Play, Download } from 'lucide-react'

const exploreItems = [
  {
    id: 'explore-1',
    title: 'Virtual Microscope',
    description: 'Explore specimens in stunning detail with our interactive virtual microscope simulator.',
    icon: Play,
    color: 'micro',
    titleId: 'explore-1-title',
    descId: 'explore-1-desc',
  },
  {
    id: 'explore-2',
    title: 'Research Papers',
    description: 'Access the latest microbiology research and discoveries from leading scientists worldwide.',
    icon: BookOpen,
    color: 'cosmos',
    titleId: 'explore-2-title',
    descId: 'explore-2-desc',
  },
  {
    id: 'explore-3',
    title: 'Image Collection',
    description: 'Download high-resolution microscopy images for education and personal projects.',
    icon: Download,
    color: 'nebula',
    titleId: 'explore-3-title',
    descId: 'explore-3-desc',
  },
]

const colorMap = {
  micro: {
    bg: 'bg-micro-400/10',
    hover: 'hover:bg-micro-400/20',
    text: 'text-micro-400',
    border: 'border-micro-400/20',
    shadow: 'shadow-micro-400/20',
    btn: 'bg-micro-500 hover:bg-micro-600',
  },
  cosmos: {
    bg: 'bg-cosmos-400/10',
    hover: 'hover:bg-cosmos-400/20',
    text: 'text-cosmos-400',
    border: 'border-cosmos-400/20',
    shadow: 'shadow-cosmos-400/20',
    btn: 'bg-cosmos-500 hover:bg-cosmos-600',
  },
  nebula: {
    bg: 'bg-nebula-400/10',
    hover: 'hover:bg-nebula-400/20',
    text: 'text-nebula-400',
    border: 'border-nebula-400/20',
    shadow: 'shadow-nebula-400/20',
    btn: 'bg-nebula-500 hover:bg-nebula-600',
  },
}

export default function ExploreSection() {
  return (
    <section id="explore" className="relative py-20 lg:py-32 bg-cosmic-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cosmos-400/10 border border-cosmos-400/20 text-cosmos-400 text-sm font-medium mb-4">
            Continue Exploring
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Dive Deeper
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to learn more? Explore our resources and tools to continue your 
            journey into the microscopic universe.
          </p>
        </div>

        {/* Explore Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {exploreItems.map((item, index) => {
            const colors = colorMap[item.color]
            
            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl border ${colors.border} hover:border-opacity-50 transition-all duration-300 hover:shadow-xl ${colors.shadow}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    data-strk-img-id={`explore-${item.id}-bg-${index}`}
                    data-strk-img={`[${item.descId}] [${item.titleId}] microscopic laboratory science`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt=""
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/90 to-[#0a0a1a]/95" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.hover} flex items-center justify-center mb-6 transition-colors`}>
                    <item.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>

                  {/* Title */}
                  <h3 id={item.titleId} className="text-xl font-heading font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p id={item.descId} className="text-gray-400 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* CTA */}
                  <button className={`inline-flex items-center gap-2 px-6 py-3 ${colors.btn} text-white font-semibold rounded-lg transition-all duration-200 group/btn`}>
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Newsletter Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-micro-600/20 via-cosmos-600/20 to-nebula-600/20 border border-white/10">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <img
              data-strk-img-id="newsletter-bg-cells-3d4f5a"
              data-strk-img="microscopic cells pattern abstract biology"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-4">
              Stay Curious
            </h3>
            <p className="text-gray-300 max-w-xl mx-auto mb-8">
              Subscribe to our newsletter for weekly discoveries, stunning microscopy images, 
              and insights into the invisible world around us.
            </p>

            {/* Email Form */}
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-micro-400 focus:border-transparent transition-all"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-micro-500 hover:bg-micro-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-micro-500/25"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}