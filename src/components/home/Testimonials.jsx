import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials__header">
          <h2 className="testimonials__title">What Our Customers Say</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-card__stars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill="currentColor"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <p className="testimonial-card__text">"{testimonial.text}"</p>
              <div className="testimonial-card__author">
                <span className="testimonial-card__initials">{testimonial.initials}</span>
                <span className="testimonial-card__name">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}