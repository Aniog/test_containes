import { ArrowRight, Leaf, Heart, Award, Truck } from 'lucide-react';

const PromoBanner = () => {
  return (
    <>
      {/* Features strip */}
      <section className="bg-white py-10 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Truck className="w-6 h-6" />, title: 'Envío Gratis', desc: 'En pedidos +$50', color: 'text-rose-400' },
              { icon: <Leaf className="w-6 h-6" />, title: 'Eco-Friendly', desc: 'Materiales naturales', color: 'text-emerald-500' },
              { icon: <Heart className="w-6 h-6" />, title: 'Hecho a Mano', desc: 'Con amor y dedicación', color: 'text-pink-500' },
              { icon: <Award className="w-6 h-6" />, title: 'Calidad Premium', desc: 'Garantía de satisfacción', color: 'text-amber-500' },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-4 group">
                <div className={`${item.color} bg-gray-50 p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big promo banner */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Banner 1 */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-400 to-pink-600 p-10 text-white min-h-64 flex flex-col justify-between">
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full" />
              <div className="absolute -right-4 -bottom-8 w-32 h-32 bg-white/10 rounded-full" />
              <div className="relative z-10">
                <span className="text-xs font-bold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full">
                  Oferta Especial
                </span>
                <h3 className="font-display text-3xl lg:text-4xl font-bold mt-4 mb-2 leading-tight">
                  Pulseras<br />Artesanales
                </h3>
                <p className="text-white/80 text-sm mb-6">
                  Hasta 30% de descuento en toda la colección de pulseras boho.
                </p>
                <a
                  href="#pulseras"
                  className="inline-flex items-center gap-2 bg-white text-rose-500 px-6 py-3 rounded-full font-bold text-sm hover:bg-rose-50 transition-all hover:gap-3"
                >
                  Comprar Ahora <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="absolute right-6 bottom-6 text-6xl opacity-30">📿</div>
            </div>

            {/* Banner 2 */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-600 p-10 text-white min-h-64 flex flex-col justify-between">
              <div className="absolute -left-10 -top-10 w-48 h-48 bg-white/10 rounded-full" />
              <div className="absolute -left-4 -bottom-8 w-32 h-32 bg-white/10 rounded-full" />
              <div className="relative z-10">
                <span className="text-xs font-bold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full">
                  Nueva Llegada
                </span>
                <h3 className="font-display text-3xl lg:text-4xl font-bold mt-4 mb-2 leading-tight">
                  Bolsos<br />Creativos
                </h3>
                <p className="text-white/80 text-sm mb-6">
                  Diseños únicos de macramé y tejido artesanal para cada estilo.
                </p>
                <a
                  href="#bolsos"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-bold text-sm hover:bg-purple-50 transition-all hover:gap-3"
                >
                  Descubrir <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="absolute right-6 bottom-6 text-6xl opacity-30">👜</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-rose-400 font-semibold tracking-widest uppercase text-sm mb-3">Opiniones</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-800">
              Lo que dicen nuestras clientas
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'María García',
                avatar: 'MG',
                text: 'Las pulseras son increíbles, exactamente como en las fotos. La calidad es excelente y llegaron muy bien empaquetadas. ¡Ya hice mi segundo pedido!',
                rating: 5,
                product: 'Pulsera Boho Flores',
                color: 'bg-rose-100 text-rose-600',
              },
              {
                name: 'Laura Martínez',
                avatar: 'LM',
                text: 'El collar de perlas naturales es una joya. Recibí muchos cumplidos el primer día que lo usé. El servicio al cliente también fue muy atento.',
                rating: 5,
                product: 'Collar Perlas Naturales',
                color: 'bg-purple-100 text-purple-600',
              },
              {
                name: 'Ana Rodríguez',
                avatar: 'AR',
                text: 'Me encanta el bolso de macramé, es único y muy resistente. Se nota que está hecho con mucho cuidado. Definitivamente volvería a comprar.',
                rating: 5,
                product: 'Bolso Macramé Artesanal',
                color: 'bg-amber-100 text-amber-600',
              },
            ].map((review) => (
              <div key={review.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center font-bold text-sm`}>
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.product}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PromoBanner;
