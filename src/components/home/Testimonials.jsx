import { StarRating } from '@/components/ui/StarRating'
import { useInView } from '@/hooks/useInView'

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'The quality is incredible for the price. I wear my huggies every single day and they still look brand new after months.',
    rating: 5,
  },
  {
    name: 'Emma K.',
    text: 'Bought the heirloom set as a gift for my sister. She cried when she opened it. The packaging is so beautiful.',
    rating: 5,
  },
  {
    name: 'Lily J.',
    text: 'Finally found jewelry that doesn\'t irritate my sensitive skin. The gold tone is warm and rich — looks much more expensive than it is.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.05 })

  return (
    <section ref={ref} className={`py-16 md:py-24 bg-velmora-warm transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">Kind Words</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide">What They Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, index) => (
            <div key={index} className="text-center">
              <StarRating rating={t.rating} size="md" className="justify-center mb-4" />
              <blockquote className="font-serif text-lg leading-relaxed text-velmora-charcoal/80 italic mb-6">
                "{t.text}"
              </blockquote>
              <div className="w-8 h-px bg-velmora-gold/40 mx-auto mb-4" />
              <p className="text-xs tracking-widest uppercase text-velmora-gray">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
