import React from 'react';
import { useParams, Link } from 'react-router-dom';

const JournalDetail = () => {
  const { id } = useParams();

  const articles = {
    1: {
      title: "How to Care for Your Gold Jewelry",
      date: "JUNE 2026",
      readTime: "4 min",
      content: [
        "Caring for your gold jewelry is simple when you follow a few consistent rituals. With proper attention, your pieces will retain their luster for years to come.",
        "First, remove your jewelry before applying perfume, lotions, or hair products. These can leave residue that dulls the finish over time. Always put on your jewelry last, after your beauty routine is complete.",
        "Store each piece separately in the soft pouch provided or in a lined jewelry box. This prevents scratching and tangling. Never store pieces in direct sunlight or in humid environments like bathrooms.",
        "To clean, use a soft, lint-free cloth and gently wipe the surface. For deeper cleaning, a mild soap solution with warm water works well. Rinse thoroughly and dry completely before storing.",
        "Avoid wearing gold-plated pieces while swimming in chlorinated pools or in the ocean. Salt water and chlorine can accelerate wear on the plating. With mindful care, your Velmora pieces will remain beautiful for generations."
      ]
    },
    2: {
      title: "The Art of Layering Necklaces",
      date: "MAY 2026",
      readTime: "6 min",
      content: [
        "Layering necklaces is an art form that allows you to express your personal style while creating visual dimension. The key is balance and intention.",
        "Start with a foundation piece — a delicate chain that sits close to the collarbone. This becomes your base layer. Add a second piece that falls 2-3 inches lower, perhaps with a small pendant or charm.",
        "For a third layer, choose something with more presence — a longer chain or a piece with a statement element. The contrast in lengths creates movement and interest.",
        "Mix metals thoughtfully. While all-gold or all-silver creates cohesion, combining warm and cool tones can add unexpected sophistication when done with restraint.",
        "Consider the occasion. Daytime calls for lighter, more delicate combinations. Evening allows for bolder statements with more substantial pieces. Your jewelry should feel like an extension of you, not a costume."
      ]
    },
    3: {
      title: "Why We Choose 18K Gold Plating",
      date: "APRIL 2026",
      readTime: "5 min",
      content: [
        "The distinction between fine and demi-fine jewelry matters, and at Velmora, we believe in transparency about our materials and methods.",
        "18K gold plating means we apply a generous layer of 75% pure gold over a base of hypoallergenic brass. This is significantly thicker than the industry standard, which often uses 14K or less with minimal thickness.",
        "The result is jewelry that feels substantial, looks rich, and wears beautifully over time. Our plating process involves multiple layers and hand-finishing to ensure even coverage and lasting color.",
        "We choose this approach because it makes beautiful, high-quality jewelry accessible. Solid 18K gold at our price point would be impossible, but demi-fine pieces that look and feel precious are within reach.",
        "Every piece is nickel-free and hypoallergenic. We test for skin compatibility and stand behind our materials. This is jewelry meant to be worn daily, not stored away for special occasions."
      ]
    },
    4: {
      title: "Gifting Jewelry: A Quiet Gesture",
      date: "MARCH 2026",
      readTime: "3 min",
      content: [
        "There is something deeply personal about giving jewelry. Unlike other gifts, it is worn close to the body, becoming part of someone's daily life and identity.",
        "When choosing a gift, consider the recipient's everyday style rather than what might seem impressive. A simple, well-made piece they will reach for constantly is more meaningful than something ornate they save for special occasions.",
        "Presentation matters. Our signature velvet boxes and the option for a handwritten note transform the unboxing into a moment of quiet ceremony.",
        "Jewelry as a gift says: I see you. I thought of you. This is something beautiful for you to carry with you. It requires no explanation, only appreciation.",
        "Whether for a milestone or simply because, the right piece becomes a keepsake — a small, tangible reminder of connection that lasts far beyond the moment it was given."
      ]
    }
  };

  const article = articles[id] || articles[1];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link to="/journal" className="text-sm tracking-[1.5px] text-[#C5A46E] hover:text-[#B08F5A] mb-8 inline-block">
        ← BACK TO JOURNAL
      </Link>

      <div className="flex items-center gap-3 text-xs tracking-[1.5px] text-[#9A9590] mb-4">
        <span>{article.date}</span>
        <span>·</span>
        <span>{article.readTime}</span>
      </div>

      <h1 className="font-serif text-4xl tracking-[1px] mb-10">{article.title}</h1>

      <div className="prose prose-lg max-w-none">
        {article.content.map((paragraph, index) => (
          <p key={index} className="text-[#4A4640] leading-relaxed mb-6 text-[15px]">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-[#EDE9E3]">
        <p className="text-sm text-[#4A4640] mb-4">Share this story</p>
        <div className="flex gap-6 text-sm tracking-[1px] text-[#C5A46E]">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B08F5A]">INSTAGRAM</a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B08F5A]">PINTEREST</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B08F5A]">TWITTER</a>
        </div>
      </div>

      <div className="mt-12">
        <Link to="/shop" className="inline-block border border-[#C5A46E] text-[#C5A46E] px-8 py-3 text-sm tracking-[1.5px] hover:bg-[#C5A46E] hover:text-[#0A0806] transition-colors">
          SHOP THE COLLECTION
        </Link>
      </div>
    </div>
  );
};

export default JournalDetail;
