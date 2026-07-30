import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-fanta-dark text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-fanta-orange to-orange-500 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-black text-3xl md:text-4xl text-white mb-4">
            Ready to Taste the Fun?
          </h2>
          <p className="font-poppins text-orange-100 text-lg mb-8">
            Find Fanta at a store near you or explore all our amazing flavors online.
          </p>
          <a
            href="#flavors"
            className="inline-block bg-white text-fanta-orange font-poppins font-black rounded-full px-10 py-3 hover:bg-orange-50 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Explore All Flavors
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl font-poppins font-black text-fanta-orange">fanta</span>
              <span className="text-3xl">🍊</span>
            </div>
            <p className="font-poppins text-gray-400 leading-relaxed mb-6 max-w-xs">
              Bringing vibrant fruit flavors and sparkling joy to the world since 1940.
              Life's better with a Fanta.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-fanta-orange transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-poppins font-bold text-white mb-4 uppercase tracking-wide text-sm">
              Explore
            </h4>
            <ul className="space-y-3">
              {['Our Flavors', 'Our Story', 'Fun Facts', 'Find a Store'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-poppins text-gray-400 hover:text-fanta-orange transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-bold text-white mb-4 uppercase tracking-wide text-sm">
              Company
            </h4>
            <ul className="space-y-3">
              {['About Fanta', 'Sustainability', 'Press', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-poppins text-gray-400 hover:text-fanta-orange transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-poppins text-gray-500 text-sm">
            © 2024 Fanta. A product of The Coca-Cola Company. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Settings'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-poppins text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
              >
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
