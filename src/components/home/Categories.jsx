import { Link } from "react-router-dom";

export function Categories() {
  const categories = [
    {
      id: "earrings",
      title: "Earrings",
      href: "/shop?category=earrings",
      imgId: "cat-img-earrings-1a"
    },
    {
      id: "necklaces",
      title: "Necklaces",
      href: "/shop?category=necklaces",
      imgId: "cat-img-necklaces-2b"
    },
    {
      id: "huggies",
      title: "Huggies",
      href: "/shop?category=huggies",
      imgId: "cat-img-huggies-3c"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 id="categories-title" className="font-serif text-4xl mb-12 text-center text-foreground">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {categories.map((category) => (
            <Link key={category.id} to={category.href} className="group relative block aspect-[3/4] overflow-hidden bg-secondary">
              <img
                data-strk-img-id={`cat-${category.id}`}
                data-strk-img={`[cat-title-${category.id}] [categories-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.title}
                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105 text-[10px]"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/90 backdrop-blur-sm px-8 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-center">
                  <h3 id={`cat-title-${category.id}`} className="font-serif text-2xl uppercase tracking-wider text-foreground">
                    {category.title}
                  </h3>
                  <span className="text-xs tracking-widest uppercase mt-2 block hover:text-primary transition-colors">
                    Explore
                  </span>
                </div>
                
                {/* Mobile visible label (hidden on md+) */}
                <h3 className="md:hidden absolute bottom-8 font-serif text-3xl uppercase tracking-wider text-white drop-shadow-md">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
