const logos = [
  'Stripe', 'Notion', 'Figma', 'Vercel', 'Linear', 'Loom', 'Intercom', 'Segment'
]

const testimonials = [
  {
    quote: "NexusAI cut our website launch time from 3 weeks to 3 hours. The AI understands our brand better than most designers.",
    author: "Sarah Chen",
    role: "Head of Marketing, Stripe",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&auto=format&fit=crop&crop=face",
  },
  {
    quote: "The quality of the generated designs is remarkable. We've shipped 12 landing pages this quarter alone.",
    author: "Marcus Williams",
    role: "CTO, Vercel",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&auto=format&fit=crop&crop=face",
  },
  {
    quote: "Finally, an AI tool that actually understands conversion optimization. Our leads increased by 40% after switching.",
    author: "Priya Patel",
    role: "Growth Lead, Linear",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80&auto=format&fit=crop&crop=face",
  },
]

export default function SocialProof() {
  return (
    <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
      {/* Dashed border accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Logo strip */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 mb-8 uppercase tracking-widest font-medium">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos.map(logo => (
              <span key={logo} className="text-gray-600 font-semibold text-lg tracking-tight hover:text-gray-400 transition-colors cursor-default">
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-800 mb-16" />

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">What our customers say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, author, role, avatar }) => (
            <div key={author} className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-colors">
              <p className="text-gray-300 text-sm leading-relaxed mb-6">"{quote}"</p>
              <div className="flex items-center gap-3">
                <img src={avatar} alt={author} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-white text-sm font-medium">{author}</p>
                  <p className="text-gray-500 text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
