import { useState } from 'react';

const imageMap = {
  'vivid-aura-1': 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop',
  'vivid-aura-2': 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop',
  'vivid-aura-3': 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=800&h=1000&fit=crop',
  'flora-nectar-1': 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&h=1000&fit=crop',
  'flora-nectar-2': 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop',
  'flora-nectar-3': 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop',
  'sphere-huggies-1': 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop',
  'sphere-huggies-2': 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop',
  'sphere-huggies-3': 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop',
  'amber-lace-1': 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=800&h=1000&fit=crop',
  'amber-lace-2': 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=800&h=1000&fit=crop',
  'amber-lace-3': 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop',
  'heirloom-1': 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&h=1000&fit=crop',
  'heirloom-2': 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop',
  'heirloom-3': 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=800&h=1000&fit=crop',
};

export default function ProductGallery({ images }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-[3/4] bg-sand/20 rounded-sm overflow-hidden">
        <img
          src={imageMap[images[selected]] || imageMap[images[0]]}
          alt=""
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
      <div className="flex gap-3">
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => setSelected(i)}
            className={`w-16 md:w-20 aspect-square bg-sand/20 rounded-sm overflow-hidden border-2 transition-colors ${
              i === selected ? 'border-gold' : 'border-transparent hover:border-sand'
            }`}
          >
            <img
              src={imageMap[img]}
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
