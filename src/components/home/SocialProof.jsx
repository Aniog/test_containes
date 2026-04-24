const logos = [
  'Stripe', 'Notion', 'Linear', 'Vercel', 'Figma', 'Loom', 'Intercom', 'Segment',
];

const testimonials = [
  {
    quote: "Arcis built our entire marketing site in 40 seconds. We spent the next hour tweaking copy. That's it.",
    author: 'Sarah Chen',
    role: 'Head of Marketing, Finova',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&auto=format&fit=crop',
  },
  {
    quote: "The AI understands our brand better than most agencies we've worked with. Genuinely impressive.",
    author: 'Marcus Webb',
    role: 'CEO, Stackline',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&auto=format&fit=crop',
  },
  {
    quote: "We went from zero to 10,000 monthly visitors in 3 months. Arcis's SEO recommendations were spot on.",
    author: 'Priya Nair',
    role: 'Founder, Lumio',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80&auto=format&fit=crop',
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Dashed accent */}
      <div className="absolute top-0 left-0 right-0 border-t border-dashed border-gray-800" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Logo strip */}
        <p className="text-center text-xs font-semibold text-gray-600 uppercase tracking-widest mb-8">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 mb-20">
          {logos.map((logo) => (
            <span key={logo} className="text-gray-600 font-semibold text-sm tracking-wide hover:text-gray-400 transition-colors">
              {logo}
            </span>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, author, role, avatar }) => (
            <div
              key={author}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-gray-700 transition-colors"
            >
              <p className="text-gray-300 text-sm leading-relaxed mb-6">"{quote}"</p>
              <div className="flex items-center gap-3">
                <img src={avatar} alt={author} className="w-9 h-9 rounded-full object-cover" />
                <div>
                  <p className="text-white text-sm font-semibold">{author}</p>
                  <p className="text-gray-500 text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
