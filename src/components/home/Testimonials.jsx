import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Eleanor H.',
    content: 'The Golden Sphere Huggies haven\'t left my ears since I got them. They look so incredibly high-end for the price.',
    product: 'Golden Sphere Huggies'
  },
  {
    id: 2,
    name: 'Sophie M.',
    content: 'I wore the Royal Heirloom Set to my wedding reception. Absolutely stunning craftsmanship that I\'ll pass down.',
    product: 'Royal Heirloom Set'
  },
  {
    id: 3,
    name: 'Clara T.',
    content: 'Finding demi-fine jewelry that doesn\'t tarnish is hard, but my Velmora pieces still look brand new after months of daily wear.',
    product: 'Amber Lace Earrings'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">Kind Words</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col items-center text-center p-6 border border-border/50 bg-background/50 backdrop-blur-sm shadow-sm">
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary" />
                ))}
              </div>
              <p className="font-serif text-lg leading-relaxed mb-8 flex-1 italic text-foreground/80">
                "{testimonial.content}"
              </p>
              <div className="mt-auto">
                <p className="font-medium tracking-wide text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">{testimonial.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}