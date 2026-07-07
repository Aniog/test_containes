import React from 'react';

const Testimonials = () => {
  const reviews = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new.", stars: 5 },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. The necklace I bought has become my signature piece.", stars: 5 },
    { name: "Isabella T.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so rich and elegant.", stars: 5 },
  ];

  return (
    <section className="bg-[#F8F5F0] py-20">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="font-serif text-3xl tracking-[1px] text-[#2C2522]">Loved by Our Community</div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 border border-[#D4C5A9]">
              <div className="flex gap-0.5 mb-4 text-[#8B7355]">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-[#5C5249] leading-relaxed mb-6 italic">"{review.text}"</p>
              <div className="text-sm tracking-widest text-[#8B7355]">— {review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
