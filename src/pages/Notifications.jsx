import { Bell } from 'lucide-react';
import { suggestedUsers } from '../data/mockData';
import { formatDistanceToNow } from 'date-fns';
import { zhCN } from 'date-fns/locale';

const notifications = [
  { id: 1, user: suggestedUsers[0], action: '点赞了你的动态', time: '2026-04-23T08:00:00Z', type: 'like' },
  { id: 2, user: suggestedUsers[1], action: '开始关注你', time: '2026-04-23T07:30:00Z', type: 'follow' },
  { id: 3, user: suggestedUsers[2], action: '评论了你的动态：「太美了！」', time: '2026-04-22T22:00:00Z', type: 'comment' },
  { id: 4, user: suggestedUsers[3], action: '转发了你的动态', time: '2026-04-22T18:00:00Z', type: 'share' },
  { id: 5, user: suggestedUsers[0], action: '收藏了你的动态', time: '2026-04-22T14:00:00Z', type: 'bookmark' },
];

const typeColors = {
  like: 'text-pink-400',
  follow: 'text-purple-400',
  comment: 'text-sky-400',
  share: 'text-emerald-400',
  bookmark: 'text-amber-400',
};

export default function Notifications() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass rounded-2xl px-5 py-4 mb-4 flex items-center gap-2">
        <Bell size={16} className="text-purple-400" />
        <span className="text-sm font-semibold text-white">通知</span>
        <span className="ml-auto text-xs text-white/30">{notifications.length} 条新通知</span>
      </div>

      <div className="space-y-2">
        {notifications.map(n => (
          <div key={n.id} className="glass-card rounded-2xl px-5 py-4 flex items-center gap-4">
            <img
              src={n.user.avatar}
              alt={n.user.name}
              className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0 ring-2 ring-white/10"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white/90">
                <span className="font-semibold">{n.user.name}</span>
                {' '}
                <span className={typeColors[n.type]}>{n.action}</span>
              </p>
              <p className="text-xs text-white/30 mt-0.5">
                {formatDistanceToNow(new Date(n.time), { addSuffix: true, locale: zhCN })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
