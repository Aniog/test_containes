import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Stylist',
    excerpt: 'Master the art of the curated neck stack with our guide to mixing lengths, textures, and pendants.',
    date: 'July 10, 2026',
    image: 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=600&q=80',
  },
  {
    id: 2,
    title: 'The Rise of Demi-Fine: Why Gold-Plated Is Having a Moment',
    excerpt: 'Demi-fine jewelry bridges the gap between fast fashion and luxury. Here is why it is the smartest investment for your jewelry box.',
    date: 'June 28, 2026',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
  },
  {
    id: 3,
    title: 'Caring for Gold-Plated Jewelry: A Complete Guide',
    excerpt: 'Keep your pieces looking luminous for years with these simple care rituals from our atelier.',
    date: 'June 15, 2026',
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=600&q=80',
  },
  {
    id: 4,
    title: 'The Perfect Gift: A Velmora Guide to Gifting Jewelry',
    excerpt: 'From birthdays to anniversaries, find the piece that says everything without a word.',
    date: 'May 30, 2026',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
  },
];

export default function JournalPage() {
  return (
    <div className="bg-base min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h1 className="section-heading text-center">The Journal</h1>
        <p className="text-text-secondary text-sm text-center mt-3 max-w-md mx-auto">
          Stories of style, craftsmanship, and the art of adornment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {articles.map((article) => (
            <Link
              key={article.id}
              to="#"
              className="group flex flex-col md:flex-row gap-6 bg-surface rounded-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="md:w-48 flex-shrink-0 aspect-[4/3] md:aspect-square overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 p-5 md:p-6 md:pl-0 flex flex-col justify-center">
                <p className="text-[10px] uppercase tracking-wider text-accent font-medium">
                  {article.date}
                </p>
                <h3 className="font-serif text-lg font-medium mt-2 leading-snug group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                <span className="text-xs font-medium text-accent mt-3 inline-block group-hover:underline">
                  Read More &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
