import { Trophy } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-yellow-400 font-black text-lg">
          <Trophy className="w-5 h-5" />
          <span>WORLD CUP</span>
        </div>
        <p className="text-gray-500 text-sm text-center">
          © 2026 足球世界杯资讯站 · 数据仅供参考
        </p>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#history" className="hover:text-yellow-400 transition-colors">历史</a>
          <a href="#champions" className="hover:text-yellow-400 transition-colors">冠军</a>
          <a href="#legends" className="hover:text-yellow-400 transition-colors">传奇</a>
          <a href="#2026" className="hover:text-yellow-400 transition-colors">2026</a>
        </div>
      </div>
    </footer>
  );
}
