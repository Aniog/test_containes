import { Instagram, Facebook, Mail, Phone, MapPin, Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter */}
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">
            Únete a nuestra comunidad creativa
          </h3>
          <p className="text-white/80 mb-6 text-sm">
            Recibe novedades, ofertas exclusivas y tips de estilo directamente en tu correo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-5 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white text-sm"
            />
            <button className="bg-white text-rose-500 px-6 py-3 rounded-full font-bold text-sm hover:bg-rose-50 transition-all whitespace-nowrap">
              Suscribirme ✨
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-purple-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-white">
                Luna<span className="text-rose-400">Creativa</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Accesorios únicos hechos a mano con amor y materiales naturales. Cada pieza cuenta una historia especial.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram className="w-4 h-4" />, label: 'Instagram' },
                { icon: <Facebook className="w-4 h-4" />, label: 'Facebook' },
              ].map((social) => (
                <button
                  key={social.label}
                  className="w-9 h-9 bg-gray-800 hover:bg-rose-500 rounded-full flex items-center justify-center transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Tienda</h4>
            <ul className="space-y-2.5">
              {['Pulseras', 'Collares', 'Pendientes', 'Anillos', 'Bolsos', 'Novedades', 'Ofertas'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-gray-400 hover:text-rose-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Ayuda</h4>
            <ul className="space-y-2.5">
              {['Sobre Nosotras', 'Cómo Comprar', 'Envíos y Devoluciones', 'Preguntas Frecuentes', 'Cuidado de Joyas', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-rose-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Contacto</h4>
            <ul className="space-y-3">
              {[
                { icon: <Mail className="w-4 h-4 shrink-0" />, text: 'hola@lunacreativa.com' },
                { icon: <Phone className="w-4 h-4 shrink-0" />, text: '+34 612 345 678' },
                { icon: <MapPin className="w-4 h-4 shrink-0" />, text: 'Madrid, España' },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="text-rose-400">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-gray-800 rounded-xl">
              <p className="text-xs text-gray-400 mb-1">Horario de atención</p>
              <p className="text-sm text-white font-medium">Lun - Vie: 9:00 - 18:00</p>
              <p className="text-xs text-gray-400 mt-1">Respuesta en menos de 24h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2026 LunaCreativa. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> en España
          </p>
          <div className="flex gap-4">
            {['Privacidad', 'Términos', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-xs text-gray-500 hover:text-rose-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
