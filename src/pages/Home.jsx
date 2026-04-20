import { Link } from 'react-router-dom'
import { ArrowRight, Wind, Droplets, Sun } from 'lucide-react'

const stats = [
  { icon: <Wind className="w-6 h-6 text-green-400" />, value: '31%', label: 'of Earth covered by forests' },
  { icon: <Droplets className="w-6 h-6 text-blue-400" />, value: '80%', label: 'of terrestrial biodiversity' },
  { icon: <Sun className="w-6 h-6 text-yellow-400" />, value: '2.6B', label: 'tonnes of CO₂ absorbed yearly' },
]

const features = [
  {
    title: 'Ancient Canopies',
    desc: 'Towering trees hundreds of years old form cathedral-like canopies that shelter thousands of species below.',
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80',
  },
  {
    title: 'Hidden Streams',
    desc: 'Crystal-clear streams wind through mossy banks, carrying life-giving water to every corner of the forest.',
    img: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&q=80',
  },
  {
    title: 'Forest Floor',
    desc: 'A rich tapestry of fungi, ferns, and fallen leaves creates a living carpet teeming with unseen life.',
    img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600&q=80',
  },
]

export default function Home() {
  return (
    <div className="bg-[#0a1a0b] text-green-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80"
          alt="Forest"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a0b]/60 via-transparent to-[#0a1a0b]" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-green-400 uppercase tracking-widest text-sm font-semibold mb-4">
            Welcome to the wild
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg">
            Into the Heart of the <span className="text-green-400">Forest</span>
          </h1>
          <p className="text-green-100/80 text-lg md:text-xl mb-10 leading-relaxed">
            Discover the ancient, breathing world beneath the canopy — where every leaf, root, and creature plays a vital role.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Explore Forests <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/conservation"
              className="inline-flex items-center gap-2 border border-green-500/60 hover:border-green-400 text-green-300 hover:text-green-200 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Conservation
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(({ icon, value, label }) => (
            <div key={label} className="bg-green-950/50 border border-green-800/40 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-3">{icon}</div>
              <div className="text-4xl font-extrabold text-white mb-1">{value}</div>
              <div className="text-green-300/70 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Layers of Life
          </h2>
          <p className="text-center text-green-300/60 mb-12 max-w-xl mx-auto">
            From the highest branches to the deepest roots, forests are layered ecosystems of extraordinary complexity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map(({ title, desc, img }) => (
              <div key={title} className="group rounded-2xl overflow-hidden bg-green-950/40 border border-green-800/30 hover:border-green-600/50 transition-all">
                <div className="overflow-hidden h-52">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-green-300/70 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Forest Needs You
          </h2>
          <p className="text-green-300/70 mb-8 text-lg">
            Every tree planted, every acre protected, every voice raised makes a difference.
          </p>
          <Link
            to="/conservation"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-10 py-4 rounded-full text-lg transition-colors"
          >
            Get Involved <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
