import React from 'react';
import { Coffee, Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Coffee className="w-8 h-8 text-amber-400 mr-2" />
              <span className="text-xl font-bold">香浓咖啡屋</span>
            </div>
            <p className="text-gray-300 mb-4">
              自2010年成立以来，我们一直致力于为咖啡爱好者提供最优质的咖啡体验。
              每一杯咖啡都承载着我们对品质的坚持和对顾客的用心。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  首页
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  产品
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  关于我们
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  联系我们
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系信息</h3>
            <ul className="space-y-2 text-gray-300">
              <li>北京市朝阳区咖啡街123号</li>
              <li>电话: +86 138-0000-0000</li>
              <li>邮箱: info@coffeehouse.com</li>
              <li>营业时间: 7:00 - 22:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} 香浓咖啡屋. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;