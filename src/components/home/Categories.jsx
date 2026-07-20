import { Link } from 'react-router-dom';

export default function Categories() {
  const categories = [
    {
      id: 'earrings',
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1628151834241-11d2d3a3c1f1?q=80&w=1964&auto=format&fit=crop'
    },
    {
      id: 'necklaces',
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1599643477873-1ef99464e86e?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'huggies',
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1635767798638-3e25287f3e8b?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden block"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute inset-x-0 bottom-0 p-8 flex justify-center">
                <h3 className="font-heading text-3xl text-white tracking-widest uppercase relative overflow-hidden">
                  {category.name}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}