import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-image"
              data-strk-img="[brand-story-heading] [brand-story-text] jewelry artisan craft gold workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry artisan at work"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase text-charcoal-800 mb-6"
            >
              Our Story
            </h2>
            <p
              id="brand-story-text"
              className="text-charcoal-600 leading-relaxed mb-6"
            >
              Velmora was born from a simple belief: every woman deserves to wear 
              beautiful, quality jewelry without the luxury markup. We work directly 
              with skilled artisans to create pieces that are both accessible and 
              exceptional.
            </p>
            <p className="text-charcoal-600 leading-relaxed mb-8">
              Each piece in our collection is crafted with 18K gold plating over 
              sterling silver, designed to be hypoallergenic and long-lasting. We 
              believe in quiet luxury — jewelry that speaks through its quality, 
              not its price tag.
            </p>
            <Link to="/about">
              <Button variant="outline" className="group">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
