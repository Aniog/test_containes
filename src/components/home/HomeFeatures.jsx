import { Flame, Leaf, Clock, Star } from 'lucide-react'

const features = [
  {
    icon: <Flame className="w-8 h-8 text-red-600" />,
    title: 'Wood-Fired Oven',
    desc: 'Our 900°F oak-wood oven gives every pizza that perfect char and smoky flavour.',
  },
  {
    icon: <Leaf className="w-8 h-8 text-red-600" />,
    title: 'Fresh Ingredients',
    desc: 'Imported Italian flour, San Marzano tomatoes, and locally sourced produce daily.',
  },
  {
    icon: <Clock className="w-8 h-8 text-red-600" />,
    title: 'Ready in 90 Seconds',
    desc: 'True Neapolitan style — baked fast, served hot, eaten with joy.',
  },
  {
    icon: <Star className="w-8 h-8 text-red-600" />,
    title: 'Award-Winning',
    desc: 'Voted Best Pizza in New York three years running by the City Food Awards.',
  },
]

export default function HomeFeatures() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">Why Napoli's?</h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            We don't just make pizza — we carry on a tradition that started in Naples over a century ago.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(f => (
            <div key={f.title} className="flex flex-col items-center text-center p-6 rounded-2xl bg-stone-50 border border-stone-100">
              <div className="mb-4 p-3 bg-red-50 rounded-xl">{f.icon}</div>
              <h3 className="font-bold text-stone-900 text-lg mb-2">{f.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
