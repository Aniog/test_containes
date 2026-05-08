import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Founder, Bloom Studio',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&auto=format&fit=crop&crop=face',
    quote: 'NexusAI built our entire agency site in under 10 minutes. The quality was better than what we\'d spent weeks designing manually.',
  },
  {
    name: 'Marcus Rivera',
    role: 'CTO, Velocity Labs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&auto=format&fit=crop&crop=face',
    quote: 'The AI understands context in a way I\'ve never seen before. It generated copy that actually sounded like our brand voice.',
  },
  {
    name: 'Priya Nair',
    role: 'Marketing Director, Apex Co.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80&auto=format&fit=crop&crop=face',
    quote: 'We launched 12 landing pages in a single afternoon. Our conversion rates are up 34% compared to our old site.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Dashed accent */}
      <div className="absolute top-0 left-0 right-0 border-t border-dashed border-slate-800" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Loved by builders worldwide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, avatar, quote }) => (
            <div
              key={name}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col gap-6"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed flex-1">"{quote}"</p>
              <div className="flex items-center gap-3">
                <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-white text-sm font-semibold">{name}</p>
                  <p className="text-slate-500 text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
