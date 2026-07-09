import StarRating from '@/components/common/StarRating'

export default function Testimonials({ testimonials }) {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight">What Our Customers Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-8 md:p-10 text-center">
            <StarRating rating={t.rating} reviews={null} showCount={false} />
            <p className="mt-5 text-sm text-velmora-charcoal leading-relaxed italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="mt-5 text-xs tracking-[0.1em] uppercase font-medium text-velmora-taupe">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
