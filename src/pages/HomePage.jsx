import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Image, MessageSquare, ChevronDown } from 'lucide-react';

const navCards = [
  {
    title: 'Knowledge Hub',
    subtitle: 'Constellations, Stellar Evolution & Wavelengths',
    path: '/knowledge',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80',
    alt: 'Milky Way galaxy',
  },
  {
    title: 'Gallery & Sky Map',
    subtitle: 'Auroras, Eclipses & Deep Sky Objects',
    path: '/gallery',
    icon: Image,
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    alt: 'Aurora borealis',
  },
  {
    title: 'Contact & Feedback',
    subtitle: 'Ask questions, share your thoughts',
    path: '/contact',
    icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80',
    alt: 'Radio telescope dish',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=85"
            alt="Deep space nebula"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B0F19]/70 bg-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/30 via-transparent to-[#0B0F19]" />
        </div>

        {/* Star particles overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 70}%`,
                animationDelay: `${Math.random() * 4}s`,
                opacity: Math.random() * 0.8 + 0.2,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/5 text-amber-400 text-xs tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Physics Education Resource
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-gray-50 leading-none mb-6">
            The Starry Night
            <br />
            <span className="text-amber-400">&amp; Astronomy</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Where Van Gogh's swirling cosmos meets the precision of physics.
            Explore the science behind the stars, from celestial coordinates
            to the life cycles of suns.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/knowledge"
              className="group flex items-center gap-3 px-8 py-3.5 bg-amber-400 text-[#0B0F19] rounded-full font-medium text-sm tracking-wide hover:bg-amber-300 transition-all duration-200 shadow-[0_0_30px_rgba(245,158,11,0.3)]"
            >
              Begin Exploring
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/gallery"
              className="flex items-center gap-3 px-8 py-3.5 border border-gray-600 text-gray-300 rounded-full text-sm tracking-wide hover:border-gray-400 hover:text-gray-100 transition-all duration-200"
            >
              View Gallery
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-float">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed italic">
            "For my part I know nothing with any certainty, but the sight of the
            stars makes me dream."
          </blockquote>
          <cite className="block mt-6 text-amber-400 text-sm tracking-widest uppercase not-italic">
            — Vincent van Gogh
          </cite>
          <div className="mt-8 w-16 h-px bg-amber-400/30 mx-auto" />
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-3">
              Explore the Universe
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-50 tracking-tight">
              Choose Your Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {navCards.map(({ title, subtitle, path, icon: Icon, image, alt }) => (
              <Link
                key={path}
                to={path}
                className="group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-amber-400/30 transition-all duration-500 bg-[#111827]"
              >
                {/* Card Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={image}
                    alt={alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent" />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <h3 className="text-gray-50 font-medium text-lg">{title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{subtitle}</p>
                  <div className="flex items-center gap-2 text-amber-400 text-sm group-hover:gap-3 transition-all duration-200">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-t border-gray-800/60 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '93M', label: 'Miles to the Sun', unit: 'mi' },
            { value: '200B', label: 'Stars in Milky Way', unit: '+' },
            { value: '13.8B', label: 'Age of Universe', unit: 'yrs' },
            { value: '299,792', label: 'Speed of Light', unit: 'km/s' },
          ].map(({ value, label, unit }) => (
            <div key={label} className="text-center">
              <div className="text-2xl md:text-3xl font-light text-amber-400 mb-1">
                {value}
                <span className="text-base text-amber-400/60 ml-1">{unit}</span>
              </div>
              <div className="text-gray-500 text-xs tracking-wide uppercase">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
