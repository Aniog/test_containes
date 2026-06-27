import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const collections = [
  {
    id: 'everyday',
    title: 'The Everyday Edit',
    description: 'Timeless staples designed to be worn daily. Delicate enough for layering, strong enough for life.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
    products: ['Golden Sphere Huggies', 'Vivid Aura Jewels'],
  },
  {
    id: 'statement',
    title: 'Statement Pieces',
    description: 'Bold silhouettes and rich textures for evenings, events, and moments that call for something special.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80',
    products: ['Amber Lace Earrings', 'Majestic Flora Nectar'],
  },
  {
    id: 'gifting',
    title: 'Gifting',
    description: 'Thoughtfully curated sets and keepsake boxes. The perfect gift for someone you love — or yourself.',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80',
    products: ['Royal Heirloom Set'],
  },
];

const Collections = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[3px] text-[#BFA46F]">CURATED</span>
          <h1 className="font-serif text-4xl tracking-[1px] mt-2">Collections</h1>
          <p className="text-[#4A463F] mt-3 max-w-md mx-auto">
            Thoughtfully grouped pieces for every chapter of your story.
          </p>
        </div>

        <div className="space-y-16">
          {collections.map((collection, index) => (
            <div 
              key={collection.id} 
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="aspect-[16/11] bg-[#EDE8DF] overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                <h2 className="font-serif text-3xl tracking-[1.5px] mb-4">{collection.title}</h2>
                <p className="text-[#4A463F] leading-relaxed mb-6">{collection.description}</p>
                
                <div className="mb-6">
                  <p className="text-xs tracking-[2px] mb-2 text-[#8A8175]">FEATURED IN THIS COLLECTION</p>
                  <ul className="text-sm space-y-1">
                    {collection.products.map((p, i) => (
                      <li key={i} className="text-[#1C1B18]">• {p}</li>
                    ))}
                  </ul>
                </div>

                <Link to={`/shop?collection=${collection.id}`}>
                  <Button variant="outline">SHOP THIS COLLECTION</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
