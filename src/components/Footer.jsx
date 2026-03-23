import React from 'react';
import { Flower2, Heart, Mail, Github, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Flower2 className="w-8 h-8 text-pink-400" />
              <h3 className="text-2xl font-bold">Tulip Garden</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Sharing the beauty and wonder of tulips with fellow garden enthusiasts. 
              Every bloom is a celebration of nature's artistry.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-gray-400 hover:text-pink-400 transition-colors"
              >
                Tulip Gallery
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-gray-400 hover:text-pink-400 transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Connect With Me</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>tulipgarden@example.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Heart className="w-4 h-4 text-pink-400" />
            <span>© {currentYear} Tulip Garden. Made with love for flower enthusiasts.</span>
            <Heart className="w-4 h-4 text-pink-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;