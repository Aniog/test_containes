import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Collections = () => {
  // Group products into editorial collections
  const collections = [
    {
      id: 'everyday',
      title: 'The Everyday Edit',
      description: 'Timeless pieces designed to be worn daily. Lightweight, versatile, and made for real life.',
      products: products.filter((p) => ['huggies', 'earrings'].includes(p.category)).slice(0, 3),
    },
    {
      id: 'statement',
      title: 'Statement & Celebration',
      description: 'Bold silhouettes and sparkling details for moments that deserve to be remembered.',
      products: products.filter((p) => ['necklaces', 'sets'].includes(p.category)).slice(0, 3),
    },
    {
      id: 'gifting',
      title: 'Gifting',
      description: 'Thoughtfully curated sets and signature pieces, beautifully packaged for the ones you love.',
      products: [products.find((p) => p.id === 'royal-heirloom-set')].filter(Boolean),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[0.2em] text-xs text-velmora-gold mb-2">Curated with Intention</div>
          <h1 className="text-4xl md:text-5xl mb-4">Collections</h1>
          <p className="text-velmora-text-muted max-w-md mx-auto">
            Thoughtfully grouped pieces for every chapter of your story.
          </p>
        </div>

        {collections.map((collection, idx) => (
          <div key={collection.id} className="mb-16 last:mb-0">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 gap-2">
              <div>
                <h2 className="text-2xl md:text-3xl">{collection.title}</h2>
                <p className="text-velmora-text-muted mt-1 max-w-lg">{collection.description}</p>
              </div>
              <Link 
                to={`/shop?category=${collection.products[0]?.category || 'all'}`}
                className="text-sm uppercase tracking-[0.08em] hover:text-velmora-gold whitespace-nowrap"
              >
                Shop Collection →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {collection.products.map((product) => (
                <Link 
                  key={product.id} 
                  to={`/product/${product.id}`}
                  className="group block"
                >
                  <div className="aspect-[4/3] bg-velmora-bg-alt mb-3 overflow-hidden">
                    <div 
                      className="w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
                      style={{
                        background: idx === 0 
                          ? 'linear-gradient(135deg, #E8DFD0 0%, #B8976A 100%)'
                          : idx === 1
                          ? 'linear-gradient(135deg, #D4C5A8 0%, #9A7A52 100%)'
                          : 'linear-gradient(135deg, #F2EDE6 0%, #B8976A 100%)',
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center px-4">
                          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/30" />
                          <div className="text-xs text-velmora-text-muted tracking-[0.1em] uppercase">
                            {product.shortDescription}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-name text-sm tracking-[0.08em] group-hover:text-velmora-gold transition-colors">
                    {product.name}
                  </div>
                  <div className="text-sm text-velmora-gold mt-0.5">${product.price}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
