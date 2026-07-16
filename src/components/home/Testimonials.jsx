import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The most beautiful everyday jewelry I've ever owned. I wear my huggies every single day.",
      author: "Elena M.",
      rating: 5
    },
    {
      id: 2,
      text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since.",
      author: "Sofia R.",
      rating: 5
    },
    {
      id: 3,
      text: "The quality is incredible for the price. My necklace still looks brand new after a year.",
      author: "Aisha K.",
      rating: 5
    }
  ];

  return (
    <section style={{ padding: '4rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        What Our Customers Say
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '2rem' 
      }}>
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial">
            <div className="testimonial-stars">
              {'★'.repeat(t.rating)}
            </div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">— {t.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;