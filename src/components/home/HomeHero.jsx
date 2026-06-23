import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TAGLINE = 'Jewelry for the hours nobody sees';

export default function HomeHero() {
  const [displayed, setDisplayed] = useState('');
  const [logoVisible, setLogoVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => setLogoVisible(true), 300);
    return () => clearTimeout(logoTimer);
  }, []);

  useEffect(() => {
    if (!logoVisible) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(TAGLINE.slice(0, i + 1));
      i++;
      if (i >= TAGLINE.length) {
        clearInterval(interval);
        setTimeout(() => setCtaVisible(true), 400);
      }
    }, 55);
    return () => clearInterval(interval);
  }, [logoVisible]);

  const scrollToCollection = () => {
    const el = document.getElementById('featured-collection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-cream flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 30% 70%, #C5A57A22 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, #C5A57A11 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Logo */}
        <div
          className={`transition-all duration-700 ${logoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl text-ink tracking-widest font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.18em', fontWeight: 300 }}
          >
            Small Hours
          </h1>
        </div>

        {/* Divider */}
        <div
          className={`w-12 h-px bg-gold my-8 transition-all duration-700 delay-300 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Typewriter tagline */}
        <div className="h-6 flex items-center justify-center">
          <p
            className="text-muted font-light"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            {displayed}
            {displayed.length < TAGLINE.length && (
              <span className="typewriter-cursor text-gold">|</span>
            )}
          </p>
        </div>

        {/* CTA */}
        <div
          className={`mt-14 transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <button
            onClick={scrollToCollection}
            className="btn-primary"
          >
            Enter the Hours
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${ctaVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="w-px h-12 bg-gold/40 animate-pulse" />
      </div>
    </section>
  );
}
