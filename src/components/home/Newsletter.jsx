import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: 'Invalid email',
        description: 'Please enter a valid email address',
        variant: 'destructive',
      });
      return;
    }
    toast({
      title: 'Welcome to Velmora!',
      description: 'Check your email for your 10% off code',
    });
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 tracking-wide">
            Join for 10% Off
          </h2>
          <p className="text-white/70 mb-8">
            Be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#b8860b] focus:ring-[#b8860b]/20"
            />
            <Button type="submit" className="bg-[#b8860b] hover:bg-[#9a7209] text-white whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          <p className="text-white/50 text-xs mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
