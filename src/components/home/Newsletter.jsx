import { useState } from 'react';

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
    <section className="section-padding bg-[#C9A962]">
      <div className="container-main">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Join for 10% Off
          </h2>
          <p className="text-white/80 mb-8">
            Subscribe to our newsletter and receive 10% off your first order.
          </p>
          
          {submitted ? (
            <div className="bg-white/10 py-4 px-6 text-white">
              Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 bg-white text-[#1A1814] placeholder:text-[#6B635A] focus:outline-none"
              />
              <button 
                type="submit"
                className="px-8 py-3 bg-[#1A1814] text-white uppercase tracking-widest text-sm hover:bg-[#2A2824] transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
          
          <p className="text-white/60 text-xs mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}