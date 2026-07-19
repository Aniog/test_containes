import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        { name: 'Sarah M.', review: 'The Golden Sphere Huggies are even more beautiful in person. I haven’t taken them off!' },
        { name: 'Elena R.', review: 'Perfect for gifting. The packaging was so premium and the necklace is stunning.' },
        { name: 'Julian (J.K.)', review: 'Finally found high-quality gold plating that doesn’t irritate my skin. Amazing!' },
    ];

    return (
        <section className="py-24 px-4 md:px-10 max-w-7xl mx-auto border-t border-stone-200/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {reviews.map((rev, i) => (
                    <div key={i} className="text-center space-y-4">
                        <div className="flex justify-center gap-1 text-velmora-gold">
                            {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                        </div>
                        <p className="font-serif italic text-lg leading-relaxed text-velmora-black/80">
                            "{rev.review}"
                        </p>
                        <p className="text-[10px] uppercase tracking-widest text-velmora-stone">
                            — {rev.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
