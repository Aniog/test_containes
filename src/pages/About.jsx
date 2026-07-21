import React from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import CartDrawer from '@/components/ui/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F1] text-[#1C1917]">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <span className="text-xs tracking-[3px] text-[#A67C52]">EST. 2018</span>
          <h1 className="font-serif text-5xl tracking-[1.5px] mt-4 mb-6">
            Jewelry for the woman<br />who knows her worth.
          </h1>
          <p className="text-lg text-[#4A4640] max-w-xl mx-auto">
            Velmora creates demi-fine gold pieces that feel like an extension of you—quiet, confident, and meant to be worn every day.
          </p>
        </div>

        {/* Philosophy */}
        <div className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl tracking-[1px] mb-4">Our Philosophy</h2>
              <p className="text-[#4A4640] leading-relaxed">
                We believe luxury should be lived in, not locked away. Our pieces are designed to move with you—from morning coffee to evening events—without ever asking you to think twice.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl tracking-[1px] mb-4">The Velmora Standard</h2>
              <p className="text-[#4A4640] leading-relaxed">
                Every piece is plated in 18K gold over solid brass, never hollow. We use hypoallergenic materials and finish each item by hand. If it doesn't feel right, we don't ship it.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Thoughtful Design',
                desc: 'We design for real life. Pieces that layer beautifully, feel weightless, and never go out of style.',
              },
              {
                title: 'Responsible Craft',
                desc: 'Small-batch production. Ethical partners. Materials chosen for longevity, not trends.',
              },
              {
                title: 'Lasting Beauty',
                desc: 'Our plating is thicker. Our stones are set to stay. Jewelry that ages gracefully with you.',
              },
            ].map((value, i) => (
              <div key={i}>
                <h3 className="font-serif text-xl tracking-[1px] mb-3">{value.title}</h3>
                <p className="text-[#4A4640] text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image + Quote */}
        <div className="relative h-[70vh] flex items-center justify-center bg-[#1C1917]">
          <img
            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1600&q=80"
            alt="Velmora atelier"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="relative z-10 text-center px-6 max-w-2xl">
            <p className="font-serif text-3xl tracking-[1px] text-white leading-tight">
              "We don't chase trends. We craft pieces that become part of your story."
            </p>
            <p className="text-white/60 text-sm tracking-[2px] mt-6">— ELENA VOSS, FOUNDER</p>
          </div>
        </div>

        {/* Closing */}
        <div className="max-w-xl mx-auto px-6 py-20 text-center">
          <p className="text-[#4A4640] leading-relaxed">
            Thank you for choosing Velmora. Every order supports a small team of designers, makers, and dreamers who believe that beauty belongs in the everyday.
          </p>
          <p className="mt-8 text-sm tracking-[1.5px] text-[#A67C52]">WITH GRATITUDE</p>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default About;
