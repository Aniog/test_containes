import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Founder, Bloom Studio',
    avatar: 'SC',
    avatarColor: 'from-violet-500 to-fuchsia-500',
    rating: 5,
    quote: 'AI Site cut our website launch time from 3 weeks to 3 hours. The AI-generated content was surprisingly on-brand and required minimal editing.',
  },
  {
    name: 'Marcus Rivera',
    role: 'Head of Marketing, NovaTech',
    avatar: 'MR',
    avatarColor: 'from-cyan-500 to-blue-500',
    rating: 5,
    quote: "The predictive analytics alone are worth the subscription. We've increased our conversion rate by 40% in just two months following the AI recommendations.",
  },
  {
    name: 'Priya Nair',
    role: 'Freelance Designer',
    avatar: 'PN',
    avatarColor: 'from-fuchsia-500 to-pink-500',
    rating: 5,
    quote: "I was skeptical about AI design tools, but AI Site genuinely surprised me. It understands design principles and produces beautiful, clean layouts.",
  },
  {
    name: 'James Okafor',
    role: 'E-commerce Director, Luxe Co.',
    avatar: 'JO',
    avatarColor: 'from-emerald-500 to-teal-500',
    rating: 5,
    quote: 'Migrated our entire store to AI Site in a weekend. The global CDN made our international pages load 3x faster. Our bounce rate dropped immediately.',
  },
  {
    name: 'Lena Müller',
    role: 'Content Strategist',
    avatar: 'LM',
    avatarColor: 'from-orange-500 to-amber-500',
    rating: 5,
    quote: "The AI content generation is genuinely impressive. It writes in our brand voice after just a few examples. It's like having a copywriter on demand.",
  },
  {
    name: 'David Park',
    role: 'CTO, Stackify',
    avatar: 'DP',
    avatarColor: 'from-violet-500 to-cyan-500',
    rating: 5,
    quote: 'Enterprise-grade security with consumer-grade simplicity. Our compliance team was happy, and our marketing team was even happier.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#07091a] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Loved by{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              thousands
            </span>{' '}
            of creators
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Don't take our word for it — here's what our users have to say.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="break-inside-avoid rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
