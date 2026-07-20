import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { title: "Earrings", slug: "earrings", imgId: "cat-earrings" },
    { title: "Necklaces", slug: "necklaces", imgId: "cat-necklaces" },
    { title: "Huggies", slug: "huggies", imgId: "cat-huggies" },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link 
            key={cat.slug} 
            to={`/shop?category=${cat.title}`}
            className="group relative aspect-[3/4] overflow-hidden bg-surface"
          >
            <div 
              className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110"
              data-strk-bg-id={cat.imgId}
              data-strk-bg={`[cat-title-${cat.slug}] gold jewelry model editorial`}
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative overflow-hidden px-8 py-4">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <h3 id={`cat-title-${cat.slug}`} className="relative z-10 text-white font-serif text-3xl uppercase tracking-[0.2em] group-hover:scale-105 transition-transform duration-500">
                  {cat.title}
                </h3>
              </div>
            </div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 overflow-hidden">
               <span className="block text-white text-[10px] uppercase tracking-[0.3em] font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                 Explore Now
               </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
