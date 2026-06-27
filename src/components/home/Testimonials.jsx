import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { TESTIMONIALS, getProductById } from '@/data/products';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-sand py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="text-center mb-14 md:mb-16">
          <p className="eyebrow mb-4">In their words</p>
          <h2
            id="testimonials-title"
            className="font-serif text-ink text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08]"
          >
            <span className="editorial italic font-normal">Worn</span> by real women
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {TESTIMONIALS.map((t, i) => {
            const product = getProductById(t.productId);
            return (
              <article
                key={i}
                className="bg-cream border border-hairline p-8 md:p-10 flex flex-col"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-3.5 h-3.5 text-gold fill-current"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <blockquote
                  id={`testimonial-${i}-quote`}
                  className="font-serif text-xl md:text-[1.4rem] leading-snug text-ink flex-1"
                >
                  "{t.quote}"
                </blockquote>

                <div className="mt-8 pt-6 border-t border-hairline flex items-center justify-between">
                  <p className="label">{t.name}</p>
                  {product && (
                    <Link
                      to={`/product/${product.id}`}
                      className="label-light link-reveal"
                    >
                      {product.name}
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}