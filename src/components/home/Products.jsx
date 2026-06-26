import { forwardRef } from 'react';

const Products = forwardRef((props, ref) => {
  const products = [
    {
      id: 'double-folding-pro',
      title: 'Artitect Pro Double Folder',
      description: 'The flagship double folding machine designed for advanced architectural profiles and large-scale manufacturing. Perfect for complex sheet metal operations.',
      imgId: 'product-pro-double-2a',
      titleId: 'prod-title-1',
      descId: 'prod-desc-1'
    },
    {
      id: 'compact-metal-folder',
      title: 'Artitect Compact Folder',
      description: 'A space-saving metal folder without compromises. Bring industrial strength folding capabilities to smaller shops and on-site applications.',
      imgId: 'product-compact-2a',
      titleId: 'prod-title-2',
      descId: 'prod-desc-2'
    },
    {
      id: 'heavy-duty-sheet',
      title: 'Artitect Titan Max',
      description: 'Built for extreme gauge capacities. This heavy-duty sheet metal folding machine effortlessly bends thick industrial materials with ease.',
      imgId: 'product-titan-2a',
      titleId: 'prod-title-3',
      descId: 'prod-desc-3'
    }
  ];

  return (
    <section id="products" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Explore Our Machines
            </h2>
            <p id="products-subtitle" className="text-lg text-slate-600">
              Discover our range of elegant, heavy-duty metal folding machinery. Designed to push the boundaries of what is possible in metal shaping.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700">
            Request Product Catalog &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <article key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-slate-100">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <h3 id={product.titleId} className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                {product.title}
              </h3>
              <p id={product.descId} className="text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

Products.displayName = 'Products';

export default Products;