import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 md:pt-24 bg-velmora-cream min-h-screen">
      <div className="mx-auto max-w-[720px] px-6 py-16 md:py-24">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-velmora-gold mb-4">
          About Velmora
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-velmora-charcoal leading-tight">
          Designed With Intention, Worn With Confidence
        </h1>
        <div className="mt-10 space-y-6 text-sm md:text-base text-velmora-stone leading-relaxed">
          <p>
            Velmora was founded in 2024 with a singular mission: to make fine jewelry accessible without compromising on quality or design. We believe that every woman deserves pieces that make her feel effortlessly elegant — whether she is dressing for a boardroom, a dinner date, or a quiet morning at home.
          </p>
          <p>
            Our design studio is based in New York, where our small team of designers draws inspiration from architecture, art, and the quiet beauty of everyday objects. Every collection begins with a mood board, a story, and a question: how do we make this piece feel both timeless and unmistakably now?
          </p>
          <p>
            We work exclusively with certified manufacturers who meet our strict standards for ethical labor and environmental responsibility. All of our pieces are 18K gold plated on a hypoallergenic brass base, and we are actively working toward fully recycled metal sourcing by 2027.
          </p>
          <p>
            Thank you for choosing Velmora. We are honored to be part of your story.
          </p>
        </div>
      </div>
    </div>
  );
}
