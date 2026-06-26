import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-ss-blue-dark via-ss-blue to-ss-blue-light overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_1600/unsplashcom/photo-1581092921461-39b9c1f7e1d7)',
        }}
      />

      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs font-medium mb-6 border border-white/10">
            Your Trusted Sourcing Partner in China
          </div>

          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            China Sourcing Agent for Global Buyers
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl"
          >
            We help importers and businesses find reliable Chinese suppliers, verify factories, 
            inspect product quality, and manage shipping &mdash; so you can source with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-ss-orange text-white text-base font-semibold rounded-lg hover:bg-ss-orange-light transition-colors shadow-lg shadow-orange-500/25"
            >
              Get a Free Sourcing Quote
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white text-base font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              How It Works
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
            <div className="text-white/70 text-sm">
              <span className="font-semibold text-white">500+</span> Suppliers Vetted
            </div>
            <div className="text-white/70 text-sm">
              <span className="font-semibold text-white">30+</span> Countries Served
            </div>
            <div className="text-white/70 text-sm">
              <span className="font-semibold text-white">98%</span> On-Time Delivery
            </div>
            <div className="text-white/70 text-sm">
              <span className="font-semibold text-white">5+ Years</span> Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}