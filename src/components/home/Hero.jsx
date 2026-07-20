import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with warm lighting effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop)',
        }}
      >
        {/* Dark overlay with warm tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/50 to-[#0D0D0D]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/60 via-transparent to-[#0D0D0D]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F5F5F0] mb-6 animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          Crafted to be Treasured
        </h1>
        <p className="text-lg sm:text-xl text-[#A8A8A0] mb-10 max-w-xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          Demi-fine jewelry for the modern woman. Quality pieces that elevate every moment.
        </p>
        <Link
          to="/collections"
          className="inline-block btn-primary animate-fade-up opacity-0"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#A8A8A0] rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#C9A962] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;