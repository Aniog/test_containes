import React from 'react'
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">书香小筑</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              专注于为读者提供优质图书的个性化书店。我们精心挑选每一本书，致力于传播知识与文化，让阅读成为生活的美好体验。
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>contact@bookstore.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  首页
                </a>
              </li>
              <li>
                <a href="/books" className="text-gray-300 hover:text-white transition-colors">
                  图书浏览
                </a>
              </li>
              <li>
                <a href="/categories" className="text-gray-300 hover:text-white transition-colors">
                  图书分类
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  关于我们
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">热门分类</h3>
            <ul className="space-y-2">
              <li>
                <a href="/books?category=文学" className="text-gray-300 hover:text-white transition-colors">
                  文学
                </a>
              </li>
              <li>
                <a href="/books?category=历史" className="text-gray-300 hover:text-white transition-colors">
                  历史
                </a>
              </li>
              <li>
                <a href="/books?category=哲学" className="text-gray-300 hover:text-white transition-colors">
                  哲学
                </a>
              </li>
              <li>
                <a href="/books?category=科学" className="text-gray-300 hover:text-white transition-colors">
                  科学
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 书香小筑. 保留所有权利.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                隐私政策
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                服务条款
              </a>
              <a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                联系我们
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer