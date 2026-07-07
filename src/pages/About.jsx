import { useImageLoader } from '@/hooks/useImageLoader'

export default function About() {
  const containerRef = useImageLoader()

  return (
    <div ref={containerRef} className="bg-velmora-cream animate-fadeIn">
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-velmora-gold-dark mb-4">About Velmora</p>
            <h1 className="font-serif text-4xl md:text-6xl text-velmora-dark mb-6">
              Quiet Luxury, Made Accessible
            </h1>
            <p className="font-sans text-lg text-velmora-stone leading-relaxed">
              We believe jewelry should feel special every day — not just on occasions. Our demi-fine pieces are designed to layer, gift, and treasure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-20">
            {[
              {
                title: 'Thoughtful Design',
                text: 'Every silhouette is sketched in-house, refined through rounds of sampling, and balanced for beauty and wearability.',
              },
              {
                title: 'Quality Materials',
                text: 'We use 18k gold-plated brass, sterling silver posts, and carefully sourced crystals for lasting shine.',
              },
              {
                title: 'Considered Packaging',
                text: 'Each order arrives in a Velmora gift box with a care card — ready for giving or unboxing yourself.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-velmora-warm p-8 md:p-10 text-center">
                <h3 className="font-serif text-2xl text-velmora-dark mb-4">{item.title}</h3>
                <p className="font-sans text-sm text-velmora-stone leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="relative aspect-[21/9] overflow-hidden bg-velmora-warm">
            <img
              data-strk-img-id="about-studio"
              data-strk-img="[about-headline]"
              data-strk-img-ratio="21x9"
              data-strk-img-width="1400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora studio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
