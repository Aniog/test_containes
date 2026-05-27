import { Leaf, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const footerLinks = {
  Explore: ['Benefits', 'Nutrition Tips', 'Recipes', 'Testimonials'],
  Resources: ['Meal Planner', 'Calorie Calculator', 'Food Glossary', 'Blog'],
  Company: ['About Us', 'Our Dietitians', 'Careers', 'Contact'],
};

const socials = [
  { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
  { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
  { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
  { icon: <Youtube className="w-5 h-5" />, label: 'YouTube' },
];

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <a href="#" className="flex items-center gap-2 text-white font-extrabold text-xl mb-4">
            <Leaf className="w-6 h-6 text-[#4ade80]" />
            NutriLife
          </a>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Empowering you to make smarter food choices for a longer, healthier, and happier life.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2d7a4f] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">{category}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
        <p>© 2026 NutriLife. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
