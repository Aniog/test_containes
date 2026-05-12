import ContactForm from '../components/contact/ContactForm';
import { Telescope, BookOpen, Star } from 'lucide-react';

const facts = [
  { icon: Telescope, text: 'The observable universe is ~93 billion light-years in diameter.' },
  { icon: Star,      text: 'There are more stars in the universe than grains of sand on all of Earth\'s beaches.' },
  { icon: BookOpen,  text: 'Light from the Sun takes 8 minutes and 20 seconds to reach Earth.' },
];

export default function Contact() {
  return (
    <main className="pt-16">
      {/* Page header */}
      <div className="bg-hero-gradient py-20 md:py-24 border-b border-stardust/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-4">
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
