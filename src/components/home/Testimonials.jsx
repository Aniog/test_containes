import { testimonials } from "@/data/products";
import StarRating from "@/components/ui/StarRating";

export default function Testimonials() {
  return (
    <section className="section-padding bg-surface/30">
      <div className="max-w-page mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase text-accent font-sans">
            Testimonials
          </span>
          <h2 className="section-heading mt-2">Loved by Our Community</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface border border-[#2a2a2a] p-6 md:p-8 rounded-sm flex flex-col"
            >
              <StarRating rating={t.rating} size={14} />
              <p className="mt-4 text-sm text-primary/80 leading-relaxed font-sans flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-xs text-accent font-serif font-medium">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-primary font-sans">{t.name}</p>
                  <p className="text-xs text-secondary">Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}