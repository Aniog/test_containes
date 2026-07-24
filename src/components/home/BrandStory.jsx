import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 aspect-[3/4] bg-[#E5E1DA] relative overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-title] [story-desc] jewelry designer studio"
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              className="w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <h4 className="font-sans uppercase tracking-[0.3em] text-[10px] opacity-60">Our Heritage</h4>
            <h2 id="story-title" className="font-serif text-4xl md:text-5xl leading-tight">Quiet Luxury, <br /> Accessible to All</h2>
            <p id="story-desc" className="font-sans text-sm opacity-60 leading-relaxed max-w-lg">
              Velmora was founded on the belief that fine jewelry shouldn't be reserved for special occasions. We create demi-fine pieces using 18K gold plating over sterling silver and high-quality crystals, designed to elevate your everyday style without the traditional markup.
            </p>
            <div className="pt-4">
              <Link to="/about" className="font-sans uppercase text-[10px] tracking-[0.2em] border-b border-[#1A1A1A] pb-1 hover:text-[#B69750] hover:border-[#B69750] transition-colors">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
EOF && cat <<EOF > src/components/home/Testimonials.jsx
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah M.', text: 'The quality of the Golden Sphere Huggies is incredible. They have a nice weight to them and haven\'t tarnished at all after weeks of wear.' },
    { name: 'Elena J.', text: 'I bought the Royal Heirloom Set for a wedding but I find myself wearing the necklace almost every day now. So elegant.' },
    { name: 'Chloe W.', text: 'Velmora has become my go-to for gifting. The packaging is beautiful and the jewelry always feels more expensive than it is.' }
  ];

  return (
    <section className="py-32 bg-[#FAF9F6] border-t border-[#E5E1DA]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#B69750] text-[#B69750]" />
                ))}
              </div>
              <p className="font-serif italic text-lg opacity-80 leading-relaxed">
                "{review.text}"
              </p>
              <div className="space-y-1">
                <span className="w-8 h-[1px] bg-[#B69750] block mx-auto mb-4" />
                <h4 className="font-sans uppercase tracking-[0.2em] text-[10px] font-bold">{review.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
EOF > src/components/home/BrandStory.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 aspect-[3/4] bg-[#E5E1DA] relative overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-title] [story-desc] jewelry designer studio"
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              className="w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <h4 className="font-sans uppercase tracking-[0.3em] text-[10px] opacity-60">Our Heritage</h4>
            <h2 id="story-title" className="font-serif text-4xl md:text-5xl leading-tight">Quiet Luxury, <br /> Accessible to All</h2>
            <p id="story-desc" className="font-sans text-sm opacity-60 leading-relaxed max-w-lg">
              Velmora was founded on the belief that fine jewelry shouldn't be reserved for special occasions. We create demi-fine pieces using 18K gold plating over sterling silver and high-quality crystals, designed to elevate your everyday style without the traditional markup.
            </p>
            <div className="pt-4">
              <Link to="/about" className="font-sans uppercase text-[10px] tracking-[0.2em] border-b border-[#1A1A1A] pb-1 hover:text-[#B69750] hover:border-[#B69750] transition-colors">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
EOF && cat <<EOF > src/components/home/Testimonials.jsx
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah M.', text: 'The quality of the Golden Sphere Huggies is incredible. They have a nice weight to them and haven\'t tarnished at all after weeks of wear.' },
    { name: 'Elena J.', text: 'I bought the Royal Heirloom Set for a wedding but I find myself wearing the necklace almost every day now. So elegant.' },
    { name: 'Chloe W.', text: 'Velmora has become my go-to for gifting. The packaging is beautiful and the jewelry always feels more expensive than it is.' }
  ];

  return (
    <section className="py-32 bg-[#FAF9F6] border-t border-[#E5E1DA]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#B69750] text-[#B69750]" />
                ))}
              </div>
              <p className="font-serif italic text-lg opacity-80 leading-relaxed">
                "{review.text}"
              </p>
              <div className="space-y-1">
                <span className="w-8 h-[1px] bg-[#B69750] block mx-auto mb-4" />
                <h4 className="font-sans uppercase tracking-[0.2em] text-[10px] font-bold">{review.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
