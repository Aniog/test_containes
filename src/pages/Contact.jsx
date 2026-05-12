import { useEffect, useRef } from 'react';
import ContactForm from '../components/contact/ContactForm';
import { Telescope, BookOpen, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const facts = [
  { icon: Telescope, text: 'The observable universe is ~93 billion light-years in diameter.' },
  { icon: Star,      text: 'There are more stars in the universe than grains of sand on all of Earth\'s beaches.' },
  { icon: BookOpen,  text: 'Light from the Sun takes 8 minutes and 20 seconds to reach Earth.' },
];

export default function Contact() {
  const headerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, headerRef.current);
  }, []);

  return (
    <main className="pt-16">
      {/* Page header with background image */}
      <div ref={headerRef} className="relative py-20 md:py-24 border-b border-stardust/30 overflow-hidden">
        {/* Background image */}
        <div
          data-strk-bg-id="contact-bg-e4f2a7"
          data-strk-bg="[contact-bg-label] [contact-heading]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
          className="absolute inset-0 opacity-0 bg-cosmos"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center 30%' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-cosmos/80" />
        {/* Subtle signal-wave SVG decoration in corner */}
        <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
          <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="280" cy="180" r="40" stroke="#4f6ef7" strokeWidth="1"/>
            <circle cx="280" cy="180" r="70" stroke="#4f6ef7" strokeWidth="0.8"/>
            <circle cx="280" cy="180" r="100" stroke="#4f6ef7" strokeWidth="0.6"/>
            <circle cx="280" cy="180" r="140" stroke="#4f6ef7" strokeWidth="0.4"/>
            <circle cx="280" cy="180" r="190" stroke="#4f6ef7" strokeWidth="0.3"/>
            <line x1="280" y1="180" x2="200" y2="120" stroke="#4f6ef7" strokeWidth="0.8"/>
            <circle cx="200" cy="120" r="4" fill="#4f6ef7"/>
          </svg>
        </div>

        {/* Hidden text refs */}
        <span id="contact-heading" className="sr-only">radio telescope dish signal wave night sky astronomy</span>
        <span id="contact-bg-label" className="sr-only">observatory telescope dome starry night long exposure astrophotography</span>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 space-y-4">
          <p className="font-inter text-xs uppercase tracking-widest text-aurora">Contact & Feedback</p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-moonlight">
            Ask the Universe
          </h1>
          <p className="font-inter text-base text-comet max-w-xl leading-relaxed">
            Curiosity is the engine of discovery. Submit your questions, thoughts, and feedback
            directly to your physics teacher.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-3">
                <p className="font-inter text-xs uppercase tracking-widest text-aurora">Why Ask?</p>
                <h2 className="font-cormorant text-2xl font-light text-moonlight">
                  No Question is Too Small
                </h2>
                <p className="font-inter text-sm text-comet leading-relaxed">
                  The greatest physicists in history were driven by simple, childlike questions.
                  "Why does an apple fall?" led Newton to the laws of gravity. "What would it be
                  like to ride a beam of light?" led Einstein to relativity.
                </p>
                <p className="font-inter text-sm text-comet leading-relaxed">
                  Your question might be the next great discovery waiting to happen.
                </p>
              </div>

              {/* Cosmic facts */}
              <div className="space-y-4">
                <p className="font-inter text-xs uppercase tracking-widest text-comet">While You Wait…</p>
                {facts.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-aurora/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-aurora" />
                    </div>
                    <p className="font-inter text-sm text-comet leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              {/* Decorative quote */}
              <div className="border-l-2 border-aurora/30 pl-4 space-y-1">
                <p className="font-cormorant text-lg italic text-moonlight/80">
                  "Somewhere, something incredible is waiting to be known."
                </p>
                <p className="font-inter text-xs text-horizon">— Sharon Begley</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

