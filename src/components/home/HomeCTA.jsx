import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function HomeCTA() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-gold font-semibold text-sm uppercase tracking-widest">加入我们</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-navy mt-3 mb-5 leading-tight">
          准备好迎接挑战了吗？
        </h2>
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          无论您是经验丰富的驯犬师，还是刚刚踏上这条路的新手，犬赛联盟都欢迎您的加入。
          报名参赛，与全国最优秀的选手同台竞技！
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="inline-flex items-center justify-center gap-2 bg-navy text-white font-bold px-10 py-4 rounded-xl hover:bg-gold hover:text-navy transition-all shadow-lg text-base"
          >
            立即报名参赛
            <ChevronRight className="w-5 h-5" />
          </Link>
          <Link
            to="/events"
            className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy font-semibold px-10 py-4 rounded-xl hover:bg-navy hover:text-white transition-all text-base"
          >
            浏览赛事日历
          </Link>
        </div>
      </div>
    </section>
  );
}
