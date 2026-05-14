import { useState, useEffect } from 'react';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

const slides = [
  {
    id: 1,
    tag: 'Nueva Colección',
    title: 'Pulseras que\ncuentan tu historia',
    subtitle: 'Cada pieza es única, hecha a mano con materiales naturales y mucho amor.',
    cta: 'Explorar Pulseras',
    href: '#pulseras',
    accent: 'from-blue-200 via-blue-100 to-orange-100',
    emoji: '🌸',
    bgGradient: 'from-blue-300 via-blue-200 to-orange-200',
    decorEmoji: ['💎', '🌸', '✨', '💫'],
  },
  {
    id: 2,
    tag: 'Más Vendidos',
    title: 'Collares que\niluminan tu look',
    subtitle: 'Diseños exclusivos con piedras naturales, perlas y detalles artesanales.',
    cta: 'Ver Collares',
    href: '#collares',
    accent: 'from-purple-200 via-blue-100 to-blue-100',
    emoji: '💜',
    bgGradient: 'from-purple-300 via-blue-200 to-blue-200',
    decorEmoji: ['💜', '🔮', '⭐', '🌙'],
  },
  {
    id: 3,
    tag: 'Tendencia',
    title: 'Bolsos creativos\npara cada momento',
    subtitle: 'Bolsos artesanales con diseños únicos que expresan tu personalidad.',
    cta: 'Descubrir Bolsos',
    href: '#bolsos',
    accent: 'from-amber-100 via-orange-100 to-blue-100',
    emoji: '✨',
    bgGradient: 'from-amber-200 via-orange-200 to-blue-200',
    decorEmoji: ['👜', '✨', '🌟', '🎀'],
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section id="inicio" className={`min-h-screen pt-24 bg-gradient-to-br ${slide.accent} transition-all duration-1000`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-500 tracking-wide">{slide.tag}</span>
            </div>

            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight mb-6 whitespace-pre-line">
              {slide.title}
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
              {slide.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={slide.href}
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-all hover:gap-3 shadow-lg hover:shadow-xl"
              >
                {slide.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#categorias"
                className="inline-flex items-center gap-2 bg-white/80 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-white transition-all shadow-md"
              >
                Ver Todo
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {[
                { value: '500+', label: 'Diseños únicos' },
                { value: '4.9', label: 'Valoración', icon: <Star className="w-3 h-3 fill-amber-400 text-amber-400 inline" /> },
                { value: '2K+', label: 'Clientas felices' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-gray-800 flex items-center gap-1">
                    {stat.icon}{stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/40 to-purple-300/40 rounded-3xl blur-3xl scale-110" />
              <div className={`relative bg-gradient-to-br ${slide.bgGradient} rounded-3xl overflow-hidden shadow-2xl border border-white/50 h-80 lg:h-96 flex items-center justify-center`}>
                {/* Decorative floating emojis */}
                <div className="absolute top-6 left-6 text-4xl animate-bounce" style={{ animationDelay: '0s' }}>{slide.decorEmoji[0]}</div>
                <div className="absolute top-10 right-10 text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>{slide.decorEmoji[1]}</div>
                <div className="absolute bottom-16 left-10 text-3xl animate-bounce" style={{ animationDelay: '1s' }}>{slide.decorEmoji[2]}</div>
                <div className="absolute bottom-8 right-8 text-4xl animate-bounce" style={{ animationDelay: '1.5s' }}>{slide.decorEmoji[3]}</div>
                {/* Center large emoji */}
                <div className="text-9xl select-none">{slide.emoji}</div>
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-white rounded-2xl px-4 py-2 shadow-lg">
                  <div className="text-xs text-gray-500">Hecho a mano</div>
                  <div className="text-sm font-bold text-gray-800">100% Artesanal</div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{slide.emoji}</span>
                    <div>
                      <div className="text-xs text-gray-500">Colección</div>
                      <div className="text-sm font-bold text-gray-800">Primavera 2026</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-blue-400' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
