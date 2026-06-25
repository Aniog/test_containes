function StarRating() {
  return (
    <div className="flex justify-center text-[#A68D47] mb-6">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      text: "The quality is absolutely stunning. I haven't taken my gold huggies off since they arrived. They feel far more expensive than they are.",
      author: "SARAH M."
    },
    {
      id: 2,
      text: "I bought the Majestic Flora necklace for my sister's wedding. It arrived beautifully packaged and the crystal detailing is exquisite.",
      author: "EMILY R."
    },
    {
      id: 3,
      text: "Quiet luxury perfectly executed. Finally found a brand that does chic, minimal demi-fine jewelry that doesn't tarnish after a week.",
      author: "JESSICA T."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#FAF9F5]">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-center font-serif text-3xl text-[#2D2A26] mb-16">
          Words from our Community
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {reviews.map((review) => (
            <div key={review.id} className="text-center flex flex-col justify-between h-full">
              <div>
                <StarRating />
                <p className="font-serif text-lg leading-relaxed text-[#2D2A26] mb-8 italic">
                  "{review.text}"
                </p>
              </div>
              <p className="font-sans text-xs tracking-widest uppercase font-medium text-[#8B857D]">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
