import { useParams, Link } from 'react-router-dom';
import ImageLoader from '@/components/ImageLoader';

const posts = {
  'how-to-layer-necklaces': {
    title: 'How to Layer Necklaces Like an Editor',
    date: 'June 18, 2026',
    query: 'gold layered necklaces editorial close-up warm lighting jewelry styling',
    content: [
      'Layering necklaces is an art, but it does not have to be complicated. The secret is to combine three lengths: a short choker, a mid-length pendant, and a longer chain. This creates a natural cascade that draws the eye without tangling.',
      'Start with the shortest piece close to the collarbone. A simple huggie-style chain or a delicate gold pendant works beautifully. Then add a medium chain with a small charm for contrast. Finish with a longer, finer chain that falls near the sternum.',
      'Keep metals consistent for a polished look — all gold or all silver. If you want to mix, make one metal dominant and use the other as a single accent. And remember: odd numbers tend to look more effortless than even ones.',
    ],
  },
  'demi-fine-guide': {
    title: 'What Is Demi-Fine Jewelry?',
    date: 'June 10, 2026',
    query: 'gold earrings rings flat lay neutral background editorial jewelry',
    content: [
      'Demi-fine jewelry sits between costume and fine jewelry. It is typically made from sterling silver, brass, or stainless steel and finished with a thick layer of gold or platinum plating. The result is a piece that looks luxurious but is priced for everyday wear.',
      'At Velmora, we use 18k gold plating over hypoallergenic brass. Our pieces are water-resistant and designed to keep their warmth through daily wear. They are perfect for building a capsule jewelry wardrobe you never have to take off.',
      'Demi-fine is ideal for gifting and self-purchase. It carries the visual weight of fine jewelry without the anxiety of wearing something irreplaceable.',
    ],
  },
  'gift-guide': {
    title: 'The Modern Gifting Guide',
    date: 'May 28, 2026',
    query: 'gold jewelry gift box ribbon warm editorial lifestyle',
    content: [
      'Jewelry is one of the most personal gifts you can give. The key is to match the piece to the person, not the trend. For the minimalist, choose a single sculptural hoop or a slim chain. For the maximalist, layer two or three pieces in a gift set.',
      'Huggies make an excellent first piece — they are comfortable, versatile, and feel instantly elevated. Necklaces with adjustable lengths are also a safe bet because they suit any neckline.',
      'Every Velmora order arrives in our signature gift packaging, complete with a hand-written note option. Because the best gifts are the ones that feel considered.',
    ],
  },
};

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function JournalPost() {
  const { postId } = useParams();
  const post = posts[postId];

  if (!post) {
    return (
      <section className="min-h-[60vh] pt-32 pb-24 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="font-serif text-4xl text-espresso mb-4">Post Not Found</h1>
          <Link to="/journal" className="text-gold text-xs uppercase tracking-extra-wide hover:underline">
            Back to Journal
          </Link>
        </div>
      </section>
    );
  }

  return (
    <ImageLoader>
      <article className="bg-cream">
        <header className="pt-32 pb-12 lg:pb-16 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs uppercase tracking-extra-wide text-gold mb-4">{post.date}</p>
            <h1 id="journal-post-title" className="font-serif text-4xl lg:text-5xl text-espresso leading-[1.05]">
              {post.title}
            </h1>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="relative aspect-[16/9] overflow-hidden bg-sand mb-12">
            <img
              data-strk-img-id={`journal-${postId}`}
              data-strk-img={post.query}
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src={PLACEHOLDER}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div id="journal-post-body" className="space-y-6">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-taupe leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="sr-only">{post.query}</div>

          <Link
            to="/journal"
            className="inline-flex items-center gap-2 mt-12 text-xs uppercase tracking-extra-wide text-espresso border-b border-espresso pb-1 hover:text-gold hover:border-gold transition-colors"
          >
            Back to Journal
          </Link>
        </div>
      </article>
    </ImageLoader>
  );
}
