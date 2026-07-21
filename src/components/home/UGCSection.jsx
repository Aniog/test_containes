import { ugcItems, products } from '@/data/products'

const productImageMap = {
  'Golden Sphere Huggies': 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&auto=format',
  'Vivid Aura Jewels': 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&auto=format',
  'Royal Heirloom Set': 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&auto=format',
  'Amber Lace Earrings': 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&auto=format',
  'Majestic Flora Nectar': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format',
}

export default function UGCSection() {
  return (
    <section className="py-16 md:py-24 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="section-subtitle mb-3">As Seen On You</p>
          <h2 className="section-title">Styled by Our Community</h2>
        </div>

        <div className="overflow-x-auto -mx-4 md:-mx-8 px-4 md:px-8 pb-4">
          <div className="flex gap-4 min-w-max">
            {ugcItems.map((item) => (
              <div
                key={item.id}
                className="relative w-40 md:w-56 aspect-[9/16] rounded-sm overflow-hidden flex-shrink-0 group cursor-pointer"
              >
                <img
                  src={productImageMap[item.product] || productImageMap['Golden Sphere Huggies']}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <p className="text-cream text-xs md:text-sm font-serif italic leading-snug line-clamp-2">
                    &ldquo;{item.caption}&rdquo;
                  </p>
                  <p className="text-goldLight text-[10px] md:text-xs tracking-wider uppercase font-sans mt-1.5">
                    @velmora
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}