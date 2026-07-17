import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop',
    slug: 'shop',
  },
  {
    title: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=800&h=1000&fit=crop',
    slug: 'shop',
  },
  {
    title: 'Huggies',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop',
    slug: 'shop',
  },
];

export default function CategoryTiles() {
  return (
    <section className="section-padding py-20 md:py-28 bg-warmwhite">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-3">Curated For You</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deepbrown leading-tight">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              to={`/${cat.slug}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-sand/20"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepbrown/60 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="border border-white/60 px-8 py-3">
                  <span className="font-serif text-2xl text-white tracking-[0.08em]">{cat.title}</span>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
                <span className="font-serif text-xl md:text-2xl text-white tracking-[0.08em]">{cat.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
