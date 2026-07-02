import { StrkImg } from '@/components/ui/StrkImg';

export function About() {
  return (
    <div className="animate-fade-in bg-velmora-cream">
      <div className="mx-auto max-w-3xl px-4 pb-20 pt-28 text-center sm:px-6 lg:px-8">
        <span className="mb-3 block font-sans text-xs font-medium uppercase tracking-[0.28em] text-velmora-gold">
          About Velmora
        </span>
        <h1 className="font-serif text-4xl text-velmora-base sm:text-5xl lg:text-6xl">
          Modern Jewelry, Made to Last
        </h1>
        <p className="mt-6 font-sans text-base leading-relaxed text-velmora-taupe">
          We believe every woman deserves pieces that feel special without the markup. Velmora
          combines timeless silhouettes with responsible materials — so your jewelry keeps up
          with your life.
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative aspect-video overflow-hidden bg-velmora-cream-dark">
          <StrkImg
            id="about-hero"
            query="gold jewelry editorial atelier craftsmanship"
            ratio="16x9"
            width={1200}
            alt="Velmora atelier"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {[
            {
              title: 'Responsibly Made',
              body: 'We partner with certified workshops that meet strict labor and environmental standards.',
            },
            {
              title: 'Long-Lasting Finish',
              body: 'Each piece is plated in thick 18k gold over hypoallergenic brass or sterling silver.',
            },
            {
              title: 'Thoughtfully Priced',
              body: 'No middlemen, no unnecessary markups — just beautiful jewelry at honest prices.',
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-2xl text-velmora-base">{item.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-velmora-taupe">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
