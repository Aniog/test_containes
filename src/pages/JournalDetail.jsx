import React from 'react';
import { useParams, Link } from 'react-router-dom';

const JournalDetail = () => {
  const { id } = useParams();

  const articles = {
    1: {
      title: "How to Layer Necklaces Without the Tangle",
      date: "July 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80",
      content: [
        "Layering necklaces is an art form that adds dimension and personality to any outfit. The key is creating visual interest while avoiding the frustration of tangled chains.",
        "Start with varying lengths. A good rule of thumb is to space your necklaces at least 2–3 inches apart. Begin with a delicate chain close to the collarbone, then add a medium length, and finish with a longer pendant if desired.",
        "Mix textures thoughtfully. Combine a fine chain with a slightly bolder link, or pair a smooth pendant with a textured one. The contrast creates depth without overwhelming.",
        "Consider your neckline. A V-neck pairs beautifully with layered chains that follow its shape. A crew neck offers a clean canvas for a mix of lengths.",
        "When storing layered pieces, use a jewelry organizer with separate compartments or hang them individually to prevent tangling. A quick tip: fasten each clasp before putting them away.",
      ],
    },
    2: {
      title: "The Meaning Behind Our Names",
      date: "June 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80",
      content: [
        "Every Velmora piece carries a name that reflects its spirit. We believe jewelry should tell a story, even before it reaches your hands.",
        "Vivid Aura Jewels was named for the way light dances across its crystal accent, creating an aura that feels both modern and timeless. The word 'vivid' speaks to the clarity and life in each facet.",
        "Majestic Flora Nectar draws from the natural world. The floral crystal arrangement evokes nectar-rich blossoms, while 'majestic' honors the quiet grandeur of well-crafted things.",
        "Golden Sphere Huggies celebrates the sculptural dome shape. 'Sphere' references the soft geometry; 'huggies' because they hold the ear gently, like a familiar embrace.",
        "Amber Lace Earrings pays homage to the intricate filigree work that resembles delicate lace, warmed by the golden-amber tone of our plating.",
        "Royal Heirloom Set was designed as a gift-worthy pairing. 'Royal' for its elevated presence; 'heirloom' because we hope it will be passed down, worn, and loved for years.",
      ],
    },
    3: {
      title: "Caring for Gold-Plated Jewelry",
      date: "May 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80",
      content: [
        "With proper care, your Velmora pieces will maintain their beauty for years. Gold plating is durable, but it benefits from mindful habits.",
        "Avoid water, perfume, and lotions. These can accelerate tarnish and dull the finish. Put on your jewelry after applying skincare and fragrance.",
        "Store pieces separately. Use the pouch provided or a soft-lined jewelry box. Keeping chains from touching prevents scratches and tangles.",
        "Clean gently. A soft, dry cloth is usually enough. For deeper cleaning, use mild soap and water, then dry thoroughly. Never use harsh chemicals or ultrasonic cleaners.",
        "Remove before swimming or exercising. Chlorine, sweat, and heat can affect the plating over time.",
        "If you notice tarnish, a jewelry polishing cloth designed for gold will restore shine without removing the plating.",
      ],
    },
    4: {
      title: "The Art of the Gift",
      date: "April 2026",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1200&q=80",
      content: [
        "Choosing jewelry as a gift is an intimate act. You're selecting something that will live against someone's skin, become part of their daily rituals.",
        "Consider the recipient's style. Do they gravitate toward minimal pieces or bolder statements? Our huggies are perfect for everyday wearers; our statement necklaces suit those who love a focal piece.",
        "Think about the occasion. A milestone birthday or anniversary calls for something special like the Royal Heirloom Set. A 'just because' gift might be a single pair of huggies or a delicate ear cuff.",
        "Presentation matters. Our pieces arrive in a velvet-lined gift box, ready to be opened. Add a handwritten note to make it even more personal.",
        "Remember: the best gifts are worn, not saved. Choose something that invites daily joy, not something too precious to touch.",
      ],
    },
  };

  const article = articles[id];

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="font-serif text-3xl mb-4">Article Not Found</h1>
        <p className="text-muted mb-8">The story you're looking for doesn't exist.</p>
        <Link to="/journal" className="velmora-btn velmora-btn-primary">Back to Journal</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <Link 
        to="/journal" 
        className="inline-flex items-center text-sm text-muted hover:text-[var(--velmora-text)] mb-8"
      >
        ← Back to Journal
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-3 text-xs text-muted tracking-[0.1em] mb-4">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl mb-6">{article.title}</h1>
      </div>

      <div className="aspect-[16/9] bg-[var(--velmora-bg-dark)] overflow-hidden mb-12">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-neutral max-w-none">
        {article.content.map((paragraph, index) => (
          <p key={index} className="body-text text-[var(--velmora-text-muted)] mb-6 text-[15px] leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-[var(--velmora-border)]">
        <p className="text-sm text-muted mb-4">Enjoyed this story?</p>
        <Link to="/journal" className="velmora-btn velmora-btn-outline inline-block">
          Read More Stories
        </Link>
      </div>
    </div>
  );
};

export default JournalDetail;
