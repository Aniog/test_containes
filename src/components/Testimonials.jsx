import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      text: "The quality is exceptional. I wear my Sphere Huggies every day and they still look brand new.",
      name: "Elena M.",
    },
    {
      text: "Bought the Heirloom Set for my sister. She cried when she opened it. Worth every penny.",
      name: "Sofia R.",
    },
    {
      text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so warm and beautiful.",
      name: "Aisha K.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {reviews.map((review, index) => (
        <div key={index} className="testimonial">
          <div className="stars mb-4">★★★★★</div>
          <p className="text-sm leading-relaxed mb-4">"{review.text}"</p>
          <p className="text-xs tracking-[0.05em] text-velmora-muted">— {review.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;