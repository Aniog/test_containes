import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="about" className="py-16 md:py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1673082821146-9ce68a657b64?w=800&h=1000&fit=crop"
              alt="Velmora artisan crafting gold jewelry"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-brand-300 rounded-sm -z-10 hidden lg:block" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="font-sans text-xs font-semibold uppercase tracking-mega-wide text-brand-500 mb-4">
              Our Story
            </p>
            <h2 className="heading-section mb-6">
              Jewelry That Feels Like <span className="italic">You</span>
            </h2>
            <p className="body-text mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that makes her
              feel extraordinary — without the extraordinary price tag. We create demi-fine pieces
              in 18K gold plating that you can wear every single day.
            </p>
            <p className="body-text mb-8">
              Each piece in our collection is designed with intention, crafted with care, and made
              to last. From our hypoallergenic materials to our sustainable packaging, we obsess
              over every detail so you can simply enjoy wearing beautiful jewelry.
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-ultra-wide text-brand-600 hover:text-brand-700 transition-colors group"
            >
              Read Our Story
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
