import { Star } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        { name: "Sophia", initial: "L", text: "Truly beautiful pieces. The gold tone is so rich and doesn't look cheap at all. I wear my huggies every single day." },
        { name: "Eleanor", initial: "M", text: "The weighted feel of the necklace is impressive for the price point. Packaging was also very premium. Perfect for gifting." },
        { name: "Isabella", initial: "R", text: "Customer service was wonderful when I had a question about care. The filigree detail on the earrings is just stunning." }
    ];

    return (
        <section className="py-24 bg-velmora-sand/20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="flex flex-col items-center space-y-6">
                            <div className="flex space-x-1 text-velmora-accent">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" />
                                ))}
                            </div>
                            <blockquote className="text-lg md:text-xl font-serif italic text-velmora-charcoal/80 leading-relaxed max-w-sm">
                                "{review.text}"
                            </blockquote>
                            <div className="flex flex-col items-center space-y-1">
                                <span className="uppercase tracking-widest text-xs font-medium">{review.name} {review.initial}.</span>
                                <span className="text-[10px] text-velmora-charcoal/40 uppercase tracking-widest">Verified Purchase</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
