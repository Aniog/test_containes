import React, { useState, useEffect } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);
      const { data: response, error } = await client
        .from('Testimonials')
        .select('*')
        .limit(3);

      if (!error && response?.success) {
        setTestimonials(response.data.list);
      }
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  if (loading || testimonials.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-16">Stories from Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {testimonials.map((t) => (
            <div key={t.id} className="space-y-6 flex flex-col items-center">
              <div className="flex space-x-1">
                {[...Array(t.data.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xl font-serif italic leading-relaxed text-primary/80">
                "{t.data.content}"
              </p>
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-[0.4em] font-medium">{t.data.customer_name}</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mt-1">Verified Buyer</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
