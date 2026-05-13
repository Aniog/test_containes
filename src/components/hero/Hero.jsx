import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 50%, #e0f2f1 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-green-200 rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-200 rounded-full opacity-30 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-4 uppercase tracking-wide">
              🌿 Fresh & Handpicked
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 leading-tight mb-6">
              Bring Nature<br />
              <span className="text-green-600">Into Your Home</span>
            </h1>
            <p className="text-lg text-green-800 mb-8 leading-relaxed max-w-md">
              Discover our curated collection of beautiful green plants. Each one is lovingly grown and ready to transform your living space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#plants"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
              >
                Browse Plants
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-green-600 text-green-700 font-semibold rounded-full hover:bg-green-50 transition-colors"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8">
              {[
                { value: '200+', label: 'Plant Varieties' },
                { value: '5k+', label: 'Happy Customers' },
                { value: '4.9★', label: 'Average Rating' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-green-800">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration / Plant grid */}
          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '🌿', name: 'Monstera', bg: 'bg-green-100' },
                { emoji: '🪴', name: 'Pothos', bg: 'bg-emerald-100' },
                { emoji: '🌵', name: 'Cactus', bg: 'bg-lime-100' },
                { emoji: '🌱', name: 'Fern', bg: 'bg-teal-100' },
              ].map((plant) => (
                <div
                  key={plant.name}
                  className={`${plant.bg} rounded-2xl p-6 flex flex-col items-center justify-center aspect-square shadow-sm`}
                >
                  <span className="text-6xl mb-2">{plant.emoji}</span>
                  <span className="text-sm font-semibold text-green-800">{plant.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#plants"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-green-600 animate-bounce"
      >
        <span className="text-xs mb-1">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  );
};

export default Hero;
