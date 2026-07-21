import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 2500);
    }
  };

  return (
    <section className="bg-[#1C1917] py-16">
      <div className="max-w-md mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl tracking-[1px] text-white mb-3">
          Join for 10% off your first order
        </h2>
        <p className="text-white/70 text-sm tracking-wide mb-8">
          Be the first to know about new collections and receive an exclusive welcome gift.
        </p>

        {submitted ? (
          <p className="text-[#A67C52] text-sm tracking-[1px]">
            THANK YOU. WELCOME TO THE CIRCLE.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-white placeholder:text-white/50 border-white/30 focus:border-[#A67C52]"
            />
            <Button type="submit" size="lg" className="w-full">
              SUBSCRIBE
            </Button>
          </form>
        )}
        <p className="text-[10px] text-white/40 tracking-[1px] mt-4">
          WE RESPECT YOUR INBOX. UNSUBSCRIBE ANYTIME.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
