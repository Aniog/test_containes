import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Heart, Activity, Wifi, Shield, Zap, Watch, ChevronDown } from 'lucide-react';

const features = [
  {
    id: 'health',
    icon: Heart,
    titleId: 'feature-health-title',
    descId: 'feature-health-desc',
    title: 'Advanced Health Monitoring',
    desc: 'Track your heart rate, blood oxygen, ECG, and sleep patterns around the clock. Apple Watch keeps a close eye on your health so you can focus on living.',
    imgId: 'feature-health-img-a1b2c3',
  },
  {
    id: 'fitness',
    icon: Activity,
    titleId: 'feature-fitness-title',
    descId: 'feature-fitness-desc',
    title: 'Your Ultimate Fitness Partner',
    desc: 'From running and swimming to yoga and cycling, Apple Watch tracks over 80 workout types with precision GPS and water resistance up to 50 meters.',
    imgId: 'feature-fitness-img-d4e5f6',
  },
  {
    id: 'connected',
    icon: Wifi,
    titleId: 'feature-connected-title',
    descId: 'feature-connected-desc',
    title: 'Stay Connected, Effortlessly',
    desc: 'Answer calls, reply to messages, and get directions right from your wrist. With cellular connectivity, you can leave your iPhone behind.',
    imgId: 'feature-connected-img-g7h8i9',
  },
];

const specs = [
  { label: 'Display', value: 'Always-On Retina LTPO OLED' },
  { label: 'Chip', value: 'Apple S9 SiP' },
  { label: 'Battery', value: 'Up to 18 hours' },
  { label: 'Water Resistance', value: '50 meters (WR50)' },
  { label: 'Connectivity', value: 'Wi-Fi, Bluetooth 5.3, LTE' },
  { label: 'Sensors', value: 'Heart Rate, ECG, Blood Oxygen, Temperature' },
  { label: 'Case Sizes', value: '41mm and 45mm' },
  { label: 'Storage', value: '64GB' },
];

const models = [
  {
    id: 'series-9',
    titleId: 'model-series9-title',
    descId: 'model-series9-desc',
    imgId: 'model-series9-img-j1k2l3',
    name: 'Apple Watch Series 9',
    tagline: 'Smarter. Brighter. Mightier.',
    price: 'From $399',
    color: 'bg-white',
    textColor: 'text-gray-900',
    subColor: 'text-gray-500',
    priceColor: 'text-blue-600',
    border: 'border border-gray-200',
  },
  {
    id: 'ultra-2',
    titleId: 'model-ultra2-title',
    descId: 'model-ultra2-desc',
    imgId: 'model-ultra2-img-m4n5o6',
    name: 'Apple Watch Ultra 2',
    tagline: 'Built for the extreme.',
    price: 'From $799',
    color: 'bg-black',
    textColor: 'text-white',
    subColor: 'text-gray-400',
    priceColor: 'text-yellow-400',
    border: '',
  },
  {
    id: 'se',
    titleId: 'model-se-title',
    descId: 'model-se-desc',
    imgId: 'model-se-img-p7q8r9',
    name: 'Apple Watch SE',
    tagline: 'The one to beat.',
    price: 'From $249',
    color: 'bg-gray-100',
    textColor: 'text-gray-900',
    subColor: 'text-gray-500',
    priceColor: 'text-blue-600',
    border: '',
  },
];

export default function AppleWatchPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="bg-white text-gray-900 font-sans overflow-x-hidden">

      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-900 font-semibold text-lg">
            <Watch className="w-5 h-5" />
            <span>Apple Watch</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600 font-medium">
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#models" className="hover:text-gray-900 transition">Models</a>
            <a href="#specs" className="hover:text-gray-900 transition">Specs</a>
          </div>
          <a
            href="#buy"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition"
          >
            Buy
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-14 bg-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          data-strk-bg-id="hero-bg-aw-x9y8z7"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p
            id="hero-eyebrow"
            className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4"
          >
            Introducing
          </p>
          <h1
            id="hero-title"
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none mb-6"
          >
            Apple Watch
          </h1>
          <p
            id="hero-subtitle"
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            The most powerful Apple Watch ever. Designed to keep you healthy, active, and connected — all from your wrist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#models"
              className="bg-white text-gray-900 font-semibold px-8 py-3.5 rounded-full hover:bg-gray-100 transition text-base"
            >
              Shop Now
            </a>
            <a
              href="#features"
              className="border border-white/40 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition text-base"
            >
              Learn More
            </a>
          </div>
        </div>
        <a
          href="#features"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-7 h-7" />
        </a>
      </section>

      {/* ── Tagline Strip ── */}
      <section className="bg-gray-50 py-16 px-6 text-center border-b border-gray-200">
        <p className="text-2xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-snug">
          Live a healthier, more active, more connected life.
        </p>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Features</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Everything you need. On your wrist.
            </h2>
          </div>

          <div className="space-y-24">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={feature.id}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-16`}
                >
                  <div className="flex-1 w-full">
                    <div className="rounded-3xl overflow-hidden bg-gray-100 aspect-[4/3]">
                      <img
                        alt={feature.title}
                        data-strk-img-id={feature.imgId}
                        data-strk-img={`[${feature.descId}] [${feature.titleId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 max-w-lg">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 mb-6">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3
                      id={feature.titleId}
                      className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4"
                    >
                      {feature.title}
                    </h3>
                    <p
                      id={feature.descId}
                      className="text-lg text-gray-500 leading-relaxed"
                    >
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Safety Banner ── */}
      <section className="bg-black py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <Shield className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h2 id="safety-title" className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Safety features that can save your life.
          </h2>
          <p id="safety-desc" className="text-lg text-gray-400 leading-relaxed">
            Crash Detection, Emergency SOS, and Fall Detection work silently in the background — ready to call for help the moment you need it.
          </p>
        </div>
      </section>

      {/* ── Models ── */}
      <section id="models" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Models</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Choose your Apple Watch.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models.map((model) => (
              <div
                key={model.id}
                className={`${model.color} ${model.border} rounded-3xl p-8 flex flex-col`}
              >
                <div className="rounded-2xl overflow-hidden mb-6 aspect-square bg-gray-200">
                  <img
                    alt={model.name}
                    data-strk-img-id={model.imgId}
                    data-strk-img={`[${model.descId}] [${model.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p id={model.titleId} className={`text-xl font-bold ${model.textColor} mb-1`}>
                  {model.name}
                </p>
                <p id={model.descId} className={`text-sm ${model.subColor} mb-4 flex-1`}>
                  {model.tagline}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <span className={`text-lg font-semibold ${model.priceColor}`}>{model.price}</span>
                  <button
                    className={`text-sm font-semibold px-5 py-2 rounded-full transition ${
                      model.id === 'ultra-2'
                        ? 'bg-white text-black hover:bg-gray-200'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Battery / Performance Banner ── */}
      <section className="bg-gray-50 py-20 px-6 border-y border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <p className="text-4xl font-bold text-gray-900 mb-1">18 hrs</p>
            <p className="text-gray-500 text-sm">All-day battery life</p>
          </div>
          <div>
            <Activity className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <p className="text-4xl font-bold text-gray-900 mb-1">80+</p>
            <p className="text-gray-500 text-sm">Workout types tracked</p>
          </div>
          <div>
            <Heart className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <p className="text-4xl font-bold text-gray-900 mb-1">24/7</p>
            <p className="text-gray-500 text-sm">Health monitoring</p>
          </div>
        </div>
      </section>

      {/* ── Tech Specs ── */}
      <section id="specs" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Specifications</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Built to perform.
            </h2>
          </div>
          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {specs.map((spec) => (
              <div key={spec.label} className="flex justify-between items-start py-5 gap-4">
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide w-40 shrink-0">
                  {spec.label}
                </span>
                <span className="text-base text-gray-900 font-medium text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="buy" className="bg-black py-28 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 id="cta-title" className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-5">
            Ready to wear the future?
          </h2>
          <p id="cta-desc" className="text-lg text-gray-400 mb-10 leading-relaxed">
            Apple Watch Series 9 starts at $399. Free engraving. Free shipping. Easy returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 font-semibold px-10 py-4 rounded-full hover:bg-gray-100 transition text-base">
              Shop Apple Watch
            </button>
            <button className="border border-white/30 text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition text-base">
              Compare Models
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-50 border-t border-gray-200 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2 font-semibold text-gray-600">
            <Watch className="w-4 h-4" />
            <span>Apple Watch</span>
          </div>
          <p>© 2024 Apple Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600 transition">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition">Terms</a>
            <a href="#" className="hover:text-gray-600 transition">Support</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
