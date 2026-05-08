import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Star, Zap } from 'lucide-react';

const features = [
  {
    icon: '🐎',
    title: 'Explore Breeds',
    desc: 'Discover over 20 horse breeds from around the world, their origins, traits, and uses.',
    to: '/breeds',
    color: 'from-amber-50 to-orange-50',
    border: 'border-amber-200',
  },
  {
    icon: '🌿',
    title: 'Care & Training',
    desc: 'Learn essential horse care, grooming techniques, feeding guides, and training basics.',
    to: '/care',
    color: 'from-green-50 to-emerald-50',
    border: 'border-green-200',
  },
  {
    icon: '✨',
    title: 'Fun Facts',
    desc: 'Fascinating and surprising facts about horses that will amaze you and your friends.',
    to: '/facts',
    color: 'from-purple-50 to-violet-50',
    border: 'border-purple-200',
  },
  {
    icon: '🏆',
    title: 'Take the Quiz',
    desc: 'Test your horse knowledge with our interactive quiz and earn your equine expert badge.',
    to: '/quiz',
    color: 'from-blue-50 to-sky-50',
    border: 'border-blue-200',
  },
];

const stats = [
  { value: '20+', label: 'Horse Breeds' },
  { value: '50+', label: 'Fun Facts' },
  { value: '30+', label: 'Care Tips' },
  { value: '25', label: 'Quiz Questions' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #2c1810 0%, #4a2c1a 40%, #6b3d1e 70%, #8b5e3c 100%)',
        }}
      >
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-orange-300/10 blur-3xl" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="text-7xl md:text-9xl mb-6 animate-bounce" style={{ animationDuration: '3s' }}>
            🐴
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Discover the World
            <br />
            <span className="text-amber-400">of Horses</span>
          </h1>
          <p
            className="text-lg sm:text-xl text-amber-100/80 mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            From majestic breeds to essential care tips — your complete guide to understanding and loving these magnificent animals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/breeds"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-amber-500/30 hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Start Learning <ArrowRight size={18} />
            </Link>
            <Link
              to="/quiz"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full border border-white/20 transition-all duration-200 hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Take the Quiz 🏆
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#2c1810] py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div
                className="text-3xl md:text-4xl font-bold text-amber-400"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {value}
              </div>
              <div
                className="text-sm text-amber-100/60 mt-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c1810] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Everything You Need to Know
          </h2>
          <p
            className="text-[#6b4c3b] text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explore our comprehensive learning modules designed for horse lovers of all levels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon, title, desc, to, color, border }) => (
            <Link
              key={to}
              to={to}
              className={`group bg-gradient-to-br ${color} border ${border} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3
                className="text-xl font-bold text-[#2c1810] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {title}
              </h3>
              <p
                className="text-sm text-[#6b4c3b] leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {desc}
              </p>
              <span
                className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 group-hover:gap-2 transition-all"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Explore <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Fact Banner */}
      <section
        className="py-16 px-4"
        style={{ background: 'linear-gradient(135deg, #f5e6d3 0%, #fdf0e0 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">💡</div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#2c1810] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Did You Know?
          </h2>
          <p
            className="text-lg text-[#4a2c1a] leading-relaxed max-w-2xl mx-auto mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Horses can sleep both standing up and lying down. They have a special locking mechanism in their legs called the "stay apparatus" that allows them to doze while standing without falling over!
          </p>
          <Link
            to="/facts"
            className="inline-flex items-center gap-2 bg-[#2c1810] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#4a2c1a] transition-all duration-200"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            More Amazing Facts <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#2c1810] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Test Your Knowledge?
          </h2>
          <p
            className="text-[#6b4c3b] mb-8 text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Take our interactive quiz and find out how much you really know about horses!
          </p>
          <Link
            to="/quiz"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-amber-400/40 hover:scale-105"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Start Quiz 🏆
          </Link>
        </div>
      </section>
    </div>
  );
}
