import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProductsWeSource = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        try {
            if (strkImgConfig) {
                return ImageHelper.loadImages(strkImgConfig, containerRef.current);
            }
        } catch (e) {
            console.log('ImageHelper config not found yet');
        }
    }, []);

    const categories = [
        {
            id: 'consumer-electronics',
            title: 'Consumer Electronics',
            description: 'Smart home devices, audio equipment, wearable tech, and mobile accessories. We work with specialized electronics manufacturers in Shenzhen and Dongguan.',
            items: ['Smartwatches & Fitness Trackers', 'TWS Earbuds & Headphones', 'Power Banks & Chargers', 'Smart Home Gadgets']
        },
        {
            id: 'home-garden',
            title: 'Home & Garden',
            description: 'Furniture, decor, kitchenware, and outdoor living products. We source from established hubs in Guangdong and Zhejiang provinces.',
            items: ['Kitchen Appliances & Tools', 'Indoor & Outdoor Furniture', 'Home Decor & Lighting', 'Storage & Organization']
        },
        {
            id: 'apparel-textiles',
            title: 'Apparel & Textiles',
            description: 'Clothing, activewear, bags, and fashion accessories. We focus on factories with strong quality control and ethical manufacturing practices.',
            items: ['Activewear & Athleisure', 'Bags & Backpacks', 'Footwear', 'Home Textiles & Bedding']
        },
        {
            id: 'toys-baby',
            title: 'Toys & Baby Products',
            description: 'Safety is paramount. We only source from factories capable of meeting strict international standards (CE, ASTM, CPC, etc.).',
            items: ['Educational Toys', 'Plush Toys', 'Baby Care & Feeding', 'Nursery Furniture']
        },
        {
            id: 'industrial-hardware',
            title: 'Industrial & Hardware',
            description: 'Tools, machinery parts, building materials, and packaging. We verify production capabilities for precise specifications.',
            items: ['Hand & Power Tools', 'Custom Metal Parts (CNC/Casting)', 'Building Materials', 'Custom Packaging Solutions']
        },
        {
            id: 'pet-supplies',
            title: 'Pet Supplies',
            description: 'A growing category. We find reliable suppliers for pet toys, grooming products, and accessories.',
            items: ['Pet Beds & Furniture', 'Interactive Pet Toys', 'Grooming Tools', 'Collars, Leashes & Harnesses']
        }
    ];

  return (
    <div ref={containerRef} className="pb-20">
      {/* Page Header */}
      <div className="bg-secondary py-16 text-center text-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Products We Source</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">We have experience sourcing across a wide range of industries. Don't see your category? Just ask us.</p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                  <div key={category.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                      <div className="h-48 w-full bg-slate-100 relative">
                           <img 
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                alt={category.title}
                                className="w-full h-full object-cover"
                                data-strk-img-id={`cat-img-${category.id}`}
                                data-strk-img={`[cat-title-${category.id}] manufacturing products`}
                                data-strk-img-ratio="4x3"
                                data-strk-img-width="600"
                            />
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                          <h2 id={`cat-title-${category.id}`} className="text-2xl font-bold text-secondary mb-3">{category.title}</h2>
                          <p className="text-slate-600 mb-6 flex-grow">{category.description}</p>
                          <div className="bg-muted p-4 rounded-lg">
                              <h3 className="text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wider">Commonly Sourced:</h3>
                              <ul className="text-sm text-slate-600 space-y-1">
                                  {category.items.map((item, idx) => (
                                      <li key={idx} className="flex items-center">
                                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                                          {item}
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* Custom Request CTA */}
       <div className="container mx-auto px-4">
           <div className="bg-primary text-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
               <h2 className="text-3xl font-bold mb-4">Looking for something specific?</h2>
               <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">Our sourcing network extends far beyond these categories. Let us know what you need, and we'll find the right factory for you.</p>
               <Button asChild size="lg" className="bg-white text-primary hover:bg-slate-100 text-lg px-8">
                <Link to="/contact">Send Custom Request</Link>
              </Button>
           </div>
       </div>

    </div>
  );
};

export default ProductsWeSource;