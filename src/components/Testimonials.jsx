import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            text: "The quality is outstanding. It has the weight and feel of solid gold without the premium price tag. Truly an editorial piece.",
            name: "Eleanor S.",
            product: "Golden Sphere Huggies"
        },
        {
            text: "I receive compliments every time I wear my Velvet Aura cuff. It's delicate, catches the light perfectly, and feels so secure.",
            name: "Madeleine R.",
            product: "Vivid Aura Jewels"
        },
        {
            text: "Fast shipping, beautiful sustainable packaging, and the earrings are exquisite. Velmora has become my go-to for gifting.",
            name: "Sophie T.",
            product: "Amber Lace Earrings"
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-background border-t border-border/50">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl text-velmora-charcoal mb-4">Loved by Our Community</h2>
                    <p className="text-velmora-charcoal/70 uppercase tracking-widest text-sm">Over 5,000 Five-Star Reviews</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
                    {reviews.map((review, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="flex space-x-1 text-velmora-gold mb-6">
                                {[1,2,3,4,5].map(star => (
                                    <Star key={star} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <blockquote className="font-serif text-xl md:text-2xl italic leading-relaxed text-velmora-charcoal/80 mb-6 flex-grow">
                                "{review.text}"
                            </blockquote>
                            <div className="uppercase tracking-widest text-xs font-medium text-velmora-charcoal/60">
                                <span>{review.name}</span>
                                <span className="mx-2">|</span>
                                <span className="text-velmora-charcoal/40">{review.product}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;