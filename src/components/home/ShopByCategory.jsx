import { Link } from "react-router-dom";

export default function ShopByCategory() {
  const categories = [
    {
      id: "cat-earrings",
      title: "Earrings",
      imgKeyword: "elegant gold drop earrings display",
      link: "/shop?category=Earrings"
    },
    {
      id: "cat-necklaces",
      title: "Necklaces",
      imgKeyword: "delicate gold necklace display stand",
      link: "/shop?category=Necklaces"
    },
    {
      id: "cat-huggies",
      title: "Huggies",
      imgKeyword: "chunky gold huggie earrings",
      link: "/shop?category=Huggies"
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <h2 id="category-section-title" className="font-serif text-3xl md:text-4xl text-center text-[#2D2A26] mb-16">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={cat.link}
              className="group relative aspect-square md:aspect-[4/5] overflow-hidden block"
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 z-10" />
              <img
                src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                alt={cat.title}
                data-strk-img-id={`cat-img-${cat.id}`}
                data-strk-img={`[cat-title-${cat.id}] ${cat.imgKeyword}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <h3 
                  id={`cat-title-${cat.id}`}
                  className="font-serif text-3xl text-white tracking-widest uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                >
                  {cat.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
