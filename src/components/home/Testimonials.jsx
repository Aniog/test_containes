import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The most beautiful everyday pieces. I wear my huggies every single day and they still look brand new.",
      author: "Elena M.",
      rating: 5
    },
    {
      id: 2,
      text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. Worth every penny.",
      author: "Sofia R.",
      rating: 5
    },
    {
      id: 3,
      text: "Finally found jewelry that doesn't turn my skin green. The quality is exceptional for the price.",
      author: "Maya K.",
      rating: 5
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2>Words from Our Community</h2>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial">
              <div className="testimonial-stars">
                {'★'.repeat(t.rating)}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <p className="testimonial-author">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
