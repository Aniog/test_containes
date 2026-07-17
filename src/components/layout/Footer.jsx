import { Trophy, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-white font-black text-xl mb-3">
              <Trophy className="w-5 h-5 text-orange-500" />
              <span>NBA<span className="text-orange-500">专题</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              您的专业NBA资讯平台，提供最新赛事、球队动态和球星资讯。
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">快速导航</h4>
            <div className="flex flex-col gap-2">
              {[['/', '首页'], ['/teams', '球队'], ['/players', '球星'], ['/news', '新闻'], ['/visitors', '访客管理']].map(([to, label]) => (
                <Link key={to} to={to} className="text-gray-400 hover:text-orange-500 text-sm transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">关注我们</h4>
            <div className="flex gap-3">
              {[Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-gray-700 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          © 2026 NBA专题. 保留所有权利。
        </div>
      </div>
    </footer>
  );
}
