import { useState } from 'react';
import Stories from '../components/social/Stories';
import PostCard from '../components/social/PostCard';
import ProfileSidebar from '../components/social/ProfileSidebar';
import RightSidebar from '../components/social/RightSidebar';
import { Image, Smile, Hash, Send } from 'lucide-react';

const INITIAL_POSTS = [
  {
    id: 1, author: '晓雨', time: '5分钟前', location: '上海外滩',
    text: '今天的外滩日落真的太美了 🌅 每次来都有不同的感受，城市的光影在水面上跳动，像是一幅流动的画卷。',
    tags: ['上海', '日落', '城市摄影'],
    likes: 1284, comments: 47, shares: 23,
    hasImage: true, hasStory: true, emoji: '🌅', imgCaption: '外滩日落',
    commentList: [
      { user: '阿明', text: '太美了！下次带我一起去！' },
      { user: '小林', text: '这个角度拍得绝了 📸' },
    ],
  },
  {
    id: 2, author: '阿明', time: '32分钟前',
    text: '新发现了一家超棒的咖啡馆 ☕ 环境超级好，咖啡也很香，最重要的是WiFi超快，以后就在这里办公了哈哈',
    tags: ['咖啡', '生活方式', '探店'],
    likes: 892, comments: 31, shares: 8,
    hasImage: true, hasStory: false, emoji: '☕', imgCaption: '隐秘咖啡馆', liked: true,
    commentList: [
      { user: '思思', text: '在哪里！快告诉我地址！' },
      { user: '晓雨', text: '看起来好有氛围感～' },
    ],
  },
  {
    id: 3, author: '小林', time: '1小时前', location: '杭州西湖',
    text: '西湖的春天，烟雨蒙蒙，柳絮飘飘 🌿 "欲把西湖比西子，淡妆浓抹总相宜" 古人诚不欺我',
    tags: ['杭州', '西湖', '旅行', '春天'],
    likes: 2156, comments: 89, shares: 156,
    hasImage: true, hasStory: true, emoji: '🌿', imgCaption: '西湖春色', verified: true,
    commentList: [
      { user: '大伟', text: '好想去！已经加入旅行清单了' },
      { user: '欣欣', text: '这首诗用得太妙了！' },
    ],
  },
  {
    id: 4, author: '思思', time: '2小时前',
    text: '今天尝试了新的插画风格，感觉还不错！创作的过程真的很治愈 🎨 分享给大家，希望你们喜欢～',
    tags: ['插画', '创意设计', '艺术'],
    likes: 3421, comments: 124, shares: 287,
    hasImage: true, hasStory: false, emoji: '🎨', imgCaption: '原创插画', verified: true,
    commentList: [
      { user: '阿明', text: '太厉害了！风格很独特！' },
      { user: '小林', text: '可以出教程吗？想学！' },
    ],
  },
  {
    id: 5, author: '大伟', time: '3小时前', location: '成都',
    text: '成都的火锅，永远的神 🌶️ 麻辣鲜香，一口下去整个人都暖了。冬天来成都，就是要这样！',
    tags: ['成都', '火锅', '美食', '旅行'],
    likes: 5678, comments: 203, shares: 89,
    hasImage: true, hasStory: true, emoji: '🌶️', imgCaption: '成都火锅',
    commentList: [
      { user: '思思', text: '我要去！！！' },
      { user: '晓雨', text: '流口水了...' },
    ],
  },
];

export default function Social() {
  const [posts, setPosts]     = useState(INITIAL_POSTS);
  const [draft, setDraft]     = useState('');

  const publish = () => {
    if (!draft.trim()) return;
    setPosts(p => [{
      id: Date.now(), author: '陈晓明', time: '刚刚',
      text: draft, tags: [], likes: 0, comments: 0, shares: 0,
      hasImage: false, hasStory: false,
    }, ...p]);
    setDraft('');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pt-[72px] pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-[256px_1fr_240px] gap-4">

        {/* Left */}
        <aside className="hidden lg:block">
          <div className="sticky top-[72px]"><ProfileSidebar /></div>
        </aside>

        {/* Feed */}
        <main className="space-y-4 min-w-0">
          <Stories />

          {/* Compose */}
          <div className="lg-card rounded-2xl p-4">
            <div className="flex gap-3 mb-3">
              <div className="story-ring w-9 h-9 rounded-full flex-shrink-0">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
                  我
                </div>
              </div>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="分享你的精彩瞬间..."
                rows={2}
                className="flex-1 bg-transparent text-white/80 placeholder-white/30 text-sm outline-none resize-none leading-relaxed"
              />
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-white/8">
              <div className="flex gap-1.5">
                {[
                  { icon: Image, color: 'text-violet-400', label: '图片' },
                  { icon: Smile, color: 'text-pink-400',   label: '表情' },
                  { icon: Hash,  color: 'text-amber-400',  label: '话题' },
                ].map(({ icon: Icon, color, label }) => (
                  <button key={label} className="lg-btn-ghost px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 text-xs text-white/55">
                    <Icon className={`w-3.5 h-3.5 ${color}`} />
                    <span className="hidden sm:inline">{label}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={publish}
                disabled={!draft.trim()}
                className="lg-btn-primary px-4 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 disabled:opacity-35 disabled:cursor-not-allowed"
              >
                <Send className="w-3.5 h-3.5" />
                发布
              </button>
            </div>
          </div>

          {posts.map((p, i) => <PostCard key={p.id} post={p} idx={i} />)}
        </main>

        {/* Right */}
        <aside className="hidden lg:block">
          <div className="sticky top-[72px]"><RightSidebar /></div>
        </aside>
      </div>
    </div>
  );
}