import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="bg-[#1A1514] py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl italic text-[#C8A96E] tracking-wide mb-3">
          Join the Velmora Circle
        </h2>
        <p className="text-sm text-[#A9A29B] mb-8 tracking-[0.08em]">
          Sign up and receive 10% off your first order
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 w-full px-5 py-3 bg-transparent border border-[#7A7268] text-[#F5F0EB] placeholder:text-[#7A7268] text-sm focus:outline-none focus:border-[#C8A96E] transition-colors"
          />
          <button type="submit" className="btn-primary whitespace-nowrap w-full sm:w-auto">
            Sign Up
          </button>
        </form>
        <p className="text-[11px] text-[#7A7268] mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
