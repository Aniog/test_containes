import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[#1A1A1A] text-white">
      <div className="container-luxury">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-12 mx-auto mb-6 border border-[#C9A96E]/50 flex items-center justify-center">
            <Mail size={20} className="text-[#C9A96E]" />
          </div>

          <h2
            className="text-3xl md:text-4xl font-light mb-3"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Join the Velmora Circle
          </h2>
          <p className="text-[#8A8580] mb-8 max-w-md mx-auto">
            Subscribe for exclusive access to new collections, styling tips, and 10% off your first order.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="text-[#C9A96E] text-lg font-light">Thank you for joining us.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-transparent border border-[#333] px-5 py-3 text-sm text-white placeholder:text-[#555] focus:border-[#C9A96E] focus:outline-none transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-[#C9A96E] text-white px-8 py-3 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#A6884A] transition-colors flex items-center justify-center gap-2"
              >
                Join
                <ArrowRight size={14} />
              </button>
            </form>
          )}

          <p className="text-[10px] text-[#555] mt-4 uppercase tracking-[0.1em]">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
