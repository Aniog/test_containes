import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Sparkles, ArrowRight, Users, Shield, Award, Zap } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getFeaturedMonsters } from '@/data/monsters';
import MonsterCard from '@/components/monsters/MonsterCard';

const stats = [
  { value: '4,200+', label: 'Happy Adoptions', emoji: '💝' },
  { value: '48', label: 'Monster Species', emoji: '🐾' },
  { value: '50+', label: 'Magical Realms', emoji: '🌍' },
  { value: '99%', label: 'Satisfaction Rate', emoji: '⭐' },
];

const features = [
  {
    icon: '🔍',
    title: 'Smart Matching',
    desc: 'Our magical compatibility quiz finds your perfect creature match based on lifestyle, home, and personality.',
    color: 'bg-purple-50',
    accent: 'text-purple-600',
  },
  {
    icon: '🛡️',
    title: 'Ethical Adoption',
    desc: 'Every creature in our care meets the highest magical welfare standards. We never work with unethical breeders.',
    color: 'bg-blue-50',
    accent: 'text-blue-600',
  },
  {
    icon: '📚',
    title: 'Lifetime Support',
    desc: 'Access our library of care guides, training resources, and 24/7 magical creature hotline forever.',
    color: 'bg-green-50',
    accent: 'text-green-600',
  },
  {
    icon: '🌟',
    title: 'Community',
    desc: 'Join thousands of magical creature families sharing tips, stories, and support in our vibrant community.',
    color: 'bg-pink-50',
    accent: 'text-pink-600',
  },
];

const floatingEmojis = ['🐉', '🦊', '🐋', '🌿', '🐱', '🐰', '🦌', '🦋', '⭐', '🌙'];

function FloatingEmoji({ emoji, style }) {
  return (
    <div
      className="absolute text-3xl md:text-4xl select-none pointer-events-none animate-float opacity-60"
      style={style}
    >
      {emoji}
    </div>
  );
}

export default function HomePage() {
  const containerRef = useRef(null);
  const featured = getFeaturedMonsters();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    { text: "Sparkle the dragon has changed our lives! She helps with homework and keeps the house warm.", author: "The Henderson Family", emoji: "🐉" },
    { text: "Luna the moon fox is the most magical thing that's ever happened to us. Pure joy every day.", author: "The Nakamura Family", emoji: "🦊" },
    { text: "We were nervous about adopting a cloud whale, but Nimbus is the gentlest giant you'll ever meet.", author: "The Garcia Family", emoji: "🐋" },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 pt-20">
        {/* Animated background blobs */}
        <div className="blob-bg w-96 h-96 bg-purple-300 top-10 -left-20 animate-blob" />
        <div className="blob-bg w-80 h-80 bg-pink-300 bottom-20 right-10 animate-blob" style={{ animationDelay: '2s' }} />
        <div className="blob-bg w-64 h-64 bg-yellow-200 top-1/2 left-1/2 animate-blob" style={{ animationDelay: '4s' }} />

        {/* Floating emojis */}
        {floatingEmojis.map((emoji, i) => (
          <FloatingEmoji
            key={i}
            emoji={emoji}
            style={{
              top: `${10 + (i * 8) % 80}%`,
              left: `${5 + (i * 9) % 90}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-md mb-6 animate-bounce-in">
            <span className="animate-sparkle">✨</span>
            <span className="text-sm font-bold text-purple-700">Over 4,200 magical adoptions and counting!</span>
            <span className="animate-sparkle" style={{ animationDelay: '1s' }}>✨</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-purple-900 mb-6 leading-tight">
            Find Your
            <span className="gradient-text block">Magical Match</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 font-body leading-relaxed">
            Welcome to Monster Match — where friendly fantasy creatures find their forever families.
            From tiny lava kittens to majestic cloud whales, your perfect companion is waiting! 🐾
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/quiz"
              className="btn-magic bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg px-8 py-4 shadow-xl flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Take the Quiz
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/monsters"
              className="btn-magic bg-white text-purple-700 text-lg px-8 py-4 shadow-lg border-2 border-purple-200 flex items-center justify-center gap-2"
            >
              Browse All Monsters
              <span>🐾</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur rounded-2xl p-4 shadow-md hover-lift"
              >
                <div className="text-3xl mb-1">{stat.emoji}</div>
                <div className="font-display text-2xl text-purple-700">{stat.value}</div>
                <div className="text-xs text-gray-500 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#fef9f0"/>
          </svg>
        </div>
      </section>

      {/* Featured Monsters */}
      <section className="py-20 px-6 bg-[#fef9f0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 rounded-full text-purple-700 text-sm font-bold mb-4">
              <Star className="w-4 h-4" />
              Featured Creatures
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-purple-900 mb-4">
              Meet Our Stars ⭐
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These wonderful creatures are looking for their forever homes right now. Could one of them be your perfect match?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featured.map(monster => (
              <MonsterCard key={monster.id} monster={monster} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/monsters"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-display text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              View All 48 Creatures
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="blob-bg w-96 h-96 bg-purple-500 top-0 right-0 opacity-20" />
        <div className="blob-bg w-64 h-64 bg-pink-500 bottom-0 left-0 opacity-20" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              How Adoption Works 🌟
            </h2>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto">
              Our magical adoption process is designed to find the perfect match for both you and your future creature companion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', emoji: '✨', title: 'Take the Quiz', desc: 'Answer fun questions about your lifestyle, home, and personality to discover your ideal match.' },
              { step: '02', emoji: '🔍', title: 'Browse Matches', desc: 'Explore your personalized recommendations and learn about each creature\'s unique personality.' },
              { step: '03', emoji: '📝', title: 'Apply to Adopt', desc: 'Submit your adoption application. Our team reviews it within 48 magical hours.' },
              { step: '04', emoji: '🏠', title: 'Welcome Home!', desc: 'Meet your new family member and begin your magical adventure together!' },
            ].map((item, i) => (
              <div key={i} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-white/20 z-0" style={{ width: 'calc(100% - 2rem)' }} />
                )}
                <div className="relative bg-white/10 backdrop-blur rounded-2xl p-6 text-center hover:bg-white/20 transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-display text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h3 className="font-display text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-purple-200 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/quiz"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl font-display text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Start Your Journey
              <Sparkles className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-[#fef9f0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-purple-900 mb-4">
              Why Monster Match? 💫
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're not just an adoption agency — we're a community dedicated to magical creature welfare and family happiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`${feature.color} rounded-2xl p-6 hover-lift`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className={`font-display text-xl ${feature.accent} mb-2`}>{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-purple-900 mb-4">
            Happy Families 💝
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Don't just take our word for it — hear from families who found their magical match!
          </p>

          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-6xl mb-6">{testimonials[activeTestimonial].emoji}</div>
            <p className="text-xl md:text-2xl text-gray-700 font-handwritten leading-relaxed mb-6">
              "{testimonials[activeTestimonial].text}"
            </p>
            <p className="font-display text-purple-600 text-lg">
              — {testimonials[activeTestimonial].author}
            </p>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === activeTestimonial ? 'bg-purple-500 w-6' : 'bg-purple-200'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors"
            >
              Read all success stories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4 animate-float inline-block">🐾</div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Ready to Find Your Match?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Hundreds of magical creatures are waiting for their forever homes. Your perfect companion could be just a quiz away!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quiz"
              className="px-8 py-4 bg-white text-purple-700 rounded-2xl font-display text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              ✨ Take the Quiz
            </Link>
            <Link
              to="/monsters"
              className="px-8 py-4 bg-white/20 text-white border-2 border-white/40 rounded-2xl font-display text-lg hover:bg-white/30 transition-all"
            >
              Browse Creatures 🐾
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
