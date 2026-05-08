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
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [draft, setDraft] = useState('');

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
    <div style={{ maxWidth: 960, margin: '0 auto', paddingTop: 52 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr 220px' }}>

        {/* Left */}
        <aside style={{ display: 'none' }} className="lg-left">
          <div style={{ position: 'sticky', top: 52, height: 'calc(100vh - 52px)', overflowY: 'auto', padding: '0 16px 16px', scrollbarWidth: 'none' }}>
            <ProfileSidebar />
          </div>
        </aside>

        {/* Feed */}
        <main className="feed-col">
          <Stories />

          {/* Compose */}
          <div className="compose" style={{ padding: '12px 16px' }}>
            <div style={{ display: 'flex', gap: 12 }}>
              <div className="s-ring" style={{ flexShrink: 0 }}>
                <div style={{ width: 34, height: 34, borderRadius: 9999, background: 'rgba(108,92,231,0.14)', color: '#4a3ab0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>我</div>
              </div>
              <div style={{ flex: 1 }}>
                <textarea
                  value={draft}
                  onChange={e => setDraft(e.target.value)}
                  placeholder="分享你的精彩瞬间…"
                  rows={2}
                  className="bare-input"
                  style={{ fontSize: 14, lineHeight: 1.5, marginBottom: 8 }}
                />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: 0, marginLeft: -8 }}>
                    {[
                      { icon: Image, label: '图片', color: '#3ec8a0' },
                      { icon: Smile, label: '表情', color: '#ee60b0' },
                      { icon: Hash,  label: '话题', color: '#6c5ce7' },
                    ].map(({ icon: Icon, label, color }) => (
                      <button key={label} className="act" style={{ fontSize: 12 }}>
                        <Icon size={14} style={{ color }} />
                        <span style={{ color: '#b0a8c8' }}>{label}</span>
                      </button>
                    ))}
                  </div>
                  <button onClick={publish} disabled={!draft.trim()} className="btn-accent" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 16px', fontSize: 12 }}>
                    <Send size={12} />发布
                  </button>
                </div>
              </div>
            </div>
          </div>

          {posts.map((p, i) => <PostCard key={p.id} post={p} idx={i} />)}
        </main>

        {/* Right */}
        <aside style={{ display: 'none' }} className="lg-right">
          <div style={{ position: 'sticky', top: 52, height: 'calc(100vh - 52px)', overflowY: 'auto', padding: '0 16px 16px', scrollbarWidth: 'none' }}>
            <RightSidebar />
          </div>
        </aside>
      </div>
    </div>
  );
}
