import React from 'react';

const About = () => {
  return (
    <div className="pt-20">
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <div className="uppercase tracking-[0.15em] text-xs text-[#C5A26F] mb-3 text-center">Our Philosophy</div>
        <h1 className="font-serif text-center text-5xl tracking-[-0.01em] mb-10">Quietly Exceptional</h1>
        
        <div className="prose prose-neutral max-w-none text-[#5A5A5A] leading-relaxed space-y-6 text-[15px]">
          <p>Velmora was founded on the belief that fine jewelry should be both beautiful and wearable. We design for the woman who values craftsmanship over flash, and who sees jewelry as an extension of her personal style rather than a statement.</p>
          
          <p>Every piece begins in our New York studio, where our small team of designers and artisans carefully considers proportion, material, and finish. We source the highest quality 18K gold plating and hypoallergenic components, ensuring each piece feels as good as it looks.</p>
          
          <p>Our demi-fine approach allows us to create jewelry that feels truly luxurious while remaining accessible. We believe that beautiful, well-made pieces should be part of everyday life—not reserved for special occasions.</p>
        </div>

        <div className="mt-16 pt-12 border-t border-[#E5E0D5] grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-medium mb-2 tracking-[0.05em]">Hand Finished</div>
            <p className="text-[#5A5A5A]">Each piece is polished and inspected by hand before it leaves our studio.</p>
          </div>
          <div>
            <div className="font-medium mb-2 tracking-[0.05em]">Ethically Sourced</div>
            <p className="text-[#5A5A5A]">We partner with suppliers who share our commitment to responsible practices.</p>
          </div>
          <div>
            <div className="font-medium mb-2 tracking-[0.05em]">Designed to Last</div>
            <p className="text-[#5A5A5A]">Quality materials and thoughtful construction ensure years of wear.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
